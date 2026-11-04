// === Module 13137: ? ===

// Module 13137
import _mod13096 from "module_13096" /* 13096 */;
import _mod13138 from "module_13138" /* 13138 */;
import _mod13145 from "module_13145" /* 13145 */;
import _mod13151 from "module_13151" /* 13151 */;

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
  scope: _mod13138,
  atrule: _mod13145,
  pseudo: _mod13151,
  node: _mod13096
};

export default obj;