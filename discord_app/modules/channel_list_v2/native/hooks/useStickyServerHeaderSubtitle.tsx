// discord_app/modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx
import closure_2 from "../../../../stores/GuildMemberCountStore.tsx";
import { GuildFeatures } from "../../../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(closure_1_3.COMMUNITY)) {
      memberCount = closure_1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};