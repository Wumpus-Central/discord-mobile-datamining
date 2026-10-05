// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let obj2;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { toastText: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emoji) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      emoji = emoji.emoji;
      const tmp4 = closure_5();
      const toastText = tmp4.toastText;
      if (cResult[0] !== emoji.name) {
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(children) {
            return jsx(
              require("Text/Text").Text,
              { variant: "text-sm/bold", color: "text-feedback-info", children },
              "doubleTapReminder",
            );
          };
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const intl = intl2.intl;
        const obj2 = { protipHook: tmp7, emojiName: emoji.name };
        const formatResult = intl.format(intl2.t.C2tQIV, obj2);
        cResult[0] = emoji.name;
        cResult[1] = formatResult;
        tmp5 = formatResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[3] === tmp4.toastText) {
        let tmp9;
        if (cResult[4] === tmp5) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp10 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: toastText, children: tmp5 });
      cResult[3] = tmp4.toastText;
      cResult[4] = tmp5;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (emoji) => {
      emoji = emoji.emoji;
      closure_5();
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      const obj2 = {
        protipHook(children) {
          return jsx(
            require("Text/Text").Text,
            { variant: "text-sm/bold", color: "text-feedback-info", children },
            "doubleTapReminder",
          );
        },
        emojiName: emoji.name,
      };
      return (
        <Text variant="text-sm/normal" style={closure_5().toastText}>
          {intl.format(intl2.t.C2tQIV, obj2)}
        </Text>
      );
    };
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(name) {
  let emoji;
  let intl;
  let obj3;
  let tmpResult7;
  _require = name;
  const obj = require("DismissibleContentUnsafeUtils");
  if (
    !obj.UNSAFE_isDismissibleContentDismissed(
      require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
    )
  ) {
    const DoubleTapReactionEmoji = tmp(2028).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const tmpResult = require("DoubleTapToReactUtils");
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag && null != result;
    if (areEmojisEqualResult) {
      const tmpResult5 = require("DoubleTapToReactUtils");
      areEmojisEqualResult = tmpResult5.areEmojisEqual(result, name);
    }
    if (areEmojisEqualResult) {
      const tmpResult6 = require("DesignSystemsNotificationComponentsExperiment");
      const designSystemsNotificationComponents = tmpResult6.getDesignSystemsNotificationComponents(
        "maybeShowDoubleTapReminderToast",
      );
      const obj5 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana = obj5.openMana;
        const obj2 = {
          text: intl.formatToPlainString(require("intl").t.C2tQIV, obj3),
          icon: tmpResult7.getToastEmojiEntity(name),
        };
        intl = tmp(1126).intl;
        obj3 = {
          protipHook(arg0) {
            return arg0;
          },
          emojiName: name.name,
        };
        tmpResult7 = require("DoubleTapEmojiUpdatedToast");
        openMana("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      } else {
        const obj4 = {
          key: "DOUBLE_TAP_TO_REACT_REMINDER",
          icon() {
            return jsx(DoubleTapEmojiUpdatedToast.ToastEmoji, { emoji });
          },
          content() {
            return <closure_6 emoji={emoji} />;
          },
          toastDurationMs: 4000,
        };
        obj5.open(obj4);
      }
      const obj6 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const tmpResult8 = require("DismissibleContentUnsafeUtils");
      const result1 = tmpResult8.UNSAFE_markDismissibleContentAsDismissed(
        tmp(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
        obj6,
      );
    }
  }
};
