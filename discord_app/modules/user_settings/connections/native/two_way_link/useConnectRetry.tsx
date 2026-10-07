// === Module 8792: useConnectRetry ===

// Module 8792 (useConnectRetry)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  state = arg0;
  closure_1 = arg1;
  const cResult = c.c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function o() {
    const routes = state.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1_1);
    if (findIndexResult >= 0) {
      state.pop(routes.length - findIndexResult - 1);
    } else {
      state.popToTop();
    }
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  state = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useCallback(() => {
    const routes = state.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1_1);
    if (findIndexResult >= 0) {
      state.pop(routes.length - findIndexResult - 1);
    } else {
      state.popToTop();
    }
  }, items);
});