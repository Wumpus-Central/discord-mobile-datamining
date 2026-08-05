import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useCanSearchForumPostsByChannelId } from "useCanSearchForumPostsByChannelId.tsx";
// discord_app/modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

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