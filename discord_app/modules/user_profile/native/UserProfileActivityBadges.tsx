// === Module 13005: UserProfileActivityBadges ===

// Module 13005 (UserProfileActivityBadges)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import GroupIcon from "GroupIcon" /* 5089 */;
import AppsIcon from "AppsIcon" /* 5106 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import utils from "utils" /* 8135 */;
import HourglassIcon from "HourglassIcon" /* 9030 */;
import GameControllerIcon2 from "GameControllerIcon" /* 9223 */;
import MusicIcon from "MusicIcon" /* 9911 */;
import TvIcon from "TvIcon" /* 10883 */;
import TopicsIcon from "TopicsIcon" /* 11653 */;
import useTimestampTickedNow from "useTimestampTickedNow" /* 13006 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 13007 */;
import Badges from "Badges" /* 13008 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = closure_7();
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
        let GameControllerIcon = HourglassIcon.HourglassIcon;
      } else if (isEmbeddedActivityDefault(activity)) {
        GameControllerIcon = AppsIcon.AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = TvIcon.TvIcon;
      } else if (activity.type === tmp6.LISTENING) {
        GameControllerIcon = MusicIcon.MusicIcon;
      } else {
        GameControllerIcon = GameControllerIcon2.GameControllerIcon;
      }
      obj = { style: tmp.container, children: null };
      obj = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      const items = [hasOwnProperty(GameControllerIcon, obj), ];
      const obj1 = { entry: null, style: null };
      const obj2 = { start, end, isCountDown: flag };
      obj1.entry = obj2;
      obj1.style = tmp.bold;
      items[1] = hasOwnProperty(Badges.ActiveTimestamp, obj1);
      obj.children = items;
      return timestampProducer(View, obj);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  activity = activity.activity;
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = utils.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        let obj = { style: tmp.container, children: null };
        obj = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const items = [hasOwnProperty(GroupIcon.GroupIcon, obj), ];
        obj = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = hasOwnProperty(Text_Text.Text, obj);
        obj.children = items;
        tmp8 = timestampProducer(View, obj);
      }
      return tmp8;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let obj = utils;
  const assets = activity.activity.assets;
  let large_text;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = obj.getEpisodeBadgeText(large_text);
  let tmp6 = null;
  if (null != episodeBadgeText) {
    obj = { style: tmp.container, children: null };
    obj = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const items = [hasOwnProperty(TopicsIcon.TopicsIcon, obj), ];
    const obj1 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = hasOwnProperty(Text_Text.Text, obj1);
    obj.children = items;
    tmp6 = timestampProducer(View, obj);
  }
  return tmp6;
};