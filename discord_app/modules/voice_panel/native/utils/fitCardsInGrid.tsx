// === Module 11846: isNewLayoutBetter ===

// Module 11846 (isNewLayoutBetter)
import set from "set" /* 2 */;

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
let result = set.fileFinishedImporting("modules/voice_panel/native/utils/fitCardsInGrid.tsx");

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
      let tmp6 = num;
      let tmp7 = obj;
      let num2 = 0;
      let rounded = Math.floor(cardCount / num);
      if (0 < result) {
        num2 = 1;
      }
      let result1 = diff1 / num;
      let sum = rounded + num2;
      obj = { unusedSpace: null, columns: null, overscroll: null, rows: null, cardSize: null };
      let sum1 = result1 * sum + (sum - 1) * gutterSize;
      obj[0] = availableWidth * availableHeight - (result1 * num + diff * gutterSize) * sum1;
      obj[1] = num;
      obj[2] = availableHeight - sum1;
      obj[3] = sum;
      obj[4] = result1;
      let tmp11 = isNewLayoutBetter;
      let tmp12 = obj;
      if (isNewLayoutBetter(obj, obj)) {
        tmp12 = obj;
      }
      let tmp13 = tmp12;
      if (obj.overscroll < 0) {
        let result2 = (availableHeight - (obj.rows - 1) * gutterSize) / obj.rows;
        let sum2 = result2 * obj.rows + (obj.rows - 1) * gutterSize;
        obj = {};
        let tmp16 = obj;
        let tmp17 = obj;
        let merged = Object.assign(obj);
        obj.unusedSpace = availableWidth * availableHeight - (result2 * obj.columns + (obj.columns - 1) * gutterSize) * sum2;
        obj.overscroll = availableHeight - sum2;
        obj.cardSize = result2;
        tmp13 = tmp12;
        if (tmp11(obj, tmp12)) {
          tmp13 = obj;
        }
      }
      num = num + 1;
      obj = tmp13;
      tmp = tmp13;
    } while (num <= cardCount);
  }
  return { columns: tmp.columns, cardSize: tmp.cardSize };
};