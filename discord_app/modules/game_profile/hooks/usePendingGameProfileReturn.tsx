// === Module 11603: usePendingGameProfileReturn ===

// Module 11603 (usePendingGameProfileReturn)
import noop from "noop" /* 19 */;
import handleLoadMessages from "handleLoadMessages" /* 4505 */;
import getSimilarGames from "getSimilarGames" /* 9098 */;
import { AVATAR_SIZE } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  let obj = channelId(stateFromStores1[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = closure_1_5.getPendingReturn();
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
      stateFromStores(stateFromStores1[5]);
      const obj = { gameId: null, source: null, initialScrollOffset: null };
      obj[0] = stateFromStores.gameId;
      obj[1] = channelId(stateFromStores1[6]).GameProfileSources.AnnouncementChannelReturn;
      obj[2] = stateFromStores.initialScrollOffset;
      obj.returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [closure_4];
  stateFromStores1 = channelId(stateFromStores1[4]).useStateFromStores(items2, () => {
    let gameId;
    if (stateFromStores != null) {
      gameId = stateFromStores.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = closure_1_4.getGame(stateFromStores.gameId);
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
    return null != id ? (() => stateFromStores(stateFromStores1[5]).clearGameProfilePendingReturn(id.id)) : undefined;
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