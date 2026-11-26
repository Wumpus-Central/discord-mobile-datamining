// === Module 17602: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 17602 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1112 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8937 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16323 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16327 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;

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
    const intl = selectedTeenId(1112).intl;
    const obj = selectedTeenId(16327);
    const stringResult = intl.string(selectedTeenId(1112).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1112).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1112).t["Yh+HX1"]);
    items = [selectedTeenId(1195).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentNonFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(16333).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(16333);
  }
}
const SettingBuilders = fn(11962);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(9555).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };