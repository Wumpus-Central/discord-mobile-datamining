// discord_app/modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx
import Server from "../../../../flow/Server.tsx";
import ApplicationCommandTypes from "../../../application_commands/ApplicationCommandTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

require = fn;
function commandPermissions(arg0, items) {
  const obj = {};
  const entries = Object.entries(arg0);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (items.includes(tmp7.type)) {
      obj[tmp6] = tmp8;
    }
    continue;
  }
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx",
);

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
  const items = [
    ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE,
    ApplicationCommandTypes.ApplicationCommandPermissionType.USER,
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
