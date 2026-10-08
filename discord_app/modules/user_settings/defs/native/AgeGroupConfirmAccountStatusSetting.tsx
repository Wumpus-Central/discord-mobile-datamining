// === Module 14822: AgeGroupConfirmAccountStatusSetting ===

// Module 14822 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 7966 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14817 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;