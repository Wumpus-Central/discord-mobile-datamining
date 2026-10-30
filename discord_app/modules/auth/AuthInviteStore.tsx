// discord_app/modules/auth/AuthInviteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";

require = fn;
let closure_2 = {};
const Store = initializeDefault.Store;
class AuthInviteStore extends Store {}
AuthInviteStore.prototype["getGuild"] = function getGuild(arg0) {
  return closure_2[arg0];
};
AuthInviteStore.displayName = "AuthInviteStore";
const authInviteStore = new AuthInviteStore(DispatcherDefault, {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_2[guild.id] = GuildRecordUtils.fromInviteGuild(guild);
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;
