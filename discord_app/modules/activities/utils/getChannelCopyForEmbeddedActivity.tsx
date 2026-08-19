// discord_app/modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["2YCamo"]);
  }
  return stringResult;
};