// === Module 9691: GameProfileVisibilityUtils ===

// Module 9691 (GameProfileVisibilityUtils)
import useGameProfileObscured from "useGameProfileObscured" /* 8774 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9416 */;
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