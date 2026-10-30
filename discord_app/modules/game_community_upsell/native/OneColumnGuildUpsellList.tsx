// discord_app/modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
const createStyles = fn(5009);
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export function OneColumnGuildUpsellList(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  first = undefined;
  _slicedToArray = undefined;
  let stateFromStoresObject;
  ({ suggestedGuilds, contentContainerStyle, subheader } = onDismiss);
  const callback = stateFromStoresObject.useCallback((id) => id.id, []);
  const ref = stateFromStoresObject.useRef(null);
  [first, _slicedToArray] = stateFromStoresObject.useState(() => closure_8 > 0);
  const items = [first];
  const callback1 = stateFromStoresObject.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = stateFromStoresObject.useCallback(() => {
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
        closure_3(false);
      });
    }
  }, items);
  const effect = stateFromStoresObject.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_3(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let tmp = closure_9();
  const items2 = [MobileGameCommunitiesStore];
  stateFromStoresObject = onDismiss(first[8]).useStateFromStoresObject(items2, () => guildGameIds.getGuildGameIds());
  let obj = onDismiss(first[8]);
  const analyticsLocations = ref(first[9])(
    ref(first[10]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT,
  ).analyticsLocations;
  const items3 = [onDismiss, stateFromStoresObject];
  closure_129_0 = stateFromStoresObject;
  closure_129_1 = analyticsLocations;
  const callback3 = stateFromStoresObject.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: null };
    if (tmp2) {
      tmp = onDismiss;
    }
    obj.onDismiss = tmp;
    return jsx(
      GameCommunityMultiGuildUpsellCardDefault,
      { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: null },
      item.id,
    );
  }, items3);
  const tmp10 = ref(first[9]);
  closure_129_2 = stateFromStoresObject.useRef(new Set());
  const set = new Set();
  const focusEffect = onDismiss(first[7]).useFocusEffect(
    stateFromStoresObject.useCallback(() => {
      const current = first.current;
      current.clear();
    }, []),
  );
  const items4 = [stateFromStoresObject, analyticsLocations];
  const callback4 = stateFromStoresObject.useCallback((viewableItems) => {
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
          const obj2 = {
            type: onDismiss(first[6]).ImpressionTypes.PANE,
            name: onDismiss(first[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
            properties: null,
          };
          const obj3 = { game_id: closure_1_0[item.id], guild_id: item.id, location_stack };
          obj2.properties = obj3;
          onDismiss(first[5]).trackImpression(obj2);
          const obj = onDismiss(first[5]);
        }
      }
    });
  }, items4);
  let obj3 = {
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
  obj3.style = hidden;
  obj3.onViewableItemsChanged = callback4;
  obj3.viewabilityConfig = viewabilityConfig;
  obj3.contentContainerStyle = contentContainerStyle;
  obj3.keyExtractor = callback;
  obj3.data = suggestedGuilds;
  obj3.ListHeaderComponent = subheader;
  obj3.renderItem = callback3;
  obj3.onScroll = callback1;
  obj3.onLoad = callback2;
  return jsx(onDismiss(first[12]).FlashList, {
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
}
