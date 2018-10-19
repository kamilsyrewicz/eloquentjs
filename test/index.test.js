/* global describe, it */

import { expect } from 'chai';
import { reverseArray, reverseArrayInPlace } from '../index';

describe('index.js', () => {
  it('Expect reverseArray function to return ["C", "B", "A"]', () => {
    const result = reverseArray(['A', 'B', 'C']);
    expect(result).to.eql(['C', 'B', 'A']);
  });
  it('Expect reverseArray function to return an array', () => {
    const result = reverseArray(['A', 'B', 'C']);
    expect(result).to.be.an.instanceof(Array);
  });
  it('Expect reverseArrayInPlace function to return [5, 4, 3, 2, 1]', () => {
    const result = reverseArrayInPlace([1, 2, 3, 4, 5]);
    expect(result).to.eql([5, 4, 3, 2, 1]);
  });
  it('Expect reverseArrayInPlace function to overwrite an existing array', () => {
    const newArray = [1, 2, 3, 4, 5];
    reverseArrayInPlace(newArray);
    expect(newArray).to.eql([5, 4, 3, 2, 1]);
  });
});
