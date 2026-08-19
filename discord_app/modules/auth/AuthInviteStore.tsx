// === Module 4294: getGuild ===

// Module 4294 (getGuild)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1430 */;

require = fn;
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
const result = require("obj132").fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default authInviteStore;