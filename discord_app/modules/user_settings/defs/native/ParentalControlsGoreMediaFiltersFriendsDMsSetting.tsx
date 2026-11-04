// === Module 18195: ParentalControlsGoreMediaFiltersFriendsDMsSetting ===

// Module 18195 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import util from "util" /* 1113 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8828 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16968 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 16972 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;

require = fn;
const SettingBuilders = fn(11729);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(8573).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
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
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const obj = selectedTeenId(16972);
      const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1113).intl;
      obj3.title = intl.string(selectedTeenId(1113).t["16/3Bi"]);
      const intl2 = selectedTeenId(1113).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1113).t["+uI23H"]);
      obj3.handlePress = function handlePress(goreContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentFriendDm });
      };
      obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      items = [selectedTeenId(1196).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(16977).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(16977);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;