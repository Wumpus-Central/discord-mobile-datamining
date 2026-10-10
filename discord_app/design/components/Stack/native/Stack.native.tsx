// discord_app/design/components/Stack/native/Stack.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles((gap, arg1, alignItems, justifyContent) => {
  const stack = { width: "100%", gap, alignItems, justifyContent, flexDirection: null };
  let str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  stack.flexDirection = str;
  return { stack };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

export const Stack = ReactCompilerGating.isReactCompilerEnabled()
  ? function Stack(arg0) {
      const cResult = c.c(7);
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
        if (cResult[1] === tmp2Result.stack) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === onLayout) {
            if (cResult[5] === tmp4) {
              let tmp5 = cResult[6];
            }
            return tmp5;
          }
        }
        const obj2 = { style: tmp4, onLayout, children };
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
  : function Stack(spacing) {
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
      const obj = { style: null, onLayout: null, children: null };
      const items = [closure_4(num, str, str2, str3).stack, style];
      obj.style = items;
      obj.onLayout = onLayout;
      obj.children = children;
      return (
        <View style={null} onLayout={null}>
          {null}
        </View>
      );
    };
