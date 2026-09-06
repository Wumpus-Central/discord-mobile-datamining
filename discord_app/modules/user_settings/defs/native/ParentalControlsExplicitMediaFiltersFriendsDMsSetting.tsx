// === Module 15897: ParentalControlsExplicitMediaFiltersFriendsDMsSetting ===

// Module 15897 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14828 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(7975).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
      const tmpResult = ExplicitMediaRedactionUtils;
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      selectedTeenId(14828);
      const intl = selectedTeenId(1114).intl;
      const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
      let obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1114).intl;
      obj.subtitle = intl2.string(selectedTeenId(1114).t["+uI23H"]);
      obj.handlePress = function handlePress(explicitContentFriendDm) {
        const obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(selectedTeenId, obj);
      };
      obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
      obj.excluded = items;
      const result = selectedTeenId(14821).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14821);
    }
  },
  unsearchable: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default SettingBuilders;