// === Module 13109: ? ===

// Module 13109
import _mod13068 from "module_13068" /* 13068 */;
import _mod13110 from "module_13110" /* 13110 */;
import _mod13117 from "module_13117" /* 13117 */;
import _mod13123 from "module_13123" /* 13123 */;

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
  scope: _mod13110,
  atrule: _mod13117,
  pseudo: _mod13123,
  node: _mod13068
};

export default obj;