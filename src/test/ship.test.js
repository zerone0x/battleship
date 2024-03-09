// const Ship = require('../modules/ship');

// describe('Ship', () => {
//   let ship;
//   beforeEach(() => {
//     ship = new Ship(3);
//   });
//   test('should create an instance of User', () => {
//     expect(ship).toBeInstanceOf(Ship);
//   });
//   test('should have a length', () => {
//     expect(ship.length).toBe(3);
//   });
//   test('should have a hitTimes', () => {
//     expect(ship.hitTimes).toBe(0);
//   });
//   test('should have a sink', () => {
//     expect(ship.sink).toBe(false);
//   });
//   test('should increment hitTimes', () => {
//     ship.hit();
//     expect(ship.hitTimes).toBe(1);
//   });
//   test('should sink when hit all boats', () => {
//     let ship_len = ship.length
//     while (ship_len) {
//       ship.hit()
//       ship_len--
//     }
//     expect(ship.sink).toBe(true)
//   })
// });
