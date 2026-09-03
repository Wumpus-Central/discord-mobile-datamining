// === Module 4710: guildHasOnboardingHome ===

// Module 4710 (guildHasOnboardingHome)
import set from "set" /* 2 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1911 */;
import ME from "ME" /* 673 */;

({ GuildFeatures: obj1, ME: c3 } = ME);
const result = set.fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id;
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = id.id === closure_3;
  }
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id.id);
    const obj = getFavoritesAwareGuildName;
  }
  if (!isFavoritesGuildIdResult) {
    const features = id.features;
    isFavoritesGuildIdResult = !features.has(constants.COMMUNITY);
  }
  if (!isFavoritesGuildIdResult) {
    const features2 = id.features;
    isFavoritesGuildIdResult = !features2.has(constants.GUILD_SERVER_GUIDE);
  }
  if (!isFavoritesGuildIdResult) {
    const features3 = id.features;
    isFavoritesGuildIdResult = !features3.has(constants.GUILD_ONBOARDING);
  }
  return !isFavoritesGuildIdResult;
};