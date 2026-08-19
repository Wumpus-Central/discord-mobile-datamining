// === Module 15396: useStickyServerHeaderSubtitle ===

// Module 15396 (useStickyServerHeaderSubtitle)
import handleInviteData from "handleInviteData" /* 4295 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(GuildFeatures.COMMUNITY)) {
      memberCount = closure_1_2.getMemberCount(features.id);
    }
    return memberCount;
  });
};