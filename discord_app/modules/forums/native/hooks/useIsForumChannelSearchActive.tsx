// === Module 12864: useIsForumChannelSearchActive ===

// Module 12864 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 7904 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsForumChannelSearchActive(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  const tmp = _require;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId").useCanSearchForumPostsByChannelId(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ForumSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let searchQuery = null;
      if (null != closure_0) {
        searchQuery = ForumSearchStore.getSearchQuery(tmp);
      }
      return searchQuery;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
  }
  tmp(504);
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp10;
  }
  return canSearchForumPostsByChannelId;
}) : (function useIsForumChannelSearchActive(arg0) {
  _require = arg0;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId").useCanSearchForumPostsByChannelId(arg0);
  require("initialize");
  [][0] = arg0;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
});