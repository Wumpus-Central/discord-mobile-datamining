// discord_app/modules/forwarding/native/ForwardingIcon.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../_runtime/00576_react.js";
import ArrowAngleRightUpIcon2 from "../../../design/components/Icon/native/redesign/generated/ArrowAngleRightUpIcon.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const ArrowAngleRightUpIcon = ArrowAngleRightUpIcon2.ArrowAngleRightUpIcon;
        const merged = Object.assign(arg0);
        const tmp9 = <ArrowAngleRightUpIcon />;
        cResult[0] = arg0;
        cResult[1] = tmp9;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      const ArrowAngleRightUpIcon = ArrowAngleRightUpIcon2.ArrowAngleRightUpIcon;
      const merged = Object.assign(arg0);
      return <ArrowAngleRightUpIcon />;
    };
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardingIcon.tsx");

export default tmp2;
