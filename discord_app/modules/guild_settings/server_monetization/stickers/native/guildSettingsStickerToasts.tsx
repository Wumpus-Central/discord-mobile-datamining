// === Module 18319: guildSettingsStickerToasts ===

// Module 18319 (guildSettingsStickerToasts)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["5NMPSS"]);
  ToastActionCreatorsDefault.open("GUILD_SETTINGS_STICKER_ERROR", obj2);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["+c5xtT"]);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("GUILD_SETTINGS_STICKER_SUCCESS", obj2);
};