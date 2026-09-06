// discord_app/modules/stickers/native/openStickerPackDetailActionSheet.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/stickers/native/openStickerPackDetailActionSheet.tsx");

export default function openStickerPackDetailActionSheet(stickerPack) {
  stickerPack = stickerPack.stickerPack;
  ({ analyticsLocation, analyticsPopoutType } = stickerPack);
  const obj = { location: analyticsLocation, sticker_pack_id: stickerPack.id };
  obj.track(AnalyticEvents.STICKER_PACK_VIEW_ALL, obj);
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(10395, dependencyMap.paths),
    "StickerPackDetailActionSheet",
    { stickerPack, analyticsPopoutType },
  );
}
export const AnalyticsPopoutType = {
  EXPRESSION_SUGGESTIONS: "Sticker Pack Detail Sheet (Expression Suggestions Popout)",
  STICKER_PACK_DETAIL: "Sticker Pack Detail Sheet",
  STICKER_PACK_UPSELL: "Sticker Pack Detail Sheet (Sticker Upsell Popout)",
};
