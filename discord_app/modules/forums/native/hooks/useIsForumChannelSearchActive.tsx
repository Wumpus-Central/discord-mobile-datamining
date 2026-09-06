// === Module 13274: useIsForumChannelSearchActive ===

// Module 13274 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7768 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(13258).useCanSearchForumPostsByChannelId(channelId);
  _require(504);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};