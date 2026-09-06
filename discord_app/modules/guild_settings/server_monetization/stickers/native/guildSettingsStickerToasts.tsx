// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
import util from "../../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CircleErrorIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx",
);

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  const obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  const obj = {
    key: "GUILD_SETTINGS_STICKER_SUCCESS",
    IconComponent: CircleInformationIcon.CircleInformationIcon,
    content: null,
  };
  const intl = util.intl;
  obj.content = intl.string(util.t["+c5xtT"]);
  obj.open(obj);
};
