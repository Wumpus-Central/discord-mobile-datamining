// discord_app/modules/activities/utils/activityLaunchErrorUtils.tsx
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import InteractionCallbackErrorDefault from "../../errors/InteractionCallbackError.tsx";
import InteractionUtils from "../../interactions/InteractionUtils.tsx";
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import EmbeddedActivityClientErrorDefault from "../../errors/EmbeddedActivityClientError.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import LocationMetadataStore from "../../location_metadata/stores/LocationMetadataStore.tsx";
import DeveloperActivityShelfStore from "../DeveloperActivityShelfStore.tsx";

require = fn;
let closure_9 = async function _getActivityLaunchErrorInfo(arg0) {
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
      return { value: "IconComponent", done: null };
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
          const intl10 = util.intl;
          closure_131_5 = intl10.string(util.t["IOy+I5"]);
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
              const obj5 = { value: EmbeddedActivitiesActionCreators.fetchDeveloperApplications(), done: false };
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
              const intl11 = util.intl;
              closure_131_5 = intl11.string(util.t.uGDCcw);
            }
          }
          let tmp75 = ClientError2 === closure_132_8.CallbackError;
          if (tmp75) {
            tmp75 =
              reason2 ===
              closure_132_1(closure_132_2[8]).ReasonCodes.ACTIVITY_LAUNCH_INVALID_USER_REGION_FOR_APPLICATION;
          }
          if (!tmp75) {
            let tmp85 = ClientError2 === closure_132_8.ApiError;
            if (tmp85) {
              tmp85 = 20060 === reason2;
            }
            tmp75 = tmp85;
          }
          if (tmp75) {
            if (null == closure_132_4.getCountryCode()) {
              c5 = 2;
              c6 = 1;
              const obj7 = { value: closure_132_1(closure_132_2[10]).getLocationMetadata(), done: false };
              return obj7;
            } else {
              const countryCode = closure_132_4.getCountryCode();
              let alpha2;
              if (countryCode != null) {
                alpha2 = countryCode.alpha2;
              }
              if ("BR" === alpha2) {
                const intl9 = closure_132_0(closure_132_2[4]).intl;
                closure_131_5 = intl9.formatToPlainString(closure_132_0(closure_132_2[4]).t.GJ27pD, {
                  supportArticleUrl:
                    "https://support.discord.com/hc/en-us/articles/42704051358359-Why-video-features-are-currently-unavailable-in-Brazil",
                });
              }
            }
          }
          const obj9 = { message: closure_131_5, errorType: ClientError2, errorStatus: detailCode, errorCode: reason2 };
          c6 = 3;
          const obj10 = { value: obj9, done: true };
          return obj10;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
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
      if (closure_132_1(closure_132_2[5]).Reasons.PRIMARY_APP_COMMAND_NOT_FOUND === reason) {
        if (closure_132_5.inDevModeForApplication(closure_131_1)) {
          const intl8 = closure_132_0(closure_132_2[4]).intl;
          closure_131_5 = intl8.string(closure_132_0(closure_132_2[4]).t.hXRXfz);
        }
      } else if (closure_132_1(closure_132_2[5]).Reasons.INVALID_CHANNEL === reason) {
        const intl7 = closure_132_0(closure_132_2[4]).intl;
        closure_131_5 = intl7.string(closure_132_0(closure_132_2[4]).t.j29zCr);
      } else if (closure_132_1(closure_132_2[5]).Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED === reason) {
        detailCode = closure_131_0.detailCode;
      }
    } catch (tmp112) {
      c6 = tmp;
      throw tmp112;
    }
  }
};
const DevShelfFetchState = fn(8513).DevShelfFetchState;
const AbortCodes = fn(1085).AbortCodes;
const ActivityLaunchFailErrorType = {
  ClientError: 0,
  [0]: "ClientError",
  CallbackError: 1,
  [1]: "CallbackError",
  ApiError: 2,
  [2]: "ApiError",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/activityLaunchErrorUtils.tsx");

export { ActivityLaunchFailErrorType };
export const getActivityLaunchErrorInfo = function getActivityLaunchErrorInfo() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
