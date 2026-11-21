// === Module 14481: useCanRequestStreamFromUser ===

// Module 14481 (useCanRequestStreamFromUser)
import applyDefault from "apply" /* 12 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildRoleStore from "GuildRoleStore" /* 4819 */;
import PermissionStore from "PermissionStore" /* 4845 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1071).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanRequestStreamFromUser.tsx");

export default function useCanRequestStreamFromUser(user, arg1) {
  _require = user;
  closure_1 = arg1;
  items = [PermissionStore, ChannelStore, GuildMemberStore, GuildRoleStore];
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
          const keyByResult = applyDefault.keyBy(GuildRoleStore.getManyRoles(channel.guild_id, roles), "id");
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