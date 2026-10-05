// === Module 10008: QuestOrbMultiplierUtils ===

// Module 10008 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1383 */;
import user from "user" /* 1385 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import size from "module_2" /* 2 */;

let obj = { UPSELL: "UPSELL", NITRO: "NITRO", XBOX_GAME_PASS: "XBOX_GAME_PASS", INELIGIBLE: "INELIGIBLE" };
const obj2 = { NITRO: "nitro", XBOX_GAME_PASS: "xbox_game_pass" };
const items = [, ];
({ XBOX_GAME_PASS: arr[0], NITRO: arr[1] } = obj);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj2;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility) {
  return items.includes(orbMultiplierEligibility);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  const obj = PremiumUtilsDefault;
  if (obj.canUseMoreQuestOrbs(perks)) {
    perks = undefined;
    const getPerkSource = PerksStateUtils.getPerkSource;
    PerksStateUtils;
    if (perks != null) {
      perks = perks.perks;
    }
    const perkSource = getPerkSource(perks, user.Perk.MORE_QUEST_ORBS);
    let hasItem;
    if (perkSource != null) {
      hasItem = perkSource.includes(user.PerkSource.SOURCE_NITRO);
    }
    if (!hasItem) {
      let XBOX_GAME_PASS;
      const tmpResult = PremiumUtilsDefault;
      if (!tmpResult.canUseQuestOrbMultiplier(perks)) {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        XBOX_GAME_PASS = null;
        if (hasItem1) {
          XBOX_GAME_PASS = obj2.XBOX_GAME_PASS;
        }
      }
      return XBOX_GAME_PASS;
    }
    XBOX_GAME_PASS = obj2.NITRO;
  } else {
    return null;
  }
};