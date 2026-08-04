// discord_app/modules/game_profile/hooks/usePendingGameProfileReturn.tsx
import noop from "noop";
import map from "map";
import getSimilarGames from "getSimilarGames";
import { AVATAR_SIZE } from "ME";

const require = arg1;
const result = require("getSimilarGames").fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let stateFromStores1;
  let obj = channelId(stateFromStores1[4]);
  const items = [getSimilarGames];
  stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = outer1_5.getPendingReturn();
    let tmp2 = null;
    if (null != pendingReturn) {
      tmp2 = null;
      if (pendingReturn.channelId === channelId) {
        tmp2 = pendingReturn;
      }
    }
    return tmp2;
  });
  const items1 = [stateFromStores];
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(stateFromStores1[5]);
      obj = { gameId: null, source: null, initialScrollOffset: null };
      obj[0] = tmp.gameId;
      obj[1] = channelId(stateFromStores1[6]).GameProfileSources.AnnouncementChannelReturn;
      obj[2] = tmp.initialScrollOffset;
      obj.returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [map];
  stateFromStores1 = channelId(stateFromStores1[4]).useStateFromStores(items2, () => {
    let gameId;
    if (stateFromStores != null) {
      gameId = tmp.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = outer1_4.getGame(tmp.gameId);
    }
    return game;
  });
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const items3 = [id];
  const effect = React.useEffect(() => {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return null != id ? (() => outer1_1(outer1_2[5]).clearGameProfilePendingReturn(id.id)) : undefined;
  }, items3);
  if (stateFromStores1 != null) {
    const name = stateFromStores1.name;
  }
  if (null != stateFromStores1) {
    if (null != name) {
      let iconURL;
      if (stateFromStores1 != null) {
        iconURL = stateFromStores1.getIconURL(AVATAR_SIZE);
      }
      obj = { gameId: null, gameName: null, gameIconUrl: null, onReturnToGameProfile: null };
      obj[0] = stateFromStores1.id;
      obj[1] = name;
      obj[2] = iconURL;
      obj[3] = callback;
      return obj;
    }
  }
  return null;
};