// === Module 16326: ? ===

// Module 16326
import _mod16285 from "module_16285" /* 16285 */;
import _mod16327 from "module_16327" /* 16327 */;
import _mod16334 from "module_16334" /* 16334 */;
import _mod16340 from "module_16340" /* 16340 */;

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
  scope: _mod16327,
  atrule: _mod16334,
  pseudo: _mod16340,
  node: _mod16285
};

export default obj;