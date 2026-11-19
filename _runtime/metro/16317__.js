// === Module 16317: ? ===

// Module 16317
import _mod16276 from "module_16276" /* 16276 */;
import _mod16318 from "module_16318" /* 16318 */;
import _mod16325 from "module_16325" /* 16325 */;
import _mod16331 from "module_16331" /* 16331 */;

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
  scope: _mod16318,
  atrule: _mod16325,
  pseudo: _mod16331,
  node: _mod16276
};

export default obj;