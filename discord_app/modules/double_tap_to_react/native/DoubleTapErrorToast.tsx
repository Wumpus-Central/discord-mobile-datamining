// === Module 7642: DoubleTapErrorToast ===

// Module 7642 (DoubleTapErrorToast)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import Text_Text from "Text/Text" /* 4892 */;
import XSmallBoldIcon2 from "XSmallBoldIcon" /* 7643 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
    const tmp8 = <XSmallBoldIcon color={nativeDefault.colors.WHITE} size="xs" />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.icon) {
    const tmp12 = <View style={tmp4.icon} aria-hidden>{first}</View>;
    cResult[1] = tmp4.icon;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  ({ color: nativeDefault.colors.WHITE, size: "xs" });
  const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
  return <View style={closure_6().icon} aria-hidden>{null}</View>;
});
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(emojiName) {
  emojiName = emojiName.emojiName;
  const reason = emojiName.reason;
  const tmp = emojiName;
  let obj = emojiName(4580);
  const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("showDoubleTapErrorToast");
  const obj2 = reason(4574);
  if (designSystemsNotificationComponents) {
    let stringResult;
    const openMana = obj2.openMana;
    if (null == emojiName) {
      let intl3 = tmp(1126).intl;
      stringResult = intl3.string(tmp(1126).t.CL5mWi);
    } else if (reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
      let intl2 = tmp(1126).intl;
      let obj3 = { emojiName };
      stringResult = intl2.formatToPlainString(tmp(1126).t.Dz4vkv, obj3);
    } else {
      let intl = tmp(1126).intl;
      const obj4 = { emojiName };
      stringResult = intl.formatToPlainString(tmp(1126).t.WZGLFq, obj4);
    }
    const obj5 = { text: stringResult, variant: "critical" };
    openMana("EMOJI_DOUBLE_TAP_ERROR", obj5);
  } else {
    const obj6 = {
      key: "EMOJI_DOUBLE_TAP_ERROR",
      icon() {
          return <closure_1_7 />;
        },
      content() {
          let formatResult;
          if (reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
            let tmp3Result;
            if (null != emojiName) {
              const Text2 = Text_Text.Text;
              const intl3 = intl4.intl;
              const obj3 = { emojiName: tmp };
              tmp3Result = <Text2 variant="text-sm/normal">{intl3.format(intl4.t.Dz4vkv, obj3)}</Text2>;
            }
            return tmp3Result;
          }
          const Text = Text_Text.Text;
          if (null != emojiName) {
            const intl2 = intl4.intl;
            const obj = { emojiName: tmp6 };
            formatResult = intl2.format(intl4.t.WZGLFq, obj);
          } else {
            const intl = intl4.intl;
            formatResult = intl.string(intl4.t.CL5mWi);
          }
          tmp3Result = <Text variant="text-sm/normal">{formatResult}</Text>;
        },
      toastDurationMs: 3000
    };
    obj2.open(obj6);
  }
};