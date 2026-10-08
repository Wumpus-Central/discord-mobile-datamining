// === Module 16104: ParentalControlsExplicitMediaFiltersFriendsDMsSetting ===

// Module 16104 (ParentalControlsExplicitMediaFiltersFriendsDMsSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14906 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

const ExplicitMediaRedactionUtils = obj(8218);
require = fn;
const ReactCompilerGating = fn(558);
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["+uI23H"]);
}
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentFriendsDmSettingValue() {
  let obj = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
  }
  if (null == prop) {
    return null;
  } else if (cResult[0] !== prop) {
    obj = ExplicitMediaRedactionUtils;
    tmp = obj.redactionSettingToRenderedString(prop)();
    cResult[0] = prop;
    cResult[1] = tmp;
  }
}) : (function useObscuredContentFriendsDmSettingValue() {
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
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: fn(7966).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentFriendsDmSettingValue() {
    let obj = require;
    let tmp = dependencyMap;
    const cResult = c.c(2);
    const parentalControlledExplicitContentSettings = useParentalControlSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    if (null == prop) {
      return null;
    } else if (cResult[0] !== prop) {
      obj = ExplicitMediaRedactionUtils;
      tmp = obj.redactionSettingToRenderedString(prop)();
      cResult[0] = prop;
      cResult[1] = tmp;
    }
  }) : (function useObscuredContentFriendsDmSettingValue() {
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
  }),
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const intl = selectedTeenId(1126).intl;
      const obj = selectedTeenId(14906);
      const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1126).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1126).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, { explicitContentFriendDm });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(14911).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(14911);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;