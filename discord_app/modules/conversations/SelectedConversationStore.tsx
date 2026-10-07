// discord_app/modules/conversations/SelectedConversationStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelConversationsStore from "ChannelConversationsStore.tsx";
import ConversationPreviewStore from "ConversationPreviewStore.tsx";

let c2 = null;
const Store = initializeDefault.Store;
class SelectedConversationStore extends Store {}
const prototype = SelectedConversationStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  this.syncWith(items, () => null != _null);
};
prototype["getSelectedConversationId"] = function getSelectedConversationId(channelId) {
  channelId = undefined;
  if (_null != null) {
    channelId = _null.channelId;
  }
  let conversationId = null;
  if (channelId === channelId) {
    conversationId = _null.conversationId;
  }
  return conversationId;
};
prototype["getSelectedConversation"] = function getSelectedConversation(channelId) {
  const selectedConversationId = this.getSelectedConversationId(channelId);
  let tmp2 = null;
  if (null != selectedConversationId) {
    const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, selectedConversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    if (conversation == null) {
      conversation = ConversationPreviewStore.getConversation(selectedConversationId);
    }
    tmp2 = conversation;
  }
  return tmp2;
};
SelectedConversationStore.displayName = "SelectedConversationStore";
const selectedConversationStore = new SelectedConversationStore(DispatcherDefault, {
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    c2 = { channelId: channelId.channelId, conversationId: channelId.conversationId };
  },
  CLEAR_CONVERSATION_SELECTION: function handleClearConversationSelection(conversationId) {
    conversationId = conversationId.conversationId;
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    let tmp2 = channelId === conversationId.channelId;
    if (tmp2) {
      let tmp3 = null == conversationId;
      if (!tmp3) {
        tmp3 = _null.conversationId === conversationId;
      }
      if (tmp3) {
        _null = null;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != _null) {
      if (_null.channelId !== tmp) {
        _null = null;
      }
    }
    return false;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let channelId;
    if (_null != null) {
      channelId = _null.channelId;
    }
    if (channelId !== channel.channel.id) {
      return false;
    } else {
      _null = null;
    }
  },
  LOGOUT: function handleLogout() {
    c2 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;
