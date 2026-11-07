// === Module 13950: createConversationHeader ===

// Module 13950 (createConversationHeader)
import util from "util" /* 1113 */;
import _modDef3928 from "module_3928" /* 3928 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8467 */;
import computeScrollData from "computeScrollData" /* 10228 */;
import _modDef12964 from "module_12964" /* 12964 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8449 */;
import size from "module_2" /* 2 */;

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef12964), expandAccessibilityLabel: null };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef3928.pU5Dut);
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