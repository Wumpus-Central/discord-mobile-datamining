// === Module 10493: getQuestOrbMultiplierEligibilityForUser ===

// Module 10493 (getQuestOrbMultiplierEligibilityForUser)
import initialize from "initialize" /* 589 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import items2 from "items" /* 10494 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = items2.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = items2.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === items2.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = items2.QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = items2.QuestOrbMultiplierEligibilityType.NITRO;
      }
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = items2.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = getPremiumPlanItemDefault;
  }
  return INELIGIBLE;
}
let result = require("obj132").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };