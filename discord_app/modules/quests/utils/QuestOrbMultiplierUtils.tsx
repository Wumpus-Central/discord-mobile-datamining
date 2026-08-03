let obj = { UPSELL: "UPSELL", NITRO: "NITRO", CREPE: "CREPE", INELIGIBLE: "INELIGIBLE" };
obj = { NITRO: "nitro", CREPE: "crepe" };
const items = [, ];
({ CREPE: arr[0], NITRO: arr[1] } = obj);
const result = require("create").fileFinishedImporting("modules/quests/utils/QuestOrbMultiplierUtils.tsx");

export const QuestOrbMultiplierEligibilityType = obj;
export const QuestOrbMultiplierSource = obj;
export const shouldReceiveQuestOrbMultiplier = function shouldReceiveQuestOrbMultiplier(questOrbMultiplierEligibilityForUser) {
  return items.includes(questOrbMultiplierEligibilityForUser);
};
export const getQuestOrbMultiplierSource = function getQuestOrbMultiplierSource(perks) {
  const obj = importDefault(3901);
  if (obj.canUseMoreQuestOrbs(perks)) {
    if (tmpResult.canUseQuestOrbMultiplier(perks)) {
      return obj.NITRO;
    } else {
      perks = undefined;
      if (perks != null) {
        perks = perks.perks;
      }
      const perkSource = require(1890) /* parseServerPerkConfigKind */.getPerkSource(perks, tmp4(1892).Perk.MORE_QUEST_ORBS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(tmp4(1892).PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsCrepeEnabled("getQuestOrbMultiplierSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(tmp4(1892).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.CREPE;
          }
        }
        tmp4Result = tmp4(6912);
      }
      return NITRO;
    }
    tmpResult = tmp(3901);
  } else {
    return null;
  }
  tmp = importDefault;
};