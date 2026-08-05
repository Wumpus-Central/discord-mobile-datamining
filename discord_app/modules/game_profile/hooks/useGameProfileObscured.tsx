import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { isAgeRestrictedContentClassification } from "../../content_classification/utils.tsx";
// discord_app/modules/game_profile/hooks/useGameProfileObscured.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize /* initialize */;
  [][0] = mergeGuildAvatar;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */;
  }
  return result;
};