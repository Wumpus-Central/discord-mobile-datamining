// discord_app/modules/connections/fetchConnectedAccounts.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/fetchConnectedAccounts.tsx");

export const fetchConnectedAccounts = function fetchConnectedAccounts() {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.CONNECTIONS, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then(
    (accounts) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body };
      return obj.dispatch(obj2);
    },
    () => {
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] });
    },
  );
};
