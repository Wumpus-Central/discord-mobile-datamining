// === Module 14698: findActiveCaption ===

// Module 14698 (findActiveCaption)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx");

export const findActiveCaption = function findActiveCaption(arg0, currentTime) {
  let tmp3;
  let diff = arg0.length - 1;
  let num = 0;
  if (0 <= diff) {
    while (true) {
      let _Math = Math;
      let rounded = Math.floor((num + diff) / 2);
      tmp3 = arg0[rounded];
      let diff1 = diff;
      let tmp5 = num;
      if (currentTime >= tmp3.start) {
        if (currentTime <= tmp3.end) {
          break;
        }
      }
      if (currentTime < tmp3.start) {
        diff1 = rounded - 1;
        let sum = num;
      } else {
        sum = rounded + 1;
      }
      diff = diff1;
      num = sum;
    }
    return tmp3;
  }
  return null;
};