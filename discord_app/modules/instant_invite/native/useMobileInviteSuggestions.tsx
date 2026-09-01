// === Module 9921: useMobileInviteSuggestions ===

// Module 9921 (useMobileInviteSuggestions)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "_computeRows" /* 9922 */;
import closure_8 from "getVoiceStatesForGuild" /* 4555 */;
import { InviteTargetTypes } from "InviteSendStates" /* 7481 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { NOOP_NULL } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/instant_invite/native/useMobileInviteSuggestions.tsx");

export default function useMobileInviteSuggestions(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  const callback = arg3;
  let items = [closure_7, closure_8];
  const tmp = callback(_require(589).useStateFromStoresArray(items, () => {
    const items = [store.getInviteSuggestionRows(), ];
    let voiceStatesForChannel = null;
    if (null != closure_0) {
      voiceStatesForChannel = closure_1_8.getVoiceStatesForChannel(tmp);
    }
    items[1] = voiceStatesForChannel;
    return items;
  }), 2);
  const rows = tmp[0];
  closure_5 = tmp[1];
  const tmp3 = callback(rows.useState(true), 2);
  const isFetchingRows = tmp3[0];
  closure_7 = tmp3[1];
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
      obj[6] = closure_3;
      obj.track(closure_1_10.INVITE_SUGGESTION_OPENED, obj);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(() => {
    store(true);
    let isGuildVoiceResult = !tmp3;
    if (dependencyMap !== closure_1_9.EMBEDDED_APPLICATION) {
      isGuildVoiceResult = set.isGuildVoice();
    }
    if (isGuildVoiceResult) {
      let obj = lib(9937);
      obj = { location: "useMobileInviteSuggestions", guildId: null };
      obj[1] = set.guild_id;
      isGuildVoiceResult = obj.getGuildMembersInMobileVCInvitesExperiment(obj);
    }
    if (dependencyMap !== closure_1_9.EMBEDDED_APPLICATION) {
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
      obj = { omitUserIds: null, guild: null, channel: null, inviteTargetType: null };
      obj[0] = set;
      obj[1] = isFetchingRows.getGuild(set.guild_id);
      obj[2] = set;
      obj[3] = dependencyMap;
      const inviteSuggestions = lib(9938).loadInviteSuggestions(obj);
      const obj3 = lib(9938);
      inviteSuggestions.catch(closure_1_11).finally(() => {
        callback(false);
      });
    }
    memberIds = [];
  }, items2);
  return { rows, isFetchingRows };
};