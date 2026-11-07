// === Module 9673: GameProfileVisibilityUtils ===

// Module 9673 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8753 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9398 */;
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