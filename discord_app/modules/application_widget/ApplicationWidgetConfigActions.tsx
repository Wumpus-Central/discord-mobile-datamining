// discord_app/modules/application_widget/ApplicationWidgetConfigActions.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore.tsx";
import Backoff from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import Dispatcher from "../../Dispatcher.tsx";

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
let closure_11 = async function _fetchFeaturedWidgetConfigsFromApi() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          Dispatcher.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj6 = { url: constants.WIDGET_CONFIGS_FEATURED, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj8 = { value: HTTP.get(obj6), done: false };
          return obj8;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        closure_129_1(closure_129_2[6]).dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" });
        if (!closure_129_9.pending) {
          closure_129_9.fail(() => {
            closure_1_8.one(undefined, closure_1_10).catch(() => {});
          });
        }
        const obj2 = closure_129_1(closure_129_2[6]);
        closure_129_1(closure_129_2[8]).captureException(closure_128_1);
        throw closure_128_1;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj10 = {
          type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
          applications: closure_128_0.body.applications,
          configs: closure_128_0.body.configs,
        };
        closure_129_1(closure_129_2[6]).dispatch(obj10);
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
let closure_13 = async function _fetchDeveloperWidgetConfigsFromApi() {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          Dispatcher.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj6 = { url: constants.WIDGET_CONFIGS_DEVELOPER, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj7 = { value: HTTP.get(obj6), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        closure_129_1(closure_129_2[6]).dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" });
        const obj4 = closure_129_1(closure_129_2[6]);
        closure_129_1(closure_129_2[8]).captureException(closure_128_1);
        throw closure_128_1;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_128_0 = value;
        const obj10 = {
          type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
          applications: closure_128_0.body.applications,
          configs: closure_128_0.body.configs,
        };
        closure_129_1(closure_129_2[6]).dispatch(obj10);
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
let closure_15 = async function _fetchWidgetConfigsFromApi() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = applicationId;
            let body;
            const obj5 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId };
            Dispatcher.dispatch(obj5);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj7 = { url: Endpoints.APPLICATION_WIDGET_CONFIGS(applicationId), rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj8 = { value: HTTP.get(obj7), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          const obj9 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId: closure_129_0 };
          closure_130_1(closure_130_2[6]).dispatch(obj9);
          const obj4 = closure_130_1(closure_130_2[6]);
          closure_130_1(closure_130_2[8]).captureException(closure_129_2);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body = value.body;
          const obj12 = {
            type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
            applicationId: closure_129_0,
            applications: closure_130_7(body),
            configs: body,
          };
          closure_130_1(closure_130_2[6]).dispatch(obj12);
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
const FetchState = fn(9384).FetchState;
const Endpoints = fn(1074).Endpoints;
const promiseDeduper = new fn(9386).PromiseDeduper();
const importDefaultResult2 = new Backoff(DurationsDefault.Millis.SECOND, DurationsDefault.Millis.MINUTE, true);
const subscription = Dispatcher.subscribe("LOGOUT", () => importDefaultResult2.succeed());
const promiseDeduper3 = new fn(9386).PromiseDeduper();
const promiseDeduper4 = new fn(9386).PromiseDeduper();
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
    importDefaultResult2.succeed();
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
  resolved = promiseDeduper3.one(undefined, fetchDeveloperWidgetConfigsFromApi, { force: flag });
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
  resolved = promiseDeduper4.one(
    item10012,
    () =>
      (function fetchWidgetConfigsFromApi() {
        const self = this;
        const apply = closure_1_15.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_0),
    { force: flag },
  );
};
