// === Module 19622: guildSettingsStickerToasts ===

// Module 19622 (guildSettingsStickerToasts)
import util from "util" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx");

export function showGuildSettingsStickerError() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["5NMPSS"]);
  ToastActionCreatorsDefault.open("GUILD_SETTINGS_STICKER_ERROR", obj2);
}
export function showGuildSettingsStickerSuccess() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["+c5xtT"]);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("GUILD_SETTINGS_STICKER_SUCCESS", obj2);
}