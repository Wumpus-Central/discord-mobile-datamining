// === Module 11563: createConversationHeader ===

// Module 11563 (createConversationHeader)
import util from "util" /* 1126 */;
import _modDef3625 from "module_3625" /* 3625 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import computeScrollData from "computeScrollData" /* 9988 */;
import _modDef11564 from "module_11564" /* 11564 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import size from "module_2" /* 2 */;

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef11564), expandAccessibilityLabel: null };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef3625.pU5Dut);
  return obj;
};
export const isConversationStartMessage = function isConversationStartMessage(startMessageId, id) {
  let tmp = startMessageId.startMessageId === id;
  if (tmp) {
    tmp = startMessageId.messageCount > 1;
  }
  return tmp;
};
export const findConversationHeaderRowIndex = function findConversationHeaderRowIndex(previousRows, startMessageId) {
  const findMessageRowIndexResult = computeScrollData.findMessageRowIndex(previousRows, startMessageId.startMessageId);
  if (null != findMessageRowIndexResult) {
    let type;
    if (previousRows[findMessageRowIndexResult + 1] != null) {
      type = tmp2.type;
    }
    let sum;
    if (type === constants.SEPARATOR) {
      if (tmp2.id === constants2.CONVERSATION) {
        sum = findMessageRowIndexResult + 1;
      }
    }
    return sum;
  }
};