// _runtime/metro/13146__.js
import _mod13105 from "13105__.js";
import _mod13147 from "13147__.js";
import _mod13154 from "13154__.js";
import _mod13160 from "13160__.js";

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
  scope: _mod13147,
  atrule: _mod13154,
  pseudo: _mod13160,
  node: _mod13105,
};

export default obj;
