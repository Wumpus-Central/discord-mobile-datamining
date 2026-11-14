// _runtime/01809_processSVGGradientStops.js
import _mod1668 from "metro/01668__.js";
import processColorSVG from "01804_processColorSVG.js";
import processPercentage from "01806_processPercentage.js";

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
          const processStyleValueResult = _mod1668.processStyleValue(processPercentage.processPercentage, num);
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
          const tmp3Result = _mod1668;
          return { offset: _mod1668.processStyleValue(processPercentage.processPercentage, num2), color: tmp6 };
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
  const logger = _mod1668.logger;
  logger.warn("No stops in SVG gradient");
  return [];
}