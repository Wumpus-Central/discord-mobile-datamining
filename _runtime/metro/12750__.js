// _runtime/metro/12750__.js
const obj = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.MediaQueryList());
    },
    block() {
      return this.Block(false);
    },
  },
};

export default obj;
