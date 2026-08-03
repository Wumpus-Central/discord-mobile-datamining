import { TypeTag } from "TypeTag";

const result = require("set").fileFinishedImporting("modules/stickers/StickersTypes.tsx");

export const StickerFormat = require("MetaStickerType").StickerFormat;
export const MetaStickerType = require("MetaStickerType").MetaStickerType;
export const StickerExtensions = { PNG: "png", APNG: "png", LOTTIE: "json", WEBP: "webp", GIF: "gif" };
export const isAnimatedSticker = function isAnimatedSticker(arg0) {
  return arg0 !== require(4861) /* MetaStickerType */.StickerFormat.PNG;
};
export const isCustomSticker = function isCustomSticker(arg0) {
  return arg0 !== require(4861) /* MetaStickerType */.MetaStickerType.STANDARD;
};
export const StickerGridItemTypes = { STICKER: 0, [0]: "STICKER", CREATE_STICKER: 1, [1]: "CREATE_STICKER" };
export const StickerCategoryTypes = { PACK: "PACK", FAVORITE: "FAVORITE", RECENT: "RECENT", SEARCH_RESULTS: "SEARCH_RESULTS", SEARCH_SUGGESTIONS: "SEARCH_SUGGESTIONS", GUILD: "GUILD", EMPTY_GUILD_UPSELL: "EMPTY_GUILD_UPSELL", CREATE_STICKER: "CREATE_STICKER" };
export const StickerMetadataTypes = { STICKER_NAME: 0, [0]: "STICKER_NAME", TAG: 1, [1]: "TAG", CORRELATED_EMOJI: 2, [2]: "CORRELATED_EMOJI", GUILD_NAME: 3, [3]: "GUILD_NAME", PACK_NAME: 4, [4]: "PACK_NAME" };
export const StickerSelectLocation = { STICKER_PICKER: 0, [0]: "STICKER_PICKER", AUTOCOMPLETE: 1, [1]: "AUTOCOMPLETE", BUILT_IN_INTEGRATION: 2, [2]: "BUILT_IN_INTEGRATION" };