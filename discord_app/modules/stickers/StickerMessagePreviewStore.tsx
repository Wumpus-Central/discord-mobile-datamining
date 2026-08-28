// === Module 5176: getStickerPreview ===

// Module 5176 (getStickerPreview)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import handleChanged from "handleChanged" /* 4820 */;

const DraftType = handleChanged.DraftType;
let closure_1 = {};
let closure_2 = {};
const Store = initializeDefault.Store;
class StickerMessagePreviewStore extends Store {
}
StickerMessagePreviewStore.prototype["getStickerPreview"] = function getStickerPreview(channelId, ChannelMessage) {
  return ChannelMessage === DraftType.FirstThreadMessage ? closure_2 : closure_1[channelId];
};
StickerMessagePreviewStore.displayName = "StickerMessagePreviewStore";
const stickerMessagePreviewStore = new StickerMessagePreviewStore(dispatcherDefault, {
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
    closure_1 = {};
    closure_2 = {};
  }
});
const result = set.fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default stickerMessagePreviewStore;