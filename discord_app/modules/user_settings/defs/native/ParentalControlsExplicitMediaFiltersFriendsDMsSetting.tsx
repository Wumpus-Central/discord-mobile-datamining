// discord_app/modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import FamilyCenterControlledSettingsUtils from "../../../parent_tools/FamilyCenterControlledSettingsUtils.tsx";
import FamilyCenterStore from "../../../parent_tools/FamilyCenterStore.tsx";

const ExplicitMediaRedactionUtils = obj(7122);
require = fn;
const ReactCompilerGating = fn(558);
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["+uI23H"]);
}
const SettingBuilders = fn(11142);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = require;
      let tmp = dependencyMap;
      const cResult = c.c(2);
      const parentalControlledExplicitContentSettings =
        useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
    }
  : () => {
      const parentalControlledExplicitContentSettings =
        useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
    };
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: fn(7645).MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let obj = require;
        let tmp = dependencyMap;
        const cResult = c.c(2);
        const parentalControlledExplicitContentSettings =
          useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
      }
    : () => {
        const parentalControlledExplicitContentSettings =
          useParentalControlSettings.useParentalControlledExplicitContentSettings();
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
      },
  onPress: function onObscuredContentFriendsDmOnPress() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const intl = selectedTeenId(1126).intl;
      const obj = selectedTeenId(14645);
      const stringResult = intl.string(selectedTeenId(1126).t.GYpoAq);
      const obj3 = { title: stringResult, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      const intl2 = selectedTeenId(1126).intl;
      obj3.subtitle = intl2.string(selectedTeenId(1126).t["+uI23H"]);
      obj3.handlePress = function handlePress(explicitContentFriendDm) {
        return FamilyCenterControlledSettingsUtils.updateExplicitContentSetting(selectedTeenId, {
          explicitContentFriendDm,
        });
      };
      obj3.currentValue = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1197).ExplicitContentRedaction.SHOW];
      obj3.excluded = items;
      const result = selectedTeenId(14650).handleSensitiveMediaFilterPress(obj3);
      const obj2 = selectedTeenId(14650);
    }
  },
  unsearchable: true,
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx",
);

export default pressable;
