// === Module 7024: MemberSafetySupplementalUtils ===

// Module 7024 (MemberSafetySupplementalUtils)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl11 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import PlatformsDefault from "Platforms" /* 5449 */;
import ConnectionsHooks from "ConnectionsHooks" /* 7025 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c6, c7;

function createFetchKeys(arg0, arr) {
  let closure_0 = arg0;
  return arr.map((item) => closure_0 + item);
}
function getUserIdFromFetchKey(arg0) {
  return arg0.split("-")[1];
}
function updateFetchRequests(arr, PENDING) {
  let closure_0 = PENDING;
  const item = arr.forEach((item) => {
    closure_5[item] = PENDING;
  });
}
function _transformFetchMemberSupplementalResponse(userId) {
  return { userId: userId.user_id, sourceInviteCode: userId.source_invite_code, joinSourceType: userId.join_source_type, inviterId: userId.inviter_id, integrationType: userId.integration_type };
}
let obj = function _fetchMemberSupplemental() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let obj5;
    let value;
    function getFetchchableUsers(arr) {
      const found = arr.filter((item) => closure_1_5[item] <= constants.UNFETCHED);
      return found.map(closure_1_8);
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let tmp;
        let closure_7;
        let arr2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            closure_1 = undefined;
            tmp = undefined;
            value = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            const tmp48 = createFetchKeys(closure_0, closure_1);
            closure_1 = tmp48;
            arr2 = getFetchchableUsers(tmp48);
            if (0 === arr2.length) {
              c7 = 3;
              const obj4 = { value: [], done: true };
              return obj4;
            } else {
              updateFetchRequests(tmp48, constants.PENDING);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(closure_0), body: obj5, rejectWithError: true };
              const post = HTTP.post;
              obj5 = { user_ids: arr2 };
              c6 = 2;
              c7 = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_131_9(closure_1, closure_131_6.FAILED);
          c7 = 3;
          const obj7 = { value: [], done: true };
          return obj7;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          tmp = value;
          const _Array = Array;
          if (Array.isArray(tmp.body)) {
            const body = tmp.body;
            value = body.map(closure_131_12);
            closure_5 = [];
            const item = value.forEach((userId) => closure_1_5.push(userId.userId));
            closure_6 = closure_131_7(closure_0, closure_5);
            closure_7 = closure_131_7(closure_0, arr2.filter((item) => !closure_1_5.includes(item)));
            closure_131_9(closure_6, closure_131_6.SUCCEEDED);
            closure_131_9(closure_7, closure_131_6.FAILED);
            c5 = 0;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_131_9(closure_1, closure_131_6.FAILED);
            c5 = 0;
            c7 = 3;
            obj = { value: [], done: true };
            return obj;
          }
        }
      } catch (tmp34) {
        value = tmp34;
        if (0 === c5) {
          c7 = 3;
          throw tmp34;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_5 = {};
let closure_6 = { FAILED: 0, [0]: "FAILED", UNFETCHED: 1, [1]: "UNFETCHED", PENDING: 2, [2]: "PENDING", SUCCEEDED: 3, [3]: "SUCCEEDED", FAILED_NO_RETRY: 4, [4]: "FAILED_NO_RETRY" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", BOT: 1, [1]: "BOT", INTEGRATION: 2, [2]: "INTEGRATION", DISCOVERY: 3, [3]: "DISCOVERY", HUB: 4, [4]: "HUB", INVITE: 5, [5]: "INVITE", VANITY_URL: 6, [6]: "VANITY_URL", MANUAL_MEMBER_VERIFICATION: 7, [7]: "MANUAL_MEMBER_VERIFICATION", SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL: 8, [8]: "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL" };
let obj2 = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = react;
  const cResult = obj.c(4);
  const get = PlatformsDefault.get;
  PlatformsDefault;
  obj2 = ConnectionsHooks;
  const value = get(obj2.useLegacyPlatformType(arg0));
  const tmp6 = useThemeDefault();
  let combined = null;
  if (null != value) {
    const items = [, ];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj2);
    combined = null;
    if (items.includes(arg0)) {
      if (cResult[0] === value.icon.darkSVG) {
        if (cResult[1] === value.icon.lightSVG) {
          let tmp9;
          if (cResult[2] === tmp6) {
            tmp9 = cResult[3];
          }
          const _HermesInternal = HermesInternal;
          combined = "url('" + tmp9 + "')";
        }
      }
      const icon = value.icon;
      const tmpResult = shared;
      const tmp10 = tmpResult.isThemeDark(tmp6) ? icon.darkSVG : icon.lightSVG;
      cResult[0] = value.icon.darkSVG;
      cResult[1] = value.icon.lightSVG;
      cResult[2] = tmp6;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  }
  return combined;
}) : ((arg0) => {
  const get = PlatformsDefault.get;
  PlatformsDefault;
  obj = ConnectionsHooks;
  const value = get(obj.useLegacyPlatformType(arg0));
  let combined = null;
  if (null != value) {
    const items = [, ];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj2);
    combined = null;
    if (items.includes(arg0)) {
      const icon = value.icon;
      const _HermesInternal = HermesInternal;
      const tmp3Result = shared;
      combined = "url('" + tmp3Result.isThemeDark(tmp5) ? icon.darkSVG : icon.lightSVG + "')";
    }
  }
  return combined;
});
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx");

export const registerFetchedSupplementals = function registerFetchedSupplementals(guildId, memberIds) {
  let closure_0 = guildId;
  const item = memberIds.forEach((item) => {
    closure_5[guildId + item] = constants.SUCCEEDED;
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
    const intl10 = intl11.intl;
    return intl10.string(intl11.t.HumZAi);
  } else if (obj.INTEGRATION === arg0) {
    const intl9 = intl11.intl;
    return intl9.string(intl11.t.gmCUFw);
  } else if (obj.DISCOVERY === arg0) {
    const intl8 = intl11.intl;
    return intl8.string(intl11.t["Ql/e9Y"]);
  } else if (obj.HUB === arg0) {
    const intl7 = intl11.intl;
    return intl7.string(intl11.t.Op8B3O);
  } else if (obj.INVITE === arg0) {
    const intl6 = intl11.intl;
    return intl6.string(intl11.t["/3vIRd"]);
  } else if (obj.VANITY_URL === arg0) {
    if (null != tmp) {
      let formatToPlainStringResult;
      if (!flag) {
        const intl4 = intl11.intl;
        obj = { vanityUrl: tmp };
        formatToPlainStringResult = intl4.formatToPlainString(intl11.t.EIUjRy, obj);
      }
      return formatToPlainStringResult;
    }
    const intl5 = intl11.intl;
    formatToPlainStringResult = intl5.string(intl11.t.dGiD1O);
  } else if (obj.MANUAL_MEMBER_VERIFICATION === arg0) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t.vdu7oS);
  } else if (obj.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL === arg0) {
    const intl2 = intl11.intl;
    return intl2.string(intl11.t["9/ZreX"]);
  } else {
    const intl = intl11.intl;
    return intl.string(intl11.t.DvMBkS);
  }
};
export const IntegrationType = obj2;
export const getIntegrationLabel = function getIntegrationLabel(arg0) {
  if (obj2.TWITCH === arg0) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t.AVGAkw);
  } else if (tmp.YOUTUBE === arg0) {
    const intl2 = intl11.intl;
    return intl2.string(intl11.t.PHSAsn);
  } else {
    const intl = intl11.intl;
    return intl.string(intl11.t.gmCUFw);
  }
};
export const useGetIntegrationIconString = tmp2;
export const fetchMemberSupplemental = function fetchMemberSupplemental() {
  return obj(...arguments);
};