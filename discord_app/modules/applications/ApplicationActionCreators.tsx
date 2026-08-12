// discord_app/modules/applications/ApplicationActionCreators.tsx
import dispatcher from "dispatcher";
import set from "set";
import createExecutable from "createExecutable";
import importDefaultResult from "addApplication";
import ME from "ME";
import initialize from "initialize";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

let error;
let metroImportAll;
const require = arg1;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let set = tmp3;
              let dispatcher = tmp7;
              let flag;
              let dependencyMap;
              if (flag === undefined) {
                flag = false;
              }
              dispatcher = undefined;
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
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: "APPLICATION_FETCH", applicationId: null };
              obj2[1] = callback;
              flag(709).dispatch(obj2);
              let c6 = 1;
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
            set = createExecutable;
            obj4 = flag(709);
            const obj6 = { type: "APPLICATION_FETCH_FAIL", applicationId: null };
            obj6[1] = callback;
            obj4.dispatch(obj6);
            throw set;
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
            dispatcher = arg1;
            obj = flag(709);
            const obj8 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
            obj8[1] = dispatcher.body;
            obj.dispatch(obj8);
            c6 = 0;
            c8 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = dispatcher.body;
            return obj9;
          }
        } catch (tmp26) {
          createExecutable = tmp26;
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
  const _fetchApplication = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: error, NOOP: metroImportAll } = ME);
let obj = {
  createApplication(arg0) {
    let dispatcher;
    let dependencyMap;
    let importDefault;
    let require;
    ({ name: require, guildId: importDefault, type: dependencyMap, teamId: dispatcher } = arg0);
    return callback(function*() {
      let closure_1 = tmp2;
      let body = tmp5;
      const HTTP = outer1_0(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.APPLICATIONS;
      const obj2 = { name: null, type: null, guild_id: null, team_id: null };
      obj2[0] = outer1_0;
      obj2[1] = dependencyMap;
      obj2[2] = outer1_1;
      obj2[3] = c3;
      obj1[1] = obj2;
      obj1[2] = outer1_0(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = arg1.body;
      let tmp8 = null != closure_1;
      if (tmp8) {
        tmp8 = null != dependencyMap;
      }
      if (tmp8) {
        const obj = outer1_1(709);
        const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null };
        obj5[1] = body;
        obj.dispatch(obj5);
      }
      return outer1_0;
    })();
  },
  getApplicationsForGuild(closure_0, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const includeTeam = obj.includeTeam;
    let closure_2 = Object.assign(obj, Object.create(null));
    return callback(function*() {
      let closure_1 = tmp2;
      let body = tmp5;
      const HTTP = outer1_0(530).HTTP;
      const obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = outer1_7.GUILD_APPLICATIONS(outer1_0);
      const obj2 = {};
      const merged = Object.assign(dependencyMap);
      obj2.include_team = outer1_1;
      obj1[1] = obj2;
      obj1[2] = outer1_0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = arg1.body;
      const obj = outer1_1(709);
      const obj5 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body;
    })();
  },
  transferApplication(arg0) {
    let importDefault;
    let require;
    ({ applicationId: require, teamId: importDefault } = arg0);
    return callback(function*() {
      let closure_1 = tmp2;
      let body = tmp5;
      const HTTP = outer1_0(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.APPLICATION_OWNER_TRANSFER(outer1_0);
      const obj2 = { team_id: null };
      obj2[0] = outer1_1;
      obj1[1] = obj2;
      obj1[2] = outer1_0(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = arg1.body;
      const obj = outer1_1(709);
      const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body;
    })();
  },
  fetchApplications(arg0) {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return callback(function*() {
      if (status === 2) {
        status = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          status = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              status = 3;
              throw arg1;
            } else if (arg0 === 2) {
              status = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let found = tmp5;
              closure_1 = undefined;
              let body;
              let c3;
              c4 = undefined;
              found = outer1_0;
              let arr = outer1_0;
              if (!outer1_1) {
                found = arr2.filter((id) => {
                  const tmp = null != application.getApplication(id) && application.isHydrated(id);
                  let tmp2 = !tmp;
                  if (!tmp) {
                    tmp2 = !obj.isFetchingApplication(id);
                  }
                  if (tmp2) {
                    tmp2 = !obj.didFetchingApplicationFail(id);
                  }
                  if (tmp2) {
                    tmp2 = id.length > 0;
                  }
                  return tmp2;
                });
                arr = found;
              }
              if (arr.length > 0) {
                let obj3 = outer1_1(outer1_2[5]);
                let obj1 = { type: "APPLICATIONS_FETCH", applicationIds: null };
                obj1[1] = arr;
                obj3.dispatch(obj1);
                c3 = 1;
                const HTTP = outer1_0(outer1_2[6]).HTTP;
                const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
                obj2[0] = outer1_7.APPLICATIONS_PUBLIC;
                const _URLSearchParams = URLSearchParams;
                const str = new URLSearchParams(arr.map((arg0) => {
                  const items = ["application_ids", arg0];
                  return items;
                }));
                obj2[1] = str.toString();
                obj2[3] = outer1_0(outer1_2[6]).rejectWithMigratedError();
                c4 = 2;
                status = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              } else {
                status = 3;
              }
              arr2 = outer1_0;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            status = body;
            if (429 !== status.status) {
              obj1 = outer1_1(outer1_2[5]);
              const obj4 = { type: "APPLICATIONS_FETCH_FAIL", applicationIds: null };
              obj4[1] = found;
              obj1.dispatch(obj4);
            }
            throw status;
          } else if (arg0 === 1) {
            status = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            c3 = 0;
            body = closure_1.body;
            const _Set = Set;
            const set = new Set(body.map((id) => id.id));
            c3 = set;
            c4 = found.filter((arg0) => !set.has(arg0));
            const obj5 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: null, unknownApplicationIds: null, isHydrated: true };
            obj5[1] = closure_1.body;
            obj5[2] = c4;
            outer1_1(outer1_2[5]).dispatch(obj5);
            const obj11 = outer1_1(outer1_2[5]);
          }
          c3 = 0;
          status = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp32) {
          body = tmp32;
          if (tmp4 === c3) {
            status = tmp2;
            throw tmp32;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  fetchApplication
};
obj = {
  getQueryId: ME.QueryIds.APPLICATIONS,
  get(id) {
    let tmp = null;
    if (null != id) {
      tmp = null;
      if (importDefaultResult.isHydrated(id)) {
        let application = obj.getApplication(id);
        if (application == null) {
          application = null;
        }
        tmp = application;
      }
      obj = importDefaultResult;
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
let result = require("createExecutable").fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  const _require = arg0;
  const tmp = fetchStore(arg0);
  const data = tmp.data;
  const error = tmp.error;
  const obj = { app: null, isLoading: null, error: null };
  const items = [set];
  const items1 = [arg0, data];
  obj[0] = _initialize.useStateFromStores(items, () => {
    if (null == data) {
      const application = outer1_4.getApplication(closure_0);
      if (null != application) {
        return outer1_5.createFromServer(application);
      }
    }
    return data;
  }, items1);
  obj[1] = tmp.isLoading;
  obj[2] = error;
  return obj;
};