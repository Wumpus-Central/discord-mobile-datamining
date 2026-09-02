// === Module 13159: useIsForumChannelSearchActive ===

// Module 13159 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7522 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(13146).useCanSearchForumPostsByChannelId(channelId);
  _require(586);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};