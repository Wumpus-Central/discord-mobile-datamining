// discord_app/modules/application_widget/ApplicationWidgetConfigActions.tsx
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ApplicationWidgetConfigStore2 from "ApplicationWidgetConfigStore.tsx";
import utils_FunctionUtils from "../../../discord_common/js/shared/utils/FunctionUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Backoff from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import Dispatcher from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ApplicationWidgetConfigStore = ApplicationWidgetConfigStore2;
let closure_2, closure_3, map;

function getApplicationsFromConfigs(arg0) {
  map = new Map();
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
  return obj(...arguments);
}
let obj = function _fetchFeaturedWidgetConfigsFromApi() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
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
            closure_1 = tmp;
            closure_0 = undefined;
            const obj9 = Dispatcher;
            obj9.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: constants.WIDGET_CONFIGS_FEATURED, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj8 = { value: HTTP.get(obj6), done: false };
            return obj8;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj2 = closure_129_1(closure_129_2[6]);
          obj2.dispatch({ type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE" });
          if (!closure_129_9.pending) {
            closure_129_9.fail(() => {
              const oneResult = closure_1_8.one(undefined, closure_1_10);
              oneResult.catch(() => {});
            });
          }
          const obj3 = closure_129_1(closure_129_2[8]);
          obj3.captureException(closure_1);
          throw closure_1;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const obj10 = {
            type: "APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS",
            applications: closure_0.body.applications,
            configs: closure_0.body.configs,
          };
          const obj7 = closure_129_1(closure_129_2[6]);
          obj7.dispatch(obj10);
          closure_129_9.succeed();
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp24) {
        closure_2 = tmp24;
        if (0 === c3) {
          c5 = 3;
          throw tmp24;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function fetchDeveloperWidgetConfigsFromApi() {
  return obj(...arguments);
}
obj = function _fetchDeveloperWidgetConfigsFromApi() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
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
            closure_1 = tmp;
            closure_0 = undefined;
            const obj9 = Dispatcher;
            obj9.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START" });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: constants.WIDGET_CONFIGS_DEVELOPER, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj4 = closure_129_1(closure_129_2[6]);
          obj4.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE" });
          const obj5 = closure_129_1(closure_129_2[8]);
          obj5.captureException(closure_1);
          throw closure_1;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_0 = value;
          const obj10 = {
            type: "APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS",
            applications: closure_0.body.applications,
            configs: closure_0.body.configs,
          };
          obj = closure_129_1(closure_129_2[6]);
          obj.dispatch(obj10);
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp24) {
        closure_2 = tmp24;
        if (0 === c3) {
          c5 = 3;
          throw tmp24;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchWidgetConfigsFromApi() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const obj6 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_START", applicationId };
              const obj9 = Dispatcher;
              obj9.dispatch(obj6);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj7 = { url: Endpoints.APPLICATION_WIDGET_CONFIGS(applicationId), rejectWithError: true };
              const obj8 = { value: get(obj7), done: false };
              return obj8;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj10 = { type: "APPLICATION_WIDGET_CONFIG_FETCH_FAILURE", applicationId };
            const obj3 = closure_130_1(closure_130_2[6]);
            obj3.dispatch(obj10);
            const obj5 = closure_130_1(closure_130_2[8]);
            obj5.captureException(closure_2);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            obj = {
              type: "APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS",
              applicationId,
              applications: closure_130_7(body),
              configs: body,
            };
            const dispatch = closure_130_1(closure_130_2[6]).dispatch;
            closure_130_1(closure_130_2[6]);
            dispatch(obj);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const FetchState = ApplicationWidgetConfigStore2.FetchState;
const Endpoints = Constants.Endpoints;
const promiseDeduper = new utils_FunctionUtils.PromiseDeduper();
const importDefaultResult2 = new Backoff(DurationsDefault.Millis.SECOND, DurationsDefault.Millis.MINUTE, true);
const subscription = Dispatcher.subscribe("LOGOUT", () => importDefaultResult2.succeed());
const promiseDeduper3 = new utils_FunctionUtils.PromiseDeduper();
const promiseDeduper4 = new utils_FunctionUtils.PromiseDeduper();
let result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigActions.tsx");

export const fetchFeaturedWidgetConfigs = function fetchFeaturedWidgetConfigs() {
  obj = arg0;
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
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    let resolved;
    if (ApplicationWidgetConfigStore.getDeveloperFetchState() === FetchState.SUCCESS) {
      resolved = Promise.resolve();
    }
    return resolved;
  }
  resolved = promiseDeduper3.one(undefined, fetchDeveloperWidgetConfigsFromApi, { force: flag });
};
export const fetchWidgetConfigs = function fetchWidgetConfigs(item10012, arg1) {
  let closure_0 = item10012;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.force;
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    let resolved;
    if (tmp === FetchState.SUCCESS) {
      resolved = Promise.resolve();
    }
    return resolved;
  }
  resolved = promiseDeduper4.one(
    item10012,
    () => {
      function fetchWidgetConfigsFromApi() {
        return closure_1_15(...arguments);
      }
      return fetchWidgetConfigsFromApi(item10012);
    },
    { force: flag },
  );
};
