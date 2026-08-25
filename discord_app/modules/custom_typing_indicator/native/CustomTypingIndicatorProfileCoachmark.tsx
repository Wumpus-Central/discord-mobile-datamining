// === Module 16151: CoachmarkPreview ===

// Module 16151 (CoachmarkPreview)
import ThemesDefault from "Themes" /* 712 */;
import create from "create" /* 1938 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11538 */;
import metadataDefault from "metadata" /* 11542 */;
import metadataDefault2 from "metadata" /* 11543 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

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
createCacheKey = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_30 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { maxWidth: 100 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default function CustomTypingIndicatorProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  dependencyMap = undefined;
  let stringResult1;
  let callback;
  let intl = visible(1236).intl;
  const stringResult = intl.string(markAsDismissed(3407).VVBcIQ);
  dependencyMap = stringResult;
  const intl2 = visible(1236).intl;
  stringResult1 = intl2.string(markAsDismissed(3407).lSBp2M);
  const items = [markAsDismissed];
  callback = stringResult1.useCallback(() => {
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, callback, markAsDismissed];
  const memo = stringResult1.useMemo(() => {
    let obj = {
      title: _undefined,
      description: stringResult1,
      visible,
      position: "bottom",
      onDismiss: callback,
      renderImgComponent() {
        return callback(closure_9, {});
      },
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null
    };
    const intl = visible(_undefined[7]).intl;
    obj[6] = intl.string(markAsDismissed(_undefined[8])["6NP6ic"]);
    obj[8] = function onButtonPress() {
      let obj = closure_1_0(closure_1_2[9]);
      obj = { screen: closure_1_5.TYPING_INDICATOR, params: { isDeepLink: true } };
      obj.openUserSettings(obj, () => {
        callback(closure_1_6.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const coachmark = visible(8800).useCoachmark(visible.targetRef, memo);
  return null;
};