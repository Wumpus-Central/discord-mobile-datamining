// _runtime/metro/13109__.js
import _mod13068 from "13068__.js";
import _mod13110 from "13110__.js";
import _mod13117 from "13117__.js";
import _mod13123 from "13123__.js";

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
  scope: _mod13110,
  atrule: _mod13117,
  pseudo: _mod13123,
  node: _mod13068,
};

export default obj;
