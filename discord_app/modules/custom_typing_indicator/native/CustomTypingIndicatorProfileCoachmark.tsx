// === Module 16302: CoachmarkPreview ===

// Module 16302 (CoachmarkPreview)
import ThemesDefault from "Themes" /* 712 */;
import create from "create" /* 1939 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11480 */;
import metadataDefault from "metadata" /* 11484 */;
import metadataDefault2 from "metadata" /* 11485 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function CoachmarkPreview() {
  const tmp = callback();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { name: "Locke", suggestion: create.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null };
  const items = [metadataDefault, metadataDefault2, metadataDefault];
  obj[8] = items;
  obj[1] = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: create.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null });
  return <View name="Locke" suggestion={create.TypingSuggestion.YAPPING} emojiSize={16} spacing={8} emojiGap={4} textVariant="text-xs/medium" textColor="text-subtle" textStyle={tmp.typingText} emojiSource={null} />;
}
createCacheKey = { coachmarkImageContainer: null, typingText: null };
createCacheKey = { alignItems: "center", justifyContent: "center", paddingTop: ThemesDefault.space.PX_10 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { maxWidth: 100 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default function CustomTypingIndicatorProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let str = visible.position;
  if (str === undefined) {
    str = "bottom";
  }
  let React;
  let stringResult1;
  let callback;
  let intl = visible(str[7]).intl;
  const stringResult = intl.string(markAsDismissed(str[8]).Eq5jIA);
  React = stringResult;
  const intl2 = visible(str[7]).intl;
  stringResult1 = intl2.string(markAsDismissed(str[8]).lSBp2M);
  const items = [markAsDismissed];
  callback = React.useCallback(() => {
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, callback, markAsDismissed];
  const memo = React.useMemo(() => {
    let obj = { title: c3, description: stringResult1, visible, position: str, offsetY: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    let PX_12;
    if ("top" === str) {
      PX_12 = markAsDismissed(str[6]).space.PX_12;
    }
    obj[4] = PX_12;
    obj[5] = callback;
    obj[6] = function renderImgComponent() {
      return callback(closure_9, {});
    };
    const intl = visible(str[7]).intl;
    obj[7] = intl.string(markAsDismissed(str[8])["6NP6ic"]);
    obj[9] = function onButtonPress() {
      let obj = closure_1_0(closure_1_2[9]);
      obj = { screen: closure_1_5.TYPING_INDICATOR };
      obj.openUserSettings(obj, () => {
        callback(closure_1_6.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const coachmark = visible(str[10]).useCoachmark(visible.targetRef, memo);
  return null;
};