// discord_app/modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import AGE_GROUP_CONFIRM_ROW_PROPS from "AgeGroupScreenRowProps.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {};
const merged = Object.assign(AGE_GROUP_CONFIRM_ROW_PROPS.AGE_GROUP_CONFIRM_ROW_PROPS);
obj.parent = MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP;
obj.usePredicate = AGE_GROUP_CONFIRM_ROW_PROPS.useShowAccountStatusAgeGroupRow;
const pressable = createToggle.createPressable(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupConfirmAccountStatusSetting.tsx");

export default pressable;
