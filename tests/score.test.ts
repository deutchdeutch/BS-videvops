import { calculateNewScore, isNewHighscore } from "../src/ts/score";
describe('Logique du score', () => {
  test('devrait ajouter les points correctement', () => {
    
    expect(calculateNewScore(10,15)).toBe(25);
  });
  test('devarit ne devrait pas permettre un score négatif', ()=>{
   
    expect(calculateNewScore(10,-15)).toBe(0);

  });
});