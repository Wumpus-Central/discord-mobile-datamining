// === Module 11635: createConversationHeader ===

// Module 11635 (createConversationHeader)
import util from "util" /* 1115 */;
import _modDef3617 from "module_3617" /* 3617 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7583 */;
import _modDef11636 from "module_11636" /* 11636 */;
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
      obj.expandIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef11636);
      const intl = util.intl;
      obj.expandAccessibilityLabel = intl.string(_modDef3617.pU5Dut);
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