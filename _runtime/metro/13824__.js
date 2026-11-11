// === Module 13824: ? ===

// Module 13824
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