// discord_app/modules/applications/ApplicationActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import set from "../global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx";
import createExecutable from "../../records/ApplicationRecord.tsx";
import importDefaultResult from "ApplicationStore.tsx";
import ME from "../../Constants.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
function fetchApplication() {
  const self = this;
  const apply = _fetchApplication.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchApplication() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let flag;
              dependencyMap = undefined;
              if (flag === undefined) {
                flag = false;
              }
              closure_3 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "APPLICATION_FETCH", applicationId: null };
              obj2[1] = callback;
              flag(709).dispatch(obj2);
              c6 = 1;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, query: null, oldFormErrors: true, signal: null, rejectWithError: null };
              obj3[0] = c7.APPLICATION_PUBLIC(callback);
              let obj4 = { with_guild: null };
              obj4[0] = flag;
              obj3[1] = obj4;
              obj3[3] = dependencyMap;
              const obj11 = flag(709);
              obj3[4] = callback(530).rejectWithMigratedError();
              c7 = 3;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj3);
              return obj5;
            }
          } else if (2 === tmp7) {
            c6 = 0;
            closure_4 = closure_5;
            obj4 = flag(709);
            const obj6 = { type: "APPLICATION_FETCH_FAIL", applicationId: null };
            obj6[1] = callback;
            obj4.dispatch(obj6);
            throw closure_4;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_3 = arg1;
            obj = flag(709);
            const obj8 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
            obj8[1] = closure_3.body;
            obj.dispatch(obj8);
            c6 = 0;
            c8 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = closure_3.body;
            return obj9;
          }
        } catch (tmp26) {
          closure_5 = tmp26;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp26;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
({ Endpoints: error, NOOP: closure_8 } = ME);
let obj = {
  getQueryId: ME.QueryIds.APPLICATIONS,
  get(item) {
    let tmp = null;
    if (null != item) {
      tmp = null;
      if (importDefaultResult.isHydrated(item)) {
        let application = importDefaultResult.getApplication(item);
        if (application == null) {
          application = null;
        }
        tmp = application;
      }
    }
    return tmp;
  },
  load(arg0) {
    if (null != arg0) {
      let nextPromise = fetchApplication(arg0, false).then(closure_8);
      const promise = fetchApplication(arg0, false);
    } else {
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  },
  getIsLoading(id) {
    let result = null != id;
    if (result) {
      result = importDefaultResult.isFetchingApplication(id);
    }
    return result;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, obj);
let result = require("obj132").fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  const _require = arg0;
  const tmp = fetchStore(arg0);
  const data = tmp.data;
  error = tmp.error;
  const obj = {
    app: require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
      if (null == data) {
        const application = closure_1_4.getApplication(closure_0);
        if (null != application) {
          return closure_1_5.createFromServer(application);
        }
      }
      return data;
    }, items1),
    isLoading: tmp.isLoading,
    error
  };
  items = [closure_4];
  items1 = [arg0, data];
  return obj;
};