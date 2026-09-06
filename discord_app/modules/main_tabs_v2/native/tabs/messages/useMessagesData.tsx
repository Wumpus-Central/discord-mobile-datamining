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
  let items = [numFriendSuggestions, friendSuggestions];
  const stateFromStoresObject = connected(first[6]).useStateFromStoresObject(items, () => ({
    connected: null != numFriendSuggestions.getSessionId(),
    connectedToGateway: friendSuggestions.isConnected(),
  }));
  connected = stateFromStoresObject.connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  let obj = connected(first[6]);
  const items1 = [stateFromStores];
  const tmp4 = _slicedToArray(
    connected(first[6]).useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels()),
    2,
  );
  first = tmp4[0];
  _slicedToArray = tmp6;
  let tmp8 = connected;
  const obj2 = connected(first[6]);
  if (connected) {
    tmp8 = connectedToGateway;
  }
  const tmp7Result = connectedToGateway(first[7])({ location: "Messages Tab", isConnected: tmp8 });
  const setAdded = tmp7Result.setAdded;
  friendSuggestions = tmp7Result.friendSuggestions;
  numFriendSuggestions = tmp7Result.numFriendSuggestions;
  const HappeningNowCardsDisabled = tmp(tmp2[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  const tmp7 = connectedToGateway(first[7]);
  const items2 = [setting];
  stateFromStores = connected(first[6]).useStateFromStores(items2, () => setting.getFriendCount());
  setAdded.useRef(-1);
  const items3 = [
    connected,
    connectedToGateway,
    first,
    tmp4[1],
    numFriendSuggestions,
    friendSuggestions,
    setting,
    stateFromStores,
    setAdded,
  ];
  return setAdded.useMemo(() => {
    if (-1 === ref.current) {
      ref.current = 0;
    } else {
      let tmp2 = connected;
      if (connected) {
        tmp2 = connectedToGateway;
      }
      if (tmp2) {
        ref.current = ref.current + 1;
      }
    }
    let arr = first;
    let arr1 = length;
    if (numFriendSuggestions <= 0) {
      if (tmp3) {
        let num3 = 0;
      } else {
        num3 = 15;
      }
      let bound = num3;
    } else {
      const _Math = Math;
      bound = Math.min(tmp4, 5);
    }
    const items = [];
    items.push(arr.length);
    arr = items.push(arr1.length);
    let num4 = 0;
    if (numFriendSuggestions > 0) {
      num4 = 1;
    }
    arr1 = items.push(num4);
    let num5 = 0;
    if (numFriendSuggestions > 0) {
      num5 = 0;
      if (connected) {
        num5 = 0;
        if (connectedToGateway) {
          num5 = friendSuggestions.length;
        }
      }
    }
    items.push(num5);
    items.push(bound);
    if (first.length + length.length > 0) {
      let HappeningNow = null;
      if (!setting) {
        HappeningNow = obj.HappeningNow;
      }
      let EmptyState = HappeningNow;
    } else {
      EmptyState = null;
      if (tmp5) {
        EmptyState = obj.EmptyState;
      }
    }
    obj = {
      channels: arr1,
      channelFavorites: arr,
      dataKey: null,
      showFullscreenEmptyState: null,
      setAddedFriendSuggestions: null,
      friendSuggestions: null,
      renderHeader: null,
      renderFooter: null,
      sections: null,
    };
    let combined = null;
    if (ref.current > 0) {
      const _HermesInternal = HermesInternal;
      combined = "" + ref.current;
    }
    obj.dataKey = combined;
    let tmp26 = !tmp3;
    if (first.length + length.length <= 0) {
      tmp26 = connected;
    }
    if (tmp26) {
      tmp26 = !tmp5;
    }
    obj.showFullscreenEmptyState = tmp26;
    obj.setAddedFriendSuggestions = setAdded;
    obj.friendSuggestions = friendSuggestions;
    obj.renderHeader = EmptyState;
    let tmp27 = connected;
    if (connected) {
      tmp27 = stateFromStores < 4;
    }
    if (tmp27) {
      tmp27 = tmp3;
    }
    if (!tmp27) {
      tmp27 = tmp5;
    }
    obj.renderFooter = tmp27;
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
