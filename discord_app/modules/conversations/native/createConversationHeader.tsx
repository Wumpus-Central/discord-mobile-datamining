// discord_app/modules/conversations/native/createConversationHeader.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3729 from "../Conversations.messages.js";
import renderer_EmbedUtils from "../../messages/native/renderer/EmbedUtils.tsx";
import computeScrollData from "../../chat/native/computeScrollData.tsx";
import _modDef11576 from "../../../../_runtime/metro/11576__.js";
import RowGeneratorConstants from "../../messages/native/renderer/RowGeneratorConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  const obj = {
    conversationId: conversationId.id,
    channelId: conversationId.channelId,
    startMessageId: conversationId.startMessageId,
    title: conversationId.title,
    expandIconUrl: renderer_EmbedUtils.getAssetUriForEmbed(_modDef11576),
    expandAccessibilityLabel: null,
  };
  const intl = util.intl;
  obj.expandAccessibilityLabel = intl.string(_modDef3729.pU5Dut);
  return obj;
}
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
