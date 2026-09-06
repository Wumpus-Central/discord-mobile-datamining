// discord_app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../intl/ClientThemes.messages.js";
import registerAssetDefault from "../../../../../_runtime/08051_registerAsset.js";

const Image = get_ActivityIndicator.Image;
const result = set.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(
  message,
  ensureAvatarSourceResult,
  nick,
) {
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = {
      colors: null,
      gradientAngle: null,
      createdBy: null,
      createdByAvatarUrl: null,
      nitroWheelIconUrl: null,
      previewLabel: null,
      previewHeading: null,
      createdByLabel: null,
    };
    ({ colors: obj[0], gradient_angle: obj[1] } = sharedClientTheme);
    obj[2] = nick;
    let str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    obj[3] = str2;
    obj[4] = Image.resolveAssetSource(registerAssetDefault).uri;
    const intl = getSystemLocale.intl;
    obj[5] = intl.string(getSystemLocale.t.SKNnqq);
    const intl2 = getSystemLocale.intl;
    obj[6] = intl2.string(messagesProxyDefault.yl1iMm);
    const intl3 = getSystemLocale.intl;
    const _HermesInternal = HermesInternal;
    obj[7] = "" + intl3.format(messagesProxyDefault.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};
