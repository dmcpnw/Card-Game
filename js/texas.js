var player1Hand = [];
var player2Hand = [];

class Card {
  constructor(value, suite) {
    this.value = value;
    this.suite = suite;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  var deckStack = createDeckStack();
  readClickedValue();
});

function clearBoard() { //how can this be streamlined?
  while (p1hand.hasChildNodes()) {
    p1hand.removeChild(p1hand.lastChild);
  }
  while (p2hand.hasChildNodes()) {
    p2hand.removeChild(p2hand.lastChild);
  }
}

//create a deck of cards
function createDeckStack() {
  clearBoard();
  var numberOfDecks = 1; //define the number of 52 card decks in stack.
  var deckStack = [];
  var suitesOptions = ["heart", "spade", "club", "diamond"];
  for (var i = 0; i <= ((numberOfDecks*52) - 1); i++){
    var value = (i%13) +1;
    var suite = suitesOptions[i % 4];
    var card = new Card(value, suite);
    deckStack.push(card);
  }

  var m = deckStack.length, t, j;
  //Using fisher-Yates shuffle...
  while (m) {
    j = Math.floor(Math.random() * m--);
    t = deckStack[m];
    deckStack[m] = deckStack[j];
    deckStack[j] = t;
  }
  player1Hand = dealHand("#p1hand", deckStack);
  player2Hand = dealHand("#p2hand", deckStack);
  return deckStack;
}

//create the ininitial hand:
function dealHand(playerId,deckStack)  {
  var hand = [];
  var cardsInInitialHand = 8;
  for (var i = 0; i < cardsInInitialHand; i++) {
    var dealtCard = deckStack.pop();
    hand.push(dealtCard);
    $(playerId).append("<div>"+dealtCard.value+"</div>");
  }
  console.log("hand single card", hand[1].value);
  return hand;
}

function readClickedValue() {
  $("div").click(function(e){
    var value = $(e.target).text();
    value = parseInt(value, 10);

    console.log(value);
    checkClickedValue(value);
    return value; //is this needed?
  })
}

function checkClickedValue(value) {
  var card = findCardInHand(player2Hand, value);
  console.log("clicked", value);
  // console.log("index var", index);
}

// searches through a given hand and returns the
// first card with the given value.
function findCardInHand(hand, value) {
  for (var i = 0; i < player2Hand.length; i++) {

  }
}
