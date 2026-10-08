// === Module 5882: fetchConnectedAccounts ===

// Module 5882 (fetchConnectedAccounts)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/fetchConnectedAccounts.tsx");

export const fetchConnectedAccounts = function fetchConnectedAccounts() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.CONNECTIONS, oldFormErrors: true, rejectWithError: true });
  return value.then((accounts) => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body }), () => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] }));
};