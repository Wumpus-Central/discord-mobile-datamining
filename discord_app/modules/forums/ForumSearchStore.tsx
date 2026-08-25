// === Module 7371: initialize ===

// Module 7371 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "ensureGuildLoaded" /* 1391 */;

let closure_1 = {};
const Store = initializeDefault.Store;
class ForumSearchStore extends Store {
}
const prototype = ForumSearchStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["getSearchQuery"] = function getSearchQuery(closure_0) {
  let query;
  if (dependencyMap[closure_0] != null) {
    query = tmp.query;
  }
  return query;
};
prototype["getSearchLoading"] = function getSearchLoading(closure_0) {
  let flag;
  if (dependencyMap[closure_0] != null) {
    flag = tmp.loading;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getSearchResults"] = function getSearchResults(arg0) {
  let results;
  if (dependencyMap[arg0] != null) {
    results = tmp.results;
  }
  return results;
};
prototype["getHasSearchResults"] = function getHasSearchResults(arg0) {
  let results;
  if (dependencyMap[arg0] != null) {
    results = tmp.results;
  }
  let tmp3 = null != results;
  if (tmp3) {
    tmp3 = tmp.results.length > 0;
  }
  return tmp3;
};
ForumSearchStore.displayName = "ForumSearchStore";
const forumSearchStore = new ForumSearchStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    const parent_id = channel.parent_id;
    if (null == parent_id) {
      return false;
    } else if (null == dependencyMap[parent_id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp2);
      const results = tmp2.results;
      let found;
      if (results != null) {
        found = results.filter((arg0) => channel.id !== arg0);
      }
      obj.results = found;
      dependencyMap[parent_id] = obj;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    delete tmp3[tmp2];
    return tmp;
  },
  FORUM_SEARCH_QUERY_UPDATED: function handleForumSearchQueryUpdated(channelId) {
    channelId = channelId.channelId;
    const channel = store.getChannel(channelId);
    if (!tmp) {
      let obj = dependencyMap[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      dependencyMap[channelId] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj.query = channelId.query;
      dependencyMap[channelId] = obj;
    } else {
      return false;
    }
    tmp = null == channel || !channel.isForumLikeChannel();
  },
  FORUM_SEARCH_START: function handleForumSearchStart(channelId) {
    channelId = channelId.channelId;
    const channel = store.getChannel(channelId);
    if (!tmp) {
      let obj = dependencyMap[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      dependencyMap[channelId] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj.loading = true;
      dependencyMap[channelId] = obj;
    } else {
      return false;
    }
    tmp = null == channel || !channel.isForumLikeChannel();
  },
  FORUM_SEARCH_SUCCESS: function handleForumSearchSuccess(channelId) {
    channelId = channelId.channelId;
    const channel = store.getChannel(channelId);
    if (!tmp) {
      let obj = dependencyMap[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      dependencyMap[channelId] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj.loading = false;
      obj.results = channelId.threadIds;
      dependencyMap[channelId] = obj;
    } else {
      return false;
    }
    tmp = null == channel || !channel.isForumLikeChannel();
  },
  FORUM_SEARCH_FAILURE: function handleForumSearchFailure(channelId) {
    channelId = channelId.channelId;
    const channel = store.getChannel(channelId);
    if (!tmp) {
      let obj = dependencyMap[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      dependencyMap[channelId] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj.loading = false;
      obj.results = [];
      dependencyMap[channelId] = obj;
    } else {
      return false;
    }
    tmp = null == channel || !channel.isForumLikeChannel();
  },
  FORUM_SEARCH_CLEAR: function handleForumSearchClear(channelId) {
    const channel = store.getChannel(channelId.channelId);
    const tmp4 = !(null == channel || !channel.isForumLikeChannel());
    if (tmp4) {
      delete tmp[tmp2];
    }
    return tmp4;
  }
});
const result = require("set").fileFinishedImporting("modules/forums/ForumSearchStore.tsx");

export default forumSearchStore;