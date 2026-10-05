// discord_app/modules/user_settings/UserSettingsProtoManager.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import UserSettingsMigrationsByTypeDefault from "UserSettingsMigrationsByType.tsx";
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators.tsx";
import PreloadedUserSettingsMigrationsDefault from "PreloadedUserSettingsMigrations.tsx";
import FrecencySettingsMigrationsDefault from "FrecencySettingsMigrations.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleConnectionOpen() {
  const fullState = UserSettingsProtoStore.getFullState();
  let tmp2 = fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS];
  if (tmp2.editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const arr = _modDef12;
  const item = arr.forEach(
    UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType,
    (scheduleSaveFromOfflineEdit, arg1) => {
      const tmp = fullState[Number(undefined, arg1)];
      const tmp2 = null != tmp.editInfo.offlineEditDataVersion && null != tmp.editInfo.protoToSave;
      if (tmp2) {
        const result = scheduleSaveFromOfflineEdit.scheduleSaveFromOfflineEdit();
      }
    },
  );
}
function handleUserSettingsProtoEnqueueUpdate(settings) {
  let delaySeconds;
  let jitter;
  let proto;
  let type;
  ({ proto, type } = settings.settings);
  ({ delaySeconds, jitter } = settings);
  const obj = UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType[type];
  obj.markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const obj = UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType[arg0.settingsType];
  const ifNecessary = obj.loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  const tmp = "inactive" !== state && "background" !== state;
  if (!tmp) {
    const arr = _modDef12;
    const item = arr.forEach(
      UserSettingsProtoActionCreators.UserSettingsActionCreatorsByType,
      (persistChanges, arg1) => {
        fullState = fullState.getFullState();
        if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
          persistChanges.persistChanges();
        }
      },
    );
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
let obj = {
  init() {
    const tmp = UserSettingsMigrationsByTypeDefault;
    tmp[UserSettingsTypes.PRELOADED_USER_SETTINGS] = PreloadedUserSettingsMigrationsDefault;
    const tmp2 = UserSettingsMigrationsByTypeDefault;
    tmp2[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = FrecencySettingsMigrationsDefault;
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe(
      "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
      handleUserSettingsProtoLoadIfNecessary,
    );
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  },
};
let result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default obj;
