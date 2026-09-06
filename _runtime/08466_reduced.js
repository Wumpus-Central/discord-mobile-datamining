// === Module 8466: reduced ===

// Module 8466 (reduced)
const meetOrSliceTypes = { meet: 0, slice: 1, none: 2 };
const items = ["xMinYMin", "xMidYMin", "xMaxYMin", "xMinYMid", "xMidYMid", "xMaxYMid", "xMinYMax", "xMidYMax", "xMaxYMax", "none"];
const reduced = items.reduce((acc, item) => {
  acc[item] = item;
  return acc;
}, {});
const re2 = /\s+/;

export default function extractViewBox(arg0) {
  ({ viewBox, preserveAspectRatio } = arg0);
  if (viewBox) {
    const _Array = Array;
    let parts = viewBox;
    if (!Array.isArray(viewBox)) {
      const str = viewBox.trim();
      parts = viewBox.trim().replace(/,/g, " ").split(re2);
      const str3 = viewBox.trim().replace(/,/g, " ");
    }
    const _Number = Number;
    const mapped = parts.map(Number);
    if (4 === mapped.length) {
      const _isNaN = isNaN;
      if (!mapped.some(isNaN)) {
        if (preserveAspectRatio) {
          let parts1 = preserveAspectRatio.trim().split(re2);
          const str4 = preserveAspectRatio.trim();
        } else {
          parts1 = [];
        }
        const obj = { minX: null, minY: null, vbWidth: null, vbHeight: null, align: null, meetOrSlice: null };
        [obj.minX, obj.minY, obj.vbWidth, obj.vbHeight] = mapped;
        let str5 = reduced[parts1[0]];
        if (!str5) {
          str5 = "xMidYMid";
        }
        obj.align = str5;
        obj.meetOrSlice = obj[parts1[1]] || 0;
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
export { meetOrSliceTypes };
export const alignEnum = reduced;