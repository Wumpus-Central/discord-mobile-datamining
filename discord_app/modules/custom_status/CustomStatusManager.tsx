// discord_app/modules/custom_status/CustomStatusManager.tsx
import setUserStatusDefault from "../multi_account/setUserStatus.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const Constants = fn(1074);
({ AnalyticsObjects: closure_4, StatusTypes: hasOwnProperty } = Constants);
const timeout = new fn(2037).Timeout();
const timeout1 = new fn(2037).Timeout();
const timeout2 = new fn(2037).Timeout();
const prototype = function CustomStatusManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    USER_SETTINGS_PROTO_UPDATE() {
      return applyArgumentsResult.handleUserSettingsProtoUpdate();
    },
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
    let CustomStatusSetting = applyArgumentsResult(2020).CustomStatusSetting;
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
            timeout2.start(
              diff,
              () => {
                const CustomStatusSetting = closure_1_0(dependencyMap[4]).CustomStatusSetting;
                CustomStatusSetting.updateSetting(undefined);
              },
              true,
            );
          } else {
            const CustomStatusSetting2 = applyArgumentsResult(2020).CustomStatusSetting;
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
    const StatusExpiresAtSetting = applyArgumentsResult(2020).StatusExpiresAtSetting;
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
            timeout.start(
              diff,
              () => {
                const obj = { nextStatus: constants2.ONLINE, analyticsContext: null };
                const obj2 = { location: { object: constants.CUSTOM_STATUS_MANAGER } };
                obj.analyticsContext = obj2;
                closure_1_1(dependencyMap[5])(obj);
              },
              true,
            );
          } else {
            let obj2 = { nextStatus: tmp4.ONLINE, analyticsContext: null };
            const obj3 = { location: null };
            const obj4 = { object: constants.CUSTOM_STATUS_MANAGER };
            obj3.location = obj4;
            obj2.analyticsContext = obj3;
            setUserStatusDefault(obj2);
            timeout.stop();
          }
        }
      }
    }
    if (null != timeout) {
      timeout.stop();
    }
  };
  applyArgumentsResult.lazilyMigrateStatusCreatedAt = function lazilyMigrateStatusCreatedAt() {
    let tmp = SelfPresenceStore.getStatus() !== constants2.ONLINE;
    if (tmp) {
      const StatusCreatedAtSetting = applyArgumentsResult(2020).StatusCreatedAtSetting;
      tmp = null == StatusCreatedAtSetting.getSetting();
    }
    if (tmp) {
      const PreloadedUserSettingsActionCreators = applyArgumentsResult(2025).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync(
        "status",
        async (arg0) => {
          const UInt64Value = closure_1_0(dependencyMap[7]).UInt64Value;
          arg0.statusCreatedAtMs = UInt64Value.create({ value: "" + Date.now() });
        },
        applyArgumentsResult(2025).UserSettingsDelay.INFREQUENT_USER_ACTION,
      );
    }
  };
  applyArgumentsResult.manageExpiringFocusMode = function manageExpiringFocusMode() {
    const FocusModeExpiresAtSetting = applyArgumentsResult(2020).FocusModeExpiresAtSetting;
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
          timeout1.start(
            diff,
            () => {
              closure_1_0(dependencyMap[8]).setFocusMode(false);
            },
            true,
          );
        } else {
          applyArgumentsResult(10432).setFocusMode(false);
          timeout1.stop();
          const tmpResult = applyArgumentsResult(10432);
        }
      }
    }
    if (null != timeout1) {
      timeout1.stop();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp6 {}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/custom_status/CustomStatusManager.tsx");

export default prototype1;
