// discord_app/modules/premium/powerups/native/hooks/useHasGuildAffinityForBoostUpsell.tsx
import hasGuildAffinityForBoostUpsellDefault from "../utils/hasGuildAffinityForBoostUpsell.tsx";
import ConsentStore from "../../../../../stores/ConsentStore.tsx";
import GuildAffinitiesStore from "../../../../../stores/GuildAffinitiesStore.tsx";

const require = globalThis.__r;

const require = fn;
const Consents = fn(1072).Consents;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/native/hooks/useHasGuildAffinityForBoostUpsell.tsx",
);

export default function useHasGuildAffinityForBoostUpsell(arg0) {
  _require = arg0;
  items = [GuildAffinitiesStore];
  const items1 = [arg0];
  const guildAffinityScore = require("initialize").useStateFromStores(
    items,
    () => {
      const guildAffinity = GuildAffinitiesStore.getGuildAffinity(closure_0);
      let score;
      if (guildAffinity != null) {
        score = guildAffinity.score;
      }
      return score;
    },
    items1,
  );
  const obj = require("initialize");
  const items2 = [ConsentStore];
  const hasPersonalizationConsented = require("initialize").useStateFromStores(items2, () =>
    ConsentStore.hasConsented(constants.PERSONALIZATION),
  );
  return hasGuildAffinityForBoostUpsellDefault({ guildAffinityScore, hasPersonalizationConsented });
}
