// discord_app/modules/quests/hooks/QuestOrbMultiplierHooks.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";
import { items } from "../utils/QuestOrbMultiplierUtils.tsx";

const require = arg1;
function getQuestOrbMultiplierEligibilityForUser(isFractionalPremiumWithNoStandardSub) {
  if (null == isFractionalPremiumWithNoStandardSub) {
    let INELIGIBLE = items.QuestOrbMultiplierEligibilityType.INELIGIBLE;
  } else {
    let QuestOrbMultiplierEligibilityType2 = dependencyMap;
    if (obj2.canUseMoreQuestOrbs(isFractionalPremiumWithNoStandardSub)) {
      const questOrbMultiplierSource = items.getQuestOrbMultiplierSource(isFractionalPremiumWithNoStandardSub);
      if (questOrbMultiplierSource === items.QuestOrbMultiplierSource.CREPE) {
        QuestOrbMultiplierEligibilityType2 = tmp3(10485).QuestOrbMultiplierEligibilityType;
        let NITRO = QuestOrbMultiplierEligibilityType2.CREPE;
      } else {
        NITRO = tmp3(10485).QuestOrbMultiplierEligibilityType.NITRO;
      }
      const obj = items;
    } else {
      let result;
      if (isFractionalPremiumWithNoStandardSub != null) {
        result = isFractionalPremiumWithNoStandardSub.isFractionalPremiumWithNoStandardSub();
      }
      const QuestOrbMultiplierEligibilityType = items.QuestOrbMultiplierEligibilityType;
      INELIGIBLE = result ? QuestOrbMultiplierEligibilityType.INELIGIBLE : QuestOrbMultiplierEligibilityType.UPSELL;
    }
    obj2 = getPremiumPlanItem;
  }
  return INELIGIBLE;
}
let result = require("items").fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = function useQuestOrbMultiplierEligibility() {
  const items = [mergeGuildAvatar];
  return initialize.useStateFromStores(items, () => callback(currentUser.getCurrentUser()));
};
export { getQuestOrbMultiplierEligibilityForUser };