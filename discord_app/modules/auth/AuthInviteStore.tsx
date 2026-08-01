// === Module 4113: getGuild ===

// Module 4113 (getGuild)
import { Store } from "initialize";

const require = arg1;
let closure_2 = {};
class AuthInviteStore extends Store {
}
AuthInviteStore.prototype["getGuild"] = function getGuild(arg0) {
  return table[arg0];
};
AuthInviteStore.displayName = "AuthInviteStore";
const authInviteStore = new AuthInviteStore(require("dispatcher"), {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_2[guild.id] = require(1411) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(guild);
    }
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;