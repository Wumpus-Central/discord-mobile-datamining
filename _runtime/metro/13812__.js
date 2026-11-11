// === Module 13812: ? ===

// Module 13812
import _mod13771 from "module_13771" /* 13771 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13820 from "module_13820" /* 13820 */;
import _mod13826 from "module_13826" /* 13826 */;

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
  scope: _mod13813,
  atrule: _mod13820,
  pseudo: _mod13826,
  node: _mod13771
};

export default obj;