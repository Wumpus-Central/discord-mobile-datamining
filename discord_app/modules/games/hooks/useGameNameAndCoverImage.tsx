// === Module 8920: useGameNameAndCoverImage ===

// Module 8920 (useGameNameAndCoverImage)
import util from "util" /* 1114 */;
import useGame from "useGame" /* 7309 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, intl, size) {
  let obj = useGame;
  const game = obj.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(size);
  }
  obj = { coverImageUrl: coverURL, gameName: null, isLoading: null };
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
  obj.gameName = name;
  obj.isLoading = game.isLoading;
  return obj;
};