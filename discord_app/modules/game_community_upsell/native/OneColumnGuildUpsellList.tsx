// discord_app/modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = function OneColumnGuildUpsellList(cardAction) {
  cardAction = cardAction.cardAction;
  const onDismiss = cardAction.onDismiss;
  let first;
  noop = undefined;
  let stateFromStoresObject;
  ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
  const callback = noop.useCallback((id) => id.id, []);
  const ref = noop.useRef(null);
  const tmp4 = first(
    noop.useState(() => closure_8 > 0),
    2,
  );
  first = tmp4[0];
  noop = tmp4[1];
  const items = [first];
  const callback1 = noop.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = noop.useCallback(() => {
    if (first) {
      const offset = closure_8;
      let current = ref.current;
      if (current != null) {
        let obj = { offset: tmp, animated: false };
        current.scrollToOffset(obj);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { offset, animated: false };
          current.scrollToOffset(obj);
        }
        closure_4(false);
      });
    }
  }, items);
  const effect = noop.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_4(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let obj = cardAction(ref[8]);
  const items2 = [stateFromStoresObject];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
  let tmp = closure_9();
  const analyticsLocations = onDismiss(ref[9])(
    onDismiss(ref[10]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT,
  ).analyticsLocations;
  const items3 = [onDismiss, stateFromStoresObject, cardAction];
  closure_129_0 = stateFromStoresObject;
  closure_129_1 = analyticsLocations;
  const callback3 = noop.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: null };
    if (tmp2) {
      tmp = onDismiss;
    }
    obj.onDismiss = tmp;
    return jsx(
      GameCommunityMultiGuildUpsellCardDefault,
      { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: null },
      item.id,
    );
  }, items3);
  const tmp10 = onDismiss(ref[9]);
  closure_129_2 = noop.useRef(new Set());
  const set = new Set();
  const focusEffect = cardAction(ref[7]).useFocusEffect(
    noop.useCallback(() => {
      const current = ref.current;
      current.clear();
    }, []),
  );
  const items4 = [stateFromStoresObject, analyticsLocations];
  const callback4 = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      item = item.item;
      if (null != item) {
        let hasItem = null == item.id;
        if (!hasItem) {
          const current = ref.current;
          hasItem = current.has(item.id);
        }
        if (!hasItem) {
          const current2 = ref.current;
          current2.add(item.id);
          cardAction(ref[5]);
          let obj = {
            type: cardAction(ref[6]).ImpressionTypes.PANE,
            name: cardAction(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
            properties: null,
          };
          obj = { game_id: closure_1_0[item.id], guild_id: item.id, location_stack };
          obj.properties = obj;
          obj.trackImpression(obj);
        }
      }
    });
  }, items4);
  obj = {
    ref,
    style: null,
    onViewableItemsChanged: null,
    viewabilityConfig: null,
    contentContainerStyle: null,
    keyExtractor: null,
    data: null,
    ListHeaderComponent: null,
    renderItem: null,
    drawDistance: 3000,
    onScroll: null,
    scrollEventThrottle: 16,
    onLoad: null,
  };
  let hidden;
  if (first) {
    hidden = tmp.hidden;
  }
  obj.style = hidden;
  obj.onViewableItemsChanged = callback4;
  obj.viewabilityConfig = viewabilityConfig;
  obj.contentContainerStyle = contentContainerStyle;
  obj.keyExtractor = callback;
  obj.data = suggestedGuilds;
  obj.ListHeaderComponent = subheader;
  obj.renderItem = callback3;
  obj.onScroll = callback1;
  obj.onLoad = callback2;
  return jsx(cardAction(ref[12]).FlashList, {
    ref,
    style: null,
    onViewableItemsChanged: null,
    viewabilityConfig: null,
    contentContainerStyle: null,
    keyExtractor: null,
    data: null,
    ListHeaderComponent: null,
    renderItem: null,
    drawDistance: 3000,
    onScroll: null,
    scrollEventThrottle: 16,
    onLoad: null,
  });
};
