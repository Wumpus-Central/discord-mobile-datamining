// discord_app/modules/instant_invite/native/GuildInviteUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getSystemLocale from "getSystemLocale";
import comparator from "comparator";
import handleInviteData from "handleInviteData";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import closure_8 from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import { setSendState } from "setSendState";
import { InviteSendStates } from "InviteSendStates";
import ME from "ME";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

let closure_14;
let closure_15;
const require = arg1;
function _sendGuildInvite() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
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
              let getSystemLocale = tmp3;
              let code = tmp7;
              code = undefined;
              let defaultChannel = 1;
              outer1_12(callback, callback2, outer1_13.SENDING);
              const AccessibilityAnnouncer2 = callback(1351).AccessibilityAnnouncer;
              const intl2 = callback(1236).intl;
              AccessibilityAnnouncer2.announce(intl2.string(callback(1236).t.kC3ZRG));
              defaultChannel = defaultChannel.getDefaultChannel(callback2, true, outer1_14.CREATE_INSTANT_INVITE);
              if (null == defaultChannel) {
                const _Error = Error;
                throw Error();
              } else {
                const obj1 = { max_uses: null, max_age: null, unique: true };
                obj1[0] = callback2(9116).INVITE_OPTIONS_ONCE.value;
                obj1[1] = callback2(9116).INVITE_OPTIONS_7_DAYS.value;
                c6 = 2;
                c7 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = callback2(7803).createInvite(defaultChannel.id, obj1, tmp45);
                return obj2;
              }
              tmp45 = dependencyMap;
            }
          } else {
            if (1 === tmp7) {
              defaultChannel = 0;
              callback3(callback, callback2, constants.ERROR);
              let AccessibilityAnnouncer = callback(1351).AccessibilityAnnouncer;
              let intl = callback(1236).intl;
              AccessibilityAnnouncer.announce(intl.string(callback(1236).t.fEptJP));
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              code = arg1;
              let obj4 = callback2(9179);
              const obj3 = { inviteKey: null, type: null, user: null, location: null, inviteAnalyticsMetadata: null };
              obj3[0] = code.code;
              obj3[1] = callback(9179).InvitePropertiesType.USER;
              obj3[2] = user.getUser(callback);
              obj3[3] = dependencyMap;
              obj4 = { source: null };
              obj4[0] = dependencyMap;
              obj3[4] = obj4;
              obj4.enqueue(obj3, () => {
                outer1_12(callback, closure_1, outer1_13.SENT);
                const AccessibilityAnnouncer = callback(1351).AccessibilityAnnouncer;
                const intl = callback(1236).intl;
                AccessibilityAnnouncer.announce(intl.string(callback(1236).t.PuLLzP));
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
  const _sendGuildInvite = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Permissions: closure_14, AnalyticEvents: closure_15 } = ME);
const result = require("comparator").fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  let obj = expandEventProperties;
  obj = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants.OPEN_POPOUT, obj);
  const obj3 = ACTION_SHEET_HEIGHT_HALF;
  obj = { recipientId: id, source: newestAnalyticsLocation };
  obj3.openLazy(asyncRequireImpl(12563, dependencyMap.paths), "invite-to-guilds-" + id, obj);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  const _require = id;
  let closure_1 = query;
  let items = [insertUnsortedGuilds, closure_8];
  stateFromStoresArray = _require(stateFromStoresArray[17]).useStateFromStoresArray(items, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((arg0) => {
      const guild = outer1_8.getGuild(arg0);
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
      memberCounts = outer1_6.getMemberCounts();
      const items1 = [];
      const items2 = [];
      const item = items2.forEach((vanityURLCode) => {
        let canResult = outer2_9.can(outer2_14.CREATE_INSTANT_INVITE, vanityURLCode);
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
            if (!outer2_7.isMember(vanityURLCode.id, table)) {
              const obj = { guild: null, memberCount: null };
              obj[0] = vanityURLCode;
              let num = table[vanityURLCode.id];
              if (num == null) {
                num = 0;
              }
              obj[1] = num;
              const currentUser = outer2_11.getCurrentUser();
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