// discord_app/modules/applications/useGuildEmbeddedApplications.tsx
import c from "../../../_runtime/00576_c.js";
import DurationsDefault from "../../utils/Durations.tsx";
import ApplicationActionCreatorsDefault from "ApplicationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStore from "ApplicationStore.tsx";

require = fn;
const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1085).QueryIds.GUILD_EMBEDDED_APPLICATIONS,
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
          const obj5 = {
            value: ApplicationActionCreatorsDefault.getEmbeddedApplicationsForGuild(tmp6, tmp5, tmp7),
            done: false,
          };
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
    } catch (tmp11) {
      c3 = tmp;
      throw tmp11;
    }
  }
});
obj2.load = function () {
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useGuildEmbeddedApplications.tsx");

export const useGuildEmbeddedApplications = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      const cResult = c.c(6);
      const tmp2 = closure_6(arg0, arg1, arg2);
      const data = tmp2.data;
      const error = tmp2.error;
      const isLoading = tmp2.isLoading;
      const refetch = tmp2.refetch;
      noop.useRef(false);
      if (cResult[0] === data) {
        if (cResult[1] === error) {
          if (cResult[2] === isLoading) {
            if (cResult[3] === refetch) {
              let tmp3 = cResult[4];
              let tmp4 = cResult[5];
            }
            const effect = noop.useEffect(tmp3, tmp4);
            return tmp2;
          }
        }
      }
      const fn = function c() {
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
    }
  : (arg0, arg1, arg2) => {
      const tmp = closure_6(arg0, arg1, arg2);
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
