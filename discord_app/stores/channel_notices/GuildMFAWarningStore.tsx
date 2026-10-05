// discord_app/stores/channel_notices/GuildMFAWarningStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import GuildChannelStore from "../GuildChannelStore.tsx";
import UserStore from "../UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const result =
      null != mfaLevel &&
      mfaLevel.mfaLevel === MFALevels.ELEVATED &&
      false === mfaEnabled &&
      GuildChannelStore.hasElevatedPermissions(mfaLevel.id);
    return result;
  }
}
const prototype = GuildMFAWarningStore.prototype;
GuildMFAWarningStore.displayName = "GuildMFAWarningStore";
const obj = {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  },
};
const guildMFAWarningStore = new GuildMFAWarningStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default guildMFAWarningStore;
