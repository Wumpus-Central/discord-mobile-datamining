// discord_app/modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx
import util from "../../../../intl/index.native.tsx";
import FamilyCenterActionCreatorsDefault from "../../../parent_tools/FamilyCenterActionCreators.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

require = fn;
const Consents = fn(1074).Consents;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(7975).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx",
);

export default SettingBuilders;
