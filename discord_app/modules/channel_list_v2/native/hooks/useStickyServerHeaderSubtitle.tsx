// === Module 18854: useStickyServerHeaderSubtitle ===

// Module 18854 (useStickyServerHeaderSubtitle)
import GuildMemberCountStore from "GuildMemberCountStore" /* 5526 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  _require = arg0;
  items = [GuildMemberCountStore];
  return require("initialize").useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(GuildFeatures.COMMUNITY)) {
      memberCount = GuildMemberCountStore.getMemberCount(features.id);
    }
    return memberCount;
  });
};