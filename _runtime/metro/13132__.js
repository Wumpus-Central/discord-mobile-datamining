// _runtime/metro/13132__.js
import _mod13091 from "13091__.js";
import _mod13133 from "13133__.js";
import _mod13140 from "13140__.js";
import _mod13146 from "13146__.js";

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
  scope: _mod13133,
  atrule: _mod13140,
  pseudo: _mod13146,
  node: _mod13091,
};

export default obj;
