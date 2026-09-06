// discord_app/modules/applications/ApplicationActionCreators.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationDirectoryApplicationsStore from "../global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import ApplicationStore from "ApplicationStore.tsx";

const require = fn;
function fetchApplication() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _fetchApplication(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = false;
          }
          closure_131_1 = flag;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          const obj2 = { type: "APPLICATION_FETCH", applicationId: closure_131_0 };
          closure_132_1(closure_132_2[5]).dispatch(obj2);
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[6]).HTTP;
          const request = {
            url: closure_132_7.APPLICATION_PUBLIC(closure_131_0),
            query: null,
            oldFormErrors: true,
            signal: null,
            rejectWithError: null,
          };
          const obj3 = { with_guild: closure_131_1 };
          request.query = obj3;
          request.signal = closure_131_2;
          const obj11 = closure_132_1(closure_132_2[5]);
          request.rejectWithError = closure_132_0(closure_132_2[6]).rejectWithMigratedError();
          c7 = 3;
          c8 = 1;
          let obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_4 = closure_5;
        obj4 = closure_132_1(closure_132_2[5]);
        const obj5 = { type: "APPLICATION_FETCH_FAIL", applicationId: closure_131_0 };
        obj4.dispatch(obj5);
        throw closure_131_4;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_3 = value;
        obj = closure_132_1(closure_132_2[5]);
        const obj7 = { type: "APPLICATION_FETCH_SUCCESS", application: closure_131_3.body, isHydrated: true };
        obj.dispatch(obj7);
        c6 = 0;
        c8 = 3;
        const obj8 = { value: closure_131_3.body, done: true };
        return obj8;
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
};
const Constants = fn(1074);
({ Endpoints: closure_7, NOOP: closure_8 } = Constants);
let obj = {
  createApplication(arg0) {
    ({ name: require, guildId: importDefault, type: dependencyMap, teamId: asyncGeneratorStep } = arg0);
    return (async () => {
      const HTTP = tmp5(1272).HTTP;
      const request = {
        url: constants.APPLICATIONS,
        body: { name, type, guild_id, team_id },
        rejectWithError: tmp5(1272).rejectWithMigratedError(),
      };
      await HTTP.post(request);
      const body = value.body;
      let tmp8 = null != closure_129_1;
      if (tmp8) {
        tmp8 = null != closure_129_2;
      }
      if (tmp8) {
        tmp2(573).dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: body });
        tmp2(573);
      }
      return body;
    })();
  },
  getApplicationsForGuild(arg0, arg1) {
    closure_0 = arg0;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const includeTeam = obj.includeTeam;
    closure_2 = Object.assign(obj, Object.assign({ includeTeam: 0 }));
    return (async () => {
      const HTTP = tmp5(1272).HTTP;
      const request = { url: closure_1_7.GUILD_APPLICATIONS(tmp5), query: null, rejectWithError: null };
      const obj1 = {};
      const merged = Object.assign(closure_2);
      obj1.include_team = includeTeam;
      request.query = obj1;
      request.rejectWithError = tmp5(1272).rejectWithMigratedError();
      await HTTP.get(request);
      const body = value.body;
      tmp2(573).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: body });
      return body;
    })();
  },
  getEmbeddedApplicationsForGuild(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      const surface = tmp2;
      const HTTP = tmp5(channel_id[6]).HTTP;
      const request = {
        url: closure_1_7.GUILD_EMBEDDED_APPLICATIONS(tmp5),
        query: { channel_id, surface },
        rejectWithError: tmp5(channel_id[6]).rejectWithMigratedError(),
      };
      await HTTP.get(request);
      const items = value.body.items;
      surface(channel_id[5]).dispatch({
        type: "GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS",
        guildId: closure_129_0,
        surface: closure_129_1,
        items,
      });
      return items;
    })();
  },
  transferApplication(arg0) {
    ({ applicationId: require, teamId: importDefault } = arg0);
    return (async () => {
      const HTTP = tmp5(1272).HTTP;
      const request = {
        url: closure_1_7.APPLICATION_OWNER_TRANSFER(_require),
        body: { team_id },
        rejectWithError: tmp5(1272).rejectWithMigratedError(),
      };
      await HTTP.post(request);
      const body = value.body;
      tmp2(573).dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: body });
      return body;
    })();
  },
  fetchApplications(arg0) {
    closure_0 = arg0;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
              closure_128_1 = undefined;
              let body;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              closure_128_0 = tmp5;
              let arr = tmp5;
              if (!flag) {
                const found = tmp5.filter((item) => {
                  const tmp = null != application.getApplication(item) && application.isHydrated(item);
                  let tmp2 = !tmp;
                  if (!tmp) {
                    tmp2 = !application.isFetchingApplication(item);
                  }
                  if (tmp2) {
                    tmp2 = !application.didFetchingApplicationFail(item);
                  }
                  if (tmp2) {
                    tmp2 = item.length > 0;
                  }
                  return tmp2;
                });
                closure_128_0 = found;
                arr = found;
              }
              if (arr.length > 0) {
                let obj3 = tmp3(tmp32[5]);
                let obj1 = { type: "APPLICATIONS_FETCH", applicationIds: arr };
                obj3.dispatch(obj1);
                c3 = 1;
                const HTTP = tmp5(tmp32[6]).HTTP;
                const request = {
                  url: constants.APPLICATIONS_PUBLIC,
                  query: null,
                  oldFormErrors: true,
                  rejectWithError: null,
                };
                const _URLSearchParams = URLSearchParams;
                const str = new URLSearchParams(
                  arr.map((item) => {
                    const items = ["application_ids", item];
                    return items;
                  }),
                );
                request.query = str.toString();
                request.rejectWithError = tmp5(tmp32[6]).rejectWithMigratedError();
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.get(request), done: false };
                return obj2;
              } else {
                c5 = 3;
              }
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5 = tmp32;
            if (429 !== closure_128_5.status) {
              obj1 = tmp3(tmp32[5]);
              obj3 = { type: "APPLICATIONS_FETCH_FAIL", applicationIds: closure_128_0 };
              obj1.dispatch(obj3);
            }
            throw closure_128_5;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_1 = value;
            c3 = 0;
            body = closure_128_1.body;
            const _Set = Set;
            const set = new Set(body.map((id) => id.id));
            closure_128_3 = set;
            closure_128_4 = closure_128_0.filter((item) => !set.has(item));
            const obj4 = {
              type: "APPLICATIONS_FETCH_SUCCESS",
              applications: closure_128_1.body,
              unknownApplicationIds: closure_128_4,
              isHydrated: true,
            };
            tmp3(tmp32[5]).dispatch(obj4);
            const obj11 = tmp3(tmp32[5]);
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp32) {
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
  fetchApplication,
};
const initialize = fn(504);
obj = {
  getQueryId: Constants.QueryIds.APPLICATIONS,
  get(item) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = null;
    if (null != item) {
      if (flag) {
        let application = ApplicationStore.getApplication(item);
        if (application == null) {
          application = null;
        }
        let tmp3 = application;
      } else {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  },
  load(arg0) {
    if (null != arg0) {
      let nextPromise = fetchApplication(arg0, false).then(React6);
      const promise = fetchApplication(arg0, false);
    } else {
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  },
  getIsLoading(id) {
    let result = null != id;
    if (result) {
      result = ApplicationStore.isFetchingApplication(id);
    }
    return result;
  },
};
const fetchStore = initialize.createFetchStore(ApplicationStore, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  _require = arg0;
  const tmp = fetchStore(arg0);
  const data = tmp.data;
  const error = tmp.error;
  const obj = { app: null, isLoading: tmp.isLoading, error };
  const items = [ApplicationDirectoryApplicationsStore];
  const items1 = [arg0, data];
  obj.app = require("initialize").useStateFromStores(
    items,
    () => {
      if (null == data) {
        const application = ApplicationDirectoryApplicationsStore.getApplication(closure_0);
        if (null != application) {
          return ApplicationRecord.createFromServer(application);
        }
      }
      return data;
    },
    items1,
  );
  return obj;
};
