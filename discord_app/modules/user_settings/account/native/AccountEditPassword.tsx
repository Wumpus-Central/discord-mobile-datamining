// discord_app/modules/user_settings/account/native/AccountEditPassword.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.container = obj;
let closure_4 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default noop.memo(() => (
  <React2 style={closure_4().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</React2>
));
