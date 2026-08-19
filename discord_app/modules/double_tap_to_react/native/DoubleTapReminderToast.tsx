// === Module 9310: DoubleTapReminderContent ===

// Module 9310 (DoubleTapReminderContent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import Text from "Text" /* 4734 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function DoubleTapReminderContent(emoji) {
  { variant: "text-sm/normal", style: callback().toastText, children: null };
  const intl = getSystemLocale.intl;
  const obj = {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj[2] = intl.format(getSystemLocale.t.C2tQIV, obj);
  return jsx(Text.Text, {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
noopAll;
const createCacheKey = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(closure_0) {
  const _require = closure_0;
  let obj = _require(4196);
  if (!obj.UNSAFE_isDismissibleContentDismissed(_require(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(4066).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(8192);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(8192);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, closure_0);
    }
    if (areEmojisEqualResult) {
      obj = { key: "DOUBLE_TAP_TO_REACT_REMINDER", icon: null, content: null, toastDurationMs: 4000 };
      obj[1] = function icon() {
        return jsx(callback(dependencyMap[12]).ToastEmoji, { emoji: callback });
      };
      obj[2] = function content() {
        return <DoubleTapReminderContent emoji={closure_0} />;
      };
      dispatcherDefault.open(obj);
      obj = { dismissAction: null, forceTrack: true };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result1 = tmp(4196).UNSAFE_markDismissibleContentAsDismissed(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4196);
    }
  }
};