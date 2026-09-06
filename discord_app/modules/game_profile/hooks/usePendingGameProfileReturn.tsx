// === Module 12435: usePendingGameProfileReturn ===

// Module 12435 (usePendingGameProfileReturn)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8680 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;
import GameProfileStore from "GameProfileStore" /* 8682 */;

require = fn;
const AVATAR_SIZE = fn(1074).AVATAR_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  let obj = channelId(stateFromStores1[4]);
  const items = [GameProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = GameProfileStore.getPendingReturn();
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
  const callback = noop.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { gameId: tmp.gameId, source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn, initialScrollOffset: tmp.initialScrollOffset };
      obj.returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [GameStore];
  stateFromStores1 = channelId(stateFromStores1[4]).useStateFromStores(items2, () => {
    let gameId;
    if (stateFromStores != null) {
      gameId = tmp.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = GameStore.getGame(tmp.gameId);
    }
    return game;
  });
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const items3 = [id];
  const effect = noop.useEffect(() => {
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
      obj = { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, onReturnToGameProfile: callback };
      return obj;
    }
  }
  return null;
};