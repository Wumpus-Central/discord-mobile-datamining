// discord_app/modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CzWUK"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jTNPHM);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
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
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = explicitContentFromProto.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: require("explicitContentFromProto").DisableStreamPreviews.updateSetting
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;