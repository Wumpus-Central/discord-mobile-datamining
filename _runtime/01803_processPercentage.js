// === Module 1803: processPercentage ===

// Module 1803 (processPercentage)

export (str) => {
  if (typeof str === "string") {
    if ("%".endsWith("%")) {
      let result = +str.slice(0, -1) / 100;
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