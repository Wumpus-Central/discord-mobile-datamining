// === Module 12235: useGameNameAndCoverImage ===

// Module 12235 (useGameNameAndCoverImage)
import set from "set" /* 2 */;
import importDefaultResult1 from "importDefaultResult1" /* 5383 */;

const result = set.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

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
    const intl = tmp(1236).intl;
    name = intl.string(tmp(1236).t.GIWFlF);
  }
  obj[1] = name;
  obj[2] = game.isLoading;
  return obj;
};