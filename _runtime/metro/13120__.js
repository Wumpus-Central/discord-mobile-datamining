// === Module 13120: ? ===

// Module 13120
const obj = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.MediaQueryList());
    },
    block() {
      return this.Block(false);
    }
  }
};

export default obj;