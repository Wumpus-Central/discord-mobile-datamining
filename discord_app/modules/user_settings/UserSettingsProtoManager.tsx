// === Module 13829: handleConnectionOpen ===

// Module 13829 (handleConnectionOpen)
import applyDefault from "apply" /* 12 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MAX_FAVORITESDefault from "MAX_FAVORITES" /* 1343 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import migrateHotspotLocationDefault from "migrateHotspotLocation" /* 13830 */;
import readFavoriteGIFsDefault from "readFavoriteGIFs" /* 13831 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import { UserSettingsTypes } from "MAX_FAVORITES" /* 685 */;

require = fn;
function handleConnectionOpen() {
  fullState = fullState.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = fullState(1374).PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = applyDefault.forEach(fullState(1374).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
    const tmp = fullState[Number(undefined, arg1)];
    if (tmp2) {
      const result = scheduleSaveFromOfflineEdit.scheduleSaveFromOfflineEdit();
    }
  });
}
function handleUserSettingsProtoEnqueueUpdate(settings) {
  ({ proto, type } = settings.settings);
  ({ delaySeconds, jitter } = settings);
  updateUserGuildSettings.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = updateUserGuildSettings.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const item = applyDefault.forEach(updateUserGuildSettings.UserSettingsActionCreatorsByType, (persistChanges) => {
      fullState = fullState.getFullState();
      if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
        persistChanges.persistChanges();
      }
    });
  }
}
let result = require("obj132").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    MAX_FAVORITESDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS] = migrateHotspotLocationDefault;
    MAX_FAVORITESDefault[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = readFavoriteGIFsDefault;
    const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const subscription1 = dispatcherDefault.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const subscription2 = dispatcherDefault.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const subscription3 = dispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};