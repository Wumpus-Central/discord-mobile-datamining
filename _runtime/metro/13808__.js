// _runtime/metro/13808__.js
import _mod13767 from "13767__.js";
import _mod13809 from "13809__.js";
import _mod13816 from "13816__.js";
import _mod13822 from "13822__.js";

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
  scope: _mod13809,
  atrule: _mod13816,
  pseudo: _mod13822,
  node: _mod13767,
};

export default obj;
