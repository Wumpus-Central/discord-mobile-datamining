// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import PrivateChannelSortStore from "../../../../../stores/views/PrivateChannelSortStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let _slicedToArray = _slicedToArray_mod;
const MessagesDataHeader = { HappeningNow: 0, [0]: "HappeningNow", EmptyState: 1, [1]: "EmptyState" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx");

export default function useMessagesData() {
  let channelFavorites;
  let connected;
  let friendSuggestions;
  let length;
  let numFriendSuggestions;
  let stateFromStores;
  let tmp2 = channelFavorites;
  let obj = connected(channelFavorites[6]);
  let items = [numFriendSuggestions, friendSuggestions];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {
      connected: null != numFriendSuggestions.getSessionId(),
      connectedToGateway: friendSuggestions.isConnected(),
    };
    return obj;
  });
  connected = stateFromStoresObject.connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  const items1 = [stateFromStores];
  const obj2 = connected(channelFavorites[6]);
  const tmp4 = _slicedToArray(
    obj2.useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels()),
    2,
  );
  channelFavorites = tmp4[0];
  _slicedToArray = tmp6;
  let tmp8 = connected;
  const tmp7 = connectedToGateway(channelFavorites[7]);
  if (connected) {
    tmp8 = connectedToGateway;
  }
  const tmp7Result = tmp7({ location: "Messages Tab", isConnected: tmp8 });
  const setAdded = tmp7Result.setAdded;
  friendSuggestions = tmp7Result.friendSuggestions;
  numFriendSuggestions = tmp7Result.numFriendSuggestions;
  const HappeningNowCardsDisabled = tmp(tmp2[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  const items2 = [setting];
  const tmpResult = connected(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(items2, () => setting.getFriendCount());
  const ref = setAdded.useRef(-1);
  const items3 = [
    connected,
    connectedToGateway,
    channelFavorites,
    tmp4[1],
    numFriendSuggestions,
    friendSuggestions,
    setting,
    stateFromStores,
    setAdded,
  ];
  return setAdded.useMemo(() => {
    let EmptyState;
    let bound;
    let combined;
    let obj;
    if (-1 === ref.current) {
      ref.current = 0;
    } else {
      const tmp2 = connected && connectedToGateway;
      if (tmp2) {
        ref.current = ref.current + 1;
      }
    }
    if (numFriendSuggestions <= 0) {
      let num3;
      if (channelFavorites.length + length.length > 0) {
        num3 = 0;
      } else {
        num3 = 15;
      }
      bound = num3;
    } else {
      const _Math = Math;
      bound = Math.min(tmp4, 5);
    }
    const items = [];
    items.push(channelFavorites.length);
    items.push(length.length);
    let num4 = 0;
    const push = items.push;
    if (numFriendSuggestions > 0) {
      num4 = 1;
    }
    push(num4);
    let num5 = 0;
    const push2 = items.push;
    if (numFriendSuggestions > 0) {
      num5 = 0;
      if (connected) {
        num5 = 0;
        if (connectedToGateway) {
          num5 = friendSuggestions.length;
        }
      }
    }
    push2(num5);
    items.push(bound);
    if (channelFavorites.length + length.length > 0) {
      let HappeningNow = null;
      if (!setting) {
        HappeningNow = obj.HappeningNow;
      }
      EmptyState = HappeningNow;
    } else {
      EmptyState = null;
      if (numFriendSuggestions > 0) {
        EmptyState = obj.EmptyState;
      }
    }
    obj = {
      channels: length,
      channelFavorites,
      dataKey: combined,
      showFullscreenEmptyState: channelFavorites.length + length.length <= 0 && connected && numFriendSuggestions <= 0,
      setAddedFriendSuggestions: setAdded,
      friendSuggestions,
      renderHeader: EmptyState,
      renderFooter: tmp26,
      sections: items,
    };
    combined = null;
    if (ref.current > 0) {
      const _HermesInternal = HermesInternal;
      combined = "" + ref.current;
    }
    return obj;
  }, items3);
}
export const MessagesDataSections = {
  FavoriteChannels: 0,
  [0]: "FavoriteChannels",
  Channels: 1,
  [1]: "Channels",
  Separator: 2,
  [2]: "Separator",
  SuggestedFriends: 3,
  [3]: "SuggestedFriends",
  Placeholders: 4,
  [4]: "Placeholders",
};
export { MessagesDataHeader };
