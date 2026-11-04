// _runtime/metro/13137__.js
import _mod13096 from "13096__.js";
import _mod13138 from "13138__.js";
import _mod13145 from "13145__.js";
import _mod13151 from "13151__.js";

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
  scope: _mod13138,
  atrule: _mod13145,
  pseudo: _mod13151,
  node: _mod13096,
};

export default obj;
