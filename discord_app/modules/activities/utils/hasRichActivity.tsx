// discord_app/modules/activities/utils/hasRichActivity.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const ActivityTypes = ME.ActivityTypes;
const result = obj132.fileFinishedImporting("modules/activities/utils/hasRichActivity.tsx");

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
};