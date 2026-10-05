// _runtime/08155_RGB_RGBA_PATTERN.js
const tmp2 =
  /^rgba?\(\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*,\s*(100%|\d{1,2}(\.\d+)?%)\s*(?:,\s*(1|0(\.\d+)?|100%|\d{1,2}(\.\d+)?%)\s*)?\)$/;
const re0 = tmp2;
function percentTo255(arg0) {}

export const RGB_RGBA_PATTERN = tmp2;
export const convertPercentageColor = (str) => {
  if (typeof str !== "string") {
    return str;
  } else {
    let replaced = str.replace(/\s/g, "");
    let tmp21 = str;
    if (re0.test(replaced)) {
      const match = re0.exec(replaced);
      if (match) {
        if (typeof percentTo255 === "function") {
          const _Math = Math;
          const _parseFloat = parseFloat;
          const rounded = Math.round(2.55 * parseFloat(tmp4));
          if (typeof percentTo255 === "function") {
            const _Math2 = Math;
            const _parseFloat2 = parseFloat;
            const rounded1 = Math.round(2.55 * parseFloat(tmp5));
            if (typeof percentTo255 === "function") {
              let combined1;
              const _Math3 = Math;
              const _parseFloat3 = parseFloat;
              const _HermesInternal2 = HermesInternal;
              const combined = "" + rounded + ", " + rounded1 + ", " + Math.round(2.55 * parseFloat(tmp6));
              if (match[7]) {
                let result;
                const _parseFloat4 = parseFloat;
                const endsWithResult = match[7].endsWith("%");
                const parsed = parseFloat(obj);
                if (endsWithResult) {
                  result = parsed / 100;
                } else {
                  result = parsed;
                }
                const _HermesInternal4 = HermesInternal;
                combined1 = "rgba(" + combined + ", " + result + ")";
              } else {
                const _HermesInternal3 = HermesInternal;
                combined1 = "rgb(" + combined + ")";
              }
              replaced = combined1;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn('"' + replaced + '" is not a valid percentage rgb/rgba color');
      }
      tmp21 = replaced;
    }
    return tmp21;
  }
};
