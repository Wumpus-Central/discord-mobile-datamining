// === Module 14871: useCanRequestStreamFromUser ===

// Module 14871 (useCanRequestStreamFromUser)
import _modDef12 from "module_12" /* 12 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import PermissionStore from "PermissionStore" /* 4946 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanRequestStreamFromUser.tsx");

export default function useCanRequestStreamFromUser(user, arg1) {
  _require = user;
  closure_1 = arg1;
  const items = [PermissionStore, ChannelStore, GuildMemberStore, GuildRoleStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_1) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      if (null != channel) {
        if (!channel.isGuildStageVoice()) {
          let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
          const member = GuildMemberStore.getMember(channel.guild_id, user);
          let roles;
          if (member != null) {
            roles = member.roles;
          }
          if (roles == null) {
            roles = [];
          }
          const keyByResult = _modDef12.keyBy(GuildRoleStore.getManyRoles(channel.guild_id, roles), "id");
          const obj3 = { permission: Permissions.STREAM, user, context: channel, roles: keyByResult };
          if (canResult) {
            canResult = obj2.can(obj3);
          }
          return canResult;
        }
      }
      return false;
    }
  });
};