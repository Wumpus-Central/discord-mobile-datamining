// === Module 9245: useConnectRetry ===

// Module 9245 (useConnectRetry)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  const React = navigation;
  closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return React.useCallback(() => {
    let arr = navigation;
    const routes = navigation.getState().routes;
    const findIndexResult = routes.findIndex((name) => name.name === closure_1);
    if (findIndexResult >= 0) {
      arr = arr.pop(routes.length - findIndexResult - 1);
    } else {
      arr.popToTop();
    }
  }, items);
};