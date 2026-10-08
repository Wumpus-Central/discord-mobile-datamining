// === Module 16079: useAuthorizedSlayerApplications ===

// Module 16079 (useAuthorizedSlayerApplications)
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6849 */;
import noop from "module_19" /* 19 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6786 */;

const require = globalThis.__r;

const require = fn;
const FetchState = fn(6786).FetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthorizedSlayerApplications(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    const fn = function p() {
      return fetchState.getFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthorizedAppsStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function h() {
      if (closure_0) {
        let newestTokensForNonChildrenApplications = AuthorizedAppsStore.getNewestTokensForNonChildrenApplications();
      } else {
        newestTokensForNonChildrenApplications = AuthorizedAppsStore.getNewestTokens();
      }
      return newestTokensForNonChildrenApplications;
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (null != stateFromStores1) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
      cResult[8] = F;
      let found = F;
    } else {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
      cResult[9] = tmp14;
    } else {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
    }
    found = stateFromStores1.filter(found);
    const mapped = found.map(tmp14);
    cResult[6] = stateFromStores1;
    cResult[7] = mapped;
  } else {
    class F {
      constructor(arg0) {
        obj = closure_0(closure_1_2[5]);
        return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
      cResult[5] = tmp12;
    } else {
      class F {
        constructor(arg0) {
          obj = closure_0(closure_1_2[5]);
          return obj.isSocialLayerSDKAuthorization(arg0.application, arg0.scopes);
        }
      }
    }
    if (cResult[10] !== arg1) {
      class E {
        constructor() {
          if (!closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[6]);
            response = obj.fetch();
          }
          return;
        }
      }
      const items2 = [arg1];
      cResult[10] = arg1;
      cResult[11] = E;
      cResult[12] = items2;
      let tmp19 = items2;
    } else {
      class E {
        constructor() {
          if (!closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[6]);
            response = obj.fetch();
          }
          return;
        }
      }
      tmp19 = cResult[12];
    }
    const effect = noop.useEffect(E, tmp19);
    let tmp23 = stateFromStores !== FetchState.FETCHED;
    if (tmp23) {
      class E {
        constructor() {
          if (!closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[6]);
            response = obj.fetch();
          }
          return;
        }
      }
      if (!tmp24) {
        class E {
          constructor() {
            if (!closure_1) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[6]);
              response = obj.fetch();
            }
            return;
          }
        }
      }
      tmp23 = tmp24;
    }
    if (cResult[13] === tmp12) {
      class E {
        constructor() {
          if (!closure_1) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[6]);
            response = obj.fetch();
          }
          return;
        }
      }
      return tmp25;
    }
    const obj2 = { showLoadingIndicator: tmp23, slayerSdkApplications: tmp12 };
    cResult[13] = tmp12;
    cResult[14] = tmp23;
    cResult[15] = obj2;
    tmp25 = obj2;
  }
  const tmpResult2 = require("initialize");
}) : (function useAuthorizedSlayerApplications(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [AuthorizedAppsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => fetchState.getFetchState());
  let obj = require("initialize");
  const items1 = [AuthorizedAppsStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    if (closure_0) {
      let newestTokensForNonChildrenApplications = AuthorizedAppsStore.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = AuthorizedAppsStore.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const slayerSdkApplications = noop.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((application) => closure_1_0(stateFromStores1[5]).isSocialLayerSDKAuthorization(application.application, application.scopes));
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items3);
  let showLoadingIndicator = stateFromStores !== FetchState.FETCHED;
  if (showLoadingIndicator) {
    let tmp6 = null == stateFromStores1;
    if (!tmp6) {
      tmp6 = 0 === stateFromStores1.length;
    }
    showLoadingIndicator = tmp6;
  }
  return { showLoadingIndicator, slayerSdkApplications };
});