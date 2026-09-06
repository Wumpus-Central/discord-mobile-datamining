// discord_app/modules/channel/getConnectionsRoles.tsx
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import BigFlagUtils from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";

const Constants = fn(1074);
({ ChannelTypes, Permissions } = Constants);
let items = [, , , , , ,];
({
  GUILD_TEXT: arr[0],
  GUILD_VOICE: arr[1],
  GUILD_ANNOUNCEMENT: arr[2],
  GUILD_FORUM: arr[3],
  GUILD_APP: arr[4],
  PUBLIC_THREAD: arr[5],
  PRIVATE_THREAD: arr[6],
} = ChannelTypes);
let closure_5 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/getConnectionsRoles.tsx");

export default function getConnectionsRoles(type) {
  if (null != type) {
    if (items.includes(type.type)) {
      const guild = GuildStore.getGuild(type.guild_id);
      if (null == guild) {
        items = [];
      } else {
        const _Object = Object;
        const values = Object.values(type.permissionOverwrites);
        const found = values.filter((type) => {
          let tmp = 0 === type.type;
          if (tmp) {
            const role = GuildRoleStore.getRole(guild.id, type.id);
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
            tmp = !BigFlagUtils.hasAny(type.deny, closure_5);
          }
          return tmp;
        });
        const mapped = found.map((id) => GuildRoleStore.getRole(guild.id, id.id));
        items = mapped.filter((item) => null != item);
      }
      return items;
    }
  }
  return [];
}
