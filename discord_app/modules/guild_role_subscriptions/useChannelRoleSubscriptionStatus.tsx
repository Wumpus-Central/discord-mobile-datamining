// === Module 5804: useChannelRoleSubscriptionStatus ===

// Module 5804 (useChannelRoleSubscriptionStatus)
import Constants from "Constants" /* 1085 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getChannelRoleSubscriptionStatus(id) {
  let obj3;
  let obj = ChannelStore;
  if (ChannelStore === undefined) {
    obj = ChannelStore;
  }
  let obj2 = GatedChannelStore;
  if (GatedChannelStore === undefined) {
    obj2 = GatedChannelStore;
  }
  let tmp = PermissionStore;
  if (PermissionStore === undefined) {
    tmp = PermissionStore;
  }
  const channel = obj.getChannel(id);
  let result;
  if (channel != null) {
    result = channel.isRoleSubscriptionTemplatePreviewChannel();
  }
  if (result) {
    obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: true };
  } else {
    if (null != channel) {
      if (obj2.isChannelGated(channel.guild_id, channel.id)) {
        let tmp4;
        const can = tmp.can;
        if (channel.isGuildVocal()) {
          tmp4 = !can(Permissions.CONNECT, channel);
        } else {
          tmp4 = !can(Permissions.VIEW_CHANNEL, channel);
        }
        obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp4 };
        const obj4 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp4 };
      }
    }
    obj3 = closure_6;
  }
  return obj3;
}
const Permissions = Constants.Permissions;
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return getChannelRoleSubscriptionStatus(closure_0, ChannelStore, GatedChannelStore, PermissionStore);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, GatedChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => getChannelRoleSubscriptionStatus(closure_0, ChannelStore, GatedChannelStore, PermissionStore), items1);
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default tmp2;
export { getChannelRoleSubscriptionStatus };