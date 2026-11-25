// === Module 12899: createConversationHeader ===

// Module 12899 (createConversationHeader)
import util from "util" /* 1112 */;
import _modDef4146 from "module_4146" /* 4146 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8779 */;
import computeScrollData from "computeScrollData" /* 11966 */;
import _modDef12900 from "module_12900" /* 12900 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8182 */;
import size from "module_2" /* 2 */;

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef12900), expandAccessibilityLabel: null };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef4146.pU5Dut);
  return obj;
};
export function findConversationHeaderRowIndex(previousRows, startMessageId) {
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
}