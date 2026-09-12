// discord_app/modules/icymi/native/content_inventory/Badges.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import utils from "../../../content_inventory/utils.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import FireIcon from "../../../../design/components/Icon/native/redesign/generated/FireIcon.tsx";
import GameControllerIcon from "../../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import RetryIcon from "../../../../design/components/Icon/native/redesign/generated/RetryIcon.tsx";
import TimerIcon from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import NewUserIcon from "../../../../design/components/Icon/native/redesign/generated/NewUserIcon.tsx";
import FlashIcon from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import TrendingType from "../../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

require = fn;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = entry(closure_2[6]);
    now = obj.useTimestampTickedNow().now;
    items = [,];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => utils.formatActiveTimestamp(entry, now), items);
    return jsx(entry(closure_2[8]).Text, {
      style: global.style,
      variant: "text-sm/medium",
      tabularNumbers: true,
      color: "text-feedback-positive",
      children: memo,
    });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  obj = utils;
  initialize;
  [][0] = LocaleStore;
  if (isEntryActiveResult) {
    obj = { entry };
    let tmp6Result = timestampProducer(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", color: null, children: null };
    obj.color = obj[noop.useContext(noop, closure_11)].text;
    obj.children = utils.formatEndedTimestamp(entry, tmp5);
    tmp6Result = timestampProducer(Text_Text.Text, obj);
    const tmpResult = utils;
  }
  return tmp6Result;
}
function BaseBadge(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = closure_10(noop.useContext(closure_11));
  obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: null };
  obj = { style: tmp.icon, color: iconColor };
  const items = [timestampProducer(Icon, obj)];
  obj = { variant: "text-sm/medium", color: obj[noop.useContext(noop, closure_11)].text, children: text };
  items[1] = timestampProducer(Text_Text.Text, obj);
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let overlay = { overlay: null, "user-profile": null };
overlay = {
  text: "content-inventory-overlay-text-secondary",
  icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
};
overlay.overlay = overlay;
overlay["user-profile"] = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
const createStyles = fn(4636);
let closure_10 = createStyles.createStyles((arg0) => {
  let badgeContainer = { icon: { width: 16, height: 16 }, badgeContainer: null };
  let tmp = null;
  if ("overlay" === arg0) {
    badgeContainer = {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      paddingVertical: nativeDefault.space.PX_4,
      paddingLeft: nativeDefault.space.PX_8,
      paddingRight: 10,
      borderRadius: nativeDefault.radii.sm,
    };
    tmp = badgeContainer;
  }
  badgeContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
  const merged = Object.assign(tmp);
  badgeContainer.badgeContainer = badgeContainer;
  return badgeContainer;
});
const redux = noop.createContext("overlay");
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export const BadgesContainer = function BadgesContainer(location) {
  obj = { value: location.location, children: null };
  obj = { style: location.style, children: location.children };
  obj.children = timestampProducer(View, obj);
  return timestampProducer(redux.Provider, obj);
};
export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = closure_10(noop.useContext(closure_11));
  obj = utils;
  if (obj.isEntryActive(entry)) {
    let icon = nativeDefault.colors.STATUS_POSITIVE;
  } else {
    icon = obj[noop.useContext(noop, closure_11)].icon;
  }
  obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: icon };
  const items = [
    timestampProducer(GameControllerIcon.GameControllerIcon, obj),
    timestampProducer(ContentTimestamp, { entry }),
  ];
  obj.children = items;
  return React5(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  obj = utils;
  if (obj.isEntryMarathon(entry)) {
    let tmpResult = utils;
    if (tmpResult.isEntryActive(entry)) {
      let icon = nativeDefault.colors.STATUS_POSITIVE;
    } else {
      icon = obj[noop.useContext(noop, closure_11)].icon;
    }
    tmpResult = utils;
    const marathonDescription = tmpResult.getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp7 = null;
    if (null != text) {
      obj = { Icon: TimerIcon.TimerIcon, iconColor: icon, text, accessibilityLabel: tmp6 };
      tmp7 = timestampProducer(BaseBadge, obj);
    }
    return tmp7;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  obj = utils;
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: NewUserIcon.NewUserIcon, text: null, iconColor: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.keY6mW);
    obj.iconColor = nativeDefault.colors.STATUS_POSITIVE;
    tmp3 = timestampProducer(BaseBadge, obj);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  obj = utils;
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp4 = null;
  if (null != streakCount) {
    tmp4 = null;
    if (streakCount >= 2) {
      obj = { Icon: FlashIcon.FlashIcon, text: null, iconColor: null, accessibilityLabel: null };
      const intl = util.intl;
      obj = { days: streakCount };
      obj.text = intl.formatToPlainString(util.t["Klie/P"], obj);
      obj.iconColor = obj[noop.useContext(noop, closure_11)].icon;
      const intl2 = util.intl;
      const obj1 = { days: streakCount };
      obj.accessibilityLabel = intl2.formatToPlainString(util.t.nVLPBf, obj1);
      tmp4 = timestampProducer(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const TrendingBadge = function TrendingBadge(entry) {
  obj = utils;
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp4 = null;
  if (null != trendingType) {
    tmp4 = null;
    if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: FireIcon.FireIcon, text: null, iconColor: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.TsWCdW);
      obj.iconColor = obj[noop.useContext(noop, closure_11)].icon;
      tmp4 = timestampProducer(BaseBadge, obj);
    }
  }
  return tmp4;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  obj = utils;
  let tmp3 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    obj = { Icon: RetryIcon.RetryIcon, text: null, iconColor: null };
    const intl = util.intl;
    obj.text = intl.string(util.t.adnLsB);
    obj.iconColor = obj[noop.useContext(noop, closure_11)].icon;
    tmp3 = timestampProducer(BaseBadge, obj);
  }
  return tmp3;
};
export const TopGameBadge = function TopGameBadge(entry) {
  obj = utils;
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    obj = { Icon: TrophyIcon.TrophyIcon, text: null, iconColor: null };
    obj = { children: null };
    const intl = util.intl;
    const items = [intl.string(util.t["/50eHi"]), ": "];
    const intl2 = util.intl;
    const obj1 = { hours: null };
    const _Math = Math;
    obj1.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
    items[2] = intl2.format(util.t.SDRHgr, obj1);
    obj.children = items;
    obj.text = React5(React6, obj);
    obj.iconColor = obj[noop.useContext(noop, closure_11)].icon;
    return timestampProducer(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = closure_10(noop.useContext(closure_11));
  obj = { style: tmp.badgeContainer, children: null };
  obj = { style: tmp.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [
    timestampProducer(TimerIcon.TimerIcon, obj),
    timestampProducer(ContentTimestamp, { entry: entry.entry }),
  ];
  obj.children = items;
  return React5(View, obj);
};
