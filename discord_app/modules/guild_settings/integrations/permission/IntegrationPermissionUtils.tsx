// === Module 8185: IntegrationPermissionUtils ===

// Module 8185 (IntegrationPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import Server from "Server" /* 2118 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
function commandPermissions(arg0, items) {
  const obj = {};
  const entries = Object.entries(arg0);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (items.includes(tmp7.type)) {
      obj[tmp6] = tmp7;
    }
    continue;
  }
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx");

export function commandName(type, displayName) {
  let text = displayName;
  if (type === Server.ApplicationCommandType.CHAT) {
    text = `/${displayName}`;
  }
  return text;
}
export function commandPermissionChannels(arg0) {
  items = [ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
}
export function commandPermissionMembersRoles(arg0) {
  items = [ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE, ApplicationCommandTypes.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
}
export function toPermissionKey(id, CHANNEL) {
  return "" + id + ":" + CHANNEL;
}
export function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((id) => {
    items = ["" + id.id + ":" + id.type, id];
    return items;
  }));
}
export function getRequiredPermissions(defaultMemberPermissions) {
  _require = defaultMemberPermissions;
  const OrderedPermissions = require("permissions").OrderedPermissions;
  return OrderedPermissions.filter((item) => BigFlagUtilsAll.has(closure_0, item));
}