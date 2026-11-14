// _runtime/metro/13913__.js
import _mod13872 from "13872__.js";
import _mod13914 from "13914__.js";
import _mod13921 from "13921__.js";
import _mod13927 from "13927__.js";

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
  scope: _mod13914,
  atrule: _mod13921,
  pseudo: _mod13927,
  node: _mod13872,
};

export default obj;
