// === Module 8228: percentTo255 ===

// Module 8228 (percentTo255)
const tmp2 = /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
const re0 = tmp2;
function percentTo255(arg0) {

}
arg5.RGB_RGBA_PATTERN = tmp2;
arg5.convertPercentageColor = (str) => {
  if (typeof str !== "string") {
    return str;
  } else {
    const replaced = str.replace(/\s/g, "");
    if (!regex.test(replaced)) {
      return str;
    } else {
      const match = obj2.exec(replaced);
      if (!match) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("\"" + replaced + "\" is not a valid percentage rgb/rgba color");
      }
      if (typeof percentTo255 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let _HermesInternal2 = globalThis;
      const _Math = Math;
      const _parseFloat = parseFloat;
      const rounded = Math.round(2.55 * parseFloat(match[1]));
      if (typeof percentTo255 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Math2 = Math;
      const _parseFloat2 = parseFloat;
      const rounded1 = Math.round(2.55 * parseFloat(match[3]));
      if (typeof percentTo255 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const _Math3 = Math;
      const _parseFloat3 = parseFloat;
      const _HermesInternal3 = HermesInternal;
      const combined = "" + rounded + ", " + rounded1 + ", " + Math.round(2.55 * parseFloat(match[5]));
      if (!match[7]) {
        const _HermesInternal4 = HermesInternal;
        const combined1 = "rgb(" + combined + ")";
      }
      const _parseFloat4 = parseFloat;
      const parsed = parseFloat(obj);
      if (endsWithResult) {
        let result = parsed / 100;
      } else {
        result = parsed;
      }
      _HermesInternal2 = _HermesInternal2.HermesInternal;
      const combined2 = _HermesInternal2.concat(combined, ", ", result, ")");
      endsWithResult = match[7].endsWith("%");
    }
    obj2 = regex;
  }
};