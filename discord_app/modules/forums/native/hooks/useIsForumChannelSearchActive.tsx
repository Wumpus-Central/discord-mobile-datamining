// discord_app/modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
import closure_2 from "../../ForumSearchStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useCanSearchForumPostsByChannelId } from "useCanSearchForumPostsByChannelId.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _useCanSearchForumPostsByChannelId.useCanSearchForumPostsByChannelId(channelId);
  _initialize;
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};