// discord_app/modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx
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
function getTitle() {
  const intl = intl3.intl;
  return intl.string(intl3.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = useParentalControlSettings;
      const parentalControlledExplicitContentSettings = obj2.useParentalControlledExplicitContentSettings();
      let prop;
      if (parentalControlledExplicitContentSettings != null) {
        prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
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
      const parentalControlledExplicitContentSettings = obj.useParentalControlledExplicitContentSettings();
      let prop;
      if (parentalControlledExplicitContentSettings != null) {
        prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
      }
      let tmp5 = null;
      if (null != prop) {
        const tmpResult = ExplicitMediaRedactionUtils;
        tmp5 = tmpResult.redactionSettingToRenderedString(prop)();
      }
      return tmp5;
    };
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
  onPress: function onObscuredContentFriendsDmOnPress() {
    let intl2;
    let items;
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(14645);
      const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const intl = selectedTeenId(1126).intl;
      const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
      let obj2 = {
        title: stringResult,
        subtitle: intl2.string(selectedTeenId(1126).t["+uI23H"]),
        handlePress(explicitContentFriendDm) {
          const obj = FamilyCenterControlledSettingsUtils;
          const obj2 = { explicitContentFriendDm };
          return obj.updateExplicitContentSetting(selectedTeenId, obj2);
        },
        currentValue: explicitContentFriendDm,
        excluded: items,
      };
      const handleSensitiveMediaFilterPress = selectedTeenId(14650).handleSensitiveMediaFilterPress;
      selectedTeenId(14650);
      intl2 = selectedTeenId(1126).intl;
      items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
      const result = handleSensitiveMediaFilterPress(obj2);
    }
  },
  unsearchable: true,
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx",
);

export default pressable;
