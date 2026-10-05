// discord_app/design/components/Stack/native/Stack.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((gap, arg1, alignItems, justifyContent) => {
  let str;
  const stack = { width: "100%", gap, alignItems, justifyContent, flexDirection: str };
  str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  return { stack };
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let align;
      let children;
      let direction;
      let justify;
      let onLayout;
      let spacing;
      let style;
      const obj = react2;
      const cResult = obj.c(7);
      ({ spacing, direction, align, justify, children, style, onLayout } = arg0);
      let num = 8;
      if (undefined !== spacing) {
        num = spacing;
      }
      let str = "vertical";
      if (undefined !== direction) {
        str = direction;
      }
      let str2 = "stretch";
      if (undefined !== align) {
        str2 = align;
      }
      let str3 = "flex-start";
      if (undefined !== justify) {
        str3 = justify;
      }
      const tmp2Result = closure_4(num, str, str2, str3);
      if (cResult[0] === style) {
        let tmp4;
        if (cResult[1] === tmp2Result.stack) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === onLayout) {
            let tmp5;
            if (cResult[5] === tmp4) {
              tmp5 = cResult[6];
            }
            return tmp5;
          }
        }
        const tmp8 = (
          <View style={tmp4} onLayout={onLayout}>
            {children}
          </View>
        );
        cResult[3] = children;
        cResult[4] = onLayout;
        cResult[5] = tmp4;
        cResult[6] = tmp8;
        tmp5 = tmp8;
      }
      const items = [tmp2Result.stack, style];
      cResult[0] = style;
      cResult[1] = tmp2Result.stack;
      cResult[2] = items;
      tmp4 = items;
    }
  : (spacing) => {
      let children;
      let onLayout;
      let style;
      spacing = spacing.spacing;
      let num = 8;
      if (undefined !== spacing) {
        num = spacing;
      }
      const direction = spacing.direction;
      let str = "vertical";
      if (undefined !== direction) {
        str = direction;
      }
      const align = spacing.align;
      let str2 = "stretch";
      if (undefined !== align) {
        str2 = align;
      }
      const justify = spacing.justify;
      let str3 = "flex-start";
      if (undefined !== justify) {
        str3 = justify;
      }
      ({ children, style, onLayout } = spacing);
      const items = [closure_4(num, str, str2, str3).stack, style];
      return (
        <View style={items} onLayout={onLayout}>
          {children}
        </View>
      );
    };
const result = size.fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

export const Stack = tmp3;
