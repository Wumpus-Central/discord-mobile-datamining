// === Module 12611: fitCardsInGrid ===

// Module 12611 (fitCardsInGrid)
import size from "module_2" /* 2 */;

function isNewLayoutBetter(unusedSpace, unusedSpace2) {
  if (0 !== unusedSpace2.unusedSpace) {
    if (unusedSpace.unusedSpace !== unusedSpace2.unusedSpace) {
      if (0 !== unusedSpace.unusedSpace) {
        if (unusedSpace2.unusedSpace !== Infinity) {
          if (unusedSpace2.unusedSpace > 0) {
            if (unusedSpace.unusedSpace < 0) {
              return false;
            }
          }
          if (unusedSpace.unusedSpace > 0) {
            if (unusedSpace2.unusedSpace < 0) {
              return true;
            }
          }
          const _Math = Math;
          const absolute = Math.abs(unusedSpace2.unusedSpace);
          const _Math2 = Math;
          const absolute1 = Math.abs(unusedSpace.unusedSpace);
          const _Math3 = Math;
          const _Math4 = Math;
          const bound = Math.max(absolute, absolute1);
          if (bound - Math.min(absolute, absolute1) < 5000) {
            const _Math5 = Math;
            const _Math6 = Math;
            const bound1 = Math.max(unusedSpace.rows, unusedSpace.columns);
            const diff = bound1 - Math.min(unusedSpace.rows, unusedSpace.columns);
            const _Math7 = Math;
            const _Math8 = Math;
            const bound2 = Math.max(unusedSpace2.rows, unusedSpace2.columns);
            const diff1 = bound2 - Math.min(unusedSpace2.rows, unusedSpace2.columns);
            return diff1 !== diff && diff < diff1;
          } else {
            return absolute1 < absolute;
          }
        }
      }
      return true;
    }
  }
  return false;
}
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/fitCardsInGrid.tsx");

export default function fitCardsInGrid(arg0) {
  ({ cardCount, gutterSize, availableWidth, availableHeight } = arg0);
  let obj = { columns: 1, rows: 0, cardSize: 0, overscroll: 0, unusedSpace: Infinity };
  let num = 1;
  let tmp = obj;
  if (1 <= cardCount) {
    do {
      let diff = num - 1;
      let _Math = Math;
      let diff1 = availableWidth - diff * gutterSize;
      let result = cardCount % num;
      let num2 = 0;
      let rounded = Math.floor(cardCount / num);
      if (0 < result) {
        num2 = 1;
      }
      let result1 = diff1 / num;
      let sum = rounded + num2;
      let obj2 = { unusedSpace: null, columns: null, overscroll: null, rows: null, cardSize: null };
      let sum1 = result1 * sum + (sum - 1) * gutterSize;
      obj2.unusedSpace = availableWidth * availableHeight - (result1 * num + diff * gutterSize) * sum1;
      obj2.columns = num;
      obj2.overscroll = availableHeight - sum1;
      obj2.rows = sum;
      obj2.cardSize = result1;
      let tmp12 = obj;
      if (isNewLayoutBetter(obj2, obj)) {
        tmp12 = obj2;
      }
      let tmp13 = tmp12;
      if (obj2.overscroll < 0) {
        let result2 = (availableHeight - (obj2.rows - 1) * gutterSize) / obj2.rows;
        let sum2 = result2 * obj2.rows + (obj2.rows - 1) * gutterSize;
        let obj3 = {};
        let merged = Object.assign(obj2);
        obj3.unusedSpace = availableWidth * availableHeight - (result2 * obj2.columns + (obj2.columns - 1) * gutterSize) * sum2;
        obj3.overscroll = availableHeight - sum2;
        obj3.cardSize = result2;
        tmp13 = tmp12;
        if (isNewLayoutBetter(obj3, tmp12)) {
          tmp13 = obj3;
        }
      }
      num = num + 1;
      obj = tmp13;
      tmp = tmp13;
    } while (num <= cardCount);
  }
  return { columns: tmp.columns, cardSize: tmp.cardSize };
};