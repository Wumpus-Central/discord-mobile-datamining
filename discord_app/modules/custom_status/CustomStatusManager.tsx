// === Module 17338: CustomStatusManager ===

// Module 17338 (CustomStatusManager)
import setUserStatusDefault from "setUserStatus" /* 10091 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5279 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
const Constants = fn(1074);
({ AnalyticsObjects: closure_4, StatusTypes: hasOwnProperty } = Constants);
const timeout = new fn(4447).Timeout();
const timeout1 = new fn(4447).Timeout();
const timeout2 = new fn(4447).Timeout();
let prototype = function CustomStatusManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
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
    let CustomStatusSetting = applyArgumentsResult(1935).CustomStatusSetting;
    const setting = CustomStatusSetting.getSetting();
    if (null == setting) {
      timeout2.stop();
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
            timeout2.start(diff, () => {
              const CustomStatusSetting = closure_1_0(dependencyMap[4]).CustomStatusSetting;
              CustomStatusSetting.updateSetting(undefined);
            }, true);
          } else {
            const CustomStatusSetting2 = applyArgumentsResult(1935).CustomStatusSetting;
            CustomStatusSetting2.updateSetting(undefined);
            timeout2.stop();
          }
        }
      }
      if (null != timeout2) {
        timeout2.stop();
      }
    }
  };
  applyArgumentsResult.manageExpiringStatus = function manageExpiringStatus() {
    const StatusExpiresAtSetting = applyArgumentsResult(1935).StatusExpiresAtSetting;
    const setting = StatusExpiresAtSetting.getSetting();
    if (null != setting) {
      if ("0" !== setting) {
        if (SelfPresenceStore.getStatus() !== constants2.ONLINE) {
          const _Date = Date;
          const _Number = Number;
          const date = new Date(Number(setting));
          const _Date2 = Date;
          const time = date.getTime();
          const date1 = new Date();
          const diff = time - date1.getTime();
          if (diff > 0) {
            timeout.start(diff, () => {
              let obj = { nextStatus: constants2.ONLINE, analyticsContext: null };
              obj = { location: null };
              obj = { object: constants.CUSTOM_STATUS_MANAGER };
              obj.location = obj;
              obj.analyticsContext = obj;
              closure_1_1(dependencyMap[5])(obj);
            }, true);
          } else {
            let obj = { nextStatus: tmp4.ONLINE, analyticsContext: null };
            obj = { location: null };
            const obj1 = { object: constants.CUSTOM_STATUS_MANAGER };
            obj.location = obj1;
            obj.analyticsContext = obj;
            setUserStatusDefault(obj);
            timeout.stop();
          }
        }
      }
    }
    obj = timeout;
    if (null != timeout) {
      obj.stop();
    }
  };
  applyArgumentsResult.lazilyMigrateStatusCreatedAt = function lazilyMigrateStatusCreatedAt() {
    let tmp = SelfPresenceStore.getStatus() !== constants2.ONLINE;
    if (tmp) {
      const StatusCreatedAtSetting = applyArgumentsResult(1935).StatusCreatedAtSetting;
      tmp = null == StatusCreatedAtSetting.getSetting();
    }
    if (tmp) {
      const PreloadedUserSettingsActionCreators = applyArgumentsResult(1940).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("status", async (arg0) => {
        const UInt64Value = closure_1_0(dependencyMap[7]).UInt64Value;
        arg0.statusCreatedAtMs = UInt64Value.create({ value: "" + Date.now() });
      }, applyArgumentsResult(1940).UserSettingsDelay.INFREQUENT_USER_ACTION);
    }
  };
  applyArgumentsResult.manageExpiringFocusMode = function manageExpiringFocusMode() {
    const FocusModeExpiresAtSetting = applyArgumentsResult(1935).FocusModeExpiresAtSetting;
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
          timeout1.start(diff, () => {
            closure_1_0(dependencyMap[8]).setFocusMode(false);
          }, true);
        } else {
          applyArgumentsResult(10090).setFocusMode(false);
          timeout1.stop();
          const tmpResult = applyArgumentsResult(10090);
        }
      }
    }
    if (null != timeout1) {
      timeout1.stop();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp6 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_status/CustomStatusManager.tsx");

export default prototype;