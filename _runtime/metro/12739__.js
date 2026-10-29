// _runtime/metro/12739__.js
import _mod12698 from "12698__.js";
import _mod12740 from "12740__.js";
import _mod12747 from "12747__.js";
import _mod12753 from "12753__.js";

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
  scope: _mod12740,
  atrule: _mod12747,
  pseudo: _mod12753,
  node: _mod12698,
};

export default obj;
