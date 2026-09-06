// === Module 12343: SearchRecentMessageStore ===

// Module 12343 (SearchRecentMessageStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const require = fn;
function handleReset() {
  map = new Map();
}
let map = new Map();
let closure_3 = [];
const Store = initializeDefault.Store;
class SearchRecentMessageStore extends Store {
}
SearchRecentMessageStore.prototype["getRecentMessageAuthorIds"] = function getRecentMessageAuthorIds(guildId) {
  value = map.get(guildId);
  if (value == null) {
    value = closure_3;
  }
  return value;
};
SearchRecentMessageStore.displayName = "SearchRecentMessageStore";
const searchRecentMessageStore = new SearchRecentMessageStore(DispatcherDefault, {
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(arg0) {
    ({ guildId, data } = arg0);
    c0 = undefined;
    let items;
    let set;
    if (null == guildId) {
      return false;
    } else {
      c0 = false;
      items = set.get(guildId);
      if (items == null) {
        items = [];
      }
      items = [];
      HermesBuiltin.arraySpread(items, 0);
      const _Set = Set;
      set = new Set(items);
      let item = data.forEach((messages) => {
        messages = messages.messages;
        const item = messages.forEach((item) => {
          [tmp] = item;
          const messageRecord = _true(items[0]).createMessageRecord(tmp);
          const hasItem = set.has(messageRecord.author.id);
          let tmp4 = !hasItem;
          if (!hasItem) {
            tmp4 = set.size < 15;
          }
          if (tmp4) {
            set.add(messageRecord.author.id);
            closure_1_1.push(messageRecord.author.id);
            _true = true;
          }
          const obj = _true(items[0]);
        });
      });
      if (c0) {
        const result = set.set(guildId, items);
      }
      return c0;
    }
  },
  SEARCH_RECENT_MESSAGES_CLEAR: handleReset,
  CONNECTION_OPEN: handleReset
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default searchRecentMessageStore;