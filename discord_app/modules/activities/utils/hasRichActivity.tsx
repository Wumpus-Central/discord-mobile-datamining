// discord_app/modules/activities/utils/hasRichActivity.tsx
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/hasRichActivity.tsx");

export default function hasRichActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type !== ActivityTypes.ActivityTypes.CUSTOM_STATUS;
  }
  if (tmp) {
    let tmp4 = null != type.details;
    if (!tmp4) {
      let tmp5 = null != type.assets;
      if (tmp5) {
        tmp5 = null != type.assets.large_image || null != type.assets.small_text;
        const tmp6 = null != type.assets.large_image || null != type.assets.small_text;
      }
      tmp4 = tmp5;
    }
    if (!tmp4) {
      tmp4 = null != type.party;
    }
    if (!tmp4) {
      tmp4 = null != type.secrets;
    }
    if (!tmp4) {
      tmp4 = null != type.state;
    }
    tmp = tmp4;
  }
  return tmp;
}
