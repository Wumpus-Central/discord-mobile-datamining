// discord_app/modules/notifications/settings/NotifSettingsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import notification_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";
import NotifSettingsProtoStore from "NotifSettingsProtoStore.tsx";

require = fn;
function updateNotifSettingValue(GAMING_DEFAULT, createNew) {
  createNew = createNew.createNew;
  const settings = NotifSettingsProtoStore.settings;
  if (null != settings.values[GAMING_DEFAULT]) {
    const DeclarativeNotifSetting2 = notification_settings.DeclarativeNotifSetting;
    let cloneResult = DeclarativeNotifSetting2.clone(tmp);
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
  if (createNew.update(cloneResult)) {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    const cloneResult1 = DeclarativeSettings.clone(settings);
    cloneResult1.values[GAMING_DEFAULT] = cloneResult;
    const obj = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings: cloneResult1 };
    obj.dispatch(obj);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export const updateNotifSettingToggleValue = function updateNotifSettingToggleValue(GAMING_DEFAULT, toggle) {
  updateNotifSettingValue(GAMING_DEFAULT, {
    createNew() {
      const DeclarativeNotifSetting = toggle(dependencyMap[1]).DeclarativeNotifSetting;
      const obj = DeclarativeNotifSetting.create();
      obj.toggle = true;
      return obj;
    },
    update(toggle) {
      toggle.toggle = toggle;
      return toggle.toggle !== toggle;
    },
  });
};
export const updateNotifSettingRadioValue = function updateNotifSettingRadioValue(GAMING_DEFAULT, radio) {
  updateNotifSettingValue(GAMING_DEFAULT, {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    },
  });
};
