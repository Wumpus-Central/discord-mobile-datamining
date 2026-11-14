// === Module 13925: ? ===

// Module 13925
const obj = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.SelectorList());
    },
    block() {
      return this.Block(true);
    }
  }
};

export default obj;