// discord_app/modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import FamilyCenterControlledSettingsUtils from "../../../parent_tools/FamilyCenterControlledSettingsUtils.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

const ExplicitMediaRedactionUtils = obj(7122);
require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = require;
      let tmp = dependencyMap;
      const cResult = c.c(2);
      const parentalControlledExplicitContentSettings =
        useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
    }
  : () => {
      const parentalControlledExplicitContentSettings =
        useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
    };
function onObscuredContentNonFriendsDmOnPress() {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    const intl = selectedTeenId(1126).intl;
    const obj = selectedTeenId(14645);
    const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    const intl2 = selectedTeenId(1126).intl;
    obj3.subtitle = intl2.string(selectedTeenId(1126).t["Yh+HX1"]);
    const items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
    obj3.excluded = items;
    obj3.handlePress = function handlePress(explicitContentNonFriendDm) {
      const result = FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, {
        explicitContentNonFriendDm,
      });
    };
    obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14650).handleSensitiveMediaFilterPress(obj3);
    const obj2 = selectedTeenId(14650);
  }
}
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const SettingBuilders = fn(11142);
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: fn(7645).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true,
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx",
);

export default pressable;
export const useObscuredContentNonFriendsDmSettingValue = tmp2;
export { onObscuredContentNonFriendsDmOnPress };
