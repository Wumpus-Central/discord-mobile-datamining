// discord_app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
import { Image } from "get ActivityIndicator";
import { registerAsset } from "../../../../../_runtime/07989_registerAsset.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../intl/ClientThemes.messages.js";

const result = require("getSystemLocale").fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(message, ensureAvatarSourceResult, nick) {
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = { colors: null, gradientAngle: null, createdBy: null, createdByAvatarUrl: null, nitroWheelIconUrl: null, previewLabel: null, previewHeading: null, createdByLabel: null };
    ({ colors: obj[0], gradient_angle: obj[1] } = sharedClientTheme);
    obj[2] = nick;
    let str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    obj[3] = str2;
    obj[4] = Image.resolveAssetSource(registerAsset).uri;
    const intl = getSystemLocale.intl;
    obj[5] = intl.string(getSystemLocale.t.SKNnqq);
    const intl2 = getSystemLocale.intl;
    obj[6] = intl2.string(messagesProxy.yl1iMm);
    const intl3 = getSystemLocale.intl;
    const _HermesInternal = HermesInternal;
    obj[7] = "" + intl3.format(messagesProxy.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};