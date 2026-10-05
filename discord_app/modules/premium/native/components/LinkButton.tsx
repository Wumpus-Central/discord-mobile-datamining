// discord_app/modules/premium/native/components/LinkButton.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = createStyles.createStyles({
  defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
  disabledContainerStyle: { opacity: 0.5 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerStyle;
      let disabled;
      let iconRight;
      let items;
      let onPress;
      let text;
      let textColor;
      let textStyle;
      let variant;
      const obj = react2;
      const cResult = obj.c(16);
      ({ onPress, text, containerStyle, disabled, textStyle, variant, textColor, iconRight } = arg0);
      let str = "text-xs/medium";
      if (undefined !== variant) {
        str = variant;
      }
      let str2 = "text-link";
      if (undefined !== textColor) {
        str2 = textColor;
      }
      const tmp4 = closure_4();
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp4.defaultContainerStyle) {
          let tmp6;
          let tmp8;
          if (cResult[2] === (disabled && tmp4.disabledContainerStyle)) {
            tmp6 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const rect = { top: 8, right: 8, bottom: 8 };
            cResult[4] = rect;
            tmp8 = rect;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === text) {
            if (cResult[6] === str2) {
              if (cResult[7] === textStyle) {
                let tmp9;
                if (cResult[8] === str) {
                  tmp9 = cResult[9];
                }
                if (cResult[10] === disabled) {
                  if (cResult[11] === iconRight) {
                    if (cResult[12] === onPress) {
                      if (cResult[13] === tmp6) {
                        let tmp12;
                        if (cResult[14] === tmp9) {
                          tmp12 = cResult[15];
                        }
                        return tmp12;
                      }
                    }
                  }
                }
                const obj2 = {
                  style: tmp6,
                  hitSlop: tmp8,
                  accessibilityRole: "button",
                  activeOpacity: 0.2,
                  disabled,
                  onPress,
                  children: items,
                };
                items = [tmp9, iconRight];
                const tmp14 = _false(Pressables.PressableOpacity, obj2);
                cResult[10] = disabled;
                cResult[11] = iconRight;
                cResult[12] = onPress;
                cResult[13] = tmp6;
                cResult[14] = tmp9;
                cResult[15] = tmp14;
                tmp12 = tmp14;
              }
            }
          }
          const obj3 = { style: textStyle, variant: str, color: str2, children: text };
          const tmp11 = React2(Text_Text.Text, obj3);
          cResult[5] = text;
          cResult[6] = str2;
          cResult[7] = textStyle;
          cResult[8] = str;
          cResult[9] = tmp11;
          tmp9 = tmp11;
        }
      }
      const items1 = [tmp4.defaultContainerStyle, disabled && tmp4.disabledContainerStyle, containerStyle];
      cResult[0] = containerStyle;
      cResult[1] = tmp4.defaultContainerStyle;
      cResult[2] = disabled && tmp4.disabledContainerStyle;
      cResult[3] = items1;
      tmp6 = items1;
    }
  : (textColor) => {
      let containerStyle;
      let disabled;
      let items1;
      let onPress;
      let text;
      let textStyle;
      let variant;
      ({ disabled, variant } = textColor);
      ({ onPress, text, containerStyle, textStyle } = textColor);
      if (variant === undefined) {
        variant = "text-xs/medium";
      }
      let str = textColor.textColor;
      if (str === undefined) {
        str = "text-link";
      }
      const iconRight = textColor.iconRight;
      const tmp = closure_4();
      const items = [tmp.defaultContainerStyle, ,];
      let disabledContainerStyle = disabled;
      const PressableOpacity = Pressables.PressableOpacity;
      if (disabled) {
        disabledContainerStyle = tmp.disabledContainerStyle;
      }
      const obj = {
        style: items,
        hitSlop: { top: 8, right: 8, bottom: 8 },
        accessibilityRole: "button",
        activeOpacity: 0.2,
        disabled,
        onPress,
        children: items1,
      };
      items[1] = disabledContainerStyle;
      items[2] = containerStyle;
      items1 = [React2(Text_Text.Text, { style: textStyle, variant, color: str, children: text }), iconRight];
      return _false(PressableOpacity, obj);
    };
const result = size.fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = tmp4;
