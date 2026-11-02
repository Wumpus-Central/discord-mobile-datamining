// _runtime/metro/12918__.js
import _mod12877 from "12877__.js";
import _mod12919 from "12919__.js";
import _mod12926 from "12926__.js";
import _mod12932 from "12932__.js";

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
  scope: _mod12919,
  atrule: _mod12926,
  pseudo: _mod12932,
  node: _mod12877,
};

export default obj;
