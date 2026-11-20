// === Module 12166: conjureCreatorByline ===

// Module 12166 (conjureCreatorByline)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import UserUtils from "UserUtils" /* 4850 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  const intl = util.intl;
  const obj = { name: UserUtils.getName(creator) };
  return intl.format(_modDef4091["6/x9LD"], obj);
}