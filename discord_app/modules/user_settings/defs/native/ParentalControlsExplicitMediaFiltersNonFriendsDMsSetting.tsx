// === Module 15805: ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting ===

// Module 15805 (ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14621 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14625 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

const ExplicitMediaRedactionUtils = obj(7109);
require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  if (null == prop) {
    return null;
  } else if (cResult[0] !== prop) {
    obj = ExplicitMediaRedactionUtils;
    tmp = obj.redactionSettingToRenderedString(prop)();
    cResult[0] = prop;
    cResult[1] = tmp;
  }
}) : (() => {
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
});
function onObscuredContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const intl = selectedTeenId(1126).intl;
    const obj = selectedTeenId(14625);
    const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1126).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1126).t["Yh+HX1"]);
    const items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentNonFriendDm });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14630).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14630);
  }
}
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const SettingBuilders = fn(11129);
const pressable = SettingBuilders.createPressable({ useTitle: getTitle, parent: fn(7634).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS, useTrailing: tmp2, onPress: onObscuredContentNonFriendsDmOnPress, unsearchable: true });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export const useObscuredContentNonFriendsDmSettingValue = tmp2;
export { onObscuredContentNonFriendsDmOnPress };