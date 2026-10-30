// discord_app/modules/games/hooks/useGameNameAndCoverImage.tsx
import util from "../../../intl/index.native.tsx";
import useGame from "useGame.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, intl, imageSize) {
  let num = imageSize;
  const game = useGame.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(num);
  }
  if (coverURL == null) {
    coverURL = null;
  }
  const obj2 = { coverImageUrl: coverURL, iconImageUrl: null, gameName: null, hasGameData: null, isLoading: null };
  let iconURL;
  if (data != null) {
    if (num == null) {
      num = 256;
    }
    iconURL = data.getIconURL(num);
  }
  if (iconURL == null) {
    iconURL = null;
  }
  obj2.iconImageUrl = iconURL;
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
  obj2.hasGameData = null != data;
  obj2.isLoading = game.isLoading;
  return obj2;
}
