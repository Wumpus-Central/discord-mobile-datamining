// === Module 12658: getApplicationsFromConfigs ===

// Module 12658 (getApplicationsFromConfigs)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "updateApplicationConfigs" /* 12657 */;
import { FetchState } from "updateApplicationConfigs" /* 12657 */;
import { Endpoints } from "ME" /* 676 */;
import importDefaultResult from "fails" /* 584 */;
import importDefaultResult1 from "dispatcher" /* 709 */;

const require = arg1;
function getApplicationsFromConfigs(arg0) {
  const map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.application) {
      let tmp3 = nextResult;
      let result = map.set(tmp2.application.id, tmp2.application);
    }
    continue;
  }
  return Array.from(map.values());
}
function fetchFeaturedWidgetConfigsFromApi() {
  const self = this;
  const apply = _fetchFeaturedWidgetConfigsFromApi.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchFeaturedWidgetConfigsFromApi() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            closure_1_1(closure_1_2[6]).dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
            c3 = 1;
            const HTTP = closure_1_0(closure_1_2[7]).HTTP;
            obj1 = { url: null, rejectWithError: true };
            obj1[0] = closure_1_6.WIDGET_CONFIGS_FEATURED;
            c4 = 2;
            c5 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          obj1 = callback(709);
          obj1.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" });
          if (!closure_9.pending) {
            closure_9.fail(() => {
              closure_8.one(undefined, closure_10).catch(() => {

              });
            });
          }
          obj2 = callback(1208);
          obj2.captureException(closure_1_1);
          throw closure_1_1;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          const obj3 = { type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS", applications: null, configs: null };
          obj3[1] = closure_0.body.applications;
          obj3[2] = closure_0.body.configs;
          callback(709).dispatch(obj3);
          closure_9.succeed();
          c3 = 0;
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp27) {
        dependencyMap = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchDeveloperWidgetConfigsFromApi() {
  const self = this;
  const apply = _fetchDeveloperWidgetConfigsFromApi.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchDeveloperWidgetConfigsFromApi() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            closure_0 = tmp7;
            closure_0 = undefined;
            closure_1_1(closure_1_2[6]).dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
            c3 = 1;
            const HTTP = closure_1_0(closure_1_2[7]).HTTP;
            obj1 = { url: null, rejectWithError: true };
            obj1[0] = closure_1_6.WIDGET_CONFIGS_DEVELOPER;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          let obj3 = callback(709);
          obj3.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" });
          let obj4 = callback(1208);
          obj4.captureException(callback);
          throw callback;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          obj = callback(709);
          obj4 = { type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS", applications: null, configs: null };
          obj4[1] = closure_0.body.applications;
          obj4[2] = closure_0.body.configs;
          obj.dispatch(obj4);
          c3 = 0;
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp27) {
        dependencyMap = tmp27;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchWidgetConfigsFromApi() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              body = tmp7;
              body = undefined;
              obj1 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[6]).dispatch(obj1);
              c4 = 1;
              const HTTP = callback(closure_1_2[7]).HTTP;
              const obj2 = { url: null, rejectWithError: true };
              obj2[0] = c6.APPLICATION_WIDGET_CONFIGS(callback);
              c5 = 2;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            obj3 = body(709);
            const obj4 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: null };
            obj4[1] = callback;
            obj3.dispatch(obj4);
            let obj5 = body(1208);
            obj5.captureException(dependencyMap);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            body = body.body;
            obj = body(709);
            const obj6 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS", applicationId: null, applications: null, configs: null };
            obj6[1] = callback;
            obj6[2] = callback2(body);
            obj6[3] = body;
            obj.dispatch(obj6);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let promiseDeduper = new require("areArraysShallowlyEqual").PromiseDeduper();
importDefaultResult = new importDefaultResult(setDefault.Millis.SECOND, setDefault.Millis.MINUTE, true);
let c9 = importDefaultResult;
const subscription = importDefaultResult1.subscribe("LOGOUT", () => importDefaultResult.succeed());
promiseDeduper = new require("areArraysShallowlyEqual").PromiseDeduper();
const promiseDeduper1 = new require("areArraysShallowlyEqual").PromiseDeduper();
let result = require("set").fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigActions.tsx");

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
    importDefaultResult.succeed();
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
    if (store.getDeveloperFetchState() === FetchState.SUCCESS) {
      let resolved = Promise.resolve();
    }
    return resolved;
  }
  resolved = promiseDeduper.one(undefined, fetchDeveloperWidgetConfigsFromApi, { force: flag });
};
export const fetchWidgetConfigs = function fetchWidgetConfigs(item10012) {
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
  resolved = promiseDeduper1.one(item10012, () => (function fetchWidgetConfigsFromApi(closure_0) {
    const self = this;
    const apply = closure_15.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0), { force: flag });
};