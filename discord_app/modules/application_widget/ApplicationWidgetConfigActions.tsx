// === Module 9027: ApplicationWidgetConfigActions ===

// Module 9027 (ApplicationWidgetConfigActions)
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 9026 */;
import Backoff from "Backoff" /* 559 */;
import Dispatcher from "Dispatcher" /* 573 */;

require = fn;
function getApplicationsFromConfigs(arg0) {
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.application) {
      let result = map.set(tmp2.application.id, tmp2.application);
    }
    continue;
  }
  return Array.from(map.values());
}
function fetchFeaturedWidgetConfigsFromApi() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _fetchFeaturedWidgetConfigsFromApi(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          Dispatcher.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          let obj1 = { url: constants.WIDGET_CONFIGS_FEATURED, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          let obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        obj1 = closure_129_1(closure_129_2[6]);
        obj1.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" });
        if (!closure_129_9.pending) {
          closure_129_9.fail(() => {
            closure_1_8.one(undefined, closure_1_10).catch(() => {

            });
          });
        }
        obj2 = closure_129_1(closure_129_2[8]);
        obj2.captureException(closure_128_1);
        throw closure_128_1;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj3 = { type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS", applications: closure_128_0.body.applications, configs: closure_128_0.body.configs };
        closure_129_1(closure_129_2[6]).dispatch(obj3);
        closure_129_9.succeed();
        c3 = 0;
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp27) {
      closure_2 = tmp27;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp27;
      } else {
        c4 = tmp;
      }
    }
  }
};
function fetchDeveloperWidgetConfigsFromApi() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fetchDeveloperWidgetConfigsFromApi(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          Dispatcher.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.WIDGET_CONFIGS_DEVELOPER, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        let obj3 = closure_129_1(closure_129_2[6]);
        obj3.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" });
        let obj4 = closure_129_1(closure_129_2[8]);
        obj4.captureException(closure_128_1);
        throw closure_128_1;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        closure_128_0 = value;
        obj = closure_129_1(closure_129_2[6]);
        obj4 = { type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS", applications: closure_128_0.body.applications, configs: closure_128_0.body.configs };
        obj.dispatch(obj4);
        c3 = 0;
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp27) {
      closure_2 = tmp27;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp27;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_15 = async function _fetchWidgetConfigsFromApi(applicationId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = applicationId;
            let body;
            const obj1 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId };
            Dispatcher.dispatch(obj1);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: Endpoints.APPLICATION_WIDGET_CONFIGS(applicationId), rejectWithError: true };
            c5 = 2;
            c6 = 1;
            let obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          obj3 = closure_130_1(closure_130_2[6]);
          const obj4 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: closure_129_0 };
          obj3.dispatch(obj4);
          let obj5 = closure_130_1(closure_130_2[8]);
          obj5.captureException(closure_129_2);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          body = value.body;
          obj = closure_130_1(closure_130_2[6]);
          const obj6 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS", applicationId: closure_129_0, applications: closure_130_7(body), configs: body };
          obj.dispatch(obj6);
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        closure_3 = tmp30;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp30;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const FetchState = fn(9026).FetchState;
const Endpoints = fn(1074).Endpoints;
new fn(9028).PromiseDeduper();
Backoff = new Backoff(DurationsDefault.Millis.SECOND, DurationsDefault.Millis.MINUTE, true);
const subscription = Dispatcher.subscribe("LOGOUT", () => Backoff.succeed());
const promiseDeduper = new fn(9028).PromiseDeduper();
const promiseDeduper1 = new fn(9028).PromiseDeduper();
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigActions.tsx");

export const fetchFeaturedWidgetConfigs = function fetchFeaturedWidgetConfigs() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let force = obj.force;
  if (force === undefined) {
    force = false;
  }
  if (force) {
    Backoff.succeed();
  } else {
    return Promise.resolve();
  }
  return promiseDeduper.one(undefined, fetchFeaturedWidgetConfigsFromApi, { force });
};
export const fetchDeveloperWidgetConfigs = function fetchDeveloperWidgetConfigs() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (ApplicationWidgetConfigStore.getDeveloperFetchState() === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  resolved = promiseDeduper.one(undefined, fetchDeveloperWidgetConfigsFromApi, { force: flag });
};
export const fetchWidgetConfigs = function fetchWidgetConfigs(item10012, arg1) {
  closure_0 = item10012;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    if (tmp === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  resolved = promiseDeduper1.one(item10012, () => (function fetchWidgetConfigsFromApi() {
    const self = this;
    const apply = closure_1_15.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0), { force: flag });
};