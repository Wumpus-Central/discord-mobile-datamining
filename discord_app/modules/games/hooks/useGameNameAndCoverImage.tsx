// discord_app/modules/games/hooks/useGameNameAndCoverImage.tsx
import useGame from "useGame.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, size) {
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
    name = arg1;
  }
  if (name == null) {
    const intl = tmp(1114).intl;
    name = intl.string(tmp(1114).t.GIWFlF);
  }
  obj.gameName = name;
  obj.isLoading = game.isLoading;
  return obj;
}
