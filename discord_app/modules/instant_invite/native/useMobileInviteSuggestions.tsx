// === Module 9113: useMobileInviteSuggestions ===

// Module 9113 (useMobileInviteSuggestions)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9114 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5762 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const NOOP_NULL = fn(1083).NOOP_NULL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, _location, inviteTargetType, application_id) {
  _require = arg0;
  dependencyMap = inviteTargetType;
  _slicedToArray = application_id;
  let items = [closure_7, SortedVoiceStateStore];
  [rows, closure_5] = require("initialize").useStateFromStoresArray(items, () => {
    const items = [InviteSuggestionsStore.getInviteSuggestionRows(), ];
    let voiceStatesForChannel = null;
    if (null != closure_0) {
      voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(tmp);
    }
    items[1] = voiceStatesForChannel;
    return items;
  });
  [isFetchingRows, closure_7] = rows.useState(true);
  const items1 = [rows, arg0, isFetchingRows, application_id, _location];
  const effect = rows.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = InviteSuggestionsStore.getInitialCounts();
      const obj3 = { location: _location, num_suggestions: rows.length, guild_id: closure_0.guild_id, num_friends: null, num_dms: null, num_group_dms: null, application_id: null };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      obj3.application_id = application_id;
      AnalyticsUtilsDefault.track(AnalyticEvents.INVITE_SUGGESTION_OPENED, obj3);
    }
  }, items1);
  const items2 = [arg0, inviteTargetType];
  const effect1 = rows.useEffect(() => {
    closure_7(true);
    const tmp5 = inviteTargetType === closure_0(inviteTargetType[10]).InviteTargetTypes.EMBEDDED_APPLICATION;
    let isGuildVoiceResult = !tmp5;
    if (!tmp5) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      const obj = { location: "useMobileInviteSuggestions", guildId: set.guild_id };
      isGuildVoiceResult = closure_0(inviteTargetType[11]).getGuildMembersInMobileVCInvitesExperiment(obj);
      const tmp3Result = closure_0(inviteTargetType[11]);
    }
    if (!tmp5) {
      if (!isGuildVoiceResult) {
        let memberIds = closure_5.getMemberIds(set.guild_id);
      }
      const _Set = Set;
      set = new Set(memberIds);
      if (isGuildVoiceResult) {
        isGuildVoiceResult = null != closure_5;
      }
      if (isGuildVoiceResult) {
        const item = closure_5.forEach((user) => {
          set.add(user.user.id);
        });
      }
      const obj2 = { omitUserIds: set, guild: isFetchingRows.getGuild(set.guild_id), channel: set, inviteTargetType };
      const inviteSuggestions = closure_0(inviteTargetType[12]).loadInviteSuggestions(obj2);
      const tmp3Result2 = closure_0(inviteTargetType[12]);
      inviteSuggestions.catch(NOOP_NULL).finally(() => {
        closure_1_7(false);
      });
      const catchPromise = inviteSuggestions.catch(NOOP_NULL);
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
};