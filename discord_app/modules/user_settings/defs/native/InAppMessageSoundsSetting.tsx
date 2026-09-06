// discord_app/modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import InAppMessageSoundsStore from "../../../notifications/native/InAppMessageSoundsStore.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = InAppMessageSoundsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.jLCRyj);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["wls+Ax"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: MetaQuestUtils.isMetaQuest,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
