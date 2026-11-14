// === Module 20361: NotifSettingsProtoManager ===

// Module 20361 (NotifSettingsProtoManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import DeclarativeNotificationSettingsRedesignExperiment from "DeclarativeNotificationSettingsRedesignExperiment" /* 16177 */;
import EffectiveNotifSettingsActionCreators from "EffectiveNotifSettingsActionCreators" /* 18625 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 18633 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16163 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;

require = fn;
function cancelRefresh() {
  clearTimeout(c3);
  c3 = undefined;
  const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
}
function handleRemoteSettingsUpdate() {
  if (!NotifSettingsProtoStore.isApplyingEdit) {
    if (NotifSettingsProtoStore.isEffectiveSettingsStale) {
      if (obj.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          c3 = undefined;
          const effectiveNotifSettings = closure_1_0(dependencyMap[2]).fetchEffectiveNotifSettings();
        }, 250);
      }
      obj = DeclarativeNotificationSettingsRedesignExperiment;
    }
  }
}
function handleConnectionRestored() {
  clearTimeout(timeout);
  timeout = undefined;
  const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
  const result1 = NotifSettingsActionCreators.schedulePersistPendingEditsIfNeeded();
  if (obj3.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      c3 = undefined;
      const effectiveNotifSettings = closure_1_0(dependencyMap[2]).fetchEffectiveNotifSettings();
    }, 250);
  }
}
function handleAppStateUpdate(state) {
  state = state.state;
  let tmp = "inactive" !== state;
  if (tmp) {
    tmp = "background" !== state;
  }
  if (!tmp) {
    const result = NotifSettingsActionCreators.schedulePersistPendingEditsIfNeeded();
  }
}
function handleAssignmentChange() {
  const result = DeclarativeNotificationSettingsRedesignExperiment.isDeclarativeNotificationSettingsRedesignEnabled("effectiveNotifSettingsAssignment");
  require = result;
  const mapped = NOTIF_SETTINGS.map((experiment) => experiment.experiment);
  items = [...new Set(mapped.filter((item) => null != item))];
  const items1 = [result];
  const sorted = items.sort();
  HermesBuiltin.arraySpread(sorted.map((item) => {
    items = [item, result(dependencyMap[5]).knownExperimentConfigs[item].getConfig({ location: "effectiveNotifSettingsAssignment" }, { autoTrackExposure: false }).variation];
    return items;
  }), 1);
  const json = JSON.stringify(items1);
  if (json !== NotifSettingsProtoStore.effectiveAssignment) {
    json(572).wait(() => DispatcherDefault.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE", enabled: result, assignment: json }));
    const obj2 = json(572);
  }
  const set = new Set(mapped.filter((item) => null != item));
}
const NOTIF_SETTINGS = fn(16898).NOTIF_SETTINGS;
class NotifSettingsProtoManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = {
      POST_CONNECTION_OPEN: handleConnectionRestored,
      CONNECTION_RESUMED: handleConnectionRestored,
      APP_STATE_UPDATE: handleAppStateUpdate,
      USER_SETTINGS_PROTO_UPDATE: handleRemoteSettingsUpdate,
      NOTIFICATION_SETTINGS_UPDATE: handleRemoteSettingsUpdate,
      EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN() {
            if (1 === NotifSettingsProtoStore.effectiveSettingsScreenCount) {
              const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
              if (obj2.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
                const _clearTimeout = clearTimeout;
                clearTimeout(timeout);
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  c3 = undefined;
                  const effectiveNotifSettings = closure_1_0(dependencyMap[2]).fetchEffectiveNotifSettings();
                }, 250);
              }
              obj2 = DeclarativeNotificationSettingsRedesignExperiment;
            }
          },
      EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE(enabled) {
            clearTimeout(timeout);
            timeout = undefined;
            const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
            if (enabled.enabled) {
              if (tmp2Result.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
                const _clearTimeout = clearTimeout;
                clearTimeout(timeout);
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  c3 = undefined;
                  const effectiveNotifSettings = closure_1_0(dependencyMap[2]).fetchEffectiveNotifSettings();
                }, 250);
              }
              tmp2Result = DeclarativeNotificationSettingsRedesignExperiment;
            }
          },
      DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE(effectiveSettings) {
            if (null != effectiveSettings.effectiveSettings) {
              if (NotifSettingsProtoStore.hasValidEffectiveSettings) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(timeout);
                timeout = undefined;
                const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
              }
            }
            if (!NotifSettingsProtoStore.isApplyingEdit) {
              if (NotifSettingsProtoStore.isEffectiveSettingsStale) {
                if (obj.isDeclarativeNotificationSettingsRedesignEnabled("refreshEffectiveNotifSettings")) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  const _setTimeout = setTimeout;
                  timeout = setTimeout(() => {
                    c3 = undefined;
                    const effectiveNotifSettings = closure_1_0(dependencyMap[2]).fetchEffectiveNotifSettings();
                  }, 250);
                }
                obj = DeclarativeNotificationSettingsRedesignExperiment;
              }
            }
          },
      LOGOUT: cancelRefresh
    };
    applyArgumentsResult.actions = obj;
    items = [, ];
    items[0] = closure_0(closure_2[8]).ApexExperimentStore;
    items[1] = handleAssignmentChange;
    items1 = [];
    items1[0] = items;
    map = new Map(items1);
    applyArgumentsResult.stores = map;
    return applyArgumentsResult;
  }
}
NotifSettingsProtoManager.prototype["_terminate"] = function _terminate() {
  clearTimeout(c3);
  c3 = undefined;
  const result = EffectiveNotifSettingsActionCreators.cancelEffectiveNotifSettingsRetry();
};
const notifSettingsProtoManager = new NotifSettingsProtoManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoManager.tsx");

export default notifSettingsProtoManager;