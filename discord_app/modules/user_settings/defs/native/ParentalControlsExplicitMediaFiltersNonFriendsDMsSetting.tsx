// === Module 15991: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 15991 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7702 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14914 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14918 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
}
function onObscuredContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const intl = selectedTeenId(1114).intl;
    const obj = selectedTeenId(14918);
    const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1114).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    const items = [selectedTeenId(1185).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentNonFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14911).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14911);
  }
}
const SettingBuilders = fn(11602);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(8079).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };