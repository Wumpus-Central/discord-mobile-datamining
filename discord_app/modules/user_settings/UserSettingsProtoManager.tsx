import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
function handleConnectionOpen() {
  fullState = fullState.getFullState();
  if (fullState[UserSettingsTypes.PRELOADED_USER_SETTINGS].editInfo.triggeredMigrations) {
    const PreloadedUserSettingsActionCreators = fullState(1355).PreloadedUserSettingsActionCreators;
    let result = PreloadedUserSettingsActionCreators.markDirtyFromMigration(tmp2.proto, tmp2.editInfo.cleanupFuncs);
  }
  const item = importDefault(12).forEach(fullState(1355).UserSettingsActionCreatorsByType, (scheduleSaveFromOfflineEdit) => {
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
  require(1355) /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[type].markDirty(proto, { delaySeconds, jitter });
}
function handleUserSettingsProtoLoadIfNecessary(arg0) {
  const ifNecessary = require(1355) /* updateUserGuildSettings */.UserSettingsActionCreatorsByType[arg0.settingsType].loadIfNecessary();
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const item = importDefault(12).forEach(require(1355) /* updateUserGuildSettings */.UserSettingsActionCreatorsByType, (persistChanges) => {
      fullState = fullState.getFullState();
      if (null != fullState[Number(undefined, arg1)].editInfo.timeout) {
        persistChanges.persistChanges();
      }
    });
    const arr = importDefault(12);
  }
}
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingsProtoManager.tsx");

export default {
  init() {
    importDefault(1343)[UserSettingsTypes.PRELOADED_USER_SETTINGS] = importDefault(13538);
    const tmp = importDefault(1343);
    importDefault(1343)[UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = importDefault(13539);
    const tmp2 = importDefault(1343);
    const subscription = importDefault(709).subscribe("CONNECTION_OPEN", handleConnectionOpen);
    const obj = importDefault(709);
    const subscription1 = importDefault(709).subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", handleUserSettingsProtoEnqueueUpdate);
    const obj2 = importDefault(709);
    const subscription2 = importDefault(709).subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", handleUserSettingsProtoLoadIfNecessary);
    const obj3 = importDefault(709);
    const subscription3 = importDefault(709).subscribe("APP_STATE_UPDATE", handleAppStateUpdate);
  }
};