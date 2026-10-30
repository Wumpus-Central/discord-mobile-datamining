// discord_app/modules/user_profile/utils/shouldShowActivityTimeBar.tsx
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/shouldShowActivityTimeBar.tsx");

export default function shouldShowActivityTimeBar(type) {
  let tmp3 = type.type === ActivityTypes.ActivityTypes.LISTENING;
  if (!tmp3) {
    tmp3 = type.type === ActivityTypes.ActivityTypes.WATCHING;
  }
  if (tmp3) {
    const timestamps = type.timestamps;
    let start;
    if (timestamps != null) {
      start = timestamps.start;
    }
    tmp3 = null != start;
  }
  if (tmp3) {
    tmp3 = null != type.timestamps.end;
  }
  return tmp3;
}
