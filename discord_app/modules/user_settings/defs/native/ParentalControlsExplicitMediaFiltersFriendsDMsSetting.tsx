// === Module 18302: ParentalControlsExplicitMediaFiltersFriendsDMsSetting ===

// Module 18302 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import util from "util" /* 1113 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8764 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17065 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 17069 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7794 */;

require = fn;
const SettingBuilders = fn(11694);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(8507).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
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
      const intl = selectedTeenId(1113).intl;
      const obj = selectedTeenId(17069);
      const stringResult = intl.string(selectedTeenId(1113).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1113).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1113).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentFriendDm });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(17075).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(17075);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;