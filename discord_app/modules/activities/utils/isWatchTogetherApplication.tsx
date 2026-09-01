// === Module 9558: isWatchTogetherApplication ===

// Module 9558 (isWatchTogetherApplication)
import set from "set" /* 2 */;
import items3 from "items3" /* 4506 */;

({ WATCH_YOUTUBE_DEV_APP_ID: c0, WATCH_YOUTUBE_PROD_APP_ID: closure_1, WATCH_YOUTUBE_QA_APP_ID: obj1 } = items3);
const result = set.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [closure_0, closure_2, closure_1];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};