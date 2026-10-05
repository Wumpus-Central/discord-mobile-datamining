// discord_app/modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import LegacyBaseButton from "../../../../_runtime/06140_LegacyBaseButton.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children;

let closure_2 = ["children"];
let closure_3 = ["children"];
const View = react_native.View;
const jsx = Fragment.jsx;
const style = { flex: 1 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp4;
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const tmp13 = (
          <View style={style} collapsable={false}>
            {tmp4}
          </View>
        );
        cResult[3] = tmp4;
        cResult[4] = tmp13;
        tmp9 = tmp13;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        let tmp14;
        if (cResult[6] === tmp9) {
          tmp14 = cResult[7];
        }
        return tmp14;
      }
      const GestureDetector = LegacyBaseButton.GestureDetector;
      const merged = Object.assign(tmp5);
      const tmp16 = <GestureDetector>{tmp9}</GestureDetector>;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp16;
      tmp14 = tmp16;
    }
  : (children) => {
      children = children.children;
      const tmp = _objectWithoutProperties(children, closure_3);
      const GestureDetector = LegacyBaseButton.GestureDetector;
      const merged = Object.assign(tmp);
      return (
        <GestureDetector>
          <View style={style} collapsable={false}>
            {children}
          </View>
        </GestureDetector>
      );
    };
const result = size.fileFinishedImporting("modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx");

export const NonCollapsableGestureDetector = tmp3;
