// === Module 8999: SelectedConversationStore ===

// Module 8999 (SelectedConversationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 8260 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 8263 */;

let c2 = null;
let closure_3 = 0;
let closure_4 = 0;
let closure_5 = null;
const Store = initializeDefault.Store;
class SelectedConversationStore extends Store {
}
const prototype = SelectedConversationStore.prototype;
prototype["initialize"] = function initialize() {
  items = [ChannelConversationsStore, ConversationPreviewStore];
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
prototype["getConversation"] = function getConversation(arg0) {
  let channelId;
  if (_null != null) {
    channelId = _null.channelId;
  }
  if (channelId !== arg0) {
    return null;
  } else {
    ({ cacheType, conversationId } = _null);
    if ("channel" === cacheType) {
      return ChannelConversationsStore.getConversation(arg0, conversationId);
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
prototype["getFocusRequest"] = function getFocusRequest() {
  let tmp = null;
  if (closure_3 !== closure_4) {
    tmp = closure_5;
  }
  return tmp;
};
prototype["consumeFocusRequest"] = function consumeFocusRequest() {
  closure_4 = closure_3;
  return this.getFocusRequest();
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
        closure_4 = closure_3;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    if (null != _null) {
      if (_null.channelId !== tmp) {
        _null = null;
        closure_4 = closure_3;
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
      closure_4 = closure_3;
    }
  },
  CONVERSATION_FOCUS_REQUEST: function handleConversationFocusRequest(messageId) {
    messageId = messageId.messageId;
    closure_3 = closure_3 + 1;
    if (messageId == null) {
      messageId = null;
    }
    closure_5 = { messageId };
  },
  LOGOUT: function handleLogout() {
    c2 = null;
    closure_4 = closure_3;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/SelectedConversationStore.tsx");

export default selectedConversationStore;