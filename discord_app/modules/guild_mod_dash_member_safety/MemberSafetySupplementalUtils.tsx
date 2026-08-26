// discord_app/modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../design/shared.tsx";
import getPlatformUserUrlDefault from "../../lib/Platforms.tsx";
import PlatformTypes from "../connections/ConnectionsHooks.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
function createFetchKeys(arg0, arr) {
  closure_0 = arg0;
  return arr.map((arg0) => closure_0 + arg0);
}
function getUserIdFromFetchKey(arg0) {
  return arg0.split("-")[1];
}
function updateFetchRequests(arr) {
  closure_0 = arg1;
  const item = arr.forEach((arg0) => {
    closure_1_5[arg0] = closure_0;
  });
}
function _transformFetchMemberSupplementalResponse(userId) {
  return { userId: userId.user_id, sourceInviteCode: userId.source_invite_code, joinSourceType: userId.join_source_type, inviterId: userId.inviter_id, integrationType: userId.integration_type };
}
function _fetchMemberSupplemental() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let arr2 = tmp7;
              closure_1 = undefined;
              arr2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c5 = undefined;
              constants = undefined;
              v0 = undefined;
              const tmp53 = v0(callback, closure_1);
              closure_1 = tmp53;
              arr2 = (function getFetchchableUsers(arr) {
                const found = arr.filter((arg0) => table[arg0] <= constants.UNFETCHED);
                return found.map(closure_8);
              })(tmp53);
              if (0 === arr2.length) {
                v0 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = [];
                return obj1;
              } else {
                closure_1_9(tmp53, constants.PENDING);
                c5 = 1;
                const HTTP = callback(closure_1_2[7]).HTTP;
                const obj2 = { url: null, body: null, rejectWithError: true };
                obj2[0] = closure_1_4.MEMBER_SAFETY_SUPPLEMENTAL(tmp50);
                const obj3 = { user_ids: null };
                obj3[0] = arr2;
                obj2[1] = obj3;
                constants = 2;
                v0 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj2);
                return obj4;
              }
              tmp50 = callback;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback2(closure_1, constants.FAILED);
            v0 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = [];
            return obj5;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            v0 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_3 = arg1;
            const _Array = Array;
            if (Array.isArray(closure_3.body)) {
              const body = closure_3.body;
              closure_4 = body.map(closure_12);
              c5 = [];
              const item = closure_4.forEach((userId) => arr.push(userId.userId));
              constants = v0(callback, c5);
              v0 = v0(callback, arr2.filter((arg0) => !arr.includes(arg0)));
              callback2(constants, constants.SUCCEEDED);
              callback2(v0, constants.FAILED);
              c5 = 0;
              v0 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = closure_4;
              return obj7;
            } else {
              callback2(closure_1, constants.FAILED);
              c5 = 0;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = [];
              return obj;
            }
          }
        } catch (tmp37) {
          closure_4 = tmp37;
          if (tmp4 === c5) {
            v0 = tmp2;
            throw tmp37;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_5 = {};
let closure_6 = { FAILED: 0, [0]: "FAILED", UNFETCHED: 1, [1]: "UNFETCHED", PENDING: 2, [2]: "PENDING", SUCCEEDED: 3, [3]: "SUCCEEDED", FAILED_NO_RETRY: 4, [4]: "FAILED_NO_RETRY" };
let obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", BOT: 1, [1]: "BOT", INTEGRATION: 2, [2]: "INTEGRATION", DISCOVERY: 3, [3]: "DISCOVERY", HUB: 4, [4]: "HUB", INVITE: 5, [5]: "INVITE", VANITY_URL: 6, [6]: "VANITY_URL", MANUAL_MEMBER_VERIFICATION: 7, [7]: "MANUAL_MEMBER_VERIFICATION", SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL: 8, [8]: "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL" };
obj = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx");

export const registerFetchedSupplementals = function registerFetchedSupplementals(guildId, memberIds) {
  closure_0 = guildId;
  const item = memberIds.forEach((arg0) => {
    closure_1_5[closure_0 + arg0] = closure_1_6.SUCCEEDED;
  });
};
export const JoinSourceType = obj;
export const getJoinSourceTypeLabel = function getJoinSourceTypeLabel(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (obj.BOT === arg0) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.HumZAi);
  } else if (tmp2.INTEGRATION === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.gmCUFw);
  } else if (tmp2.DISCOVERY === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t["Ql/e9Y"]);
  } else if (tmp2.HUB === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.Op8B3O);
  } else if (tmp2.INVITE === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["/3vIRd"]);
  } else if (tmp2.VANITY_URL === arg0) {
    if (null != tmp) {
      if (!flag) {
        const intl4 = getSystemLocale.intl;
        obj = { vanityUrl: null };
        obj[0] = tmp;
        let formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.EIUjRy, obj);
      }
      return formatToPlainStringResult;
    }
    const intl5 = getSystemLocale.intl;
    formatToPlainStringResult = intl5.string(getSystemLocale.t.dGiD1O);
  } else if (tmp2.MANUAL_MEMBER_VERIFICATION === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.vdu7oS);
  } else if (tmp2.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["9/ZreX"]);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.DvMBkS);
  }
};
export const IntegrationType = obj;
export const getIntegrationLabel = function getIntegrationLabel(arg0) {
  if (obj.TWITCH === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.AVGAkw);
  } else if (tmp.YOUTUBE === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.PHSAsn);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gmCUFw);
  }
};
export const useGetIntegrationIconString = function useGetIntegrationIconString(arg0) {
  obj = getPlatformUserUrlDefault;
  const value = obj.get(PlatformTypes.useLegacyPlatformType(arg0));
  let tmp5 = null;
  if (null != value) {
    const items = [, ];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj);
    tmp5 = null;
    if (items.includes(arg0)) {
      let str = value.icon;
      const _HermesInternal = HermesInternal;
      const tmp2Result = AccessibilityAnnouncer;
      str = "url('";
      const combined = "url('" + AccessibilityAnnouncer.isThemeDark(tmp4) ? str.darkSVG : str.lightSVG + "')";
      const tmp7 = AccessibilityAnnouncer.isThemeDark(tmp4) ? str.darkSVG : str.lightSVG;
    }
  }
  return tmp5;
};
export const fetchMemberSupplemental = function fetchMemberSupplemental() {
  const self = this;
  const apply = _fetchMemberSupplemental.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};