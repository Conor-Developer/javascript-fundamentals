const {searchCandies, candies} = require('./searchCandies');

describe('searchCandies', () => {
  it('lists candy starting with "Ma" and cost less than 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
  });

  it('lists candy with "Ma" and cost less than 10', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });

  it('lists candy with "S" and costs less than 10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
  });

  it('lists candy with "S" and costs less than 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
  });

  it('lists candy with "ma" and costs less than 10', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers'])
  });
});
