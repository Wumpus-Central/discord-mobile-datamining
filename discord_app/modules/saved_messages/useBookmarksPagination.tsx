// discord_app/modules/saved_messages/useBookmarksPagination.tsx
import SavedMessagesTypes from "SavedMessagesTypes.tsx";
import SavedMessagesActions from "SavedMessagesActions.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

require = fn;
function loadMoreBookmarks() {
  const bookmarks = SavedMessagesActions.fetchBookmarks({ loadMore: true });
}
const NOOP = fn(1072).NOOP;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useBookmarksPagination.tsx");

export default function useBookmarksPagination(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let hasFetched;
  let hasShownBookmarks;
  const items = [hasShownBookmarks];
  const stateFromStoresObject = flag(hasFetched[4]).useStateFromStoresObject(items, () => {
    const obj = {
      fetchState: hasShownBookmarks.getBookmarksFetchState(),
      hasFetched: hasShownBookmarks.hasFetchedBookmarks(),
      isStale: hasShownBookmarks.getIsStale(),
      hasShownBookmarks: null,
    };
    const messageBookmarks = hasShownBookmarks.getMessageBookmarks();
    obj.hasShownBookmarks = messageBookmarks.some((message) => null != message.message);
    return obj;
  });
  let LOADED_FINISHED = stateFromStoresObject.fetchState;
  hasFetched = stateFromStoresObject.hasFetched;
  const isStale = stateFromStoresObject.isStale;
  hasShownBookmarks = stateFromStoresObject.hasShownBookmarks;
  LOADED_FINISHED(hasFetched[5])(flag);
  const items1 = [flag, isStale];
  const effect = isStale.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !isStale;
    }
    if (tmp) {
      const bookmarks = SavedMessagesActions.fetchBookmarks();
    }
  }, items1);
  const items2 = [flag, hasFetched, hasShownBookmarks, LOADED_FINISHED];
  const effect1 = isStale.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = hasFetched;
    }
    if (tmp) {
      tmp = !hasShownBookmarks;
    }
    if (tmp) {
      tmp = LOADED_FINISHED === SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
    }
    if (tmp) {
      const bookmarks = SavedMessagesActions.fetchBookmarks({ loadMore: true });
    }
  }, items2);
  if (!flag) {
    LOADED_FINISHED = flag(hasFetched[6]).BookmarksFetchState.LOADED_FINISHED;
  }
  return { fetchState: LOADED_FINISHED, loadMore: flag ? loadMoreBookmarks : NOOP };
}
