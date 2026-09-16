// === Module 16025: ParentalControlsGoreMediaFiltersFriendsDMsSetting ===

// Module 16025 (ParentalControlsGoreMediaFiltersFriendsDMsSetting)
import util from "util" /* 1115 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7708 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14940 */;
import FamilyCenterControlledSettingsUtils from "FamilyCenterControlledSettingsUtils" /* 14944 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7647 */;

require = fn;
const SettingBuilders = fn(11614);
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: fn(8091).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
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
      const obj = selectedTeenId(14944);
      const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl = selectedTeenId(1115).intl;
      obj3.title = intl.string(selectedTeenId(1115).t["16/3Bi"]);
      const intl2 = selectedTeenId(1115).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1115).t["+uI23H"]);
      obj3.handlePress = function handlePress(goreContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateGoreContentSetting(selectedTeenId, { goreContentFriendDm });
      };
      obj3.currentValue = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentFriendDm;
      const items = [selectedTeenId(1186).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(14937).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(14937);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;