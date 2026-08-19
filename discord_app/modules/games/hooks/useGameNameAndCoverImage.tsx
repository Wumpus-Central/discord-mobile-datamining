// discord_app/modules/games/hooks/useGameNameAndCoverImage.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import importDefaultResult1 from "useGame.tsx";

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