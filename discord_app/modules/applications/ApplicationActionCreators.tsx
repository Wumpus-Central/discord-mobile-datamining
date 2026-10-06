// === Module 6665: ApplicationActionCreators ===

// Module 6665 (ApplicationActionCreators)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationDirectoryApplicationsStore from "ApplicationDirectoryApplicationsStore" /* 6666 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import Constants from "Constants" /* 1085 */;
import get_initialized from "get initialized" /* 504 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, c7, c8, closure_5, set;

let metroImportAll;
let metroImportDefault;
function fetchApplication() {
  return obj(...arguments);
}
let obj = function _fetchApplication() {
  obj = _asyncToGenerator(async (applicationId, arg1) => {
    let obj15;
    let obj7;
    let closure_1 = arg1;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (applicationId === 1) {
        throw value;
      } else if (applicationId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let closure_4;
        let closure_3;
        let signal;
        let flag;
        c8 = 2;
        if (0 === c7) {
          if (applicationId === 1) {
            c8 = 3;
            throw value;
          } else if (applicationId === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            closure_3 = tmp4;
            signal = undefined;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            closure_3 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (applicationId === 1) {
            c8 = 3;
            throw value;
          } else if (applicationId === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj6 = { type: "APPLICATION_FETCH", applicationId };
            const obj11 = closure_132_1(closure_132_2[5]);
            obj11.dispatch(obj6);
            c6 = 1;
            const HTTP = closure_132_0(closure_132_2[6]).HTTP;
            const request = { url: closure_132_7.APPLICATION_PUBLIC(applicationId), query: obj7, oldFormErrors: true, signal, rejectWithError: obj15.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = { with_guild: flag };
            obj15 = closure_132_0(closure_132_2[6]);
            c7 = 3;
            c8 = 1;
            const obj8 = { value: get(request), done: false };
            return obj8;
          }
        } else if (2 === c7) {
          c6 = 0;
          closure_4 = closure_5;
          const obj9 = { type: "APPLICATION_FETCH_FAIL", applicationId };
          const obj5 = closure_132_1(closure_132_2[5]);
          obj5.dispatch(obj9);
          throw closure_4;
        } else if (applicationId === 1) {
          c8 = 3;
          throw value;
        } else if (applicationId === 2) {
          c6 = 0;
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_3 = value;
          const obj12 = { type: "APPLICATION_FETCH_SUCCESS", application: closure_3.body, isHydrated: true };
          obj = closure_132_1(closure_132_2[5]);
          obj.dispatch(obj12);
          c6 = 0;
          c8 = 3;
          const obj13 = { value: closure_3.body, done: true };
          return obj13;
        }
      } catch (tmp23) {
        closure_5 = tmp23;
        if (0 === c6) {
          c8 = 3;
          throw tmp23;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: metroImportDefault, NOOP: metroImportAll } = Constants);
obj = {
  createApplication(arg0) {
    let guild_id;
    let name;
    let require;
    let team_id;
    let type;
    ({ name: require, guildId: importDefault, type: dependencyMap, teamId: _asyncToGenerator } = arg0);
    return (async () => {
      let c2;
      let c3;
      let closure_0;
      let closure_1;
      let obj10;
      let obj4;
      const HTTP = tmp4(type[6]).HTTP;
      const request = { url: constants.APPLICATIONS, body: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      obj4 = { name: require, type: dependencyMap, guild_id: importDefault, team_id: _asyncToGenerator };
      const post = HTTP.post;
      obj10 = tmp4(type[6]);
      await post(request);
      const body = value.body;
      const tmp7 = null != closure_129_1 && null != closure_129_2;
      if (tmp7) {
        const obj7 = { type: "APPLICATION_FETCH_SUCCESS", application: body };
        obj = tmp(type[5]);
        obj.dispatch(obj7);
      }
      return body;
    })();
  },
  getApplicationsForGuild(arg0, arg1) {
    let closure_0 = arg0;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const includeTeam = obj.includeTeam;
    let closure_2 = Object.assign(obj, Object.assign({ includeTeam: 0 }));
    return (async () => {
      let c3;
      let closure_1;
      let obj10;
      let obj4;
      const HTTP = tmp4(c2[6]).HTTP;
      const request = { url: closure_1_7.GUILD_APPLICATIONS(tmp4), query: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = { include_team: includeTeam };
      const merged = Object.assign(closure_2);
      obj10 = tmp4(c2[6]);
      await get(request);
      const body = value.body;
      const obj7 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: body };
      obj = tmp(c2[5]);
      obj.dispatch(obj7);
      return body;
    })();
  },
  getEmbeddedApplicationsForGuild(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let c3;
      let obj10;
      let obj4;
      const surface = tmp;
      const HTTP = tmp4(channel_id[6]).HTTP;
      const request = { url: closure_1_7.GUILD_EMBEDDED_APPLICATIONS(tmp4), query: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = { channel_id, surface };
      obj10 = tmp4(channel_id[6]);
      await get(request);
      const items = value.body.items;
      const obj7 = { type: "GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS", guildId: closure_129_0, surface: closure_129_1, items };
      obj = surface(channel_id[5]);
      obj.dispatch(obj7);
      return items;
    })();
  },
  transferApplication(arg0) {
    let require;
    let team_id;
    ({ applicationId: require, teamId: importDefault } = arg0);
    return (async () => {
      let c3;
      let closure_0;
      let closure_1;
      let obj10;
      let obj4;
      const HTTP = tmp4(c2[6]).HTTP;
      const request = { url: closure_1_7.APPLICATION_OWNER_TRANSFER(_require), body: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      const post = HTTP.post;
      obj4 = { team_id: importDefault };
      obj10 = tmp4(c2[6]);
      await post(request);
      const body = value.body;
      const obj7 = { type: "APPLICATION_FETCH_SUCCESS", application: body };
      obj = tmp(c2[5]);
      obj.dispatch(obj7);
      return body;
    })();
  },
  fetchApplications(arg0) {
    let closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return (async function() {
      let closure_1;
      let obj7;
      let str;
      let value;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let tmp;
          let body;
          let unknownApplicationIds;
          let found;
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
              tmp = undefined;
              body = undefined;
              set = undefined;
              unknownApplicationIds = undefined;
              found = value;
              let arr = value;
              if (!flag) {
                found = value.filter((item) => {
                  const tmp = null != application.getApplication(item) && application.isHydrated(item);
                  const tmp2 = !tmp && !application.isFetchingApplication(item) && !application.didFetchingApplicationFail(item) && item.length > 0;
                  return tmp2;
                });
                arr = found;
              }
              if (arr.length > 0) {
                const obj6 = { type: "APPLICATIONS_FETCH", applicationIds: arr };
                const obj4 = tmp(closure_2[5]);
                obj4.dispatch(obj6);
                c3 = 1;
                const HTTP = value(closure_2[6]).HTTP;
                const request = { url: constants.APPLICATIONS_PUBLIC, query: str.toString(), oldFormErrors: true, rejectWithError: obj7.rejectWithMigratedError() };
                const _URLSearchParams = URLSearchParams;
                const get = HTTP.get;
                const self = this;
                const self2 = this;
                str = new URLSearchParams(arr.map((item) => {
                  const items = ["application_ids", item];
                  return items;
                }));
                obj7 = value(closure_2[6]);
                value = get(request);
                c4 = 2;
                c5 = 1;
                const obj8 = { value, done: false };
                return obj8;
              }
            }
          } else if (1 === tmp4) {
            value = closure_2;
            c3 = 0;
            const status = closure_2;
            if (429 !== status.status) {
              const obj9 = { type: "APPLICATIONS_FETCH_FAIL", applicationIds: found };
              const obj2 = tmp(closure_2[5]);
              obj2.dispatch(obj9);
            }
            throw status;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            c3 = 0;
            body = tmp.body;
            const _Set = Set;
            const self3 = this;
            const self4 = this;
            set = new Set(body.map((id) => id.id));
            unknownApplicationIds = found.filter((item) => !set.has(item));
            const obj10 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: tmp.body, unknownApplicationIds, isHydrated: true };
            const obj11 = tmp(closure_2[5]);
            obj11.dispatch(obj10);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  fetchApplication
};
const QueryIds = Constants.QueryIds;
let obj2 = {
  getQueryId: QueryIds.APPLICATIONS,
  get(applicationId) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = null;
    if (null != applicationId) {
      let tmp3;
      if (flag) {
        let application = ApplicationStore.getApplication(applicationId);
        if (application == null) {
          application = null;
        }
        tmp3 = application;
      } else {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  load(arg0) {
    let nextPromise;
    if (null != arg0) {
      const promise = fetchApplication(arg0, false);
      nextPromise = promise.then(metroImportAll);
    } else {
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  },
  getIsLoading(application_id) {
    const result = null != application_id && ApplicationStore.isFetchingApplication(application_id);
    return result;
  }
};
const fetchStore = get_initialized.createFetchStore(ApplicationStore, obj2);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let error;
  let first;
  let isLoading;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(9);
  const tmp4 = fetchStore(arg0);
  const data = tmp4.data;
  ({ isLoading, error } = tmp4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationDirectoryApplicationsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === data) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === isLoading) {
        let tmp11;
        if (cResult[7] === error) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj2 = { app: stateFromStores, isLoading, error };
    cResult[5] = stateFromStores;
    cResult[6] = isLoading;
    cResult[7] = error;
    cResult[8] = obj2;
    tmp11 = obj2;
  }
  const fn = function p() {
    if (null == data) {
      const application = ApplicationDirectoryApplicationsStore.getApplication(closure_0);
      if (null != application) {
        return ApplicationRecord.createFromServer(application);
      }
    }
    return data;
  };
  const items1 = [arg0, data];
  cResult[1] = arg0;
  cResult[2] = data;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0) => {
  let closure_0;
  let isLoading;
  let items;
  let items1;
  let obj2;
  _require = arg0;
  const tmp = fetchStore(arg0);
  const data = tmp.data;
  const error = tmp.error;
  obj = {
    app: obj2.useStateFromStores(items, () => {
      if (null == data) {
        const application = ApplicationDirectoryApplicationsStore.getApplication(closure_0);
        if (null != application) {
          return ApplicationRecord.createFromServer(application);
        }
      }
      return data;
    }, items1),
    isLoading,
    error
  };
  isLoading = tmp.isLoading;
  items = [ApplicationDirectoryApplicationsStore];
  items1 = [arg0, data];
  obj2 = require("get initialized");
  return obj;
});
let result = size.fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = tmp5;