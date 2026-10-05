// === Module 15602: InappropriateConversationModal ===

// Module 15602 (InappropriateConversationModal)
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import react3 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 6078 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9798 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9799 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 9806 */;
import TakeActionScreenDefault from "TakeActionScreen" /* 15603 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 9784 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react_mod = react2;
let navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function getScreens(arg0) {
  let channelId;
  let closure_6;
  let isReported;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  let warningId;
  ({ warningId: require, senderId: importDefault, channelId: dependencyMap, isReported: _slicedToArray, setReported: react, handleDismiss: useState, trackAnalyticsEvent: closure_6 } = arg0);
  let obj = { title: "", fullscreen: true, headerRight: obj2.getHeaderCloseButton(() => useState()), headerLeft: obj3.getHeaderBackButton() };
  obj2 = NavigatorHeader;
  const obj4 = { INTRO: obj5, TAKE_ACTION: obj6, SAFETY_TIPS: obj7, CRISIS_TEXT_LINE: obj8 };
  obj3 = NavigatorHeader;
  obj5 = {
    headerLeft() {
      return null;
    },
    render() {
      const obj = { warningId: require, senderId: importDefault, trackAnalyticsEvent };
      return map1(closure_16, obj);
    }
  };
  const merged = Object.assign(obj);
  obj6 = {
    render() {
      const obj = { senderId: importDefault, channelId: dependencyMap, isReported: _slicedToArray, setReported: react, trackAnalyticsEvent };
      return map1(closure_17, obj);
    }
  };
  const merged1 = Object.assign(obj);
  obj7 = {
    render() {
      return closure_1_13(closure_1_18, {});
    }
  };
  const merged2 = Object.assign(obj);
  obj8 = {
    render() {
      const obj = { trackAnalyticsEvent };
      return map1(closure_19, obj);
    }
  };
  const merged3 = Object.assign(obj);
  return obj4;
}
let react = react_mod;
let useState = react2.useState;
({ Linking: metroRequire, View: metroImportDefault } = react_native);
({ CRISIS_TEXT_LINE_SMS_URI: c9, CRISIS_TEXT_LINE_URL: c10, TAKEOVER_MODAL_KEY: unpackModuleId, getInappropriateConversationsSafetyTips: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, warningText: obj3, ctaContainer: obj4, takeoverHeader: { textAlign: "center", maxWidth: 268 }, takeoverDescription: { textAlign: "center" }, safetyTips: { alignSelf: "stretch" } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, display: "flex", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((warningId) => {
  let first;
  let items1;
  let items2;
  let items3;
  let takeoverHeader;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp7;
  let trackAnalyticsEvent;
  let warningText;
  let obj = warningId(trackAnalyticsEvent[9]);
  const cResult = obj.c(36);
  warningId = warningId.warningId;
  const senderId = warningId.senderId;
  trackAnalyticsEvent = warningId.trackAnalyticsEvent;
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== senderId) {
    const fn = function s() {
      return UserStore.getUser(senderId);
    };
    cResult[1] = senderId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = warningId(trackAnalyticsEvent[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const obj3 = senderId(trackAnalyticsEvent[11]);
  const name = obj3.getName(stateFromStores);
  const tmpResult2 = warningId(trackAnalyticsEvent[12]);
  navigation = tmpResult2.useNavigation();
  const container = tmp4.container;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = closure_13(warningId(trackAnalyticsEvent[13]).TrafficConeSpotIllustration, {});
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  ({ warningText, takeoverHeader } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[14]).intl;
    const stringResult = intl.string(warningId(trackAnalyticsEvent[14]).t.sSMgC6);
    cResult[4] = stringResult;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.takeoverHeader) {
    const obj2 = { variant: "heading-xl/semibold", style: takeoverHeader, accessibilityRole: "header", children: tmp15 };
    const tmp19 = closure_13(warningId(trackAnalyticsEvent[15]).Text, obj2);
    cResult[5] = tmp4.takeoverHeader;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  const Text = tmp(tmp2[15]).Text;
  const takeoverDescription = tmp4.takeoverDescription;
  const intl2 = tmp(tmp2[14]).intl;
  const formatResult = intl2.format(warningId(trackAnalyticsEvent[14]).t.q2QrTY, { username: name });
  if (cResult[7] === Text) {
    if (cResult[8] === tmp4.takeoverDescription) {
      let tmp21;
      if (cResult[9] === formatResult) {
        tmp21 = cResult[10];
      }
      if (cResult[11] === closure_7) {
        if (cResult[12] === tmp4.warningText) {
          if (cResult[13] === tmp21) {
            let tmp23;
            let tmp26;
            if (cResult[14] === tmp17) {
              tmp23 = cResult[15];
            }
            const _Symbol = Symbol;
            const ctaContainer = tmp4.ctaContainer;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[14]).intl;
              const stringResult1 = intl3.string(warningId(trackAnalyticsEvent[14]).t["+o4Q7e"]);
              cResult[16] = stringResult1;
              tmp26 = stringResult1;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === navigation) {
              if (cResult[18] === senderId) {
                if (cResult[19] === trackAnalyticsEvent) {
                  let tmp28;
                  let tmp31;
                  if (cResult[20] === warningId) {
                    tmp28 = cResult[21];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(tmp2[14]).intl;
                    const stringResult2 = intl4.string(warningId(trackAnalyticsEvent[14]).t.xLkGzP);
                    cResult[22] = stringResult2;
                    tmp31 = stringResult2;
                  } else {
                    tmp31 = cResult[22];
                  }
                  if (cResult[23] === navigation) {
                    let tmp33;
                    if (cResult[24] === trackAnalyticsEvent) {
                      tmp33 = cResult[25];
                    }
                    if (cResult[26] === tmp4.ctaContainer) {
                      if (cResult[27] === tmp28) {
                        let tmp36;
                        if (cResult[28] === tmp33) {
                          tmp36 = cResult[29];
                        }
                        if (cResult[30] === closure_7) {
                          if (cResult[31] === tmp4.container) {
                            if (cResult[32] === tmp23) {
                              if (cResult[33] === tmp36) {
                                let tmp39;
                                if (cResult[34] === tmp12) {
                                  tmp39 = cResult[35];
                                }
                                return tmp39;
                              }
                            }
                          }
                        }
                        const obj4 = { style: container, children: items1 };
                        items1 = [tmp12, tmp23, tmp36];
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
                    const obj5 = { style: ctaContainer, children: items2 };
                    items2 = [tmp28, tmp33];
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
                                    }
                  };
                  const tmp35 = closure_13(warningId(trackAnalyticsEvent[16]).Button, obj6);
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
                          const obj = { warningId, senderId };
                          navigation.push("TAKE_ACTION", obj);
                          trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
                        }
            };
            const tmp30 = closure_13(warningId(trackAnalyticsEvent[16]).Button, obj7);
            cResult[17] = navigation;
            cResult[18] = senderId;
            cResult[19] = trackAnalyticsEvent;
            cResult[20] = warningId;
            cResult[21] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
      const obj8 = { style: warningText, children: items3 };
      items3 = [tmp17, tmp21];
      const tmp25 = closure_14(closure_7, obj8);
      cResult[11] = closure_7;
      cResult[12] = tmp4.warningText;
      cResult[13] = tmp21;
      cResult[14] = tmp17;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    }
  }
  const tmp22 = closure_13(Text, { variant: "text-md/medium", style: takeoverDescription, children: formatResult });
  cResult[7] = Text;
  cResult[8] = tmp4.takeoverDescription;
  cResult[9] = formatResult;
  cResult[10] = tmp22;
  tmp21 = tmp22;
}) : ((arg0) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let senderId;
  let warningId;
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  const tmp = closure_15();
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(importDefault));
  const obj2 = UserUtilsDefault;
  const name = obj2.getName(stateFromStores);
  const obj3 = useNavigation;
  let closure_3 = obj3.useNavigation();
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [closure_13(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj5 = { style: tmp.warningText, children: items2 };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(intl5.t.sSMgC6) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items2 = [closure_13(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.format(intl5.t.q2QrTY, { username: name }) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items2[1] = closure_13(Text2, obj7);
  items1[1] = closure_14(closure_7, obj5);
  const obj8 = { style: tmp.ctaContainer, children: items3 };
  const obj9 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl5.t["+o4Q7e"]),
    grow: true,
    onPress() {
      const obj = { warningId: require, senderId: importDefault };
      closure_3.push("TAKE_ACTION", obj);
      dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items3 = [closure_13(Button, obj9), ];
  const obj10 = {
    variant: "secondary",
    size: "lg",
    text: intl4.string(intl5.t.xLkGzP),
    grow: true,
    onPress() {
      closure_3.push("SAFETY_TIPS");
      dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
    }
  };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items3[1] = closure_13(Button2, obj10);
  items1[2] = closure_14(closure_7, obj8);
  return closure_14(closure_7, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let container;
  let first;
  let isReported;
  let items;
  let items1;
  let senderId;
  let setReported;
  let takeoverHeader;
  let tmp10;
  let tmp12;
  let tmp7;
  let trackAnalyticsEvent;
  let warningText;
  const obj = react3;
  const cResult = obj.c(20);
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp4 = closure_15();
  ({ container, warningText, takeoverHeader } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t["mWO+ys"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.takeoverHeader) {
    const obj2 = { variant: "heading-xl/semibold", style: takeoverHeader, accessibilityRole: "header", children: first };
    const tmp9 = map1(Text_Text.Text, obj2);
    cResult[1] = tmp4.takeoverHeader;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  const takeoverDescription = tmp4.takeoverDescription;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t.S0XtKF);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.takeoverDescription) {
    const obj3 = { variant: "text-md/medium", style: takeoverDescription, children: tmp10 };
    const tmp14 = map1(Text_Text.Text, obj3);
    cResult[4] = tmp4.takeoverDescription;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.warningText) {
    if (cResult[7] === tmp7) {
      let tmp15;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === channelId) {
        if (cResult[11] === isReported) {
          if (cResult[12] === senderId) {
            if (cResult[13] === setReported) {
              let tmp17;
              if (cResult[14] === trackAnalyticsEvent) {
                tmp17 = cResult[15];
              }
              if (cResult[16] === tmp4.container) {
                if (cResult[17] === tmp17) {
                  let tmp21;
                  if (cResult[18] === tmp15) {
                    tmp21 = cResult[19];
                  }
                  return tmp21;
                }
              }
              const obj4 = { style: container, children: items };
              items = [tmp15, tmp17];
              const tmp24 = authStore2(metroImportDefault, obj4);
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
      const tmp20 = map1(TakeActionScreenDefault, obj5);
      cResult[10] = channelId;
      cResult[11] = isReported;
      cResult[12] = senderId;
      cResult[13] = setReported;
      cResult[14] = trackAnalyticsEvent;
      cResult[15] = tmp20;
      tmp17 = tmp20;
    }
  }
  const obj6 = { style: warningText, children: items1 };
  items1 = [tmp7, tmp12];
  const tmp16 = authStore2(metroImportDefault, obj6);
  cResult[6] = tmp4.warningText;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((arg0) => {
  let channelId;
  let intl;
  let intl2;
  let isReported;
  let items;
  let items1;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.warningText, children: items };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(intl5.t["mWO+ys"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [map1(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(intl5.t.S0XtKF) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = map1(Text2, obj4);
  items1 = [authStore2(metroImportDefault, obj2), map1(TakeActionScreenDefault, { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  return authStore2(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let first;
  let intl;
  let tmp11;
  let obj = react3;
  const cResult = obj.c(6);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      showHeader: true,
      description: intl.string(intl5.t.DJMZX6),
      safetyTips: arr.map((children, index) => {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_13(Text_Text.Text, obj, index);
        })
    };
    const tmp8 = SafetyTipsSectionDefault;
    intl = intl5.intl;
    arr = closure_12();
    const tmp10 = map1(tmp8, obj2);
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.safetyTips) {
    const obj3 = { style: tmp4.safetyTips, children: first };
    const tmp14 = map1(metroImportDefault, obj3);
    cResult[1] = tmp4.safetyTips;
    cResult[2] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp15;
    if (cResult[4] === tmp11) {
      tmp15 = cResult[5];
    }
    return tmp15;
  }
  const obj4 = { style: tmp4.container, children: tmp11 };
  const tmp16 = map1(metroImportDefault, obj4);
  cResult[3] = tmp4.container;
  cResult[4] = tmp11;
  cResult[5] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  let arr;
  let intl;
  let obj2;
  let obj3;
  let tmp2;
  const tmp = closure_15();
  let obj = { style: tmp.container, children: map1(metroImportDefault, obj2) };
  obj2 = { style: tmp.safetyTips, children: map1(tmp2, obj3) };
  obj3 = {
    showHeader: true,
    description: intl.string(intl5.t.DJMZX6),
    safetyTips: arr.map((children, index) => {
      const obj = { variant: "text-sm/medium", children };
      return closure_1_13(Text_Text.Text, obj, index);
    })
  };
  tmp2 = SafetyTipsSectionDefault;
  intl = intl5.intl;
  arr = closure_12();
  return map1(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((trackAnalyticsEvent) => {
  let first;
  let items;
  let items1;
  let items2;
  let takeoverHeader;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp8;
  let warningText;
  const obj = trackAnalyticsEvent(576);
  const cResult = obj.c(25);
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp4 = closure_15();
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_13(trackAnalyticsEvent(15604).SafetyChatSpotIllustration, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  ({ warningText, takeoverHeader } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(trackAnalyticsEvent(1126).t.NUMAsF);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.takeoverHeader) {
    const obj2 = { variant: "heading-xl/semibold", style: takeoverHeader, accessibilityRole: "header", children: tmp8 };
    const tmp12 = closure_13(trackAnalyticsEvent(4886).Text, obj2);
    cResult[2] = tmp4.takeoverHeader;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  const takeoverDescription = tmp4.takeoverDescription;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(trackAnalyticsEvent(1126).t.uicS5l);
    cResult[4] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.takeoverDescription) {
    const obj3 = { variant: "text-md/medium", style: takeoverDescription, children: tmp13 };
    const tmp17 = closure_13(trackAnalyticsEvent(4886).Text, obj3);
    cResult[5] = tmp4.takeoverDescription;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.warningText) {
    if (cResult[8] === tmp10) {
      let tmp18;
      let tmp20;
      let tmp22;
      let tmp25;
      let tmp27;
      if (cResult[9] === tmp15) {
        tmp18 = cResult[10];
      }
      const _Symbol = Symbol;
      const ctaContainer = tmp4.ctaContainer;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(trackAnalyticsEvent(1126).t.lkUb4S);
        cResult[11] = stringResult2;
        tmp20 = stringResult2;
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
                  metroRequire.openURL(React4);
                  trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
                }
        };
        const tmp24 = closure_13(trackAnalyticsEvent(5594).Button, obj4);
        cResult[12] = trackAnalyticsEvent;
        cResult[13] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[13];
      }
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(trackAnalyticsEvent(1126).t.ogLlvy);
        cResult[14] = stringResult3;
        tmp25 = stringResult3;
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
                  metroRequire.openURL(authStore);
                  trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
                }
        };
        const tmp29 = closure_13(trackAnalyticsEvent(5594).Button, obj5);
        cResult[15] = trackAnalyticsEvent;
        cResult[16] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[16];
      }
      if (cResult[17] === tmp4.ctaContainer) {
        if (cResult[18] === tmp22) {
          let tmp30;
          if (cResult[19] === tmp27) {
            tmp30 = cResult[20];
          }
          if (cResult[21] === tmp4.container) {
            if (cResult[22] === tmp18) {
              let tmp34;
              if (cResult[23] === tmp30) {
                tmp34 = cResult[24];
              }
              return tmp34;
            }
          }
          const obj6 = { style: container, children: items };
          items = [first, tmp18, tmp30];
          const tmp37 = closure_14(closure_7, obj6);
          cResult[21] = tmp4.container;
          cResult[22] = tmp18;
          cResult[23] = tmp30;
          cResult[24] = tmp37;
          tmp34 = tmp37;
        }
      }
      const obj7 = { style: ctaContainer, children: items1 };
      items1 = [tmp22, tmp27];
      const tmp33 = closure_14(closure_7, obj7);
      cResult[17] = tmp4.ctaContainer;
      cResult[18] = tmp22;
      cResult[19] = tmp27;
      cResult[20] = tmp33;
      tmp30 = tmp33;
    }
  }
  const obj8 = { style: warningText, children: items2 };
  items2 = [tmp10, tmp15];
  const tmp19 = closure_14(closure_7, obj8);
  cResult[7] = tmp4.warningText;
  cResult[8] = tmp10;
  cResult[9] = tmp15;
  cResult[10] = tmp19;
  tmp18 = tmp19;
}) : ((trackAnalyticsEvent) => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = closure_15();
  const obj = { style: tmp.container, children: items };
  items = [closure_13(trackAnalyticsEvent(15604).SafetyChatSpotIllustration, {}), , ];
  const obj2 = { style: tmp.warningText, children: items1 };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(trackAnalyticsEvent(1126).t.NUMAsF) };
  const Text = trackAnalyticsEvent(4886).Text;
  intl = trackAnalyticsEvent(1126).intl;
  items1 = [closure_13(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(trackAnalyticsEvent(1126).t.uicS5l) };
  const Text2 = trackAnalyticsEvent(4886).Text;
  intl2 = trackAnalyticsEvent(1126).intl;
  items1[1] = closure_13(Text2, obj4);
  items[1] = closure_14(closure_7, obj2);
  const obj5 = { style: tmp.ctaContainer, children: items2 };
  const obj6 = {
    variant: "secondary",
    size: "lg",
    text: intl3.string(trackAnalyticsEvent(1126).t.lkUb4S),
    grow: true,
    onPress() {
      metroRequire.openURL(React4);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
    }
  };
  const Button = trackAnalyticsEvent(5594).Button;
  intl3 = trackAnalyticsEvent(1126).intl;
  items2 = [closure_13(Button, obj6), ];
  const obj7 = {
    variant: "secondary",
    size: "lg",
    text: intl4.string(trackAnalyticsEvent(1126).t.ogLlvy),
    grow: true,
    onPress() {
      metroRequire.openURL(authStore);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
    }
  };
  const Button2 = trackAnalyticsEvent(5594).Button;
  intl4 = trackAnalyticsEvent(1126).intl;
  items2[1] = closure_13(Button2, obj7);
  items[2] = closure_14(closure_7, obj5);
  return closure_14(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_5;
  let isNudgeWarning;
  let tmp5;
  let tmp6;
  let warningType;
  const tmp = channelId;
  let obj = channelId(warningType[9]);
  const cResult = obj.c(28);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const tmp2 = warningType;
  warningType = channelId.warningType;
  const senderId = channelId.senderId;
  [tmp5, tmp6] = senderId(useState(false), 2);
  senderId(useState(false), 2);
  let obj2 = channelId(warningType[22]);
  const tmp7 = null != obj2.useSafetyToolsButtonTooltipForChannel(channelId);
  react = tmp7;
  if (cResult[0] === channelId) {
    if (cResult[1] === tmp7) {
      if (cResult[2] === senderId) {
        if (cResult[3] === warningId) {
          let tmp8;
          if (cResult[4] === warningType) {
            tmp8 = cResult[5];
          }
          useState = tmp8;
          if (cResult[6] === tmp8) {
            if (cResult[7] === channelId) {
              let tmp9;
              let tmp11;
              let tmp10;
              if (cResult[8] === warningId) {
                tmp9 = cResult[9];
              }
              if (cResult[10] !== tmp8) {
                const fn2 = function x() {
                  const obj = { viewName: SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL };
                  const trackNamedViewEvent = SafetyWarningUtils.trackNamedViewEvent;
                  SafetyWarningUtils;
                  const merged = Object.assign(closure_5);
                  trackNamedViewEvent(obj);
                };
                let items = [tmp8];
                cResult[10] = tmp8;
                cResult[11] = fn2;
                cResult[12] = items;
                tmp11 = items;
                tmp10 = fn2;
              } else {
                tmp10 = cResult[11];
                tmp11 = cResult[12];
              }
              const effect = react.useEffect(tmp10, tmp11);
              if (cResult[13] === channelId) {
                if (cResult[14] === tmp7) {
                  if (cResult[15] === senderId) {
                    if (cResult[16] === warningId) {
                      let tmp14;
                      if (cResult[17] === warningType) {
                        tmp14 = cResult[18];
                      }
                      if (cResult[19] === channelId) {
                        if (cResult[20] === tmp9) {
                          if (cResult[21] === tmp5) {
                            if (cResult[22] === senderId) {
                              if (cResult[23] === tmp14) {
                                let tmp15;
                                let tmp18;
                                if (cResult[24] === warningId) {
                                  tmp15 = cResult[25];
                                }
                                if (cResult[26] !== tmp15) {
                                  let obj3 = { screens: tmp15, initialRouteName: "INTRO" };
                                  const tmp20 = closure_13(tmp(tmp2[25]).Navigator, obj3);
                                  cResult[26] = tmp15;
                                  cResult[27] = tmp20;
                                  tmp18 = tmp20;
                                } else {
                                  tmp18 = cResult[27];
                                }
                                return tmp18;
                              }
                            }
                          }
                        }
                      }
                      const obj4 = { channelId, warningId, senderId, isReported: tmp5, setReported: tmp6, handleDismiss: tmp9, trackAnalyticsEvent: tmp14 };
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
                const obj = SafetyWarningUtils;
                const obj2 = { channelId, warningId, senderId, warningType, cta, isNudgeWarning };
                obj.trackCtaEvent(obj2);
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
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(unpackModuleId);
            const items = [warningId];
            const obj2 = ChannelSafetyWarningsActionCreators;
            const result = obj2.dismissChannelSafetyWarnings(channelId, items);
            const obj3 = { cta: SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS };
            const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
            SafetyWarningUtils;
            const merged = Object.assign(closure_5);
            trackCtaEvent(obj3);
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
}) : ((channelId) => {
  let isNudgeWarning;
  let tmp2;
  let tmp3;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  let memo;
  const tmp = senderId(memo(false), 2);
  [tmp2, tmp3] = tmp;
  let obj = channelId(warningType[22]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  react = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  memo = react.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning }), items);
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(unpackModuleId);
    const items = [warningId];
    const obj2 = ChannelSafetyWarningsActionCreators;
    const result = obj2.dismissChannelSafetyWarnings(channelId, items);
    const obj3 = { cta: SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS };
    const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
    SafetyWarningUtils;
    const merged = Object.assign(memo);
    trackCtaEvent(obj3);
  }, items1);
  const effect = react.useEffect(() => {
    const obj = { viewName: SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL };
    const trackNamedViewEvent = SafetyWarningUtils.trackNamedViewEvent;
    SafetyWarningUtils;
    const merged = Object.assign(memo);
    trackNamedViewEvent(obj);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = react.useCallback((cta) => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType, cta, isNudgeWarning };
    obj.trackCtaEvent(obj2);
  }, items3);
  let obj2 = { screens: getScreens({ channelId, warningId, senderId, isReported: tmp2, setReported: tmp3, handleDismiss: callback, trackAnalyticsEvent: callback1 }), initialRouteName: "INTRO" };
  const Navigator = channelId(warningType[25]).Navigator;
  return closure_13(Navigator, obj2);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default tmp6;