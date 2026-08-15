// discord_app/modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx
import initialize from "initialize";
import { JoinGuildSources } from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default function useIsGameCommunityServerPreview(arg0) {
  const _require = arg0;
  const items = [initialize];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => {
    const lurkingSourceForGuild = outer1_2.getLurkingSourceForGuild(closure_0);
    let type;
    if (lurkingSourceForGuild != null) {
      type = lurkingSourceForGuild.type;
    }
    return type === outer1_3.GAME_COMMUNITY_UPSELL;
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