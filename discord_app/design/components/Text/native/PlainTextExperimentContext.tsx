// === Module 4901: PlainTextExperimentContext ===

// Module 4901 (PlainTextExperimentContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(false);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((enabled) => <closure_4 value={enabled.enabled}>{enabled.children}</closure_4>);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = tmp2;
export const usePlainTextExperimentEnabled = () => react.useContext(closure_4);