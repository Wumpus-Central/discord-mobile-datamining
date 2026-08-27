// === Module 15770: OneColumnGuildUpsellList ===

// Module 15770 (OneColumnGuildUpsellList)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "set" /* 15311 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let closure_7 = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
let closure_9 = createCacheKey.createStyles({ hidden: { opacity: 0 } });
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = function OneColumnGuildUpsellList(cardAction) {
  cardAction = cardAction.cardAction;
  let stateFromStoresObject = cardAction;
  const onDismiss = cardAction.onDismiss;
  let analyticsLocations = onDismiss;
  dependencyMap = undefined;
  let first;
  let React;
  stateFromStoresObject = undefined;
  ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
  const callback = React.useCallback((id) => id.id, []);
  const ref = React.useRef(null);
  dependencyMap = ref;
  const tmp4 = first(React.useState(() => closure_8 > 0), 2);
  first = tmp4[0];
  React = tmp4[1];
  const items = [first];
  const callback1 = React.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = React.useCallback(() => {
    if (first) {
      closure_0 = closure_1_8;
      let current = ref.current;
      if (current != null) {
        let obj = { offset: null, animated: false };
        obj[0] = tmp;
        current.scrollToOffset(obj);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = closure_1_2.current;
        if (current != null) {
          const obj = { offset: null, animated: false };
          obj[0] = closure_0;
          current.scrollToOffset(obj);
        }
        closure_1_4(false);
      });
    }
  }, items);
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let obj = stateFromStoresObject(589);
  const items2 = [stateFromStoresObject];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
  let tmp = callback();
  analyticsLocations = analyticsLocations(5905)(analyticsLocations(5925).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items3 = [onDismiss, stateFromStoresObject, cardAction];
  dependencyMap = undefined;
  const callback3 = React.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], cardAction: stateFromStoresObject, onDismiss: null };
    if (tmp2) {
      tmp = analyticsLocations;
    }
    obj[3] = tmp;
    return closure_1_6(analyticsLocations(ref[11]), obj, item.id);
  }, items3);
  const tmp10 = analyticsLocations(5905);
  dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = stateFromStoresObject(1501).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items4 = [stateFromStoresObject, analyticsLocations];
  const callback4 = React.useCallback((viewableItems) => {
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
          let obj = closure_1_0(closure_1_2[5]);
          obj = { type: null, name: null, properties: null };
          obj[0] = closure_1_0(closure_1_2[6]).ImpressionTypes.PANE;
          obj[1] = closure_1_0(closure_1_2[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
          obj = { game_id: null, guild_id: null, location_stack: null };
          obj[0] = table[item.id];
          obj[1] = item.id;
          obj[2] = closure_1;
          obj[2] = obj;
          obj.trackImpression(obj);
        }
      }
    });
  }, items4);
  obj = { ref, style: null, onViewableItemsChanged: null, viewabilityConfig: null, contentContainerStyle: null, keyExtractor: null, data: null, ListHeaderComponent: null, renderItem: null, drawDistance: 3000, onScroll: null, scrollEventThrottle: 16, onLoad: null };
  let hidden;
  if (first) {
    hidden = tmp.hidden;
  }
  obj[1] = hidden;
  obj[2] = callback4;
  obj[3] = closure_7;
  obj[4] = contentContainerStyle;
  obj[5] = callback;
  obj[6] = suggestedGuilds;
  obj[7] = subheader;
  obj[8] = callback3;
  obj[10] = callback1;
  obj[12] = callback2;
  return jsx(stateFromStoresObject(8037).FlashList, { ref, style: null, onViewableItemsChanged: null, viewabilityConfig: null, contentContainerStyle: null, keyExtractor: null, data: null, ListHeaderComponent: null, renderItem: null, drawDistance: 3000, onScroll: null, scrollEventThrottle: 16, onLoad: null });
};