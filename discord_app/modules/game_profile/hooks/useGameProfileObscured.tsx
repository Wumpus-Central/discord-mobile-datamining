// discord_app/modules/game_profile/hooks/useGameProfileObscured.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import utils from "../../content_classification/utils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  initialize;
  [][0] = UserStore;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = utils;
  }
  return result;
}
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = utils.isAgeRestrictedContentClassification(game.contentClassification);
  }
  return result;
};
