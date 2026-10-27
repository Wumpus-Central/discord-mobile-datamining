// === Module 14341: useCanRequestStreamFromUser ===

// Module 14341 (useCanRequestStreamFromUser)
import _modDef12 from "module_12" /* 12 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildRoleStore from "GuildRoleStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4904 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1084).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/useCanRequestStreamFromUser.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanRequestStreamFromUser(user, arg1) {
  _require = user;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore, GuildMemberStore, GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === user) {
      let tmp9 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp9);
  }
  const fn = function _() {
    if (null == closure_1) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      if (null == channel) {
        return false;
      } else {
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
        const obj2 = { permission: Permissions.STREAM, user, context: channel, roles: keyByResult };
        if (canResult) {
          canResult = obj.can(obj2);
        }
        return canResult;
      }
    }
  };
  cResult[1] = arg1;
  cResult[2] = user;
  cResult[3] = fn;
  tmp9 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useCanRequestStreamFromUser(user, arg1) {
  _require = user;
  closure_1 = arg1;
  const items = [PermissionStore, ChannelStore, GuildMemberStore, GuildRoleStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_1) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      if (null == channel) {
        return false;
      } else {
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
        const obj2 = { permission: Permissions.STREAM, user, context: channel, roles: keyByResult };
        if (canResult) {
          canResult = obj.can(obj2);
        }
        return canResult;
      }
    }
  });
});