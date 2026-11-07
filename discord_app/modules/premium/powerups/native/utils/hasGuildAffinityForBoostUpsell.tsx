// === Module 14317: hasGuildAffinityForBoostUpsell ===

// Module 14317 (hasGuildAffinityForBoostUpsell)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/hasGuildAffinityForBoostUpsell.tsx");

export default function hasGuildAffinityForBoostUpsell(guildAffinityScore) {
  guildAffinityScore = guildAffinityScore.guildAffinityScore;
  let prop = guildAffinityScore.hasPersonalizationConsented;
  if (prop) {
    let tmp3 = null != guildAffinityScore;
    if (tmp3) {
      tmp3 = guildAffinityScore > 17.06;
    }
    prop = tmp3;
  }
  return prop;
};
export const MIN_GUILD_AFFINITY_SCORE = 17.06;