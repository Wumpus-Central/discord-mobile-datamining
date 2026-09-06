// discord_app/modules/instant_invite/native/GuildInviteUtils.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import fuzzysearchDefault from "../../../../_runtime/05517_fuzzysearch.js";
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import InstantInviteUtilsDefault from "../../../utils/InstantInviteUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
  await InstantInviteActionCreatorsDefault.createInvite(
    defaultChannel.id,
    {
      max_uses: InstantInviteUtilsDefault.INVITE_OPTIONS_ONCE.value,
      max_age: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.value,
      unique: true,
    },
    dependencyMap,
  );
  if (1 === tmp7) {
    c5 = 0;
    closure_132_12(closure_131_0, closure_131_1, closure_132_13.ERROR);
    let AccessibilityAnnouncer = closure_132_0(closure_132_2[18]).AccessibilityAnnouncer;
    let intl = closure_132_0(closure_132_2[19]).intl;
    AccessibilityAnnouncer.announce(intl.string(closure_132_0(closure_132_2[19]).t.fEptJP));
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_3 = value;
    closure_132_1(closure_132_2[22]);
    const obj3 = {
      inviteKey: closure_131_3.code,
      type: closure_132_0(closure_132_2[22]).InvitePropertiesType.USER,
      user: closure_132_11.getUser(closure_131_0),
      location: closure_131_2,
      inviteAnalyticsMetadata: null,
    };
    const obj4 = { source: closure_131_2 };
    obj3.inviteAnalyticsMetadata = obj4;
    obj4.enqueue(obj3, () => {
      closure_2_12(closure_1_0, closure_1_1, constants.SENT);
      const AccessibilityAnnouncer = closure_0(4272).AccessibilityAnnouncer;
      const intl = closure_0(1114).intl;
      AccessibilityAnnouncer.announce(intl.string(closure_0(1114).t.PuLLzP));
    });
    c5 = 0;
  }
  return value;
};
const setSendState = fn(13099).setSendState;
const InviteSendStates = fn(7736).InviteSendStates;
const Constants = fn(1074);
({ Permissions: closure_14, AnalyticEvents: closure_15 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/GuildInviteUtils.tsx");

export const showGuildInviteActionSheet = function showGuildInviteActionSheet(id, newestAnalyticsLocation) {
  let obj = { type: "Invite to Guilds", source: newestAnalyticsLocation };
  obj.track(constants2.OPEN_POPOUT, obj);
  const obj3 = ActionSheetActionCreatorsDefault;
  obj = { recipientId: id, source: newestAnalyticsLocation };
  obj3.openLazy(asyncRequireImpl(13100, dependencyMap.paths), "invite-to-guilds-" + id, obj);
};
export const useServerInviteRows = function useServerInviteRows(id, query) {
  _require = id;
  closure_1 = query;
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
  let items1 = [stateFromStoresArray, query, id];
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
        }
      });
      const items3 = [items1, items2];
      return items3;
    }
  }, items1);
};
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
