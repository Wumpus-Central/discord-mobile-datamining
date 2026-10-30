// === Module 6697: fetchConnectedAccounts ===

// Module 6697 (fetchConnectedAccounts)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/fetchConnectedAccounts.tsx");

export function fetchConnectedAccounts() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.CONNECTIONS, oldFormErrors: true, rejectWithError: true });
  return value.then((accounts) => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body }), () => DispatcherDefault.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] }));
}