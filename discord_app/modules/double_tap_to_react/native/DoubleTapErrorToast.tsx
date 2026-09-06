// === Module 7972: DoubleTapErrorToast ===

// Module 7972 (DoubleTapErrorToast)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import Text_Text from "Text/Text" /* 4556 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 7973 */;
import noop from "module_19" /* 19 */;

require = fn;
function DoubleTapErrorToastIcon() {
  let obj = { style: closure_6().icon, "aria-hidden": true, children: null };
  obj = { color: nativeDefault.colors.WHITE, size: "xs" };
  obj.children = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
  return <View color={nativeDefault.colors.WHITE} size="xs" />;
}
const View = fn(17).View;
const EmojiDisabledReasons = fn(1374).EmojiDisabledReasons;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { icon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
createStyles.icon = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return <DoubleTapErrorToastIcon />;
    },
    content() {
      if (importDefault === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
        if (null != closure_1_0) {
          let obj = { variant: "text-sm/normal", children: null };
          const intl3 = util.intl;
          obj = { emojiName: tmp };
          obj.children = intl3.format(util.t.Dz4vkv, obj);
          let tmp3Result = jsx(Text_Text.Text, { emojiName: tmp });
        }
        return tmp3Result;
      }
      if (null != closure_1_0) {
        const intl2 = tmp4(1114).intl;
        obj = { emojiName: tmp6 };
        let formatResult = intl2.format(tmp4(1114).t.WZGLFq, obj);
      } else {
        const intl = tmp4(1114).intl;
        formatResult = intl.string(tmp4(1114).t.CL5mWi);
      }
      tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};