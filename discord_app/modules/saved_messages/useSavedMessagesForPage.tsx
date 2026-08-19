// discord_app/modules/saved_messages/useSavedMessagesForPage.tsx
import SavedMessageSortTypes from "SavedMessagesTypes.tsx";
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";
import getTimeSafe from "SavedMessagesStore.tsx";

require = fn;
function getSavedMessagesForType(arg0) {
  if (SavedMessageSortTypes.SavedMessageSortTypes.BOOKMARK === arg0) {
    return store.getMessageBookmarks();
  } else if (SavedMessageSortTypes.SavedMessageSortTypes.REMINDER === arg0) {
    return store.getMessageReminders();
  } else {
    return store.getSavedMessages();
  }
}
const result = require("obj132").fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(8489).SavedMessageSortTypes.ALL;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  let callback;
  [c1, c2] = callback(React.useState(() => {
    if (ALL(_undefined2[3]).SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = closure_1_5.getMessageBookmarks();
    } else if (ALL(_undefined2[3]).SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = closure_1_5.getMessageReminders();
    } else {
      messageBookmarks = closure_1_5.getSavedMessages();
    }
    return messageBookmarks.map((item, index) => item.saveData);
  }), 2);
  callback = React.useRef(store.getIsStale());
  let items = [ALL];
  const effect = React.useEffect(() => {
    function handleChange() {
      const lastChanged = closure_2_5.getLastChanged();
      if (lastChanged !== lastChanged) {
        if (closure_1_3.current) {
          if (!closure_2_5.getIsStale()) {
            tmp9.current = false;
            if (ALL(table[3]).SavedMessageSortTypes.BOOKMARK === closure_0) {
              let messageBookmarks = closure_2_5.getMessageBookmarks();
            } else if (ALL(table[3]).SavedMessageSortTypes.REMINDER === closure_0) {
              messageBookmarks = closure_2_5.getMessageReminders();
            } else {
              messageBookmarks = closure_2_5.getSavedMessages();
            }
            closure_1_2(messageBookmarks.map((item, index) => item.saveData));
          }
        }
        closure_1_2((arg0) => {
          let items = [...arg0];
          const map = new Map(closure_1_6(lastChanged).map((item, index) => {
            const items = [item.saveData.messageId, item];
            return items;
          }));
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp2 = nextResult;
            if (map.has(nextResult.messageId)) {
              let deleteResult = map.delete(tmp2.messageId);
            } else {
              let spliceResult = items.splice(items.indexOf(tmp2), 1);
            }
            continue;
          }
          const values = map.values();
          for (const item10046 of values) {
            let arr = items.push(item10046.saveData);
            continue;
          }
          return items;
        });
      }
    }
    let lastChanged = closure_1_5.getLastChanged();
    closure_1_5.addChangeListener(handleChange);
    return () => {
      closure_2_5.removeChangeListener(handleChange);
    };
  }, items);
  useRefreshSavedMessagesDefault();
  let tmp3 = callback(React.useState(() => {
    if (ALL(_undefined2[3]).SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = closure_1_5.getMessageBookmarks();
    } else if (ALL(_undefined2[3]).SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = closure_1_5.getMessageReminders();
    } else {
      messageBookmarks = closure_1_5.getSavedMessages();
    }
    return messageBookmarks.map((item, index) => item.saveData);
  }), 2);
  const items1 = [store];
  return ALL(589).useStateFromStoresArray(items1, () => {
    const mapped = _undefined.map((item, index) => savedMessage.getSavedMessage(item.channelId, item.messageId));
    return mapped.filter(ALL(_undefined2[6]).isNotNullish);
  });
};