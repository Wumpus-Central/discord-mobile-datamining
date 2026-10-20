// === Module 15827: AgeGroupConfirmAccountStatusSetting ===

// Module 15827 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8280 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15822 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;