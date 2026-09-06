// discord_app/modules/client_themes/ClientThemesTypes.tsx
import set from "../../../_runtime/00002_set.js";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";
import _modDef1232 from "../../utils/SentryUtils.native.tsx";
import _mod4412 from "../../../discord_common/js/packages/design/shared.tsx";

let closure_3 = SystemThemeState.PROTO_THEME_MAP_WEB_REFRESH;
const result = set.fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = _mod4412.ClientThemeType;
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
    _modDef1232.captureException(error);
    let UNSET =
      require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx")
        .Theme.UNSET;
    const obj = _modDef1232;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};
