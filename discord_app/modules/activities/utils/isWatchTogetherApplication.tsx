// === Module 9590: isWatchTogetherApplication ===

// Module 9590 (isWatchTogetherApplication)
import Constants from "Constants" /* 1920 */;
import size from "module_2" /* 2 */;

({ WATCH_YOUTUBE_DEV_APP_ID: closure_0, WATCH_YOUTUBE_PROD_APP_ID: closure_1, WATCH_YOUTUBE_QA_APP_ID: c2 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [React, React2, framebus];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};