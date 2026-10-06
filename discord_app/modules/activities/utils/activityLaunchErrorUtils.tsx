// === Module 9072: activityLaunchErrorUtils ===

// Module 9072 (activityLaunchErrorUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl12 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import InteractionCallbackErrorDefault from "InteractionCallbackError" /* 5125 */;
import InteractionUtils from "InteractionUtils" /* 7810 */;
import DeveloperActivityShelfStore2 from "DeveloperActivityShelfStore" /* 8546 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import EmbeddedActivityClientErrorDefault from "EmbeddedActivityClientError" /* 9032 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import LocationMetadataStore from "LocationMetadataStore" /* 9073 */;
import size from "module_2" /* 2 */;

let c5, c6, fetchState;

let obj = function _getActivityLaunchErrorInfo() {
  let ClientError;
  let constants2;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let code;
    let detailCode;
    let obj13;
    let obj6;
    let obj8;
    let reason;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let message;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            let closure_3 = tmp;
            let ApiError;
            detailCode = undefined;
            reason = undefined;
            let children;
            const intl9 = intl12.intl;
            message = intl9.string(intl12.t["IOy+I5"]);
            if (closure_0 instanceof EmbeddedActivityClientErrorDefault) {
              ApiError = ClientError.ClientError;
              reason = closure_0.reason;
              fetchState = fetchState.getFetchState();
              const DeveloperMode = UserSettings.DeveloperMode;
              const setting = DeveloperMode.getSetting() && fetchState !== constants.LOADED;
              if (setting) {
                c5 = 1;
                c6 = 1;
                const obj5 = { value: obj8.fetchDeveloperApplications(), done: false };
                obj8 = EmbeddedActivitiesActionCreators;
                return obj5;
              }
            } else if (closure_0 instanceof InteractionCallbackErrorDefault) {
              ApiError = ClientError.CallbackError;
              reason = closure_0.reason;
              const obj3 = InteractionUtils;
              const result = obj3.interactionCallbackErrorReason(closure_0.reason, closure_1);
              let closure_2 = result;
              if (result == null) {
                closure_2 = message;
              }
              message = closure_2;
            } else {
              ApiError = ClientError.ApiError;
              ({ status: detailCode, code: reason, code } = closure_0);
              if (constants2.INVALID_ACTIVITY_LAUNCH_NO_ACCESS === code) {
                const intl6 = intl12.intl;
                message = intl6.string(intl12.t.GyzcrS);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER === code) {
                const intl5 = intl12.intl;
                message = intl5.string(intl12.t.zxv7EF);
              } else if (constants2.INVALID_PERMISSIONS === code) {
                const intl4 = intl12.intl;
                message = intl4.string(intl12.t.hHGrWz);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL === code) {
                const intl3 = intl12.intl;
                message = intl3.string(intl12.t.j29zCr);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_AGE_GATED === code) {
                const intl2 = intl12.intl;
                message = intl2.string(intl12.t["4WuFRE"]);
              } else if (constants2.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE === code) {
                const intl = intl12.intl;
                message = intl.string(intl12.t.RvkXdb);
              } else if (constants2.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM === code) {
                const intl10 = intl12.intl;
                message = intl10.string(intl12.t.uGDCcw);
              }
            }
            if (ApiError !== closure_132_9.CallbackError) {
              const obj7 = { message, errorType: ApiError, errorStatus: detailCode, errorCode: reason };
              c6 = 3;
              const obj9 = { value: obj7, done: true };
              return obj9;
            }
            if (null == closure_132_4.getCountryCode()) {
              c5 = 2;
              c6 = 1;
              const obj10 = { value: obj6.getLocationMetadata(), done: false };
              obj6 = closure_132_1(closure_132_2[12]);
              return obj10;
            } else {
              const countryCode = closure_132_4.getCountryCode();
              let alpha2;
              if (countryCode != null) {
                alpha2 = countryCode.alpha2;
              }
              if ("BR" === alpha2) {
                const obj12 = closure_132_1(closure_132_2[13]);
                children = obj12.getArticleURL("42704051358359");
                const intl11 = closure_132_0(closure_132_2[6]).intl;
                const format = intl11.format;
                const obj11 = { supportArticleUrl: closure_132_8(closure_132_1(closure_132_2[14]), obj13, "supportArticleUrl") };
                const GJ27pD = closure_132_0(closure_132_2[6]).t.GJ27pD;
                obj13 = { href: children, children };
                message = format(GJ27pD, obj11);
              }
            }
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj14 = { value, done: true };
            return obj14;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
        reason = closure_0.reason;
        if (closure_132_1(closure_132_2[7]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND === reason) {
          if (closure_132_5.inDevModeForApplication(closure_1)) {
            const intl8 = closure_132_0(closure_132_2[6]).intl;
            message = intl8.string(closure_132_0(closure_132_2[6]).t.hXRXfz);
          }
        } else if (closure_132_1(closure_132_2[7]).Reasons.INVALID_CHANNEL === reason) {
          const intl7 = closure_132_0(closure_132_2[6]).intl;
          message = intl7.string(closure_132_0(closure_132_2[6]).t.j29zCr);
        } else if (closure_132_1(closure_132_2[7]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED === reason) {
          detailCode = closure_0.detailCode;
        }
      } catch (tmp101) {
        c6 = 3;
        throw tmp101;
      }
    }
  });
  return obj(...arguments);
};
const DevShelfFetchState = DeveloperActivityShelfStore2.DevShelfFetchState;
const AbortCodes = Constants.AbortCodes;
const jsx = Fragment.jsx;
obj = { ClientError: 0, [0]: "ClientError", CallbackError: 1, [1]: "CallbackError", ApiError: 2, [2]: "ApiError" };
let result = size.fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export const ActivityLaunchFailErrorType = obj;
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo() {
  return obj(...arguments);
};