// discord_app/modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useNavigation from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TrafficConeSpotIllustration from "../../../../../design/components/mana-assets/native/generated/TrafficConeSpotIllustration.native.tsx";
import SafetyWarningUtils from "../../../shared/SafetyWarningUtils.tsx";
import ChannelSafetyWarningsActionCreators from "../../../ChannelSafetyWarningsActionCreators.tsx";
import SafetyTipsSectionDefault from "../../../shared/native/SafetyTipsSection.tsx";
import TakeActionScreenDefault from "TakeActionScreen.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function getScreens(arg0) {
  ({
    warningId: require,
    senderId: importDefault,
    channelId: dependencyMap,
    isReported: _slicedToArray,
    setReported: noop,
    handleDismiss: useState,
    trackAnalyticsEvent: closure_6,
  } = arg0);
  const obj = {
    title: "",
    fullscreen: true,
    headerRight: NavigatorHeader.getHeaderCloseButton(() => useState()),
    headerLeft: null,
  };
  obj.headerLeft = NavigatorHeader.getHeaderBackButton();
  const obj4 = { INTRO: null, TAKE_ACTION: null, SAFETY_TIPS: null, CRISIS_TEXT_LINE: null };
  const obj5 = {};
  const merged = Object.assign(obj);
  obj5.headerLeft = function headerLeft() {
    return null;
  };
  obj5.render = function render() {
    return __initData2(closure_16, { warningId, senderId, trackAnalyticsEvent });
  };
  obj4.INTRO = obj5;
  const obj6 = {};
  const merged1 = Object.assign(obj);
  obj6.render = function render() {
    return __initData2(closure_17, { senderId, channelId, isReported, setReported, trackAnalyticsEvent });
  };
  obj4.TAKE_ACTION = obj6;
  const obj7 = {};
  const merged2 = Object.assign(obj);
  obj7.render = function render() {
    return closure_1_13(closure_1_18, {});
  };
  obj4.SAFETY_TIPS = obj7;
  const obj8 = {};
  const merged3 = Object.assign(obj);
  obj8.render = function render() {
    return __initData2(closure_19, { trackAnalyticsEvent });
  };
  obj4.CRISIS_TEXT_LINE = obj8;
  return obj4;
}
let useState = fn(19).useState;
get_ActivityIndicator = fn(17);
({ Linking: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(9797);
({
  CRISIS_TEXT_LINE_SMS_URI: closure_9,
  CRISIS_TEXT_LINE_URL: c10,
  TAKEOVER_MODAL_KEY: closure_11,
  getInappropriateConversationsSafetyTips: closure_12,
} = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_32,
    gap: nativeDefault.space.PX_16,
    height: "100%",
  },
  warningText: null,
  ctaContainer: null,
  takeoverHeader: null,
  takeoverDescription: null,
  safetyTips: null,
};
let obj3 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_16,
  height: "100%",
};
obj2.warningText = {
  marginBottom: nativeDefault.space.PX_16,
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let obj4 = {
  marginBottom: nativeDefault.space.PX_16,
  display: "flex",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
obj2.ctaContainer = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
obj2.takeoverHeader = { textAlign: "center", maxWidth: 268 };
obj2.takeoverDescription = { textAlign: "center" };
obj2.safetyTips = { alignSelf: "stretch" };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (warningId) => {
      const cResult = warningId(trackAnalyticsEvent[9]).c(36);
      warningId = warningId.warningId;
      const senderId = warningId.senderId;
      trackAnalyticsEvent = warningId.trackAnalyticsEvent;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== senderId) {
        const fn = function s() {
          return UserStore.getUser(senderId);
        };
        cResult[1] = senderId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = warningId(trackAnalyticsEvent[9]);
      const stateFromStores = warningId(trackAnalyticsEvent[10]).useStateFromStores(first, tmp7);
      const tmpResult = warningId(trackAnalyticsEvent[10]);
      const name = senderId(trackAnalyticsEvent[11]).getName(stateFromStores);
      const obj3 = senderId(trackAnalyticsEvent[11]);
      const navigation = warningId(trackAnalyticsEvent[12]).useNavigation();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = closure_13(tmp(tmp2[13]).TrafficConeSpotIllustration, {});
        cResult[3] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      ({ warningText, takeoverHeader } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[14]).intl;
        const stringResult = intl.string(tmp(tmp2[14]).t.sSMgC6);
        cResult[4] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== tmp4.takeoverHeader) {
        const obj2 = {
          variant: "heading-xl/semibold",
          style: takeoverHeader,
          accessibilityRole: "header",
          children: tmp15,
        };
        const tmp19 = closure_13(tmp(tmp2[15]).Text, obj2);
        cResult[5] = tmp4.takeoverHeader;
        cResult[6] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[6];
      }
      const Text = tmp(tmp2[15]).Text;
      const intl2 = tmp(tmp2[14]).intl;
      const formatResult = intl2.format(warningId(trackAnalyticsEvent[14]).t.q2QrTY, { username: name });
      if (cResult[7] === Text) {
        if (cResult[8] === tmp4.takeoverDescription) {
          if (cResult[9] === formatResult) {
            let tmp21 = cResult[10];
          }
          if (cResult[11] === closure_7) {
            if (cResult[12] === tmp4.warningText) {
              if (cResult[13] === tmp21) {
                if (cResult[14] === tmp17) {
                  let tmp23 = cResult[15];
                }
                const _Symbol = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[14]).intl;
                  const stringResult1 = intl3.string(tmp(tmp2[14]).t["+o4Q7e"]);
                  cResult[16] = stringResult1;
                  let tmp26 = stringResult1;
                } else {
                  tmp26 = cResult[16];
                }
                if (cResult[17] === navigation) {
                  if (cResult[18] === senderId) {
                    if (cResult[19] === trackAnalyticsEvent) {
                      if (cResult[20] === warningId) {
                        let tmp28 = cResult[21];
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(tmp2[14]).intl;
                        const stringResult2 = intl4.string(tmp(tmp2[14]).t.xLkGzP);
                        cResult[22] = stringResult2;
                        let tmp31 = stringResult2;
                      } else {
                        tmp31 = cResult[22];
                      }
                      if (cResult[23] === navigation) {
                        if (cResult[24] === trackAnalyticsEvent) {
                          let tmp33 = cResult[25];
                        }
                        if (cResult[26] === tmp4.ctaContainer) {
                          if (cResult[27] === tmp28) {
                            if (cResult[28] === tmp33) {
                              let tmp36 = cResult[29];
                            }
                            if (cResult[30] === closure_7) {
                              if (cResult[31] === tmp4.container) {
                                if (cResult[32] === tmp23) {
                                  if (cResult[33] === tmp36) {
                                    if (cResult[34] === tmp12) {
                                      let tmp39 = cResult[35];
                                    }
                                    return tmp39;
                                  }
                                }
                              }
                            }
                            const obj4 = { style: tmp4.container, children: null };
                            const items1 = [tmp12, tmp23, tmp36];
                            obj4.children = items1;
                            const tmp41 = closure_14(closure_7, obj4);
                            cResult[30] = closure_7;
                            cResult[31] = tmp4.container;
                            cResult[32] = tmp23;
                            cResult[33] = tmp36;
                            cResult[34] = tmp12;
                            cResult[35] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                        const obj5 = { style: tmp4.ctaContainer, children: null };
                        const items2 = [tmp28, tmp33];
                        obj5.children = items2;
                        const tmp38 = closure_14(closure_7, obj5);
                        cResult[26] = tmp4.ctaContainer;
                        cResult[27] = tmp28;
                        cResult[28] = tmp33;
                        cResult[29] = tmp38;
                        tmp36 = tmp38;
                      }
                      const obj6 = {
                        variant: "secondary",
                        size: "lg",
                        text: tmp31,
                        grow: true,
                        onPress() {
                          navigation.push("SAFETY_TIPS");
                          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                        },
                      };
                      const tmp35 = closure_13(tmp(tmp2[16]).Button, obj6);
                      cResult[23] = navigation;
                      cResult[24] = trackAnalyticsEvent;
                      cResult[25] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                }
                const obj7 = {
                  variant: "primary",
                  size: "lg",
                  text: tmp26,
                  grow: true,
                  onPress() {
                    navigation.push("TAKE_ACTION", { warningId, senderId });
                    trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
                  },
                };
                const tmp30 = closure_13(tmp(tmp2[16]).Button, obj7);
                cResult[17] = navigation;
                cResult[18] = senderId;
                cResult[19] = trackAnalyticsEvent;
                cResult[20] = warningId;
                cResult[21] = tmp30;
                tmp28 = tmp30;
              }
            }
          }
          const obj8 = { style: warningText, children: null };
          const items3 = [tmp17, tmp21];
          obj8.children = items3;
          const tmp25 = closure_14(closure_7, obj8);
          cResult[11] = closure_7;
          cResult[12] = tmp4.warningText;
          cResult[13] = tmp21;
          cResult[14] = tmp17;
          cResult[15] = tmp25;
          tmp23 = tmp25;
        }
      }
      const tmp22 = closure_13(Text, {
        variant: "text-md/medium",
        style: tmp4.takeoverDescription,
        children: formatResult,
      });
      cResult[7] = Text;
      cResult[8] = tmp4.takeoverDescription;
      cResult[9] = formatResult;
      cResult[10] = tmp22;
      tmp21 = tmp22;
      const tmpResult2 = warningId(trackAnalyticsEvent[12]);
    }
  : (arg0) => {
      ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
      const tmp = closure_15();
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(senderId));
      const name = UserUtilsDefault.getName(stateFromStores);
      closure_3 = useNavigation.useNavigation();
      const obj4 = { style: tmp.container, children: null };
      const items1 = [closure_13(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), ,];
      const obj5 = { style: tmp.warningText, children: null };
      const obj6 = {
        variant: "heading-xl/semibold",
        style: tmp.takeoverHeader,
        accessibilityRole: "header",
        children: null,
      };
      const intl = util.intl;
      obj6.children = intl.string(util.t.sSMgC6);
      const items2 = [closure_13(Text_Text.Text, obj6)];
      const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
      const intl2 = util.intl;
      obj7.children = intl2.format(util.t.q2QrTY, { username: name });
      items2[1] = closure_13(Text_Text.Text, obj7);
      obj5.children = items2;
      items1[1] = closure_14(closure_7, obj5);
      const obj8 = { style: tmp.ctaContainer, children: null };
      const obj9 = { variant: "primary", size: "lg", text: null, grow: true, onPress: null };
      const intl3 = util.intl;
      obj9.text = intl3.string(util.t["+o4Q7e"]);
      obj9.onPress = function onPress() {
        closure_3.push("TAKE_ACTION", { warningId, senderId });
        dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
      };
      const items3 = [closure_13(components_Button_Button.Button, obj9)];
      const obj10 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
      const intl4 = util.intl;
      obj10.text = intl4.string(util.t.xLkGzP);
      obj10.onPress = function onPress() {
        closure_3.push("SAFETY_TIPS");
        dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
      };
      items3[1] = closure_13(components_Button_Button.Button, obj10);
      obj8.children = items3;
      items1[2] = closure_14(closure_7, obj8);
      obj4.children = items1;
      return closure_14(closure_7, obj4);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
      const tmp4 = closure_15();
      ({ container, warningText, takeoverHeader } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["mWO+ys"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.takeoverHeader) {
        const obj2 = {
          variant: "heading-xl/semibold",
          style: takeoverHeader,
          accessibilityRole: "header",
          children: first,
        };
        const tmp9 = __initData2(Text_Text.Text, obj2);
        cResult[1] = tmp4.takeoverHeader;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.S0XtKF);
        cResult[3] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp4.takeoverDescription) {
        const obj3 = { variant: "text-md/medium", style: tmp4.takeoverDescription, children: tmp10 };
        const tmp14 = __initData2(Text_Text.Text, obj3);
        cResult[4] = tmp4.takeoverDescription;
        cResult[5] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp4.warningText) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp12) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === channelId) {
            if (cResult[11] === isReported) {
              if (cResult[12] === senderId) {
                if (cResult[13] === setReported) {
                  if (cResult[14] === trackAnalyticsEvent) {
                    let tmp17 = cResult[15];
                  }
                  if (cResult[16] === tmp4.container) {
                    if (cResult[17] === tmp17) {
                      if (cResult[18] === tmp15) {
                        let tmp21 = cResult[19];
                      }
                      return tmp21;
                    }
                  }
                  const obj4 = { style: container, children: null };
                  const items = [tmp15, tmp17];
                  obj4.children = items;
                  const tmp24 = state(React5, obj4);
                  cResult[16] = tmp4.container;
                  cResult[17] = tmp17;
                  cResult[18] = tmp15;
                  cResult[19] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
          }
          const obj5 = { senderId, channelId, isReported, setReported, trackAnalyticsEvent };
          const tmp20 = __initData2(TakeActionScreenDefault, obj5);
          cResult[10] = channelId;
          cResult[11] = isReported;
          cResult[12] = senderId;
          cResult[13] = setReported;
          cResult[14] = trackAnalyticsEvent;
          cResult[15] = tmp20;
          tmp17 = tmp20;
        }
      }
      const obj6 = { style: warningText, children: null };
      const items1 = [tmp7, tmp12];
      obj6.children = items1;
      const tmp16 = state(React5, obj6);
      cResult[6] = tmp4.warningText;
      cResult[7] = tmp7;
      cResult[8] = tmp12;
      cResult[9] = tmp16;
      tmp15 = tmp16;
    }
  : (arg0) => {
      ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
      const tmp = closure_15();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.warningText, children: null };
      const obj3 = {
        variant: "heading-xl/semibold",
        style: tmp.takeoverHeader,
        accessibilityRole: "header",
        children: null,
      };
      const intl = util.intl;
      obj3.children = intl.string(util.t["mWO+ys"]);
      const items = [__initData2(Text_Text.Text, obj3)];
      const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.S0XtKF);
      items[1] = __initData2(Text_Text.Text, obj4);
      obj2.children = items;
      const items1 = [
        state(React5, obj2),
        __initData2(TakeActionScreenDefault, { senderId, channelId, isReported, setReported, trackAnalyticsEvent }),
      ];
      obj.children = items1;
      return state(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { showHeader: true, description: null, safetyTips: null };
        const intl = util.intl;
        obj2.description = intl.string(util.t.DJMZX6);
        const tmp8 = SafetyTipsSectionDefault;
        obj2.safetyTips = __initData().map((children, index) =>
          closure_1_13(Text_Text.Text, { variant: "text-sm/medium", children }, index),
        );
        const tmp10 = __initData2(tmp8, obj2);
        cResult[0] = tmp10;
        let first = tmp10;
        const arr = __initData();
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.safetyTips) {
        const obj3 = { style: tmp4.safetyTips, children: first };
        const tmp14 = __initData2(React5, obj3);
        cResult[1] = tmp4.safetyTips;
        cResult[2] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp11) {
          let tmp15 = cResult[5];
        }
        return tmp15;
      }
      const tmp16 = __initData2(React5, { style: tmp4.container, children: tmp11 });
      cResult[3] = tmp4.container;
      cResult[4] = tmp11;
      cResult[5] = tmp16;
      tmp15 = tmp16;
      const obj4 = { style: tmp4.container, children: tmp11 };
    }
  : () => {
      const tmp = closure_15();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.safetyTips, children: null };
      const obj3 = { showHeader: true, description: null, safetyTips: null };
      const intl = util.intl;
      obj3.description = intl.string(util.t.DJMZX6);
      const tmp2 = SafetyTipsSectionDefault;
      obj3.safetyTips = __initData().map((children, index) =>
        closure_1_13(Text_Text.Text, { variant: "text-sm/medium", children }, index),
      );
      obj2.children = __initData2(tmp2, obj3);
      obj.children = __initData2(React5, obj2);
      return __initData2(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackAnalyticsEvent) => {
      const cResult = trackAnalyticsEvent(576).c(25);
      trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_13(tmp(15618).SafetyChatSpotIllustration, {});
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      ({ warningText, takeoverHeader } = tmp4);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.NUMAsF);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.takeoverHeader) {
        const obj2 = {
          variant: "heading-xl/semibold",
          style: takeoverHeader,
          accessibilityRole: "header",
          children: tmp8,
        };
        const tmp12 = closure_13(tmp(4892).Text, obj2);
        cResult[2] = tmp4.takeoverHeader;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.uicS5l);
        cResult[4] = stringResult1;
        let tmp13 = stringResult1;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp4.takeoverDescription) {
        const obj3 = { variant: "text-md/medium", style: tmp4.takeoverDescription, children: tmp13 };
        const tmp17 = closure_13(tmp(4892).Text, obj3);
        cResult[5] = tmp4.takeoverDescription;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.warningText) {
        if (cResult[8] === tmp10) {
          if (cResult[9] === tmp15) {
            let tmp18 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.lkUb4S);
            cResult[11] = stringResult2;
            let tmp20 = stringResult2;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] !== trackAnalyticsEvent) {
            const obj4 = {
              variant: "secondary",
              size: "lg",
              text: tmp20,
              grow: true,
              onPress() {
                timestampProducer.openURL(options);
                trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
              },
            };
            const tmp24 = closure_13(tmp(5601).Button, obj4);
            cResult[12] = trackAnalyticsEvent;
            cResult[13] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(tmp(1126).t.ogLlvy);
            cResult[14] = stringResult3;
            let tmp25 = stringResult3;
          } else {
            tmp25 = cResult[14];
          }
          if (cResult[15] !== trackAnalyticsEvent) {
            const obj5 = {
              variant: "secondary",
              size: "lg",
              text: tmp25,
              grow: true,
              onPress() {
                timestampProducer.openURL(v65535);
                trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
              },
            };
            const tmp29 = closure_13(tmp(5601).Button, obj5);
            cResult[15] = trackAnalyticsEvent;
            cResult[16] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[16];
          }
          if (cResult[17] === tmp4.ctaContainer) {
            if (cResult[18] === tmp22) {
              if (cResult[19] === tmp27) {
                let tmp30 = cResult[20];
              }
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp18) {
                  if (cResult[23] === tmp30) {
                    let tmp34 = cResult[24];
                  }
                  return tmp34;
                }
              }
              const obj6 = { style: tmp4.container, children: null };
              const items = [first, tmp18, tmp30];
              obj6.children = items;
              const tmp37 = closure_14(closure_7, obj6);
              cResult[21] = tmp4.container;
              cResult[22] = tmp18;
              cResult[23] = tmp30;
              cResult[24] = tmp37;
              tmp34 = tmp37;
            }
          }
          const obj7 = { style: tmp4.ctaContainer, children: null };
          const items1 = [tmp22, tmp27];
          obj7.children = items1;
          const tmp33 = closure_14(closure_7, obj7);
          cResult[17] = tmp4.ctaContainer;
          cResult[18] = tmp22;
          cResult[19] = tmp27;
          cResult[20] = tmp33;
          tmp30 = tmp33;
        }
      }
      const obj8 = { style: warningText, children: null };
      const items2 = [tmp10, tmp15];
      obj8.children = items2;
      const tmp19 = closure_14(closure_7, obj8);
      cResult[7] = tmp4.warningText;
      cResult[8] = tmp10;
      cResult[9] = tmp15;
      cResult[10] = tmp19;
      tmp18 = tmp19;
      const obj = trackAnalyticsEvent(576);
    }
  : (trackAnalyticsEvent) => {
      trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
      const tmp = closure_15();
      const obj = { style: tmp.container, children: null };
      const items = [closure_13(trackAnalyticsEvent(15618).SafetyChatSpotIllustration, {}), ,];
      const obj2 = { style: tmp.warningText, children: null };
      const obj3 = {
        variant: "heading-xl/semibold",
        style: tmp.takeoverHeader,
        accessibilityRole: "header",
        children: null,
      };
      const intl = trackAnalyticsEvent(1126).intl;
      obj3.children = intl.string(trackAnalyticsEvent(1126).t.NUMAsF);
      const items1 = [closure_13(trackAnalyticsEvent(4892).Text, obj3)];
      const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: null };
      const intl2 = trackAnalyticsEvent(1126).intl;
      obj4.children = intl2.string(trackAnalyticsEvent(1126).t.uicS5l);
      items1[1] = closure_13(trackAnalyticsEvent(4892).Text, obj4);
      obj2.children = items1;
      items[1] = closure_14(closure_7, obj2);
      const obj5 = { style: tmp.ctaContainer, children: null };
      const obj6 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
      const intl3 = trackAnalyticsEvent(1126).intl;
      obj6.text = intl3.string(trackAnalyticsEvent(1126).t.lkUb4S);
      obj6.onPress = function onPress() {
        timestampProducer.openURL(options);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
      };
      const items2 = [closure_13(trackAnalyticsEvent(5601).Button, obj6)];
      const obj7 = { variant: "secondary", size: "lg", text: null, grow: true, onPress: null };
      const intl4 = trackAnalyticsEvent(1126).intl;
      obj7.text = intl4.string(trackAnalyticsEvent(1126).t.ogLlvy);
      obj7.onPress = function onPress() {
        timestampProducer.openURL(v65535);
        trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
      };
      items2[1] = closure_13(trackAnalyticsEvent(5601).Button, obj7);
      obj5.children = items2;
      items[2] = closure_14(closure_7, obj5);
      obj.children = items;
      return closure_14(closure_7, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(warningType[9]).c(28);
      channelId = channelId.channelId;
      const warningId = channelId.warningId;
      warningType = channelId.warningType;
      const senderId = channelId.senderId;
      let obj = channelId(warningType[9]);
      const tmp = channelId;
      const tmp2 = warningType;
      [tmp5, tmp6] = senderId(useState(false), 2);
      const tmp4 = senderId(useState(false), 2);
      const tmp7 = null != channelId(warningType[22]).useSafetyToolsButtonTooltipForChannel(channelId);
      noop = tmp7;
      if (cResult[0] === channelId) {
        if (cResult[1] === tmp7) {
          if (cResult[2] === senderId) {
            if (cResult[3] === warningId) {
              if (cResult[4] === warningType) {
                let tmp8 = cResult[5];
              }
              useState = tmp8;
              if (cResult[6] === tmp8) {
                if (cResult[7] === channelId) {
                  if (cResult[8] === warningId) {
                    let tmp9 = cResult[9];
                  }
                  if (cResult[10] !== tmp8) {
                    const fn2 = function x() {
                      const obj2 = {};
                      const merged = Object.assign(closure_5);
                      obj2.viewName = SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL;
                      SafetyWarningUtils.trackNamedViewEvent(obj2);
                    };
                    let items = [tmp8];
                    cResult[10] = tmp8;
                    cResult[11] = fn2;
                    cResult[12] = items;
                    let tmp11 = items;
                    let tmp10 = fn2;
                  } else {
                    tmp10 = cResult[11];
                    tmp11 = cResult[12];
                  }
                  const effect = noop.useEffect(tmp10, tmp11);
                  if (cResult[13] === channelId) {
                    if (cResult[14] === tmp7) {
                      if (cResult[15] === senderId) {
                        if (cResult[16] === warningId) {
                          if (cResult[17] === warningType) {
                            let tmp14 = cResult[18];
                          }
                          if (cResult[19] === channelId) {
                            if (cResult[20] === tmp9) {
                              if (cResult[21] === tmp5) {
                                if (cResult[22] === senderId) {
                                  if (cResult[23] === tmp14) {
                                    if (cResult[24] === warningId) {
                                      let tmp15 = cResult[25];
                                    }
                                    if (cResult[26] !== tmp15) {
                                      const obj3 = { screens: tmp15, initialRouteName: "INTRO" };
                                      const tmp20 = closure_13(tmp(tmp2[25]).Navigator, obj3);
                                      cResult[26] = tmp15;
                                      cResult[27] = tmp20;
                                      let tmp18 = tmp20;
                                    } else {
                                      tmp18 = cResult[27];
                                    }
                                    return tmp18;
                                  }
                                }
                              }
                            }
                          }
                          let obj4 = {
                            channelId,
                            warningId,
                            senderId,
                            isReported: tmp5,
                            setReported: tmp6,
                            handleDismiss: tmp9,
                            trackAnalyticsEvent: tmp14,
                          };
                          const tmp17 = getScreens(obj4);
                          cResult[19] = channelId;
                          cResult[20] = tmp9;
                          cResult[21] = tmp5;
                          cResult[22] = senderId;
                          cResult[23] = tmp14;
                          cResult[24] = warningId;
                          cResult[25] = tmp17;
                          tmp15 = tmp17;
                        }
                      }
                    }
                  }
                  const fn3 = function k(cta) {
                    SafetyWarningUtils.trackCtaEvent({
                      channelId,
                      warningId,
                      senderId,
                      warningType,
                      cta,
                      isNudgeWarning,
                    });
                  };
                  cResult[13] = channelId;
                  cResult[14] = tmp7;
                  cResult[15] = senderId;
                  cResult[16] = warningId;
                  cResult[17] = warningType;
                  cResult[18] = fn3;
                  tmp14 = fn3;
                }
              }
              const fn = function f() {
                ModalActionCreatorsDefault.popWithKey(closure_2_11);
                const items = [warningId];
                const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
                const obj4 = {};
                const merged = Object.assign(closure_5);
                obj4.cta = SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
                SafetyWarningUtils.trackCtaEvent(obj4);
              };
              cResult[6] = tmp8;
              cResult[7] = channelId;
              cResult[8] = warningId;
              cResult[9] = fn;
              tmp9 = fn;
            }
          }
        }
      }
      const obj5 = { channelId, senderId, warningId, warningType, isNudgeWarning: tmp7 };
      cResult[0] = channelId;
      cResult[1] = tmp7;
      cResult[2] = senderId;
      cResult[3] = warningId;
      cResult[4] = warningType;
      cResult[5] = obj5;
      tmp8 = obj5;
      let obj2 = channelId(warningType[22]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const warningId = channelId.warningId;
      const warningType = channelId.warningType;
      const senderId = channelId.senderId;
      let memo;
      [tmp2, tmp3] = senderId(memo(false), 2);
      const tmp = senderId(memo(false), 2);
      const tmp4 = null != channelId(warningType[22]).useSafetyToolsButtonTooltipForChannel(channelId);
      noop = tmp4;
      let items = [channelId, warningId, warningType, senderId, tmp4];
      memo = noop.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning }), items);
      const items1 = [channelId, warningId, memo];
      const items2 = [memo];
      const callback = noop.useCallback(() => {
        ModalActionCreatorsDefault.popWithKey(closure_2_11);
        const items = [warningId];
        const result = ChannelSafetyWarningsActionCreators.dismissChannelSafetyWarnings(channelId, items);
        const obj4 = {};
        const merged = Object.assign(memo);
        obj4.cta = SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
        SafetyWarningUtils.trackCtaEvent(obj4);
      }, items1);
      const effect = noop.useEffect(() => {
        const obj2 = {};
        const merged = Object.assign(memo);
        obj2.viewName = SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL;
        SafetyWarningUtils.trackNamedViewEvent(obj2);
      }, items2);
      const items3 = [channelId, warningId, senderId, warningType, tmp4];
      const callback1 = noop.useCallback((cta) => {
        SafetyWarningUtils.trackCtaEvent({ channelId, warningId, senderId, warningType, cta, isNudgeWarning });
      }, items3);
      let obj = channelId(warningType[22]);
      return closure_13(channelId(warningType[25]).Navigator, {
        screens: getScreens({
          channelId,
          warningId,
          senderId,
          isReported: tmp2,
          setReported: tmp3,
          handleDismiss: callback,
          trackAnalyticsEvent: callback1,
        }),
        initialRouteName: "INTRO",
      });
    };
