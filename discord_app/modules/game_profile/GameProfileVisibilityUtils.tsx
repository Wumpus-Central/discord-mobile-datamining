// === Module 14049: GameProfileVisibilityUtils ===

// Module 14049 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 7050 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 8605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/GameProfileVisibilityUtils.tsx");

export function isGameDisplayable(item, nsfwAllowed) {
  let gameIsAcceptableResult = null != item;
  if (gameIsAcceptableResult) {
    gameIsAcceptableResult = useShouldOpenGameProfileModal.gameIsAcceptable(item);
  }
  if (gameIsAcceptableResult) {
    gameIsAcceptableResult = !useGameProfileObscured.isGameProfileObscured(item, nsfwAllowed);
  }
  return gameIsAcceptableResult;
}