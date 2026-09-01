// discord_app/modules/user_settings/account/native/AccountEditPassword.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import componentWillUnmountDefault from "UserSettingsAccountEditPassword.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

({ View: obj1, StyleSheet } = get_ActivityIndicator);
let obj = { container: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => (
  <closure_2 style={callback().container}>{jsx(componentWillUnmountDefault, {})}</closure_2>
));
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/AccountEditPassword.tsx");

export default memoResult;
