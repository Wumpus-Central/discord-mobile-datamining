// discord_app/modules/search/SearchRecentMessageStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _true, messages, set;

function handleReset() {
  map = new Map();
}
let map = new Map();
let closure_3 = [];
const Store = get_initializedDefault.Store;
class SearchRecentMessageStore extends Store {
  getRecentMessageAuthorIds(guildId) {
    let value = map.get(guildId);
    if (value == null) {
      value = closure_3;
    }
    return value;
  }
}
const prototype = SearchRecentMessageStore.prototype;
SearchRecentMessageStore.displayName = "SearchRecentMessageStore";
let obj = {
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    let c0;
    let items;
    set = undefined;
    if (null == guildId) {
      return false;
    } else {
      c0 = false;
      let items1 = set.get(guildId);
      if (items1 == null) {
        items1 = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, items1, 0);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items);
      let item = data.forEach((messages) => {
        messages = messages.messages;
        const item = messages.forEach((item) => {
          let tmp;
          [tmp] = item;
          const obj = _true(items[0]);
          const messageRecord = obj.createMessageRecord(tmp);
          const hasItem = set.has(messageRecord.author.id);
          const tmp4 = !hasItem && set.size < 15;
          if (tmp4) {
            set.add(messageRecord.author.id);
            closure_1_1.push(messageRecord.author.id);
            _true = true;
          }
        });
      });
      const tmp10 = c0;
      if (tmp10) {
        const result = set.set(guildId, items);
      }
      return c0;
    }
  },
  SEARCH_RECENT_MESSAGES_CLEAR: handleReset,
  CONNECTION_OPEN: handleReset,
};
const searchRecentMessageStore = new SearchRecentMessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default searchRecentMessageStore;
