// discord_app/modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx
import noop from "../../../../../../_runtime/00019_noop.js";

const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/useConnectRetry.tsx");

export const useConnectRetry = function useConnectRetry(navigation, PRE_CONNECT) {
  const React = navigation;
  closure_1 = PRE_CONNECT;
  const items = [navigation, PRE_CONNECT];
  return React.useCallback(() => {
    let arr = navigation;
    const routes = navigation.getState().routes;
    const findIndexResult = routes.findIndex((item, index) => item.name === closure_1);
    if (findIndexResult >= 0) {
      arr = arr.pop(routes.length - findIndexResult - 1);
    } else {
      arr.popToTop();
    }
  }, items);
};