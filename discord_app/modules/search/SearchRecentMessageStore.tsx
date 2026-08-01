// === Module 10119: handleReset ===

// Module 10119 (handleReset)
import { Store } from "initialize";

const require = arg1;
function handleReset() {
  const map = new Map();
}
let map = new Map();
let closure_3 = [];
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
const searchRecentMessageStore = new SearchRecentMessageStore(require("dispatcher"), {
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(arg0) {
    let data;
    let guildId;
    ({ guildId, data } = arg0);
    let c0;
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
          let tmp;
          [tmp] = arg0;
          const messageRecord = outer1_0(outer1_1[0]).createMessageRecord(tmp);
          const hasItem = set.has(messageRecord.author.id);
          let tmp4 = !hasItem;
          if (!hasItem) {
            tmp4 = obj2.size < 15;
          }
          if (tmp4) {
            obj2.add(messageRecord.author.id);
            arr = arr.push(messageRecord.author.id);
            let c0 = true;
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
let result = require("dispatcher").fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default searchRecentMessageStore;