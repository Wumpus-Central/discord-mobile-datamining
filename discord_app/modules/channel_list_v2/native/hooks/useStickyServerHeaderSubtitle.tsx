// === Module 18514: useStickyServerHeaderSubtitle ===

// Module 18514 (useStickyServerHeaderSubtitle)
import GuildMemberCountStore from "GuildMemberCountStore" /* 5358 */;

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