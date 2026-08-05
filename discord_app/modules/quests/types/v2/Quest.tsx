// discord_app/modules/quests/types/v2/Quest.tsx
const result = require("questCtaConfigFromServer").fileFinishedImporting("modules/quests/types/v2/Quest.tsx");

export const questFromServerV2 = function questFromServerV2(id) {
  obj = { id: id.id, configVersion: 2, startsAt: id.starts_at, expiresAt: id.expires_at, features: id.features, assets: obj, colors: obj, messages: obj1, taskConfigV2: null, rewardsConfig: null, cosponsorMetadata: null, sharePolicy: null, ctaConfig: null };
  obj = { hero: id.assets.hero, heroVideo: id.assets.hero_video, questBarHero: id.assets.quest_bar_hero, questBarHeroBlurhash: id.assets.quest_bar_hero_blurhash, questBarHeroVideo: id.assets.quest_bar_hero_video, gameTile: id.assets.game_tile, logotype: id.assets.logotype, gameTileLight: id.assets.game_tile_light, gameTileDark: id.assets.game_tile_dark, logotypeLight: id.assets.logotype_light, logotypeDark: id.assets.logotype_dark };
  obj = { primary: id.colors.primary, secondary: id.colors.secondary };
  obj[8] = require(7089) /* _firstPartyTasksFromServer */.questTaskConfigV2FromServer(id.task_config_v2);
  obj1 = { questName: id.messages.quest_name, gameTitle: id.messages.game_title, gamePublisher: id.messages.game_publisher };
  const obj5 = require(7089) /* _firstPartyTasksFromServer */;
  const tmp = require;
  obj[9] = require(7093) /* _rewardRedemptionInstructionsFromServer */.questRewardsConfigV2FromServer(id.rewards_config);
  const cosponsor_metadata = id.cosponsor_metadata;
  let tmp3;
  if (null != cosponsor_metadata) {
    ({ name: obj7[0], logotype: obj7[1], redemption_instructions: obj7[2], logotype_light: obj7[3], logotype_dark: obj7[4] } = cosponsor_metadata);
    tmp3 = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
    const obj2 = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
  }
  obj[10] = tmp3;
  obj[11] = id.share_policy;
  const obj6 = require(7093) /* _rewardRedemptionInstructionsFromServer */;
  obj[12] = tmp(7094).questCtaConfigFromServer(id.cta_config);
  return obj;
};
export const questCosponsorMetadataFromServer = function questCosponsorMetadataFromServer(cosponsor_metadata) {
  if (null != cosponsor_metadata) {
    const obj = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
    ({ name: obj[0], logotype: obj[1], redemption_instructions: obj[2], logotype_light: obj[3], logotype_dark: obj[4] } = cosponsor_metadata);
    return obj;
  }
};