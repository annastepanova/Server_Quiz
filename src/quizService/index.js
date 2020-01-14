const qBank = [
  {
    question:
      "What is quinoa?",
    answers: ["Flour", "Grain", "Type of nuts", "Type of clothes"],
    correct: "Grain",
    questionId: "01"
  },
  {
    question:
      "What type of dressing is used in avocado and seed salad?",
    answers: ["Lemon basil", "Tahini", "Ranch", "Olive oil"],
    correct: "Lemon basil",
    questionId: "02"
  },
  {
    question:
      "Which ingredient is used in Immune booster juice?",
    answers: ["Apple", "Beet", "Pineapple", "Strawberry"],
    correct: "Apple",
    questionId: "03"
  },
  {
    question: "Which cheese comes with buffalo cauliflower wings?",
    answers: [
      "Feta",
      "Parmesan",
      "Gorgonzola",
      "Cheddar"
    ],
    correct: "Gorgonzola",
    questionId: "04"
  },
  {
    question: "Which wine produced from petite sirah grape?",
    answers: ["Whiteheaven", "Spellbound", "Meiomi", "Flor de Campo"],
    correct: "Spellbound",
    questionId: "05"
  },
  {
    question:
      "What is Grana Padano?",
    answers: [
      "City in Italy",
      "Grape variety",
      "Type of sause",
      "Type of cheese"
    ],
    correct: "Type of cheese",
    questionId: "06"
  },
  {
    question:
      'How are egg benedict cooked?',
    answers: ["Sunny side-up", "Boiled", "Poached", "Scrambled"],
    correct: "Poached",
    questionId: "07"
  },
  {
    question: "Which liquor is added to bloody mary cocktail?",
    answers: ["Gin", "Vodka", "Tequila", "Red wine"],
    correct: "Vodka",
    questionId: "08"
  },
  {
    question:
      "Which side normally comes with curry chicken breast?",
    answers: ["Rice", "Kale", "Sweet potato", "Mashed potato"],
    correct: "Rice",
    questionId: "09"
  },
  {
    question:
      "Which ingredient is NOT found in cappucino?",
    answers: [
      "Whipped cream",
      "Foam",
      "Steamed milk",
      "Espresso"
    ],
    correct: "Whipped cream",
    questionId: "10"
  },

];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

  