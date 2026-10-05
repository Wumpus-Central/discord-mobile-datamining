// discord_app/modules/expression_picker/native/categories/ExpressionPickerCategories.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Portal2 from "../../../../../_runtime/04752_Portal.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, containerRefresh: obj3 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingHorizontal: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let portalHostName;
      let style;
      const obj = react2;
      const cResult = obj.c(10);
      ({ children, portalHostName, style } = arg0);
      const tmp4 = closure_4();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5;
          if (cResult[2] === tmp4.containerRefresh) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === children) {
            let tmp6;
            if (cResult[5] === tmp5) {
              tmp6 = cResult[6];
            }
            if (cResult[7] === portalHostName) {
              let tmp10;
              if (cResult[8] === tmp6) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
            const tmp12 = jsx(Portal2.Portal, { hostName: portalHostName, children: tmp6 });
            cResult[7] = portalHostName;
            cResult[8] = tmp6;
            cResult[9] = tmp12;
            tmp10 = tmp12;
          }
          const tmp9 = <View style={tmp5}>{children}</View>;
          cResult[4] = children;
          cResult[5] = tmp5;
          cResult[6] = tmp9;
          tmp6 = tmp9;
        }
      }
      const items = [, ,];
      ({ container: arr[0], containerRefresh: arr[1] } = tmp4);
      items[2] = style;
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = tmp4.containerRefresh;
      cResult[3] = items;
      tmp5 = items;
    }
  : (arg0) => {
      let children;
      let portalHostName;
      let style;
      ({ children, portalHostName, style } = arg0);
      const items = [, ,];
      ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
      items[2] = style;
      closure_4();
      const Portal = Portal2.Portal;
      return <Portal hostName={portalHostName}>{null}</Portal>;
    };
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default tmp4;
