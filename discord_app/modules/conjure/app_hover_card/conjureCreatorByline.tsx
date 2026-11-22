// === Module 12295: conjureCreatorByline ===

// Module 12295 (conjureCreatorByline)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import UserUtils from "UserUtils" /* 4969 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  const intl = util.intl;
  const obj = { name: UserUtils.getName(creator) };
  return intl.format(_modDef4190["6/x9LD"], obj);
}