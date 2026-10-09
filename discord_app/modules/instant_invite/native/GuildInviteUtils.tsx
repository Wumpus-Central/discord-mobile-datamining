// === Module 13036: GuildInviteUtils ===

// Module 13036 (GuildInviteUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import fuzzysearchDefault from "fuzzysearch" /* 6101 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8480 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 8669 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4981 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SortedGuildStore from "SortedGuildStore" /* 5970 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
let closure_16 = async function _sendGuildInvite(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = dependencyMap;
  setSendState(closure_0, closure_1, constants.SENDING);
  const AccessibilityAnnouncer2 = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
  const intl2 = require("util").intl;
  AccessibilityAnnouncer2.announce(intl2.string(require("util").t.kC3ZRG));
  defaultChannel = defaultChannel.getDefaultChannel(closure_1, true, constants2.CREATE_INSTANT_INVITE);
  if (null == defaultChannel) {
    const _Error = Error;
    throw Error();
  }
  await InstantInviteActionCreatorsDefault.createInvite(defaultChannel.id, { max_uses: InstantInviteUtilsDefault.INVITE_OPTIONS_ONCE.value, max_age: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value, unique: true }, dependencyMap);
  if (1 === tmp7) {
    c5 = 0;
    closure_132_12(closure_131_0, closure_131_1, closure_132_13.ERROR);
    let AccessibilityAnnouncer = closure_132_0(closure_132_2[20]).AccessibilityAnnouncer;
    let intl = closure_132_0(closure_132_2[21]).intl;
    AccessibilityAnnouncer.announce(intl.string(closure_132_0(closure_132_2[21]).t.fEptJP));
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_3 = value;
    const obj7 = { inviteKey: closure_131_3.code, type: closure_132_0(closure_132_2[24]).InvitePropertiesType.USER, user: closure_132_11.getUser(closure_131_0), location: closure_131_2, inviteAnalyticsMetadata: null };
    obj7.inviteAnalyticsMetadata = { source: closure_131_2 };
    closure_132_1(closure_132_2[24]).enqueue(obj7, () => {
      closure_2_12(closure_1_0, closure_1_1, constants.SENT);
      const AccessibilityAnnouncer = closure_0(4789).AccessibilityAnnouncer;
      const intl = closure_0(1126).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_0(1126).t.PuLLzP));
    });
    c5 = 0;
    closure_132_1(closure_132_2[24]);
  }
  return value;
};
const setSendState = fn(13037).setSendState;
const InviteSendStates = fn(7423).InviteSendStates;
const Constants = fn(1085);
({ Permissions: closure_14, AnalyticEvents: closure_15 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  AnalyticsUtilsDefault.track(constants2.OPEN_POPOUT, { type: "Invite to Guilds", source: newestAnalyticsLocation });
  const obj2 = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequireImpl(13038, dependencyMap.paths), "invite-to-guilds-" + id, { recipientId: id, source: newestAnalyticsLocation });
};
export const useServerInviteRows = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerInviteRows(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(7);
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
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp4, tmp5);
  if (null != arg0) {
    if (cResult[3] === stateFromStoresArray) {
      if (cResult[4] === arg1) {
      }
    }
    dependencyMap = GuildMemberCountStore.getMemberCounts();
    const items1 = [];
    const items2 = [];
    let item = stateFromStoresArray.forEach((vanityURLCode) => {
      let canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode);
      if (!canResult) {
        canResult = null != vanityURLCode.vanityURLCode;
      }
      if (canResult) {
        let tmp7Result = null == closure_1;
        if (!tmp7Result) {
          const formatted = closure_1.toLowerCase();
          tmp7Result = fuzzysearchDefault(formatted, str.toLowerCase());
        }
        if (tmp7Result) {
          if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
            const obj = { guild: vanityURLCode, memberCount: null };
            let num = closure_2[vanityURLCode.id];
            if (num == null) {
              num = 0;
            }
            obj.memberCount = num;
            const currentUser = UserStore.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            if (vanityURLCode.ownerId === id) {
              items1.push(obj);
            } else {
              items2.push(obj);
            }
          }
        }
        str = vanityURLCode.name;
      }
    });
    const items3 = [items1, items2];
    cResult[3] = stateFromStoresArray;
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = items3;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [[], []];
      cResult[2] = items4;
      let tmp8 = items4;
    } else {
      tmp8 = cResult[2];
    }
    return tmp8;
  }
  const tmpResult = require("initialize");
}) : (function useServerInviteRows(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [SortedGuildStore, GuildStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
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
  return noop.useMemo(() => {
    if (null == memberCounts2) {
      const items = [[], []];
      return items;
    } else {
      memberCounts2 = memberCounts.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let canResult = PermissionStore.can(constants.CREATE_INSTANT_INVITE, vanityURLCode);
        if (!canResult) {
          canResult = null != vanityURLCode.vanityURLCode;
        }
        if (canResult) {
          let tmp7Result = null == items1;
          if (!tmp7Result) {
            const formatted = items1.toLowerCase();
            tmp7Result = fuzzysearchDefault(formatted, str.toLowerCase());
          }
          if (tmp7Result) {
            if (!GuildMemberStore.isMember(vanityURLCode.id, closure_0)) {
              const obj = { guild: vanityURLCode, memberCount: null };
              let num = closure_0[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              obj.memberCount = num;
              const currentUser = UserStore.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (vanityURLCode.ownerId === id) {
                items1.push(obj);
              } else {
                items2.push(obj);
              }
            }
          }
          str = vanityURLCode.name;
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
});
export const sendGuildInvite = function sendGuildInvite() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};