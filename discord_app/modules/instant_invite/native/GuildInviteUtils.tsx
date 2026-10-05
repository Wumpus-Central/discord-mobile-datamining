// === Module 12790: GuildInviteUtils ===

// Module 12790 (GuildInviteUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import Constants2 from "Constants" /* 7226 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9483 */;
import GuildInviteSendStateStore from "GuildInviteSendStateStore" /* 12791 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, defaultChannel, dependencyMap, flattenedGuildIds, guild;

let closure_14;
let closure_15;
let obj = function _sendGuildInvite() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_2;
    let obj7;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let code;
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
            let closure_4 = tmp;
            code = undefined;
            c5 = 1;
            setSendState(closure_0, closure_1, constants.SENDING);
            const AccessibilityAnnouncer2 = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
            const announce2 = AccessibilityAnnouncer2.announce;
            const intl2 = require("intl").intl;
            announce2(intl2.string(require("intl").t.kC3ZRG));
            defaultChannel = defaultChannel.getDefaultChannel(closure_1, true, constants2.CREATE_INSTANT_INVITE);
            if (null == defaultChannel) {
              const _Error = Error;
              throw Error();
            } else {
              const obj4 = { max_uses: InstantInviteUtilsDefault.INVITE_OPTIONS_ONCE.value, max_age: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value, unique: true };
              const createInvite = InstantInviteActionCreatorsDefault.createInvite;
              const id = defaultChannel.id;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: createInvite(id, obj4, source), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_132_12(closure_0, closure_1, closure_132_13.ERROR);
            let AccessibilityAnnouncer = closure_132_0(closure_132_2[20]).AccessibilityAnnouncer;
            let announce = AccessibilityAnnouncer.announce;
            let intl = closure_132_0(closure_132_2[21]).intl;
            const announceResult = announce(intl.string(closure_132_0(closure_132_2[21]).t.fEptJP));
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            code = value;
            const obj6 = { inviteKey: code.code, type: closure_132_0(closure_132_2[24]).InvitePropertiesType.USER, user: closure_132_11.getUser(closure_0), location: source, inviteAnalyticsMetadata: obj7 };
            const enqueue = closure_132_1(closure_132_2[24]).enqueue;
            const tmp30 = closure_132_1(closure_132_2[24]);
            obj7 = { source };
            enqueue(obj6, () => {
              closure_2_12(closure_1_0, closure_1_1, constants.SENT);
              const AccessibilityAnnouncer = closure_0(closure_2[20]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = closure_0(closure_2[21]).intl;
              announce(intl.string(closure_0(closure_2[21]).t.PuLLzP));
            });
            c5 = 0;
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        if (0 === c5) {
          c7 = 3;
          throw tmp19;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const setSendState = GuildInviteSendStateStore.setSendState;
const InviteSendStates = Constants2.InviteSendStates;
({ Permissions: closure_14, AnalyticEvents: closure_15 } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_2;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SortedGuildStore, GuildStore];
    const fn = function o() {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const items = [];
      const item = flattenedGuildIds.forEach((item) => {
        guild = guild.getGuild(item);
        if (null != guild) {
          items.push(guild);
        }
      });
      return items;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (null != arg0) {
    if (cResult[3] === stateFromStoresArray) {
      if (cResult[4] === arg1) {
        let tmp9;
        if (cResult[5] === arg0) {
          tmp9 = cResult[6];
        }
        tmp8 = tmp9;
      }
    }
    dependencyMap = GuildMemberCountStore.getMemberCounts();
    const items1 = [];
    const items2 = [];
    let item = stateFromStoresArray.forEach((vanityURLCode) => {
      let num;
      const canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode) || null != vanityURLCode.vanityURLCode;
      if (canResult) {
        let tmp7Result = null == closure_1;
        const str = vanityURLCode.name;
        if (!tmp7Result) {
          const tmp7 = fuzzysearchDefault;
          const formatted = closure_1.toLowerCase();
          tmp7Result = tmp7(formatted, str.toLowerCase());
        }
        if (tmp7Result) {
          if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
            obj = { guild: vanityURLCode, memberCount: num };
            num = closure_2[vanityURLCode.id];
            if (num == null) {
              num = 0;
            }
            const ownerId = vanityURLCode.ownerId;
            const currentUser = UserStore.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            if (ownerId === id) {
              items1.push(obj);
            } else {
              items2.push(obj);
            }
          }
        }
      }
    });
    const items3 = [items1, items2];
    cResult[3] = stateFromStoresArray;
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = items3;
    tmp9 = items3;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [[], []];
      cResult[2] = items4;
      tmp8 = items4;
    } else {
      tmp8 = cResult[2];
    }
  }
  return tmp8;
}) : ((arg0, arg1) => {
  let closure_0;
  let memberCounts;
  let stateFromStoresArray;
  _require = arg0;
  let closure_1 = arg1;
  obj = require("get initialized");
  let items = [SortedGuildStore, GuildStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let items1 = [stateFromStoresArray, arg1, arg0];
  return react.useMemo(() => {
    let memberCounts2;
    if (null == memberCounts2) {
      const items = [[], []];
      return items;
    } else {
      memberCounts2 = memberCounts.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let num;
        const canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode) || null != vanityURLCode.vanityURLCode;
        if (canResult) {
          let tmp7Result = null == items1;
          const str = vanityURLCode.name;
          if (!tmp7Result) {
            const tmp7 = fuzzysearchDefault;
            const formatted = items1.toLowerCase();
            tmp7Result = tmp7(formatted, str.toLowerCase());
          }
          if (tmp7Result) {
            if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
              obj = { guild: vanityURLCode, memberCount: num };
              num = closure_0[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              const ownerId = vanityURLCode.ownerId;
              const currentUser = UserStore.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (ownerId === id) {
                items1.push(obj);
              } else {
                items2.push(obj);
              }
            }
          }
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id2, newestAnalyticsLocation) {
  obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants2.OPEN_POPOUT, obj2);
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj3 = { recipientId: id2, source: newestAnalyticsLocation };
  const tmp3 = asyncRequire(12792, dependencyMap.paths);
  openLazy(tmp3, "invite-to-guilds-" + id2, obj3);
};
export const useServerInviteRows = tmp3;
export const sendGuildInvite = function sendGuildInvite() {
  return obj(...arguments);
};