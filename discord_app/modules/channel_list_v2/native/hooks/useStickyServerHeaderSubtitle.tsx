// discord_app/modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx
import handleInviteData from "handleInviteData";
import { GuildFeatures } from "ME";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [handleInviteData];
  return _initialize.useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(outer1_3.COMMUNITY)) {
      memberCount = outer1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};