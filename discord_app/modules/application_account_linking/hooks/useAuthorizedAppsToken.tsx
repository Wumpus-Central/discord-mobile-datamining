// === Module 5588: useAuthorizedAppsTokens ===

// Module 5588 (useAuthorizedAppsTokens)
import noop from "noop";
import recomputeFromAppTokens from "recomputeFromAppTokens";
import { FetchState } from "recomputeFromAppTokens";

const require = arg1;
function useAuthorizedAppsTokens(noop, arg1) {
  const _require = noop;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  const importDefault = tmp;
  const items = [recomputeFromAppTokens];
  const items1 = [noop];
  const tokens = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items, () => {
    let found;
    if (callback != null) {
      const mapped = callback.map((id) => newestTokenForApplication.getNewestTokenForApplication(id));
      found = mapped.filter(callback(stateFromStoresArray1[3]).isNotNullish);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = _require(stateFromStoresArray1[2]);
  const items2 = [recomputeFromAppTokens];
  const items3 = [noop];
  const fetched = _require(stateFromStoresArray1[2]).useStateFromStores(items2, () => {
    let flag;
    if (closure_0 != null) {
      flag = closure_0.every((arg0) => fetchStateForApplication.getFetchStateForApplication(arg0) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const obj3 = _require(stateFromStoresArray1[2]);
  const items4 = [recomputeFromAppTokens];
  const items5 = [noop];
  stateFromStoresArray1 = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items4, () => {
    let found;
    if (closure_0 != null) {
      found = closure_0.filter((arg0) => fetchStateForApplication.getFetchStateForApplication(arg0) === constants.NOT_FETCHED);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  const effect = React.useEffect(() => {
    if (!tmp) {
      tmp = 0 === stateFromStoresArray1.length;
    }
    if (!tmp) {
      const response = tmp(stateFromStoresArray1[4]).fetch(stateFromStoresArray1);
      const obj = tmp(stateFromStoresArray1[4]);
    }
  }, items6);
  return { tokens, fetched };
}
const result = require("initialize").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId) {
  let closure_0 = parentId;
  let items = [parentId];
  const fetched = useAuthorizedAppsTokens(React.useMemo(() => {
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