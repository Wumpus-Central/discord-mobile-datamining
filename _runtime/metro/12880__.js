// === Module 12880: ? ===

// Module 12880
import _mod12839 from "module_12839" /* 12839 */;
import _mod12881 from "module_12881" /* 12881 */;
import _mod12888 from "module_12888" /* 12888 */;
import _mod12894 from "module_12894" /* 12894 */;

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
  scope: _mod12881,
  atrule: _mod12888,
  pseudo: _mod12894,
  node: _mod12839
};

export default obj;