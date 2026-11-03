// === Module 11890: isWatchTogetherApplication ===

// Module 11890 (isWatchTogetherApplication)
import Constants from "Constants" /* 2147 */;
import size from "module_2" /* 2 */;

({ WATCH_YOUTUBE_DEV_APP_ID: closure_0, WATCH_YOUTUBE_PROD_APP_ID: closure_1, WATCH_YOUTUBE_QA_APP_ID: c2 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    items = [React, React2, duration];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};