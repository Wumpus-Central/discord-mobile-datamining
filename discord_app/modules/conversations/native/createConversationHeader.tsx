// === Module 13850: createConversationHeader ===

// Module 13850 (createConversationHeader)
import util from "util" /* 1113 */;
import _modDef3897 from "module_3897" /* 3897 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8520 */;
import computeScrollData from "computeScrollData" /* 10237 */;
import _modDef12899 from "module_12899" /* 12899 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8502 */;
import size from "module_2" /* 2 */;

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef12899), expandAccessibilityLabel: null };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef3897.pU5Dut);
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