// _runtime/08149_extractViewBox.js
const meetOrSliceTypes = { meet: 0, slice: 1, none: 2 };
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
const reduced = items.reduce((acc, item) => {
  acc[item] = item;
  return acc;
}, {});
const re2 = /\s+/;

export default function extractViewBox(arg0) {
  let obj;
  let preserveAspectRatio;
  let str5;
  let tmp5;
  let viewBox;
  ({ viewBox, preserveAspectRatio } = arg0);
  if (viewBox) {
    const _Array = Array;
    let parts = viewBox;
    if (!Array.isArray(viewBox)) {
      const str = viewBox.trim();
      const str3 = str.replace(/,/g, " ");
      parts = str3.split(re2);
    }
    const _Number = Number;
    const mapped = parts.map(Number);
    if (4 === mapped.length) {
      const _isNaN = isNaN;
      if (!mapped.some(isNaN)) {
        let parts1;
        if (preserveAspectRatio) {
          const str4 = preserveAspectRatio.trim();
          parts1 = str4.split(re2);
        } else {
          parts1 = [];
        }
        obj = { minX: null, minY: null, vbWidth: null, vbHeight: null, align: str5, meetOrSlice: obj[tmp5] || 0 };
        [obj.minX, obj.minY, obj.vbWidth, obj.vbHeight] = mapped;
        str5 = reduced[parts1[0]];
        tmp5 = parts1[1];
        if (!str5) {
          str5 = "xMidYMid";
        }
        return obj;
      }
    }
    const _console = console;
    console.warn(`Invalid \`viewBox\` prop:${viewBox}`);
    return null;
  } else {
    return null;
  }
}
export { meetOrSliceTypes };
export const alignEnum = reduced;
