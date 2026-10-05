// === Module 9809: WasThisHelpfulSection ===

// Module 9809 (WasThisHelpfulSection)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 8922 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 9786 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9798 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9799 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 9784 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;
let channelId;

let FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR;
let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let unpackModuleId;
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const constants = ChannelSafetyWarningsStore2.SafetyWarningFeedbackTypes;
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: metroImportAll, TOAST_SHIELD_ICON_COLOR: c9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", alignItems: "center" }, buttonsContainer: obj2, buttonsBackground: size, buttonsBackgroundInactive: obj3, buttonsBackgroundActive: obj4, buttonIconInactive: obj5, buttonIconActive: obj6, toastContainer: { paddingHorizontal: 8, paddingVertical: 12 } };
obj2 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_13 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let intl;
  let obj4;
  let senderId;
  let toastContainer;
  let obj = channelId(senderId[8]);
  const cResult = obj.c(44);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const tmp4 = closure_13();
  react = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    let tmp7;
    let feedback_type;
    if (cResult[2] === warningId) {
      tmp7 = cResult[3];
    }
    let tmpResult = tmp(tmp2[9]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
    let tmp9 = null;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    const UPVOTE = constants.UPVOTE;
    if (stateFromStores != null) {
      const feedback_type2 = stateFromStores.feedback_type;
    }
    if (cResult[4] === channelId) {
      let type;
      const tmp11 = cResult[5];
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      if (tmp11 === type) {
        if (cResult[6] === senderId) {
          if (cResult[7] === tmp4.toastContainer) {
            let tmp13;
            if (cResult[8] === warningId) {
              tmp13 = cResult[9];
            }
            let closure_5 = tmp13;
            const _Symbol = Symbol;
            const container = tmp4.container;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(channelId(senderId[13]).t.L84yVm) };
              const Text = tmp(tmp2[17]).Text;
              intl = tmp(tmp2[13]).intl;
              cResult[10] = closure_11(Text, obj2);
              const tmp17 = closure_11(Text, obj2);
            }
            const tmp19 = feedback_type === UPVOTE ? tmp4.buttonsBackgroundActive : tmp4.buttonsBackgroundInactive;
            if (cResult[11] === tmp4.buttonsBackground) {
              let tmp20;
              if (cResult[12] === tmp19) {
                tmp20 = cResult[13];
              }
              if (cResult[14] !== tmp13) {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                cResult[14] = tmp13;
                cResult[15] = L;
              } else {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                const stringResult = obj4.string(channelId(senderId[13]).t["2GrOCN"]);
                cResult[16] = stringResult;
              } else {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (feedback_type === UPVOTE) {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              } else {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (cResult[17] !== tmp24) {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                let obj3 = { size: channelId(senderId[18]).Icon.Sizes.SMALL_20, source: warningId(senderId[19]), color: tmp24 };
                const Icon = tmp(tmp2[18]).Icon;
                cResult[17] = tmp24;
                cResult[18] = closure_11(Icon, obj3);
                const tmp27 = closure_11(Icon, obj3);
              } else {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (cResult[19] === feedback_type === UPVOTE) {
                class L {
                  constructor() {
                    return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              class S {
                constructor(feedbackType, cta) {
                  let intl;
                  let intl2;
                  let type;
                  const obj = ChannelSafetyWarningsActionCreators;
                  const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
                  const tmp6 = feedbackType === constants.UPVOTE ? authStore : metroImportAll;
                  const tmpResult = DesignSystemsNotificationComponentsExperiment;
                  const designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
                  const tmp9 = ToastActionCreatorsDefault;
                  if (designSystemsNotificationComponents) {
                    const openMana = tmp9.openMana;
                    const obj2 = { text: intl2.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
                    intl2 = intl4.intl;
                    openMana(tmp6, obj2);
                  } else {
                    const open = tmp9.open;
                    const obj3 = { key: tmp6, content: intl.string(intl4.t["gd/Yqs"]), icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor, containerStyle: toastContainer.toastContainer, recolorLegacyIcon: true };
                    intl = intl4.intl;
                    open(obj3);
                  }
                  const obj4 = { channelId, warningId, senderId, warningType: type, cta };
                  type = undefined;
                  const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
                  SafetyWarningUtils;
                  if (stateFromStores != null) {
                    type = stateFromStores.type;
                  }
                  trackCtaEvent(obj4);
                }
              }
              cResult[19] = feedback_type === UPVOTE;
              cResult[20] = tmp25;
              cResult[21] = tmp20;
              cResult[22] = L;
              cResult[23] = tmp31;
            }
            const items1 = [tmp4.buttonsBackground, tmp19];
            cResult[11] = tmp4.buttonsBackground;
            cResult[12] = tmp19;
            class S {
              constructor(feedbackType, cta) {
                let intl;
                let intl2;
                let type;
                const obj = ChannelSafetyWarningsActionCreators;
                const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
                const tmp6 = feedbackType === constants.UPVOTE ? authStore : metroImportAll;
                const tmpResult = DesignSystemsNotificationComponentsExperiment;
                const designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
                const tmp9 = ToastActionCreatorsDefault;
                if (designSystemsNotificationComponents) {
                  const openMana = tmp9.openMana;
                  const obj2 = { text: intl2.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
                  intl2 = intl4.intl;
                  openMana(tmp6, obj2);
                } else {
                  const open = tmp9.open;
                  const obj3 = { key: tmp6, content: intl.string(intl4.t["gd/Yqs"]), icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor, containerStyle: toastContainer.toastContainer, recolorLegacyIcon: true };
                  intl = intl4.intl;
                  open(obj3);
                }
                const obj4 = { channelId, warningId, senderId, warningType: type, cta };
                type = undefined;
                const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
                SafetyWarningUtils;
                if (stateFromStores != null) {
                  type = stateFromStores.type;
                }
                trackCtaEvent(obj4);
              }
            }
            cResult[13] = items1;
            tmp20 = items1;
          }
        }
      }
    }
    cResult[4] = channelId;
    if (stateFromStores != null) {
      class L {
        constructor() {
          return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
        }
      }
    }
    class S {
      constructor(feedbackType, cta) {
        let intl;
        let intl2;
        let type;
        const obj = ChannelSafetyWarningsActionCreators;
        const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
        const tmp6 = feedbackType === constants.UPVOTE ? authStore : metroImportAll;
        const tmpResult = DesignSystemsNotificationComponentsExperiment;
        const designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
        const tmp9 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          const openMana = tmp9.openMana;
          const obj2 = { text: intl2.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
          intl2 = intl4.intl;
          openMana(tmp6, obj2);
        } else {
          const open = tmp9.open;
          const obj3 = { key: tmp6, content: intl.string(intl4.t["gd/Yqs"]), icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor, containerStyle: toastContainer.toastContainer, recolorLegacyIcon: true };
          intl = intl4.intl;
          open(obj3);
        }
        const obj4 = { channelId, warningId, senderId, warningType: type, cta };
        type = undefined;
        const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
        SafetyWarningUtils;
        if (stateFromStores != null) {
          type = stateFromStores.type;
        }
        trackCtaEvent(obj4);
      }
    }
    cResult[5] = undefined;
    cResult[6] = senderId;
    cResult[7] = tmp4.toastContainer;
    cResult[8] = warningId;
    cResult[9] = S;
    tmp13 = S;
  }
  const fn = function u() {
    return ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId);
  };
  cResult[1] = channelId;
  cResult[2] = warningId;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((channelId) => {
  let Icon;
  let Icon2;
  let color;
  let color2;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items6;
  let obj6;
  let obj8;
  let toastContainer;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_13();
  react = tmp;
  let obj = channelId(senderId[9]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = react.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  let closure_5 = react.useCallback((feedbackType, cta) => {
    let intl;
    let intl2;
    let type;
    const obj = ChannelSafetyWarningsActionCreators;
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    const tmp6 = feedbackType === constants.UPVOTE ? authStore : metroImportAll;
    const tmpResult = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
    const tmp9 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const openMana = tmp9.openMana;
      const obj2 = { text: intl2.string(intl4.t["gd/Yqs"]), icon: ShieldIcon.ShieldIcon, iconColor: nativeDefault.colors.ICON_BRAND };
      intl2 = intl4.intl;
      openMana(tmp6, obj2);
    } else {
      const open = tmp9.open;
      const obj3 = { key: tmp6, content: intl.string(intl4.t["gd/Yqs"]), icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor, containerStyle: toastContainer.toastContainer, recolorLegacyIcon: true };
      intl = intl4.intl;
      open(obj3);
    }
    const obj4 = { channelId, warningId, senderId, warningType: type, cta };
    type = undefined;
    const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
    SafetyWarningUtils;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    trackCtaEvent(obj4);
  }, items3);
  let obj2 = { style: tmp.container, children: items4 };
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(channelId(senderId[13]).t.L84yVm) };
  const Text = channelId(senderId[17]).Text;
  intl = channelId(senderId[13]).intl;
  items4 = [closure_11(Text, obj3), ];
  let obj4 = { style: tmp.buttonsContainer, children: items6 };
  const items5 = [tmp.buttonsBackground, ];
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj5 = {
    style: items5,
    disabled: memo,
    onPress() {
      return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: intl2.string(channelId(senderId[13]).t["2GrOCN"]),
    children: closure_11(Icon, obj6)
  };
  intl2 = tmp2(tmp3[13]).intl;
  obj6 = { size: channelId(senderId[18]).Icon.Sizes.SMALL_20, source: warningId(senderId[19]), color };
  Icon = tmp2(tmp3[18]).Icon;
  const tmp11 = warningId;
  if (memo) {
    color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  items6 = [closure_11(stateFromStores, obj5), ];
  const items7 = [tmp.buttonsBackground, ];
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const obj7 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return closure_5(constants.DOWNVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: intl3.string(channelId(senderId[13]).t.COp9BO),
    children: closure_11(Icon2, obj8)
  };
  intl3 = tmp2(tmp3[13]).intl;
  obj8 = { size: channelId(senderId[18]).Icon.Sizes.SMALL_20, source: tmp11(senderId[20]), color: color2 };
  Icon2 = tmp2(tmp3[18]).Icon;
  if (memo1) {
    color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  items6[1] = closure_11(stateFromStores, obj7);
  items4[1] = closure_12(closure_5, obj4);
  return closure_12(closure_5, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default tmp6;