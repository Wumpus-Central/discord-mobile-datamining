// === Module 13144: ? ===

// Module 13144
import _mod13103 from "module_13103" /* 13103 */;
import _mod13145 from "module_13145" /* 13145 */;
import _mod13152 from "module_13152" /* 13152 */;
import _mod13158 from "module_13158" /* 13158 */;

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
  scope: _mod13145,
  atrule: _mod13152,
  pseudo: _mod13158,
  node: _mod13103
};

export default obj;