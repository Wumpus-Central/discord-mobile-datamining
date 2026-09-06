// discord_app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
import PerksStateUtils from "../../premium/perks_state/PerksStateUtils.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
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
      const perkSource = PerksStateUtils.getPerkSource(perks, tmp4(1379).Perk.MORE_QUEST_ORBS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(tmp4(1379).PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsXboxGamePassPerksEnabled("getQuestOrbMultiplierSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(tmp4(1379).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.CREPE;
          }
        }
        tmp4Result = tmp4(7556);
      }
      return NITRO;
    }
    tmpResult = PremiumUtilsDefault;
  } else {
    return null;
  }
};
