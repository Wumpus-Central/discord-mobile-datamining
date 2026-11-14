// === Module 13924: ? ===

// Module 13924
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