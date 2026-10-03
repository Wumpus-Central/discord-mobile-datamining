// === Module 5797: useChannelRoleSubscriptionStatus ===

// Module 5797 (useChannelRoleSubscriptionStatus)
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

const require = fn;
function getChannelRoleSubscriptionStatus(id) {
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
    let obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: true };
  } else {
    if (null != channel) {
      if (obj2.isChannelGated(channel.guild_id, channel.id)) {
        const can = tmp.can;
        let obj4 = Permissions;
        if (channel.isGuildVocal()) {
          let tmp3 = !can(obj4.CONNECT, channel);
        } else {
          tmp3 = !can(obj4.VIEW_CHANNEL, channel);
        }
        obj4 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp3 };
      }
    }
    obj3 = closure_6;
  }
  return obj3;
}
const Permissions = fn(1085).Permissions;
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
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
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, GatedChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => getChannelRoleSubscriptionStatus(closure_0, ChannelStore, GatedChannelStore, PermissionStore), items1);
});
export { getChannelRoleSubscriptionStatus };