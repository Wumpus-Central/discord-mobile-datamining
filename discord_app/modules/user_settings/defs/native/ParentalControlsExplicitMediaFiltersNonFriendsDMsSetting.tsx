// === Module 15519: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 15519 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1115 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7020 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14354 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14358 */;
import FamilyCenterStore from "FamilyCenterStore" /* 6957 */;

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
    const intl = selectedTeenId(1115).intl;
    const obj = selectedTeenId(14358);
    const stringResult = intl.string(selectedTeenId(1115).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1115).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1115).t["Yh+HX1"]);
    const items = [selectedTeenId(1186).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentNonFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14363).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14363);
  }
}
const SettingBuilders = fn(11006);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(7417).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };