// === Module 7147: tokensToAppTokensMap ===

// Module 7147 (tokensToAppTokensMap)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import recomputeFromAppTokens from "recomputeFromAppTokens" /* 5289 */;
import { FetchState } from "recomputeFromAppTokens" /* 5289 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function tokensToAppTokensMap(arg0, arr) {
  let mapped;
  if (arr != null) {
    mapped = arr.map((item, index) => {
      const items = [item, null];
      return items;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  const fromEntriesResult = Object.fromEntries(mapped);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    fromEntriesResult[nextResult.application.id] = nextResult;
    continue;
  }
  return fromEntriesResult;
}
function fetchAuthorizedApps() {
  const self = this;
  const apply = _fetchAuthorizedApps.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAuthorizedApps() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[5]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: true, query: null };
              obj1[0] = closure_1_6.OAUTH2_TOKENS;
              const obj2 = { application_ids: null };
              obj2[0] = callback;
              obj1[3] = obj2;
              const value = HTTP.get(obj1);
              table = 1;
              c1 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = value.then((result) => {
                v3(709);
                const obj = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == closure_0, tokens: closure_1_8(result.body, closure_0) };
                return obj.dispatch(obj);
              }, () => {
                let request = v3(709);
                if (null == closure_0) {
                  request = { type: "full" };
                } else {
                  request = { type: "partial", applicationIds: null };
                  request[1] = tmp;
                }
                return request.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request });
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = {
  predicate(arg0) {
    return store.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    const request = { type: "partial", applicationIds };
    return request.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request });
  },
  onCancelled(applicationIds) {
    const obj = { type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds };
    return obj.dispatch(obj);
  }
};
const batchInvocationManager = new require("start").BatchInvocationManager(fetchAuthorizedApps, obj);
obj = {
  fetch(arg0) {
    if (store.getFetchState() !== FetchState.FETCHING) {
      if (null != arg0) {
        batchInvocationManager.queue(arg0).catch((error) => {
          if (!(error instanceof callback(table[3]).BatchInvocationManagerResetError)) {
            throw error;
          }
        });
        const queueResult = batchInvocationManager.queue(arg0);
      } else {
        batchInvocationManager.reset();
        const obj = { type: "USER_AUTHORIZED_APPS_REQUEST", request: null };
        obj[1] = { type: "full" };
        obj.dispatch(obj);
        fetchAuthorizedApps();
      }
    }
  },
  delete(arg0) {
    const self = this;
    const HTTP = self(530).HTTP;
    const obj = { url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true };
    HTTP.del({ url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true }).then((result) => {
      const response = self.fetch();
    });
  }
};
const result = require("obj132").fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default obj;