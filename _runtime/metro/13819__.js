// === Module 13819: ? ===

// Module 13819
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