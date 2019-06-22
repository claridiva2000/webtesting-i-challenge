const { repair, succeed, fail } = require('./enhancer.js');
// test away!

//enhancer.repair should make durability 100

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('restores durability to 100', () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
      expect(repair({ durability: -89 }).durability).toBe(100);
      expect(repair({ durability: 100 }).durability).toBe(100);
      expect(repair({ durability: 0 }).durability).toEqual(100);
    });
  });

  describe('succeed()', () => {
    it('enhancement increases by 1 unless it is already at 20', () => {
      //input
      const item = {
        name: 'The Cloak of Levitation',
        durability: 55,
        enhancement: 4
      };
      //expected outcome
      const expected = {
        name: 'The Cloak of Levitation',
        durability: 100,
        enhancement: 5
      };

      //name of output
      const enhancedItem = succeed(item);

      //assertion
      expect(enhancedItem).toEqual(expected);
    });
  });

  describe('fail()', () => {
    it('enhancement> 17 reduce enhancement by 1 and reduce durability by 10 ', () => {
      //input
      const item = {
        name: 'The Cloak of Levitation',
        durability: 100,
        enhancement: 18
      };
      //expected outcome
      const expected = {
        name: 'The Cloak of Levitation',
        durability: 90,
        enhancement: 17
      };

      //name of output
      const failure = fail(item);

      //assertion
      expect(failure).toEqual(expected);
    });

    it('enhancement< than 17 reduce durability by 10 ', () => {
      //input
      const item = {
        name: 'The Cloak of Levitation',
        durability: 100,
        enhancement: 16
      };
      //expected outcome
      const expected = {
        name: 'The Cloak of Levitation',
        durability: 90,
        enhancement: 16
      };

      //name of output
      const failure = fail(item);

      //assertion
      expect(failure).toEqual(expected);
    });


    it('enhancement< than 15 reduce durability by 10 ', () => {
      //input
      const item = {
        name: 'The Cloak of Levitation',
        durability: 100,
        enhancement: 14
      };
      //expected outcome
      const expected = {
        name: 'The Cloak of Levitation',
        durability: 95,
        enhancement: 14
      };

      //name of output
      const failure = fail(item);

      //assertion
      expect(failure).toEqual(expected);
    });


  });

  it.todo('should have value between 0-100 max for durabiity');
});
