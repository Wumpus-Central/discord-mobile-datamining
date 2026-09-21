// === Module 13298: UserProfileActivityBadges ===

// Module 13298 (UserProfileActivityBadges)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4752 */;
import AppsIcon from "AppsIcon" /* 5278 */;
import GroupIcon from "GroupIcon" /* 5307 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7981 */;
import utils from "utils" /* 8404 */;
import GameControllerIcon2 from "GameControllerIcon" /* 9348 */;
import MusicIcon from "MusicIcon" /* 10167 */;
import TvIcon from "TvIcon" /* 11145 */;
import TopicsIcon from "TopicsIcon" /* 11904 */;
import HourglassIcon from "HourglassIcon" /* 13193 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 13300 */;
import Badges from "Badges" /* 13301 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = closure_7();
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
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      const items = [hasOwnProperty(GameControllerIcon, obj3), ];
      const obj4 = { entry: null, style: null };
      const obj5 = { start, end, isCountDown: flag };
      obj4.entry = obj5;
      obj4.style = tmp.bold;
      items[1] = hasOwnProperty(Badges.ActiveTimestamp, obj4);
      obj2.children = items;
      return timestampProducer(View, obj2);
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
        const obj = { style: tmp.container, children: null };
        const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const items = [hasOwnProperty(GroupIcon.GroupIcon, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = hasOwnProperty(Text_Text.Text, obj3);
        obj.children = items;
        tmp8 = timestampProducer(View, obj);
      }
      return tmp8;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  const tmp = closure_7();
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
    const items = [hasOwnProperty(TopicsIcon.TopicsIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj2.children = items;
    tmp6 = timestampProducer(View, obj2);
  }
  return tmp6;
};