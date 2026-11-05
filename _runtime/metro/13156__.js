// === Module 13156: ? ===

// Module 13156
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