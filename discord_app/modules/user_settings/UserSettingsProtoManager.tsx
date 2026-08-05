// discord_app/modules/user_settings/UserSettingsProtoManager.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { apply } from "../../../_runtime/00012_apply.js";
import { dispatcher } from "../../Dispatcher.tsx";
import { readFavoriteGIFs } from "FrecencySettingsMigrations.tsx";
import { migrateHotspotLocation } from "PreloadedUserSettingsMigrations.tsx";
import { MAX_FAVORITES } from "UserSettingsMigrationsByType.tsx";
import { updateUserGuildSettings } from "UserSettingsProtoActionCreators.tsx";

const require = arg1;
function handleConnectionOpen() {
  fullState = fullState.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = fullState(1355).PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = apply.forEach(fullState(1355).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
    const tmp = fullState[Number(undefined, arg1)];
    if (tmp2) {
      const result = scheduleSaveFromOfflineEdit.scheduleSaveFromOfflineEdit();
    }
  });
}
function handleUserSettingsProtoEnqueueUpdate(settings) {
  let delaySeconds;
  let jitter;
  let proto;
  let type;
  ({ proto, type } = settings.settings);
  ({ delaySeconds, jitter } = settings);
  updateUserGuildSettings /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = updateUserGuildSettings /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const item = apply.forEach(updateUserGuildSettings /* updateUserGuildSettings */.UserSettingsActionCreatorsByType, (persistChanges) => {
      fullState = fullState.getFullState();
      if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
        persistChanges.persistChanges();
      }
    });
    const arr = apply;
  }
}
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    MAX_FAVORITES[UserSettingsTypes.PRELOADED_USER_SETTINGS] = migrateHotspotLocation;
    const tmp = MAX_FAVORITES;
    MAX_FAVORITES[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = readFavoriteGIFs;
    const tmp2 = MAX_FAVORITES;
    const subscription = dispatcher.subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = dispatcher;
    const subscription1 = dispatcher.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = dispatcher;
    const subscription2 = dispatcher.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = dispatcher;
    const subscription3 = dispatcher.subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};