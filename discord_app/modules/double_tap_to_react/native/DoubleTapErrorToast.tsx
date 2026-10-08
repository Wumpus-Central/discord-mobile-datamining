// discord_app/modules/double_tap_to_react/native/DoubleTapErrorToast.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import XSmallBoldIcon from "../../../design/components/Icon/native/redesign/generated/XSmallBoldIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const EmojiDisabledReasons = fn(1392).EmojiDisabledReasons;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = {
  icon: {
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
    borderRadius: nativeDefault.radii.round,
    padding: nativeDefault.space.PX_4,
    marginLeft: nativeDefault.space.PX_4,
  },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DoubleTapErrorToastIcon() {
      const cResult = c.c(3);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
        const tmp8 = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.icon) {
        const obj3 = { style: tmp4.icon, "aria-hidden": true, children: first };
        const tmp12 = (
          <View style={tmp4.icon} aria-hidden>
            {first}
          </View>
        );
        cResult[1] = tmp4.icon;
        cResult[2] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : function DoubleTapErrorToastIcon() {
      const obj = {
        style: closure_6().icon,
        "aria-hidden": true,
        children: jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" }),
      };
      return (
        <View style={closure_6().icon} aria-hidden>
          {jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" })}
        </View>
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(emojiName) {
  emojiName = emojiName.emojiName;
  const reason = emojiName.reason;
  let obj = dependencyMap;
  const designSystemsNotificationComponents =
    emojiName(4772).getDesignSystemsNotificationComponents("showDoubleTapErrorToast");
  let obj3 = reason(4766);
  if (designSystemsNotificationComponents) {
    if (null == emojiName) {
      let intl3 = tmp(1126).intl;
      let stringResult = intl3.string(tmp(1126).t.CL5mWi);
    } else if (reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
      let intl2 = tmp(1126).intl;
      const obj4 = { emojiName };
      stringResult = intl2.formatToPlainString(tmp(1126).t.Dz4vkv, obj4);
    } else {
      let intl = tmp(1126).intl;
      const obj5 = { emojiName };
      stringResult = intl.formatToPlainString(tmp(1126).t.WZGLFq, obj5);
    }
    obj = { text: stringResult, variant: "critical" };
    obj3.openMana("EMOJI_DOUBLE_TAP_ERROR", obj);
  } else {
    const obj6 = {
      key: "EMOJI_DOUBLE_TAP_ERROR",
      icon() {
        return <closure_1_7 />;
      },
      content() {
        if (reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
          if (null != emojiName) {
            const obj2 = { variant: "text-sm/normal", children: null };
            const intl3 = util.intl;
            const obj3 = { emojiName: tmp };
            obj2.children = intl3.format(util.t.Dz4vkv, obj3);
            let tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: null });
          }
          return tmp3Result;
        }
        if (null != emojiName) {
          const intl2 = util.intl;
          const obj = { emojiName: tmp6 };
          let formatResult = intl2.format(util.t.WZGLFq, obj);
        } else {
          const intl = util.intl;
          formatResult = intl.string(util.t.CL5mWi);
        }
        tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: formatResult });
      },
      toastDurationMs: 3000,
    };
    obj3.open(obj6);
  }
  let obj2 = emojiName(4772);
};
