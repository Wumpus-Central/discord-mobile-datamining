// discord_app/design/components/Text/native/PlainTextExperimentContext.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const context = react.createContext(false);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let enabled;
      const obj = react2;
      const cResult = obj.c(3);
      ({ children, enabled } = arg0);
      if (cResult[0] === children) {
        let tmp2;
        if (cResult[1] === enabled) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const tmp3 = <closure_4 value={enabled}>{children}</closure_4>;
      cResult[0] = children;
      cResult[1] = enabled;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (enabled) => <closure_4 value={enabled.enabled}>{enabled.children}</closure_4>;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = tmp2;
export const usePlainTextExperimentEnabled = () => react.useContext(closure_4);
