// === Module 7046: IntegrationPermissionUtils ===

// Module 7046 (IntegrationPermissionUtils)
import Server from "Server" /* 1985 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7047 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function commandPermissions(arg0, items) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(arg0);
  const tmp2 = entries[Symbol.iterator]();
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
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx");

export const commandName = function commandName(arg0, arg1) {
  let text = arg1;
  if (arg0 === Server.ApplicationCommandType.CHAT) {
    text = `/${arg1}`;
  }
  return text;
};
export const commandPermissionChannels = function commandPermissionChannels(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
};
export const commandPermissionMembersRoles = function commandPermissionMembersRoles(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE, ApplicationCommandTypes.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
};
export const toPermissionKey = function toPermissionKey(allChannelsSentinelResult, CHANNEL) {
  return "" + allChannelsSentinelResult + ":" + CHANNEL;
};
export const keyPermissions = function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((id) => {
    const items = ["" + id.id + ":" + id.type, id];
    return items;
  }));
};