/* global describe, it */

import { expect } from 'chai';
import {
  arrayToList, listToArray, prepend, nth,
} from '../index';

describe('index.js', () => {
  it('Expect arrayToList function to return an Object', () => {
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
      const newArray = [];
      for (let length = 0; length < Math.ceil(Math.random() * 10); length++) {
        newArray.push(Math.floor(Math.random() * 1000));
      }
      const result = arrayToList(newArray);
      expect(result).to.be.an.instanceOf(Object);
    }
  });
  it('Expect arrayToList function to return {value: 20, rest: null}}', () => {
    const result = arrayToList([10, 20]);
    expect(result).to.be.eql({ value: 10, rest: { value: 20, rest: null } });
  });
  it('Expect listToArray function to be an inverse function of arrayToList', () => {
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
      const newArray = [];
      for (let length = 0; length < Math.ceil(Math.random() * 10); length++) {
        newArray.push(Math.floor(Math.random() * 1000));
      }
      const result = listToArray(arrayToList(newArray));
      expect(result).to.be.eql(newArray);
    }
  });
  it('Expect arrayToList function to return an Array', () => {
    const result = listToArray({ value: 10, rest: { value: 20, rest: null } });
    expect(result).to.be.an.instanceOf(Array);
  });
  it('Expect prepend function to return an Object', () => {
    const result = prepend(10, prepend(20, null));
    expect(result).to.be.an.instanceOf(Object);
  });
  it('Expect prepend function to return {value: 10, rest: {value: 20, rest: null}}', () => {
    const result = prepend(10, prepend(20, null));
    expect(result).to.be.eql({ value: 10, rest: { value: 20, rest: null } });
  });
  it('Expect nth function to return a Number', () => {
    const result = nth(arrayToList([10, 20, 30]), 1);
    expect(result).to.be.a('Number');
  });
  it('Expect nth function to return 20', () => {
    const result = nth(arrayToList([10, 20, 30]), 1);
    expect(result).to.be.eql(20);
  });
});
