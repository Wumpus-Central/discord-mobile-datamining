// === Module 12739: ? ===

// Module 12739
import _mod12698 from "module_12698" /* 12698 */;
import _mod12740 from "module_12740" /* 12740 */;
import _mod12747 from "module_12747" /* 12747 */;
import _mod12753 from "module_12753" /* 12753 */;

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
  scope: _mod12740,
  atrule: _mod12747,
  pseudo: _mod12753,
  node: _mod12698
};

export default obj;