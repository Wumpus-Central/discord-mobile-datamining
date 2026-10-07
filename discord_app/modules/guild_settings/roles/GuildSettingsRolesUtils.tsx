// discord_app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import fuzzysearchDefault from "../../../../_runtime/05709_fuzzysearch.js";
import GuildUtilsDefault from "../../../utils/GuildUtils.tsx";
import GuildRoleMemberActionCreators from "../GuildRoleMemberActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const constants = fn(17822).GuildSettingsRoleEditSections;
const AnalyticEvents = fn(1085).AnalyticEvents;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        stateFromStoresArray = tmp(tmp3[7]).useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          cResult[5] = items1;
          let tmp11 = items1;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== stateFromStoresArray) {
          class R {
            constructor() {
              return closure_2.reduce((acc, userId) => {
                user = user.getUser(userId.userId);
                if (null != user) {
                  acc[userId.userId] = user;
                }
                return acc;
              }, {});
            }
          }
          const items2 = [stateFromStoresArray];
          cResult[6] = stateFromStoresArray;
          cResult[7] = R;
          cResult[8] = items2;
          let tmp14 = items2;
        } else {
          class R {
            constructor() {
              return closure_2.reduce((acc, userId) => {
                user = user.getUser(userId.userId);
                if (null != user) {
                  acc[userId.userId] = user;
                }
                return acc;
              }, {});
            }
          }
          tmp14 = cResult[8];
        }
        const tmpResult = tmp(tmp3[7]);
        const stateFromStoresObject = tmp(tmp3[7]).useStateFromStoresObject(tmp11, R, tmp14);
        if (cResult[9] === arg0) {
          class R {
            constructor() {
              return closure_2.reduce((acc, userId) => {
                user = user.getUser(userId.userId);
                if (null != user) {
                  acc[userId.userId] = user;
                }
                return acc;
              }, {});
            }
          }
        }
        const items3 = [];
        const iter = stateFromStoresArray[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          class R {
            constructor() {
              return closure_2.reduce((acc, userId) => {
                user = user.getUser(userId.userId);
                if (null != user) {
                  acc[userId.userId] = user;
                }
                return acc;
              }, {});
            }
          }
          let tmp24 = stateFromStoresObject[nextResult.userId];
          let obj4 = tmp24;
          if (null != tmp24) {
            class R {
              constructor() {
                return closure_2.reduce((acc, userId) => {
                  user = user.getUser(userId.userId);
                  if (null != user) {
                    acc[userId.userId] = user;
                  }
                  return acc;
                }, {});
              }
            }
            let nick = tmp23.nick;
            if (nick == null) {
              class R {
                constructor() {
                  return closure_2.reduce((acc, userId) => {
                    user = user.getUser(userId.userId);
                    if (null != user) {
                      acc[userId.userId] = user;
                    }
                    return acc;
                  }, {});
                }
              }
              let obj5 = require("UserUtils");
              nick = obj5.getName(obj4);
            }
            let obj2 = {
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
            let obj7 = require("UserUtils");
            obj2.userTag = obj7.getUserTag(obj4);
            obj2.id = tmp23.userId;
            obj2.avatarSource = obj4.getAvatarSource(arg0);
            obj2.avatarURL = obj4.getAvatarURL(arg0, 80);
            obj2.bot = obj4.bot;
            obj2.verifiedBot = obj4.isVerifiedBot();
            ({ roles: obj6.roles, userId: obj6.key } = tmp23);
            obj2.user = obj4;
            let arr = items3.push(obj2);
          }
          continue;
        }
        cResult[9] = arg0;
        cResult[10] = stateFromStoresObject;
        cResult[11] = stateFromStoresArray;
        cResult[12] = items3;
        const tmpResult2 = tmp(tmp3[7]);
      }
      const fn = function c() {
        const members = GuildMemberStore.getMembers(closure_0);
        let found = members;
        if (null != closure_1) {
          found = members.filter(tmp);
        }
        return found;
      };
      const items4 = [arg0, arg1];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items4;
      tmp8 = items4;
      tmp7 = fn;
      const obj = require("c");
    }
  : (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      let items = [GuildMemberStore];
      const items1 = [arg0, arg1];
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
      let obj = require("initialize");
      const items2 = [UserStore];
      const items3 = [stateFromStoresArray];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items2,
        () =>
          stateFromStoresArray.reduce((acc, userId) => {
            user = user.getUser(userId.userId);
            if (null != user) {
              acc[userId.userId] = user;
            }
            return acc;
          }, {}),
        items3,
      );
      const items4 = [stateFromStoresArray, stateFromStoresObject, arg0];
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
              let obj2 = UserUtilsDefault;
              nick = obj2.getName(obj);
            }
            let obj5 = {
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
            obj5.userTag = obj4.getUserTag(obj);
            obj5.id = tmp3.userId;
            obj5.avatarSource = obj.getAvatarSource(closure_0);
            obj5.avatarURL = obj.getAvatarURL(closure_0, 80);
            obj5.bot = obj.bot;
            obj5.verifiedBot = obj.isVerifiedBot();
            ({ roles: obj3.roles, userId: obj3.key } = tmp3);
            obj5.user = obj;
            let arr = items.push(obj5);
          }
          continue;
        }
        return items;
      }, items4);
    };
let closure_8 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, current) => {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = current;
      const cResult = require("c").c(8);
      noop = noop.useRef(current);
      if (cResult[0] !== current) {
        const fn = function o() {
          closure_3.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const effect = obj2.useEffect(tmp2);
      if (cResult[2] === arg0) {
        if (cResult[3] === arg1) {
          let tmp4 = cResult[4];
          let tmp5 = cResult[5];
        }
        const effect1 = obj2.useEffect(tmp4, tmp5);
        if (cResult[6] !== arg1) {
          const fn3 = function v(roles) {
            roles = roles.roles;
            return roles.includes(closure_1);
          };
          cResult[6] = arg1;
          cResult[7] = fn3;
          let tmp7 = fn3;
        } else {
          tmp7 = cResult[7];
        }
        return closure_8(arg0, tmp7);
      }
      const fn2 = function l() {
        const membersForRole = GuildRoleMemberActionCreators.requestMembersForRole(closure_0, closure_1);
        membersForRole.catch(ref.current);
      };
      const items = [arg0, arg1];
      cResult[2] = arg0;
      cResult[3] = arg1;
      cResult[4] = fn2;
      cResult[5] = items;
      tmp5 = items;
      tmp4 = fn2;
      const obj = require("c");
    }
  : (arg0, arg1, current) => {
      closure_0 = arg0;
      closure_1 = arg1;
      noop = noop.useRef(current);
      const effect = noop.useEffect(() => {
        closure_3.current = current;
      });
      const items = [arg0, arg1];
      const effect1 = noop.useEffect(() => {
        const membersForRole = GuildRoleMemberActionCreators.requestMembersForRole(closure_0, closure_1);
        membersForRole.catch(ref.current);
      }, items);
      const items1 = [arg1];
      return closure_8(
        arg0,
        noop.useCallback((roles) => {
          roles = roles.roles;
          return roles.includes(closure_1);
        }, items1),
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = tmp2;
export const useGuildRoleMembers = tmp3;
export const useQueryGuildMembers = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(4);
      dependencyMap = noop.useRef(false);
      if (cResult[0] === arg0) {
        if (cResult[1] === arg1) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const fn = function n() {
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
      };
      const items = [arg0, arg1];
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
      let obj = require("c");
    }
  : (arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      noop.useRef(false);
      const items = [arg0, arg1];
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
