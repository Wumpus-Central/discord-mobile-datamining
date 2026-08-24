// === Module 8772: _getCachedOrFetchActivityApplicationForLaunch ===

// Module 8772 (_getCachedOrFetchActivityApplicationForLaunch)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "addApplication" /* 4482 */;
import closure_5 from "createExecutable" /* 4483 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
function _getCachedOrFetchActivityApplicationForLaunch() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c5 = 2;
          if (0 === application) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let applications = tmp3;
              let activityConfigs = tmp2;
              let lib;
              activityConfigs = undefined;
              applications = undefined;
              application = undefined;
              c5 = undefined;
              application = application.getApplication(callback);
              if (closure_1_8(application)) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = application;
                return obj1;
              } else {
                const channel = closure_1_6.getChannel(tmp42);
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                let obj6 = callback(closure_1_2[4]);
                let obj2 = { guildId: null };
                obj2[0] = guild_id;
                application = 1;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj6.fetchShelf(obj2);
                return obj3;
              }
              tmp42 = lib;
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              lib = arg1;
              activityConfigs = lib.activityConfigs;
              applications = lib.applications;
              const obj5 = { applicationId: null, activityConfigs: null, applications: null };
              obj5[0] = callback;
              obj5[1] = activityConfigs;
              obj5[2] = applications;
              application = lib(activityConfigs[5])(obj5);
              let application1;
              if (application != null) {
                application1 = application.application;
              }
              if (tmp39(application1)) {
                let application2;
                if (application != null) {
                  application2 = application.application;
                }
                c5 = 3;
                obj6 = { value: null, done: true };
                obj6[0] = application2;
                return obj6;
              } else {
                obj2 = callback(activityConfigs[6]);
                application = 2;
                c5 = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = obj2.fetchApplication(callback);
                return obj7;
              }
              tmp39 = closure_8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            c5 = arg1;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = c5.createFromServer(c5);
            return obj;
          }
        } catch (tmp24) {
          c5 = tmp;
          throw tmp24;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const result = require("set").fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  const self = this;
  const apply = _getCachedOrFetchActivityApplicationForLaunch.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};