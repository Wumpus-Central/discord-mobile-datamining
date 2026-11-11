// _runtime/metro/13824__.js
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
