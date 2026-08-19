// discord_app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import parseServerPerkConfigKind from "../../premium/perks_state/PerksStateUtils.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import apexExperiment from "../../croissant/crepe/CrepeExperiment.tsx";

let obj = { NITRO: "nitro", CREPE: "crepe" };
const items = [, ];
({ CREPE: arr[0], NITRO: arr[1] } = obj);
const result = obj132.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser) {
  return items.includes(questOrbMultiplierEligibilityForUser);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  obj = getPremiumPlanItemDefault;
  if (obj.canUseMoreQuestOrbs(perks)) {
    if (tmpResult.canUseQuestOrbMultiplier(perks)) {
      return obj.NITRO;
    } else {
      perks = undefined;
      if (perks != null) {
        perks = perks.perks;
      }
      const perkSource = parseServerPerkConfigKind.getPerkSource(perks, create.Perk.MORE_QUEST_ORBS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(create.PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsCrepeEnabled("getQuestOrbMultiplierSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(create.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.CREPE;
          }
        }
        tmp4Result = apexExperiment;
      }
      return NITRO;
    }
    tmpResult = getPremiumPlanItemDefault;
  } else {
    return null;
  }
};