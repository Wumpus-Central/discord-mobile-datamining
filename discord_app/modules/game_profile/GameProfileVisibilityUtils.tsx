// === Module 9902: GameProfileVisibilityUtils ===

// Module 9902 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8827 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9766 */;
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