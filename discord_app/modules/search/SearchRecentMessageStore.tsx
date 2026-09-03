// === Module 12139: handleReset ===

// Module 12139 (handleReset)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

const require = arg1;
function handleReset() {
  map = new Map();
}
let map = new Map();
let closure_3 = [];
const Store = initializeDefault.Store;
class SearchRecentMessageStore extends Store {
}
SearchRecentMessageStore.prototype["getRecentMessageAuthorIds"] = function getRecentMessageAuthorIds(guildId) {
  let value = map.get(guildId);
  if (value == null) {
    value = closure_3;
  }
  return value;
};
SearchRecentMessageStore.displayName = "SearchRecentMessageStore";
const searchRecentMessageStore = new SearchRecentMessageStore(dispatcherDefault, {
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
        const item = messages.forEach((arg0) => {
          [tmp] = arg0;
          const messageRecord = closure_1_0(closure_1_1[0]).createMessageRecord(tmp);
          const hasItem = set.has(messageRecord.author.id);
          let tmp4 = !hasItem;
          if (!hasItem) {
            tmp4 = obj2.size < 15;
          }
          if (tmp4) {
            obj2.add(messageRecord.author.id);
            arr = arr.push(messageRecord.author.id);
            c0 = true;
          }
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
let result = require("set").fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default searchRecentMessageStore;