// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
import set from "../../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import dispatcherDefault from "../../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CircleErrorIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";

const result = set.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx",
);

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let obj = dispatcherDefault;
  obj = { key: "GUILD_SETTINGS_STICKER_ERROR", IconComponent: CircleErrorIcon.CircleErrorIcon, content: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["5NMPSS"]);
  obj.open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let obj = dispatcherDefault;
  obj = {
    key: "GUILD_SETTINGS_STICKER_SUCCESS",
    IconComponent: CircleInformationIcon.CircleInformationIcon,
    content: null,
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["+c5xtT"]);
  obj.open(obj);
};
