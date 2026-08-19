// === Module 6817: getChannelRoleSubscriptionStatus ===

// Module 6817 (getChannelRoleSubscriptionStatus)
import closure_2 from "isSubscriptionGated" /* 1981 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
function getChannelRoleSubscriptionStatus(id, closure_1_7, closure_1_6, closure_1_8) {
  let obj = closure_1_7;
  if (closure_1_7 === undefined) {
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
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2, closure_4];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => closure_1_7(closure_0, closure_1_3, closure_1_2, closure_1_4), items1);
};
export { getChannelRoleSubscriptionStatus };