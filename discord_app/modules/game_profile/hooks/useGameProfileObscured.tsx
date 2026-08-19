// discord_app/modules/game_profile/hooks/useGameProfileObscured.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import isAgeRestrictedContentClassification from "../../content_classification/utils.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
let result = require("obj132").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = closure_2;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = isAgeRestrictedContentClassification;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
};