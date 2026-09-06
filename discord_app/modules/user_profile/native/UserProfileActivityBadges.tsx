// discord_app/modules/user_profile/native/UserProfileActivityBadges.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import utils from "../../content_inventory/utils.tsx";
import useTimestampTickedNow from "../../content_inventory/memberlist/useTimestampTickedNow.tsx";
import shouldShowActivityTimeBarDefault from "../utils/shouldShowActivityTimeBar.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  bold: { fontWeight: "bold" },
});
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
        let GameControllerIcon = tmp2(9030).HourglassIcon;
      } else if (tmp10(7739)(activity)) {
        GameControllerIcon = tmp2(5106).AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = tmp2(10883).TvIcon;
      } else if (activity.type === tmp6.LISTENING) {
        GameControllerIcon = tmp2(9911).MusicIcon;
      } else {
        GameControllerIcon = tmp2(9223).GameControllerIcon;
      }
      obj = { style: tmp.container, children: null };
      obj = { size: "xxs", color: tmp10(576).colors.TEXT_FEEDBACK_POSITIVE };
      const items = [hasOwnProperty(GameControllerIcon, obj)];
      const obj1 = { entry: null, style: null };
      const obj2 = { start, end, isCountDown: flag };
      obj1.entry = obj2;
      obj1.style = tmp.bold;
      items[1] = hasOwnProperty(tmp2(13008).ActiveTimestamp, obj1);
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
        const items = [hasOwnProperty(tmp9(5089).GroupIcon, obj)];
        obj = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = hasOwnProperty(tmp9(4556).Text, obj);
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
    const items = [hasOwnProperty(tmp2(11653).TopicsIcon, obj)];
    const obj1 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = hasOwnProperty(tmp2(4556).Text, obj1);
    obj.children = items;
    tmp6 = timestampProducer(View, obj);
  }
  return tmp6;
};
