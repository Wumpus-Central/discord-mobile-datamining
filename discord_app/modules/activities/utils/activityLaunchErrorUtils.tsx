// === Module 10814: activityLaunchErrorUtils ===

// Module 10814 (activityLaunchErrorUtils)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import InteractionCallbackErrorDefault from "InteractionCallbackError" /* 5441 */;
import InteractionUtils from "InteractionUtils" /* 8253 */;
import EmbeddedActivityClientErrorDefault from "EmbeddedActivityClientError" /* 10816 */;
import fetchDeveloperApplications from "fetchDeveloperApplications" /* 10817 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10815 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9065 */;

require = fn;
let closure_10 = async function _getActivityLaunchErrorInfo(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
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
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = _require;
          closure_131_1 = closure_1;
          let ClientError2;
          let detailCode;
          let reason2;
          closure_131_5 = undefined;
          let articleURL;
          const intl9 = util.intl;
          closure_131_5 = intl9.string(util.t["IOy+I5"]);
          if (_require instanceof EmbeddedActivityClientErrorDefault) {
            ClientError2 = ClientError.ClientError;
            reason2 = _require.reason;
            fetchState = fetchState.getFetchState();
            const DeveloperMode = UserSettings.DeveloperMode;
            let setting = DeveloperMode.getSetting();
            if (setting) {
              setting = fetchState !== constants.LOADED;
            }
            if (setting) {
              c5 = 1;
              c6 = 1;
              const obj5 = { value: fetchDeveloperApplications.fetchDeveloperApplications(), done: false };
              return obj5;
            }
          } else if (_require instanceof InteractionCallbackErrorDefault) {
            ClientError2 = ClientError.CallbackError;
            reason2 = _require.reason;
            const result = InteractionUtils.interactionCallbackErrorReason(_require.reason, closure_1);
            closure_2 = result;
            if (result == null) {
              closure_2 = closure_131_5;
            }
            closure_131_5 = closure_2;
          } else {
            ClientError2 = ClientError.ApiError;
            ({ status: closure_131_3, code: closure_131_4, code } = _require);
            if (constants2.INVALID_ACTIVITY_LAUNCH_NO_ACCESS === code) {
              const intl6 = util.intl;
              closure_131_5 = intl6.string(util.t.GyzcrS);
            } else if (constants2.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER === code) {
              const intl5 = util.intl;
              closure_131_5 = intl5.string(util.t.zxv7EF);
            } else if (constants2.INVALID_PERMISSIONS === code) {
              const intl4 = util.intl;
              closure_131_5 = intl4.string(util.t.hHGrWz);
            } else if (constants2.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL === code) {
              const intl3 = util.intl;
              closure_131_5 = intl3.string(util.t.j29zCr);
            } else if (constants2.INVALID_ACTIVITY_LAUNCH_AGE_GATED === code) {
              const intl2 = util.intl;
              closure_131_5 = intl2.string(util.t["4WuFRE"]);
            } else if (constants2.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE === code) {
              const intl = util.intl;
              closure_131_5 = intl.string(util.t.RvkXdb);
            } else if (constants2.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM === code) {
              const intl10 = util.intl;
              closure_131_5 = intl10.string(util.t.uGDCcw);
            }
          }
          if (ClientError2 !== closure_132_9.CallbackError) {
            const obj7 = { message: closure_131_5, errorType: ClientError2, errorStatus: detailCode, errorCode: reason2 };
            c6 = 3;
            const obj9 = { value: obj7, done: true };
            return obj9;
          }
          if (null == closure_132_4.getCountryCode()) {
            c5 = 2;
            c6 = 1;
            const obj10 = { value: closure_132_1(closure_132_2[12]).getLocationMetadata(), done: false };
            return obj10;
          } else {
            const countryCode = closure_132_4.getCountryCode();
            let alpha2;
            if (countryCode != null) {
              alpha2 = countryCode.alpha2;
            }
            if ("BR" === alpha2) {
              articleURL = closure_132_1(closure_132_2[13]).getArticleURL("42704051358359");
              const intl11 = closure_132_0(closure_132_2[6]).intl;
              const obj11 = { supportArticleUrl: null };
              const obj13 = { href: articleURL, children: articleURL };
              obj11.supportArticleUrl = closure_132_8(closure_132_1(closure_132_2[14]), obj13, "supportArticleUrl");
              closure_131_5 = intl11.format(closure_132_0(closure_132_2[6]).t.GJ27pD, obj11);
              const obj12 = closure_132_1(closure_132_2[13]);
            }
          }
        }
      } else if (1 === tmp5) {
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
        const obj = { value, done: true };
        return obj;
      }
      const reason = closure_131_0.reason;
      if (closure_132_1(closure_132_2[7]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND === reason) {
        if (closure_132_5.inDevModeForApplication(closure_131_1)) {
          const intl8 = closure_132_0(closure_132_2[6]).intl;
          closure_131_5 = intl8.string(closure_132_0(closure_132_2[6]).t.hXRXfz);
        }
      } else if (closure_132_1(closure_132_2[7]).Reasons.INVALID_CHANNEL === reason) {
        const intl7 = closure_132_0(closure_132_2[6]).intl;
        closure_131_5 = intl7.string(closure_132_0(closure_132_2[6]).t.j29zCr);
      } else if (closure_132_1(closure_132_2[7]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED === reason) {
        detailCode = closure_131_0.detailCode;
      }
    } catch (tmp102) {
      c6 = tmp;
      throw tmp102;
    }
  }
};
const DevShelfFetchState = fn(9065).DevShelfFetchState;
const AbortCodes = fn(1085).AbortCodes;
const jsx = fn(21).jsx;
const ActivityLaunchFailErrorType = { ClientError: 0, [0]: "ClientError", CallbackError: 1, [1]: "CallbackError", ApiError: 2, [2]: "ApiError" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export { ActivityLaunchFailErrorType };
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};