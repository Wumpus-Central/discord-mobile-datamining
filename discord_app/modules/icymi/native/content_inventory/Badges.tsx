// === Module 13008: Badges ===

// Module 13008 (Badges)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import Text_Text from "Text/Text" /* 4556 */;
import utils from "utils" /* 8135 */;
import TimerIcon from "TimerIcon" /* 11605 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const GameControllerIcon = tmp2(9223);
require = fn;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = entry(closure_2[6]);
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => utils.formatActiveTimestamp(entry, now), items);
    return jsx(entry(closure_2[8]).Text, { style: global.style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  let obj = utils;
  const tmp = closure_9();
  initialize;
  [][0] = LocaleStore;
  if (isEntryActiveResult) {
    obj = { entry };
    let tmp7Result = tmp7(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: tmp.text, children: tmp2(8135).formatEndedTimestamp(entry, tmp6) };
    tmp7Result = tmp7(tmp2(4556).Text, obj);
    const tmp2Result = tmp2(8135);
  }
  return tmp7Result;
}
function BaseBadge(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = closure_9();
  let obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: null };
  obj = { style: tmp.icon, color: iconColor };
  const items = [timestampProducer(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { icon: { width: 16, height: 16 }, badgeContainer: null, text: null };
createStyles = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
createStyles.badgeContainer = createStyles;
createStyles.text = { color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = closure_9();
  const colors = nativeDefault.colors;
  let obj = { style: tmp.badgeContainer, children: null };
  const isEntryActiveResult = obj.isEntryActive(entry);
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [timestampProducer(GameControllerIcon.GameControllerIcon, obj), timestampProducer(ContentTimestamp, { entry })];
  obj.children = items;
  return React5(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = utils;
  if (obj.isEntryMarathon(entry)) {
    let tmpResult = tmp(8135);
    const colors = nativeDefault.colors;
    const isEntryActiveResult = tmpResult.isEntryActive(entry);
    tmpResult = tmp(8135);
    const marathonDescription = tmpResult.getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp9 = null;
    if (null != text) {
      obj = { Icon: tmp(11605).TimerIcon, iconColor: tmp6, text, accessibilityLabel: tmp8 };
      tmp9 = timestampProducer(BaseBadge, obj);
    }
    return tmp9;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let obj = utils;
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: tmp(13009).NewUserIcon, text: null, iconColor: null };
    const intl = tmp(1114).intl;
    obj.text = intl.string(tmp(1114).t.keY6mW);
    obj.iconColor = nativeDefault.colors.STATUS_POSITIVE;
    tmp3 = timestampProducer(BaseBadge, obj);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  let obj = utils;
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp4 = null;
  if (null != streakCount) {
    tmp4 = null;
    if (streakCount >= 2) {
      obj = { Icon: tmp(13011).FlashIcon, text: null, iconColor: null, accessibilityLabel: null };
      const intl = tmp(1114).intl;
      obj = { days: streakCount };
      obj.text = intl.formatToPlainString(tmp(1114).t["Klie/P"], obj);
      obj.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      const intl2 = tmp(1114).intl;
      const obj1 = { days: streakCount };
      obj.accessibilityLabel = intl2.formatToPlainString(tmp(1114).t.nVLPBf, obj1);
      tmp4 = timestampProducer(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const TrendingBadge = function TrendingBadge(entry) {
  let obj = utils;
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp4 = null;
  if (null != trendingType) {
    tmp4 = null;
    if (trendingType !== tmp(13013).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: tmp(9198).FireIcon, text: null, iconColor: null };
      const intl = tmp(1114).intl;
      obj.text = intl.string(tmp(1114).t.TsWCdW);
      obj.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp4 = timestampProducer(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let obj = utils;
  let tmp3 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    obj = { Icon: tmp(10180).RetryIcon, text: null, iconColor: null };
    const intl = tmp(1114).intl;
    obj.text = intl.string(tmp(1114).t.adnLsB);
    obj.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    tmp3 = timestampProducer(BaseBadge, obj);
  }
  return tmp3;
};
export const TopGameBadge = function TopGameBadge(entry) {
  let obj = utils;
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    obj = { Icon: tmp(8717).TrophyIcon, text: null, iconColor: null };
    obj = { children: null };
    const intl = tmp(1114).intl;
    const items = [intl.string(tmp(1114).t["/50eHi"]), ": ", ];
    const intl2 = tmp(1114).intl;
    const obj1 = { hours: null };
    const _Math = Math;
    obj1.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
    items[2] = intl2.format(tmp(1114).t.SDRHgr, obj1);
    obj.children = items;
    obj.text = React5(React6, obj);
    obj.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return timestampProducer(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = closure_9();
  let obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [timestampProducer(TimerIcon.TimerIcon, obj), timestampProducer(ContentTimestamp, { entry: entry.entry })];
  obj.children = items;
  return React5(View, obj);
};