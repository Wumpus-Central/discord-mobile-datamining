// discord_app/modules/oauth2/AuthorizedAppsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthorizedAppsStore from "AuthorizedAppsStore.tsx";

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
let closure_10 = async function _fetchAuthorizedApps(application_ids) {
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = HTTPUtils.HTTP;
            let request = { url: OAUTH2_TOKENS.OAUTH2_TOKENS, oldFormErrors: true, rejectWithError: true, query: null };
            const obj1 = { application_ids };
            request.query = obj1;
            value = HTTP.get(request);
            c2 = 1;
            c1 = 1;
            const obj2 = {
              value: value.then(
                (body) => {
                  c1(573);
                  const obj = {
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == closure_0,
                    tokens: closure_2_8(body.body, closure_0),
                  };
                  return obj.dispatch(obj);
                },
                () => {
                  let request = c1(573);
                  if (null == closure_0) {
                    request = { type: "full" };
                  } else {
                    request = { type: "partial", applicationIds: tmp };
                  }
                  return request.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request });
                },
              ),
              done: false,
            };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c1 = tmp;
        throw tmp5;
      }
    }
  })();
};
const FetchState = fn(7107).FetchState;
const Endpoints = fn(1074).Endpoints;
let obj = {
  predicate(arg0) {
    return AuthorizedAppsStore.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    let obj = { type: "USER_AUTHORIZED_APPS_REQUEST", request: null };
    obj = { type: "partial", applicationIds };
    obj.request = obj;
    return obj.dispatch(obj);
  },
  onCancelled(applicationIds) {
    const obj = { type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds };
    return obj.dispatch(obj);
  },
};
const batchInvocationManager = new fn(4447).BatchInvocationManager(fetchAuthorizedApps, obj);
obj = {
  fetch(arg0) {
    if (AuthorizedAppsStore.getFetchState() !== FetchState.FETCHING) {
      if (null != arg0) {
        batchInvocationManager.queue(arg0).catch((error) => {
          if (!(error instanceof Timers.BatchInvocationManagerResetError)) {
            throw error;
          }
        });
        const queueResult = batchInvocationManager.queue(arg0);
      } else {
        batchInvocationManager.reset();
        const obj = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } };
        obj.dispatch(obj);
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
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default obj;
