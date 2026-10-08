// discord_app/design/void/Form/native/FormCheckbox.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormCheckbox(selected) {
      const cResult = c.c(3);
      selected = selected.selected;
      const tmp4 = closure_3();
      if (cResult[0] === selected) {
        if (cResult[1] === tmp4.checkbox) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = jsx(native.Checkbox, { style: tmp4.checkbox, selected });
      cResult[0] = selected;
      cResult[1] = tmp4.checkbox;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = { style: tmp4.checkbox, selected };
    }
  : function FormCheckbox(selected) {
      const tmp = closure_3();
      return jsx(native.Checkbox, { style: closure_3().checkbox, selected: selected.selected });
    };
