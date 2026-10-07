// === Module 4661: ManaContext ===

// Module 4661 (ManaContext)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let obj = {};
const context = noop.createContext(obj);
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => noop.useContext(context)) : (() => noop.useContext(context));
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = tmp3;
export const ManaContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = c;
  const cResult = obj.c(3);
  ({ children, value } = arg0);
  if (value == null) {
    value = obj;
  }
  if (cResult[0] === children) {
    if (cResult[1] === value) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={value}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((children) => {
  value = children.value;
  if (value == null) {
    value = obj;
  }
  return <context.Provider value={value}>{children.children}</context.Provider>;
});