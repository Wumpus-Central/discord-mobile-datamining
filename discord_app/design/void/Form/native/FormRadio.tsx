// discord_app/design/void/Form/native/FormRadio.tsx
import c from "../../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4945);
let closure_4 = createStyles.createStyles({ radio: { width: 22, height: 22 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormRadio(selected) {
      const cResult = c.c(3);
      const tmp3 = closure_4();
      const tmp4Result = importDefault(selected.selected ? 7190 : 7191);
      if (cResult[0] === tmp3.radio) {
        if (cResult[1] === tmp4Result) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      const tmp7 = jsx(FastImageDefault, { style: tmp3.radio, source: tmp4Result });
      cResult[0] = tmp3.radio;
      cResult[1] = tmp4Result;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj2 = { style: tmp3.radio, source: tmp4Result };
    }
  : function FormRadio(selected) {
      const obj = { style: closure_4().radio, source: null };
      const tmp = closure_4();
      obj.source = importDefault(selected.selected ? 7190 : 7191);
      return jsx(FastImageDefault, { style: closure_4().radio, source: null });
    };
