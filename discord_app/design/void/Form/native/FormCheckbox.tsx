// discord_app/design/void/Form/native/FormCheckbox.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let selected;

const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles({ checkbox: { width: 22, height: 22 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      const obj = react2;
      const cResult = obj.c(3);
      selected = selected.selected;
      const tmp4 = closure_3();
      if (cResult[0] === selected) {
        let tmp5;
        if (cResult[1] === tmp4.checkbox) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = jsx(native.Checkbox, { style: tmp4.checkbox, selected });
      cResult[0] = selected;
      cResult[1] = tmp4.checkbox;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (selected) => {
      selected = selected.selected;
      return jsx(native.Checkbox, { style: closure_3().checkbox, selected });
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckbox.tsx");

export default tmp3;
