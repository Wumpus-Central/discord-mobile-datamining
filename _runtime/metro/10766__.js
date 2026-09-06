// === Module 10766: ? ===

// Module 10766
import noop from "module_19" /* 19 */;


export const usePropsErrorBoundary = function usePropsErrorBoundary(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    const size = closure_0;
    ({ defaultIndex, dataLength } = closure_0);
    if (typeof defaultIndex === "number") {
      if (dataLength > 0) {
        const _Error3 = Error;
        const error = new Error("DefaultIndex must be in the range of data length.");
        throw error;
      }
    }
    if (!size.mode) {
      if (!size.vertical) {
        if (!size.width) {
          const _Error = Error;
          const error1 = new Error("`width` must be specified for horizontal carousels.");
          throw error1;
        }
      }
      if (size.vertical) {
        if (!size.height) {
          const _Error2 = Error;
          const error2 = new Error("`height` must be specified for vertical carousels.");
          throw error2;
        }
      }
    }
  }, items);
};