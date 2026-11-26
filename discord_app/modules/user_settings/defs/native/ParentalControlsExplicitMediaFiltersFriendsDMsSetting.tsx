// === Module 17601: ParentalControlsExplicitMediaFiltersFriendsDMsSetting ===

// Module 17601 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import util from "util" /* 1112 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8937 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16323 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16327 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;

require = fn;
const SettingBuilders = fn(11962);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(9555).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
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
      const intl = selectedTeenId(1112).intl;
      const obj = selectedTeenId(16327);
      const stringResult = intl.string(selectedTeenId(1112).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1112).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1112).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentFriendDm });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      items = [selectedTeenId(1195).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(16333).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(16333);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;