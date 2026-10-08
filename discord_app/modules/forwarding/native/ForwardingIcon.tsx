// discord_app/modules/forwarding/native/ForwardingIcon.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import ArrowAngleRightUpIcon from "../../../design/components/Icon/native/redesign/generated/ArrowAngleRightUpIcon.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardingIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForwardingIcon(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        const tmp9 = jsx(ArrowAngleRightUpIcon.ArrowAngleRightUpIcon, {});
        cResult[0] = arg0;
        cResult[1] = tmp9;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function ForwardingIcon(arg0) {
      const merged = Object.assign(arg0);
      return jsx(ArrowAngleRightUpIcon.ArrowAngleRightUpIcon, {});
    };
