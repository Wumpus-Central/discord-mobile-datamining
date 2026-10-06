// discord_app/modules/conversations/native/createConversationHeader.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3655 from "../Conversations.messages.js";
import renderer_EmbedUtils from "../../messages/native/renderer/EmbedUtils.tsx";
import computeScrollData from "../../chat/native/computeScrollData.tsx";
import AssetRegistryDefault from "../../../../_runtime/11577_AssetRegistry.js";
import RowGeneratorConstants from "../../messages/native/renderer/RowGeneratorConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = {
    conversationId: conversationId.id,
    channelId: conversationId.channelId,
    startMessageId: conversationId.startMessageId,
    title: conversationId.title,
    expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault),
    expandAccessibilityLabel: intl.string(_modDef3655.pU5Dut),
  };
  obj2 = renderer_EmbedUtils;
  intl = intl2.intl;
  return obj;
}
export const isConversationStartMessage = function isConversationStartMessage(startMessageId, id) {
  return startMessageId.startMessageId === id && startMessageId.messageCount > 1;
};
export const findConversationHeaderRowIndex = function findConversationHeaderRowIndex(previousRows, startMessageId) {
  const obj = computeScrollData;
  const findMessageRowIndexResult = obj.findMessageRowIndex(previousRows, startMessageId.startMessageId);
  if (null != findMessageRowIndexResult) {
    let type;
    if (previousRows[findMessageRowIndexResult + 1] != null) {
      type = tmp2.type;
    }
    let sum;
    if (type === constants.SEPARATOR) {
      if (previousRows[findMessageRowIndexResult + 1].id === constants2.CONVERSATION) {
        sum = findMessageRowIndexResult + 1;
      }
    }
    return sum;
  }
};
