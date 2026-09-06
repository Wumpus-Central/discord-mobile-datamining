// === Module 1231: ClientThemesTypes ===

// Module 1231 (ClientThemesTypes)
import ThemeConstants from "ThemeConstants" /* 1186 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import design_shared from "design/shared" /* 4412 */;
import size from "module_2" /* 2 */;

let closure_3 = ThemeConstants.PROTO_THEME_MAP_WEB_REFRESH;
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = design_shared.ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  closure_0 = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((item) => {
    [, tmp] = item;
    return tmp === closure_0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("No ProtoTheme found for base theme: " + arg0);
    SentryUtilsDefault.captureException(error);
    let UNSET = preloaded_user_settings.Theme.UNSET;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};