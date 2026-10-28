// === Module 7295: AuthorizedAppsActionCreators ===

// Module 7295 (AuthorizedAppsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import Timers from "Timers" /* 4851 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7239 */;

require = fn;
function tokensToAppTokensMap(arg0, arr) {
  let mapped;
  if (arr != null) {
    mapped = arr.map((item) => {
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
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _fetchAuthorizedApps() {
  c4 = 0;
  c5 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = application_ids;
            closure_129_1 = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: OAUTH2_TOKENS.OAUTH2_TOKENS, oldFormErrors: true, rejectWithError: true, query: null };
            const obj4 = { application_ids };
            request.query = obj4;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let dispatch = closure_130_1(closure_130_2[4]).dispatch;
          if (null == closure_129_0) {
            let obj6 = { type: "full" };
          } else {
            obj6 = { type: "partial", applicationIds: closure_129_0 };
          }
          const obj7 = { type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request: obj6 };
          dispatch = dispatch(obj7);
          c5 = 3;
          const tmp20 = closure_130_1(closure_130_2[4]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_1 = value;
          c3 = 0;
          const obj9 = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == closure_129_0, tokens: closure_130_8(closure_129_1.body, closure_129_0) };
          c5 = 3;
          const obj10 = { value: closure_130_1(closure_130_2[4]).dispatch(obj9), done: true };
          return obj10;
        }
      } catch (tmp24) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp24;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const FetchState = fn(7239).FetchState;
const Endpoints = fn(1084).Endpoints;
const batchInvocationManager = new fn(4851).BatchInvocationManager(fetchAuthorizedApps, {
  predicate(arg0) {
    return AuthorizedAppsStore.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "partial", applicationIds } };
    return DispatcherDefault.dispatch(obj2);
  },
  onCancelled(applicationIds) {
    return DispatcherDefault.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default {
  fetch(items) {
    if (AuthorizedAppsStore.getFetchState() !== FetchState.FETCHING) {
      if (null != items) {
        batchInvocationManager.queue(items).catch((error) => {
          if (!(error instanceof Timers.BatchInvocationManagerResetError)) {
            throw error;
          }
        });
        const queueResult = batchInvocationManager.queue(items);
      } else {
        batchInvocationManager.reset();
        const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } };
        DispatcherDefault.dispatch(obj2);
        fetchAuthorizedApps();
      }
    }
  },
  delete(arg0) {
    const self = this;
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true };
    HTTP.del({ url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true }).then(() => {
      const response = self.fetch();
    });
  }
};