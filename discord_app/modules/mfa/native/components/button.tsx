// discord_app/modules/mfa/native/components/button.tsx
import c from "../../../../../_runtime/00576_c.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MFAButton(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = { size: "lg" };
        const merged = Object.assign(arg0);
        const tmp9 = jsx(components_Button_Button.Button, { size: "lg" });
        cResult[0] = arg0;
        cResult[1] = tmp9;
        let tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function MFAButton(arg0) {
      const merged = Object.assign(arg0);
      return jsx(components_Button_Button.Button, { size: "lg" });
    };
