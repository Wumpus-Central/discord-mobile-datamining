// _runtime/metro/13136__.js
import _mod13095 from "13095__.js";
import _mod13137 from "13137__.js";
import _mod13144 from "13144__.js";
import _mod13150 from "13150__.js";

const obj = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(atrule) {
      let StringResult = null;
      if (atrule.atrule) {
        const _String = String;
        StringResult = String(atrule.atrule);
      }
      return this.AtrulePrelude(StringResult);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(true);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value",
  },
  scope: _mod13137,
  atrule: _mod13144,
  pseudo: _mod13150,
  node: _mod13095,
};

export default obj;
