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
    obj[4] = Image.resolveAssetSource(importDefault(7626)).uri;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[5] = intl.string(require(1236) /* getSystemLocale */.t.SKNnqq);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[6] = intl2.string(importDefault(2483).yl1iMm);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    obj[7] = "" + intl3.format(importDefault(2483).fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};