/* global describe, it */

import { expect } from 'chai';
import { range, sum } from '../index';

describe('index.js', () => {
  it('Expect range function to return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    const result = range(1, 10);
    expect(result).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('Expect range function to return [5, 4, 3, 2]', () => {
    const result = range(5, 2, -1);
    expect(result).to.eql([5, 4, 3, 2]);
  });
  it('Expect range function to return an array', () => {
    const result = range(5, 2, -1);
    expect(result).to.be.an.instanceof(Array);
  });
});
