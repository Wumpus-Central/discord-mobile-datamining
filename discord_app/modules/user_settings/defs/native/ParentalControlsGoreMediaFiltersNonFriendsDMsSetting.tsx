// === Module 16290: ParentalControlsGoreMediaFiltersNonFriendsDMsSetting ===

// Module 16290 (ParentalControlsGoreMediaFiltersNonFriendsDMsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 15077 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;

const ExplicitMediaRedactionUtils = obj(8242);
require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentNonFriendsDmSettingValue() {
  let obj = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
  let prop;
  if (parentalControlledGoreContentSettings != null) {
    prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
  }
  if (null == prop) {
    return null;
  } else if (cResult[0] !== prop) {
    obj = ExplicitMediaRedactionUtils;
    tmp = obj.redactionSettingToRenderedString(prop)();
    cResult[0] = prop;
    cResult[1] = tmp;
  }
}) : (function useGoreContentNonFriendsDmSettingValue() {
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
});
function onGoreContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const obj = selectedTeenId(15077);
    const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
    const intl = selectedTeenId(1126).intl;
    obj3.title = intl.string(selectedTeenId(1126).t["16/3Bi"]);
    const intl2 = selectedTeenId(1126).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1126).t["Yh+HX1"]);
    obj3.handlePress = function handlePress(goreContentNonFriendDm) {
      return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentNonFriendDm });
    };
    obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    const items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    const result = selectedTeenId(15082).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(15082);
  }
}
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const SettingBuilders = fn(10663);
const pressable = SettingBuilders.createPressable({ useTitle: getTitle, parent: fn(7992).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: tmp2, onPress: onGoreContentNonFriendsDmOnPress, unsearchable: true });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };