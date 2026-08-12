// discord_app/modules/custom_status/CustomStatusManager.tsx
import filterPlayingActivities from "filterPlayingActivities";
import ME from "ME";
import "initialize";

let c4;
let c5;
let require = arg1;
({ AnalyticsObjects: c4, StatusTypes: c5 } = ME);
const timeout = new require("start").Timeout();
const timeout1 = new require("start").Timeout();
const timeout2 = new require("start").Timeout();
let prototype = function CustomStatusManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    USER_SETTINGS_PROTO_UPDATE() {
      return applyArgumentsResult.handleUserSettingsProtoUpdate();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    applyArgumentsResult.handleCommonUpdates();
  };
  applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate() {
    applyArgumentsResult.handleCommonUpdates();
  };
  applyArgumentsResult.handleCommonUpdates = function handleCommonUpdates() {
    const result = applyArgumentsResult.manageExpiringCustomStatus();
    applyArgumentsResult.manageExpiringStatus();
    const result1 = applyArgumentsResult.lazilyMigrateStatusCreatedAt();
    const result2 = applyArgumentsResult.manageExpiringFocusMode();
  };
  applyArgumentsResult.manageExpiringCustomStatus = function manageExpiringCustomStatus() {
    let CustomStatusSetting = applyArgumentsResult(4034).CustomStatusSetting;
    const setting = CustomStatusSetting.getSetting();
    if (null == setting) {
      closure_8.stop();
    } else {
      if (null != setting.expiresAtMs) {
        if ("0" !== setting.expiresAtMs) {
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(setting.expiresAtMs));
          const _Date2 = Date;
          const time = date.getTime();
          const date1 = new Date();
          const diff = time - date1.getTime();
          if (diff > 0) {
            closure_8.start(diff, () => {
              const CustomStatusSetting = callback(table[4]).CustomStatusSetting;
              CustomStatusSetting.updateSetting(undefined);
            }, true);
          } else {
            const CustomStatusSetting2 = applyArgumentsResult(4034).CustomStatusSetting;
            CustomStatusSetting2.updateSetting(undefined);
            closure_8.stop();
          }
        }
      }
      if (null != closure_8) {
        obj.stop();
      }
      obj = closure_8;
    }
  };
  applyArgumentsResult.manageExpiringStatus = function manageExpiringStatus() {
    const StatusExpiresAtSetting = applyArgumentsResult(4034).StatusExpiresAtSetting;
    const setting = StatusExpiresAtSetting.getSetting();
    if (null != setting) {
      if ("0" !== setting) {
        if (store.getStatus() !== constants2.ONLINE) {
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(setting));
          const _Date2 = Date;
          const time = date.getTime();
          const date1 = new Date();
          const diff = time - date1.getTime();
          if (diff > 0) {
            closure_6.start(diff, () => {
              obj = { nextStatus: constants2.ONLINE, analyticsContext: { location: obj } };
              obj = { object: constants.CUSTOM_STATUS_MANAGER };
              callback(table[5])(obj);
            }, true);
          } else {
            let obj = { nextStatus: null, analyticsContext: null };
            obj[0] = tmp4.ONLINE;
            obj = { location: null };
            const obj1 = { object: null };
            obj1[0] = constants.CUSTOM_STATUS_MANAGER;
            obj[0] = obj1;
            obj[1] = obj;
            callback(9810)(obj);
            closure_6.stop();
          }
        }
      }
    }
    obj = closure_6;
    if (null != closure_6) {
      obj.stop();
    }
  };
  applyArgumentsResult.lazilyMigrateStatusCreatedAt = function lazilyMigrateStatusCreatedAt() {
    let tmp = store.getStatus() !== constants2.ONLINE;
    if (tmp) {
      const StatusCreatedAtSetting = applyArgumentsResult(4034).StatusCreatedAtSetting;
      tmp = null == StatusCreatedAtSetting.getSetting();
    }
    if (tmp) {
      const PreloadedUserSettingsActionCreators = applyArgumentsResult(1374).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("status", (arg0) => {
        const UInt64Value = callback(table[7]).UInt64Value;
        arg0.statusCreatedAtMs = UInt64Value.create({ value: "" + Date.now() });
      }, applyArgumentsResult(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  };
  applyArgumentsResult.manageExpiringFocusMode = function manageExpiringFocusMode() {
    const FocusModeExpiresAtSetting = applyArgumentsResult(4034).FocusModeExpiresAtSetting;
    const setting = FocusModeExpiresAtSetting.getSetting();
    if (null != setting) {
      if ("0" !== setting) {
        const _Date = Date;
        const _Number = Number;
        const date = new Date(Number(setting));
        const _Date2 = Date;
        const time = date.getTime();
        const date1 = new Date();
        const diff = time - date1.getTime();
        if (diff > 0) {
          closure_7.start(diff, () => {
            callback(table[8]).setFocusMode(false);
          }, true);
        } else {
          applyArgumentsResult(9809).setFocusMode(false);
          closure_7.stop();
          const tmpResult = applyArgumentsResult(9809);
        }
      }
    }
    if (null != closure_7) {
      closure_7.stop();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp6 {
}
prototype = new prototype();
let result = require("start").fileFinishedImporting("modules/custom_status/CustomStatusManager.tsx");

export default prototype;