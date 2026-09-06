// === Module 15900: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting ===

// Module 15900 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14828 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

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
    selectedTeenId(14828);
    let obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1114).intl;
    obj.title = intl.string(selectedTeenId(1114).t["16/3Bi"]);
    const intl2 = selectedTeenId(1114).intl;
    obj.subtitle = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    obj.handlePress = function handlePress(goreContentNonFriendDm) {
      const obj = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(selectedTeenId, obj);
    };
    obj.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
    obj.excluded = items;
    const result = selectedTeenId(14821).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14821);
  }
}
fn(11468);
let SettingBuilders = {
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: fn(7975).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default SettingBuilders;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };