// === Module 15773: GuildPowerupsProgressBar ===

// Module 15773 (GuildPowerupsProgressBar)
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4908 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 15774 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import importDefaultResult from "module_4187" /* 4187 */;

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let result = 2 * ThemesDefault.space.PX_4;
let closure_10 = importDefaultResult.createAnimatedComponent(LinearGradientDefault);
let obj = { container: null, track: null, fillContainer: null, fill: null, fillShadow: null, textContainer: null, rightContent: null };
obj = { paddingVertical: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { height: 30, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
obj[1] = createCacheKey;
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.padding = 2;
obj[2] = obj2;
obj[3] = { height: "100%", minWidth: 26, borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj[4] = { shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2 };
let obj3 = { height: "100%", minWidth: 26, borderRadius: ThemesDefault.radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj[5] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_12 };
obj[6] = { flexDirection: "row", alignItems: "center" };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const obj4 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_12 };
let result1 = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  const tmp = callback2();
  let obj = guildId(num[9]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId), items1);
  const tmp6 = stateFromStores1(num[10])(stateFromStores);
  obj1 = guildId(num[9]);
  const items2 = [sharedValue1];
  const items3 = [guildId];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    num = sharedValue1.getCountForGuild(guildId);
    if (num == null) {
      num = 0;
    }
    return num;
  }, items3);
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
      const result = guildId(num[11]).updateGuildPremiumSubscriptionCount(guildId, tmp);
      const obj = guildId(num[11]);
    }
  }, items4);
  num2 = 0;
  if (tmp6 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp6 * 100, 100);
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
    const result = sharedValue.set(guildId(num[12]).withTiming(num2, { duration: 500 }));
    let obj = guildId(num[12]);
    num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(guildId(num[12]).withTiming(num, { duration: 500 }));
    return () => {
      closure_1_0(closure_1_2[6]).cancelAnimation(closure_4);
      const obj = closure_1_0(closure_1_2[6]);
      closure_1_0(closure_1_2[6]).cancelAnimation(closure_5);
    };
  }, items5);
  class O {
    constructor() {
      obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
      return obj;
    }
  }
  O.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  O.__workletHash = 6718232104000;
  O.__initData = closure_12;
  const items6 = [guildId];
  const animatedStyle = guildId(num[6]).useAnimatedStyle(O);
  const callback = obj2.useCallback(() => {
    const obj = { guildId, analyticsLocation: stateFromStores1(num[14]).GUILD_BOOSTING_SIDEBAR_DISPLAY };
    stateFromStores1(num[13])(obj);
  }, items6);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[15]).intl;
    obj = { appliedBoostCount: null };
    obj[0] = stateFromStores1;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[16])["Ehpq+7"], obj);
  } else {
    const intl = tmp2(tmp3[15]).intl;
    obj = { appliedBoostCount: null, maxBoostCount: null };
    obj[0] = stateFromStores1;
    obj[1] = tmp6;
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[16])["/rbPDs"], obj);
  }
  obj1 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj1[1] = intl3.string(stateFromStores1(num[16]).NI6Ihe);
  obj1[2] = { text: formatToPlainStringResult };
  obj1[3] = callback;
  obj1[4] = tmp.container;
  obj2 = { style: tmp.track, children: null };
  const tmp2Result1 = guildId(num[6]);
  const items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  const items8 = [callback(sharedValue, { style: tmp.fillContainer, children: callback(closure_10, obj4) }), ];
  const obj5 = { style: tmp.textContainer, children: null };
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[15]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(tmp5(tmp3[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[15]).intl;
    combined = intl4.string(tmp5(tmp3[16]).NI6Ihe);
  }
  const items9 = [callback(guildId(num[18]).Text, { variant: "text-xs/semibold", color: "text-default", children: combined }), ];
  const obj6 = { style: tmp.rightContent, children: null };
  const items10 = [callback(guildId(num[18]).Text, { variant: "text-xs/semibold", color: "text-default", style: { opacity: 0.7 }, children: formatToPlainStringResult }), ];
  const obj3 = { style: tmp.fillContainer, children: callback(closure_10, obj4) };
  items10[1] = callback(guildId(num[19]).ChevronSmallRightIcon, { size: "sm", color: stateFromStores1(num[5]).colors.TEXT_DEFAULT });
  obj6[1] = items10;
  items9[1] = closure_8(sharedValue, obj6);
  obj5[1] = items9;
  items8[1] = closure_8(sharedValue, obj5);
  obj2[1] = items8;
  obj1[5] = closure_8(sharedValue, obj2);
  return callback(guildId(num[17]).PressableScale, obj1);
};
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;