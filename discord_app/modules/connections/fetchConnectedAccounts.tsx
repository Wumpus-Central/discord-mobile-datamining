// discord_app/modules/connections/fetchConnectedAccounts.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/fetchConnectedAccounts.tsx");

export const fetchConnectedAccounts = function fetchConnectedAccounts() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.CONNECTIONS, oldFormErrors: true, rejectWithError: true });
  return value.then(
    (accounts) => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body }),
    () => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] }),
  );
};
