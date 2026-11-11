// === Module 10398: GameProfileVisibilityUtils ===

// Module 10398 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9314 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10394 */;
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