// === Module 9744: importDefaultResult1 ===

// Module 9744 (importDefaultResult1)
import setDefault from "set" /* 1090 */;
import closure_4 from "noop" /* 19 */;
import importDefaultResult1 from "addApplication" /* 4788 */;
import initialize from "initialize" /* 504 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;

const require = arg1;
initialize = {
  getQueryId: require("ME").QueryIds.GUILD_EMBEDDED_APPLICATIONS,
  failureStaleAfter: setDefault.Seconds.MINUTE,
  get(arg0, arg1) {
    const guildEmbeddedApplications = importDefaultResult1.getGuildEmbeddedApplications(arg1, arg0);
    let found = null;
    if (null != guildEmbeddedApplications) {
      const mapped = guildEmbeddedApplications.map((applicationId) => {
        application = application.getApplication(applicationId.applicationId);
        let tmp2 = null;
        if (null != application) {
          const obj = { application: null, status: null };
          obj[0] = application;
          obj[1] = applicationId.status;
          tmp2 = obj;
        }
        return tmp2;
      });
      found = mapped.filter(require(1369) /* isDiscordFrontendDevelopment */.isNotNullish);
    }
    return found;
  },
  load: null
};
let closure_3 = importDefaultResult((arg0, arg1, arg2) => {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c4 = 0;
  c3 = 0;
  return (function*(arg0, arg1, arg2) {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null != callback) {
            obj1 = callback(table[7]);
            c4 = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.getEmbeddedApplicationsForGuild(tmp6, tmp5, tmp7);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c3 = tmp;
        throw tmp11;
      }
    }
  })();
});
initialize[3] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_6 = initialize.createFetchStore(importDefaultResult1, initialize);
const result = require("set").fileFinishedImporting("modules/applications/useGuildEmbeddedApplications.tsx");

export const useGuildEmbeddedApplications = function useGuildEmbeddedApplications(APP_CHANNEL, guildId, channelId) {
  let tmp = callback(APP_CHANNEL, guildId, channelId);
  const data = tmp.data;
  error = tmp.error;
  const isLoading = tmp.isLoading;
  const refetch = tmp.refetch;
  React = React.useRef(false);
  const items = [data, isLoading, error, refetch];
  const effect = React.useEffect(() => {
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
        tmp.current = false;
        refetch();
      }
      tmp = ref;
    }
  }, items);
  return tmp;
};