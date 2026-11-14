// === Module 7922: useAuthorizedAppsToken ===

// Module 7922 (useAuthorizedAppsToken)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7410 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7221 */;

require = fn;
function useAuthorizedAppsTokens(flatMapResult, arg1) {
  _require = flatMapResult;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  closure_1 = tmp;
  items = [AuthorizedAppsStore];
  const items1 = [flatMapResult];
  const tokens = require("initialize").useStateFromStoresArray(items, () => {
    let found;
    if (closure_0 != null) {
      const mapped = closure_0.map((item) => newestTokenForApplication.getNewestTokenForApplication(item));
      found = mapped.filter(GlobalUtils.isNotNullish);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = require("initialize");
  const items2 = [AuthorizedAppsStore];
  const items3 = [flatMapResult];
  const fetched = require("initialize").useStateFromStores(items2, () => {
    let flag;
    if (closure_0 != null) {
      flag = closure_0.every((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const obj3 = require("initialize");
  const items4 = [AuthorizedAppsStore];
  const items5 = [flatMapResult];
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items4, () => {
    let found;
    if (closure_0 != null) {
      found = closure_0.filter((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
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
const FetchState = fn(7221).FetchState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export function useAuthorizedAppsToken(BLOONS_TD_BATTLES_2_APPLICATION_ID, arg1) {
  closure_0 = BLOONS_TD_BATTLES_2_APPLICATION_ID;
  items = [BLOONS_TD_BATTLES_2_APPLICATION_ID];
  const fetched = useAuthorizedAppsTokens(noop.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      items = [tmp];
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
}