// === Module 16151: GuildPowerupsProgressBar ===

// Module 16151 (GuildPowerupsProgressBar)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12138 */;
import GuildBoostingProgressBarActionCreators from "GuildBoostingProgressBarActionCreators" /* 16154 */;
import noop from "module_19" /* 19 */;
import GuildBoostingProgressBarPersistedStore from "GuildBoostingProgressBarPersistedStore" /* 16152 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const colors = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let c10 = 500;
let result = 2 * nativeDefault.space.PX_4;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const createStyles = fn(4890);
let obj = { container: { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, track: null, fillContainer: null, fill: null, fillShadow: null, textContainer: null, headerText: null, rightContent: null, descriptionText: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
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
let closure_12 = createStyles.createStyles(obj);
const __initData = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const __initData2 = { code: "function GuildPowerupsProgressBarTsx2(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
const sum = result + 30;
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(num9[10]).c(59);
  guildId = guildId.guildId;
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = guildId(num9[10]);
  const stateFromStores = guildId(num9[11]).useStateFromStores(first, tmp7, tmp8);
  const tmp11 = stateFromStores1(num9[12])(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [sharedValue1];
    cResult[4] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    const fn2 = function w() {
      let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    const items3 = [guildId];
    cResult[5] = guildId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const tmp10 = stateFromStores1;
  const tmpResult = guildId(num9[11]);
  stateFromStores1 = guildId(num9[11]).useStateFromStores(tmp12, tmp14, tmp15);
  num9 = undefined;
  if (stateFromStores != null) {
    num9 = stateFromStores.premiumSubscriberCount;
  }
  if (num9 == null) {
    num9 = 0;
  }
  if (cResult[8] === stateFromStores1) {
    if (cResult[9] === guildId) {
      if (cResult[10] === num9) {
        let tmp17 = cResult[11];
        let tmp18 = cResult[12];
      }
      const effect = num11.useEffect(tmp17, tmp18);
      num11 = 0;
      if (tmp11 > 0) {
        const _Math = Math;
        num11 = Math.min(stateFromStores1 / tmp11 * 100, 100);
      }
      const sharedValue = tmp(tmp2[6]).useSharedValue(num11);
      const obj4 = num11;
      const tmpResult6 = tmp(tmp2[6]);
      let num13 = 0;
      if (num11 > 0) {
        num13 = 1;
      }
      sharedValue1 = tmp(tmp2[6]).useSharedValue(num13);
      if (cResult[13] === sharedValue1) {
        if (cResult[14] === sharedValue) {
          if (cResult[15] === num11) {
            let tmp24 = cResult[17];
            const tmp23 = cResult[16];
          }
          const effect1 = obj4.useEffect(tmp24, tmp23);
          class V {
            constructor() {
              obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
              return obj;
            }
          }
          let obj2 = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
          V.__closure = obj2;
          V.__workletHash = 6718232104000;
          V.__initData = __initData;
          const animatedStyle = tmp(tmp2[6]).useAnimatedStyle(V);
          if (cResult[18] !== guildId) {
            class X {
              constructor() {
                obj = { guildId, analyticsLocation: null };
                tmp = closure_1(closure_2[15]);
                obj.analyticsLocation = closure_1(closure_2[16]).GUILD_BOOSTING_SIDEBAR_DISPLAY;
                tmpResult = tmp(obj);
                return;
              }
            }
            cResult[18] = guildId;
            class V {
              constructor() {
                obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
                return obj;
              }
            }
            cResult[19] = X;
          } else {
            class X {
              constructor() {
                obj = { guildId, analyticsLocation: null };
                tmp = closure_1(closure_2[15]);
                obj.analyticsLocation = closure_1(closure_2[16]).GUILD_BOOSTING_SIDEBAR_DISPLAY;
                tmpResult = tmp(obj);
                return;
              }
            }
          }
          if (cResult[20] === stateFromStores1) {
            class X {
              constructor() {
                obj = { guildId, analyticsLocation: null };
                tmp = closure_1(closure_2[15]);
                obj.analyticsLocation = closure_1(closure_2[16]).GUILD_BOOSTING_SIDEBAR_DISPLAY;
                tmpResult = tmp(obj);
                return;
              }
            }
          }
          const intl = tmp(tmp2[17]).intl;
          class R {
            constructor() {
              obj = closure_0(closure_2[14]);
              obj1 = { duration: c10 };
              tmp = c10;
              result = closure_4.set(obj.withTiming(closure_3, obj1));
              tmp3 = closure_5;
              obj3 = closure_0(closure_2[14]);
              num = 0;
              if (closure_3 > 0) {
                num = 1;
              }
              result1 = closure_5.set(obj3.withTiming(num, { duration: tmp }));
              return () => {
                guildId(num9[6]).cancelAnimation(sharedValue);
                const obj = guildId(num9[6]);
                guildId(num9[6]).cancelAnimation(sharedValue1);
              };
            }
          }
          let obj3 = tmp10(tmp2[18]);
          if (stateFromStores1 >= tmp11) {
            class X {
              constructor() {
                obj = { guildId, analyticsLocation: null };
                tmp = closure_1(closure_2[15]);
                obj.analyticsLocation = closure_1(closure_2[16]).GUILD_BOOSTING_SIDEBAR_DISPLAY;
                tmpResult = tmp(obj);
                return;
              }
            }
            obj3 = { appliedBoostCount: stateFromStores1 };
            class V {
              constructor() {
                obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
                return obj;
              }
            }
          } else {
            class X {
              constructor() {
                obj = { guildId, analyticsLocation: null };
                tmp = closure_1(closure_2[15]);
                obj.analyticsLocation = closure_1(closure_2[16]).GUILD_BOOSTING_SIDEBAR_DISPLAY;
                tmpResult = tmp(obj);
                return;
              }
            }
            tmp31[0] = stateFromStores1;
            tmp31[1] = tmp11;
            class V {
              constructor() {
                obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
                return obj;
              }
            }
          }
          cResult[20] = stateFromStores1;
          cResult[21] = stateFromStores1 >= tmp11;
          cResult[22] = tmp11;
          cResult[23] = tmp32;
          const tmpResult8 = tmp(tmp2[6]);
        }
      }
      class R {
        constructor() {
          obj = closure_0(closure_2[14]);
          obj1 = { duration: c10 };
          tmp = c10;
          result = closure_4.set(obj.withTiming(closure_3, obj1));
          tmp3 = closure_5;
          obj3 = closure_0(closure_2[14]);
          num = 0;
          if (closure_3 > 0) {
            num = 1;
          }
          result1 = closure_5.set(obj3.withTiming(num, { duration: tmp }));
          return () => {
            guildId(num9[6]).cancelAnimation(sharedValue);
            const obj = guildId(num9[6]);
            guildId(num9[6]).cancelAnimation(sharedValue1);
          };
        }
      }
      const items4 = [sharedValue, sharedValue1, num11];
      cResult[13] = sharedValue1;
      cResult[14] = sharedValue;
      cResult[15] = num11;
      cResult[16] = items4;
      cResult[17] = R;
      tmp24 = R;
      class A {
        constructor() {
          if (closure_1 !== c2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[13]);
            tmp4 = guildId;
            result = obj.updateGuildPremiumSubscriptionCount(guildId, tmp);
          }
          return;
        }
      }
      const tmpResult7 = tmp(tmp2[6]);
    }
  }
  class A {
    constructor() {
      if (closure_1 !== c2) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[13]);
        tmp4 = guildId;
        result = obj.updateGuildPremiumSubscriptionCount(guildId, tmp);
      }
      return;
    }
  }
  const items5 = [guildId, stateFromStores1, num9];
  cResult[8] = stateFromStores1;
  cResult[9] = guildId;
  cResult[10] = num9;
  cResult[11] = A;
  cResult[12] = items5;
  tmp18 = items5;
  tmp17 = A;
  const tmpResult5 = guildId(num9[11]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let stateFromStores1;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_12();
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(num[11]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp6 = stateFromStores1(num[12])(stateFromStores);
  let obj = guildId(num[11]);
  const items2 = [sharedValue1];
  const items3 = [guildId];
  stateFromStores1 = guildId(num[11]).useStateFromStores(items2, () => {
    num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
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
  const items4 = [guildId, stateFromStores1, num];
  const effect = num2.useEffect(() => {
    if (stateFromStores1 !== num) {
      const result = GuildBoostingProgressBarActionCreators.updateGuildPremiumSubscriptionCount(guildId, tmp);
    }
  }, items4);
  num2 = 0;
  if (tmp6 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp6 * 100, 100);
  }
  let obj2 = guildId(num[11]);
  sharedValue = guildId(num[6]).useSharedValue(num2);
  const tmp2Result = guildId(num[6]);
  let num4 = 0;
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = guildId(num[6]).useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = obj3.useEffect(() => {
    const result = sharedValue.set(timing.withTiming(num2, { duration }));
    const obj2 = { duration };
    num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(timing.withTiming(num, { duration }));
    return () => {
      guildId(num[6]).cancelAnimation(sharedValue);
      const obj = guildId(num[6]);
      guildId(num[6]).cancelAnimation(sharedValue1);
    };
  }, items5);
  const tmp2Result3 = guildId(num[6]);
  class F {
    constructor() {
      obj = { width: "" + closure_4.get() + "%", opacity: closure_5.get() };
      return obj;
    }
  }
  F.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  F.__workletHash = 3044920745091;
  F.__initData = __initData2;
  const items6 = [guildId];
  const animatedStyle = guildId(num[6]).useAnimatedStyle(F);
  const callback = obj3.useCallback(() => {
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_BOOSTING_SIDEBAR_DISPLAY };
    openGuildPowerupsModalDefault(obj);
  }, items6);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[17]).intl;
    const obj4 = { appliedBoostCount: stateFromStores1 };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[18])["Ehpq+7"], obj4);
  } else {
    const intl = tmp2(tmp3[17]).intl;
    const obj5 = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[18])["/rbPDs"], obj5);
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, style: null, children: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj6.accessibilityLabel = intl3.string(stateFromStores1(num[18]).NI6Ihe);
  obj6.accessibilityValue = { text: formatToPlainStringResult };
  obj6.onPress = callback;
  obj6.style = tmp.container;
  const obj7 = { style: tmp.track, children: null };
  const obj8 = { style: tmp.fillContainer, children: null };
  const obj9 = { style: null, colors, useAngle: true, angle: 270 };
  const items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  obj9.style = items7;
  obj8.children = closure_7(LinearGradient, obj9);
  const items8 = [closure_7(sharedValue, obj8), ];
  const obj10 = { style: tmp.textContainer, children: null };
  const obj11 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.headerText, children: null };
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[17]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(tmp5(tmp3[18]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[17]).intl;
    combined = intl4.string(tmp5(tmp3[18]).NI6Ihe);
  }
  obj11.children = combined;
  const items9 = [closure_7(guildId(num[19]).Text, obj11), ];
  const obj12 = { style: tmp.rightContent, children: null };
  const items10 = [closure_7(guildId(num[19]).Text, { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult }), ];
  const obj13 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult };
  const tmp2Result4 = guildId(num[6]);
  items10[1] = closure_7(guildId(num[20]).ChevronSmallRightIcon, { size: "sm", color: stateFromStores1(num[5]).colors.TEXT_DEFAULT });
  obj12.children = items10;
  items9[1] = closure_8(sharedValue, obj12);
  obj10.children = items9;
  items8[1] = closure_8(sharedValue, obj10);
  obj7.children = items8;
  obj6.children = closure_8(sharedValue, obj7);
  return closure_7(guildId(num[21]).PressableScale, obj6);
});
export const BOOST_PROGRESS_BAR_HEIGHT = sum;