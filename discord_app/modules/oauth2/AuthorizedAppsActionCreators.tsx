// === Module 6665: AuthorizedAppsActionCreators ===

// Module 6665 (AuthorizedAppsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Timers from "Timers" /* 2046 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6602 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;

function tokensToAppTokensMap(arg0, arr) {
  let mapped;
  const _Object = Object;
  if (arr != null) {
    mapped = arr.map((item) => {
      const items = [item, null];
      return items;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  const fromEntriesResult = fromEntries(mapped);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    fromEntriesResult[nextResult.application.id] = nextResult;
    continue;
  }
  return fromEntriesResult;
}
function fetchAuthorizedApps() {
  return obj(...arguments);
}
let obj = function _fetchAuthorizedApps() {
  let OAUTH2_TOKENS;
  obj = _asyncToGenerator(async (application_ids) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      let value;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const HTTP = HTTPUtils.HTTP;
              let request = { url: OAUTH2_TOKENS.OAUTH2_TOKENS, oldFormErrors: true, rejectWithError: true, query: obj4 };
              obj4 = { application_ids };
              value = HTTP.get(request);
              c2 = 1;
              c1 = 1;
              const obj5 = {
                value: value.then((body) => {
                          obj = closure_2_1(closure_2_2[4]);
                          const obj2 = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == closure_0, tokens: closure_2_8(body.body, closure_0) };
                          return obj.dispatch(obj2);
                        }, () => {
                          let request;
                          const dispatch = closure_2_1(closure_2_2[4]).dispatch;
                          closure_2_1(closure_2_2[4]);
                          if (null == closure_0) {
                            request = { type: "full" };
                          } else {
                            request = { type: "partial", applicationIds: tmp2 };
                          }
                          return dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request });
                        }),
                done: false
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
const FetchState = AuthorizedAppsStore2.FetchState;
const Endpoints = Constants.Endpoints;
obj = {
  predicate(arg0) {
    return AuthorizedAppsStore.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    let obj3;
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: obj3 };
    obj3 = { type: "partial", applicationIds };
    obj = DispatcherDefault;
    return obj.dispatch(obj2);
  },
  onCancelled(applicationIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds };
    return obj.dispatch(obj2);
  }
};
const batchInvocationManager = new Timers.BatchInvocationManager(fetchAuthorizedApps, obj);
let obj2 = {
  fetch(items) {
    if (AuthorizedAppsStore.getFetchState() !== FetchState.FETCHING) {
      if (null != items) {
        const queueResult = batchInvocationManager.queue(items);
        queueResult.catch((error) => {
          if (!(error instanceof Timers.BatchInvocationManagerResetError)) {
            throw error;
          }
        });
      } else {
        batchInvocationManager.reset();
        const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
        fetchAuthorizedApps();
      }
    }
  },
  delete: function(arg0) {
    const self = this;
    const HTTP = HTTPUtils.HTTP;
    obj = { url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true };
    const delResult = HTTP.del(obj);
    delResult.then(() => {
      const response = self.fetch();
    });
  }
};
const result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default obj2;