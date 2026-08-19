// discord_app/modules/search/SearchMessageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import MAX_REACTIONS from "../reactions/ReactionUtils.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";

require = fn;
function handleReaction(optimistic) {
  let colors = optimistic;
  ({ messageId, emoji } = optimistic);
  ({ type, userId, channelId } = optimistic);
  let obj = MAX_REACTIONS;
  if (obj.shouldApplyReaction(optimistic)) {
    const id = store.getId();
    basicChannel = basicChannel.getBasicChannel(channelId);
    if (basicChannel != null) {
      let addReaction = basicChannel.type;
    }
    let DM = ChannelTypes.DM;
    const value = map1.get(messageId);
    if (null == value) {
      return false;
    } else {
      const reactionType = colors.reactionType;
      if ("MESSAGE_REACTION_ADD" === type) {
        addReaction = value.addReaction;
        obj = { colors: null, reactionType: null, isDMChannel: null };
        colors = colors.colors;
        obj[0] = colors;
        obj[1] = reactionType;
        obj[2] = addReaction === DM;
        let addReactionResult = addReaction(emoji, tmp8, obj);
      } else {
        addReactionResult = value.removeReaction(emoji, tmp8, reactionType);
      }
      DM = map1;
      const result = map1.set(messageId, addReactionResult);
    }
  } else {
    return false;
  }
}
class SearchState {
  constructor() {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[8] = set;
    return obj;
  }
}
const prototype = SearchState.prototype;
prototype["handleSearchStart"] = function handleSearchStart() {
  this.isFetching = true;
  this.isIndexing = false;
  this.analyticsId = null;
  this.error = null;
};
prototype["handleSearchIndexing"] = function handleSearchIndexing() {
  this.isInitialFetchComplete = true;
  this.isIndexing = true;
  this.isHistoricalIndexing = true;
  this.isFetching = false;
  this.error = null;
};
prototype["handleSearchFailure"] = function handleSearchFailure(arg0) {
  this.isFetching = false;
  this.isIndexing = false;
  this.isInitialFetchComplete = true;
  this.isHistoricalIndexing = false;
  const aPIError = new V6OrEarlierAPIError.APIError(arg0);
  this.error = aPIError;
  this.analyticsId = null;
  this.documentsIndexed = 0;
};
prototype["handleSearchSuccess"] = function handleSearchSuccess(analyticsId, arr) {
  const self = this;
  let items;
  let items1;
  this.analyticsId = analyticsId.analyticsId;
  this.isFetching = false;
  this.isIndexing = false;
  this.isInitialFetchComplete = true;
  this.isHistoricalIndexing = analyticsId.doingHistoricalIndex;
  this.error = null;
  ({ documentsIndexed: this.documentsIndexed, cursor: this.cursor } = analyticsId);
  let messages = this.messages;
  if (messages == null) {
    messages = [];
  }
  items = [...messages];
  items1 = [];
  const item = arr.forEach((item, index) => {
    const messageIds = self.messageIds;
    let hasItem = messageIds.has(item.id);
    if (!hasItem) {
      hasItem = closure_1_4.isBlockedOrIgnoredForMessage(item);
    }
    if (!hasItem) {
      const messageIds2 = self.messageIds;
      messageIds2.add(item.id);
      items.push(item);
      items1.push(item);
    }
  });
  self.messages = items;
  self.totalResults = analyticsId.totalResults;
  return items1;
};
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const Store = initializeDefault.Store;
class SearchMessageStore extends Store {
}
const prototype2 = SearchMessageStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4);
};
prototype2["getMessage"] = function getMessage(arg0) {
  return map1.get(arg0);
};
prototype2["getTotalCount"] = function getTotalCount(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.totalResults;
};
prototype2["getIsInitialFetchComplete"] = function getIsInitialFetchComplete(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.isInitialFetchComplete;
};
prototype2["getIsIndexing"] = function getIsIndexing(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.isIndexing;
};
prototype2["getIsHistoricalIndexing"] = function getIsHistoricalIndexing(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.isHistoricalIndexing;
};
prototype2["getDocumentsIndexed"] = function getDocumentsIndexed(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.documentsIndexed;
};
prototype2["getIsFetching"] = function getIsFetching(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.isFetching;
};
prototype2["getError"] = function getError(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.error;
};
prototype2["getMessages"] = function getMessages(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.messages;
};
prototype2["getCursor"] = function getCursor(searchTabFetchId) {
  let value = map.get(searchTabFetchId);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.cursor;
};
prototype2["getAnalyticsId"] = function getAnalyticsId(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    if (typeof SearchState !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(SearchState.prototype);
    const _Set = Set;
    const set = new Set();
    obj[8] = set;
    value = obj;
  }
  return value.analyticsId;
};
prototype2["hasSearchState"] = function hasSearchState(c23) {
  return map.has(c23);
};
SearchMessageStore.displayName = "SearchMessageStore";
const searchMessageStore = new SearchMessageStore(dispatcherDefault, {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach((item, index) => {
      let value = store.get(item);
      if (value == null) {
        if (typeof ctor !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(ctor.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
      }
      const result = store.set(item, value);
      value.handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach((item, index) => {
      const id = item.id;
      let value = store.get(id);
      if (value == null) {
        if (typeof ctor !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(ctor.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
      }
      let result = store.set(id, value);
      const messages = item.messages;
      item = value.handleSearchSuccess(item, messages.map((item, index) => {
        [tmp] = item;
        return callback(table[5]).createMessageRecord(tmp);
      })).forEach((item, index) => {
        const result = closure_8.set(item.id, item);
        let num = store.get(item.id);
        if (num == null) {
          num = 0;
        }
        const result1 = store.set(item.id, num + 1);
      });
      const handleSearchSuccessResult = value.handleSearchSuccess(item, messages.map((item, index) => {
        [tmp] = item;
        return callback(table[5]).createMessageRecord(tmp);
      }));
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach((item, index) => {
      let value = store.get(item);
      if (value == null) {
        if (typeof ctor !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(ctor.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
      }
      const result = store.set(item, value);
      value.handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    closure_0 = ids;
    ids = ids.ids;
    const item = ids.forEach((item, index) => {
      let value = map.get(item);
      if (value == null) {
        if (typeof SearchState !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const obj = Object.create(SearchState.prototype);
        const _Set = Set;
        const set = new Set();
        obj[8] = set;
        value = obj;
      }
      const result = map.set(item, value);
      value.handleSearchFailure(ids.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    const value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((item, index) => {
        let num = store.get(item);
        if (num == null) {
          num = 0;
        }
        if (num <= 1) {
          set.delete(item);
          store.delete(item);
        } else {
          const result = store.set(item, num - 1);
        }
      });
      map.delete(id.id);
    }
  },
  SEARCH_MESSAGES_CLEAR_ALL: function handleSearchMessagesClearAll() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null == id) {
      return false;
    } else {
      const value = map1.get(id);
      if (null == value) {
        return false;
      } else {
        const result = map1.set(id, createMinimalMessageRecord.updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const id = store.getId();
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.addReactionBatch(messageId.reactions, id));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.set("reactions", []));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.removeReactionsForEmoji(messageId.emoji));
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  }
});
let result = require("obj132").fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default searchMessageStore;