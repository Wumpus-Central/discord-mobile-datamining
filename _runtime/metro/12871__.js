// === Module 12871: ? ===

// Module 12871
const obj = {
  name: "Selector",
  structure: null,
  parse() {
    const self = this;
    const sequence = this.readSequence(this.scope.Selector);
    if (null === this.getFirstListNode(sequence)) {
      self.error("Selector is expected");
    }
    const element = { type: "Selector", loc: self.getLocationFromList(sequence), children: sequence };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  }
};
const obj2 = { children: null };
const items = [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]];
obj2.children = items;
obj.structure = obj2;

export default obj;