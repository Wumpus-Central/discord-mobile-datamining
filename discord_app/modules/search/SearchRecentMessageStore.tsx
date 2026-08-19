// discord_app/modules/search/SearchRecentMessageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

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
      let item = data.forEach((item, index) => {
        const messages = item.messages;
        item = messages.forEach((item, index) => {
          [tmp] = item;
          const messageRecord = closure_1_0(items[0]).createMessageRecord(tmp);
          const hasItem = set.has(messageRecord.author.id);
          let tmp4 = !hasItem;
          if (!hasItem) {
            tmp4 = set.size < 15;
          }
          if (tmp4) {
            set.add(messageRecord.author.id);
            arr = arr.push(messageRecord.author.id);
            c0 = true;
          }
          const obj = closure_1_0(items[0]);
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
let result = require("obj132").fileFinishedImporting("modules/search/SearchRecentMessageStore.tsx");

export default searchRecentMessageStore;