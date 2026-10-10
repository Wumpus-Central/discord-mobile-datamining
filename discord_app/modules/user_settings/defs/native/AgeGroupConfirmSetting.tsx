// === Module 14986: AgeGroupConfirmSetting ===

// Module 14986 (AgeGroupConfirmSetting)
import SettingsConstants from "SettingsConstants" /* 7992 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 14984 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const obj = {};
const merged = Object.assign(AgeGroupScreenRowProps.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT;
obj.usePredicate = AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow;
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmSetting.tsx");

export default pressable;