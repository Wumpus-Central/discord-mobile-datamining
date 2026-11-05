// _runtime/metro/13144__.js
import _mod13103 from "13103__.js";
import _mod13145 from "13145__.js";
import _mod13152 from "13152__.js";
import _mod13158 from "13158__.js";

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
  scope: _mod13145,
  atrule: _mod13152,
  pseudo: _mod13158,
  node: _mod13103,
};

export default obj;
