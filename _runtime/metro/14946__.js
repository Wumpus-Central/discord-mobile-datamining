// _runtime/metro/14946__.js
const obj = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.SelectorList());
    },
    block() {
      return this.Block(true);
    },
  },
};

export default obj;
