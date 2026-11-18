// _runtime/metro/16338__.js
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
