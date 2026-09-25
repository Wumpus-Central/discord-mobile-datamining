// === Module 8376: useGameNameAndCoverImage ===

// Module 8376 (useGameNameAndCoverImage)
import util from "util" /* 1115 */;
import useGame from "useGame" /* 6722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, intl, size) {
  const game = useGame.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(size);
  }
  const obj2 = { coverImageUrl: coverURL, gameName: null, isLoading: null };
  let name;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = intl;
  }
  if (name == null) {
    intl = util.intl;
    name = intl.string(util.t.GIWFlF);
  }
  obj2.gameName = name;
  obj2.isLoading = game.isLoading;
  return obj2;
};