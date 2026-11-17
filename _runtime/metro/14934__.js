// === Module 14934: ? ===

// Module 14934
import _mod14893 from "module_14893" /* 14893 */;
import _mod14935 from "module_14935" /* 14935 */;
import _mod14942 from "module_14942" /* 14942 */;
import _mod14948 from "module_14948" /* 14948 */;

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
    value: "Value"
  },
  scope: _mod14935,
  atrule: _mod14942,
  pseudo: _mod14948,
  node: _mod14893
};

export default obj;