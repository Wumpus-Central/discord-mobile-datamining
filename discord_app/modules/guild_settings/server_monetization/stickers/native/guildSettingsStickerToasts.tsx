// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
import util from "../../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx",
);

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
