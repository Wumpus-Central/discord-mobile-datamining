// === Module 7118: LinkButton ===

// Module 7118 (LinkButton)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({ defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, disabledContainerStyle: { opacity: 0.5 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkButton(arg0) {
  const cResult = c.c(16);
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
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp4.disabledContainerStyle;
  }
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.defaultContainerStyle) {
      if (cResult[2] === disabledContainerStyle) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { top: 8, right: 8, bottom: 8 };
        cResult[4] = rect;
        let tmp7 = rect;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] === text) {
        if (cResult[6] === str2) {
          if (cResult[7] === textStyle) {
            if (cResult[8] === str) {
              let tmp8 = cResult[9];
            }
            if (cResult[10] === disabled) {
              if (cResult[11] === iconRight) {
                if (cResult[12] === onPress) {
                  if (cResult[13] === tmp5) {
                    if (cResult[14] === tmp8) {
                      let tmp11 = cResult[15];
                    }
                    return tmp11;
                  }
                }
              }
            }
            const obj2 = { style: tmp5, hitSlop: tmp7, accessibilityRole: "button", activeOpacity: 0.2, disabled, onPress, children: null };
            const items = [tmp8, iconRight];
            obj2.children = items;
            const tmp13 = React3(Pressables.PressableOpacity, obj2);
            cResult[10] = disabled;
            cResult[11] = iconRight;
            cResult[12] = onPress;
            cResult[13] = tmp5;
            cResult[14] = tmp8;
            cResult[15] = tmp13;
            tmp11 = tmp13;
          }
        }
      }
      const obj3 = { style: textStyle, variant: str, color: str2, children: text };
      const tmp10 = React2(Text_Text.Text, obj3);
      cResult[5] = text;
      cResult[6] = str2;
      cResult[7] = textStyle;
      cResult[8] = str;
      cResult[9] = tmp10;
      tmp8 = tmp10;
    }
  }
  const items1 = [tmp4.defaultContainerStyle, disabledContainerStyle, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.defaultContainerStyle;
  cResult[2] = disabledContainerStyle;
  cResult[3] = items1;
  tmp5 = items1;
}) : (function LinkButton(textColor) {
  ({ disabled, variant } = textColor);
  ({ onPress, text, containerStyle, textStyle } = textColor);
  if (variant === undefined) {
    variant = "text-xs/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-link";
  }
  const tmp = closure_4();
  const items = [tmp.defaultContainerStyle, , ];
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  const obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", activeOpacity: 0.2, disabled, onPress, children: null };
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  const items1 = [React2(Text_Text.Text, { style: textStyle, variant, color: str, children: text }), textColor.iconRight];
  obj.children = items1;
  return React3(Pressables.PressableOpacity, obj);
});