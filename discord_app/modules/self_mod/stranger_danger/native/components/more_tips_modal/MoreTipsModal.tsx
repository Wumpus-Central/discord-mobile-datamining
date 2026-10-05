// discord_app/modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import intl2 from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SafetyWarningUtils from "../../../../shared/SafetyWarningUtils.tsx";
import SafetyTipsSectionDefault from "../../../../shared/native/SafetyTipsSection.tsx";
import WasThisHelpfulSectionDefault from "WasThisHelpfulSection.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import ChannelSafetyWarningsStore from "../../../../ChannelSafetyWarningsStore.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
function headerTitle() {
  return null;
}
function headerLeft() {
  return null;
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scroll: obj2,
  contentContainer: obj3,
  tipsContainer: obj4,
  learnMore: { alignItems: "center" },
  header: obj5,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = {
  marginHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let actionItems;
      let channelId;
      let description;
      let items;
      let items1;
      let items2;
      let learnMore;
      let safetyTips;
      let senderId;
      let warningId;
      const obj = react2;
      const cResult = obj.c(28);
      ({ channelId, warningId, senderId, description, safetyTips, actionItems, learnMore } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === description) {
        let tmp7;
        if (cResult[1] === safetyTips) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === learnMore) {
          let tmp9;
          if (cResult[4] === tmp4.learnMore) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.tipsContainer) {
            if (cResult[7] === tmp7) {
              let tmp13;
              let tmp18;
              let tmp20;
              if (cResult[8] === tmp9) {
                tmp13 = cResult[9];
              }
              const _Symbol = Symbol;
              const header = tmp4.header;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = intl2.intl;
                const stringResult = intl.string(intl2.t.K5FKtc);
                cResult[10] = stringResult;
                tmp18 = stringResult;
              } else {
                tmp18 = cResult[10];
              }
              if (cResult[11] !== tmp4.header) {
                const obj2 = { variant: "eyebrow", color: "text-default", style: header, children: tmp18 };
                const tmp22 = metroImportAll(Text_Text.Text, obj2);
                cResult[11] = tmp4.header;
                cResult[12] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[12];
              }
              if (cResult[13] === actionItems) {
                let tmp23;
                if (cResult[14] === tmp20) {
                  tmp23 = cResult[15];
                }
                if (cResult[16] === channelId) {
                  if (cResult[17] === senderId) {
                    let tmp27;
                    if (cResult[18] === warningId) {
                      tmp27 = cResult[19];
                    }
                    if (cResult[20] === tmp4.contentContainer) {
                      if (cResult[21] === tmp27) {
                        if (cResult[22] === tmp13) {
                          let tmp31;
                          if (cResult[23] === tmp23) {
                            tmp31 = cResult[24];
                          }
                          if (cResult[25] === tmp4.scroll) {
                            let tmp35;
                            if (cResult[26] === tmp31) {
                              tmp35 = cResult[27];
                            }
                            return tmp35;
                          }
                          const obj3 = { keyboardShouldPersistTaps: "handled", style: tmp5, children: tmp31 };
                          const tmp38 = metroImportAll(hasOwnProperty, obj3);
                          cResult[25] = tmp4.scroll;
                          cResult[26] = tmp31;
                          cResult[27] = tmp38;
                          tmp35 = tmp38;
                        }
                      }
                    }
                    const obj4 = { style: tmp6, children: items };
                    items = [tmp13, tmp23, tmp27];
                    const tmp34 = React4(React3, obj4);
                    cResult[20] = tmp4.contentContainer;
                    cResult[21] = tmp27;
                    cResult[22] = tmp13;
                    cResult[23] = tmp23;
                    cResult[24] = tmp34;
                    tmp31 = tmp34;
                  }
                }
                const obj5 = { channelId, warningId, senderId };
                const tmp30 = metroImportAll(WasThisHelpfulSectionDefault, obj5);
                cResult[16] = channelId;
                cResult[17] = senderId;
                cResult[18] = warningId;
                cResult[19] = tmp30;
                tmp27 = tmp30;
              }
              const obj6 = { children: items1 };
              items1 = [tmp20, actionItems];
              const tmp26 = React4(React3, obj6);
              cResult[13] = actionItems;
              cResult[14] = tmp20;
              cResult[15] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj7 = { style: tmp4.tipsContainer, children: items2 };
          items2 = [tmp7, tmp9];
          const tmp16 = React4(React3, obj7);
          cResult[6] = tmp4.tipsContainer;
          cResult[7] = tmp7;
          cResult[8] = tmp9;
          cResult[9] = tmp16;
          tmp13 = tmp16;
        }
        let tmp10 = null;
        if (null != learnMore) {
          const obj8 = { style: tmp4.learnMore, children: learnMore };
          tmp10 = metroImportAll(React3, obj8);
        }
        cResult[3] = learnMore;
        cResult[4] = tmp4.learnMore;
        cResult[5] = tmp10;
        tmp9 = tmp10;
      }
      const tmp8 = metroImportAll(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true });
      cResult[0] = description;
      cResult[1] = safetyTips;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (learnMore) => {
      let actionItems;
      let channelId;
      let description;
      let intl;
      let items;
      let items1;
      let items2;
      let obj2;
      let safetyTips;
      let senderId;
      let warningId;
      learnMore = learnMore.learnMore;
      ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
      const tmp = closure_10();
      const obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: React4(React3, obj2) };
      obj2 = { style: tmp.contentContainer, children: items1 };
      const obj3 = { style: tmp.tipsContainer, children: items };
      items = [metroImportAll(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true })];
      let tmp2Result = null;
      if (null != learnMore) {
        const obj4 = { style: tmp.learnMore, children: learnMore };
        tmp2Result = metroImportAll(React3, obj4);
      }
      items[1] = tmp2Result;
      items1 = [React4(React3, obj3), ,];
      const obj5 = { children: items2 };
      const obj6 = {
        variant: "eyebrow",
        color: "text-default",
        style: tmp.header,
        children: intl.string(intl2.t.K5FKtc),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items2 = [metroImportAll(Text, obj6), actionItems];
      items1[1] = React4(React3, obj5);
      items1[2] = metroImportAll(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
      return metroImportAll(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_129_0;
      let closure_129_1;
      let closure_129_2;
      let closure_129_3;
      let closure_129_4;
      let closure_129_5;
      let closure_129_6;
      let closure_129_7;
      let first;
      let obj3;
      let senderId;
      let obj = channelId(senderId[8]);
      const cResult = obj.c(19);
      channelId = channelId.channelId;
      const warningId = channelId.warningId;
      senderId = channelId.senderId;
      const top = warningId(senderId[17])().top;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelSafetyWarningsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp6;
        if (cResult[2] === warningId) {
          tmp6 = cResult[3];
        }
        const tmpResult = channelId(senderId[18]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        if (cResult[4] === channelId) {
          let type;
          const tmp8 = cResult[5];
          if (stateFromStores != null) {
            type = stateFromStores.type;
          }
          if (tmp8 === type) {
            if (cResult[6] === senderId) {
              let tmp11;
              if (cResult[7] === warningId) {
                tmp11 = cResult[8];
              }
              if (cResult[9] === channelId) {
                if (cResult[10] === stateFromStores) {
                  if (cResult[11] === senderId) {
                    let tmp14;
                    let tmp17;
                    if (cResult[12] === warningId) {
                      tmp14 = cResult[13];
                    }
                    const effect = stateFromStores.useEffect(tmp11, tmp14);
                    if (cResult[14] !== channelId) {
                      ({
                        modalKey: closure_129_0,
                        channelId: closure_129_1,
                        warningId: closure_129_2,
                        senderId: closure_129_3,
                        description: closure_129_4,
                        safetyTips: closure_129_5,
                        actionItems: closure_129_6,
                        learnMore: closure_129_7,
                      } = channelId);
                      let obj2 = { MORE_TIPS: obj3 };
                      obj3 = {
                        headerRight: null,
                        headerTitle,
                        headerLeft,
                        headerStyle: channelId.headerStyle,
                        render() {
                          const obj = {
                            channelId,
                            warningId,
                            senderId,
                            description,
                            safetyTips,
                            actionItems,
                            learnMore,
                          };
                          return closure_2_8(closure_2_11, obj);
                        },
                      };
                      class S {
                        constructor() {
                          let type;
                          const obj = { channelId, warningId, senderId, warningType: type };
                          type = undefined;
                          const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
                          const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
                          SafetyWarningUtils;
                          if (stateFromStores != null) {
                            type = stateFromStores.type;
                          }
                          trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
                          const obj2 = MonitoringAgentDefault;
                          const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
                          obj2.increment(obj3);
                        }
                      }
                      cResult[14] = channelId;
                      cResult[15] = obj2;
                      tmp17 = obj2;
                    } else {
                      tmp17 = cResult[15];
                    }
                    if (cResult[16] === tmp17) {
                      let tmp18;
                      if (cResult[17] === top) {
                        tmp18 = cResult[18];
                      }
                      return tmp18;
                    }
                    const obj4 = { screens: tmp17, initialRouteName: "MORE_TIPS", headerStatusBarHeight: top };
                    const tmp20 = closure_8(channelId(senderId[22]).Navigator, obj4);
                    class S {
                      constructor() {
                        let type;
                        const obj = { channelId, warningId, senderId, warningType: type };
                        type = undefined;
                        const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
                        const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
                        SafetyWarningUtils;
                        if (stateFromStores != null) {
                          type = stateFromStores.type;
                        }
                        trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
                        const obj2 = MonitoringAgentDefault;
                        const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
                        obj2.increment(obj3);
                      }
                    }
                    cResult[16] = tmp17;
                    cResult[17] = top;
                    cResult[18] = tmp20;
                    tmp18 = tmp20;
                  }
                }
              }
              const items1 = [channelId, warningId, senderId, stateFromStores];
              cResult[9] = channelId;
              class S {
                constructor() {
                  let type;
                  const obj = { channelId, warningId, senderId, warningType: type };
                  type = undefined;
                  const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
                  const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
                  SafetyWarningUtils;
                  if (stateFromStores != null) {
                    type = stateFromStores.type;
                  }
                  trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
                  const obj2 = MonitoringAgentDefault;
                  const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
                  obj2.increment(obj3);
                }
              }
              cResult[11] = senderId;
              cResult[12] = warningId;
              cResult[13] = items1;
              tmp14 = items1;
            }
          }
        }
        cResult[4] = channelId;
        let type1;
        if (stateFromStores != null) {
          type1 = stateFromStores.type;
        }
        class S {
          constructor() {
            let type;
            const obj = { channelId, warningId, senderId, warningType: type };
            type = undefined;
            const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
            const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
            SafetyWarningUtils;
            if (stateFromStores != null) {
              type = stateFromStores.type;
            }
            trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
            const obj2 = MonitoringAgentDefault;
            const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
            obj2.increment(obj3);
          }
        }
        cResult[5] = type1;
        cResult[6] = senderId;
        cResult[7] = warningId;
        cResult[8] = S;
        tmp11 = S;
      }
      const fn = function l() {
        return ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId);
      };
      cResult[1] = channelId;
      cResult[2] = warningId;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (headerStyle) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let obj3;
      const channelId = headerStyle.channelId;
      const warningId = headerStyle.warningId;
      const senderId = headerStyle.senderId;
      const top = warningId(senderId[17])().top;
      let obj = channelId(senderId[18]);
      const items = [ChannelSafetyWarningsStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId),
      );
      const items1 = [channelId, warningId, senderId, stateFromStores];
      const effect = stateFromStores.useEffect(() => {
        let type;
        const obj = { channelId, warningId, senderId, warningType: type };
        type = undefined;
        const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
        const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
        SafetyWarningUtils;
        if (stateFromStores != null) {
          type = stateFromStores.type;
        }
        trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
        const obj2 = MonitoringAgentDefault;
        const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
        obj2.increment(obj3);
      }, items1);
      let obj2 = { screens: obj3, initialRouteName: "MORE_TIPS", headerStatusBarHeight: top };
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      c7 = undefined;
      ({
        modalKey: c0,
        channelId: c1,
        warningId: c2,
        senderId: c3,
        description: c4,
        safetyTips: c5,
        actionItems: c6,
        learnMore: c7,
      } = headerStyle);
      obj3 = {
        MORE_TIPS: {
          headerRight() {
            let intl;
            let obj = {
              onPress() {
                const obj = c1(c2[14]);
                return obj.popWithKey(closure_1_0);
              },
              source: warningId(senderId[15]),
              iconSize: channelId(senderId[16]).IconSizes.MEDIUM,
              accessibilityLabel: intl.string(channelId(senderId[10]).t.cpT0Cq),
            };
            const HeaderActionButton = channelId(senderId[13]).HeaderActionButton;
            intl = channelId(senderId[10]).intl;
            return closure_2_8(HeaderActionButton, obj);
          },
          headerTitle,
          headerLeft,
          headerStyle: headerStyle.headerStyle,
          render() {
            const obj = { channelId, warningId, senderId, description, safetyTips, actionItems, learnMore };
            return closure_2_8(closure_2_11, obj);
          },
        },
      };
      return closure_8(channelId(senderId[22]).Navigator, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx",
);

export default tmp5;
