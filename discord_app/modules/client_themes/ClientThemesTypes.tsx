// === Module 1349: ClientThemeType ===

// Module 1349 (ClientThemeType)
import obj132 from "obj132" /* 2 */;
import _modDef1208 from "module_1208" /* 1208 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;
import _mod1350 from "module_1350" /* 1350 */;

let closure_3 = SystemThemeState.PROTO_THEME_MAP_WEB_REFRESH;
const result = obj132.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = _mod1350.ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  const _require = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((item, index) => {
    [, tmp] = item;
    return tmp === closure_0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("No ProtoTheme found for base theme: " + arg0);
    _modDef1208.captureException(error);
    let UNSET = _require(1306).Theme.UNSET;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};