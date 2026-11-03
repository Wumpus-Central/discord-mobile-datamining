// _runtime/metro/13054__.js
import _mod13013 from "13013__.js";
import _mod13055 from "13055__.js";
import _mod13062 from "13062__.js";
import _mod13068 from "13068__.js";

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
  scope: _mod13055,
  atrule: _mod13062,
  pseudo: _mod13068,
  node: _mod13013,
};

export default obj;
