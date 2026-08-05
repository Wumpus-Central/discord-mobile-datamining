// discord_app/modules/instant_invite/native/useInviteSuggestionRows.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _computeRows from "_computeRows";
import { InviteTargetTypes } from "InviteSendStates";
import { AnalyticEvents } from "ME";
import { NOOP_NULL } from "sum";

const require = arg1;
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/instant_invite/native/useInviteSuggestionRows.tsx");

export default function _default(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const callback = arg3;
  let items = [_computeRows];
  const rows = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => inviteSuggestionRows.getInviteSuggestionRows());
  let tmp2 = callback(rows.useState(true), 2);
  const isFetchingRows = tmp2[0];
  let createGuildRecordFromRust = tmp2[1];
  const items1 = [rows, arg0, isFetchingRows, arg3, arg1];
  const effect = rows.useEffect(() => {
    if (!isFetchingRows) {
      const initialCounts = outer1_7.getInitialCounts();
      let obj = callback(698);
      obj = { location: null, num_suggestions: null, guild_id: null, num_friends: null, num_dms: null, num_group_dms: null, application_id: null };
      obj[0] = callback;
      obj[1] = rows.length;
      obj[2] = lib.guild_id;
      ({ numFriends: obj2[3], numDms: obj2[4], numGroupDms: obj2[5] } = initialCounts);
      obj[6] = _slicedToArray;
      obj.track(outer1_9.INVITE_SUGGESTION_OPENED, obj);
    }
  }, items1);
  const items2 = [arg0, arg2];
  const effect1 = rows.useEffect(() => {
    guild(true);
    if (dependencyMap === outer1_8.EMBEDDED_APPLICATION) {
      let items = [];
    } else {
      items = isFetchingRows.getMemberIds(lib.guild_id);
    }
    let obj = lib(9002);
    obj = { omitUserIds: null, guild: null, channel: null, inviteTargetType: null };
    obj[0] = new Set(items);
    obj[1] = guild.getGuild(lib.guild_id);
    obj[2] = lib;
    obj[3] = dependencyMap;
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set(items);
    const tmp2 = dependencyMap;
    inviteSuggestions.catch(outer1_10).finally(() => {
      callback(false);
    });
  }, items2);
  return { rows, isFetchingRows };
};