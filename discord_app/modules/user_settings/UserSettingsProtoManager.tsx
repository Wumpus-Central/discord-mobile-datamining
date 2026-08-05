// discord_app/modules/user_settings/UserSettingsProtoManager.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
function handleConnectionOpen() {
  fullState = fullState.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = fullState(1355).PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = require("../../../_runtime/00012_apply.js").forEach(fullState(1355).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
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
  require("UserSettingsProtoActionCreators.tsx") /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = require("UserSettingsProtoActionCreators.tsx") /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const item = require("../../../_runtime/00012_apply.js").forEach(require("UserSettingsProtoActionCreators.tsx") /* updateUserGuildSettings */.UserSettingsActionCreatorsByType, (persistChanges) => {
      fullState = fullState.getFullState();
      if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
        persistChanges.persistChanges();
      }
    });
    const arr = require("../../../_runtime/00012_apply.js");
  }
}
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    require("UserSettingsMigrationsByType.tsx")[UserSettingsTypes.PRELOADED_USER_SETTINGS] = require("PreloadedUserSettingsMigrations.tsx");
    const tmp = require("UserSettingsMigrationsByType.tsx");
    require("UserSettingsMigrationsByType.tsx")[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = require("FrecencySettingsMigrations.tsx");
    const tmp2 = require("UserSettingsMigrationsByType.tsx");
    const subscription = require("../../Dispatcher.tsx").subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = require("../../Dispatcher.tsx");
    const subscription1 = require("../../Dispatcher.tsx").subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = require("../../Dispatcher.tsx");
    const subscription2 = require("../../Dispatcher.tsx").subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = require("../../Dispatcher.tsx");
    const subscription3 = require("../../Dispatcher.tsx").subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};