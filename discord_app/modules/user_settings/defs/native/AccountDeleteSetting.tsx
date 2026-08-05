// discord_app/modules/user_settings/defs/native/AccountDeleteSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { handleDisableAccount } from "../../account/native/handleDisableAccount.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccount(true);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    handleDisableAccount(true);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;