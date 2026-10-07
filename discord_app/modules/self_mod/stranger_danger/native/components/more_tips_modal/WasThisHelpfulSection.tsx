// === Module 9822: WasThisHelpfulSection ===

// Module 9822 (WasThisHelpfulSection)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import _modDef8951 from "module_8951" /* 8951 */;
import ShieldIcon from "ShieldIcon" /* 8952 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9811 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 9812 */;
import noop from "module_19" /* 19 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9799 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(9799).SafetyWarningFeedbackTypes;
const Constants = fn(9797);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: closure_9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flexDirection: "column", alignItems: "center" }, buttonsContainer: { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, buttonsBackground: null, buttonsBackgroundInactive: null, buttonsBackgroundActive: null, buttonIconInactive: null, buttonIconActive: null, toastContainer: null };
let size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj2.buttonsBackground = size;
let obj3 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.buttonsBackgroundInactive = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.buttonsBackgroundActive = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
let obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
obj2.buttonIconInactive = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj6 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.buttonIconActive = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.toastContainer = { paddingHorizontal: 8, paddingVertical: 12 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(senderId[8]).c(44);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const tmp4 = closure_13();
  noop = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === warningId) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[9]).useStateFromStores(first, tmp7);
    if (stateFromStores != null) {
      const feedback_type = stateFromStores.feedback_type;
    }
    if (stateFromStores != null) {
      const feedback_type2 = stateFromStores.feedback_type;
    }
    if (cResult[4] === channelId) {
      let type;
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      if (cResult[5] === type) {
        if (cResult[6] === senderId) {
          if (cResult[7] === tmp4.toastContainer) {
            if (cResult[8] === warningId) {
              let tmp12 = cResult[9];
            }
            closure_5 = tmp12;
            const _Symbol = Symbol;
            const container = tmp4.container;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
              let intl = tmp(tmp2[13]).intl;
              obj2.children = intl.string(tmp(tmp2[13]).t.L84yVm);
              const tmp16 = closure_11(tmp(tmp2[17]).Text, obj2);
              cResult[10] = tmp16;
            }
            const tmp18 = feedback_type === constants.UPVOTE ? tmp4.buttonsBackgroundActive : tmp4.buttonsBackgroundInactive;
            if (cResult[11] === tmp4.buttonsBackground) {
              if (cResult[12] === tmp18) {
                let tmp19 = cResult[13];
              }
              if (cResult[14] !== tmp12) {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                cResult[14] = tmp12;
                cResult[15] = L;
              } else {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                const stringResult = obj4.string(tmp(tmp2[13]).t["2GrOCN"]);
                cResult[16] = stringResult;
                const tmp21 = stringResult;
              } else {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (tmp17) {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              } else {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (cResult[17] !== tmp23) {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
                let obj3 = { size: tmp(tmp2[18]).Icon.Sizes.SMALL_20, source: warningId(tmp2[19]), color: tmp23 };
                const tmp26 = closure_11(tmp(tmp2[18]).Icon, obj3);
                cResult[17] = tmp23;
                cResult[18] = tmp26;
              } else {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              if (cResult[19] === tmp17) {
                class L {
                  constructor() {
                    return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
                  }
                }
              }
              let obj5 = { style: tmp19, disabled: tmp17, onPress: L, accessibilityLabel: tmp21, children: tmp24 };
              class S {
                constructor(arg0, arg1) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[10]);
                  tmp3 = channelId;
                  tmp4 = warningId;
                  result = obj.setChannelSafetyWarningFeedback(channelId, warningId, channelId);
                  tmp6 = channelId === closure_7.UPVOTE ? closure_10 : closure_8;
                  tmpResult = tmp(tmp2[11]);
                  tmp8 = closure_1;
                  designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
                  obj3 = closure_1(tmp2[12]);
                  if (designSystemsNotificationComponents) {
                    obj1 = { text: null, icon: null, iconColor: null };
                    intl2 = tmp(tmp2[13]).intl;
                    obj1.text = intl2.string(tmp(tmp2[13]).t["gd/Yqs"]);
                    obj1.icon = tmp(tmp2[14]).ShieldIcon;
                    obj1.iconColor = tmp8(tmp2[6]).colors.ICON_BRAND;
                    openManaResult = obj3.openMana(tmp6, obj1);
                  } else {
                    obj8 = { key: null, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
                    obj8.key = tmp6;
                    intl = tmp(tmp2[13]).intl;
                    obj8.content = intl.string(tmp(tmp2[13]).t["gd/Yqs"]);
                    obj8.icon = tmp8(tmp2[15]);
                    obj8.IconComponent = tmp(tmp2[14]).ShieldIcon;
                    tmp9 = TOAST_SHIELD_ICON_COLOR;
                    obj8.iconColor = TOAST_SHIELD_ICON_COLOR;
                    tmp10 = closure_3;
                    obj8.containerStyle = closure_3.toastContainer;
                    openResult = obj3.open(obj8);
                  }
                  tmpResult1 = tmp(tmp2[16]);
                  obj9 = { channelId: tmp3, warningId: tmp4, senderId, warningType: null, cta: null };
                  type = undefined;
                  if (closure_4 != null) {
                    type = closure_4.type;
                  }
                  obj9.warningType = type;
                  obj9.cta = arg1;
                  trackCtaEventResult = tmpResult1.trackCtaEvent(obj9);
                  return;
                }
              }
              cResult[19] = tmp17;
              cResult[20] = tmp24;
              cResult[21] = tmp19;
              cResult[22] = L;
              cResult[23] = tmp30;
            }
            const items1 = [tmp4.buttonsBackground, tmp18];
            cResult[11] = tmp4.buttonsBackground;
            cResult[12] = tmp18;
            class S {
              constructor(arg0, arg1) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[10]);
                tmp3 = channelId;
                tmp4 = warningId;
                result = obj.setChannelSafetyWarningFeedback(channelId, warningId, channelId);
                tmp6 = channelId === closure_7.UPVOTE ? closure_10 : closure_8;
                tmpResult = tmp(tmp2[11]);
                tmp8 = closure_1;
                designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
                obj3 = closure_1(tmp2[12]);
                if (designSystemsNotificationComponents) {
                  obj1 = { text: null, icon: null, iconColor: null };
                  intl2 = tmp(tmp2[13]).intl;
                  obj1.text = intl2.string(tmp(tmp2[13]).t["gd/Yqs"]);
                  obj1.icon = tmp(tmp2[14]).ShieldIcon;
                  obj1.iconColor = tmp8(tmp2[6]).colors.ICON_BRAND;
                  openManaResult = obj3.openMana(tmp6, obj1);
                } else {
                  obj8 = { key: null, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
                  obj8.key = tmp6;
                  intl = tmp(tmp2[13]).intl;
                  obj8.content = intl.string(tmp(tmp2[13]).t["gd/Yqs"]);
                  obj8.icon = tmp8(tmp2[15]);
                  obj8.IconComponent = tmp(tmp2[14]).ShieldIcon;
                  tmp9 = TOAST_SHIELD_ICON_COLOR;
                  obj8.iconColor = TOAST_SHIELD_ICON_COLOR;
                  tmp10 = closure_3;
                  obj8.containerStyle = closure_3.toastContainer;
                  openResult = obj3.open(obj8);
                }
                tmpResult1 = tmp(tmp2[16]);
                obj9 = { channelId: tmp3, warningId: tmp4, senderId, warningType: null, cta: null };
                type = undefined;
                if (closure_4 != null) {
                  type = closure_4.type;
                }
                obj9.warningType = type;
                obj9.cta = arg1;
                trackCtaEventResult = tmpResult1.trackCtaEvent(obj9);
                return;
              }
            }
            cResult[13] = items1;
            tmp19 = items1;
          }
        }
      }
    }
    cResult[4] = channelId;
    if (stateFromStores != null) {
      class L {
        constructor() {
          return closure_5(closure_7.UPVOTE, closure_0(closure_2[16]).CtaEventTypes.FEEDBACK_UPVOTE);
        }
      }
    }
    class S {
      constructor(arg0, arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = channelId;
        tmp4 = warningId;
        result = obj.setChannelSafetyWarningFeedback(channelId, warningId, channelId);
        tmp6 = channelId === closure_7.UPVOTE ? closure_10 : closure_8;
        tmpResult = tmp(tmp2[11]);
        tmp8 = closure_1;
        designSystemsNotificationComponents = tmpResult.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
        obj3 = closure_1(tmp2[12]);
        if (designSystemsNotificationComponents) {
          obj1 = { text: null, icon: null, iconColor: null };
          intl2 = tmp(tmp2[13]).intl;
          obj1.text = intl2.string(tmp(tmp2[13]).t["gd/Yqs"]);
          obj1.icon = tmp(tmp2[14]).ShieldIcon;
          obj1.iconColor = tmp8(tmp2[6]).colors.ICON_BRAND;
          openManaResult = obj3.openMana(tmp6, obj1);
        } else {
          obj8 = { key: null, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
          obj8.key = tmp6;
          intl = tmp(tmp2[13]).intl;
          obj8.content = intl.string(tmp(tmp2[13]).t["gd/Yqs"]);
          obj8.icon = tmp8(tmp2[15]);
          obj8.IconComponent = tmp(tmp2[14]).ShieldIcon;
          tmp9 = TOAST_SHIELD_ICON_COLOR;
          obj8.iconColor = TOAST_SHIELD_ICON_COLOR;
          tmp10 = closure_3;
          obj8.containerStyle = closure_3.toastContainer;
          openResult = obj3.open(obj8);
        }
        tmpResult1 = tmp(tmp2[16]);
        obj9 = { channelId: tmp3, warningId: tmp4, senderId, warningType: null, cta: null };
        type = undefined;
        if (closure_4 != null) {
          type = closure_4.type;
        }
        obj9.warningType = type;
        obj9.cta = arg1;
        trackCtaEventResult = tmpResult1.trackCtaEvent(obj9);
        return;
      }
    }
    cResult[5] = undefined;
    cResult[6] = senderId;
    cResult[7] = tmp4.toastContainer;
    cResult[8] = warningId;
    cResult[9] = S;
    tmp12 = S;
    let tmpResult = tmp(tmp2[9]);
  }
  const fn = function u() {
    return ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId);
  };
  cResult[1] = channelId;
  cResult[2] = warningId;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = channelId(senderId[8]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_13();
  noop = tmp;
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = channelId(senderId[9]).useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = noop.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === constants.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  closure_5 = noop.useCallback((feedbackType, cta) => {
    const result = ChannelSafetyWarningsActionCreators.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    const tmp6 = feedbackType === constants.UPVOTE ? v65535 : closure_2_8;
    const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("WasThisHelpfulSectionNative");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const obj2 = { text: null, icon: null, iconColor: null };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t["gd/Yqs"]);
      obj2.icon = ShieldIcon.ShieldIcon;
      obj2.iconColor = nativeDefault.colors.ICON_BRAND;
      obj3.openMana(tmp6, obj2);
    } else {
      const obj4 = { key: tmp6, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
      const intl = util.intl;
      obj4.content = intl.string(util.t["gd/Yqs"]);
      obj4.icon = _modDef8951;
      obj4.IconComponent = ShieldIcon.ShieldIcon;
      obj4.iconColor = iconColor;
      obj4.containerStyle = toastContainer.toastContainer;
      obj3.open(obj4);
    }
    const tmpResult = DesignSystemsNotificationComponentsExperiment;
    const obj5 = { channelId, warningId, senderId, warningType: null, cta: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj5.warningType = type;
    obj5.cta = cta;
    SafetyWarningUtils.trackCtaEvent(obj5);
    const tmpResult2 = SafetyWarningUtils;
  }, items3);
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  let intl = channelId(senderId[13]).intl;
  obj3.children = intl.string(channelId(senderId[13]).t.L84yVm);
  const items4 = [closure_11(channelId(senderId[17]).Text, obj3), ];
  let obj4 = { style: tmp.buttonsContainer, children: null };
  const items5 = [tmp.buttonsBackground, ];
  let obj5 = {
    style: items5,
    disabled: memo,
    onPress() {
      return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  let intl2 = tmp2(tmp3[13]).intl;
  obj5.accessibilityLabel = intl2.string(channelId(senderId[13]).t["2GrOCN"]);
  const obj6 = { size: channelId(senderId[18]).Icon.Sizes.SMALL_20, source: warningId(senderId[19]), color: null };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj6.color = color;
  obj5.children = closure_11(channelId(senderId[18]).Icon, obj6);
  const items6 = [closure_11(stateFromStores, obj5), ];
  const items7 = [tmp.buttonsBackground, ];
  const obj7 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return closure_5(constants.DOWNVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const intl3 = tmp2(tmp3[13]).intl;
  obj7.accessibilityLabel = intl3.string(channelId(senderId[13]).t.COp9BO);
  const obj8 = { size: channelId(senderId[18]).Icon.Sizes.SMALL_20, source: warningId(senderId[20]), color: null };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj8.color = color2;
  obj7.children = closure_11(channelId(senderId[18]).Icon, obj8);
  items6[1] = closure_11(stateFromStores, obj7);
  obj4.children = items6;
  items4[1] = closure_12(closure_5, obj4);
  obj2.children = items4;
  return closure_12(closure_5, obj2);
});