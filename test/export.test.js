import { Provider, connect } from '../index';
import EReact from 'ereact';

describe('test export', () => {
  test('provider and connect is not undefined', () => {
    expect(Provider).toBeDefined();
    expect(connect).toBeDefined();
  })
})

describe('test jsx', () => {
  test('element is defined', () => {
    const element = <Provider store={{}}><div></div></Provider>
    expect(element).toBeDefined();
  })
})
