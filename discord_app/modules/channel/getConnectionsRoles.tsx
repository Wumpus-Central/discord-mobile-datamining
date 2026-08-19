// === Module 5226: ChannelTypes ===

// Module 5226 (ChannelTypes)
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;
import importAllResult from "fromString" /* 506 */;

({ ChannelTypes, Permissions } = ME);
let items = [, , , , , ];
({ GUILD_TEXT: arr[0], GUILD_VOICE: arr[1], GUILD_ANNOUNCEMENT: arr[2], GUILD_FORUM: arr[3], PUBLIC_THREAD: arr[4], PRIVATE_THREAD: arr[5] } = ChannelTypes);
let closure_5 = importAllResult.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const result = require("obj132").fileFinishedImporting("modules/channel/getConnectionsRoles.tsx");

export default function getConnectionsRoles(type) {
  if (null != type) {
    if (items.includes(type.type)) {
      guild = guild.getGuild(type.guild_id);
      if (null == guild) {
        items = [];
      } else {
        const _Object = Object;
        const values = Object.values(type.permissionOverwrites);
        const found = values.filter((item, index) => {
          let tmp = 0 === item.type;
          if (tmp) {
            const role = closure_1_2.getRole(guild.id, item.id);
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
            tmp = !guild(dependencyMap[3]).hasAny(item.deny, closure_1_5);
            const obj = guild(dependencyMap[3]);
          }
          return tmp;
        });
        const mapped = found.map((item, index) => closure_1_2.getRole(guild.id, item.id));
        items = mapped.filter((item, index) => null != item);
      }
      return items;
    }
  }
  return [];
};