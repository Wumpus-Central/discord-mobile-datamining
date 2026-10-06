// discord_app/modules/saved_messages/useSavedMessagesForPage.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import SavedMessagesTypes from "SavedMessagesTypes.tsx";
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages.tsx";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let addChangeListenerResult, closure_0, dependencyMap, importDefault, map;

const f114234 = (saveData) => saveData.saveData;
function getSavedMessagesForType(arg0) {
  if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === arg0) {
    return SavedMessagesStore.getMessageBookmarks();
  } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === arg0) {
    return SavedMessagesStore.getMessageReminders();
  } else {
    return SavedMessagesStore.getSavedMessages();
  }
}
let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_2;
      let closure_3;
      let first;
      let tmp11;
      let tmp14;
      let tmp4;
      let tmp7;
      let ALL = arg0;
      let tmp2 = dependencyMap;
      const obj = ALL(576);
      const cResult = obj.c(9);
      if (undefined === arg0) {
        ALL = tmp(7506).SavedMessageSortTypes.ALL;
      }
      if (cResult[0] !== ALL) {
        const fn = function u() {
          let messageBookmarks;
          if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
            messageBookmarks = SavedMessagesStore.getMessageBookmarks();
          } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
            messageBookmarks = SavedMessagesStore.getMessageReminders();
          } else {
            messageBookmarks = SavedMessagesStore.getSavedMessages();
          }
          return messageBookmarks.map(f114234);
        };
        cResult[0] = ALL;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      [first, dependencyMap] = react.useState(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const isStale = SavedMessagesStore.getIsStale();
        cResult[2] = isStale;
        tmp7 = isStale;
      } else {
        tmp7 = cResult[2];
      }
      _slicedToArray = react.useRef(tmp7);
      if (cResult[3] !== ALL) {
        class M {
          constructor() {
            closure_0 = closure_1_5.getLastChanged();
            handleChange = function handleChange() {
              lastChanged = SavedMessagesStore.getLastChanged();
              if (lastChanged !== lastChanged) {
                if (ref.current) {
                  if (!SavedMessagesStore.getIsStale()) {
                    let messageBookmarks;
                    tmp9.current = false;
                    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageBookmarks();
                    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageReminders();
                    } else {
                      messageBookmarks = SavedMessagesStore.getSavedMessages();
                    }
                    closure_2(messageBookmarks.map(f114234));
                  }
                }
                closure_2(() => {
                  /* body not rendered: F153013 */
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
        tmp11 = items;
      } else {
        class M {
          constructor() {
            closure_0 = closure_1_5.getLastChanged();
            handleChange = function handleChange() {
              lastChanged = SavedMessagesStore.getLastChanged();
              if (lastChanged !== lastChanged) {
                if (ref.current) {
                  if (!SavedMessagesStore.getIsStale()) {
                    let messageBookmarks;
                    tmp9.current = false;
                    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageBookmarks();
                    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageReminders();
                    } else {
                      messageBookmarks = SavedMessagesStore.getSavedMessages();
                    }
                    closure_2(messageBookmarks.map(f114234));
                  }
                }
                closure_2(() => {
                  /* body not rendered: F153013 */
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
      const effect = react.useEffect(M, tmp11);
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
                    let messageBookmarks;
                    tmp9.current = false;
                    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageBookmarks();
                    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageReminders();
                    } else {
                      messageBookmarks = SavedMessagesStore.getSavedMessages();
                    }
                    closure_2(messageBookmarks.map(f114234));
                  }
                }
                closure_2(() => {
                  /* body not rendered: F153013 */
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
        tmp14 = items1;
      } else {
        class M {
          constructor() {
            closure_0 = closure_1_5.getLastChanged();
            handleChange = function handleChange() {
              lastChanged = SavedMessagesStore.getLastChanged();
              if (lastChanged !== lastChanged) {
                if (ref.current) {
                  if (!SavedMessagesStore.getIsStale()) {
                    let messageBookmarks;
                    tmp9.current = false;
                    if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageBookmarks();
                    } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                      messageBookmarks = SavedMessagesStore.getMessageReminders();
                    } else {
                      messageBookmarks = SavedMessagesStore.getSavedMessages();
                    }
                    closure_2(messageBookmarks.map(f114234));
                  }
                }
                closure_2(() => {
                  /* body not rendered: F153013 */
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
            mapped = closure_1.map((channelId) =>
              savedMessage.getSavedMessage(channelId.channelId, channelId.messageId),
            );
            return mapped.filter(closure_0(closure_2[7]).isNotNullish);
          }
        }
        cResult[7] = first;
        cResult[8] = C;
      } else {
        class C {
          constructor() {
            mapped = closure_1.map((channelId) =>
              savedMessage.getSavedMessage(channelId.channelId, channelId.messageId),
            );
            return mapped.filter(closure_0(closure_2[7]).isNotNullish);
          }
        }
      }
      const tmpResult = ALL(504);
      return tmpResult.useStateFromStoresArray(tmp14, C);
    }
  : () => {
      let _undefined;
      let c1;
      let c2;
      let closure_3;
      let ALL = arg0;
      if (arg0 === undefined) {
        let tmp2 = dependencyMap;
        ALL = ALL(7506).SavedMessageSortTypes.ALL;
      }
      importDefault = undefined;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      let tmp3 = _slicedToArray(
        react.useState(() => {
          let messageBookmarks;
          if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
            messageBookmarks = SavedMessagesStore.getMessageBookmarks();
          } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
            messageBookmarks = SavedMessagesStore.getMessageReminders();
          } else {
            messageBookmarks = SavedMessagesStore.getSavedMessages();
          }
          return messageBookmarks.map(f114234);
        }),
        2,
      );
      [c1, c2] = tmp3;
      _slicedToArray = react.useRef(SavedMessagesStore.getIsStale());
      let items = [ALL];
      const effect = react.useEffect(() => {
        let ref;
        function handleChange() {
          lastChanged = SavedMessagesStore.getLastChanged();
          if (lastChanged !== lastChanged) {
            if (ref.current) {
              if (!SavedMessagesStore.getIsStale()) {
                let messageBookmarks;
                tmp9.current = false;
                if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
                  messageBookmarks = SavedMessagesStore.getMessageBookmarks();
                } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
                  messageBookmarks = SavedMessagesStore.getMessageReminders();
                } else {
                  messageBookmarks = SavedMessagesStore.getSavedMessages();
                }
                c2(messageBookmarks.map(f114234));
              }
            }
            c2((arg0) => {
              let items = [...arg0];
              const arr2 = closure_2_6(lastChanged);
              map = new Map(
                arr2.map((saveData) => {
                  const items = [saveData.saveData.messageId, saveData];
                  return items;
                }),
              );
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
      let tmp5 = useRefreshSavedMessagesDefault();
      const items1 = [SavedMessagesStore];
      const obj = ALL(504);
      return obj.useStateFromStoresArray(items1, () => {
        let savedMessage;
        const mapped = _undefined.map((channelId) =>
          savedMessage.getSavedMessage(channelId.channelId, channelId.messageId),
        );
        return mapped.filter(GlobalUtils.isNotNullish);
      });
    };
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default tmp2;
