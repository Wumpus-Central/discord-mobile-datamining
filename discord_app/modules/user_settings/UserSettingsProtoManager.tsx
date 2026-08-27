// === Module 14022: handleConnectionOpen ===

// Module 14022 (handleConnectionOpen)
import applyDefault from "apply" /* 12 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MAX_FAVORITESDefault from "MAX_FAVORITES" /* 1343 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import migrateHotspotLocationDefault from "migrateHotspotLocation" /* 14023 */;
import readFavoriteGIFsDefault from "readFavoriteGIFs" /* 14024 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;
import { UserSettingsTypes } from "MAX_FAVORITES" /* 685 */;

require = arg1;
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
    const arr = applyDefault;
  }
}
let result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    MAX_FAVORITESDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS] = migrateHotspotLocationDefault;
    const tmp = MAX_FAVORITESDefault;
    MAX_FAVORITESDefault[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = readFavoriteGIFsDefault;
    const tmp2 = MAX_FAVORITESDefault;
    const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = dispatcherDefault;
    const subscription1 = dispatcherDefault.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = dispatcherDefault;
    const subscription2 = dispatcherDefault.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = dispatcherDefault;
    const subscription3 = dispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};