// === Module 13913: ? ===

// Module 13913
import _mod13872 from "module_13872" /* 13872 */;
import _mod13914 from "module_13914" /* 13914 */;
import _mod13921 from "module_13921" /* 13921 */;
import _mod13927 from "module_13927" /* 13927 */;

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
  scope: _mod13914,
  atrule: _mod13921,
  pseudo: _mod13927,
  node: _mod13872
};

export default obj;