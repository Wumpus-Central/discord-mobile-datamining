// _runtime/metro/12737__.js
const obj = {
  name: "Value",
  structure: null,
  parse() {
    const element = { type: "Value", loc: null, children: null };
    const sequence = this.readSequence(this.scope.Value);
    element.loc = this.getLocation(this.scanner.tokenStart, this.scanner.tokenStart);
    element.children = sequence;
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  },
};
const obj2 = { children: null };
const items = [[]];
obj2.children = items;
obj.structure = obj2;

export default obj;
