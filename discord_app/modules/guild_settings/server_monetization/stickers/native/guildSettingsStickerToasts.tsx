// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = require("../../../../toast/native/ToastActionCreators.tsx");
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: require("../../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx") /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = require("../../../../toast/native/ToastActionCreators.tsx");
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: require("../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx") /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};