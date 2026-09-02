// === Module 1348: ClientThemeType ===

// Module 1348 (ClientThemeType)
import set from "set" /* 2 */;
import _modDef1205 from "module_1205" /* 1205 */;
import SystemThemeState from "SystemThemeState" /* 1304 */;
import _mod1349 from "module_1349" /* 1349 */;

let closure_3 = SystemThemeState.PROTO_THEME_MAP_WEB_REFRESH;
const result = set.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = _mod1349.ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  const _require = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((arg0) => {
    [, tmp] = arg0;
    return tmp === closure_0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("No ProtoTheme found for base theme: " + arg0);
    _modDef1205.captureException(error);
    let UNSET = _require(1305).Theme.UNSET;
    const obj = _modDef1205;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};