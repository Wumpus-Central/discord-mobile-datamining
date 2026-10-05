// _runtime/08142_extractOpacity.js

export default function extractOpacity(str) {
  if (typeof str === "string") {
    let result;
    const trimmed = str.trim();
    if (trimmed.endsWith("%")) {
      result = +str.slice(0, -1) / 100;
    }
    const _isNaN = isNaN;
    let num5 = 1;
    if (!isNaN(result)) {
      num5 = 1;
      if (1 >= result) {
        const _Math = Math;
        num5 = Math.max(result, 0);
      }
    }
    return num5;
  }
  result = +str;
}
