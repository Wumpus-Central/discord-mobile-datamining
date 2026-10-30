// _runtime/metro/12880__.js
import _mod12839 from "12839__.js";
import _mod12881 from "12881__.js";
import _mod12888 from "12888__.js";
import _mod12894 from "12894__.js";

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
  scope: _mod12881,
  atrule: _mod12888,
  pseudo: _mod12894,
  node: _mod12839,
};

export default obj;
