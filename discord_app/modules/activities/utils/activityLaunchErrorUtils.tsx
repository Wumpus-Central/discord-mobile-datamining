// === Module 10678: _getActivityLaunchErrorInfo ===

// Module 10678 (_getActivityLaunchErrorInfo)
import explicitContentFromProto from "explicitContentFromProto";
import initialize from "initialize";
import { DevShelfFetchState } from "initialize";
import { AbortCodes } from "ME";

const require = arg1;
function _getActivityLaunchErrorInfo() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1) {
      let code;
      let detailCode;
      let reason;
      if (constants2 === 2) {
        constants2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          constants2 = 2;
          if (0 === closure_5) {
            if (arg0 === 1) {
              constants2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              reason = tmp5;
              detailCode = tmp2;
              let ApiError;
              detailCode = undefined;
              reason = undefined;
              closure_5 = undefined;
              const intl9 = lib(outer1_2[3]).intl;
              closure_5 = intl9.string(lib(outer1_2[3]).t["IOy+I5"]);
              if (lib instanceof callback(outer1_2[4])) {
                ApiError = outer1_7.ClientError;
                reason = tmp84.reason;
                const fetchState = outer1_4.getFetchState();
                const DeveloperMode = lib(outer1_2[5]).DeveloperMode;
                let setting = DeveloperMode.getSetting();
                if (setting) {
                  setting = fetchState !== constants.LOADED;
                }
                if (setting) {
                  closure_5 = 1;
                  constants2 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = lib(outer1_2[6]).fetchDeveloperApplications();
                  return obj1;
                }
              } else if (tmp84 instanceof callback(outer1_2[7])) {
                ApiError = tmp8.CallbackError;
                reason = tmp84.reason;
                obj1 = lib(outer1_2[8]);
                const result = obj1.interactionCallbackErrorReason(tmp84.reason, tmp85);
                ApiError = result;
                if (result == null) {
                  ApiError = closure_5;
                }
                closure_5 = ApiError;
              } else {
                ApiError = tmp8.ApiError;
                ({ status: detailCode, code: reason, code } = tmp84);
                if (constants2.INVALID_ACTIVITY_LAUNCH_NO_ACCESS === code) {
                  const intl6 = lib(outer1_2[3]).intl;
                  closure_5 = intl6.string(lib(outer1_2[3]).t.GyzcrS);
                } else if (tmp9.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER === code) {
                  const intl5 = lib(outer1_2[3]).intl;
                  closure_5 = intl5.string(lib(outer1_2[3]).t.zxv7EF);
                } else if (tmp9.INVALID_PERMISSIONS === code) {
                  const intl4 = lib(outer1_2[3]).intl;
                  closure_5 = intl4.string(lib(outer1_2[3]).t.hHGrWz);
                } else if (tmp9.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL === code) {
                  const intl3 = lib(outer1_2[3]).intl;
                  closure_5 = intl3.string(lib(outer1_2[3]).t.j29zCr);
                } else {
                  if (tmp9.INVALID_ACTIVITY_LAUNCH_AGE_GATED === code) {
                    const intl2 = lib(outer1_2[3]).intl;
                    closure_5 = intl2.string(lib(outer1_2[3]).t["4WuFRE"]);
                  } else if (tmp9.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE !== code) {
                    if (tmp9.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM === code) {
                      const intl10 = lib(outer1_2[3]).intl;
                      closure_5 = intl10.string(lib(outer1_2[3]).t.uGDCcw);
                    }
                  }
                  const intl = lib(outer1_2[3]).intl;
                  closure_5 = intl.string(lib(outer1_2[3]).t.RvkXdb);
                }
              }
              const obj2 = { message: null, errorType: null, errorStatus: null, errorCode: null };
              obj2[0] = closure_5;
              obj2[1] = ApiError;
              obj2[2] = detailCode;
              obj2[3] = reason;
              constants2 = 3;
              tmp85 = callback;
            }
          } else if (arg0 === 1) {
            constants2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          reason = lib.reason;
          if (callback(ApiError[4]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND === reason) {
            if (reason.inDevModeForApplication(callback)) {
              const intl8 = lib(ApiError[3]).intl;
              closure_5 = intl8.string(lib(ApiError[3]).t.hXRXfz);
            }
          } else if (callback(ApiError[4]).Reasons.INVALID_CHANNEL === reason) {
            const intl7 = lib(ApiError[3]).intl;
            closure_5 = intl7.string(lib(ApiError[3]).t.j29zCr);
          } else if (callback(ApiError[4]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED === reason) {
            detailCode = lib.detailCode;
          }
        } catch (tmp78) {
          constants2 = tmp;
          throw tmp78;
        }
      }
    })();
  });
  const _getActivityLaunchErrorInfo = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { ClientError: 0, [0]: "ClientError", CallbackError: 1, [1]: "CallbackError", ApiError: 2, [2]: "ApiError" };
let result = require("ME").fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export const ActivityLaunchFailErrorType = obj;
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo(c5, applicationId) {
  const self = this;
  const apply = _getActivityLaunchErrorInfo.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};