// === Module 12600: useSavedMessagesForPage ===

// Module 12600 (useSavedMessagesForPage)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages" /* 12601 */;
import useBookmarksPaginationDefault from "useBookmarksPagination" /* 12603 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;

require = fn;
function getSavedMessagesForType(arg0) {
  if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === arg0) {
    return SavedMessagesStore.getMessageBookmarks();
  } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === arg0) {
    return SavedMessagesStore.getMessageReminders();
  } else {
    return SavedMessagesStore.getSavedMessages();
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSavedMessagesForPage(arg0) {
  let ALL = arg0;
  const cResult = ALL(576).c(12);
  if (undefined === arg0) {
    ALL = tmp(9652).SavedMessageSortTypes.ALL;
  }
  if (cResult[0] !== ALL) {
    const fn = function v() {
      if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
        let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
      } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
        messageBookmarks = SavedMessagesStore.getMessageReminders();
      } else {
        messageBookmarks = SavedMessagesStore.getSavedMessages();
      }
      return messageBookmarks.map((saveData) => saveData.saveData);
    };
    cResult[0] = ALL;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  [first, dependencyMap] = noop.useState(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const isStale = SavedMessagesStore.getIsStale();
    cResult[2] = isStale;
    let tmp7 = isStale;
  } else {
    tmp7 = cResult[2];
  }
  _slicedToArray = noop.useRef(tmp7);
  if (cResult[3] !== ALL) {
    const fn2 = function p() {
      let lastChanged = SavedMessagesStore.getLastChanged();
      function handleChange() {
        lastChanged = SavedMessagesStore.getLastChanged();
        if (lastChanged !== lastChanged) {
          if (ref.current) {
            if (!SavedMessagesStore.getIsStale()) {
              tmp9.current = false;
              if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
              } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                messageBookmarks = SavedMessagesStore.getMessageReminders();
              } else {
                messageBookmarks = SavedMessagesStore.getSavedMessages();
              }
              closure_2(messageBookmarks.map((saveData) => saveData.saveData));
            }
          }
          closure_2((arg0) => {
            let items = [...arg0];
            const map = new Map(closure_2_6(lastChanged).map((saveData) => {
              const items = [saveData.saveData.messageId, saveData];
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
      SavedMessagesStore.addChangeListener(handleChange);
      return () => {
        SavedMessagesStore.removeChangeListener(handleChange);
      };
    };
    let items = [ALL];
    cResult[3] = ALL;
    cResult[4] = fn2;
    cResult[5] = items;
    let tmp11 = items;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  first(12601)();
  const obj = ALL(576);
  const tmp14Result = first(12603)(ALL !== ALL(9652).SavedMessageSortTypes.REMINDER);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SavedMessagesStore];
    cResult[6] = items1;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== first) {
    class L {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[8]).isNotNullish);
      }
    }
    cResult[7] = first;
    cResult[8] = L;
  } else {
    class L {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[8]).isNotNullish);
      }
    }
  }
  const tmp14 = first(12603);
  const stateFromStoresArray = ALL(504).useStateFromStoresArray(tmp16, L);
  if (cResult[9] === tmp14Result) {
    class L {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[8]).isNotNullish);
      }
    }
    return obj3;
  }
  obj3 = { savedMessages: stateFromStoresArray };
  const merged = Object.assign(tmp14Result);
  cResult[9] = tmp14Result;
  cResult[10] = stateFromStoresArray;
  cResult[11] = obj3;
  const tmpResult = ALL(504);
}) : (function useSavedMessagesForPage() {
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(9652).SavedMessageSortTypes.ALL;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  [c1, c2] = noop.useState(() => {
    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = SavedMessagesStore.getMessageReminders();
    } else {
      messageBookmarks = SavedMessagesStore.getSavedMessages();
    }
    return messageBookmarks.map((saveData) => saveData.saveData);
  });
  _slicedToArray = noop.useRef(SavedMessagesStore.getIsStale());
  let items = [ALL];
  const effect = noop.useEffect(() => {
    function handleChange() {
      lastChanged = SavedMessagesStore.getLastChanged();
      if (lastChanged !== lastChanged) {
        if (ref.current) {
          if (!SavedMessagesStore.getIsStale()) {
            tmp9.current = false;
            if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
              let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
            } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
              messageBookmarks = SavedMessagesStore.getMessageReminders();
            } else {
              messageBookmarks = SavedMessagesStore.getSavedMessages();
            }
            c2(messageBookmarks.map((saveData) => saveData.saveData));
          }
        }
        c2((arg0) => {
          let items = [...arg0];
          const map = new Map(closure_2_6(lastChanged).map((saveData) => {
            const items = [saveData.saveData.messageId, saveData];
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
    let lastChanged = SavedMessagesStore.getLastChanged();
    SavedMessagesStore.addChangeListener(handleChange);
    return () => {
      SavedMessagesStore.removeChangeListener(handleChange);
    };
  }, items);
  useRefreshSavedMessagesDefault();
  let tmp3 = _slicedToArray(noop.useState(() => {
    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
      let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
      messageBookmarks = SavedMessagesStore.getMessageReminders();
    } else {
      messageBookmarks = SavedMessagesStore.getSavedMessages();
    }
    return messageBookmarks.map((saveData) => saveData.saveData);
  }), 2);
  const obj = { savedMessages: null };
  const tmp6Result = useBookmarksPaginationDefault(ALL !== ALL(9652).SavedMessageSortTypes.REMINDER);
  const items1 = [SavedMessagesStore];
  obj.savedMessages = ALL(504).useStateFromStoresArray(items1, () => {
    const mapped = _undefined.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const merged = Object.assign(tmp6Result);
  return obj;
});