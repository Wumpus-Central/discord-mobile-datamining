// === Module 6266: RedesignCompat ===

// Module 6266 (RedesignCompat)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(false);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignCompat(arg0) {
  const cResult = c.c(3);
  ({ children, enabled } = arg0);
  if (enabled == null) {
    enabled = true;
  }
  if (cResult[0] === children) {
    if (cResult[1] === enabled) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={enabled}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = enabled;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{children.children}</context.Provider>;
});