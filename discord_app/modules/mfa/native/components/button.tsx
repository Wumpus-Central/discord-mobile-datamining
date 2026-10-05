// discord_app/modules/mfa/native/components/button.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const Button = components_Button_Button.Button;
        const merged = Object.assign(arg0);
        const tmp9 = <Button size="lg" />;
        cResult[0] = arg0;
        cResult[1] = tmp9;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (arg0) => {
      const Button = components_Button_Button.Button;
      const merged = Object.assign(arg0);
      return <Button size="lg" />;
    };
const result = size.fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default tmp3;
