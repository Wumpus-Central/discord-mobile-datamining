// === Module 9221: useGuildEmbeddedApplications ===

// Module 9221 (useGuildEmbeddedApplications)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import get_initialized from "get initialized" /* 504 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let application, c3, c4, status;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GUILD_EMBEDDED_APPLICATIONS,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  get(arg0, arg1) {
    const getGuildEmbeddedApplications = ApplicationStore.getGuildEmbeddedApplications;
    const guildEmbeddedApplications = getGuildEmbeddedApplications(arg1, arg0);
    let found = null;
    if (null != guildEmbeddedApplications) {
      const mapped = guildEmbeddedApplications.map((status) => {
        status = status.status;
        application = application.getApplication(status.applicationId);
        let tmp2 = null;
        if (null != application) {
          tmp2 = { application, status };
          const obj = { application, status };
        }
        return tmp2;
      });
      found = mapped.filter(require("GlobalUtils").isNotNullish);
    }
    return found;
  },
  load: function() {
    return closure_3(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_3 = _asyncToGenerator(async (arg0, arg1, arg2) => {
  let closure_0;
  let closure_2;
  let obj2;
  let closure_1 = arg1;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != closure_1) {
          c4 = 1;
          c3 = 1;
          const obj5 = { value: obj2.getEmbeddedApplicationsForGuild(tmp5, tmp4, tmp6), done: false };
          obj2 = ApplicationActionCreatorsDefault;
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp10) {
      c3 = 3;
      throw tmp10;
    }
  }
});
let closure_6 = createFetchStore(ApplicationStore, obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const obj = react2;
  const cResult = obj.c(6);
  const tmp2 = closure_6(arg0, arg1, arg2);
  const data = tmp2.data;
  const error = tmp2.error;
  const isLoading = tmp2.isLoading;
  const refetch = tmp2.refetch;
  let closure_4 = react.useRef(false);
  if (cResult[0] === data) {
    if (cResult[1] === error) {
      if (cResult[2] === isLoading) {
        let tmp3;
        let tmp4;
        if (cResult[3] === refetch) {
          tmp3 = cResult[4];
          tmp4 = cResult[5];
        }
        const effect = react.useEffect(tmp3, tmp4);
        return tmp2;
      }
    }
  }
  const fn = function c() {
    if (null != data) {
      ref.current = true;
    } else {
      const current = ref.current && !isLoading && null == error;
      if (current) {
        ref.current = false;
        refetch();
      }
    }
  };
  const items = [data, isLoading, error, refetch];
  cResult[0] = data;
  cResult[1] = error;
  cResult[2] = isLoading;
  cResult[3] = refetch;
  cResult[4] = fn;
  cResult[5] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0, arg1, arg2) => {
  const tmp = closure_6(arg0, arg1, arg2);
  const data = tmp.data;
  const error = tmp.error;
  const isLoading = tmp.isLoading;
  const refetch = tmp.refetch;
  let closure_4 = react.useRef(false);
  const items = [data, isLoading, error, refetch];
  const effect = react.useEffect(() => {
    if (null != data) {
      ref.current = true;
    } else {
      const current = ref.current && !isLoading && null == error;
      if (current) {
        ref.current = false;
        refetch();
      }
    }
  }, items);
  return tmp;
});
const result = size.fileFinishedImporting("modules/applications/useGuildEmbeddedApplications.tsx");

export const useGuildEmbeddedApplications = tmp5;