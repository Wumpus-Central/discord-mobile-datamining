// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import PrivateChannelSortStore from "../../../../../stores/views/PrivateChannelSortStore.tsx";

const require = fn;
const MessagesDataHeader = { HappeningNow: 0, [0]: "HappeningNow", EmptyState: 1, [1]: "EmptyState" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx");

export default function useMessagesData() {
  items = [numFriendSuggestions, friendSuggestions];
  const stateFromStoresObject = connected(channelFavorites[6]).useStateFromStoresObject(items, () => ({
    connected: null != numFriendSuggestions.getSessionId(),
    connectedToGateway: friendSuggestions.isConnected(),
  }));
  connected = stateFromStoresObject.connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  let obj = connected(channelFavorites[6]);
  const items1 = [stateFromStores];
  const tmp4 = _slicedToArray(
    connected(channelFavorites[6]).useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels()),
    2,
  );
  channelFavorites = tmp4[0];
  _slicedToArray = tmp6;
  let tmp8 = connected;
  const obj2 = connected(channelFavorites[6]);
  if (connected) {
    tmp8 = connectedToGateway;
  }
  const tmp7Result = connectedToGateway(channelFavorites[7])({ location: "Messages Tab", isConnected: tmp8 });
  const setAdded = tmp7Result.setAdded;
  friendSuggestions = tmp7Result.friendSuggestions;
  numFriendSuggestions = tmp7Result.numFriendSuggestions;
  const HappeningNowCardsDisabled = tmp(tmp2[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  const tmp7 = connectedToGateway(channelFavorites[7]);
  const items2 = [setting];
  stateFromStores = connected(channelFavorites[6]).useStateFromStores(items2, () => setting.getFriendCount());
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
    if (numFriendSuggestions <= 0) {
      if (tmp) {
        let num2 = 0;
      } else {
        num2 = 15;
      }
      let bound = num2;
    } else {
      const _Math = Math;
      bound = Math.min(tmp2, 5);
    }
    items = [];
    items.push(channelFavorites.length);
    items.push(length.length);
    let num3 = 0;
    if (numFriendSuggestions > 0) {
      num3 = 1;
    }
    items.push(num3);
    let num4 = 0;
    if (numFriendSuggestions > 0) {
      num4 = 0;
      if (connected) {
        num4 = 0;
        if (connectedToGateway) {
          num4 = friendSuggestions.length;
        }
      }
    }
    items.push(num4);
    items.push(bound);
    if (channelFavorites.length + length.length > 0) {
      let HappeningNow = null;
      if (!setting) {
        HappeningNow = obj.HappeningNow;
      }
      let EmptyState = HappeningNow;
    } else {
      EmptyState = null;
      if (tmp3) {
        EmptyState = obj.EmptyState;
      }
    }
    obj = {
      channels: length,
      channelFavorites,
      showFullscreenEmptyState: null,
      setAddedFriendSuggestions: null,
      friendSuggestions: null,
      renderHeader: null,
      renderFooter: null,
      sections: null,
    };
    let tmp22 = !tmp;
    if (channelFavorites.length + length.length <= 0) {
      tmp22 = connected;
    }
    if (tmp22) {
      tmp22 = !tmp3;
    }
    obj.showFullscreenEmptyState = tmp22;
    obj.setAddedFriendSuggestions = setAdded;
    obj.friendSuggestions = friendSuggestions;
    obj.renderHeader = EmptyState;
    let tmp23 = connected;
    if (connected) {
      tmp23 = stateFromStores < 4;
    }
    if (tmp23) {
      tmp23 = tmp;
    }
    if (!tmp23) {
      tmp23 = tmp3;
    }
    obj.renderFooter = tmp23;
    obj.sections = items;
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
