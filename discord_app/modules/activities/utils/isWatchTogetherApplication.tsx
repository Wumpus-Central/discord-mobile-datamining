import items3 from "items3";

let c0;
let closure_1;
let obj1;
({ WATCH_YOUTUBE_DEV_APP_ID: c0, WATCH_YOUTUBE_PROD_APP_ID: closure_1, WATCH_YOUTUBE_QA_APP_ID: obj1 } = items3);
const result = require("set").fileFinishedImporting("modules/activities/utils/isWatchTogetherApplication.tsx");

export default function isWatchTogetherApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [closure_0, closure_2, closure_1];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};