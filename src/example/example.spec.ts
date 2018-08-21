import { Example } from './example';

describe('example describe', () => {
  it('example write should return "example string"', () => {
    const e = new Example();
    expect(e.write()).toBe('example string');
  });
});
