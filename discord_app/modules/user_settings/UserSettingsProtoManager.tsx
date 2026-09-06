// === Module 14454: UserSettingsProtoManager ===

// Module 14454 (UserSettingsProtoManager)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserSettingsMigrationsByTypeDefault from "UserSettingsMigrationsByType" /* 1225 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import PreloadedUserSettingsMigrationsDefault from "PreloadedUserSettingsMigrations" /* 14455 */;
import FrecencySettingsMigrationsDefault from "FrecencySettingsMigrations" /* 14456 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

require = fn;
function handleConnectionOpen() {
  const fullState = UserSettingsProtoStore.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = _modDef12.forEach(UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit, arg1) => {
    const tmp = fullState[Number(undefined, arg1)];
    if (tmp2) {
      const result = scheduleSaveFromOfflineEdit.scheduleSaveFromOfflineEdit();
    }
  });
}
function handleUserSettingsProtoEnqueueUpdate(settings) {
  ({ proto, type } = settings.settings);
  ({ delaySeconds, jitter } = settings);
  UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const item = _modDef12.forEach(UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType, (persistChanges, arg1) => {
      fullState = fullState.getFullState();
      if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
        persistChanges.persistChanges();
      }
    });
  }
}
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    UserSettingsMigrationsByTypeDefault[UserSettingsTypes.PRELOADED_USER_SETTINGS] = PreloadedUserSettingsMigrationsDefault;
    UserSettingsMigrationsByTypeDefault[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = FrecencySettingsMigrationsDefault;
    const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const subscription1 = DispatcherDefault.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const subscription2 = DispatcherDefault.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const subscription3 = DispatcherDefault.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};