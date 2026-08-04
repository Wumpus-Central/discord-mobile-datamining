// discord_app/modules/channel/getConnectionsRoles.tsx
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import importAllResult from "fromString";

let ChannelTypes;
let Permissions;
({ ChannelTypes, Permissions } = ME);
let items = [, , , , , ];
({ GUILD_TEXT: arr[0], GUILD_VOICE: arr[1], GUILD_ANNOUNCEMENT: arr[2], GUILD_FORUM: arr[3], PUBLIC_THREAD: arr[4], PRIVATE_THREAD: arr[5] } = ChannelTypes);
let closure_5 = require("fromString").combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const result = require("ME").fileFinishedImporting("modules/channel/getConnectionsRoles.tsx");

export default function getConnectionsRoles(type) {
  if (null != type) {
    if (items.includes(type.type)) {
      guild = guild.getGuild(type.guild_id);
      if (null == guild) {
        items = [];
      } else {
        const _Object = Object;
        const values = Object.values(type.permissionOverwrites);
        const found = values.filter((type) => {
          let tmp = 0 === type.type;
          if (tmp) {
            const role = outer1_2.getRole(guild.id, type.id);
            let guild_connections;
            if (role != null) {
              const tags = role.tags;
              if (tags != null) {
                guild_connections = tags.guild_connections;
              }
            }
            tmp = null === guild_connections;
          }
          if (tmp) {
            tmp = !guild(outer1_1[3]).hasAny(type.deny, outer1_5);
            const obj = guild(outer1_1[3]);
          }
          return tmp;
        });
        const mapped = found.map((id) => outer1_2.getRole(guild.id, id.id));
        items = mapped.filter((arg0) => null != arg0);
      }
      return items;
    }
  }
  return [];
};