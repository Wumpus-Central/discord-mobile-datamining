import ME from "ME";

let c3;
let obj1;
({ GuildFeatures: obj1, ME: c3 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/guildHasOnboardingHome.tsx");

export default function guildHasOnboardingHome(id) {
  let isFavoritesGuildIdResult = null == id;
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = id.id === closure_3;
  }
  if (!isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = require(1865) /* getFavoritesAwareGuildName */.isFavoritesGuildId(id.id);
    const obj = require(1865) /* getFavoritesAwareGuildName */;
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