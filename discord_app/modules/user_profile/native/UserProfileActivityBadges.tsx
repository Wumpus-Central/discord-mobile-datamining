// === Module 14813: UserProfileActivityBadges ===

// Module 14813 (UserProfileActivityBadges)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7876 */;
import GroupIcon from "GroupIcon" /* 8653 */;
import AppsIcon2 from "AppsIcon" /* 8670 */;
import utils from "utils" /* 8710 */;
import GameControllerIcon from "GameControllerIcon" /* 9707 */;
import TvIcon from "TvIcon" /* 10732 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10737 */;
import MusicIcon from "MusicIcon" /* 10738 */;
import TopicsIcon from "TopicsIcon" /* 11630 */;
import HourglassIcon from "HourglassIcon" /* 12181 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 14815 */;
import Badges from "Badges" /* 14816 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = closure_6();
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
        let AppsIcon = HourglassIcon.HourglassIcon;
      } else {
        if (!isEmbeddedActivityDefault(activity)) {
          if (!tmp2Result.isConjurePresenceActivity(activity)) {
            if (activity.type === ActivityTypes.ActivityTypes.WATCHING) {
              AppsIcon = TvIcon.TvIcon;
            } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
              AppsIcon = MusicIcon.MusicIcon;
            } else {
              AppsIcon = GameControllerIcon.GameControllerIcon;
            }
          }
          tmp2Result = conjurePresenceActivity;
        }
        AppsIcon = AppsIcon2.AppsIcon;
      }
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      const items = [React4(AppsIcon, obj3), ];
      const obj4 = { entry: null, style: null };
      const obj5 = { start, end, isCountDown: flag };
      obj4.entry = obj5;
      obj4.style = tmp.bold;
      items[1] = React4(Badges.ActiveTimestamp, obj4);
      obj2.children = items;
      return hasOwnProperty(View, obj2);
    }
  }
  return null;
}
export function PartyBadge(activity) {
  activity = activity.activity;
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = utils.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        const obj = { style: tmp.container, children: null };
        const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const items = [React4(GroupIcon.GroupIcon, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = React4(Text_Text.Text, obj3);
        obj.children = items;
        tmp8 = hasOwnProperty(View, obj);
      }
      return tmp8;
    }
  }
  return null;
}
export function EpisodeBadge(activity) {
  const tmp = closure_6();
  const assets = activity.activity.assets;
  let large_text;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = utils.getEpisodeBadgeText(large_text);
  let tmp6 = null;
  if (null != episodeBadgeText) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const items = [React4(TopicsIcon.TopicsIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = React4(Text_Text.Text, obj4);
    obj2.children = items;
    tmp6 = hasOwnProperty(View, obj2);
  }
  return tmp6;
}