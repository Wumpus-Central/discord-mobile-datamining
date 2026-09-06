// discord_app/modules/saved_messages/useSavedMessagesForPage.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import SavedMessagesTypes from "SavedMessagesTypes.tsx";
import useRefreshSavedMessagesDefault from "useRefreshSavedMessages.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

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
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useSavedMessagesForPage.tsx");

export default function useSavedMessagesForPage() {
  let ALL = arg0;
  if (arg0 === undefined) {
    ALL = ALL(7860).SavedMessageSortTypes.ALL;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [c1, c2] = _slicedToArray(
    noop.useState(() => {
      if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
        let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
      } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
        messageBookmarks = SavedMessagesStore.getMessageReminders();
      } else {
        messageBookmarks = SavedMessagesStore.getSavedMessages();
      }
      return messageBookmarks.map((saveData) => saveData.saveData);
    }),
    2,
  );
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
          const map = new Map(
            closure_2_6(lastChanged).map((saveData) => {
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
  useRefreshSavedMessagesDefault();
  let tmp3 = _slicedToArray(
    noop.useState(() => {
      if (SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK === ALL) {
        let messageBookmarks = SavedMessagesStore.getMessageBookmarks();
      } else if (SavedMessagesTypes.SavedMessageSortTypes.REMINDER === ALL) {
        messageBookmarks = SavedMessagesStore.getMessageReminders();
      } else {
        messageBookmarks = SavedMessagesStore.getSavedMessages();
      }
      return messageBookmarks.map((saveData) => saveData.saveData);
    }),
    2,
  );
  const items1 = [SavedMessagesStore];
  return ALL(504).useStateFromStoresArray(items1, () => {
    const mapped = _undefined.map((channelId) =>
      savedMessage.getSavedMessage(channelId.channelId, channelId.messageId),
    );
    return mapped.filter(GlobalUtils.isNotNullish);
  });
}
