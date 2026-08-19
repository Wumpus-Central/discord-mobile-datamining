// === Module 10589: WasThisHelpfulSection ===

// Module 10589 (WasThisHelpfulSection)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleConnectionOpen from "handleConnectionOpen" /* 9921 */;
import { SafetyWarningFeedbackTypes as closure_7 } from "handleConnectionOpen" /* 9921 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ DOWNVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: closure_8, TOAST_SHIELD_ICON_COLOR: c9, UPVOTE_FEEDBACK_CONFIRMATION_TOAST_KEY: c10, FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR } = LOCATION_CONTEXT_MOBILE);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { flexDirection: "row", marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: ThemesDefault.space.PX_32, height: ThemesDefault.space.PX_32, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[4] = { borderWidth: 1, borderColor: ThemesDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, backgroundColor: FEEDBACK_BUTTON_ACTIVE_BACKGROUND_COLOR };
createCacheKey[5] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[7] = { paddingHorizontal: 8, paddingVertical: 12 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/WasThisHelpfulSection.tsx");

export default function WasThisHelpfulSection(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const tmp = callback2();
  const React = tmp;
  let obj = channelId(senderId[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannelSafetyWarning(channelId, warningId));
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === closure_1_7.UPVOTE;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = React.useMemo(() => {
    let feedback_type;
    if (stateFromStores != null) {
      feedback_type = stateFromStores.feedback_type;
    }
    return feedback_type === closure_1_7.DOWNVOTE;
  }, items2);
  const items3 = [channelId, warningId, tmp.toastContainer, senderId, stateFromStores];
  closure_5 = React.useCallback((feedbackType) => {
    let obj = channelId(senderId[8]);
    const result = obj.setChannelSafetyWarningFeedback(channelId, warningId, feedbackType);
    obj = { key: feedbackType === closure_1_7.UPVOTE ? closure_1_10 : closure_1_8, content: null, icon: null, IconComponent: null, iconColor: null, containerStyle: null, recolorLegacyIcon: true };
    const intl = channelId(senderId[10]).intl;
    obj[1] = intl.string(channelId(senderId[10]).t["gd/Yqs"]);
    obj[2] = warningId(senderId[11]);
    obj[3] = channelId(senderId[12]).ShieldIcon;
    obj[4] = closure_1_9;
    obj[5] = toastContainer.toastContainer;
    warningId(senderId[9]).open(obj);
    const obj2 = warningId(senderId[9]);
    obj = { channelId, warningId, senderId, warningType: null, cta: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj[3] = type;
    obj[4] = arg1;
    channelId(senderId[13]).trackCtaEvent(obj);
    const tmpResult = channelId(senderId[13]);
  }, items3);
  obj = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: null };
  let intl = channelId(senderId[10]).intl;
  obj[2] = intl.string(channelId(senderId[10]).t.L84yVm);
  const items4 = [callback(channelId(senderId[14]).Text, obj), ];
  obj1 = { style: tmp.buttonsContainer, children: null };
  const items5 = [tmp.buttonsBackground, ];
  let obj2 = {
    style: items5,
    disabled: memo,
    onPress() {
      return callback(closure_1_7.UPVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_UPVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items5[1] = memo ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const intl2 = tmp2(tmp3[10]).intl;
  obj2[3] = intl2.string(channelId(senderId[10]).t["2GrOCN"]);
  const obj3 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[16]), color: null };
  if (memo) {
    let color = tmp.buttonIconActive.color;
  } else {
    color = tmp.buttonIconInactive.color;
  }
  obj3[2] = color;
  obj2[4] = callback(channelId(senderId[15]).Icon, obj3);
  const items6 = [callback(stateFromStores, obj2), ];
  const items7 = [tmp.buttonsBackground, ];
  const obj4 = {
    style: items7,
    disabled: memo1,
    onPress() {
      return callback(closure_1_7.DOWNVOTE, channelId(senderId[13]).CtaEventTypes.FEEDBACK_DOWNVOTE);
    },
    accessibilityLabel: null,
    children: null
  };
  items7[1] = memo1 ? tmp.buttonsBackgroundActive : tmp.buttonsBackgroundInactive;
  const intl3 = tmp2(tmp3[10]).intl;
  obj4[3] = intl3.string(channelId(senderId[10]).t.COp9BO);
  const obj5 = { size: channelId(senderId[15]).Icon.Sizes.SMALL_20, source: warningId(senderId[17]), color: null };
  if (memo1) {
    let color2 = tmp.buttonIconActive.color;
  } else {
    color2 = tmp.buttonIconInactive.color;
  }
  obj5[2] = color2;
  obj4[4] = callback(channelId(senderId[15]).Icon, obj5);
  items6[1] = callback(stateFromStores, obj4);
  obj1[1] = items6;
  items4[1] = callback(closure_5, obj1);
  obj[1] = items4;
  return callback(closure_5, obj);
};