// discord_app/modules/game_profile/hooks/useGameProfileObscured.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import isAgeRestrictedContentClassification from "../../content_classification/utils.tsx";
import closure_2 from "../../../stores/UserStore.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = closure_2;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(
      contentClassification.contentClassification,
    );
    const tmpResult = isAgeRestrictedContentClassification;
  }
  return result;
}
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = isAgeRestrictedContentClassification;
  }
  return result;
};
