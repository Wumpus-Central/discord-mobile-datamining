// discord_app/modules/conjure/app_hover_card/conjureCreatorByline.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4026 from "../intl/ConjureUntranslated.messages.js";
import UserUtils from "../../../utils/UserUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/app_hover_card/conjureCreatorByline.tsx");

export const CONJURE_CREATOR_BYLINE_AVATAR_SIZE = 20;
export function formatConjureCreatorByline(creator) {
  const intl = util.intl;
  const obj = { name: UserUtils.getName(creator) };
  return intl.format(_modDef4026["6/x9LD"], obj);
}
