// discord_app/modules/instant_invite/native/useMobileInviteSuggestions.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _computeRows from "_computeRows";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { InviteTargetTypes } from "InviteSendStates";
import { AnalyticEvents } from "ME";
import { NOOP_NULL } from "sum";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const callback = arg3;
  let items = [_computeRows, getVoiceStatesForGuild];
  const tmp = callback(_initialize.useStateFromStoresArray(items, () => {
    const items = [store.getInviteSuggestionRows(), ];
    let voiceStatesForChannel = null;
    if (null != closure_0) {
      voiceStatesForChannel = outer1_8.getVoiceStatesForChannel(tmp);
    }
    items[1] = voiceStatesForChannel;
    return items;
  }), 2);
  const rows = tmp[0];
  let trackCommunicationDisabled = tmp[1];
  const tmp3 = callback(rows.useState(true), 2);
  const isFetchingRows = tmp3[0];
  _computeRows = tmp3[1];
  const items1 = [rows, arg0, isFetchingRows, arg3, arg1];
  const effect = rows.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = store.getInitialCounts();
      let obj = callback(698);
      obj = { location: null, num_suggestions: null, guild_id: null, num_friends: null, num_dms: null, num_group_dms: null, application_id: null };
      obj[0] = callback;
      obj[1] = rows.length;
      obj[2] = lib.guild_id;
      ({ numFriends: obj2[3], numDms: obj2[4], numGroupDms: obj2[5] } = initialCounts);
      obj[6] = _slicedToArray;
      obj.track(outer1_10.INVITE_SUGGESTION_OPENED, obj);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(() => {
    store(true);
    let isGuildVoiceResult = !tmp3;
    if (dependencyMap !== outer1_9.EMBEDDED_APPLICATION) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      let obj = lib(9125);
      obj = { location: "useMobileInviteSuggestions", guildId: null };
      obj[1] = set.guild_id;
      isGuildVoiceResult = obj.getGuildMembersInMobileVCInvitesExperiment(obj);
    }
    if (dependencyMap !== outer1_9.EMBEDDED_APPLICATION) {
      if (!isGuildVoiceResult) {
        let memberIds = trackCommunicationDisabled.getMemberIds(set.guild_id);
      }
      const _Set = Set;
      set = new Set(memberIds);
      if (isGuildVoiceResult) {
        isGuildVoiceResult = null != trackCommunicationDisabled;
      }
      if (isGuildVoiceResult) {
        const item = trackCommunicationDisabled.forEach((user) => {
          set.add(user.user.id);
        });
      }
      obj = { omitUserIds: null, guild: null, channel: null, inviteTargetType: null };
      obj[0] = set;
      obj[1] = isFetchingRows.getGuild(set.guild_id);
      obj[2] = set;
      obj[3] = dependencyMap;
      const inviteSuggestions = lib(9126).loadInviteSuggestions(obj);
      const obj3 = lib(9126);
      inviteSuggestions.catch(outer1_11).finally(() => {
        callback(false);
      });
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
};