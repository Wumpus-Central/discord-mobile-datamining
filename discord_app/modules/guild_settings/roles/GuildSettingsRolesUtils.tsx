// discord_app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import fuzzysearchDefault from "../../../../_runtime/05517_fuzzysearch.js";
import GuildUtilsDefault from "../../../utils/GuildUtils.tsx";
import GuildRoleMemberActionCreators from "../GuildRoleMemberActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const constants = fn(17605).GuildSettingsRoleEditSections;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = function useGuildMembers(id, callback) {
  _require = id;
  closure_1 = callback;
  const items = [GuildMemberStore];
  const items1 = [id, callback];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      const members = GuildMemberStore.getMembers(closure_0);
      let found = members;
      if (null != closure_1) {
        found = members.filter(tmp);
      }
      return found;
    },
    items1,
  );
  const obj = require("initialize");
  const items2 = [UserStore];
  const items3 = [stateFromStoresArray];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items2,
    () =>
      current.reduce((acc, userId) => {
        user = user.getUser(userId.userId);
        if (null != user) {
          acc[userId.userId] = user;
        }
        return acc;
      }, {}),
    items3,
  );
  const items4 = [stateFromStoresArray, stateFromStoresObject, id];
  return stateFromStoresObject.useMemo(() => {
    const items = [];
    const iter = current[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = ref[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        if (nick == null) {
          let obj2 = UserUtilsDefault;
          nick = obj2.getName(obj);
        }
        obj = {
          name: nick,
          userTag: null,
          id: null,
          avatarSource: null,
          avatarURL: null,
          bot: null,
          verifiedBot: null,
          roles: null,
          key: null,
          user: null,
        };
        let obj4 = UserUtilsDefault;
        obj.userTag = obj4.getUserTag(obj);
        obj.id = tmp3.userId;
        obj.avatarSource = obj.getAvatarSource(closure_0);
        obj.avatarURL = obj.getAvatarURL(closure_0, 80);
        obj.bot = obj.bot;
        obj.verifiedBot = obj.isVerifiedBot();
        ({ roles: obj3.roles, userId: obj3.key } = tmp3);
        obj.user = obj;
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  }, items4);
};
export const useGuildRoleMembers = function useGuildRoleMembers(id, id2, onMembersLoadFail) {
  _require = id;
  closure_1 = id2;
  dependencyMap = onMembersLoadFail;
  noop = noop.useRef(onMembersLoadFail);
  const effect = noop.useEffect(() => {
    closure_3.current = current;
  });
  let items = [id, id2];
  const effect1 = noop.useEffect(() => {
    const membersForRole = GuildRoleMemberActionCreators.requestMembersForRole(closure_0, closure_1);
    membersForRole.catch(ref.current);
  }, items);
  const items1 = [id2];
  const callback = noop.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(closure_1);
  }, items1);
  closure_129_0 = id;
  closure_129_1 = callback;
  const items2 = [GuildMemberStore];
  const items3 = [id, callback];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items2,
    () => {
      const members = GuildMemberStore.getMembers(closure_0);
      let found = members;
      if (null != closure_1) {
        found = members.filter(tmp);
      }
      return found;
    },
    items3,
  );
  closure_129_2 = stateFromStoresArray;
  let obj = require("initialize");
  const items4 = [UserStore];
  const items5 = [stateFromStoresArray];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items4,
    () =>
      current.reduce((acc, userId) => {
        user = user.getUser(userId.userId);
        if (null != user) {
          acc[userId.userId] = user;
        }
        return acc;
      }, {}),
    items5,
  );
  closure_129_3 = stateFromStoresObject;
  const items6 = [stateFromStoresArray, stateFromStoresObject, id];
  return noop.useMemo(() => {
    const items = [];
    const iter = current[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = ref[nextResult.userId];
      let obj = tmp5;
      if (null != tmp5) {
        let nick = tmp3.nick;
        if (nick == null) {
          let obj2 = UserUtilsDefault;
          nick = obj2.getName(obj);
        }
        obj = {
          name: nick,
          userTag: null,
          id: null,
          avatarSource: null,
          avatarURL: null,
          bot: null,
          verifiedBot: null,
          roles: null,
          key: null,
          user: null,
        };
        let obj4 = UserUtilsDefault;
        obj.userTag = obj4.getUserTag(obj);
        obj.id = tmp3.userId;
        obj.avatarSource = obj.getAvatarSource(closure_0);
        obj.avatarURL = obj.getAvatarURL(closure_0, 80);
        obj.bot = obj.bot;
        obj.verifiedBot = obj.isVerifiedBot();
        ({ roles: obj3.roles, userId: obj3.key } = tmp3);
        obj.user = obj;
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
  noop.useRef(false);
  const items = [id, formatted];
  const effect = noop.useEffect(() => {
    const members = GuildUtilsDefault.requestMembers(closure_0, closure_1, 200);
    let current = "" === closure_1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      AnalyticsUtilsDefault.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
      ref.current = true;
      const tmpResult = AnalyticsUtilsDefault;
    }
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
    GlobalUtils.assertNever(DISPLAY);
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
