// === Module 13577: useIsForumChannelSearchActive ===

// Module 13577 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 8008 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  _require = channelId;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId").useCanSearchForumPostsByChannelId(channelId);
  require("initialize");
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};