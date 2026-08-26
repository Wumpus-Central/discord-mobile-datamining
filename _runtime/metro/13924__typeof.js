// === Module 13924: _typeof ===

// Module 13924 (_typeof)
import _typeof from "_typeof" /* 13925 */;

if (_typeof) {
  if (typeof _typeof === "object") {
    let _default = _typeof;
  }
  let obj = globalThis;
  const _Intl = Intl;
  if (typeof Intl === "undefined") {
    if (undefined !== global) {
      obj = { PluralRules: null };
      obj[0] = _default.default;
      global.Intl = obj;
      _default = _default.default;
      _default.polyfill = true;
    } else {
      const _window = window;
      if (typeof window === "undefined") {
        const self = this;
        obj = { PluralRules: null };
        obj[0] = _default.default;
        this.Intl = obj;
      }
    }
    obj = { PluralRules: null };
    obj[0] = _default.default;
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