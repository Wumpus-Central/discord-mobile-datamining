// === Module 12105: ActiveTimestamp ===

// Module 12105 (ActiveTimestamp)
import initialize from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import TrophyIcon from "TrophyIcon" /* 8010 */;
import calculateTimestampDurations from "calculateTimestampDurations" /* 8348 */;
import GameControllerIcon from "GameControllerIcon" /* 9430 */;
import FireIcon from "FireIcon" /* 9526 */;
import RetryIcon from "RetryIcon" /* 10123 */;
import TimerIcon from "TimerIcon" /* 10793 */;
import NewUserIcon from "NewUserIcon" /* 12106 */;
import FlashIcon from "FlashIcon" /* 12108 */;
import TrendingType from "TrendingType" /* 12110 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = require("useTimestampTickedNow");
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => entry(dependencyMap[7]).formatActiveTimestamp(entry, now), items);
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
    let tmp7Result = callback(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: null, children: null };
    obj[1] = tmp.text;
    obj[2] = calculateTimestampDurations.formatEndedTimestamp(entry, tmp6);
    tmp7Result = callback(Text.Text, obj);
    const tmp2Result = calculateTimestampDurations;
  }
  return tmp7Result;
}
function BaseBadge(arg0) {
  ({ Icon, iconColor, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.icon, color: iconColor };
  const items = [callback(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: ThemesDefault.space.PX_4, paddingLeft: ThemesDefault.space.PX_8, paddingRight: 10, borderRadius: ThemesDefault.radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = callback3();
  const colors = ThemesDefault.colors;
  let obj = { style: tmp.badgeContainer, children: null };
  const isEntryActiveResult = obj.isEntryActive(entry);
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [callback(GameControllerIcon.GameControllerIcon, obj), callback(ContentTimestamp, { entry })];
  obj[1] = items;
  return callback2(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = calculateTimestampDurations;
  if (obj.isEntryMarathon(entry)) {
    let tmpResult = calculateTimestampDurations;
    const colors = ThemesDefault.colors;
    const isEntryActiveResult = tmpResult.isEntryActive(entry);
    tmpResult = calculateTimestampDurations;
    const text = tmpResult.getMarathonDescription(entry).text;
    let tmp7 = null;
    if (null != text) {
      obj = { Icon: null, iconColor: null, text: null };
      obj[0] = TimerIcon.TimerIcon;
      obj[1] = tmp6;
      obj[2] = text;
      tmp7 = callback(BaseBadge, obj);
    }
    return tmp7;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let obj = calculateTimestampDurations;
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: null, text: null, iconColor: null };
    obj[0] = NewUserIcon.NewUserIcon;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.keY6mW);
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
      obj = { Icon: null, text: null, iconColor: null };
      obj[0] = FlashIcon.FlashIcon;
      const intl = getSystemLocale.intl;
      obj = { days: null };
      obj[0] = streakCount;
      obj[1] = intl.formatToPlainString(getSystemLocale.t["Klie/P"], obj);
      obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
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
    if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: null, text: null, iconColor: null };
      obj[0] = FireIcon.FireIcon;
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.TsWCdW);
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
    obj[0] = RetryIcon.RetryIcon;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t.adnLsB);
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
    obj[0] = TrophyIcon.TrophyIcon;
    obj = { children: null };
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["/50eHi"]), ": ", ];
    const intl2 = getSystemLocale.intl;
    obj1 = { hours: null };
    const _Math = Math;
    obj1[0] = Math.round(entryDuration / obj132Default.Seconds.HOUR);
    items[2] = intl2.format(getSystemLocale.t.SDRHgr, obj1);
    obj[0] = items;
    obj[1] = callback2(closure_8, obj);
    obj[2] = ThemesDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return callback(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = callback3();
  const obj = { style: tmp.icon, color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [callback(TimerIcon.TimerIcon, obj), callback(ContentTimestamp, { entry: entry.entry })];
  obj[1] = items;
  return callback2(View, obj);
};