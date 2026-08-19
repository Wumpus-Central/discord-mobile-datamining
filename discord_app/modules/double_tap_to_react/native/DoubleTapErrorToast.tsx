// === Module 8195: DoubleTapErrorToastIcon ===

// Module 8195 (DoubleTapErrorToastIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import Text from "Text" /* 4734 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 8196 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EmojiDisabledReasons } from "set" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function DoubleTapErrorToastIcon() {
  { style: callback().icon, "aria-hidden": true, children: null };
  const obj = { color: ThemesDefault.colors.WHITE, size: "xs" };
  obj[2] = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: ThemesDefault.colors.WHITE, size: "xs" });
  return <View color={ThemesDefault.colors.WHITE} size="xs" />;
}
noopAll;
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.round, padding: ThemesDefault.space.PX_4, marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return callback(closure_7, {});
    },
    content() {
      if (closure_1 === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
        if (null != closure_0) {
          const intl3 = getSystemLocale.intl;
          let obj = { emojiName: null };
          obj[0] = tmp;
          obj[1] = intl3.format(getSystemLocale.t.Dz4vkv, obj);
          let tmp3Result = jsx(Text.Text, { emojiName: null });
        }
        return tmp3Result;
      }
      if (null != closure_0) {
        const intl2 = getSystemLocale.intl;
        obj = { emojiName: null };
        obj[0] = tmp6;
        let formatResult = intl2.format(getSystemLocale.t.WZGLFq, obj);
      } else {
        const intl = getSystemLocale.intl;
        formatResult = intl.string(getSystemLocale.t.CL5mWi);
      }
      tmp3Result = jsx(Text.Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};