// === Module 15341: VideoQuestCaptionsUtils ===

// Module 15341 (VideoQuestCaptionsUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptionsUtils.tsx");

export const findActiveCaption = function findActiveCaption(captions, currentTime) {
  let tmp3;
  let diff = captions.length - 1;
  let num = 0;
  if (0 <= diff) {
    while (true) {
      let _Math = Math;
      let rounded = Math.floor((num + diff) / 2);
      tmp3 = captions[rounded];
      let diff1 = diff;
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