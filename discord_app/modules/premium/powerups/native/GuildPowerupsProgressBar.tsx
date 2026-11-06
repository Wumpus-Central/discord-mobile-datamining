// discord_app/modules/premium/powerups/native/GuildPowerupsProgressBar.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../../_runtime/05745_LinearGradient.js";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openGuildPowerupsModalDefault from "utils/openGuildPowerupsModal.tsx";
import GuildBoostingProgressBarActionCreators from "../../../guild_boosting/GuildBoostingProgressBarActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildBoostingProgressBarPersistedStore from "../../../guild_boosting/GuildBoostingProgressBarPersistedStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import 01652__ from "../../../../../_runtime/metro/01652__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const colors = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let result = 2 * nativeDefault.space.PX_4;
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
const createStyles = fn(5170);
let obj = { container: { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, track: null, fillContainer: null, fill: null, fillShadow: null, textContainer: null, headerText: null, rightContent: null, descriptionText: null };
const obj3 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
obj.track = { height: 30, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.padding = 2;
obj.fillContainer = obj5;
let obj4 = { height: 30, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
obj.fill = { height: "100%", minWidth: 26, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj.fillShadow = { shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2 };
let obj6 = { height: "100%", minWidth: 26, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj.textContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj.headerText = { flexShrink: 1 };
obj.rightContent = { flexDirection: "row", alignItems: "center", flexShrink: 1 };
obj.descriptionText = { flexShrink: 1, opacity: 0.7 };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { code: "(function GuildPowerupsProgressBarTsx1(){let[animatedFillPercent,animatedFillOpacity]=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};})" };
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  importDefault = undefined;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildStore.getGuild(c0), items1);
  const tmp6 = require("useTotalPossibleBoostCount")(stateFromStores);
  let obj = require("useStateFromStores");
  const items2 = [sharedValue1];
  const items3 = [guildId];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () => {
    num = GuildBoostingProgressBarPersistedStore.getCountForGuild(c0);
    if (num == null) {
      num = 0;
    }
    return num;
  }, items3);
  importDefault = stateFromStores1;
  num = undefined;
  if (stateFromStores != null) {
    num = stateFromStores.premiumSubscriberCount;
  }
  if (num == null) {
    num = 0;
  }
  const items4 = [guildId, stateFromStores1, num];
  const effect = num2.useEffect(() => {
    if (c1 !== num) {
      const result = GuildBoostingProgressBarActionCreators.updateGuildPremiumSubscriptionCount(c0, tmp);
    }
  }, items4);
  num2 = 0;
  if (tmp6 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp6 * 100, 100);
  }
  const obj2 = require("useStateFromStores");
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  const tmp2Result = require("../../../../../_runtime/metro/01652__.js");
  let num4 = 0;
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = obj3.useEffect(() => {
    const result = sharedValue.set(timing_timing.withTiming(num2, { duration: 500 }));
    num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(timing_timing.withTiming(num, { duration: 500 }));
    return () => {
      c0(num[6]).cancelAnimation(sharedValue);
      const obj = c0(num[6]);
      c0(num[6]).cancelAnimation(sharedValue1);
    };
  }, items5);
  const tmp2Result3 = require("../../../../../_runtime/metro/01652__.js");
  const items6 = [closure_12, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items6;
  class GuildPowerupsProgressBarTsx1 {
    constructor() {
      obj = { width: "" + closure_0.get() + "%", opacity: closure_1.get() };
      return obj;
    }
  }
  const items7 = [tmp14, tmp15];
  GuildPowerupsProgressBarTsx1.__closure = items7;
  GuildPowerupsProgressBarTsx1.__workletHash = 14308508651993;
  GuildPowerupsProgressBarTsx1.__initData = tmp13;
  const items8 = [guildId];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(GuildPowerupsProgressBarTsx1);
  const callback = obj3.useCallback(() => {
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_BOOSTING_SIDEBAR_DISPLAY };
    openGuildPowerupsModalDefault(obj);
  }, items8);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[15]).intl;
    const obj4 = { appliedBoostCount: stateFromStores1 };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[16])["Ehpq+7"], obj4);
  } else {
    const intl = tmp2(tmp3[15]).intl;
    const obj5 = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[16])["/rbPDs"], obj5);
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj6.accessibilityLabel = intl3.string(require("../GuildPowerups.messages.js").NI6Ihe);
  obj6.accessibilityValue = { text: formatToPlainStringResult };
  obj6.onPress = callback;
  obj6.style = tmp.container;
  const obj7 = { style: tmp.track, children: null };
  const obj8 = { style: tmp.fillContainer, children: null };
  const obj9 = { style: null, colors, useAngle: true, angle: 270 };
  const items9 = [, , ];
  ({ fill: arr10[0], fillShadow: arr10[1] } = tmp);
  items9[2] = animatedStyle;
  obj9.style = items9;
  obj8.children = closure_7(LinearGradient, obj9);
  const items10 = [closure_7(sharedValue, obj8), ];
  const obj10 = { style: tmp.textContainer, children: null };
  const obj11 = { variant: "body-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.headerText, children: null };
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[15]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(tmp5(tmp3[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[15]).intl;
    combined = intl4.string(tmp5(tmp3[16]).NI6Ihe);
  }
  obj11.children = combined;
  const items11 = [closure_7(require("Text/Text").Text, obj11), ];
  const obj12 = { style: tmp.rightContent, children: null };
  const items12 = [closure_7(require("Text/Text").Text, { variant: "body-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult }), ];
  const obj13 = { variant: "body-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult };
  const tmp2Result4 = require("../../../../../_runtime/metro/01652__.js");
  items12[1] = closure_7(require("ChevronSmallRightIcon").ChevronSmallRightIcon, { size: "sm", color: require("native").colors.TEXT_DEFAULT });
  obj12.children = items12;
  items11[1] = closure_8(sharedValue, obj12);
  obj10.children = items11;
  items10[1] = closure_8(sharedValue, obj10);
  obj7.children = items10;
  obj6.children = closure_8(sharedValue, obj7);
  return closure_7(require("native").PressableScale, obj6);
};
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;