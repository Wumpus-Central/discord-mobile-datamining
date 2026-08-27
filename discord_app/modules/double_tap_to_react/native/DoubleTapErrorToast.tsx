// === Module 7813: DoubleTapErrorToastIcon ===

// Module 7813 (DoubleTapErrorToastIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4162 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 7814 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EmojiDisabledReasons } from "set" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function DoubleTapErrorToastIcon() {
  let obj = { style: callback().icon, "aria-hidden": true, children: null };
  obj = { color: ThemesDefault.colors.WHITE, size: "xs" };
  obj[2] = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: ThemesDefault.colors.WHITE, size: "xs" });
  return <View color={ThemesDefault.colors.WHITE} size="xs" />;
}
noopAll;
createCacheKey = { icon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.round, padding: ThemesDefault.space.PX_4, marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = dispatcherDefault;
  obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return callback(closure_7, {});
    },
    content() {
      if (closure_1 === closure_1_4.DISALLOW_EXTERNAL) {
        if (null != closure_0) {
          let obj = { variant: "text-sm/normal", children: null };
          const intl3 = closure_1_0(closure_1_2[9]).intl;
          obj = { emojiName: null };
          obj[0] = tmp;
          obj[1] = intl3.format(closure_1_0(closure_1_2[9]).t.Dz4vkv, obj);
          let tmp3Result = closure_1_5(closure_1_0(closure_1_2[8]).Text, obj);
        }
        return tmp3Result;
      }
      if (null != closure_0) {
        const intl2 = tmp4(tmp5[9]).intl;
        obj = { emojiName: null };
        obj[0] = tmp6;
        let formatResult = intl2.format(tmp4(tmp5[9]).t.WZGLFq, obj);
      } else {
        const intl = tmp4(tmp5[9]).intl;
        formatResult = intl.string(tmp4(tmp5[9]).t.CL5mWi);
      }
      tmp3Result = closure_1_5(closure_1_0(closure_1_2[8]).Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};