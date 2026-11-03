// === Module 1806: processSVGGradientStops ===

// Module 1806 (processSVGGradientStops)
import _mod1665 from "module_1665" /* 1665 */;
import processColorSVG from "processColorSVG" /* 1801 */;
import processPercentage from "processPercentage" /* 1803 */;

require = arg1;
const dependencyMap = arg6;

export (arr) => {
  if (arr) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (0 !== arr.length) {
        const mapped = arr.map((color) => {
          color = color.color;
          if (color) {
            color = processColorSVG.processColorSVG(color.color);
          }
          let num = color.opacity;
          if (num == null) {
            num = 1;
          }
          const processStyleValueResult = _mod1665.processStyleValue(processPercentage.processPercentage, num);
          let tmp6 = color;
          if (typeof color === "number") {
            tmp6 = color;
            if (typeof processStyleValueResult === "number") {
              const _Math = Math;
              tmp6 = (Math.round((color >>> 24 & 255) * processStyleValueResult) << 24 | 16777215 & color) >>> 0;
            }
          }
          let num2 = color.offset;
          if (num2 == null) {
            num2 = 0;
          }
          const tmp3Result = _mod1665;
          return { offset: _mod1665.processStyleValue(processPercentage.processPercentage, num2), color: tmp6 };
        });
        const sorted = mapped.sort((offset, offset2) => Number(offset.offset) - Number(offset2.offset));
        items = [];
        for (const item10018 of mapped) {
          arr = items.push(item10018.offset);
          let arr3 = items.push(item10018.color);
          continue;
        }
        return items;
      }
    }
  }
  const logger = _mod1665.logger;
  logger.warn("No stops in SVG gradient");
  return [];
}