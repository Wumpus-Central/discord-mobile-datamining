// discord_app/modules/user_settings/UserSettingsProtoManager.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import MAX_FAVORITESDefault from "UserSettingsMigrationsByType.tsx";
import updateUserGuildSettings from "UserSettingsProtoActionCreators.tsx";
import migrateHotspotLocationDefault from "PreloadedUserSettingsMigrations.tsx";
import readFavoriteGIFsDefault from "FrecencySettingsMigrations.tsx";
import handleConnectionClosedOrResumed from "UserSettingsProtoStore.tsx";
import { UserSettingsTypes } from "UserSettingsConstants.tsx";

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