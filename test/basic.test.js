import { expect } from 'chai';

describe('basics: pass and fail', function () {
  it('should return true as 2 + 2 = 4', function () {
    const x = 2;
    const y = 2;
    const sum = 4;
    expect(x + y).to.equal(sum);
  });
});
