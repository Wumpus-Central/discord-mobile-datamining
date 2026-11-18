// _runtime/metro/16326__.js
import _mod16285 from "16285__.js";
import _mod16327 from "16327__.js";
import _mod16334 from "16334__.js";
import _mod16340 from "16340__.js";

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
  scope: _mod16327,
  atrule: _mod16334,
  pseudo: _mod16340,
  node: _mod16285,
};

export default obj;
