// discord_app/modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx
import noop from "../../../../_runtime/00019_noop.js";
import recomputeFromAppTokens from "../../oauth2/AuthorizedAppsStore.tsx";
import { FetchState } from "../../oauth2/AuthorizedAppsStore.tsx";

const require = fn;
function useAuthorizedAppsTokens(closure_3, arg1) {
  const _require = closure_3;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  closure_1 = tmp;
  const items = [closure_4];
  const items1 = [closure_3];
  const tokens = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items, () => {
    let found;
    if (callback != null) {
      const mapped = callback.map((item, index) => newestTokenForApplication.getNewestTokenForApplication(item));
      found = mapped.filter(callback(stateFromStoresArray1[3]).isNotNullish);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = _require(stateFromStoresArray1[2]);
  const items2 = [closure_4];
  const items3 = [closure_3];
  const fetched = _require(stateFromStoresArray1[2]).useStateFromStores(items2, () => {
    let flag;
    if (closure_0 != null) {
      flag = closure_0.every((item, index) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const obj3 = _require(stateFromStoresArray1[2]);
  const items4 = [closure_4];
  const items5 = [closure_3];
  stateFromStoresArray1 = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items4, () => {
    let found;
    if (closure_0 != null) {
      found = closure_0.filter((item, index) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  const effect = React.useEffect(() => {
    let tmp = callback2;
    if (!callback2) {
      tmp = 0 === stateFromStoresArray1.length;
    }
    if (!tmp) {
      const response = callback2(stateFromStoresArray1[4]).fetch(stateFromStoresArray1);
      const obj = callback2(stateFromStoresArray1[4]);
    }
  }, items6);
  return { tokens, fetched };
}
const result = require("obj132").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId) {
  closure_0 = parentId;
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