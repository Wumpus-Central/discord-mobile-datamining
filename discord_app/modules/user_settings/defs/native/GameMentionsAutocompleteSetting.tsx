// discord_app/modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;