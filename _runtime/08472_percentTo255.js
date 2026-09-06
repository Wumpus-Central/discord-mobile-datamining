// === Module 8472: percentTo255 ===

// Module 8472 (percentTo255)
const tmp2 = /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
const re0 = tmp2;
function percentTo255(arg0) {

}

export const RGB_RGBA_PATTERN = tmp2;
export const convertPercentageColor = (str) => {
  if (typeof str !== "string") {
    return str;
  } else {
    const replaced = str.replace(/\s/g, "");
    if (!re0.test(replaced)) {
      return str;
    } else {
      const match = obj2.exec(replaced);
      if (!match) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("\"" + replaced + "\" is not a valid percentage rgb/rgba color");
      }
      if (typeof percentTo255 === "function") {
        let _HermesInternal2 = globalThis;
        const _Math = Math;
        const _parseFloat = parseFloat;
        const rounded = Math.round(2.55 * parseFloat(tmp4));
        if (typeof tmp7 === "function") {
          const _Math2 = Math;
          const _parseFloat2 = parseFloat;
          const rounded1 = Math.round(2.55 * parseFloat(tmp5));
          if (typeof tmp7 === "function") {
            const _Math3 = Math;
            const _parseFloat3 = parseFloat;
            const _HermesInternal3 = HermesInternal;
            const combined = "" + rounded + ", " + rounded1 + ", " + Math.round(2.55 * parseFloat(tmp6));
            if (!obj) {
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
            endsWithResult = obj.endsWith("%");
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj2 = re0;
  }
};