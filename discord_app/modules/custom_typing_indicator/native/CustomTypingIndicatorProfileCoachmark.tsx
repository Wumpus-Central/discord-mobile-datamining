// === Module 18860: CustomTypingIndicatorProfileCoachmark ===

// Module 18860 (CustomTypingIndicatorProfileCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import user from "user" /* 1391 */;
import _modDef3870 from "module_3870" /* 3870 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 13722 */;
import _modDef13725 from "module_13725" /* 13725 */;
import _modDef13726 from "module_13726" /* 13726 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkPreview() {
  const tmp = closure_8();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null };
  const items = [_modDef13725, _modDef13726, _modDef13725];
  obj2.emojiSource = items;
  obj.children = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let obj2 = { coachmarkImageContainer: { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 }, typingText: { maxWidth: 100 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default function CustomTypingIndicatorProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let str = visible.position;
  if (str === undefined) {
    str = "bottom";
  }
  let intl = visible(str[7]).intl;
  const stringResult = intl.string(markAsDismissed(str[8]).Eq5jIA);
  noop = stringResult;
  const intl2 = visible(str[7]).intl;
  const stringResult1 = intl2.string(markAsDismissed(str[8]).lSBp2M);
  const analyticsLocations = markAsDismissed(str[9])(markAsDismissed(str[10]).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
  const items = [markAsDismissed];
  const onDismiss = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed, analyticsLocations];
  const memo = noop.useMemo(() => {
    const obj = { title, description: stringResult1, visible, position: str, offsetY: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    let PX_12;
    if ("top" === str) {
      PX_12 = nativeDefault.space.PX_12;
    }
    obj.offsetY = PX_12;
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    };
    const intl = util.intl;
    obj.buttonLabel = intl.string(_modDef3870["6NP6ic"]);
    obj.onButtonPress = function onButtonPress() {
      const obj2 = { screen: analyticsLocations.TYPING_INDICATOR, params: { analyticsLocations } };
      visible(str[11]).openUserSettings(obj2, () => {
        closure_1_1(constants.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const tmp3 = markAsDismissed(str[9]);
  const coachmark = visible(str[12]).useCoachmark(visible.targetRef, memo);
  return null;
};