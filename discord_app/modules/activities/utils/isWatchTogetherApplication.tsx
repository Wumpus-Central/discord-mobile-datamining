// discord_app/modules/activities/utils/isWatchTogetherApplication.tsx
import Constants from "../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
