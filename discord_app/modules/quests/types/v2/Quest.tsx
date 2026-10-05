// === Module 7195: Quest ===

// Module 7195 (Quest)
import Task from "Task" /* 7196 */;
import Reward from "Reward" /* 7200 */;
import CTA from "CTA" /* 7201 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/types/v2/Quest.tsx");

export const questFromServerV2 = function questFromServerV2(id) {
  let obj2;
  let obj3;
  let tmp3;
  let tmpResult;
  const obj = { id: id.id, configVersion: 2, startsAt: id.starts_at, expiresAt: id.expires_at, features: id.features, assets: { hero: id.assets.hero, heroVideo: id.assets.hero_video, questBarHero: id.assets.quest_bar_hero, questBarHeroBlurhash: id.assets.quest_bar_hero_blurhash, questBarHeroVideo: id.assets.quest_bar_hero_video, gameTile: id.assets.game_tile, logotype: id.assets.logotype, gameTileLight: id.assets.game_tile_light, gameTileDark: id.assets.game_tile_dark, logotypeLight: id.assets.logotype_light, logotypeDark: id.assets.logotype_dark }, colors: { primary: id.colors.primary, secondary: id.colors.secondary }, messages: { questName: id.messages.quest_name, gameTitle: id.messages.game_title, gamePublisher: id.messages.game_publisher }, taskConfigV2: obj2.questTaskConfigV2FromServer(id.task_config_v2), rewardsConfig: obj3.questRewardsConfigV2FromServer(id.rewards_config), cosponsorMetadata: tmp3, sharePolicy: id.share_policy, ctaConfig: tmpResult.questCtaConfigFromServer(id.cta_config) };
  obj2 = Task;
  const cosponsor_metadata = id.cosponsor_metadata;
  tmp3 = undefined;
  obj3 = Reward;
  if (null != cosponsor_metadata) {
    const obj5 = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
    ({ name: obj4.name, logotype: obj4.logotype, redemption_instructions: obj4.redemptionInstructions, logotype_light: obj4.logotypeLight, logotype_dark: obj4.logotypeDark } = cosponsor_metadata);
    tmp3 = obj5;
  }
  tmpResult = CTA;
  return obj;
};
export const questCosponsorMetadataFromServer = function questCosponsorMetadataFromServer(cosponsor_metadata) {
  if (null != cosponsor_metadata) {
    const obj = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
    ({ name: obj.name, logotype: obj.logotype, redemption_instructions: obj.redemptionInstructions, logotype_light: obj.logotypeLight, logotype_dark: obj.logotypeDark } = cosponsor_metadata);
    return obj;
  }
};