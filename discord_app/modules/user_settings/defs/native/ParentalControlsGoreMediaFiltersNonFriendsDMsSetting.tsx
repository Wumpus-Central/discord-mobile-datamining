// === Module 18184: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting ===

// Module 18184 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1113 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8828 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16956 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16960 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;

require = fn;
function useGoreContentNonFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(prop)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
}
function onGoreContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const obj = selectedTeenId(16960);
    const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1113).intl;
    obj3.title = intl.string(selectedTeenId(1113).t["16/3Bi"]);
    const intl2 = selectedTeenId(1113).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1113).t["Yh+HX1"]);
    obj3.handlePress = function handlePress(goreContentNonFriendDm) {
      return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentNonFriendDm });
    };
    obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    const result = selectedTeenId(16965).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(16965);
  }
}
const SettingBuilders = fn(11728);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(8573).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };