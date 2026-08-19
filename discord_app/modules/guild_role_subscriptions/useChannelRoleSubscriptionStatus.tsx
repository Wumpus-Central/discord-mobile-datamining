// === Module 6817: getChannelRoleSubscriptionStatus ===

// Module 6817 (getChannelRoleSubscriptionStatus)
import isSubscriptionGated from "isSubscriptionGated" /* 1981 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
function getChannelRoleSubscriptionStatus(id, closure_1_7, closure_1_6, closure_1_8) {
  let obj = getChannelRoleSubscriptionStatus;
  if (getChannelRoleSubscriptionStatus === undefined) {
    obj = closure_3;
  }
  let obj2 = closure_1_6;
  if (closure_1_6 === undefined) {
    obj2 = closure_2;
  }
  let tmp = closure_1_8;
  if (closure_1_8 === undefined) {
    tmp = closure_4;
  }
  const channel = obj.getChannel(id);
  let result;
  if (channel != null) {
    result = channel.isRoleSubscriptionTemplatePreviewChannel();
  }
  if (result) {
    obj = { isSubscriptionGated: true, needSubscriptionToAccess: true };
  } else {
    if (null != channel) {
      if (obj2.isChannelGated(channel.guild_id, channel.id)) {
        const can = tmp.can;
        obj = Permissions;
        if (channel.isGuildVocal()) {
          let tmp3 = !can(obj.CONNECT, channel);
        } else {
          tmp3 = !can(obj.VIEW_CHANNEL, channel);
        }
        obj = { isSubscriptionGated: true, needSubscriptionToAccess: null };
        obj[1] = tmp3;
      }
    }
    obj = closure_6;
  }
  return obj;
}
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2, closure_4];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => getChannelRoleSubscriptionStatus(closure_0, closure_1_3, closure_1_2, closure_1_4), items1);
};
export { getChannelRoleSubscriptionStatus };