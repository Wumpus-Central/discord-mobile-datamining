// === Module 9878: DoubleTapReminderToast ===

// Module 9878 (DoubleTapReminderToast)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import Text_Text from "Text/Text" /* 4886 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9879 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { toastText: { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(6);
  let name = emoji.emoji;
  const tmp4 = closure_5();
  if (cResult[0] !== name.name) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(children) {
        return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const intl = util.intl;
    const obj2 = { protipHook: tmp8, emojiName: name.name };
    const formatResult = intl.format(util.t.C2tQIV, obj2);
    name = name.name;
    cResult[0] = name;
    cResult[1] = formatResult;
  } else {
    if (cResult[3] === tmp4.toastText) {
      if (cResult[4] === tmp6) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
    const obj3 = { variant: "text-sm/normal", style: tmp5, children: cResult[1] };
    const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp5, children: cResult[1] });
    cResult[3] = tmp4.toastText;
    cResult[4] = cResult[1];
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
}) : ((emoji) => {
  const obj = { variant: "text-sm/normal", style: closure_5().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.C2tQIV, {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_5().toastText, children: null });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(name) {
  _require = name;
  let DOUBLE_TAP_TO_REACT_REMINDER = _require;
  let result6 = dependencyMap;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = DOUBLE_TAP_TO_REACT_REMINDER(2028).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const result = DOUBLE_TAP_TO_REACT_REMINDER(7627);
    const result1 = result.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result1;
    }
    if (areEmojisEqualResult) {
      const result2 = DOUBLE_TAP_TO_REACT_REMINDER(7627);
      areEmojisEqualResult = result2.areEmojisEqual(result1, name);
    }
    if (areEmojisEqualResult) {
      const result3 = DOUBLE_TAP_TO_REACT_REMINDER(4574);
      const designSystemsNotificationComponents = result3.getDesignSystemsNotificationComponents("maybeShowDoubleTapReminderToast");
      const obj5 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const obj2 = { text: null, icon: null };
        const intl = DOUBLE_TAP_TO_REACT_REMINDER(1126).intl;
        const obj3 = {
          protipHook(arg0) {
                  return arg0;
                },
          emojiName: name.name
        };
        obj2.text = intl.formatToPlainString(DOUBLE_TAP_TO_REACT_REMINDER(1126).t.C2tQIV, obj3);
        const result4 = DOUBLE_TAP_TO_REACT_REMINDER(9879);
        obj2.icon = result4.getToastEmojiEntity(name);
        obj5.openMana("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      } else {
        const obj4 = {
          key: "DOUBLE_TAP_TO_REACT_REMINDER",
          icon() {
                  return jsx(DoubleTapEmojiUpdatedToast.ToastEmoji, { emoji });
                },
          content() {
                  return <closure_6 emoji={emoji} />;
                },
          toastDurationMs: 4000
        };
        obj5.open(obj4);
      }
      const result5 = DOUBLE_TAP_TO_REACT_REMINDER(4698);
      DOUBLE_TAP_TO_REACT_REMINDER = DOUBLE_TAP_TO_REACT_REMINDER(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER;
      const obj6 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      result6 = result5.UNSAFE_markDismissibleContentAsDismissed(DOUBLE_TAP_TO_REACT_REMINDER, obj6);
    }
  }
  obj = require("DismissibleContentUnsafeUtils");
};