// _runtime/14146_getPluralRules.js
import getPluralRules from "14147_getPluralRules.js";

if (getPluralRules) {
  let obj;
  if (typeof getPluralRules === "object") {
    obj = getPluralRules;
  }
  const _Intl = Intl;
  if (typeof Intl === "undefined") {
    if (undefined !== global) {
      const obj2 = { PluralRules: obj.default };
      global.Intl = obj2;
    } else {
      const _window = window;
      if (typeof window !== "undefined") {
        const _window2 = window;
        const obj3 = { PluralRules: obj.default };
        window.Intl = obj3;
      } else {
        const self = this;
        const obj4 = { PluralRules: obj.default };
        this.Intl = obj4;
      }
    }
    obj.default.polyfill = true;
  } else {
    const _Intl5 = Intl;
    if (Intl.PluralRules) {
      const _Intl2 = Intl;
      if (Intl.PluralRules.prototype.selectRange) {
        const items = ["en", "es", "ru", "zh"];
        const _Intl4 = Intl;
        if (PluralRules.supportedLocalesOf(items).length < items.length) {
          const _Intl6 = Intl;
          Intl.PluralRules = obj.default;
          obj.default.polyfill = true;
        }
      }
    }
    const _Intl3 = Intl;
    Intl.PluralRules = obj.default;
    obj.default.polyfill = true;
  }
}
obj = { default: getPluralRules };
