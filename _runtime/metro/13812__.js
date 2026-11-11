// _runtime/metro/13812__.js
import _mod13771 from "13771__.js";
import _mod13813 from "13813__.js";
import _mod13820 from "13820__.js";
import _mod13826 from "13826__.js";

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
  scope: _mod13813,
  atrule: _mod13820,
  pseudo: _mod13826,
  node: _mod13771,
};

export default obj;
