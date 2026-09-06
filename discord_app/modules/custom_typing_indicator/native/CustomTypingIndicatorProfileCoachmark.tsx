// === Module 16789: CustomTypingIndicatorProfileCoachmark ===

// Module 16789 (CustomTypingIndicatorProfileCoachmark)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import user from "user" /* 1379 */;
import _modDef3549 from "module_3549" /* 3549 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11970 */;
import _modDef11974 from "module_11974" /* 11974 */;
import _modDef11975 from "module_11975" /* 11975 */;
import noop from "module_19" /* 19 */;

require = fn;
function CoachmarkPreview() {
  const tmp = closure_8();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null };
  const items = [_modDef11974, _modDef11975, _modDef11974];
  obj.emojiSource = items;
  obj.children = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null });
  return <View name="Locke" suggestion={user.TypingSuggestion.YAPPING} emojiSize={16} spacing={8} emojiGap={4} textVariant="text-xs/medium" textColor="text-subtle" textStyle={tmp.typingText} emojiSource={null} />;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { coachmarkImageContainer: null, typingText: null };
createStyles = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
createStyles.coachmarkImageContainer = createStyles;
createStyles.typingText = { maxWidth: 100 };
let closure_8 = createStyles.createStyles(createStyles);
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
  const items = [markAsDismissed];
  const onDismiss = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed];
  const memo = noop.useMemo(() => {
    let obj = { title, description: stringResult1, visible, position: str, offsetY: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
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
    obj.buttonLabel = intl.string(_modDef3549["6NP6ic"]);
    obj.onButtonPress = function onButtonPress() {
      visible(str[9]);
      const obj = { screen: callback.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
      obj.openUserSettings(obj, () => {
        closure_1_1(constants.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const coachmark = visible(str[10]).useCoachmark(visible.targetRef, memo);
  return null;
};