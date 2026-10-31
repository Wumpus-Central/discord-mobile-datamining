// _runtime/metro/12915__.js
import _mod12874 from "12874__.js";
import _mod12916 from "12916__.js";
import _mod12923 from "12923__.js";
import _mod12929 from "12929__.js";

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
    value: "Value",
  },
  scope: _mod12916,
  atrule: _mod12923,
  pseudo: _mod12929,
  node: _mod12874,
};

export default obj;
