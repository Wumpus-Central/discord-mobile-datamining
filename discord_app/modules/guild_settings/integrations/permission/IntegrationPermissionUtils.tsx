// === Module 7703: IntegrationPermissionUtils ===

// Module 7703 (IntegrationPermissionUtils)
import Server from "Server" /* 1992 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5683 */;
import _slicedToArray from "module_32" /* 32 */;

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

export function commandName(arg0, arg1) {
  let text = arg1;
  if (arg0 === Server.ApplicationCommandType.CHAT) {
    text = `/${arg1}`;
  }
  return text;
}
export function commandPermissionChannels(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
}
export function commandPermissionMembersRoles(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE, ApplicationCommandTypes.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
}
export function toPermissionKey(allChannelsSentinelResult, CHANNEL) {
  return "" + allChannelsSentinelResult + ":" + CHANNEL;
}
export function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((id) => {
    const items = ["" + id.id + ":" + id.type, id];
    return items;
  }));
}