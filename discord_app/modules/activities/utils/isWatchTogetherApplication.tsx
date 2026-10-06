// === Module 9124: isWatchTogetherApplication ===

// Module 9124 (isWatchTogetherApplication)
import Constants from "Constants" /* 2011 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ WATCH_YOUTUBE_DEV_APP_ID: _window, WATCH_YOUTUBE_PROD_APP_ID: map, WATCH_YOUTUBE_QA_APP_ID: c2 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [React, React2, map];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};