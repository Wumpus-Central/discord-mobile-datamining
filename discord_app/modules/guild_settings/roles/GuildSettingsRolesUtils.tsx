// discord_app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import fuzzysearchDefault from "../../../../_runtime/06775_fuzzysearch.js";
import noop from "../../../../_runtime/00019_noop.js";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { GuildSettingsRoleEditSections as closure_6 } from "../GuildSettingsConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = function useGuildMembers(id, callback) {
  const _require = id;
  closure_1 = callback;
  const items = [closure_4];
  const items1 = [id, callback];
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const members = closure_1_4.getMembers(closure_0);
    let found = members;
    if (null != callback) {
      found = members.filter(tmp);
    }
    return found;
  }, items1);
  const obj = _require(stateFromStoresArray[5]);
  const items2 = [closure_5];
  const items3 = [stateFromStoresArray];
  const stateFromStoresObject = _require(stateFromStoresArray[5]).useStateFromStoresObject(items2, () => stateFromStoresArray.reduce((acc, item, index) => {
    user = user.getUser(item.userId);
    if (null != user) {
      acc[item.userId] = user;
    }
    return acc;
  }, {}), items3);
  const items4 = [stateFromStoresArray, stateFromStoresObject, id];
  return stateFromStoresObject.useMemo(() => {
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        if (nick == null) {
          let obj2 = callback(stateFromStoresArray[6]);
          nick = obj2.getName(obj);
        }
        obj = { name: null, userTag: null, id: null, avatarSource: null, avatarURL: null, bot: null, verifiedBot: null, roles: null, key: null, user: null };
        obj[0] = nick;
        let obj4 = callback(stateFromStoresArray[6]);
        obj[1] = obj4.getUserTag(obj);
        obj[2] = tmp3.userId;
        obj[3] = obj.getAvatarSource(closure_0);
        obj[4] = obj.getAvatarURL(closure_0, 80);
        obj[5] = obj.bot;
        obj[6] = obj.isVerifiedBot();
        ({ roles: obj3[7], userId: obj3[8] } = tmp3);
        obj[9] = obj;
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  }, items4);
};
export const useGuildRoleMembers = function useGuildRoleMembers(id, id2, onMembersLoadFail) {
  stateFromStoresObject = stateFromStoresObject.useRef(onMembersLoadFail);
  const effect = stateFromStoresObject.useEffect(() => {
    stateFromStoresObject.current = stateFromStoresArray;
  });
  let items = [id, id2];
  const effect1 = stateFromStoresObject.useEffect(() => {
    const membersForRole = id(stateFromStoresArray[7]).requestMembersForRole(id, callback);
    membersForRole.catch(stateFromStoresObject.current);
  }, items);
  const items1 = [id2];
  const callback = stateFromStoresObject.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(callback);
  }, items1);
  const _require = id;
  let stateFromStoresArray;
  const items2 = [closure_4];
  const items3 = [id, callback];
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items2, () => {
    const members = closure_1_4.getMembers(closure_0);
    let found = members;
    if (null != callback) {
      found = members.filter(tmp);
    }
    return found;
  }, items3);
  let obj = _require(stateFromStoresArray[5]);
  const items4 = [closure_5];
  const items5 = [stateFromStoresArray];
  stateFromStoresObject = _require(stateFromStoresArray[5]).useStateFromStoresObject(items4, () => stateFromStoresArray.reduce((acc, item, index) => {
    user = user.getUser(item.userId);
    if (null != user) {
      acc[item.userId] = user;
    }
    return acc;
  }, {}), items5);
  const items6 = [stateFromStoresArray, stateFromStoresObject, id];
  return stateFromStoresObject.useMemo(() => {
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = stateFromStoresObject[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        if (nick == null) {
          let obj2 = callback(stateFromStoresArray[6]);
          nick = obj2.getName(obj);
        }
        obj = { name: null, userTag: null, id: null, avatarSource: null, avatarURL: null, bot: null, verifiedBot: null, roles: null, key: null, user: null };
        obj[0] = nick;
        let obj4 = callback(stateFromStoresArray[6]);
        obj[1] = obj4.getUserTag(obj);
        obj[2] = tmp3.userId;
        obj[3] = obj.getAvatarSource(closure_0);
        obj[4] = obj.getAvatarURL(closure_0, 80);
        obj[5] = obj.bot;
        obj[6] = obj.isVerifiedBot();
        ({ roles: obj3[7], userId: obj3[8] } = tmp3);
        obj[9] = obj;
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  }, items6);
};
export const useQueryGuildMembers = function useQueryGuildMembers(id, formatted) {
  closure_0 = id;
  closure_1 = formatted;
  closure_2 = React.useRef(false);
  const items = [id, formatted];
  const effect = React.useEffect(() => {
    const members = callback(ref[8]).requestMembers(closure_0, callback, 200);
    let current = "" === callback;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      callback(ref[9]).track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
      ref.current = true;
      const tmpResult = callback(ref[9]);
    }
    const obj = callback(ref[8]);
  }, items);
};
export const filterFullMembersByQuery = function filterFullMembersByQuery(str, id) {
  str = str.trim();
  const formatted = str.toLowerCase();
  let tmp8Result = id.id === formatted;
  if (!tmp8Result) {
    tmp8Result = fuzzysearchDefault(formatted, id.name.toLowerCase());
  }
  if (!tmp8Result) {
    tmp8Result = fuzzysearchDefault(formatted, id.userTag.toLowerCase());
  }
  return tmp8Result;
};
export const getSectionAnalyticsName = function getSectionAnalyticsName(DISPLAY) {
  if (constants.MEMBERS === DISPLAY) {
    return "Members";
  } else if (constants.PERMISSIONS === DISPLAY) {
    return "Permissions";
  } else if (constants.DISPLAY === DISPLAY) {
    return "Role Settings";
  } else if (constants.VERIFICATIONS === DISPLAY) {
    return "Connections";
  } else {
    isDiscordFrontendDevelopment.assertNever(DISPLAY);
  }
};
export const filterRole = function filterRole(name, str) {
  let hasItem = "" === str;
  if (!hasItem) {
    const formatted = str.toLowerCase();
    hasItem = formatted.includes(str.toLowerCase());
  }
  return hasItem;
};