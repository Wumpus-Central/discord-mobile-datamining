// === Module 6671: useAuthorizedAppsToken ===

// Module 6671 (useAuthorizedAppsToken)
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6672 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6609 */;

require = fn;
const FetchState = fn(6609).FetchState;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(21);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (arg1 == null) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const disableFetch = tmp4.disableFetch;
  importDefault = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn = function f() {
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
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthorizedAppsStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== arg0) {
    const fn2 = function v() {
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
    let tmp15 = items3;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[8];
    tmp15 = cResult[9];
  }
  const tmpResult = require("initialize");
  const stateFromStores = require("initialize").useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [AuthorizedAppsStore];
    cResult[10] = items4;
    let tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== arg0) {
    const fn3 = function y() {
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
    let tmp20 = fn3;
    let tmp19 = items5;
  } else {
    tmp19 = cResult[12];
    tmp20 = cResult[13];
  }
  const tmpResult3 = require("initialize");
  stateFromStoresArray1 = require("initialize").useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === stateFromStoresArray1) {
    if (cResult[15] === tmp6) {
      let tmp22 = cResult[16];
      let tmp23 = cResult[17];
    }
    const effect = noop.useEffect(tmp22, tmp23);
    if (cResult[18] === stateFromStores) {
      if (cResult[19] === stateFromStoresArray) {
        let tmp26 = cResult[20];
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
      tmp = disableFetch;
      if (!disableFetch) {
        tmp2 = closure_2;
        num = 0;
        tmp = 0 === closure_2.length;
      }
      if (!tmp) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[6]);
        tmp5 = closure_2;
        response = obj.fetch(closure_2);
      }
      return;
    }
  }
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  cResult[14] = stateFromStoresArray1;
  cResult[15] = undefined !== disableFetch && disableFetch;
  cResult[16] = N;
  cResult[17] = items6;
  tmp23 = items6;
  tmp22 = N;
  const tmpResult4 = require("initialize");
}) : ((arg0, arg1) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  closure_1 = tmp;
  const items = [AuthorizedAppsStore];
  const items1 = [arg0];
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
  const items3 = [arg0];
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
  const items5 = [arg0];
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
});
let closure_6 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export const useAuthorizedAppsTokens = tmp2;
export const useAuthorizedAppsToken = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(5);
  if (cResult[0] !== arg0) {
    let tmp3 = null;
    if (null != arg0) {
      const items = [arg0];
      tmp3 = items;
    }
    cResult[0] = arg0;
    cResult[1] = tmp3;
    let tmp2 = tmp3;
  } else {
    tmp2 = cResult[1];
  }
  ({ tokens, fetched } = closure_6(tmp2, arg1));
  let first = null;
  if (tokens.length > 0) {
    first = tokens[0];
  }
  if (cResult[2] === fetched) {
    if (cResult[3] === first) {
      let tmp6 = cResult[4];
    }
    return tmp6;
  }
  const obj2 = { token: first, fetched };
  cResult[2] = fetched;
  cResult[3] = first;
  cResult[4] = obj2;
  tmp6 = obj2;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  let items = [arg0];
  const fetched = closure_6(noop.useMemo(() => {
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
});