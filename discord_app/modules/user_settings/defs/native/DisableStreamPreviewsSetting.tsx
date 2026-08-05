// discord_app/modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require("../../UserSettings.tsx") /* explicitContentFromProto */.DisableStreamPreviews;
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
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["1CzWUK"]);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.jTNPHM);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    const DisableStreamPreviews = require("../../UserSettings.tsx") /* explicitContentFromProto */.DisableStreamPreviews;
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