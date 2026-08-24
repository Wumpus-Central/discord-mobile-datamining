// discord_app/modules/icymi/native/content_inventory/Badges.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import setDefault from "../../../../utils/Durations.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import calculateTimestampDurations from "../../../content_inventory/utils.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import TimerIcon from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../user_settings/LocaleStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = require("useTimestampTickedNow");
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => entry(closure_1_2[7]).formatActiveTimestamp(entry, now), items);
    return jsx(require("Text").Text, { style: global.style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  let obj = calculateTimestampDurations;
  const tmp = callback3();
  initialize;
  [][0] = closure_5;
  if (isEntryActiveResult) {
    obj = { entry: null };
    obj[0] = entry;
    let tmp7Result = tmp7(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: null, children: null };
    obj[1] = tmp.text;
    obj[2] = tmp2(8387).formatEndedTimestamp(entry, tmp6);
    tmp7Result = tmp7(tmp2(4739).Text, obj);
    const tmp2Result = tmp2(8387);
  }
  return tmp7Result;
}
function BaseBadge(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = callback3();
  let obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: null };
  obj = { style: tmp.icon, color: iconColor };
  const items = [callback(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = callback(Text.Text, obj);
  obj[3] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { icon: { width: 16, height: 16 }, badgeContainer: null, text: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: ThemesDefault.space.PX_4, paddingLeft: ThemesDefault.space.PX_8, paddingRight: 10, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
const result = require("set").fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = callback3();
  let obj = calculateTimestampDurations;
  const colors = ThemesDefault.colors;
  obj = { style: tmp.badgeContainer, children: null };
  const isEntryActiveResult = obj.isEntryActive(entry);
  const tmp2 = require;
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [callback(GameControllerIcon.GameControllerIcon, obj), callback(ContentTimestamp, { entry })];
  obj[1] = items;
  return callback2(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = calculateTimestampDurations;
  if (obj.isEntryMarathon(entry)) {
    let tmpResult = tmp(8387);
    const colors = ThemesDefault.colors;
    const isEntryActiveResult = tmpResult.isEntryActive(entry);
    tmpResult = tmp(8387);
    const marathonDescription = tmpResult.getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp9 = null;
    if (null != text) {
      obj = { Icon: null, iconColor: null, text: null, accessibilityLabel: null };
      obj[0] = tmp(10832).TimerIcon;
      obj[1] = tmp6;
      obj[2] = text;
      obj[3] = tmp8;
      tmp9 = callback(BaseBadge, obj);
    }
    return tmp9;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let obj = calculateTimestampDurations;
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: null, text: null, iconColor: null };
    obj[0] = tmp(12158).NewUserIcon;
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.keY6mW);
    obj[2] = ThemesDefault.colors.STATUS_POSITIVE;
    tmp3 = callback(BaseBadge, obj);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  let obj = calculateTimestampDurations;
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp4 = null;
  if (null != streakCount) {
    tmp4 = null;
    if (streakCount >= 2) {
      obj = { Icon: null, text: null, iconColor: null, accessibilityLabel: null };
      obj[0] = tmp(12160).FlashIcon;
      const intl = tmp(1236).intl;
      obj = { days: null };
      obj[0] = streakCount;
      obj[1] = intl.formatToPlainString(tmp(1236).t["Klie/P"], obj);
      obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      const intl2 = tmp(1236).intl;
      obj1 = { days: null };
      obj1[0] = streakCount;
      obj[3] = intl2.formatToPlainString(tmp(1236).t.nVLPBf, obj1);
      tmp4 = callback(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const TrendingBadge = function TrendingBadge(entry) {
  let obj = calculateTimestampDurations;
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp4 = null;
  if (null != trendingType) {
    tmp4 = null;
    if (trendingType !== tmp(12162).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: null, text: null, iconColor: null };
      obj[0] = tmp(9563).FireIcon;
      const intl = tmp(1236).intl;
      obj[1] = intl.string(tmp(1236).t.TsWCdW);
      obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp4 = callback(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let obj = calculateTimestampDurations;
  let tmp3 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    obj = { Icon: null, text: null, iconColor: null };
    obj[0] = tmp(10162).RetryIcon;
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.adnLsB);
    obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    tmp3 = callback(BaseBadge, obj);
  }
  return tmp3;
};
export const TopGameBadge = function TopGameBadge(entry) {
  let obj = calculateTimestampDurations;
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    obj = { Icon: null, text: null, iconColor: null };
    obj[0] = tmp(8049).TrophyIcon;
    obj = { children: null };
    const intl = tmp(1236).intl;
    const items = [intl.string(tmp(1236).t["/50eHi"]), ": ", ];
    const intl2 = tmp(1236).intl;
    obj1 = { hours: null };
    const _Math = Math;
    obj1[0] = Math.round(entryDuration / setDefault.Seconds.HOUR);
    items[2] = intl2.format(tmp(1236).t.SDRHgr, obj1);
    obj[0] = items;
    obj[1] = callback2(closure_8, obj);
    obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return callback(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = callback3();
  let obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [callback(TimerIcon.TimerIcon, obj), callback(ContentTimestamp, { entry: entry.entry })];
  obj[1] = items;
  return callback2(View, obj);
};