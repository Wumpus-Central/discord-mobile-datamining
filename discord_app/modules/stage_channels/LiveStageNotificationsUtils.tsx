// === Module 9864: useCanSendStageStartNotification ===

// Module 9864 (useCanSendStageStartNotification)
import closure_2 from "handleInviteData" /* 4368 */;
import closure_3 from "getUncachedChannelPermissions" /* 4091 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = function useCanSendStageStartNotification(first) {
  const _require = first;
  const items = [closure_3];
  const items1 = [first];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.MENTION_EVERYONE, tmp);
    }
    return canResult;
  }, items1);
};
export const useDefaultSendStartStageNotificationToggle = function useDefaultSendStartStageNotificationToggle(first) {
  let guild_id;
  if (first != null) {
    guild_id = first.guild_id;
  }
  const items = [closure_2];
  const items1 = [guild_id];
  const stateFromStores = guild_id(589).useStateFromStores(items, () => closure_1_2.getMemberCount(guild_id), items1);
  let tmp3 = null == first;
  if (!tmp3) {
    let tmp4 = null == stateFromStores;
    if (!tmp4) {
      tmp4 = stateFromStores > 50000;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
};