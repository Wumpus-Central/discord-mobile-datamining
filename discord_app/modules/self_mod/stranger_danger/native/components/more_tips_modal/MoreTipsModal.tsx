// === Module 10401: MoreTipsModal ===

// Module 10401 (MoreTipsModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5729 */;
import MetricEvents from "MetricEvents" /* 5734 */;
import HeaderActionButton from "HeaderActionButton" /* 7088 */;
import _modDef7728 from "module_7728" /* 7728 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10394 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 10402 */;
import WasThisHelpfulSectionDefault from "WasThisHelpfulSection" /* 10407 */;
import noop from "module_19" /* 19 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10284 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { scroll: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, contentContainer: null, tipsContainer: null, learnMore: null, header: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.contentContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.tipsContainer = { gap: nativeDefault.space.PX_8 };
obj2.learnMore = { alignItems: "center" };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.header = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function MoreTipsModalScreen(arg0) {
  const cResult = c.c(28);
  ({ channelId, warningId, senderId, description, safetyTips, actionItems, learnMore } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === description) {
    if (cResult[1] === safetyTips) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === learnMore) {
      if (cResult[4] === tmp4.learnMore) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.tipsContainer) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp9) {
            let tmp13 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.K5FKtc);
            cResult[10] = stringResult;
            let tmp18 = stringResult;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] !== tmp4.header) {
            const obj2 = { variant: "eyebrow", color: "text-default", style: tmp4.header, children: tmp18 };
            const tmp22 = closure_1_8(Text_Text.Text, obj2);
            cResult[11] = tmp4.header;
            cResult[12] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] === actionItems) {
            if (cResult[14] === tmp20) {
              let tmp23 = cResult[15];
            }
            if (cResult[16] === channelId) {
              if (cResult[17] === senderId) {
                if (cResult[18] === warningId) {
                  let tmp27 = cResult[19];
                }
                if (cResult[20] === tmp4.contentContainer) {
                  if (cResult[21] === tmp27) {
                    if (cResult[22] === tmp13) {
                      if (cResult[23] === tmp23) {
                        let tmp31 = cResult[24];
                      }
                      if (cResult[25] === tmp4.scroll) {
                        if (cResult[26] === tmp31) {
                          let tmp35 = cResult[27];
                        }
                        return tmp35;
                      }
                      const obj3 = { keyboardShouldPersistTaps: "handled", style: tmp5, children: tmp31 };
                      const tmp38 = closure_1_8(hasOwnProperty, obj3);
                      cResult[25] = tmp4.scroll;
                      cResult[26] = tmp31;
                      cResult[27] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                }
                const obj4 = { style: tmp6, children: null };
                const items = [tmp13, tmp23, tmp27];
                obj4.children = items;
                const tmp34 = options(React4, obj4);
                cResult[20] = tmp4.contentContainer;
                cResult[21] = tmp27;
                cResult[22] = tmp13;
                cResult[23] = tmp23;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
            }
            const obj5 = { channelId, warningId, senderId };
            const tmp30 = closure_1_8(WasThisHelpfulSectionDefault, obj5);
            cResult[16] = channelId;
            cResult[17] = senderId;
            cResult[18] = warningId;
            cResult[19] = tmp30;
            tmp27 = tmp30;
          }
          const obj6 = { children: null };
          const items1 = [tmp20, actionItems];
          obj6.children = items1;
          const tmp26 = options(React4, obj6);
          cResult[13] = actionItems;
          cResult[14] = tmp20;
          cResult[15] = tmp26;
          tmp23 = tmp26;
        }
      }
      const obj7 = { style: tmp4.tipsContainer, children: null };
      const items2 = [tmp7, tmp9];
      obj7.children = items2;
      const tmp16 = options(React4, obj7);
      cResult[6] = tmp4.tipsContainer;
      cResult[7] = tmp7;
      cResult[8] = tmp9;
      cResult[9] = tmp16;
      tmp13 = tmp16;
    }
    let tmp10 = null;
    if (null != learnMore) {
      const obj8 = { style: tmp4.learnMore, children: learnMore };
      tmp10 = closure_1_8(React4, obj8);
    }
    cResult[3] = learnMore;
    cResult[4] = tmp4.learnMore;
    cResult[5] = tmp10;
    tmp9 = tmp10;
  }
  const tmp8 = closure_1_8(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true });
  cResult[0] = description;
  cResult[1] = safetyTips;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function MoreTipsModalScreen(learnMore) {
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = closure_10();
  const obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: null };
  const obj2 = { style: tmp.contentContainer, children: null };
  const obj3 = { style: tmp.tipsContainer, children: null };
  const items = [closure_1_8(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true }), ];
  let tmp2Result = null;
  if (null != learnMore) {
    const obj4 = { style: tmp.learnMore, children: learnMore };
    tmp2Result = closure_1_8(React4, obj4);
  }
  items[1] = tmp2Result;
  obj3.children = items;
  const items1 = [options(React4, obj3), , ];
  const obj5 = { children: null };
  const obj6 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.K5FKtc);
  const items2 = [closure_1_8(Text_Text.Text, obj6), actionItems];
  obj5.children = items2;
  items1[1] = options(React4, obj5);
  items1[2] = closure_1_8(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
  obj2.children = items1;
  obj.children = options(React4, obj2);
  return closure_1_8(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MoreTipsModal(channelId) {
  const cResult = channelId(senderId[8]).c(19);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const top = warningId(senderId[17])().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === warningId) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[18]).useStateFromStores(first, tmp6);
    if (cResult[4] === channelId) {
      let type;
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      if (cResult[5] === type) {
        if (cResult[6] === senderId) {
          if (cResult[7] === warningId) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === channelId) {
            if (cResult[10] === stateFromStores) {
              if (cResult[11] === senderId) {
                if (cResult[12] === warningId) {
                  let tmp13 = cResult[13];
                }
                const effect = stateFromStores.useEffect(tmp10, tmp13);
                if (cResult[14] !== channelId) {
                  ({ modalKey: closure_129_0, channelId: closure_129_1, warningId: closure_129_2, senderId: closure_129_3, description: closure_129_4, safetyTips: closure_129_5, actionItems: closure_129_6, learnMore: closure_129_7 } = channelId);
                  let obj2 = { MORE_TIPS: null };
                  let obj3 = { headerRight: null, headerTitle: null, headerLeft: null, headerStyle: null, render: null };
                  class M {
                    constructor() {
                      tmp2 = closure_2;
                      tmp = closure_0;
                      obj = closure_0(closure_2[19]);
                      obj1 = { channelId, warningId, senderId, warningType: null };
                      type = undefined;
                      if (closure_3 != null) {
                        type = closure_3.type;
                      }
                      obj1.warningType = type;
                      trackViewedEventResult = obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj1);
                      obj3 = closure_1(tmp2[20]);
                      obj5 = { name: tmp(tmp2[21]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
                      incrementResult = obj3.increment(obj5);
                      return;
                    }
                  }
                  obj3.headerTitle = function headerTitle() {
                    return null;
                  };
                  obj3.headerLeft = function headerLeft() {
                    return null;
                  };
                  obj3.headerStyle = channelId.headerStyle;
                  obj3.render = function render() {
                    return closure_2_8(closure_11, { channelId: warningId, warningId: senderId, senderId: stateFromStores, description, safetyTips, actionItems, learnMore });
                  };
                  obj2.MORE_TIPS = obj3;
                  cResult[14] = channelId;
                  cResult[15] = obj2;
                  let tmp16 = obj2;
                } else {
                  tmp16 = cResult[15];
                }
                if (cResult[16] === tmp16) {
                  if (cResult[17] === top) {
                    let tmp17 = cResult[18];
                  }
                  return tmp17;
                }
                let obj4 = { screens: tmp16, initialRouteName: "MORE_TIPS", headerStatusBarHeight: top };
                const tmp19 = closure_8(tmp(tmp2[22]).Navigator, obj4);
                class M {
                  constructor() {
                    tmp2 = closure_2;
                    tmp = closure_0;
                    obj = closure_0(closure_2[19]);
                    obj1 = { channelId, warningId, senderId, warningType: null };
                    type = undefined;
                    if (closure_3 != null) {
                      type = closure_3.type;
                    }
                    obj1.warningType = type;
                    trackViewedEventResult = obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj1);
                    obj3 = closure_1(tmp2[20]);
                    obj5 = { name: tmp(tmp2[21]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
                    incrementResult = obj3.increment(obj5);
                    return;
                  }
                }
                cResult[16] = tmp16;
                cResult[17] = top;
                cResult[18] = tmp19;
                tmp17 = tmp19;
              }
            }
          }
          const items1 = [channelId, warningId, senderId, stateFromStores];
          cResult[9] = channelId;
          class M {
            constructor() {
              tmp2 = closure_2;
              tmp = closure_0;
              obj = closure_0(closure_2[19]);
              obj1 = { channelId, warningId, senderId, warningType: null };
              type = undefined;
              if (closure_3 != null) {
                type = closure_3.type;
              }
              obj1.warningType = type;
              trackViewedEventResult = obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj1);
              obj3 = closure_1(tmp2[20]);
              obj5 = { name: tmp(tmp2[21]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
              incrementResult = obj3.increment(obj5);
              return;
            }
          }
          cResult[11] = senderId;
          cResult[12] = warningId;
          cResult[13] = items1;
          tmp13 = items1;
        }
      }
    }
    cResult[4] = channelId;
    let type1;
    if (stateFromStores != null) {
      type1 = stateFromStores.type;
    }
    class M {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_0;
        obj = closure_0(closure_2[19]);
        obj1 = { channelId, warningId, senderId, warningType: null };
        type = undefined;
        if (closure_3 != null) {
          type = closure_3.type;
        }
        obj1.warningType = type;
        trackViewedEventResult = obj.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj1);
        obj3 = closure_1(tmp2[20]);
        obj5 = { name: tmp(tmp2[21]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
        incrementResult = obj3.increment(obj5);
        return;
      }
    }
    cResult[5] = type1;
    cResult[6] = senderId;
    cResult[7] = warningId;
    cResult[8] = M;
    tmp10 = M;
    const tmpResult = tmp(tmp2[18]);
  }
  const fn = function o() {
    return ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId);
  };
  cResult[1] = channelId;
  cResult[2] = warningId;
  cResult[3] = fn;
  tmp6 = fn;
  let obj = channelId(senderId[8]);
}) : (function MoreTipsModal(headerStyle) {
  const channelId = headerStyle.channelId;
  const warningId = headerStyle.warningId;
  const senderId = headerStyle.senderId;
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = channelId(senderId[18]).useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const obj2 = { channelId, warningId, senderId, warningType: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj2.warningType = type;
    SafetyWarningUtils.trackViewedEvent(AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED, obj2);
    const obj3 = MonitoringAgentDefault;
    obj3.increment({ name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW });
    const obj4 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
  }, items1);
  let obj2 = {
    screens: {
      MORE_TIPS: {
        headerRight() {
          const obj = {
            onPress() {
              return warningId(senderId[14]).popWithKey(channelId);
            },
            source: _modDef7728,
            iconSize: native.IconSizes.MEDIUM,
            accessibilityLabel: null
          };
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
          return closure_2_8(HeaderActionButton.HeaderActionButton, obj);
        },
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        headerStyle: headerStyle.headerStyle,
        render() {
          return closure_2_8(closure_11, { channelId: warningId, warningId: senderId, senderId: stateFromStores, description, safetyTips, actionItems, learnMore });
        }
      }
    },
    initialRouteName: "MORE_TIPS",
    headerStatusBarHeight: warningId(senderId[17])().top
  };
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  closure_129_5 = undefined;
  closure_129_6 = undefined;
  closure_129_7 = undefined;
  ({ modalKey: closure_129_0, channelId: closure_129_1, warningId: closure_129_2, senderId: closure_129_3, description: closure_129_4, safetyTips: closure_129_5, actionItems: closure_129_6, learnMore: closure_129_7 } = headerStyle);
  return closure_8(channelId(senderId[22]).Navigator, obj2);
});