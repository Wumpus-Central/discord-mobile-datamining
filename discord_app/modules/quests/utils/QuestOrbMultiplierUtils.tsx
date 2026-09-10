// discord_app/modules/quests/utils/QuestOrbMultiplierUtils.tsx
import PerksStateUtils from "../../premium/perks_state/PerksStateUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let QuestOrbMultiplierSource = {
  UPSELL: "UPSELL",
  NITRO: "NITRO",
  XBOX_GAME_PASS: "XBOX_GAME_PASS",
  INELIGIBLE: "INELIGIBLE",
};
QuestOrbMultiplierSource = { NITRO: "nitro", XBOX_GAME_PASS: "xbox_game_pass" };
const items = [,];
({ XBOX_GAME_PASS: arr[0], NITRO: arr[1] } = QuestOrbMultiplierSource);
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
    perks = undefined;
    if (perks != null) {
      perks = perks.perks;
    }
    const perkSource = PerksStateUtils.getPerkSource(perks, user.Perk.MORE_QUEST_ORBS);
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
          XBOX_GAME_PASS = obj.XBOX_GAME_PASS;
        }
      }
      return XBOX_GAME_PASS;
    }
    XBOX_GAME_PASS = obj.NITRO;
  } else {
    return null;
  }
};
