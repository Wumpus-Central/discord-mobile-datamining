// discord_app/modules/user_profile/native/UserProfileActivityBadges.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import calculateTimestampDurations from "../../content_inventory/utils.tsx";
import useTimestampTickedNow from "../../content_inventory/memberlist/useTimestampTickedNow.tsx";
import shouldShowActivityTimeBarDefault from "../utils/shouldShowActivityTimeBar.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ActivityTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = callback3();
  let obj = useTimestampTickedNow;
  const timestamps = activity.timestamps;
  let start;
  if (timestamps != null) {
    start = timestamps.start;
  }
  if (start == null) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!shouldShowActivityTimeBarDefault(activity)) {
      const timestamps2 = activity.timestamps;
      let end;
      if (timestamps2 != null) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let flag;
      if (timestamps3 != null) {
        flag = timestamps3.isCountDown;
      }
      if (flag == null) {
        flag = false;
      }
      let flag2 = flag;
      if (flag) {
        flag2 = null != end;
      }
      if (flag2) {
        flag2 = end > obj.useTimestampTickedNow().now;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      if (flag2) {
        let GameControllerIcon = tmp2(9317).HourglassIcon;
      } else if (tmp10(7417)(activity)) {
        GameControllerIcon = tmp2(9171).AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = tmp2(9166).TvIcon;
      } else if (activity.type === tmp6.LISTENING) {
        GameControllerIcon = tmp2(9172).MusicIcon;
      } else {
        GameControllerIcon = tmp2(9119).GameControllerIcon;
      }
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { size: "xxs", color: null };
      obj[1] = tmp10(712).colors.TEXT_FEEDBACK_POSITIVE;
      const items = [callback(GameControllerIcon, obj), ];
      obj1 = { entry: null, style: null };
      const obj2 = { start: null, end: null, isCountDown: null };
      obj2[0] = start;
      obj2[1] = end;
      obj2[2] = flag;
      obj1[0] = obj2;
      obj1[1] = tmp.bold;
      items[1] = callback(tmp2(9321).ActiveTimestamp, obj1);
      obj[1] = items;
      return callback2(View, obj);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  activity = activity.activity;
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = calculateTimestampDurations.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        let obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { size: "xxs", color: null };
        obj[1] = ThemesDefault.colors.TEXT_MUTED;
        const items = [callback(tmp9(4990).GroupIcon, obj), ];
        obj = { variant: "text-sm/medium", color: "text-muted", children: null };
        obj[2] = richGameStateBadgeText;
        items[1] = callback(tmp9(4441).Text, obj);
        obj[1] = items;
        tmp8 = callback2(View, obj);
      }
      return tmp8;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let obj = calculateTimestampDurations;
  const assets = activity.activity.assets;
  let large_text;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = obj.getEpisodeBadgeText(large_text);
  let tmp6 = null;
  if (null != episodeBadgeText) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { size: "xxs", color: null };
    obj[1] = ThemesDefault.colors.TEXT_MUTED;
    const items = [callback(tmp2(9331).TopicsIcon, obj), ];
    obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj1[2] = episodeBadgeText;
    items[1] = callback(tmp2(4441).Text, obj1);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};