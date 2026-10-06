// _runtime/10513_react.js
import react from "00019_react.js";

let size;

export const usePropsErrorBoundary = function usePropsErrorBoundary(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(function () {
    let dataLength;
    let defaultIndex;
    size = closure_0;
    ({ defaultIndex, dataLength } = closure_0);
    if (typeof defaultIndex === "number") {
      if (dataLength > 0) {
        const _Error3 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("DefaultIndex must be in the range of data length.");
        throw error;
      }
    }
    if (!size.mode) {
      if (!size.vertical) {
        if (!size.width) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("`width` must be specified for horizontal carousels.");
          throw error1;
        }
      }
      if (size.vertical) {
        if (!size.height) {
          const _Error2 = Error;
          const self3 = this;
          const self4 = this;
          const error2 = new Error("`height` must be specified for vertical carousels.");
          throw error2;
        }
      }
    }
  }, items);
};
