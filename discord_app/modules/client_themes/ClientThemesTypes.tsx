// discord_app/modules/client_themes/ClientThemesTypes.tsx
import { PROTO_THEME_MAP_WEB_REFRESH as closure_3 } from "SystemThemeState";

const result = require("create").fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = require("module_4100").ClientThemeType;
export const getProtoThemeFromBaseTheme = function getProtoThemeFromBaseTheme(arg0) {
  const _require = arg0;
  const entries = Object.entries(closure_3);
  const found = entries.find((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp === closure_0;
  });
  if (undefined === found) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("No ProtoTheme found for base theme: " + arg0);
    importDefault(1208).captureException(error);
    let UNSET = _require(1306).Theme.UNSET;
    const obj = importDefault(1208);
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};