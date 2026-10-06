// === Module 6671: useAuthorizedAppsToken ===

// Module 6671 (useAuthorizedAppsToken)
import react2 from "react" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6609 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6672 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, importDefault;

const FetchState = AuthorizedAppsStore2.FetchState;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let stateFromStoresArray1;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp4;
  let tmp7;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (arg1 == null) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const disableFetch = tmp4.disableFetch;
  importDefault = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn = function f() {
      let newestTokenForApplication;
      let found;
      if (closure_0 != null) {
        const mapped = closure_0.map((item) => newestTokenForApplication.getNewestTokenForApplication(item));
        found = mapped.filter(GlobalUtils.isNotNullish);
      }
      if (found == null) {
        found = [];
      }
      return found;
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = tmp(stateFromStoresArray1[5]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthorizedAppsStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== arg0) {
    const fn2 = function v() {
      let fetchStateForApplication;
      let flag;
      if (closure_0 != null) {
        flag = closure_0.every((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    const items3 = [arg0];
    cResult[7] = arg0;
    cResult[8] = fn2;
    cResult[9] = items3;
    tmp15 = items3;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult3 = tmp(stateFromStoresArray1[5]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [AuthorizedAppsStore];
    cResult[10] = items4;
    tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== arg0) {
    const fn3 = function y() {
      let fetchStateForApplication;
      let found;
      if (closure_0 != null) {
        found = closure_0.filter((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
      }
      if (found == null) {
        found = [];
      }
      return found;
    };
    const items5 = [arg0];
    cResult[11] = arg0;
    cResult[12] = items5;
    cResult[13] = fn3;
    tmp20 = fn3;
    tmp19 = items5;
  } else {
    tmp19 = cResult[12];
    tmp20 = cResult[13];
  }
  const tmpResult4 = tmp(stateFromStoresArray1[5]);
  stateFromStoresArray1 = tmpResult4.useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === stateFromStoresArray1) {
    let tmp22;
    let tmp23;
    if (cResult[15] === (undefined !== disableFetch && disableFetch)) {
      tmp22 = cResult[16];
      tmp23 = cResult[17];
    }
    const effect = react.useEffect(tmp22, tmp23);
    if (cResult[18] === stateFromStores) {
      let tmp26;
      if (cResult[19] === stateFromStoresArray) {
        tmp26 = cResult[20];
      }
      return tmp26;
    }
    const obj3 = { tokens: stateFromStoresArray, fetched: stateFromStores };
    cResult[18] = stateFromStores;
    cResult[19] = stateFromStoresArray;
    cResult[20] = obj3;
    tmp26 = obj3;
  }
  class N {
    constructor() {
      const tmp = closure_1 || 0 === stateFromStoresArray1.length;
      if (!tmp) {
        const obj = AuthorizedAppsActionCreatorsDefault;
        const response = obj.fetch(stateFromStoresArray1);
      }
    }
  }
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  cResult[14] = stateFromStoresArray1;
  cResult[15] = undefined !== disableFetch && disableFetch;
  cResult[16] = N;
  cResult[17] = items6;
  tmp23 = items6;
  tmp22 = N;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStoresArray1;
  _require = arg0;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  let tmp = undefined !== disableFetch && disableFetch;
  let closure_1 = tmp;
  const items = [AuthorizedAppsStore];
  const items1 = [arg0];
  const obj2 = require("get initialized");
  const tokens = obj2.useStateFromStoresArray(items, () => {
    let newestTokenForApplication;
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
  const items2 = [AuthorizedAppsStore];
  const items3 = [arg0];
  const obj3 = require("get initialized");
  const fetched = obj3.useStateFromStores(items2, () => {
    let fetchStateForApplication;
    let flag;
    if (closure_0 != null) {
      flag = closure_0.every((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const items4 = [AuthorizedAppsStore];
  const items5 = [arg0];
  const obj4 = require("get initialized");
  stateFromStoresArray1 = obj4.useStateFromStoresArray(items4, () => {
    let fetchStateForApplication;
    let found;
    if (closure_0 != null) {
      found = closure_0.filter((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [tmp, stateFromStoresArray1];
  const effect = react.useEffect(() => {
    const tmp = closure_1 || 0 === stateFromStoresArray1.length;
    if (!tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch(stateFromStoresArray1);
    }
  }, items6);
  return { tokens, fetched };
});
let closure_6 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let fetched;
  let tmp2;
  let tokens;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== arg0) {
    let tmp3 = null;
    if (null != arg0) {
      const items = [arg0];
      tmp3 = items;
    }
    cResult[0] = arg0;
    cResult[1] = tmp3;
    tmp2 = tmp3;
  } else {
    tmp2 = cResult[1];
  }
  ({ tokens, fetched } = closure_6(tmp2, arg1));
  let first = null;
  closure_6(tmp2, arg1);
  if (tokens.length > 0) {
    first = tokens[0];
  }
  if (cResult[2] === fetched) {
    let tmp6;
    if (cResult[3] === first) {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  const obj2 = { token: first, fetched };
  cResult[2] = fetched;
  cResult[3] = first;
  cResult[4] = obj2;
  tmp6 = obj2;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let items = [arg0];
  const tmp = closure_6(react.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [tmp];
      tmp2 = items;
    }
    return tmp2;
  }, items), arg1);
  const tokens = tmp.tokens;
  let token = null;
  const fetched = tmp.fetched;
  if (tokens.length > 0) {
    token = tokens[0];
  }
  return { token, fetched };
});
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export const useAuthorizedAppsTokens = tmp2;
export const useAuthorizedAppsToken = tmp3;