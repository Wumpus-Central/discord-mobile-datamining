// === Module 12183: useGameNameAndCoverImage ===

// Module 12183 (useGameNameAndCoverImage)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import importDefaultResult1 from "importDefaultResult1" /* 5378 */;

const result = obj132.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, size) {
  let obj = importDefaultResult1;
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
    name = arg1;
  }
  if (name == null) {
    const intl = getSystemLocale.intl;
    name = intl.string(getSystemLocale.t.GIWFlF);
  }
  obj[1] = name;
  obj[2] = game.isLoading;
  return obj;
};