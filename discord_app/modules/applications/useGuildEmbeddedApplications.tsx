// === Module 9828: useGuildEmbeddedApplications ===

// Module 9828 (useGuildEmbeddedApplications)
import DurationsDefault from "Durations" /* 1091 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7403 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4983 */;

const require = fn;
const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1074).QueryIds.GUILD_EMBEDDED_APPLICATIONS,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  get(arg0, arg1) {
    const guildEmbeddedApplications = ApplicationStore.getGuildEmbeddedApplications(arg1, arg0);
    let found = null;
    if (null != guildEmbeddedApplications) {
      const mapped = guildEmbeddedApplications.map((applicationId) => {
        application = application.getApplication(applicationId.applicationId);
        let tmp2 = null;
        if (null != application) {
          const obj = { application, status: applicationId.status };
          tmp2 = obj;
        }
        return tmp2;
      });
      found = mapped.filter(require("GlobalUtils").isNotNullish);
    }
    return found;
  },
  load: null
};
let closure_3 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj5 = { value: ApplicationActionCreatorsDefault.getEmbeddedApplicationsForGuild(tmp6, tmp5, tmp7), done: false };
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
      return { value: "HermesInternal", done: null };
    } catch (tmp11) {
      c3 = tmp;
      throw tmp11;
    }
  }
});
obj2.load = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_6 = initialize.createFetchStore(ApplicationStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useGuildEmbeddedApplications.tsx");

export const useGuildEmbeddedApplications = function useGuildEmbeddedApplications(APP_CHANNEL, guildId, channelId) {
  const tmp = closure_6(APP_CHANNEL, guildId, channelId);
  const data = tmp.data;
  const error = tmp.error;
  const isLoading = tmp.isLoading;
  const refetch = tmp.refetch;
  noop.useRef(false);
  const items = [data, isLoading, error, refetch];
  const effect = noop.useEffect(() => {
    if (null != data) {
      ref.current = true;
    } else {
      let current = ref.current;
      if (current) {
        current = !isLoading;
      }
      if (current) {
        current = null == error;
      }
      if (current) {
        ref.current = false;
        refetch();
      }
    }
  }, items);
  return tmp;
};