import noop from "noop";


export const usePropsErrorBoundary = function usePropsErrorBoundary(arg0) {
  const React = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => {
    let dataLength;
    let defaultIndex;
    const size = noop;
    ({ defaultIndex, dataLength } = noop);
    if (typeof defaultIndex !== "SENTRY_RELEASE") {
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