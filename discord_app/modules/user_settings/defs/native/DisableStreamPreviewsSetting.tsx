// === Module 15178: toggle ===

// Module 15178 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 8302 */;
import createToggle from "createToggle" /* 10584 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CzWUK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jTNPHM);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: explicitContentFromProto.DisableStreamPreviews.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CzWUK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jTNPHM);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: explicitContentFromProto.DisableStreamPreviews.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;