// discord_app/modules/double_tap_to_react/native/DoubleTapErrorToast.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { EmojiDisabledReasons } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { XSmallBoldIcon } from "../../../design/components/Icon/native/redesign/generated/XSmallBoldIcon.tsx";
import { dispatcher } from "../../toast/native/ToastActionCreators.tsx";

const require = arg1;
function DoubleTapErrorToastIcon() {
  let obj = { style: createCacheKey().icon, "aria-hidden": true, children: null };
  obj = { color: null, size: "xs" };
  obj[0] = Themes.colors.WHITE;
  obj[2] = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: null, size: "xs" });
  return <View color={null} size="xs" />;
}
createCacheKey = { icon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: require("Themes").radii.round, padding: require("Themes").space.PX_4, marginLeft: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  let importDefault;
  let require;
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = dispatcher;
  obj = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return callback(closure_7, {});
    },
    content() {
      if (closure_1 === outer1_4.DISALLOW_EXTERNAL) {
        if (null != closure_0) {
          let obj = { variant: "text-sm/normal", children: null };
          const intl3 = outer1_0(outer1_2[9]).intl;
          obj = { emojiName: null };
          obj[0] = tmp;
          obj[1] = intl3.format(outer1_0(outer1_2[9]).t.Dz4vkv, obj);
          let tmp3Result = outer1_5(outer1_0(outer1_2[8]).Text, obj);
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
      tmp3Result = outer1_5(outer1_0(outer1_2[8]).Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj);
};