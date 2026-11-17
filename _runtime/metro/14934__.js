// _runtime/metro/14934__.js
import _mod14893 from "14893__.js";
import _mod14935 from "14935__.js";
import _mod14942 from "14942__.js";
import _mod14948 from "14948__.js";

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
  scope: _mod14935,
  atrule: _mod14942,
  pseudo: _mod14948,
  node: _mod14893,
};

export default obj;
