// === Module 4397: getGuild ===

// Module 4397 (getGuild)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1425 */;

require = arg1;
let closure_2 = {};
const Store = initializeDefault.Store;
class AuthInviteStore extends Store {
}
AuthInviteStore.prototype["getGuild"] = function getGuild(arg0) {
  return table[arg0];
};
AuthInviteStore.displayName = "AuthInviteStore";
const authInviteStore = new AuthInviteStore(dispatcherDefault, {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_2[guild.id] = fromGuildPropertiesWithAdditionalFields.fromInviteGuild(guild);
    }
  }
});
const result = require("set").fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;