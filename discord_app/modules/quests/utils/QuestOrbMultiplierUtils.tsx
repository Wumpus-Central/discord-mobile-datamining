// === Module 11293: QuestOrbMultiplierUtils ===

// Module 11293 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1377 */;
import user from "user" /* 1379 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import XboxGamePassPerksExperiment from "XboxGamePassPerksExperiment" /* 7556 */;
import size from "module_2" /* 2 */;

let QuestOrbMultiplierSource = { UPSELL: "UPSELL", NITRO: "NITRO", CREPE: "CREPE", INELIGIBLE: "INELIGIBLE" };
QuestOrbMultiplierSource = { NITRO: "nitro", CREPE: "crepe" };
const items = [, ];
({ CREPE: arr[0], NITRO: arr[1] } = QuestOrbMultiplierSource);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = QuestOrbMultiplierSource;
export { QuestOrbMultiplierSource };
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser) {
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