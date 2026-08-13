// discord_app/modules/icymi/native/content_inventory/Badges.tsx
import set from "set";
import { View } from "RetryIcon";
import _getSystemLocale from "_getSystemLocale";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { TimerIcon } from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { set } from "../../../../utils/Durations.tsx";
import { calculateTimestampDurations } from "../../../content_inventory/utils.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = require("useTimestampTickedNow");
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = set.useMemo(() => entry(outer1_2[7]).formatActiveTimestamp(entry, now), items);
    return jsx(require("Text").Text, { style: global.style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  let obj = calculateTimestampDurations;
  const tmp = createCacheKey();
  initialize;
  [][0] = _getSystemLocale;
  if (isEntryActiveResult) {
    obj = { entry: null };
    obj[0] = entry;
    let tmp7Result = tmp7(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: null, children: null };
    obj[1] = tmp.text;
    obj[2] = tmp2(8285).formatEndedTimestamp(entry, tmp6);
    tmp7Result = tmp7(tmp2(4338).Text, obj);
    const tmp2Result = tmp2(8285);
  }
  return tmp7Result;
}
function BaseBadge(arg0) {
  let Icon;
  let iconColor;
  let text;
  ({ Icon, iconColor, text } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: iconColor };
  const items = [callback(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { icon: { width: 16, height: 16 }, badgeContainer: null, text: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: require("Themes").space.PX_4, paddingLeft: require("Themes").space.PX_8, paddingRight: 10, borderRadius: require("Themes").radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: require("Themes").colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
const result = require("_getSystemLocale").fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = createCacheKey();
  let obj = calculateTimestampDurations;
  const colors = Themes.colors;
  obj = { style: tmp.badgeContainer, children: null };
  const isEntryActiveResult = obj.isEntryActive(entry);
  const tmp2 = require;
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [callback(tmp2(8811).GameControllerIcon, obj), callback(ContentTimestamp, { entry })];
  obj[1] = items;
  return callback2(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = calculateTimestampDurations;
  if (obj.isEntryMarathon(entry)) {
    let tmpResult = tmp(8285);
    const colors = Themes.colors;
    const isEntryActiveResult = tmpResult.isEntryActive(entry);
    tmpResult = tmp(8285);
    const text = tmpResult.getMarathonDescription(entry).text;
    let tmp7 = null;
    if (null != text) {
      obj = { Icon: null, iconColor: null, text: null };
      obj[0] = tmp(11042).TimerIcon;
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
    obj[0] = tmp(12352).NewUserIcon;
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.keY6mW);
    obj[2] = Themes.colors.STATUS_POSITIVE;
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
      obj[0] = tmp(12354).FlashIcon;
      const intl = tmp(1236).intl;
      obj = { days: null };
      obj[0] = streakCount;
      obj[1] = intl.formatToPlainString(tmp(1236).t["Klie/P"], obj);
      obj[2] = Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
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
    if (trendingType !== tmp(12356).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: null, text: null, iconColor: null };
      obj[0] = tmp(12271).FireIcon;
      const intl = tmp(1236).intl;
      obj[1] = intl.string(tmp(1236).t.TsWCdW);
      obj[2] = Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
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
    obj[0] = tmp(9906).RetryIcon;
    const intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.adnLsB);
    obj[2] = Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
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
    obj[0] = tmp(7771).TrophyIcon;
    obj = { children: null };
    const intl = tmp(1236).intl;
    const items = [intl.string(tmp(1236).t["/50eHi"]), ": ", ];
    const intl2 = tmp(1236).intl;
    const obj1 = { hours: null };
    const _Math = Math;
    obj1[0] = Math.round(entryDuration / set.Seconds.HOUR);
    items[2] = intl2.format(tmp(1236).t.SDRHgr, obj1);
    obj[0] = items;
    obj[1] = callback2(closure_8, obj);
    obj[2] = Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return callback(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = createCacheKey();
  let obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: null };
  obj[1] = Themes.colors.INTERACTIVE_TEXT_DEFAULT;
  const items = [callback(TimerIcon.TimerIcon, obj), callback(ContentTimestamp, { entry: entry.entry })];
  obj[1] = items;
  return callback2(View, obj);
};