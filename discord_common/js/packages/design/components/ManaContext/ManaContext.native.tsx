// === Module 4661: ManaContext ===

// Module 4661 (ManaContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = {};
const context = react.createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => react.useContext(context)) : (() => react.useContext(context));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let value;
  obj = react2;
  const cResult = obj.c(3);
  ({ children, value } = arg0);
  if (value == null) {
    value = obj;
  }
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === value) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={value}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = value;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((value) => {
  value = value.value;
  const children = value.children;
  const Provider = context.Provider;
  if (value == null) {
    value = obj;
  }
  return <Provider value={value}>{children}</Provider>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = tmp3;
export const ManaContextProvider = tmp4;