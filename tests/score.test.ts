import { calculateNewScore, isNewHighscore } from "../src/ts/score";
describe('Logique du score', () => {
  test('devrait augmenté le score de la valeur ajouté', () => {
    const scoreActuel = 50;
    const pointsAAjouter = 10;
    const resultat = calculateNewScore(scoreActuel, pointsAAjouter);
    expect(resultat).toBe(60);
  });
  test('devarit détecter si un nouveau record est battu', ()=>{
    const score = 120;
    const ancienHighScore = 100; 
    const estBattu = isNewHighscore(score, ancienHighScore);
    expect(estBattu).toBe(true);

  });
});