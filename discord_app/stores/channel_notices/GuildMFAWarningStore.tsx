// === Module 13568: GuildMFAWarningStore ===

// Module 13568 (GuildMFAWarningStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

function handleUserStoreUpdates() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
const MFALevels = Constants.MFALevels;
let mfaEnabled = null;
const Store = get_initializedDefault.Store;
class GuildMFAWarningStore extends Store {
  initialize() {
    this.waitFor(UserStore, GuildChannelStore);
    const items = [UserStore, GuildChannelStore];
    this.syncWith(items, handleUserStoreUpdates);
  }
  isVisible(mfaLevel) {
    const result = null != mfaLevel && mfaLevel.mfaLevel === MFALevels.ELEVATED && false === mfaEnabled && GuildChannelStore.hasElevatedPermissions(mfaLevel.id);
    return result;
  }
}
const prototype = GuildMFAWarningStore.prototype;
GuildMFAWarningStore.displayName = "GuildMFAWarningStore";
const obj = {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
};
const guildMFAWarningStore = new GuildMFAWarningStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;