// === Module 10408: openStickerPackDetailActionSheet ===

// Module 10408 (openStickerPackDetailActionSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/stickers/native/openStickerPackDetailActionSheet.tsx");

export default function openStickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ analyticsLocation, analyticsPopoutType } = stickerPack);
  let obj = expandEventPropertiesDefault;
  obj = { location: analyticsLocation, sticker_pack_id: stickerPack.id };
  obj.track(AnalyticEvents.STICKER_PACK_VIEW_ALL, obj);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10409, dependencyMap.paths), "StickerPackDetailActionSheet", { stickerPack, analyticsPopoutType });
};
export const AnalyticsPopoutType = { EXPRESSION_SUGGESTIONS: "Sticker Pack Detail Sheet (Expression Suggestions Popout)", STICKER_PACK_DETAIL: "Sticker Pack Detail Sheet", STICKER_PACK_UPSELL: "Sticker Pack Detail Sheet (Sticker Upsell Popout)" };