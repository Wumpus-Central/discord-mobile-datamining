// discord_app/modules/saved_messages/useBookmarksPagination.tsx
import SavedMessagesTypes from "SavedMessagesTypes.tsx";
import SavedMessagesActions from "SavedMessagesActions.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

const require = globalThis.__r;

require = fn;
function loadMoreBookmarks() {
  const bookmarks = SavedMessagesActions.fetchBookmarks({ loadMore: true });
}
const NOOP = fn(1085).NOOP;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useBookmarksPagination.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useBookmarksPagination(arg0) {
      const cResult = require("c").c(15);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [hasShownBookmarks];
        const fn = function h() {
          const obj = {
            fetchState: hasShownBookmarks.getBookmarksFetchState(),
            hasFetched: hasShownBookmarks.hasFetchedBookmarks(),
            isStale: hasShownBookmarks.getIsStale(),
            hasShownBookmarks: null,
          };
          const messageBookmarks = hasShownBookmarks.getMessageBookmarks();
          obj.hasShownBookmarks = messageBookmarks.some((message) => null != message.message);
          return obj;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp5, tmp6);
      let LOADED_FINISHED = stateFromStoresObject.fetchState;
      hasFetched = stateFromStoresObject.hasFetched;
      const isStale = stateFromStoresObject.isStale;
      hasShownBookmarks = stateFromStoresObject.hasShownBookmarks;
      LOADED_FINISHED(hasFetched[7])(undefined === arg0 || arg0);
      if (cResult[2] === (undefined === arg0 || arg0)) {
        if (cResult[3] === isStale) {
          let tmp10 = cResult[4];
          let tmp11 = cResult[5];
        }
        const effect = isStale.useEffect(tmp10, tmp11);
        if (cResult[6] === tmp4) {
          if (cResult[7] === LOADED_FINISHED) {
            if (cResult[8] === hasFetched) {
              if (cResult[9] === hasShownBookmarks) {
                let tmp13 = cResult[10];
                let tmp14 = cResult[11];
              }
              const effect1 = obj3.useEffect(tmp13, tmp14);
              if (!tmp4) {
                LOADED_FINISHED = tmp(tmp2[8]).BookmarksFetchState.LOADED_FINISHED;
              }
              const tmp16 = tmp4 ? loadMoreBookmarks : NOOP;
              class B {
                constructor() {
                  tmp = closure_0;
                  if (closure_0) {
                    tmp = hasFetched;
                  }
                  if (tmp) {
                    tmp2 = hasShownBookmarks;
                    tmp = !hasShownBookmarks;
                  }
                  if (tmp) {
                    tmp3 = fetchState;
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    tmp = fetchState === closure_0(closure_2[8]).BookmarksFetchState.LOADED_HAS_MORE;
                  }
                  if (tmp) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj = closure_0(closure_2[3]);
                    bookmarks = obj.fetchBookmarks({ loadMore: true });
                  }
                  return;
                }
              }
              const obj2 = { fetchState: LOADED_FINISHED, loadMore: tmp16 };
              cResult[12] = LOADED_FINISHED;
              cResult[13] = tmp16;
              cResult[14] = obj2;
            }
          }
        }
        class B {
          constructor() {
            tmp = closure_0;
            if (closure_0) {
              tmp = hasFetched;
            }
            if (tmp) {
              tmp2 = hasShownBookmarks;
              tmp = !hasShownBookmarks;
            }
            if (tmp) {
              tmp3 = fetchState;
              tmp4 = closure_0;
              tmp5 = closure_2;
              tmp = fetchState === closure_0(closure_2[8]).BookmarksFetchState.LOADED_HAS_MORE;
            }
            if (tmp) {
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj = closure_0(closure_2[3]);
              bookmarks = obj.fetchBookmarks({ loadMore: true });
            }
            return;
          }
        }
        const items1 = [tmp4, hasFetched, hasShownBookmarks, LOADED_FINISHED];
        cResult[6] = tmp4;
        cResult[7] = LOADED_FINISHED;
        cResult[8] = hasFetched;
        cResult[9] = hasShownBookmarks;
        cResult[10] = B;
        cResult[11] = items1;
        tmp14 = items1;
        tmp13 = B;
        obj3 = isStale;
      }
      const fn2 = function l() {
        let tmp = closure_0;
        if (closure_0) {
          tmp = !isStale;
        }
        if (tmp) {
          const bookmarks = SavedMessagesActions.fetchBookmarks();
        }
      };
      const items2 = [undefined === arg0 || arg0, isStale];
      cResult[2] = undefined === arg0 || arg0;
      cResult[3] = isStale;
      cResult[4] = fn2;
      cResult[5] = items2;
      tmp11 = items2;
      tmp10 = fn2;
    }
  : function useBookmarksPagination() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      let hasFetched;
      let hasShownBookmarks;
      const items = [hasShownBookmarks];
      const stateFromStoresObject = flag(hasFetched[6]).useStateFromStoresObject(items, () => {
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
      LOADED_FINISHED(hasFetched[7])(flag);
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
        LOADED_FINISHED = flag(hasFetched[8]).BookmarksFetchState.LOADED_FINISHED;
      }
      return { fetchState: LOADED_FINISHED, loadMore: flag ? loadMoreBookmarks : NOOP };
    };
