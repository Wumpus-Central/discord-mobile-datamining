// === Module 11377: WasThisHelpfulSection ===

// Module 11377 (WasThisHelpfulSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef9401 from "module_9401" /* 9401 */;
import ShieldIcon from "ShieldIcon" /* 9402 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11370 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11371 */;
import noop from "module_19" /* 19 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(10915).SafetyWarningFeedbackTypes;
const Constants = fn(11363);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: closure_9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: { flexDirection: "column", alignItems: "center" }, buttonsContainer: null, buttonsBackground: null, buttonsBackgroundInactive: null, buttonsBackgroundActive: null, buttonIconInactive: null, buttonIconActive: null, toastContainer: null };
createStyles = { flexDirection: "row", marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles.buttonsContainer = createStyles;
let size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
createStyles.buttonsBackground = size;
createStyles.buttonsBackgroundInactive = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.buttonsBackgroundActive = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
let obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
createStyles.buttonIconInactive = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.buttonIconActive = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles.toastContainer = { paddingHorizontal: 8, paddingVertical: 12 };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_13();
  noop = tmp;
  let obj = channelId(senderId[7]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
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
    let obj = ChannelSafetyWarningsActionCreators;
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    obj = { key: feedbackType === constants.UPVOTE ? closure_2_10 : React6, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
    const intl = tmp(1114).intl;
    obj.content = intl.string(util.t["gd/Yqs"]);
    obj.icon = _modDef9401;
    obj.IconComponent = ShieldIcon.ShieldIcon;
    obj.iconColor = iconColor;
    obj.containerStyle = toastContainer.toastContainer;
    ToastActionCreatorsDefault.open(obj);
    const tmp3 = channelId;
    const tmp4 = warningId;
    obj = { channelId: tmp3, warningId: tmp4, senderId, warningType: null, cta: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj.warningType = type;
    obj.cta = cta;
    SafetyWarningUtils.trackCtaEvent(obj);
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  let intl = channelId(senderId[10]).intl;
  obj.children = intl.string(channelId(senderId[10]).t.L84yVm);
  const items4 = [closure_11(channelId(senderId[14]).Text, obj), ];
  const obj1 = { style: tmp.buttonsContainer, children: null };
  const items5 = [tmp.buttonsBackground, ];
  let obj2 = {
    style: items5,
    disabled: memo,
    onPress() {
      return closure_5(constants.UPVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const intl2 = tmp2(tmp3[10]).intl;
  obj2.accessibilityLabel = intl2.string(channelId(senderId[10]).t["2GrOCN"]);
  const obj3 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[16]), color: null };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj3.color = color;
  obj2.children = closure_11(channelId(senderId[15]).Icon, obj3);
  const items6 = [closure_11(stateFromStores, obj2), ];
  const items7 = [tmp.buttonsBackground, ];
  const obj4 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return closure_5(constants.DOWNVOTE, SafetyWarningUtils.CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const intl3 = tmp2(tmp3[10]).intl;
  obj4.accessibilityLabel = intl3.string(channelId(senderId[10]).t.COp9BO);
  const obj5 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[17]), color: null };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj5.color = color2;
  obj4.children = closure_11(channelId(senderId[15]).Icon, obj5);
  items6[1] = closure_11(stateFromStores, obj4);
  obj1.children = items6;
  items4[1] = closure_12(closure_5, obj1);
  obj.children = items4;
  return closure_12(closure_5, obj);
};