// discord_app/modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx
import intl2 from "../../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../../toast/native/ToastActionCreators.tsx";
import CircleErrorIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import CircleInformationIcon from "../../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/guildSettingsStickerToasts.tsx",
);

export const showGuildSettingsStickerError = function showGuildSettingsStickerError() {
  let intl;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = {
    key: "GUILD_SETTINGS_STICKER_ERROR",
    IconComponent: CircleErrorIcon.CircleErrorIcon,
    content: intl.string(intl2.t["5NMPSS"]),
  };
  intl = intl2.intl;
  open(obj);
};
export const showGuildSettingsStickerSuccess = function showGuildSettingsStickerSuccess() {
  let intl;
  const tmp = ToastActionCreatorsDefault;
  const open = tmp.open;
  const obj = {
    key: "GUILD_SETTINGS_STICKER_SUCCESS",
    IconComponent: CircleInformationIcon.CircleInformationIcon,
    content: intl.string(intl2.t["+c5xtT"]),
  };
  intl = intl2.intl;
  open(obj);
};
