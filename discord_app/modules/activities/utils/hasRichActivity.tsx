// discord_app/modules/activities/utils/hasRichActivity.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/hasRichActivity.tsx");

export default function hasRichActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type !== ActivityTypes.CUSTOM_STATUS;
  }
  if (tmp) {
    let tmp3 = null != type.details;
    if (!tmp3) {
      let tmp4 = null != type.assets;
      if (tmp4) {
        tmp4 = null != type.assets.large_image || null != type.assets.small_text;
        const tmp5 = null != type.assets.large_image || null != type.assets.small_text;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      tmp3 = null != type.party;
    }
    if (!tmp3) {
      tmp3 = null != type.secrets;
    }
    if (!tmp3) {
      tmp3 = null != type.state;
    }
    tmp = tmp3;
  }
  return tmp;
}
