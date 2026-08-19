// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
import PermissionOverwriteType from "../../../../flow/Server.tsx";
import ApplicationCommandSectionType from "../../../application_commands/ApplicationCommandTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";

require = fn;
function commandPermissions(arg0, items) {
  const obj = {};
  const entries = Object.entries(arg0);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    if (items.includes(tmp7.type)) {
      obj[tmp6] = tmp7;
    }
    continue;
  }
  return obj;
}
const result = require("obj132").fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx");

export const commandName = function commandName(closure_1_3) {
  let text = arg1;
  if (commandPermissions === PermissionOverwriteType.ApplicationCommandType.CHAT) {
    text = `/${arg1}`;
  }
  return text;
};
export const commandPermissionChannels = function commandPermissionChannels(arg0) {
  const items = [ApplicationCommandSectionType.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
};
export const commandPermissionMembersRoles = function commandPermissionMembersRoles(arg0) {
  const items = [ApplicationCommandSectionType.ApplicationCommandPermissionType.ROLE, ApplicationCommandSectionType.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
};
export const toPermissionKey = function toPermissionKey(allChannelsSentinelResult, CHANNEL) {
  return "" + allChannelsSentinelResult + ":" + CHANNEL;
};
export const keyPermissions = function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((item, index) => {
    const items = ["" + item.id + ":" + item.type, item];
    return items;
  }));
};