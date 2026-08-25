// === Module 16926: showGuildSettingsStickerError ===

// Module 16926 (showGuildSettingsStickerError)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4098 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4335 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7938 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon.CircleInformationIcon, content: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["+c5xtT"]);
  obj.open(obj);
};