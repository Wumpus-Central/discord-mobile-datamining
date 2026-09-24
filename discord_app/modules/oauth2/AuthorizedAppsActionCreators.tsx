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
let closure_10 = async function _fetchAuthorizedApps() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: OAUTH2_TOKENS.OAUTH2_TOKENS,
              oldFormErrors: true,
              rejectWithError: true,
              query: null,
            };
            const obj4 = { application_ids };
            request.query = obj4;
            value = HTTP.get(request);
            c2 = 1;
            c1 = 1;
            const obj5 = {
              value: value.then(
                (body) => {
                  const obj = c1(573);
                  return obj.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == closure_0,
                    tokens: closure_2_8(body.body, closure_0),
                  });
                },
                () => {
                  if (null == closure_0) {
                    let obj2 = { type: "full" };
                  } else {
                    obj2 = { type: "partial", applicationIds: tmp };
                  }
                  return c1(573).dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request: obj2 });
                },
              ),
              done: false,
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          let obj = { value, done: true };
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
const FetchState = fn(7440).FetchState;
const Endpoints = fn(1074).Endpoints;
const batchInvocationManager = new fn(2039).BatchInvocationManager(fetchAuthorizedApps, {
  predicate(arg0) {
    return AuthorizedAppsStore.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "partial", applicationIds } };
    return DispatcherDefault.dispatch(obj2);
  },
  onCancelled(applicationIds) {
    return DispatcherDefault.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds });
  },
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
  },
};
