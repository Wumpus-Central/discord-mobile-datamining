// === Module 11416: conjureCreatorByline ===

// Module 11416 (conjureCreatorByline)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import UserUtils from "UserUtils" /* 4973 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  const intl = util.intl;
  const obj = { name: UserUtils.getName(creator) };
  return intl.format(_modDef4192["6/x9LD"], obj);
}