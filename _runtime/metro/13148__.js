// === Module 13148: ? ===

// Module 13148
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