// discord_app/modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
import initialize from "../../ForumSearchStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId.tsx").useCanSearchForumPostsByChannelId(channelId);
  initialize;
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};