// === Module 15657: useIsGameCommunityServerPreview ===

// Module 15657 (useIsGameCommunityServerPreview)
import closure_2 from "initialize" /* 4092 */;
import { JoinGuildSources } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default function useIsGameCommunityServerPreview(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const lurkingSourceForGuild = closure_1_2.getLurkingSourceForGuild(closure_0);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    return type === closure_1_3.GAME_COMMUNITY_UPSELL;
  }, items1);
};
export const isGameCommunityServerPreview = function isGameCommunityServerPreview(id) {
  lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(id);
  let type;
  if (lurkingSourceForGuild != null) {
    type = lurkingSourceForGuild.type;
  }
  return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
};