// === Module 10396: GameProfileVisibilityUtils ===

// Module 10396 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 9313 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 10392 */;
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