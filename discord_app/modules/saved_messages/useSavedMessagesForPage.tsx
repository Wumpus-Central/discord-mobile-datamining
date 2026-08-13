// discord_app/modules/saved_messages/useSavedMessagesForPage.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getTimeSafe from "getTimeSafe";
import { SavedMessageSortTypes } from "SavedMessagesTypes.tsx";
import { useRefreshSavedMessages } from "useRefreshSavedMessages.tsx";

const require = arg1;
function getSavedMessagesForType(arg0) {
  if (SavedMessageSortTypes.SavedMessageSortTypes.BOOKMARK === arg0) {
    return store.getMessageBookmarks();
  } else if (tmp(8428).SavedMessageSortTypes.REMINDER === arg0) {
    return store.getMessageReminders();
  } else {
    return store.getSavedMessages();
  }
  tmp = require;
}
const result = require("getTimeSafe").fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  let c1;
  let c2;
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(8428).SavedMessageSortTypes.ALL;
  }
  let importDefault;
  let dependencyMap;
  let callback;
  [c1, c2] = callback(React.useState(() => {
    if (ALL(_undefined2[3]).SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = outer1_5.getMessageBookmarks();
    } else if (ALL(_undefined2[3]).SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = outer1_5.getMessageReminders();
    } else {
      messageBookmarks = outer1_5.getSavedMessages();
    }
    return messageBookmarks.map((saveData) => saveData.saveData);
  }), 2);
  callback = React.useRef(store.getIsStale());
  let items = [ALL];
  const effect = React.useEffect(() => {
    function handleChange() {
      const lastChanged = outer2_5.getLastChanged();
      if (lastChanged !== lastChanged) {
        if (outer1_3.current) {
          if (!obj.getIsStale()) {
            tmp9.current = false;
            if (ALL(table[3]).SavedMessageSortTypes.BOOKMARK === closure_0) {
              let messageBookmarks = obj.getMessageBookmarks();
            } else if (ALL(table[3]).SavedMessageSortTypes.REMINDER === closure_0) {
              messageBookmarks = obj.getMessageReminders();
            } else {
              messageBookmarks = obj.getSavedMessages();
            }
            outer1_2(messageBookmarks.map((saveData) => saveData.saveData));
          }
        }
        outer1_2((arg0) => {
          let items = [...arg0];
          const map = new Map(outer1_6(lastChanged).map((saveData) => {
            const items = [saveData.saveData.messageId, saveData];
            return items;
          }));
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp2 = nextResult;
            if (map.has(nextResult.messageId)) {
              let tmp5 = nextResult;
              let deleteResult = map.delete(tmp2.messageId);
            } else {
              let tmp3 = nextResult;
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
    let lastChanged = outer1_5.getLastChanged();
    outer1_5.addChangeListener(handleChange);
    return () => {
      outer2_5.removeChangeListener(handleChange);
    };
  }, items);
  useRefreshSavedMessages();
  let tmp3 = callback(React.useState(() => {
    if (ALL(_undefined2[3]).SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = outer1_5.getMessageBookmarks();
    } else if (ALL(_undefined2[3]).SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = outer1_5.getMessageReminders();
    } else {
      messageBookmarks = outer1_5.getSavedMessages();
    }
    return messageBookmarks.map((saveData) => saveData.saveData);
  }), 2);
  const items1 = [store];
  return ALL(589).useStateFromStoresArray(items1, () => {
    const mapped = _undefined.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(ALL(_undefined2[6]).isNotNullish);
  });
};