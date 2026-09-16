// discord_app/modules/instant_invite/native/useMobileInviteSuggestions.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../stores/InviteSuggestionsStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const InviteTargetTypes = fn(7850).InviteTargetTypes;
const AnalyticEvents = fn(1074).AnalyticEvents;
const NOOP_NULL = fn(1085).NOOP_NULL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, _location, arg2, application_id) {
  _require = arg0;
  dependencyMap = arg2;
  _slicedToArray = application_id;
  let items = [closure_7, SortedVoiceStateStore];
  [rows, closure_5] = require("initialize").useStateFromStoresArray(items, () => {
    const items = [InviteSuggestionsStore.getInviteSuggestionRows()];
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
      const obj3 = {
        location: _location,
        num_suggestions: rows.length,
        guild_id: closure_0.guild_id,
        num_friends: null,
        num_dms: null,
        num_group_dms: null,
        application_id: null,
      };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      obj3.application_id = application_id;
      AnalyticsUtilsDefault.track(AnalyticEvents.INVITE_SUGGESTION_OPENED, obj3);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(() => {
    closure_7(true);
    let isGuildVoiceResult = !tmp3;
    if (dependencyMap !== constants.EMBEDDED_APPLICATION) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      const obj2 = { location: "useMobileInviteSuggestions", guildId: set.guild_id };
      isGuildVoiceResult = closure_0(9986).getGuildMembersInMobileVCInvitesExperiment(obj2);
      const obj = closure_0(9986);
    }
    if (dependencyMap !== constants.EMBEDDED_APPLICATION) {
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
      const obj4 = {
        omitUserIds: set,
        guild: isFetchingRows.getGuild(set.guild_id),
        channel: set,
        inviteTargetType: dependencyMap,
      };
      const inviteSuggestions = closure_0(9987).loadInviteSuggestions(obj4);
      const obj3 = closure_0(9987);
      inviteSuggestions.catch(NOOP_NULL).finally(() => {
        closure_1_7(false);
      });
      const catchPromise = inviteSuggestions.catch(NOOP_NULL);
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
}
