// === Module 12915: ? ===

// Module 12915
import _mod12874 from "module_12874" /* 12874 */;
import _mod12916 from "module_12916" /* 12916 */;
import _mod12923 from "module_12923" /* 12923 */;
import _mod12929 from "module_12929" /* 12929 */;

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
  scope: _mod12916,
  atrule: _mod12923,
  pseudo: _mod12929,
  node: _mod12874
};

export default obj;