// discord_app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
import { Image } from "get ActivityIndicator";

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
    obj[4] = Image.resolveAssetSource(require("../../../../../_runtime/07626_registerAsset.js")).uri;
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[5] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.SKNnqq);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[6] = intl2.string(require("../../intl/ClientThemes.messages.js").yl1iMm);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    obj[7] = "" + intl3.format(require("../../intl/ClientThemes.messages.js").fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};