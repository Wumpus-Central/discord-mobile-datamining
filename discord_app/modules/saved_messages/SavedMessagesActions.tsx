// discord_app/modules/saved_messages/SavedMessagesActions.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

require = fn;
let closure_6 = async function _upsertSavedMessage() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.PUT_SAVED_MESSAGE(_require.channelId, _require.messageId),
    body: { due_at: null, source: null },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  ({ dueAt: obj8.due_at, source: obj8.source } = _require);
  await HTTP.put(request);
  closure_129_0 = value;
  return closure_130_0(closure_130_2[4]).savedMessageCreateObjectToClient(closure_129_0.body);
};
let closure_7 = async function _deleteSavedMessage() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.del({
    url: Endpoints.DELETE_SAVED_MESSAGE(closure_0.channelId, closure_0.messageId),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  });
  return true;
};
let closure_10 = async function _fetchSavedMessages() {
  closure_1 = tmp3;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.GET_SAVED_MESSAGES,
    query: { bookmark_ids: true },
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
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
  let bookmarksFetchState = tmp2;
  let obj6 = closure_0;
  if (closure_0 === undefined) {
    obj6 = {};
  }
  let flag = obj6.loadMore;
  if (flag === undefined) {
    flag = false;
  }
  closure_131_0 = flag;
  await "Reflect";
  await closure_132_8;
  if (2 === tmp6) {
    if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c7 = 3;
      return { value, done: true };
    } else if (
      (function shouldFetchBookmarks(arg0) {
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
      })(closure_131_0)
    ) {
      const bookmarksCursor = closure_132_4.getBookmarksCursor();
      const sum = closure_132_9 + 1;
      closure_132_9 = sum;
      closure_131_3 = sum;
      closure_132_1(closure_132_2[5]).dispatch({ type: "BOOKMARKS_FETCH", requestId: closure_131_3 });
      c5 = 1;
      const HTTP = closure_132_0(closure_132_2[3]).HTTP;
      const request = { url: closure_132_5.GET_BOOKMARKS, query: null, retries: 2, rejectWithError: null };
      let before = bookmarksCursor;
      if (bookmarksCursor == null) {
        before = undefined;
      }
      request.query = { before, limit: 25 };
      closure_132_1(closure_132_2[5]);
      request.rejectWithError = closure_132_0(closure_132_2[3]).rejectWithMigratedError();
      c6 = 4;
      c7 = 1;
      return { value: HTTP.get(request), done: false };
    } else {
      c7 = 3;
    }
  } else if (3 === tmp6) {
    c5 = 0;
    closure_132_1(closure_132_2[5]).dispatch({ type: "BOOKMARKS_FETCH_FAILURE", requestId: closure_131_3 });
    c7 = 3;
    return { value: undefined, done: true };
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_1 = value;
    c5 = 0;
    const body = closure_131_1.body;
    const obj16 = {
      type: "BOOKMARKS_FETCH_SUCCESS",
      requestId: closure_131_3,
      nextBefore: null,
      bookmarks: null,
      hasMore: null,
    };
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
    closure_132_1(closure_132_2[5]);
  }
  return value;
};
const Endpoints = fn(1087).Endpoints;
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
