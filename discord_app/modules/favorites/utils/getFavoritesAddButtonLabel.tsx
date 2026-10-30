// discord_app/modules/favorites/utils/getFavoritesAddButtonLabel.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3447 from "../intl/FavoritesGuild.messages.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/favorites/utils/getFavoritesAddButtonLabel.tsx");

export function getFavoritesAddButtonLabel(length) {
  if (length >= 2) {
    const intl2 = util.intl;
    const obj = { count: length };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef3447.LbCa8x, obj);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(_modDef3447.xKXcSu);
  }
  return formatToPlainStringResult;
}
