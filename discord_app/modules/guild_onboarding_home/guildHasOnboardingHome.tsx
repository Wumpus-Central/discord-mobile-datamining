// discord_app/modules/guild_onboarding_home/guildHasOnboardingHome.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getFavoritesAwareGuildName from "../favorites/FavoritesUtils.tsx";
import ME from "../../Constants.tsx";

({ GuildFeatures: obj1, ME: c3 } = ME);
const result = obj132.fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id;
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = id.id === closure_3;
  }
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id.id);
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