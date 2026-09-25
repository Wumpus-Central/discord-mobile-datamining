// === Module 11418: createConversationHeader ===

// Module 11418 (createConversationHeader)
import util from "util" /* 1115 */;
import _modDef3616 from "module_3616" /* 3616 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7383 */;
import _modDef11419 from "module_11419" /* 11419 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(startMessageId, arg1) {
  if (null != startMessageId) {
    let tmp = null != startMessageId;
    if (tmp) {
      tmp = startMessageId.startMessageId === arg1;
    }
    if (tmp) {
      tmp = startMessageId.messageCount > 1;
    }
    if (tmp) {
      const obj = { conversationId: null, title: null, expandIconUrl: null, expandAccessibilityLabel: null };
      ({ id: obj.conversationId, title: obj.title } = startMessageId);
      obj.expandIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef11419);
      const intl = util.intl;
      obj.expandAccessibilityLabel = intl.string(_modDef3616.pU5Dut);
      return obj;
    }
  }
};
export const isConversationStartMessage = function isConversationStartMessage(startMessageId, id) {
  let tmp = null != startMessageId;
  if (tmp) {
    tmp = startMessageId.startMessageId === id;
  }
  if (tmp) {
    tmp = startMessageId.messageCount > 1;
  }
  return tmp;
};