// === Module 13143: useSavedMessagesForPage ===

// Module 13143 (useSavedMessagesForPage)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages" /* 13144 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11296 */;

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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ALL = arg0;
  const cResult = ALL(576).c(9);
  if (undefined === arg0) {
    ALL = tmp(7506).SavedMessageSortTypes.ALL;
  }
  if (cResult[0] !== ALL) {
    const fn = function u() {
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
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
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
              const map = new Map(closure_2_6(lastChanged).map(() => { ... }));
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
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    let items = [ALL];
    cResult[3] = ALL;
    cResult[4] = M;
    cResult[5] = items;
    let tmp11 = items;
  } else {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
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
              const map = new Map(closure_2_6(lastChanged).map(() => { ... }));
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
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(M, tmp11);
  first(13144)();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
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
              const map = new Map(closure_2_6(lastChanged).map(() => { ... }));
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
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
    const items1 = [SavedMessagesStore];
    cResult[6] = items1;
    const tmp14 = items1;
  } else {
    class M {
      constructor() {
        closure_0 = closure_1_5.getLastChanged();
        handleChange = function handleChange() {
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
              const map = new Map(closure_2_6(lastChanged).map(() => { ... }));
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
        };
        addChangeListenerResult = closure_1_5.addChangeListener(handleChange);
        return () => {
          SavedMessagesStore.removeChangeListener(handleChange);
        };
      }
    }
  }
  if (cResult[7] !== first) {
    class C {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[7]).isNotNullish);
      }
    }
    cResult[7] = first;
    cResult[8] = C;
  } else {
    class C {
      constructor() {
        mapped = closure_1.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
        return mapped.filter(closure_0(closure_2[7]).isNotNullish);
      }
    }
  }
  const obj = ALL(576);
  return ALL(504).useStateFromStoresArray(tmp14, C);
}) : (() => {
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(7506).SavedMessageSortTypes.ALL;
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
  const items1 = [SavedMessagesStore];
  return ALL(504).useStateFromStoresArray(items1, () => {
    const mapped = _undefined.map((channelId) => savedMessage.getSavedMessage(channelId.channelId, channelId.messageId));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
});