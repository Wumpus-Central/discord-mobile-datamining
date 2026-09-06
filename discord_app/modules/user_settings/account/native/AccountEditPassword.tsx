// === Module 14776: AccountEditPassword ===

// Module 14776 (AccountEditPassword)
import nativeDefault from "native" /* 576 */;
import UserSettingsAccountEditPasswordDefault from "UserSettingsAccountEditPassword" /* 14777 */;
import noop from "module_19" /* 19 */;

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

export default noop.memo(() => <React2 style={closure_4().container}>{jsx(UserSettingsAccountEditPasswordDefault, {})}</React2>);