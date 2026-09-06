// discord_app/modules/applications/useGuildEmbeddedApplications.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import ApplicationActionCreatorsDefault from "ApplicationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStore from "ApplicationStore.tsx";

const require = fn;
fn(504);
const initialize = {
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
  load: null,
};
let closure_3 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null != closure_1) {
          let obj1 = ApplicationActionCreatorsDefault;
          c4 = 1;
          c3 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.getEmbeddedApplicationsForGuild(tmp6, tmp5, tmp7);
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
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
initialize.load = function () {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_6 = initialize.createFetchStore(ApplicationStore, initialize);
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
