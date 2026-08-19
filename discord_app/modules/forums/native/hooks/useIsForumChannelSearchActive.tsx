// === Module 12715: useIsForumChannelSearchActive ===

// Module 12715 (useIsForumChannelSearchActive)
import initialize from "initialize" /* 7515 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(12702).useCanSearchForumPostsByChannelId(channelId);
  _require(589);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};