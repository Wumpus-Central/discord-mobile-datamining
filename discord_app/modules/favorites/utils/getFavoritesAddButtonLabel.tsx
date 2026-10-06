// discord_app/modules/favorites/utils/getFavoritesAddButtonLabel.tsx
import intl3 from "../../../intl/index.native.tsx";
import _modDef3395 from "../intl/FavoritesGuild.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export const getFavoritesAddButtonLabel = function getFavoritesAddButtonLabel(length) {
  let formatToPlainStringResult;
  if (length >= 2) {
    const intl2 = intl3.intl;
    const obj = { count: length };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3395.LbCa8x, obj);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(_modDef3395.xKXcSu);
  }
  return formatToPlainStringResult;
};
