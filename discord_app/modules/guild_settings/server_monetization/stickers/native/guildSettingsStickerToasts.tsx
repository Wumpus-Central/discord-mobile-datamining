const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = importDefault(3956);
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require(7704) /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = importDefault(3956);
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require(4211) /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};