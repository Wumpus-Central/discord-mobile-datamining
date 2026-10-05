// discord_app/design/void/Form/native/FormText.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import LegacyTokens from "../../../migrations/native/LegacyTokens.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles((arg0) => {
  let num2;
  let obj3;
  let num = 16;
  const obj = { primary: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, text: obj3 };
  ({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
  if ("small" === arg0) {
    num = 12;
  }
  obj3 = { fontSize: num, lineHeight: num2 };
  num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  return obj;
});
let obj = {
  BRAND: obj2,
  RED: obj3,
  GREEN: { color: nativeDefault.unsafe_rawColors.GREEN_360 },
  YELLOW: { color: nativeDefault.unsafe_rawColors.YELLOW_300 },
  LINK: { color: nativeDefault.unsafe_rawColors.BLUE_345 },
  WHITE: { color: nativeDefault.unsafe_rawColors.WHITE },
};
obj2 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
({ color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ color: nativeDefault.unsafe_rawColors.YELLOW_300 });
({ color: nativeDefault.unsafe_rawColors.BLUE_345 });
const forwardRef = react.forwardRef;
({ color: nativeDefault.unsafe_rawColors.WHITE });
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let children;
        let color;
        let style;
        const obj = react2;
        const cResult = obj.c(8);
        ({ children, size, color, style } = arg0);
        let str = "medium";
        if (undefined !== size) {
          str = size;
        }
        const tmp4Result = closure_3(str);
        if (color == null) {
          color = tmp4Result.primary;
        }
        if (cResult[0] === style) {
          if (cResult[1] === tmp4Result.text) {
            let tmp6;
            if (cResult[2] === color) {
              tmp6 = cResult[3];
            }
            if (cResult[4] === children) {
              if (cResult[5] === ref) {
                let tmp8;
                if (cResult[6] === tmp6) {
                  tmp8 = cResult[7];
                }
                return tmp8;
              }
            }
            const tmp10 = jsx(native.LegacyText, { ref, style: tmp6, children });
            cResult[4] = children;
            cResult[5] = ref;
            cResult[6] = tmp6;
            cResult[7] = tmp10;
            tmp8 = tmp10;
          }
        }
        const items = [tmp4Result.text, color, style];
        cResult[0] = style;
        cResult[1] = tmp4Result.text;
        cResult[2] = color;
        cResult[3] = items;
        tmp6 = items;
      }
    : (size, ref) => {
        let str = size.size;
        const children = size.children;
        if (str === undefined) {
          str = "medium";
        }
        let primary = size.color;
        const style = size.style;
        const tmp = closure_3(str);
        const items = [tmp.text, ,];
        const LegacyText = native.LegacyText;
        if (primary == null) {
          primary = tmp.primary;
        }
        items[1] = primary;
        items[2] = style;
        return (
          <LegacyText ref={ref} style={items}>
            {children}
          </LegacyText>
        );
      },
);
const result = size.fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default forwardRefResult;
export const FormTextColors = obj;
