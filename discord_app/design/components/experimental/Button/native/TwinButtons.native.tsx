// discord_app/design/components/experimental/Button/native/TwinButtons.native.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import components_Button_Button from "../../../Button/native/Button.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let space;
  let str = "row";
  if (arg0) {
    str = "column";
  }
  const container = { flexDirection: str, gap: arg0 ? space.PX_8 : space.PX_12 };
  space = nativeDefault.space;
  return { container, button: { flex: 1 } };
});
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let button;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(8);
      children = children.children;
      const obj2 = require("useFontScale");
      const tmp2 = closure_6(obj2.useFontScale() > 1.2);
      _require = tmp2;
      if (cResult[0] === children) {
        let tmp4;
        if (cResult[1] === tmp2.button) {
          tmp4 = cResult[2];
        }
        if (cResult[5] === tmp2.container) {
          let tmp7;
          if (cResult[6] === tmp4) {
            tmp7 = cResult[7];
          }
          return tmp7;
        }
        const tmp10 = <View style={tmp3}>{tmp4}</View>;
        cResult[5] = tmp2.container;
        cResult[6] = tmp4;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      if (cResult[3] !== tmp2.button) {
        const fn = function s(type) {
          let tmp = null;
          if (react.isValidElement(type)) {
            tmp = null;
            if (type.type === components_Button_Button.Button) {
              tmp = <View style={button.button}>{type}</View>;
            }
          }
          return tmp;
        };
        cResult[3] = tmp2.button;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const Children = react.Children;
      const mapped = Children.map(children, tmp5);
      cResult[0] = children;
      cResult[1] = tmp2.button;
      cResult[2] = mapped;
      tmp4 = mapped;
    }
  : (children) => {
      let button;
      _require = undefined;
      children = children.children;
      const obj = require("useFontScale");
      let tmp = closure_6(obj.useFontScale() > 1.2);
      _require = tmp;
      const Children = react.Children;
      return (
        <View style={tmp.container}>
          {Children.map(children, (type) => {
            let tmp = null;
            if (react.isValidElement(type)) {
              tmp = null;
              if (type.type === components_Button_Button.Button) {
                tmp = <View style={button.button}>{type}</View>;
              }
            }
            return tmp;
          })}
        </View>
      );
    };
const result = size.fileFinishedImporting("design/components/experimental/Button/native/TwinButtons.native.tsx");

export const TwinButtons = tmp2;
