// === Module 13808: ? ===

// Module 13808
import _mod13767 from "module_13767" /* 13767 */;
import _mod13809 from "module_13809" /* 13809 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13822 from "module_13822" /* 13822 */;

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
  scope: _mod13809,
  atrule: _mod13816,
  pseudo: _mod13822,
  node: _mod13767
};

export default obj;