// === Module 13066: ? ===

// Module 13066
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