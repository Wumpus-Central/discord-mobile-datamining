// === Module 13054: ? ===

// Module 13054
import _mod13013 from "module_13013" /* 13013 */;
import _mod13055 from "module_13055" /* 13055 */;
import _mod13062 from "module_13062" /* 13062 */;
import _mod13068 from "module_13068" /* 13068 */;

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
  scope: _mod13055,
  atrule: _mod13062,
  pseudo: _mod13068,
  node: _mod13013
};

export default obj;