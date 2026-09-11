// === Module 15109: QuestProductDisplayNames ===

// Module 15109 (QuestProductDisplayNames)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/QuestProductDisplayNames.tsx");

export const getBountyProductDisplayName = function getBountyProductDisplayName() {
  const intl = util.intl;
  return intl.string(util.t.VwVCfv);
};
export const getBountyProductDisplayNamePlural = function getBountyProductDisplayNamePlural() {
  const intl = util.intl;
  return intl.string(util.t["JDvNF+"]);
};
export const bountyProductNameIntlParams = function bountyProductNameIntlParams() {
  const obj = { productName: null, productNamePlural: null };
  const intl = util.intl;
  obj.productName = intl.string(util.t.VwVCfv);
  const intl2 = util.intl;
  obj.productNamePlural = intl2.string(util.t["JDvNF+"]);
  return obj;
};
export const getQuestReserveProductDisplayName = function getQuestReserveProductDisplayName() {
  const intl = util.intl;
  return intl.string(util.t.GNHAfw);
};
export const getQuestReserveProductDisplayNamePlural = function getQuestReserveProductDisplayNamePlural() {
  const intl = util.intl;
  return intl.string(util.t.qS9MOl);
};
export const questReserveProductNameIntlParams = function questReserveProductNameIntlParams() {
  const obj = { productName: null, productNamePlural: null };
  const intl = util.intl;
  obj.productName = intl.string(util.t.GNHAfw);
  const intl2 = util.intl;
  obj.productNamePlural = intl2.string(util.t.qS9MOl);
  return obj;
};