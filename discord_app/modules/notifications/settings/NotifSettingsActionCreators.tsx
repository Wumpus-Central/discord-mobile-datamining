// === Module 15924: updateNotifSettingValue ===

// Module 15924 (updateNotifSettingValue)
import dispatcherDefault from "dispatcher" /* 573 */;
import create from "create" /* 13681 */;
import closure_3 from "initialize" /* 13680 */;

require = arg1;
function updateNotifSettingValue(GAMING_DEFAULT, createNew) {
  createNew = createNew.createNew;
  settings = settings.settings;
  if (null != settings.values[GAMING_DEFAULT]) {
    const DeclarativeNotifSetting2 = create.DeclarativeNotifSetting;
    let cloneResult = DeclarativeNotifSetting2.clone(tmp);
  } else {
    cloneResult = undefined;
    if (createNew != null) {
      cloneResult = createNew();
    }
    if (cloneResult == null) {
      const DeclarativeNotifSetting = create.DeclarativeNotifSetting;
      cloneResult = DeclarativeNotifSetting.create();
    }
  }
  if (createNew.update(cloneResult)) {
    const DeclarativeSettings = create.DeclarativeSettings;
    const cloneResult1 = DeclarativeSettings.clone(settings);
    cloneResult1.values[GAMING_DEFAULT] = cloneResult;
    let obj = dispatcherDefault;
    obj = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings: null };
    obj[1] = cloneResult1;
    obj.dispatch(obj);
  }
}
const result = require("set").fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export const updateNotifSettingToggleValue = function updateNotifSettingToggleValue(GAMING_DEFAULT, arg1) {
  closure_0 = arg1;
  updateNotifSettingValue(GAMING_DEFAULT, {
    createNew() {
      const DeclarativeNotifSetting = callback(table[1]).DeclarativeNotifSetting;
      const obj = DeclarativeNotifSetting.create();
      obj.toggle = true;
      return obj;
    },
    update(toggle) {
      toggle.toggle = closure_0;
      return toggle.toggle !== closure_0;
    }
  });
};
export const updateNotifSettingRadioValue = function updateNotifSettingRadioValue(GAMING_DEFAULT) {
  closure_0 = arg1;
  updateNotifSettingValue(GAMING_DEFAULT, {
    update(radio) {
      radio.radio = closure_0;
      return radio.radio !== closure_0;
    }
  });
};