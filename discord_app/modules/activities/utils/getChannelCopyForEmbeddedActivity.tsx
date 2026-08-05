// discord_app/modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx
import { getSystemLocale } from "../../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    stringResult = intl.string(getSystemLocale /* getSystemLocale */.t["2YCamo"]);
  }
  return stringResult;
};