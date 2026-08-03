import "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: createCacheKey().toastText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj = {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj[2] = intl.format(require(1236) /* getSystemLocale */.t.C2tQIV, obj);
  return jsx(require(4251) /* Text */.Text, {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
createCacheKey = { toastText: null };
createCacheKey = { marginRight: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  const _require = emoji;
  let obj = _require(4071);
  if (!obj.UNSAFE_isDismissibleContentDismissed(_require(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(3928).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(7874);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(7874);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, emoji);
    }
    if (areEmojisEqualResult) {
      obj = { key: "DOUBLE_TAP_TO_REACT_REMINDER", icon: null, content: null, toastDurationMs: 4000 };
      obj[1] = function icon() {
        return outer1_4(emoji(outer1_2[12]).ToastEmoji, { emoji });
      };
      obj[2] = function content() {
        return outer1_4(outer1_6, { emoji: closure_0 });
      };
      importDefault(3956).open(obj);
      const obj4 = importDefault(3956);
      obj = { dismissAction: null, forceTrack: true };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result1 = tmp(4071).UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4071);
    }
  }
};