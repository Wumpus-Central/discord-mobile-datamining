// === Module 12602: SavedMessagesActions ===

// Module 12602 (SavedMessagesActions)
import HTTPUtils from "HTTPUtils" /* 1295 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 9651 */;

require = fn;
let closure_6 = async function _upsertSavedMessage() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.PUT_SAVED_MESSAGE(_require.channelId, _require.messageId), body: { due_at: null, source: null }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  ({ dueAt: obj8.due_at, source: obj8.source } = _require);
  await HTTP.put(request);
  closure_129_0 = value;
  return closure_130_0(closure_130_2[4]).savedMessageCreateObjectToClient(closure_129_0.body);
};
let closure_7 = async function _deleteSavedMessage() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.del({ url: Endpoints.DELETE_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId), rejectWithError: HTTPUtils.rejectWithMigratedError() });
  return true;
};
let closure_10 = async function _fetchSavedMessages() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.GET_SAVED_MESSAGES, query: { bookmark_ids: true }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  await HTTP.get(request);
  await closure_129_1(closure_129_2[5]).dispatch({ type: "SAVED_MESSAGES_UPDATE", reminders: [], bookmarkIds: [] });
  await "IconComponent";
  closure_128_0 = value;
  const body = closure_128_0.body;
  const obj13 = { type: "SAVED_MESSAGES_UPDATE", reminders: null, bookmarkIds: body.bookmark_ids };
  const reminders = body.reminders;
  obj13.reminders = reminders.map(closure_129_0(closure_129_2[4]).savedMessageCreateObjectToClient);
  await closure_129_1(closure_129_2[5]).dispatch(obj13);
};
let closure_11 = async function _fetchBookmarks() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let bookmarksFetchState = tmp2;
          closure_3 = tmp6;
          closure_131_0 = undefined;
          let obj6 = closure_0;
          if (closure_0 === undefined) {
            obj6 = {};
          }
          let flag = obj6.loadMore;
          if (flag === undefined) {
            flag = false;
          }
          closure_131_0 = flag;
          closure_131_1 = undefined;
          let bookmarksCursor;
          closure_131_3 = undefined;
          let body;
          c6 = 1;
          c7 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c6 = 2;
          c7 = 1;
          const obj8 = { value: closure_132_8, done: false };
          return obj8;
        }
      } else {
        if (2 === tmp6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if ((function shouldFetchBookmarks(arg0) {
            bookmarksFetchState = bookmarksFetchState.getBookmarksFetchState();
            if (closure_1_0(before[4]).BookmarksFetchState.FAILED === bookmarksFetchState) {
              return true;
            } else {
              if (closure_1_0(before[4]).BookmarksFetchState.LOADING !== bookmarksFetchState) {
                if (closure_1_0(before[4]).BookmarksFetchState.LOADED_FINISHED !== bookmarksFetchState) {
                  if (closure_1_0(before[4]).BookmarksFetchState.LOADED_HAS_MORE === bookmarksFetchState) {
                    let tmp4 = arg0;
                    if (!arg0) {
                      tmp4 = !obj.hasFetchedBookmarks();
                    }
                    return tmp4;
                  }
                }
              }
              return false;
            }
            obj = bookmarksFetchState;
          })(closure_131_0)) {
            bookmarksCursor = closure_132_4.getBookmarksCursor();
            const sum = closure_132_9 + 1;
            closure_132_9 = sum;
            closure_131_3 = sum;
            const obj11 = { type: "BOOKMARKS_FETCH", requestId: closure_131_3 };
            closure_132_1(closure_132_2[5]).dispatch(obj11);
            c5 = 1;
            const HTTP = closure_132_0(closure_132_2[3]).HTTP;
            const request = { url: closure_132_5.GET_BOOKMARKS, query: null, retries: 2, rejectWithError: null };
            let before = bookmarksCursor;
            if (bookmarksCursor == null) {
              before = undefined;
            }
            const obj12 = { before, limit: 25 };
            request.query = obj12;
            const obj5 = closure_132_1(closure_132_2[5]);
            request.rejectWithError = closure_132_0(closure_132_2[3]).rejectWithMigratedError();
            c6 = 4;
            c7 = 1;
            const obj13 = { value: HTTP.get(request), done: false };
            return obj13;
          } else {
            c7 = 3;
          }
        } else if (3 === tmp6) {
          c5 = 0;
          const obj14 = { type: "BOOKMARKS_FETCH_FAILURE", requestId: closure_131_3 };
          closure_132_1(closure_132_2[5]).dispatch(obj14);
          c7 = 3;
          const obj15 = { value: undefined, done: true };
          return obj15;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_1 = value;
          c5 = 0;
          body = closure_131_1.body;
          const obj16 = { type: "BOOKMARKS_FETCH_SUCCESS", requestId: closure_131_3, nextBefore: null, bookmarks: null, hasMore: null };
          const results = body.results;
          const atResult = results.at(-1);
          let saved_at;
          if (atResult != null) {
            saved_at = atResult.save_data.saved_at;
          }
          let nextBefore = saved_at;
          if (saved_at == null) {
            nextBefore = bookmarksCursor;
          }
          obj16.nextBefore = nextBefore;
          const results1 = body.results;
          obj16.bookmarks = results1.map(closure_132_0(closure_132_2[4]).savedMessageCreateObjectToClient);
          obj16.hasMore = body.has_more;
          closure_132_1(closure_132_2[5]).dispatch(obj16);
          const obj17 = closure_132_1(closure_132_2[5]);
        }
        c5 = 0;
        c7 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp44) {
      if (tmp3 === c5) {
        c7 = tmp;
        throw tmp44;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1085).Endpoints;
let closure_8 = null;
let c9 = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesActions.tsx");

export const upsertSavedMessage = function upsertSavedMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteSavedMessage = function deleteSavedMessage() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchAndUpdateSavedMessages = function fetchAndUpdateSavedMessages() {
  if (SavedMessagesStore.getIsStale()) {
    if (closure_8 == null) {
      closure_8 = (function fetchSavedMessages() {
        const self = this;
        const apply = closure_1_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })().finally(() => {
        c8 = null;
      });
      const promise = (function fetchSavedMessages() {
        const self = this;
        const apply = closure_1_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
    let resolved = closure_8;
  } else {
    resolved = Promise.resolve();
  }
  return resolved;
};
export const fetchBookmarks = function fetchBookmarks() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};