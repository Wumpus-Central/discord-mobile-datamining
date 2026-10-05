// discord_app/modules/forums/ForumSearchStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_1;

const Store = get_initializedDefault.Store;
class ForumSearchStore extends Store {
  initialize() {
    this.waitFor(ChannelStore);
  }
  getSearchQuery(channelId) {
    let query;
    if (closure_1[channelId] != null) {
      query = tmp.query;
    }
    return query;
  }
  getSearchLoading(channelId) {
    let flag;
    if (closure_1[channelId] != null) {
      flag = tmp.loading;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getSearchResults(arg0) {
    let results;
    if (closure_1[arg0] != null) {
      results = tmp.results;
    }
    return results;
  }
  getHasSearchResults(arg0) {
    let results;
    if (closure_1[arg0] != null) {
      results = tmp.results;
    }
    return null != results && tmp.results.length > 0;
  }
}
const prototype = ForumSearchStore.prototype;
ForumSearchStore.displayName = "ForumSearchStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_1 = {};
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    let found;
    channel = channel.channel;
    const parent_id = channel.parent_id;
    if (null == parent_id) {
      return false;
    } else if (null == closure_1[parent_id]) {
      return false;
    } else {
      const obj = { results: found };
      const merged = Object.assign(tmp2);
      const results = tmp2.results;
      found = undefined;
      if (results != null) {
        found = results.filter((item) => channel.id !== item);
      }
      closure_1[parent_id] = obj;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    delete closure_1[arg0.channel.id];
    return tmp;
  },
  FORUM_SEARCH_QUERY_UPDATED: function handleForumSearchQueryUpdated(channelId) {
    channelId = channelId.channelId;
    const query = channelId.query;
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null == channel || !channel.isForumLikeChannel();
    if (!tmp) {
      let obj = closure_1[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      closure_1[channelId] = obj;
      const obj2 = { query };
      const merged = Object.assign(obj);
      closure_1[channelId] = obj2;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_START: function handleForumSearchStart(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null == channel || !channel.isForumLikeChannel();
    if (!tmp) {
      let obj = closure_1[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      closure_1[channelId] = obj;
      const obj2 = { loading: true };
      const merged = Object.assign(obj);
      closure_1[channelId] = obj2;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_SUCCESS: function handleForumSearchSuccess(channelId) {
    channelId = channelId.channelId;
    const threadIds = channelId.threadIds;
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null == channel || !channel.isForumLikeChannel();
    if (!tmp) {
      let obj = closure_1[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      closure_1[channelId] = obj;
      const obj2 = { loading: false, results: threadIds };
      const merged = Object.assign(obj);
      closure_1[channelId] = obj2;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_FAILURE: function handleForumSearchFailure(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null == channel || !channel.isForumLikeChannel();
    if (!tmp) {
      let obj = closure_1[channelId];
      if (obj == null) {
        obj = { query: null, loading: false, results: null };
      }
      closure_1[channelId] = obj;
      const obj2 = { loading: false, results: [] };
      const merged = Object.assign(obj);
      closure_1[channelId] = obj2;
    } else {
      return false;
    }
  },
  FORUM_SEARCH_CLEAR: function handleForumSearchClear(channelId) {
    channelId = channelId.channelId;
    const channel = ChannelStore.getChannel(channelId);
    const tmp2 = !(null == channel || !channel.isForumLikeChannel());
    if (tmp2) {
      delete closure_1[channelId];
    }
    return tmp2;
  },
};
const forumSearchStore = new ForumSearchStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/forums/ForumSearchStore.tsx");

export default forumSearchStore;
