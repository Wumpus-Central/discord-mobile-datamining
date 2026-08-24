// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx
import create from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function CoachmarkPreview() {
  const tmp = callback();
  let obj = { style: tmp.coachmarkImageContainer, children: null };
  obj = { name: "Locke", suggestion: create.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText };
  obj[1] = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: create.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText });
  return <View name="Locke" suggestion={create.TypingSuggestion.YAPPING} emojiSize={16} spacing={8} emojiGap={4} textVariant="text-xs/medium" textColor="text-subtle" textStyle={tmp.typingText} />;
}
let closure_8 = createCacheKey.createStyles({ coachmarkImageContainer: { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingVertical: 30 }, typingText: { maxWidth: 100 } });
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default function CustomTypingIndicatorProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  dependencyMap = undefined;
  let stringResult1;
  let callback;
  let intl = visible(1236).intl;
  const stringResult = intl.string(markAsDismissed(3406).VVBcIQ);
  dependencyMap = stringResult;
  const intl2 = visible(1236).intl;
  stringResult1 = intl2.string(markAsDismissed(3406).lSBp2M);
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
    const intl = visible(_undefined[6]).intl;
    obj[6] = intl.string(markAsDismissed(_undefined[7])["6NP6ic"]);
    obj[8] = function onButtonPress() {
      let obj = closure_1_0(closure_1_2[8]);
      obj = { screen: closure_1_5.TYPING_INDICATOR };
      obj.openUserSettings(obj, () => {
        callback(closure_1_6.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const coachmark = visible(9351).useCoachmark(visible.targetRef, memo);
  return null;
};