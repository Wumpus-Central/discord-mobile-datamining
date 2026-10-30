// === Module 13958: usePendingGameProfileReturn ===

// Module 13958 (usePendingGameProfileReturn)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2015 */;
import GameProfileStore from "GameProfileStore" /* 9302 */;

require = fn;
const AVATAR_SIZE = fn(1072).AVATAR_SIZE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  _slicedToArray = undefined;
  let stateFromStores1;
  const items = [GameProfileStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
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
  const tmp4 = _slicedToArray(stateFromStores1.useState(null), 2);
  dependencyMap = tmp4[1];
  _slicedToArray = tmp5;
  const items1 = [stateFromStores, null != stateFromStores && tmp4[0] === stateFromStores];
  const callback = obj2.useCallback(() => {
    if (!tmp2) {
      closure_2(stateFromStores);
      const obj3 = { gameId: null, source: null, initialScrollOffset: null, initialTab: null };
      ({ gameId: obj2.gameId, source } = stateFromStores);
      if (source == null) {
        source = GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn;
      }
      obj3.source = source;
      ({ initialScrollOffset: obj2.initialScrollOffset, tab: obj2.initialTab } = stateFromStores);
      GameProfileActionCreatorsDefault.returnToGameProfile(obj3);
    }
    tmp2 = null == stateFromStores || closure_3;
  }, items1);
  let obj = channelId(504);
  const items2 = [GameStore];
  stateFromStores1 = channelId(504).useStateFromStores(items2, () => {
    let gameId;
    if (stateFromStores != null) {
      gameId = stateFromStores.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = GameStore.getGame(stateFromStores.gameId);
    }
    return game;
  });
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const items3 = [id];
  const effect = obj2.useEffect(() => {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return null != id ? (() => stateFromStores(closure_2[6]).clearGameProfilePendingReturn(id.id)) : undefined;
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
      let obj3 = { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, isReturning: tmp5, onReturnToGameProfile: callback };
      return obj3;
    }
  }
  return null;
};