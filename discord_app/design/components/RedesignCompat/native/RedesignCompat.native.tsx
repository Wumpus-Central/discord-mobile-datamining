// discord_app/design/components/RedesignCompat/native/RedesignCompat.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(false);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (children) => {
      let enabled = children.enabled;
      if (enabled == null) {
        enabled = true;
      }
      return <context.Provider value={enabled}>{children.children}</context.Provider>;
    };
