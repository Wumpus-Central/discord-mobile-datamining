// === Module 7169: useAuthorizedAppsToken ===

// Module 7169 (useAuthorizedAppsToken)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7170 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7107 */;

require = fn;
function useAuthorizedAppsTokens(noop, arg1) {
  _require = noop;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  closure_1 = tmp;
  const items = [AuthorizedAppsStore];
  const items1 = [noop];
  const tokens = require("initialize").useStateFromStoresArray(items, () => {
    let found;
    if (noop != null) {
      const mapped = noop.map((item) => newestTokenForApplication.getNewestTokenForApplication(item));
      found = mapped.filter(GlobalUtils.isNotNullish);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = require("initialize");
  const items2 = [AuthorizedAppsStore];
  const items3 = [noop];
  const fetched = require("initialize").useStateFromStores(items2, () => {
    let flag;
    if (noop != null) {
      flag = noop.every((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const obj3 = require("initialize");
  const items4 = [AuthorizedAppsStore];
  const items5 = [noop];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items4, () => {
    let found;
    if (noop != null) {
      found = noop.filter((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  const effect = noop.useEffect(() => {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = 0 === stateFromStoresArray1.length;
    }
    if (!tmp) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch(stateFromStoresArray1);
    }
  }, items6);
  return { tokens, fetched };
}
const FetchState = fn(7107).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId, arg1) {
  closure_0 = parentId;
  let items = [parentId];
  const fetched = useAuthorizedAppsTokens(noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [tmp];
      tmp2 = items;
    }
    return tmp2;
  }, items), arg1);
  const tokens = fetched.tokens;
  let token = null;
  if (tokens.length > 0) {
    token = tokens[0];
  }
  return { token, fetched: fetched.fetched };
};