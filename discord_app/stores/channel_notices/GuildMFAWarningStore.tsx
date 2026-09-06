// === Module 13757: GuildMFAWarningStore ===

// Module 13757 (GuildMFAWarningStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import UserStore from "UserStore" /* 1371 */;

function handleUserStoreUpdates() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
const MFALevels = fn(1074).MFALevels;
let mfaEnabled = null;
const Store = initializeDefault.Store;
class GuildMFAWarningStore extends Store {
}
const prototype = GuildMFAWarningStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore, GuildChannelStore);
  const items = [UserStore, GuildChannelStore];
  this.syncWith(items, handleUserStoreUpdates);
};
prototype["isVisible"] = function isVisible(mfaLevel) {
  let result = null != mfaLevel;
  if (result) {
    result = mfaLevel.mfaLevel === MFALevels.ELEVATED;
  }
  if (result) {
    result = false === mfaEnabled;
  }
  if (result) {
    result = GuildChannelStore.hasElevatedPermissions(mfaLevel.id);
  }
  return result;
};
GuildMFAWarningStore.displayName = "GuildMFAWarningStore";
const guildMFAWarningStore = new GuildMFAWarningStore(DispatcherDefault, {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;