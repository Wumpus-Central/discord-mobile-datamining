// discord_app/stores/channel_notices/GuildMFAWarningStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildChannelStore from "../GuildChannelStore.tsx";
import UserStore from "../UserStore.tsx";

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
class GuildMFAWarningStore extends Store {}
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;
