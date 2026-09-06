// === Module 14382: ? ===

// Module 14382
import _typeof from "module_14383" /* 14383 */;

if (_typeof) {
  if (typeof _typeof === "object") {
    let _default = _typeof;
  }
  let obj = globalThis;
  const _Intl = Intl;
  if (typeof Intl === "undefined") {
    if (undefined !== global) {
      obj = { PluralRules: _default.default };
      global.Intl = obj;
      _default = _default.default;
      _default.polyfill = true;
    } else {
      const _window = window;
      if (typeof window === "undefined") {
        const self = this;
        obj = { PluralRules: _default.default };
        this.Intl = obj;
      }
    }
    obj = { PluralRules: _default.default };
    obj.window.Intl = obj;
  } else {
    const _Intl5 = Intl;
    if (Intl.PluralRules) {
      const _Intl2 = Intl;
      if (Intl.PluralRules.prototype.selectRange) {
        const items = ["en", "es", "ru", "zh"];
        const _Intl4 = Intl;
        if (PluralRules.supportedLocalesOf(items).length < items.length) {
          const _Intl6 = Intl;
          Intl.PluralRules = _default.default;
          _default.default.polyfill = true;
        }
      }
    }
    const _Intl3 = Intl;
    Intl.PluralRules = _default.default;
    _default.default.polyfill = true;
  }
}
_default = { default: _typeof };