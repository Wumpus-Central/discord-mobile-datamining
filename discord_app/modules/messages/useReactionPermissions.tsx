// === Module 10913: useReactionPermissions ===

// Module 10913 (useReactionPermissions)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "initialize" /* 4092 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "recomputeGuild" /* 5325 */;
import closure_7 from "getUncachedChannelPermissions" /* 4091 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default function useReactionPermissions(guild_id) {
  const _require = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let obj = _require(stateFromStores[6]);
  const items = [closure_6];
  const items1 = [guild_id];
  stateFromStores = obj.useStateFromStores(items, () => {
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = closure_1_6.canChatInGuild(tmp);
    }
    return canChatInGuildResult;
  }, items1);
  const items2 = [closure_4];
  const items3 = [guild_id];
  const stateFromStores1 = _require(stateFromStores[6]).useStateFromStores(items2, () => {
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = closure_1_4.isLurking(tmp);
    }
    return isLurkingResult;
  }, items3);
  const obj2 = _require(stateFromStores[6]);
  const tmp2 = stateFromStores;
  const items4 = [closure_5];
  const items5 = [guild_id];
  const stateFromStores2 = _require(stateFromStores[6]).useStateFromStores(items4, () => {
    let isCurrentUserGuestResult = null != guild_id;
    if (isCurrentUserGuestResult) {
      isCurrentUserGuestResult = closure_1_5.isCurrentUserGuest(tmp);
    }
    return isCurrentUserGuestResult;
  }, items5);
  const obj3 = _require(stateFromStores[6]);
  const items6 = [closure_7];
  const items7 = [stateFromStores, guild_id];
  const stateFromStores3 = _require(stateFromStores[6]).useStateFromStores(items6, () => {
    let canResult = stateFromStores;
    if (stateFromStores) {
      canResult = closure_1_7.can(closure_1_8.ADD_REACTIONS, closure_0);
    }
    return canResult;
  }, items7);
  const obj4 = _require(stateFromStores[6]);
  const currentUserAutomodQuaratinedProfile = _require(stateFromStores[7]).useCurrentUserAutomodQuaratinedProfile(guild_id);
  const obj5 = _require(stateFromStores[7]);
  _require(stateFromStores[9]);
  if (null == guild_id) {
    obj = { disableReactionReads: true, disableReactionCreates: true, disableReactionUpdates: true, isLurking: false, isGuest: false, isPendingMember: false };
  } else {
    obj = {};
    obj = { channel: null, canChat: null, renderReactions: true, canAddNewReactions: null, isLurking: null, communicationDisabled: null, isActiveChannelOrUnarchivableThread: null, isAutomodQuarantined: null };
    obj[0] = guild_id;
    obj[1] = stateFromStores;
    obj[3] = stateFromStores3;
    obj[4] = stateFromStores1;
    obj[5] = callback(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
    obj[6] = tmp9;
    obj[7] = currentUserAutomodQuaratinedProfile;
    const merged = Object.assign(guild_id(tmp2[10])(obj));
    obj.isLurking = stateFromStores1;
    obj.isGuest = stateFromStores2;
    obj.isPendingMember = false;
  }
  return obj;
};