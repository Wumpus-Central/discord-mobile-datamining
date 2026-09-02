// _runtime/08263_reduced.js
let obj = { meet: 0, slice: 1, none: 2 };
const items = [
  "xMinYMin",
  "xMidYMin",
  "xMaxYMin",
  "xMinYMid",
  "xMidYMid",
  "xMaxYMid",
  "xMinYMax",
  "xMidYMax",
  "xMaxYMax",
  "none",
];
const reduced = items.reduce((arg0, arg1) => {
  arg0[arg1] = arg1;
  return arg0;
}, {});
const re2 = /\s+/;
arg5.default = function extractViewBox(arg0) {
  ({ viewBox, preserveAspectRatio } = arg0);
  if (viewBox) {
    const _Array = Array;
    let parts = viewBox;
    if (!Array.isArray(viewBox)) {
      const str = viewBox.trim();
      parts = viewBox.trim().replace(/,/g, " ").split(closure_2);
      const str3 = viewBox.trim().replace(/,/g, " ");
    }
    const _Number = Number;
    const mapped = parts.map(Number);
    if (4 === mapped.length) {
      const _isNaN = isNaN;
      if (!mapped.some(isNaN)) {
        if (preserveAspectRatio) {
          let parts1 = preserveAspectRatio.trim().split(closure_2);
          const str4 = preserveAspectRatio.trim();
        } else {
          parts1 = [];
        }
        obj = { minX: null, minY: null, vbWidth: null, vbHeight: null, align: null, meetOrSlice: null };
        [obj[0], obj[1], obj[2], obj[3]] = mapped;
        let str5 = reduced[parts1[0]];
        if (!str5) {
          str5 = "xMidYMid";
        }
        obj[4] = str5;
        obj[5] = obj[parts1[1]] || 0;
        return obj;
      }
    }
    const _console = console;
    console.warn(`Invalid \`viewBox\` prop:${viewBox}`);
    return null;
  } else {
    return null;
  }
};
arg5.meetOrSliceTypes = obj;
arg5.alignEnum = reduced;
