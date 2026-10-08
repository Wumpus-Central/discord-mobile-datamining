// === Module 16106: ParentalControlsGoreMediaFiltersFriendsDMsSetting ===

// Module 16106 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentFriendsDmSettingValue() {
  let obj = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
  let goreContentFriendDm;
  if (parentalControlledGoreContentSettings != null) {
    goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
  }
  if (null == goreContentFriendDm) {
    return null;
  } else if (cResult[0] !== goreContentFriendDm) {
    obj = ExplicitMediaRedactionUtils;
    tmp = obj.redactionSettingToRenderedString(goreContentFriendDm)();
    cResult[0] = goreContentFriendDm;
    cResult[1] = tmp;
  }
}) : (function useGoreContentFriendsDmSettingValue() {
  const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
  let goreContentFriendDm;
  if (parentalControlledGoreContentSettings != null) {
    goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
  }
  let tmp5 = null;
  if (null != goreContentFriendDm) {
    tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentFriendDm)();
    const tmpResult = ExplicitMediaRedactionUtils;
  }
  return tmp5;
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: fn(7966).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentFriendsDmSettingValue() {
    let obj = require;
    let tmp = dependencyMap;
    const cResult = c.c(2);
    const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (parentalControlledGoreContentSettings != null) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    if (null == goreContentFriendDm) {
      return null;
    } else if (cResult[0] !== goreContentFriendDm) {
      obj = ExplicitMediaRedactionUtils;
      tmp = obj.redactionSettingToRenderedString(goreContentFriendDm)();
      cResult[0] = goreContentFriendDm;
      cResult[1] = tmp;
    }
  }) : (function useGoreContentFriendsDmSettingValue() {
    const parentalControlledGoreContentSettings = useParentalControlSettings.useParentalControlledGoreContentSettings();
    let goreContentFriendDm;
    if (parentalControlledGoreContentSettings != null) {
      goreContentFriendDm = parentalControlledGoreContentSettings.goreContentFriendDm;
    }
    let tmp5 = null;
    if (null != goreContentFriendDm) {
      tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentFriendDm)();
      const tmpResult = ExplicitMediaRedactionUtils;
    }
    return tmp5;
  }),
  onPress: function onGoreContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const obj = selectedTeenId(14906);
      const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1126).intl;
      obj3.title = intl.string(selectedTeenId(1126).t["16/3Bi"]);
      const intl2 = selectedTeenId(1126).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1126).t["+uI23H"]);
      obj3.handlePress = function handlePress(goreContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentFriendDm });
      };
      obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1209).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(14911).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(14911);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;