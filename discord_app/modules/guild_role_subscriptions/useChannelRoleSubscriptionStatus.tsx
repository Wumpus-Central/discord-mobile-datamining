// === Module 4635: getChannelRoleSubscriptionStatus ===

// Module 4635 (getChannelRoleSubscriptionStatus)
import isSubscriptionGated from "isSubscriptionGated";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
function getChannelRoleSubscriptionStatus(id, getUncachedChannelPermissions, ensureGuildLoaded, closure_6) {
  let obj = getUncachedChannelPermissions;
  if (getUncachedChannelPermissions === undefined) {
    obj = ensureGuildLoaded;
  }
  let obj2 = ensureGuildLoaded;
  if (ensureGuildLoaded === undefined) {
    obj2 = isSubscriptionGated;
  }
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = getUncachedChannelPermissions;
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
let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const _require = arg0;
  const items = [ensureGuildLoaded, isSubscriptionGated, getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => outer1_7(closure_0, outer1_3, outer1_2, outer1_4), items1);
};
export { getChannelRoleSubscriptionStatus };