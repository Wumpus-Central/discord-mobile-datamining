// discord_app/modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import fuzzysearchDefault from "../../../../_runtime/05702_fuzzysearch.js";
import GuildUtilsDefault from "../../../utils/GuildUtils.tsx";
import GuildRoleMemberActionCreators from "../GuildRoleMemberActionCreators.tsx";
import GuildSettingsConstants from "../GuildSettingsConstants.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, user;

let react = react_mod;
const constants = GuildSettingsConstants.GuildSettingsRoleEditSections;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let obj7;
      let stateFromStoresArray;
      _require = arg0;
      importDefault = arg1;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp7;
        let tmp8;
        let tmp11;
        let tmp14;
        if (cResult[2] === arg0) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(stateFromStoresArray[7]);
        stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [UserStore];
          cResult[5] = items1;
          tmp11 = items1;
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
          tmp14 = items2;
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
        const tmpResult2 = tmp(stateFromStoresArray[7]);
        const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp11, R, tmp14);
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
            let push = items3.push;
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
              userTag: obj7.getUserTag(obj4),
              id: tmp23.userId,
              avatarSource: obj4.getAvatarSource(arg0),
              avatarURL: obj4.getAvatarURL(arg0, 80),
              bot: obj4.bot,
              verifiedBot: obj4.isVerifiedBot(),
              roles: null,
              key: null,
              user: obj4,
            };
            obj7 = require("UserUtils");
            ({ roles: obj6.roles, userId: obj6.key } = tmp23);
            let arr = push(obj2);
          }
          continue;
        }
        cResult[9] = arg0;
        cResult[10] = stateFromStoresObject;
        cResult[11] = stateFromStoresArray;
        cResult[12] = items3;
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let stateFromStoresArray;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("get initialized");
      let items = [GuildMemberStore];
      const items1 = [arg0, arg1];
      stateFromStoresArray = obj.useStateFromStoresArray(
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
      let obj2 = require("get initialized");
      const items2 = [UserStore];
      const items3 = [stateFromStoresArray];
      const stateFromStoresObject = obj2.useStateFromStoresObject(
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
        let obj4;
        const items = [];
        const iter = stateFromStoresArray[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          let tmp5 = stateFromStoresObject[nextResult.userId];
          let obj = tmp5;
          if (null != tmp5) {
            let nick = tmp3.nick;
            let push = items.push;
            if (nick == null) {
              let obj2 = UserUtilsDefault;
              nick = obj2.getName(obj);
            }
            let obj5 = {
              name: nick,
              userTag: obj4.getUserTag(obj),
              id: tmp3.userId,
              avatarSource: obj.getAvatarSource(closure_0),
              avatarURL: obj.getAvatarURL(closure_0, 80),
              bot: obj.bot,
              verifiedBot: obj.isVerifiedBot(),
              roles: null,
              key: null,
              user: obj,
            };
            obj4 = UserUtilsDefault;
            ({ roles: obj3.roles, userId: obj3.key } = tmp3);
            let arr = push(obj5);
          }
          continue;
        }
        return items;
      }, items4);
    };
let closure_8 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, current) => {
      let closure_0;
      let ref;
      let tmp2;
      _require = arg0;
      let closure_1 = arg1;
      dependencyMap = current;
      let obj = require("react");
      const cResult = obj.c(8);
      react = react.useRef(current);
      if (cResult[0] !== current) {
        const fn = function o() {
          ref.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const effect = obj2.useEffect(tmp2);
      if (cResult[2] === arg0) {
        let tmp4;
        let tmp5;
        let tmp7;
        if (cResult[3] === arg1) {
          tmp4 = cResult[4];
          tmp5 = cResult[5];
        }
        const effect1 = obj2.useEffect(tmp4, tmp5);
        if (cResult[6] !== arg1) {
          const fn3 = function v(roles) {
            roles = roles.roles;
            return roles.includes(closure_1);
          };
          cResult[6] = arg1;
          cResult[7] = fn3;
          tmp7 = fn3;
        } else {
          tmp7 = cResult[7];
        }
        return closure_8(arg0, tmp7);
      }
      const fn2 = function l() {
        const obj = GuildRoleMemberActionCreators;
        const membersForRole = obj.requestMembersForRole(closure_0, closure_1);
        membersForRole.catch(ref.current);
      };
      const items = [arg0, arg1];
      cResult[2] = arg0;
      cResult[3] = arg1;
      cResult[4] = fn2;
      cResult[5] = items;
      tmp5 = items;
      tmp4 = fn2;
    }
  : (arg0, arg1, current) => {
      let ref;
      let closure_0 = arg0;
      let closure_1 = arg1;
      react = react.useRef(current);
      const effect = react.useEffect(() => {
        ref.current = current;
      });
      const items = [arg0, arg1];
      const effect1 = react.useEffect(() => {
        const obj = GuildRoleMemberActionCreators;
        const membersForRole = obj.requestMembersForRole(closure_0, closure_1);
        membersForRole.catch(ref.current);
      }, items);
      const items1 = [arg1];
      return closure_8(
        arg0,
        react.useCallback((roles) => {
          roles = roles.roles;
          return roles.includes(closure_1);
        }, items1),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let ref;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(4);
      dependencyMap = react.useRef(false);
      if (cResult[0] === arg0) {
        let tmp2;
        let tmp3;
        if (cResult[1] === arg1) {
          tmp2 = cResult[2];
          tmp3 = cResult[3];
        }
        const effect = react.useEffect(tmp2, tmp3);
      }
      const fn = function n() {
        const obj = GuildUtilsDefault;
        const members = obj.requestMembers(closure_0, closure_1, 200);
        const current = "" === closure_1 || ref.current;
        if (!current) {
          const tmpResult = AnalyticsUtilsDefault;
          tmpResult.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
          ref.current = true;
        }
      };
      const items = [arg0, arg1];
      cResult[0] = arg0;
      cResult[1] = arg1;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const ref = react.useRef(false);
      const items = [arg0, arg1];
      const effect = react.useEffect(() => {
        const obj = GuildUtilsDefault;
        const members = obj.requestMembers(closure_0, closure_1, 200);
        const current = "" === closure_1 || ref.current;
        if (!current) {
          const tmpResult = AnalyticsUtilsDefault;
          tmpResult.track(AnalyticEvents.SEARCH_STARTED, { search_type: "Role Members" });
          ref.current = true;
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export const useGuildMembers = tmp2;
export const useGuildRoleMembers = tmp3;
export const useQueryGuildMembers = tmp4;
export const filterFullMembersByQuery = function filterFullMembersByQuery(str, id) {
  str = str.trim();
  const formatted = str.toLowerCase();
  let tmp8Result = id.id === formatted;
  if (!tmp8Result) {
    const str2 = id.name;
    const tmp5 = fuzzysearchDefault;
    tmp8Result = tmp5(formatted, str2.toLowerCase());
  }
  if (!tmp8Result) {
    const str3 = id.userTag;
    const tmp8 = fuzzysearchDefault;
    tmp8Result = tmp8(formatted, str3.toLowerCase());
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
    const obj = GlobalUtils;
    obj.assertNever(DISPLAY);
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
