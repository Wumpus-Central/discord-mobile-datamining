// === Module 15214: conjureCreatorByline ===

// Module 15214 (conjureCreatorByline)
import util from "util" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import UserUtils from "UserUtils" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  const intl = util.intl;
  const obj = { name: UserUtils.getName(creator) };
  return intl.format(_modDef4028["6/x9LD"], obj);
}