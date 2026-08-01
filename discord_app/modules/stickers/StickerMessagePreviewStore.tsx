// === Module 4859: getStickerPreview ===

// Module 4859 (getStickerPreview)
import { DraftType } from "handleChanged";
import { Store } from "initialize";

let closure_1 = {};
let closure_2 = {};
class StickerMessagePreviewStore extends Store {
}
StickerMessagePreviewStore.prototype["getStickerPreview"] = function getStickerPreview(channelId, draftType) {
  return draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[channelId];
};
StickerMessagePreviewStore.displayName = "StickerMessagePreviewStore";
const stickerMessagePreviewStore = new StickerMessagePreviewStore(require("dispatcher"), {
  ADD_STICKER_PREVIEW: function handleAddStickerPreview(sticker) {
    const items = [sticker.sticker];
    sticker.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[sticker.channelId] = items;
  },
  CLEAR_STICKER_PREVIEW: function handleClearStickerPreview(arg0) {
    if (null != arg0.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[arg0.channelId]) {
      delete tmp[tmp2];
    }
  },
  LOGOUT: function resetState() {
    let closure_1 = {};
    let closure_2 = {};
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default stickerMessagePreviewStore;