// === Module 9493: useMobileInviteSuggestions ===

// Module 9493 (useMobileInviteSuggestions)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants3 from "Constants" /* 7226 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9494 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let _slicedToArray = _slicedToArray_mod;
const InviteTargetTypes = Constants3.InviteTargetTypes;
const AnalyticEvents = Constants.AnalyticEvents;
const NOOP_NULL = Constants2.NOOP_NULL;
const result = size.fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, _location, inviteTargetType, application_id) {
  let closure_0;
  let closure_5;
  let closure_7;
  let isFetchingRows;
  let rows;
  _require = arg0;
  dependencyMap = inviteTargetType;
  _slicedToArray = application_id;
  let obj = require("get initialized");
  let items = [closure_7, SortedVoiceStateStore];
  [rows, closure_5] = obj.useStateFromStoresArray(items, () => {
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
      const obj3 = { location: _location, num_suggestions: rows.length, guild_id: closure_0.guild_id, num_friends: null, num_dms: null, num_group_dms: null, application_id };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.INVITE_SUGGESTION_OPENED, obj3);
    }
  }, items1);
  const items2 = [arg0, inviteTargetType];
  const effect1 = rows.useEffect(function() {
    closure_7(true);
    let isGuildVoiceResult = !tmp3;
    if (inviteTargetType !== constants.EMBEDDED_APPLICATION) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      const obj2 = { location: "useMobileInviteSuggestions", guildId: set.guild_id };
      const obj = closure_0(inviteTargetType[11]);
      isGuildVoiceResult = obj.getGuildMembersInMobileVCInvitesExperiment(obj2);
    }
    if (inviteTargetType !== constants.EMBEDDED_APPLICATION) {
      let memberIds;
      if (!isGuildVoiceResult) {
        memberIds = closure_5.getMemberIds(set.guild_id);
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(memberIds);
      if (isGuildVoiceResult) {
        isGuildVoiceResult = null != closure_5;
      }
      if (isGuildVoiceResult) {
        const item = closure_5.forEach((user) => {
          set.add(user.user.id);
        });
      }
      const obj3 = { omitUserIds: set, guild: isFetchingRows.getGuild(set.guild_id), channel: set, inviteTargetType };
      const loadInviteSuggestions = closure_0(inviteTargetType[12]).loadInviteSuggestions;
      closure_0(inviteTargetType[12]);
      const inviteSuggestions = loadInviteSuggestions(obj3);
      const catchPromise = inviteSuggestions.catch(NOOP_NULL);
      catchPromise.finally(() => {
        closure_1_7(false);
      });
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
};