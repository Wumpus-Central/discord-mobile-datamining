// discord_app/modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import isMetaQuest from "../../../device/MetaQuestUtils.android.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import isInAppMessageSoundsEnabled from "../../../notifications/native/InAppMessageSoundsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = isInAppMessageSoundsEnabled);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jLCRyj);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["wls+Ax"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: isMetaQuest.isMetaQuest
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;