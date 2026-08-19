// === Module 8911: useCanSendStageStartNotification ===

// Module 8911 (useCanSendStageStartNotification)
import handleInviteData from "handleInviteData" /* 4295 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "sum" /* 505 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_3.can(Permissions.MENTION_EVERYONE, tmp);
    }
    return canResult;
  }, items1);
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(guild_id) {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [closure_2];
  const items1 = [guild_id];
  const stateFromStores = guild_id(589).useStateFromStores(items, () => closure_1_2.getMemberCount(guild_id), items1);
  let tmp3 = null == guild_id;
  if (!tmp3) {
    let tmp4 = null == stateFromStores;
    if (!tmp4) {
      tmp4 = stateFromStores > 50000;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
};