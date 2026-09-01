// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
import PermissionOverwriteType from "../../../../flow/Server.tsx";
import ApplicationCommandSectionType from "../../../application_commands/ApplicationCommandTypes.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";

require = arg1;
function commandPermissions(arg0, items) {
  const obj = {};
  const entries = Object.entries(arg0);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (items.includes(tmp7.type)) {
      let tmp9 = tmp6;
      let tmp10 = tmp7;
      obj[tmp6] = tmp8;
    }
    continue;
  }
  return obj;
}
const result = require("set").fileFinishedImporting(
  "modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx",
);

export const commandName = function commandName(arg0) {
  let text = arg1;
  if (arg0 === PermissionOverwriteType.ApplicationCommandType.CHAT) {
    text = `/${arg1}`;
  }
  return text;
};
export const commandPermissionChannels = function commandPermissionChannels(arg0) {
  const items = [ApplicationCommandSectionType.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
};
export const commandPermissionMembersRoles = function commandPermissionMembersRoles(arg0) {
  const items = [
    ApplicationCommandSectionType.ApplicationCommandPermissionType.ROLE,
    ApplicationCommandSectionType.ApplicationCommandPermissionType.USER,
  ];
  return commandPermissions(arg0, items);
};
export const toPermissionKey = function toPermissionKey(allChannelsSentinelResult, CHANNEL) {
  return "" + allChannelsSentinelResult + ":" + CHANNEL;
};
export const keyPermissions = function keyPermissions(permissions) {
  return Object.fromEntries(
    permissions.map((id) => {
      const items = ["" + id.id + ":" + id.type, id];
      return items;
    }),
  );
};
