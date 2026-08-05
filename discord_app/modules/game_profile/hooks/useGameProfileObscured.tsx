// discord_app/modules/game_profile/hooks/useGameProfileObscured.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameProfileObscured.tsx");

export default function useGameProfileObscured(contentClassification) {
  require(589) /* initialize */;
  [][0] = mergeGuildAvatar;
  let result = null != contentClassification;
  if (result) {
    result = false === tmp4;
  }
  if (result) {
    result = require(7004) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.contentClassification);
    const tmpResult = require(7004) /* isAgeRestrictedContentClassification */;
  }
  return result;
};
export const isGameProfileObscured = function isGameProfileObscured(game, nsfwAllowed) {
  let result = null != game;
  if (result) {
    result = false === nsfwAllowed;
  }
  if (result) {
    result = require(7004) /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(game.contentClassification);
    const obj = require(7004) /* isAgeRestrictedContentClassification */;
  }
  return result;
};