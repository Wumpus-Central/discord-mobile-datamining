// _runtime/metro/16317__.js
import _mod16276 from "16276__.js";
import _mod16318 from "16318__.js";
import _mod16325 from "16325__.js";
import _mod16331 from "16331__.js";

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
  scope: _mod16318,
  atrule: _mod16325,
  pseudo: _mod16331,
  node: _mod16276,
};

export default obj;
