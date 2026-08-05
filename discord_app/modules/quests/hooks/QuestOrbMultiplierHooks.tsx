// discord_app/modules/quests/hooks/QuestOrbMultiplierHooks.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = require("../utils/QuestOrbMultiplierUtils.tsx") /* items */.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = require("../utils/QuestOrbMultiplierUtils.tsx") /* items */.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === require("../utils/QuestOrbMultiplierUtils.tsx") /* items */.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(10394).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(10394).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = require("../utils/QuestOrbMultiplierUtils.tsx") /* items */;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = require("../utils/QuestOrbMultiplierUtils.tsx") /* items */.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = require("../../../utils/PremiumUtils.tsx");
  }
  return INELIGIBLE;
}
let result = require("items").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [mergeGuildAvatar];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };