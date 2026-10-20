// === Module 12868: createConversationHeader ===

// Module 12868 (createConversationHeader)
import util from "util" /* 1128 */;
import _modDef3722 from "module_3722" /* 3722 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8225 */;
import computeScrollData from "computeScrollData" /* 9922 */;
import _modDef12332 from "module_12332" /* 12332 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8081 */;
import size from "module_2" /* 2 */;

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef12332), expandAccessibilityLabel: null };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef3722.pU5Dut);
  return obj;
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