// discord_app/modules/client_themes/ClientThemesTypes.tsx
import ThemeConstants from "../user_settings/ThemeConstants.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import design_shared from "../../../discord_common/js/packages/design/shared.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
