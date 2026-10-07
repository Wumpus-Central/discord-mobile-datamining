// === Module 4901: PlainTextExperimentContext ===

// Module 4901 (PlainTextExperimentContext)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(false);
fn(558);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("design/components/Text/native/PlainTextExperimentContext.tsx");

export const PlainTextExperimentProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ children, enabled } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === enabled) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <closure_4 value={enabled}>{children}</closure_4>;
  cResult[0] = children;
  cResult[1] = enabled;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((enabled) => <closure_4 value={enabled.enabled}>{enabled.children}</closure_4>);
export const usePlainTextExperimentEnabled = () => noop.useContext(closure_4);