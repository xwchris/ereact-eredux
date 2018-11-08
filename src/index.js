import EReact from 'ereact';

const storeKey = 'store';

export class Provider extends EReact.Component {
  constructor(props){
    super(props);

    this[storeKey] = this.props[storeKey];
  }

  getChildContext() {
    return {
      [storeKey]: this[storeKey]
    }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

function connectAdvanced({
  mapStateToProps,
  mapDispatchToProps
}) {

  return function wrappedWithConnect(WrappedComponent) {

    const wrappedComponentName = WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component';

    const displayName = `Connect(${wrappedComponentName})`

    class Connect extends Component {
      constructor(props, context) {
        super(props, context);

        this[storeKey] = this.context.store;
      }

      componentDidMount() {
        const store = this[storeKey];
        if (typeof mapStateToProps === 'function') {
          store.subscribe(() => {
            this.forceUpdate();
          });
        }
      }

      getExtraProps() {
        const store = this[storeKey];
        let props = {};

        if (typeof mapStateToProps === 'function') {
          const stateProps = mapStateToProps(store.getState());

          if (typeof stateProps === 'object' && stateProps !== null) {
            props = Object.assign({}, props, stateProps);
          }
        }

        if (typeof mapDispatchToProps === 'function') {
          const dispatchProps = mapDispatchToProps(store.dispatch);

          if (typeof dispatchProps === 'object' && dispatchProps !== null) {
            props = Object.assign({}, props, dispatchProps);
          }
        }

        return props;
      }

      render() {
        const props = this.props;
        const extraProps = this.getExtraProps();

        return createElement(WrappedComponent, { ...props, ...extraProps });
      }
    }

    Connect.displayName = displayName;
    Connect.WrappedComponent = WrappedComponent;

    return Connect;
  }
}

export function connect(
  mapStateToProps,
  mapDispatchToProps,
) {
  return connectAdvanced({
    mapStateToProps,
    mapDispatchToProps
  });
}
