// discord_app/modules/auth/AuthInviteStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const React2 = {};
const Store = get_initializedDefault.Store;
class AuthInviteStore extends Store {
  getGuild(arg0) {
    return closure_2[arg0];
  }
}
const prototype = AuthInviteStore.prototype;
AuthInviteStore.displayName = "AuthInviteStore";
let obj = {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      const id = guild.id;
      const obj = GuildRecordUtils;
      closure_2[id] = obj.fromInviteGuild(guild);
    }
  },
};
const authInviteStore = new AuthInviteStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;
