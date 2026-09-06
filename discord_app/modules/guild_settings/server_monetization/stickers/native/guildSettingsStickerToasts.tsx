// === Module 17580: guildSettingsStickerToasts ===

// Module 17580 (guildSettingsStickerToasts)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4515 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  const obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  const obj = { key: "GUILD_SETTINGS_STICKER_SUCCESS", IconComponent: CircleInformationIcon.CircleInformationIcon, content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["+c5xtT"]);
  obj.open(obj);
};