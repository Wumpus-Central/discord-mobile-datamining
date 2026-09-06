// === Module 4749: guildHasOnboardingHome ===

// Module 4749 (guildHasOnboardingHome)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ GuildFeatures: c2, ME: c3 } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id;
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = id.id === React3;
  }
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id.id);
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