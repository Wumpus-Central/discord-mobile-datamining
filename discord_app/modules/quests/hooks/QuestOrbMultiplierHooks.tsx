// === Module 10007: QuestOrbMultiplierHooks ===

// Module 10007 (QuestOrbMultiplierHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 10008 */;
import UserStore from "UserStore" /* 1377 */;

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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/hooks/QuestOrbMultiplierHooks.tsx");

export const useQuestOrbMultiplierEligibility = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => getQuestOrbMultiplierEligibilityForUser(currentUser.getCurrentUser()));
});
export { getQuestOrbMultiplierEligibilityForUser };