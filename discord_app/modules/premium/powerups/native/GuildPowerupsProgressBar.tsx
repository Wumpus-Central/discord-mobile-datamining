// discord_app/modules/premium/powerups/native/GuildPowerupsProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openGuildPowerupsModalDefault from "utils/openGuildPowerupsModal.tsx";
import GuildBoostingProgressBarActionCreators from "../../../guild_boosting/GuildBoostingProgressBarActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildBoostingProgressBarPersistedStore from "../../../guild_boosting/GuildBoostingProgressBarPersistedStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const colors = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let result = 2 * nativeDefault.space.PX_4;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
fn(4560);
let obj = {
  container: null,
  track: null,
  fillContainer: null,
  fill: null,
  fillShadow: null,
  textContainer: null,
  headerText: null,
  rightContent: null,
  descriptionText: null,
};
obj = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
obj.container = obj;
const createStyles = {
  height: 30,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  justifyContent: "center",
};
obj.track = createStyles;
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.padding = 2;
obj.fillContainer = obj2;
obj.fill = {
  height: "100%",
  minWidth: 26,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: "rgba(255, 115, 250, 0.2)",
  overflow: "hidden",
};
obj.fillShadow = {
  shadowColor: "rgba(0, 0, 0, 0.14)",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 2,
};
let obj3 = {
  height: "100%",
  minWidth: 26,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  borderColor: "rgba(255, 115, 250, 0.2)",
  overflow: "hidden",
};
obj.textContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj.headerText = { flexShrink: 1 };
obj.rightContent = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.descriptionText = { flexShrink: 1, opacity: 0.7 };
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: 'function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+"%",opacity:animatedFillOpacity.get()};}',
};
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  let obj = guildId(num[9]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp6 = stateFromStores1(num[10])(stateFromStores);
  let obj1 = guildId(num[9]);
  const items2 = [sharedValue1];
  const items3 = [guildId];
  stateFromStores1 = obj1.useStateFromStores(
    items2,
    () => {
      num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
      if (num == null) {
        num = 0;
      }
      return num;
    },
    items3,
  );
  num = undefined;
  if (stateFromStores != null) {
    num = stateFromStores.premiumSubscriberCount;
  }
  if (num == null) {
    num = 0;
  }
  let obj2 = num2;
  const items4 = [guildId, stateFromStores1, num];
  const effect = num2.useEffect(() => {
    if (stateFromStores1 !== num) {
      const result = GuildBoostingProgressBarActionCreators.updateGuildPremiumSubscriptionCount(guildId, tmp);
    }
  }, items4);
  num2 = 0;
  if (tmp6 > 0) {
    const _Math = Math;
    num2 = Math.min((stateFromStores1 / tmp6) * 100, 100);
  }
  let tmp2Result = tmp2(tmp3[6]);
  sharedValue = tmp2Result.useSharedValue(num2);
  tmp2Result = tmp2(tmp3[6]);
  let num4 = 0;
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = tmp2Result.useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = obj2.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(num2, { duration: 500 }));
    num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(timing.withTiming(num, { duration: 500 }));
    return () => {
      guildId(num[6]).cancelAnimation(sharedValue);
      const obj = guildId(num[6]);
      guildId(num[6]).cancelAnimation(sharedValue1);
    };
  }, items5);
  class T {
    constructor() {
      obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
      return obj;
    }
  }
  T.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  T.__workletHash = 6718232104000;
  T.__initData = __initData;
  const items6 = [guildId];
  const animatedStyle = guildId(num[6]).useAnimatedStyle(T);
  const callback = obj2.useCallback(() => {
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_BOOSTING_SIDEBAR_DISPLAY };
    openGuildPowerupsModalDefault(obj);
  }, items6);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[15]).intl;
    obj = { appliedBoostCount: stateFromStores1 };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[16])["Ehpq+7"], obj);
  } else {
    const intl = tmp2(tmp3[15]).intl;
    obj = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[16])["/rbPDs"], obj);
  }
  obj1 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityValue: null,
    onPress: null,
    style: null,
    children: null,
  };
  const intl3 = tmp2(tmp3[15]).intl;
  obj1.accessibilityLabel = intl3.string(stateFromStores1(num[16]).NI6Ihe);
  obj1.accessibilityValue = { text: formatToPlainStringResult };
  obj1.onPress = callback;
  obj1.style = tmp.container;
  obj2 = { style: tmp.track, children: null };
  const obj3 = { style: tmp.fillContainer, children: null };
  const obj4 = { style: null, colors, useAngle: true, angle: 270 };
  const items7 = [, ,];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  obj4.style = items7;
  obj3.children = closure_7(LinearGradient, obj4);
  const items8 = [closure_7(sharedValue, obj3)];
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = {
    variant: "text-xs/semibold",
    color: "text-default",
    lineClamp: 1,
    style: tmp.headerText,
    children: null,
  };
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[15]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(tmp5(tmp3[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[15]).intl;
    combined = intl4.string(tmp5(tmp3[16]).NI6Ihe);
  }
  obj6.children = combined;
  const items9 = [closure_7(guildId(num[18]).Text, obj6)];
  const obj7 = { style: tmp.rightContent, children: null };
  const items10 = [
    closure_7(guildId(num[18]).Text, {
      variant: "text-xs/semibold",
      color: "text-default",
      lineClamp: 1,
      style: tmp.descriptionText,
      children: formatToPlainStringResult,
    }),
  ];
  const obj8 = {
    variant: "text-xs/semibold",
    color: "text-default",
    lineClamp: 1,
    style: tmp.descriptionText,
    children: formatToPlainStringResult,
  };
  const tmp2Result1 = guildId(num[6]);
  items10[1] = closure_7(guildId(num[19]).ChevronSmallRightIcon, {
    size: "sm",
    color: stateFromStores1(num[5]).colors.TEXT_DEFAULT,
  });
  obj7.children = items10;
  items9[1] = closure_8(sharedValue, obj7);
  obj5.children = items9;
  items8[1] = closure_8(sharedValue, obj5);
  obj2.children = items8;
  obj1.children = closure_8(sharedValue, obj2);
  return closure_7(guildId(num[17]).PressableScale, obj1);
}
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;
