// === Module 14814: AgeGroupConfirmAccountStatusSetting ===

// Module 14814 (AgeGroupConfirmAccountStatusSetting)
import SettingsConstants from "SettingsConstants" /* 8049 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14809 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AgeGroupScreenRowProps.useShowAccountStatusAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;