// discord_app/modules/client_themes/ClientThemesTypes.tsx
import { PROTO_THEME_MAP_WEB_REFRESH as closure_3 } from "SystemThemeState";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { SentryUtils.native } from "../../utils/SentryUtils.native.tsx";

const result = require("create").fileFinishedImporting("modules/client_themes/ClientThemesTypes.tsx");

export const ClientThemeType = require("module_4122").ClientThemeType;
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
    SentryUtils.native.captureException(error);
    let UNSET = _create.Theme.UNSET;
    const obj = SentryUtils.native;
  } else {
    const _parseInt = parseInt;
    UNSET = parseInt(found[0]);
  }
  return UNSET;
};