import { CircleErrorIcon } from "../../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { CircleInformationIcon } from "../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { dispatcher } from "../../../../toast/native/ToastActionCreators.tsx";
// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
const result = require("getSystemLocale").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = dispatcher;
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon /* CircleErrorIcon */.CircleErrorIcon, content: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = dispatcher;
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon /* CircleInformationIcon */.CircleInformationIcon, content: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["+c5xtT"]);
  obj.open(obj);
};