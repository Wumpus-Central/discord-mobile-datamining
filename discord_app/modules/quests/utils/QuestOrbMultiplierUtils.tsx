// discord_app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
import PerksStateUtils from "../../premium/perks_state/PerksStateUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import XboxGamePassPerksExperiment from "../../partner_perks/xbox/game_pass_perks/XboxGamePassPerksExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let QuestOrbMultiplierSource = { UPSELL: "UPSELL", NITRO: "NITRO", CREPE: "CREPE", INELIGIBLE: "INELIGIBLE" };
QuestOrbMultiplierSource = { NITRO: "nitro", CREPE: "crepe" };
const items = [,];
({ CREPE: arr[0], NITRO: arr[1] } = QuestOrbMultiplierSource);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = QuestOrbMultiplierSource;
export { QuestOrbMultiplierSource };
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(
  questOrbMultiplierEligibilityForUser,
) {
  return items.includes(questOrbMultiplierEligibilityForUser);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  obj = PremiumUtilsDefault;
  if (obj.canUseMoreQuestOrbs(perks)) {
    if (tmpResult.canUseQuestOrbMultiplier(perks)) {
      return obj.NITRO;
    } else {
      perks = undefined;
      if (perks != null) {
        perks = perks.perks;
      }
      const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MORE_QUEST_ORBS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsXboxGamePassPerksEnabled("getQuestOrbMultiplierSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.CREPE;
          }
        }
        tmp4Result = XboxGamePassPerksExperiment;
      }
      return NITRO;
    }
    tmpResult = PremiumUtilsDefault;
  } else {
    return null;
  }
};
