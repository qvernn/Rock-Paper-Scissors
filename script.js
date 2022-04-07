function computerPlay() {
    select = ['Rock','Paper','Scissors'];
    compHand = select[Math.floor(Math.random()*select.length)];
    return compHand;
}