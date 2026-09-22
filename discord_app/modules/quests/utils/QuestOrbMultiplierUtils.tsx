// === Module 11560: QuestOrbMultiplierUtils ===

// Module 11560 (QuestOrbMultiplierUtils)
import PerksStateUtils from "PerksStateUtils" /* 1378 */;
import user from "user" /* 1380 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4415 */;
import size from "module_2" /* 2 */;

let obj = { UPSELL: "UPSELL", NITRO: "NITRO", XBOX_GAME_PASS: "XBOX_GAME_PASS", INELIGIBLE: "INELIGIBLE" };
let obj2 = { NITRO: "nitro", XBOX_GAME_PASS: "xbox_game_pass" };
const items = [, ];
({ XBOX_GAME_PASS: arr[0], NITRO: arr[1] } = obj);
const result = size.fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj2;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser) {
  return items.includes(questOrbMultiplierEligibilityForUser);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  if (obj.canUseMoreQuestOrbs(perks)) {
    obj2 = PerksStateUtils;
    perks = undefined;
    if (perks != null) {
      perks = perks.perks;
    }
    const perkSource = obj2.getPerkSource(perks, user.Perk.MORE_QUEST_ORBS);
    let hasItem;
    if (perkSource != null) {
      hasItem = perkSource.includes(user.PerkSource.SOURCE_NITRO);
    }
    if (!hasItem) {
      if (!tmpResult.canUseQuestOrbMultiplier(perks)) {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        let XBOX_GAME_PASS = null;
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
  obj = PremiumUtilsDefault;
};