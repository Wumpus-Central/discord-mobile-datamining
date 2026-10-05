// === Module 15838: NotifSettingsActionCreators ===

// Module 15838 (NotifSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import notification_settings from "notification_settings" /* 13492 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 13491 */;
import size from "module_2" /* 2 */;

function updateNotifSettingValue(GAMING_DEFAULT, createNew) {
  let cloneResult;
  createNew = createNew.createNew;
  const settings = NotifSettingsProtoStore.settings;
  const update = createNew.update;
  if (null != settings.values[GAMING_DEFAULT]) {
    const DeclarativeNotifSetting2 = notification_settings.DeclarativeNotifSetting;
    cloneResult = DeclarativeNotifSetting2.clone(tmp);
  } else {
    cloneResult = undefined;
    if (createNew != null) {
      cloneResult = createNew();
    }
    if (cloneResult == null) {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      cloneResult = DeclarativeNotifSetting.create();
    }
  }
  if (update(cloneResult)) {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    const cloneResult1 = DeclarativeSettings.clone(settings);
    cloneResult1.values[GAMING_DEFAULT] = cloneResult;
    const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings: cloneResult1 };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
}
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export const updateNotifSettingToggleValue = function updateNotifSettingToggleValue(GAMING_DEFAULT, toggle) {
  let obj = {
    createNew() {
      const DeclarativeNotifSetting = toggle(dependencyMap[1]).DeclarativeNotifSetting;
      const obj = DeclarativeNotifSetting.create();
      obj.toggle = true;
      return obj;
    },
    update(toggle) {
      toggle.toggle = toggle;
      return toggle.toggle !== toggle;
    }
  };
  updateNotifSettingValue(GAMING_DEFAULT, obj);
};
export const updateNotifSettingRadioValue = function updateNotifSettingRadioValue(GAMING_DEFAULT, arg1) {
  let closure_0 = arg1;
  const obj = {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    }
  };
  updateNotifSettingValue(GAMING_DEFAULT, obj);
};