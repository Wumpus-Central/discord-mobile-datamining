// === Module 7461: questFromServerV2 ===

// Module 7461 (questFromServerV2)
import obj132 from "obj132" /* 2 */;
import _firstPartyTasksFromServer from "_firstPartyTasksFromServer" /* 7462 */;
import _rewardRedemptionInstructionsFromServer from "_rewardRedemptionInstructionsFromServer" /* 7466 */;
import questCtaConfigFromServer from "questCtaConfigFromServer" /* 7467 */;

const result = obj132.fileFinishedImporting("modules/quests/types/v2/Quest.tsx");

export const questFromServerV2 = function questFromServerV2(id) {
  const obj = { primary: id.colors.primary, secondary: id.colors.secondary };
  obj[8] = _firstPartyTasksFromServer.questTaskConfigV2FromServer(id.task_config_v2);
  obj[9] = _rewardRedemptionInstructionsFromServer.questRewardsConfigV2FromServer(id.rewards_config);
  const cosponsor_metadata = id.cosponsor_metadata;
  let tmp3;
  if (null != cosponsor_metadata) {
    ({ name: obj7[0], logotype: obj7[1], redemption_instructions: obj7[2], logotype_light: obj7[3], logotype_dark: obj7[4] } = cosponsor_metadata);
    tmp3 = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
  }
  obj[10] = tmp3;
  obj[11] = id.share_policy;
  obj[12] = questCtaConfigFromServer.questCtaConfigFromServer(id.cta_config);
  return obj;
};
export const questCosponsorMetadataFromServer = function questCosponsorMetadataFromServer(cosponsor_metadata) {
  if (null != cosponsor_metadata) {
    const obj = { name: null, logotype: null, redemptionInstructions: null, logotypeLight: null, logotypeDark: null };
    ({ name: obj[0], logotype: obj[1], redemption_instructions: obj[2], logotype_light: obj[3], logotype_dark: obj[4] } = cosponsor_metadata);
    return obj;
  }
};