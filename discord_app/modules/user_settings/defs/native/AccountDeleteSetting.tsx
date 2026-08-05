// discord_app/modules/user_settings/defs/native/AccountDeleteSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    require("../../account/native/handleDisableAccount.tsx")(true);
  }
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    require("../../account/native/handleDisableAccount.tsx")(true);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;