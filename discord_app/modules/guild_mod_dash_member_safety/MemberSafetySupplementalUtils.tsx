// discord_app/modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import shared from "../../design/shared.tsx";
import PlatformsDefault from "../../lib/Platforms.tsx";
import ConnectionsHooks from "../connections/ConnectionsHooks.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function createFetchKeys(arg0, arr) {
  closure_0 = arg0;
  return arr.map((item) => closure_0 + item);
}
function getUserIdFromFetchKey(arg0) {
  return arg0.split("-")[1];
}
function updateFetchRequests(arr, PENDING) {
  closure_0 = PENDING;
  const item = arr.forEach((item) => {
    closure_5[item] = closure_0;
  });
}
function _transformFetchMemberSupplementalResponse(userId) {
  return {
    userId: userId.user_id,
    sourceInviteCode: userId.source_invite_code,
    joinSourceType: userId.join_source_type,
    inviterId: userId.inviter_id,
    integrationType: userId.integration_type,
  };
}
let closure_13 = async function _fetchMemberSupplemental(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          const tmp52 = createFetchKeys(closure_0, closure_1);
          closure_130_1 = tmp52;
          const arr2 = (function getFetchchableUsers(arr) {
            const found = arr.filter((item) => closure_1_5[item] <= constants.UNFETCHED);
            return found.map(closure_1_8);
          })(tmp52);
          closure_130_2 = arr2;
          if (0 === arr2.length) {
            c7 = 3;
            const obj1 = { value: [], done: true };
            return obj1;
          } else {
            updateFetchRequests(tmp52, constants.PENDING);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(closure_0), body: null, rejectWithError: true };
            const obj2 = { user_ids: arr2 };
            request.body = obj2;
            c6 = 2;
            c7 = 1;
            const obj3 = { value: HTTP.post(request), done: false };
            return obj3;
          }
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_131_9(closure_130_1, closure_131_6.FAILED);
        c7 = 3;
        const obj4 = { value: [], done: true };
        return obj4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_130_3 = value;
        const _Array = Array;
        if (Array.isArray(closure_130_3.body)) {
          const body = closure_130_3.body;
          closure_130_4 = body.map(closure_131_12);
          closure_130_5 = [];
          const item = closure_130_4.forEach((userId) => closure_1_5.push(userId.userId));
          closure_130_6 = closure_131_7(closure_130_0, closure_130_5);
          closure_130_7 = closure_131_7(
            closure_130_0,
            closure_130_2.filter((item) => !closure_1_5.includes(item)),
          );
          closure_131_9(closure_130_6, closure_131_6.SUCCEEDED);
          closure_131_9(closure_130_7, closure_131_6.FAILED);
          c5 = 0;
          c7 = 3;
          const obj6 = { value: closure_130_4, done: true };
          return obj6;
        } else {
          closure_131_9(closure_130_1, closure_131_6.FAILED);
          c5 = 0;
          c7 = 3;
          obj = { value: [], done: true };
          return obj;
        }
      }
    } catch (tmp37) {
      closure_4 = tmp37;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp37;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_5 = {};
let closure_6 = {
  FAILED: 0,
  [0]: "FAILED",
  UNFETCHED: 1,
  [1]: "UNFETCHED",
  PENDING: 2,
  [2]: "PENDING",
  SUCCEEDED: 3,
  [3]: "SUCCEEDED",
  FAILED_NO_RETRY: 4,
  [4]: "FAILED_NO_RETRY",
};
let obj = {
  UNSPECIFIED: 0,
  [0]: "UNSPECIFIED",
  BOT: 1,
  [1]: "BOT",
  INTEGRATION: 2,
  [2]: "INTEGRATION",
  DISCOVERY: 3,
  [3]: "DISCOVERY",
  HUB: 4,
  [4]: "HUB",
  INVITE: 5,
  [5]: "INVITE",
  VANITY_URL: 6,
  [6]: "VANITY_URL",
  MANUAL_MEMBER_VERIFICATION: 7,
  [7]: "MANUAL_MEMBER_VERIFICATION",
  SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL: 8,
  [8]: "SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL",
};
obj = { DISCORD: "discord", TWITCH: "twitch", YOUTUBE: "youtube", GUILD_SUBSCRIPTION: "guild_subscription" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx");

export const registerFetchedSupplementals = function registerFetchedSupplementals(guildId, memberIds) {
  closure_0 = guildId;
  const item = memberIds.forEach((item) => {
    closure_5[closure_0 + item] = constants.SUCCEEDED;
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
    const intl10 = util.intl;
    return intl10.string(util.t.HumZAi);
  } else if (tmp2.INTEGRATION === arg0) {
    const intl9 = util.intl;
    return intl9.string(util.t.gmCUFw);
  } else if (tmp2.DISCOVERY === arg0) {
    const intl8 = util.intl;
    return intl8.string(util.t["Ql/e9Y"]);
  } else if (tmp2.HUB === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.Op8B3O);
  } else if (tmp2.INVITE === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["/3vIRd"]);
  } else if (tmp2.VANITY_URL === arg0) {
    if (null != tmp) {
      if (!flag) {
        const intl4 = util.intl;
        obj = { vanityUrl: tmp };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.EIUjRy, obj);
      }
      return formatToPlainStringResult;
    }
    const intl5 = util.intl;
    formatToPlainStringResult = intl5.string(util.t.dGiD1O);
  } else if (tmp2.MANUAL_MEMBER_VERIFICATION === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.vdu7oS);
  } else if (tmp2.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["9/ZreX"]);
  } else {
    const intl = util.intl;
    return intl.string(util.t.DvMBkS);
  }
};
export const IntegrationType = obj;
export const getIntegrationLabel = function getIntegrationLabel(arg0) {
  if (obj.TWITCH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.AVGAkw);
  } else if (tmp.YOUTUBE === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.PHSAsn);
  } else {
    const intl = util.intl;
    return intl.string(util.t.gmCUFw);
  }
};
export const useGetIntegrationIconString = function useGetIntegrationIconString(arg0) {
  obj = PlatformsDefault;
  value = obj.get(ConnectionsHooks.useLegacyPlatformType(arg0));
  let tmp5 = null;
  if (null != value) {
    const items = [,];
    ({ TWITCH: arr[0], YOUTUBE: arr[1] } = obj);
    tmp5 = null;
    if (items.includes(arg0)) {
      const _HermesInternal = HermesInternal;
      const tmp2Result = shared;
      const str = "url('";
      const combined = "url('" + shared.isThemeDark(tmp4) ? str.darkSVG : str.lightSVG + "')";
      const tmp7 = shared.isThemeDark(tmp4) ? str.darkSVG : str.lightSVG;
    }
  }
  return tmp5;
};
export const fetchMemberSupplemental = function fetchMemberSupplemental() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
