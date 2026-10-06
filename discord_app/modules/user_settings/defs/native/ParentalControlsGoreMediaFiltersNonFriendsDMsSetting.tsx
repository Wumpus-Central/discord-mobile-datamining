// discord_app/modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import ExplicitMediaRedactionUtils from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import FamilyCenterControlledSettingsUtils from "../../../parent_tools/FamilyCenterControlledSettingsUtils.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useParentalControlSettings;
      const parentalControlledGoreContentSettings = obj2.useParentalControlledGoreContentSettings();
      let prop;
      if (parentalControlledGoreContentSettings != null) {
        prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
      }
      let tmp6 = null;
      if (null != prop) {
        let tmp7;
        if (cResult[0] !== prop) {
          const tmpResult = ExplicitMediaRedactionUtils;
          const tmp8 = tmpResult.redactionSettingToRenderedString(prop)();
          cResult[0] = prop;
          cResult[1] = tmp8;
          tmp7 = tmp8;
        } else {
          tmp7 = cResult[1];
        }
        tmp6 = tmp7;
      }
      return tmp6;
    }
  : () => {
      const obj = useParentalControlSettings;
      const parentalControlledGoreContentSettings = obj.useParentalControlledGoreContentSettings();
      let prop;
      if (parentalControlledGoreContentSettings != null) {
        prop = parentalControlledGoreContentSettings.goreContentNonFriendDm;
      }
      let tmp5 = null;
      if (null != prop) {
        const tmpResult = ExplicitMediaRedactionUtils;
        tmp5 = tmpResult.redactionSettingToRenderedString(prop)();
      }
      return tmp5;
    };
function onGoreContentNonFriendsDmOnPress() {
  let intl;
  let intl2;
  let items;
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(14645);
    const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault(selectedTeenId).goreContentNonFriendDm;
    let obj2 = {
      title: intl.string(selectedTeenId(1126).t["16/3Bi"]),
      subtitle: intl2.string(selectedTeenId(1126).t["Yh+HX1"]),
      handlePress(goreContentNonFriendDm) {
        const obj = FamilyCenterControlledSettingsUtils;
        const obj2 = { goreContentNonFriendDm };
        return obj.updateGoreContentSetting(selectedTeenId, obj2);
      },
      currentValue: goreContentNonFriendDm,
      excluded: items,
    };
    const handleSensitiveMediaFilterPress = selectedTeenId(14650).handleSensitiveMediaFilterPress;
    selectedTeenId(14650);
    intl = selectedTeenId(1126).intl;
    intl2 = selectedTeenId(1126).intl;
    items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
    const result = handleSensitiveMediaFilterPress(obj2);
  }
}
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["Yh+HX1"]);
}
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: onGoreContentNonFriendsDmOnPress,
  unsearchable: true,
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsGoreMediaFiltersNonFriendsDMsSetting.tsx",
);

export default pressable;
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };
