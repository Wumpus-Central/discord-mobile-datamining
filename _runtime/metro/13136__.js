// === Module 13136: ? ===

// Module 13136
import _mod13095 from "module_13095" /* 13095 */;
import _mod13137 from "module_13137" /* 13137 */;
import _mod13144 from "module_13144" /* 13144 */;
import _mod13150 from "module_13150" /* 13150 */;

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
  scope: _mod13137,
  atrule: _mod13144,
  pseudo: _mod13150,
  node: _mod13095
};

export default obj;