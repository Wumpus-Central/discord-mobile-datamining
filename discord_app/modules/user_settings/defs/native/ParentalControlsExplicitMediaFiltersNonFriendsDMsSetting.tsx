// === Module 15980: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 15980 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7651 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14906 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7589 */;

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
    selectedTeenId(14906);
    const intl = selectedTeenId(1114).intl;
    const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
    let obj = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1114).intl;
    obj.subtitle = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    obj.handlePress = function handlePress(explicitContentNonFriendDm) {
      const obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14899).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14899);
  }
}
fn(11540);
let SettingBuilders = {
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(8027).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default SettingBuilders;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };