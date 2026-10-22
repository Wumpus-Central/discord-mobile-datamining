// === Module 9707: SelectedConversationStore ===

// Module 9707 (SelectedConversationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7681 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7685 */;

let c2 = null;
let closure_3 = 0;
let closure_4 = 0;
const Store = initializeDefault.Store;
class SelectedConversationStore extends Store {
}
const prototype = SelectedConversationStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [ChannelConversationsStore, ConversationPreviewStore];
  this.syncWith(items, () => null != _null);
};
prototype["getSelectedConversationId"] = function getSelectedConversationId(arg0) {
  let channelId;
  if (_null != null) {
    channelId = _null.channelId;
  }
  let conversationId = null;
  if (channelId === arg0) {
    conversationId = _null.conversationId;
  }
  return conversationId;
};
prototype["getConversation"] = function getConversation(channelId) {
  channelId = undefined;
  if (_null != null) {
    channelId = _null.channelId;
  }
  if (channelId !== channelId) {
    return null;
  } else {
    ({ cacheType, conversationId } = _null);
    if ("channel" === cacheType) {
      const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
      let conversation;
      if (conversationMetadata != null) {
        conversation = conversationMetadata.conversation;
      }
      if (conversation == null) {
        conversation = null;
      }
      return conversation;
    } else if ("preview" === cacheType) {
      return ConversationPreviewStore.getConversation(conversationId);
    } else {
      return null;
    }
  }
};
prototype["getHydratedMessages"] = function getHydratedMessages(arg0) {
  let channelId;
  if (_null != null) {
    channelId = _null.channelId;
  }
  if (channelId !== arg0) {
    return null;
  } else {
    ({ cacheType, conversationId } = _null);
    if ("channel" === cacheType) {
      return ChannelConversationsStore.getHydratedMessages(arg0, conversationId);
    } else if ("preview" === cacheType) {
      return ConversationPreviewStore.getHydratedMessages(conversationId);
    } else {
      return null;
    }
  }
};
prototype["isFullyHydrated"] = function isFullyHydrated(arg0) {
  let channelId;
  if (_null != null) {
    channelId = _null.channelId;
  }
  if (channelId !== arg0) {
    return false;
  } else {
    ({ cacheType, conversationId } = _null);
    if ("channel" === cacheType) {
      return ChannelConversationsStore.isFullyHydrated(arg0, conversationId);
    } else if ("preview" === cacheType) {
      return ConversationPreviewStore.isFullyHydrated(conversationId);
    } else {
      return false;
    }
  }
};
prototype["isConversationFetchPending"] = function isConversationFetchPending(arg0, arg1) {
  let channelId;
  if (_null != null) {
    channelId = _null.channelId;
  }
  if (channelId !== arg0) {
    return false;
  } else {
    ({ cacheType, conversationId } = _null);
    if ("channel" === cacheType) {
      return ChannelConversationsStore.isConversationFetchPending(conversationId, arg1);
    } else if ("preview" === cacheType) {
      return ConversationPreviewStore.isConversationFetchPending(conversationId, arg1);
    } else {
      return false;
    }
  }
};
prototype["consumeFocusRequest"] = function consumeFocusRequest() {
  let flag = closure_3 !== closure_4;
  if (flag) {
    closure_4 = closure_3;
    flag = true;
  }
  return flag;
};
SelectedConversationStore.displayName = "SelectedConversationStore";
const selectedConversationStore = new SelectedConversationStore(DispatcherDefault, {
  SET_SELECTED_CONVERSATION: function handleSetSelectedConversation(channelId) {
    c2 = { channelId: channelId.channelId, conversationId: channelId.conversationId, cacheType: channelId.cacheType };
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
  CONVERSATION_FOCUS_REQUEST: function handleConversationFocusRequest() {
    closure_3 = closure_3 + 1;
  },
  LOGOUT: function handleLogout() {
    c2 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;