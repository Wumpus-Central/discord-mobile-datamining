// === Module 11531: WasThisHelpfulSection ===

// Module 11531 (WasThisHelpfulSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef9555 from "module_9555" /* 9555 */;
import ShieldIcon from "ShieldIcon" /* 9556 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11524 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 11525 */;
import noop from "module_19" /* 19 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11072 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(11072).SafetyWarningFeedbackTypes;
const Constants = fn(11517);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: closure_9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4640);
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
size = fn(2);
let result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = closure_13();
  noop = tmp;
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = channelId(senderId[7]).useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
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
    const obj3 = { key: feedbackType === constants.UPVOTE ? closure_2_10 : React6, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
    const intl = util.intl;
    obj3.content = intl.string(util.t["gd/Yqs"]);
    obj3.icon = _modDef9555;
    obj3.IconComponent = ShieldIcon.ShieldIcon;
    obj3.iconColor = iconColor;
    obj3.containerStyle = toastContainer.toastContainer;
    ToastActionCreatorsDefault.open(obj3);
    const obj4 = { channelId, warningId, senderId, warningType: null, cta: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj4.warningType = type;
    obj4.cta = cta;
    SafetyWarningUtils.trackCtaEvent(obj4);
    const tmpResult = SafetyWarningUtils;
  }, items3);
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  let intl = channelId(senderId[10]).intl;
  obj3.children = intl.string(channelId(senderId[10]).t.L84yVm);
  const items4 = [closure_11(channelId(senderId[14]).Text, obj3), ];
  let obj4 = { style: tmp.buttonsContainer, children: null };
  const items5 = [tmp.buttonsBackground, ];
  const obj5 = {
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
  obj5.accessibilityLabel = intl2.string(channelId(senderId[10]).t["2GrOCN"]);
  const obj6 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[16]), color: null };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj6.color = color;
  obj5.children = closure_11(channelId(senderId[15]).Icon, obj6);
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
  const intl3 = tmp2(tmp3[10]).intl;
  obj7.accessibilityLabel = intl3.string(channelId(senderId[10]).t.COp9BO);
  const obj8 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[17]), color: null };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj8.color = color2;
  obj7.children = closure_11(channelId(senderId[15]).Icon, obj8);
  items6[1] = closure_11(stateFromStores, obj7);
  obj4.children = items6;
  items4[1] = closure_12(closure_5, obj4);
  obj2.children = items4;
  return closure_12(closure_5, obj2);
};