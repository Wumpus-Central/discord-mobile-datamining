// discord_app/modules/instant_invite/native/useMobileInviteSuggestions.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../stores/InviteSuggestionsStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";

const require = fn;
const InviteTargetTypes = fn(7736).InviteTargetTypes;
const AnalyticEvents = fn(1074).AnalyticEvents;
const NOOP_NULL = fn(1085).NOOP_NULL;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, _location, arg2, application_id) {
  _require = arg0;
  dependencyMap = arg2;
  _slicedToArray = application_id;
  let items = [closure_7, SortedVoiceStateStore];
  const tmp = _slicedToArray(
    require("initialize").useStateFromStoresArray(items, () => {
      const items = [InviteSuggestionsStore.getInviteSuggestionRows()];
      let voiceStatesForChannel = null;
      if (null != closure_0) {
        voiceStatesForChannel = SortedVoiceStateStore.getVoiceStatesForChannel(tmp);
      }
      items[1] = voiceStatesForChannel;
      return items;
    }),
    2,
  );
  const rows = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = _slicedToArray(rows.useState(true), 2);
  const isFetchingRows = tmp3[0];
  closure_7 = tmp3[1];
  const items1 = [rows, arg0, isFetchingRows, application_id, _location];
  const effect = rows.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = InviteSuggestionsStore.getInitialCounts();
      const obj = {
        location: _location,
        num_suggestions: rows.length,
        guild_id: closure_0.guild_id,
        num_friends: null,
        num_dms: null,
        num_group_dms: null,
        application_id: null,
      };
      ({ numFriends: obj2.num_friends, numDms: obj2.num_dms, numGroupDms: obj2.num_group_dms } = initialCounts);
      obj.application_id = application_id;
      obj.track(AnalyticEvents.INVITE_SUGGESTION_OPENED, obj);
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
      closure_0(9846);
      let obj = { location: "useMobileInviteSuggestions", guildId: set.guild_id };
      isGuildVoiceResult = obj.getGuildMembersInMobileVCInvitesExperiment(obj);
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
      obj = {
        omitUserIds: set,
        guild: isFetchingRows.getGuild(set.guild_id),
        channel: set,
        inviteTargetType: dependencyMap,
      };
      const inviteSuggestions = closure_0(9847).loadInviteSuggestions(obj);
      const obj3 = closure_0(9847);
      inviteSuggestions.catch(NOOP_NULL).finally(() => {
        closure_1_7(false);
      });
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
}
