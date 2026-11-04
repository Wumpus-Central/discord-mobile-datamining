// === Module 9852: QuestOrbMultiplierHooks ===

// Module 9852 (QuestOrbMultiplierHooks)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9853 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = QuestOrbMultiplierUtils.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === QuestOrbMultiplierUtils.QuestOrbMultiplierSource.XBOX_GAME_PASS) {
        QuestOrbMultiplierEligibilityType2 = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.XBOX_GAME_PASS;
      } else {
        NITRO = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.NITRO;
      }
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = PremiumUtilsDefault;
  }
  return INELIGIBLE;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export function useQuestOrbMultiplierEligibility() {
  items = [UserStore];
  return initialize.useStateFromStores(items, () => getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser()));
}
export { getQuestOrbMultiplierEligibilityForUser };