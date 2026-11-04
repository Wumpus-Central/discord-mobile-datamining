// _runtime/metro/13147__.js
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
