// discord_app/modules/conversations/native/createConversationHeader.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3616 from "../Conversations.messages.js";
import renderer_EmbedUtils from "../../messages/native/renderer/EmbedUtils.tsx";
import _modDef11419 from "../../../../_runtime/metro/11419__.js";
import size from "../../../../_runtime/metro/00002__.js";

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
}
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
