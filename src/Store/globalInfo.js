export const initialState = {
  userInfo: {
    name: "Julio Lugo",
    email: "julio.lugo.m96@gmail.com",
    country: "Sweden",
    created_at: new Date(),
  },
  cards: [],
};

// ==============================|| UI REDUCER ||============================== //

const globalInfo = (state = initialState, action) => {
  switch (action.type) {
    case "add-card":
      const { cardInfo } = action;
      return {
        ...state,
        cards: [...state.cards, cardInfo],
      };
    case "remove-card":
      const { id } = action;
      const { cards } = state;
      const newCards = cards.filter((card) => card.id !== id);
      return {
        ...state,
        cards: [...newCards],
      };
    default:
      return state;
  }
};

export default globalInfo;
