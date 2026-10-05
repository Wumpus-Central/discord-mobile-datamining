// discord_app/design/components/RedesignCompat/native/RedesignCompat.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const context = react.createContext(false);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let enabled;
      const obj = react2;
      const cResult = obj.c(3);
      ({ children, enabled } = arg0);
      if (enabled == null) {
        enabled = true;
      }
      if (cResult[0] === children) {
        let tmp2;
        if (cResult[1] === enabled) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const tmp3 = <context.Provider value={enabled}>{children}</context.Provider>;
      cResult[0] = children;
      cResult[1] = enabled;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (enabled) => {
      enabled = enabled.enabled;
      const children = enabled.children;
      const Provider = context.Provider;
      if (enabled == null) {
        enabled = true;
      }
      return <Provider value={enabled}>{children}</Provider>;
    };
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = tmp3;
