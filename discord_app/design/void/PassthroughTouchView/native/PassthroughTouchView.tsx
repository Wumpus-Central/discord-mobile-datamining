// discord_app/design/void/PassthroughTouchView/native/PassthroughTouchView.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import PassthroughTouchNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/PassthroughTouchNativeComponent.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onTouchDown;

let closure_3 = ["onTouchDown"];
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTouchDown) => {
      let tmp3;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== onTouchDown) {
        onTouchDown = onTouchDown.onTouchDown;
        const tmp7 = _objectWithoutProperties(onTouchDown, closure_3);
        cResult[0] = onTouchDown;
        cResult[1] = onTouchDown;
        cResult[2] = tmp7;
        tmp4 = tmp7;
        tmp3 = onTouchDown;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] === tmp3) {
        let tmp8;
        if (cResult[4] === tmp4) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      PassthroughTouchNativeComponentDefault;
      const merged = Object.assign(tmp4);
      const tmp11 = <tmp9 onTouchDown={tmp3} pointerEvents="box-none" />;
      cResult[3] = tmp3;
      cResult[4] = tmp4;
      cResult[5] = tmp11;
      tmp8 = tmp11;
    }
  : (onTouchDown) => {
      onTouchDown = onTouchDown.onTouchDown;
      const merged = Object.assign(onTouchDown, Object.assign({ onTouchDown: 0 }));
      PassthroughTouchNativeComponentDefault;
      const merged1 = Object.assign(merged);
      return <tmp2 onTouchDown={onTouchDown} pointerEvents="box-none" />;
    };
const result = size.fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default tmp3;
