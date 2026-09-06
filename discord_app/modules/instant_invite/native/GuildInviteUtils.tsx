// === Module 13098: _sendGuildInvite ===

// Module 13098 (_sendGuildInvite)
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "comparator" /* 2012 */;
import closure_6 from "handleInviteData" /* 4480 */;
import closure_7 from "trackCommunicationDisabled" /* 2021 */;
import closure_8 from "createGuildRecordFromRust" /* 1979 */;
import closure_9 from "getUncachedChannelPermissions" /* 4199 */;
import closure_10 from "insertUnsortedGuilds" /* 5438 */;
import closure_11 from "mergeGuildAvatar" /* 1371 */;
import { setSendState } from "setSendState" /* 13099 */;
import { InviteSendStates } from "InviteSendStates" /* 7736 */;
import ME from "ME" /* 1074 */;

require = arg1;
function _sendGuildInvite() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let code = tmp7;
              code = undefined;
              let defaultChannel = 1;
              closure_1_12(callback, callback2, closure_1_13.SENDING);
              const AccessibilityAnnouncer2 = callback(4272).AccessibilityAnnouncer;
              const intl2 = callback(1114).intl;
              AccessibilityAnnouncer2.announce(intl2.string(callback(1114).t.kC3ZRG));
              defaultChannel = defaultChannel.getDefaultChannel(callback2, true, closure_1_14.CREATE_INSTANT_INVITE);
              if (null == defaultChannel) {
                const _Error = Error;
                throw Error();
              } else {
                obj1 = { max_uses: null, max_age: null, unique: true };
                obj1[0] = callback2(9822).INVITE_OPTIONS_ONCE.value;
                obj1[1] = callback2(9822).INVITE_OPTIONS_7_DAYS.value;
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback2(8378).createInvite(defaultChannel.id, obj1, tmp45);
                return obj2;
              }
              tmp45 = dependencyMap;
            }
          } else {
            if (1 === tmp7) {
              defaultChannel = 0;
              callback3(callback, callback2, constants.ERROR);
              let AccessibilityAnnouncer = callback(4272).AccessibilityAnnouncer;
              let intl = callback(1114).intl;
              AccessibilityAnnouncer.announce(intl.string(callback(1114).t.fEptJP));
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              code = arg1;
              let obj4 = callback2(9895);
              const obj3 = { inviteKey: null, type: null, user: null, location: null, inviteAnalyticsMetadata: null };
              obj3[0] = code.code;
              obj3[1] = callback(9895).InvitePropertiesType.USER;
              obj3[2] = user.getUser(callback);
              obj3[3] = dependencyMap;
              obj4 = { source: null };
              obj4[0] = dependencyMap;
              obj3[4] = obj4;
              obj4.enqueue(obj3, () => {
                closure_1_12(callback, closure_1, closure_1_13.SENT);
                const AccessibilityAnnouncer = callback(4272).AccessibilityAnnouncer;
                const intl = callback(1114).intl;
                AccessibilityAnnouncer.announce(intl.string(callback(1114).t.PuLLzP));
              });
              defaultChannel = 0;
            }
            defaultChannel = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp22) {
          if (tmp4 === defaultChannel) {
            c7 = tmp2;
            throw tmp22;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Permissions: closure_14, AnalyticEvents: closure_15 } = ME);
const result = require("set").fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  let obj = expandEventPropertiesDefault;
  obj = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants.OPEN_POPOUT, obj);
  const obj3 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { recipientId: id, source: newestAnalyticsLocation };
  obj3.openLazy(asyncRequireImpl(13100, dependencyMap.paths), "invite-to-guilds-" + id, obj);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  const _require = id;
  closure_1 = query;
  let items = [closure_10, closure_8];
  stateFromStoresArray = _require(stateFromStoresArray[17]).useStateFromStoresArray(items, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((arg0) => {
      const guild = closure_1_8.getGuild(arg0);
      if (null != guild) {
        items.push(guild);
      }
    });
    return items;
  });
  let items1 = [stateFromStoresArray, query, id];
  return React.useMemo(() => {
    if (null == memberCounts) {
      const items = [[], []];
      return items;
    } else {
      memberCounts = closure_1_6.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let canResult = closure_2_9.can(closure_2_14.CREATE_INSTANT_INVITE, vanityURLCode);
        if (!canResult) {
          canResult = null != vanityURLCode.vanityURLCode;
        }
        if (canResult) {
          let tmp7Result = null == items1;
          if (!tmp7Result) {
            const formatted = str2.toLowerCase();
            tmp7Result = items1(stateFromStoresArray[16])(formatted, str.toLowerCase());
            const tmp7 = items1(stateFromStoresArray[16]);
          }
          if (tmp7Result) {
            if (!closure_2_7.isMember(vanityURLCode.id, table)) {
              const obj = { guild: null, memberCount: null };
              obj[0] = vanityURLCode;
              let num = table[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              obj[1] = num;
              const currentUser = closure_2_11.getCurrentUser();
              id = undefined;
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
          str2 = items1;
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
};
export const sendGuildInvite = function sendGuildInvite(closure_0, id, closure_1) {
  const self = this;
  const apply = _sendGuildInvite.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};