// === Module 5835: fetchApplication ===

// Module 5835 (fetchApplication)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "set" /* 5836 */;
import closure_5 from "createExecutable" /* 4406 */;
import importDefaultResult from "addApplication" /* 4421 */;
import ME from "ME" /* 676 */;
import initialize from "initialize" /* 589 */;

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
  createApplication(arg0) {
    ({ name: require, guildId: importDefault, type: dependencyMap, teamId: closure_3 } = arg0);
    return callback(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_7.APPLICATIONS;
      const obj2 = { name: null, type: null, guild_id: null, team_id: null };
      obj2[0] = closure_1_0;
      obj2[1] = dependencyMap;
      obj2[2] = closure_1_1;
      obj2[3] = c3;
      obj1[1] = obj2;
      obj1[2] = closure_1_0(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = arg1.body;
      let tmp8 = null != closure_1;
      if (tmp8) {
        tmp8 = null != dependencyMap;
      }
      if (tmp8) {
        const obj = closure_1_1(709);
        const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null };
        obj5[1] = body;
        obj.dispatch(obj5);
      }
      return closure_1_0;
    })();
  },
  getApplicationsForGuild(closure_0, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const includeTeam = obj.includeTeam;
    closure_2 = Object.assign(obj, Object.create(null));
    return callback(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, query: null, rejectWithError: null };
      obj1[0] = closure_1_7.GUILD_APPLICATIONS(closure_1_0);
      const obj2 = {};
      const merged = Object.assign(dependencyMap);
      obj2.include_team = closure_1_1;
      obj1[1] = obj2;
      obj1[2] = closure_1_0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = arg1.body;
      const obj = closure_1_1(709);
      const obj5 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body;
    })();
  },
  transferApplication(arg0) {
    ({ applicationId: require, teamId: importDefault } = arg0);
    return callback(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_7.APPLICATION_OWNER_TRANSFER(closure_1_0);
      const obj2 = { team_id: null };
      obj2[0] = closure_1_1;
      obj1[1] = obj2;
      obj1[2] = closure_1_0(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = arg1.body;
      const obj = closure_1_1(709);
      const obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body;
    })();
  },
  fetchApplications(arg0) {
    closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              closure_1 = tmp3;
              let found = tmp5;
              closure_1 = undefined;
              let body;
              c3 = undefined;
              c4 = undefined;
              found = closure_1_0;
              let arr = closure_1_0;
              if (!closure_1_1) {
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
                let obj3 = closure_1_1(closure_1_2[5]);
                obj1 = { type: "APPLICATIONS_FETCH", applicationIds: null };
                obj1[1] = arr;
                obj3.dispatch(obj1);
                c3 = 1;
                const HTTP = closure_1_0(closure_1_2[6]).HTTP;
                const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
                obj2[0] = closure_1_7.APPLICATIONS_PUBLIC;
                const _URLSearchParams = URLSearchParams;
                const str = new URLSearchParams(arr.map((arg0) => {
                  const items = ["application_ids", arg0];
                  return items;
                }));
                obj2[1] = str.toString();
                obj2[3] = closure_1_0(closure_1_2[6]).rejectWithMigratedError();
                c4 = 2;
                c5 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              } else {
                c5 = 3;
              }
              arr2 = closure_1_0;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            const status = body;
            if (429 !== status.status) {
              obj1 = closure_1_1(closure_1_2[5]);
              const obj4 = { type: "APPLICATIONS_FETCH_FAIL", applicationIds: null };
              obj4[1] = found;
              obj1.dispatch(obj4);
            }
            throw status;
          } else if (arg0 === 1) {
            c5 = 3;
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
            closure_1_1(closure_1_2[5]).dispatch(obj5);
            const obj11 = closure_1_1(closure_1_2[5]);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp32) {
          body = tmp32;
          if (tmp4 === c3) {
            c5 = tmp2;
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
let result = require("set").fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  const _require = arg0;
  const tmp = fetchStore(arg0);
  const data = tmp.data;
  error = tmp.error;
  const obj = {
    app: _require(589).useStateFromStores(items, () => {
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