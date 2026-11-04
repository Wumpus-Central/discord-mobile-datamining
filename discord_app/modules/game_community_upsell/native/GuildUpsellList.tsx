// === Module 18594: GuildUpsellList ===

// Module 18594 (GuildUpsellList)
import nativeDefault from "native" /* 575 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 18595 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 17872 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
const createStyles = fn(5141);
let obj2 = { hidden: { opacity: 0 }, gridItem: { flex: 1 }, leftColumn: { paddingRight: nativeDefault.space.PX_8 }, rightColumn: null };
let obj3 = { paddingRight: nativeDefault.space.PX_8 };
obj2.rightColumn = { paddingLeft: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellList.tsx");

export function GuildUpsellList(numColumns) {
  numColumns = numColumns.numColumns;
  const suggestedGuilds = numColumns.suggestedGuilds;
  const onDismiss = numColumns.onDismiss;
  let first;
  ({ contentContainerStyle, subheader } = numColumns);
  let tmp = closure_11();
  asyncGeneratorStep = tmp;
  const callback = first.useCallback((id) => id.id, []);
  const ref = first.useRef(null);
  first = ref(first.useState(() => obj), 1)[0];
  const tmp5 = ref(first.useState(() => first.offset > 0), 2);
  const first1 = tmp5[0];
  const guildGameIds = tmp5[1];
  items = [first1, numColumns];
  const callback1 = first.useCallback((nativeEvent) => {
    if (!first1) {
      const _Math = Math;
      const bound = Math.max(0, nativeEvent.nativeEvent.contentOffset.y);
      const current = ref.current;
      let num2;
      if (current != null) {
        num2 = current.getFirstVisibleIndex();
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj = { offset: bound, index: num2, isInHeader: null, numColumns: null };
      let tmp6 = num2 < 0;
      if (!tmp6) {
        const current2 = ref.current;
        let num3;
        if (current2 != null) {
          num3 = current2.getFirstItemOffset();
        }
        if (num3 == null) {
          num3 = 0;
        }
        tmp6 = bound < num3;
      }
      obj.isInHeader = tmp6;
      obj.numColumns = numColumns;
    }
  }, items);
  const items1 = [first1, first, numColumns, suggestedGuilds.length];
  const items2 = [first1];
  const callback2 = first.useCallback(asyncGeneratorStep(async () => {
    closure_0 = tmp2;
    if (first1) {
      if (first.numColumns !== numColumns) {
        if (!first.isInHeader) {
          if (suggestedGuilds.length > 0) {
            let current = ref.current;
            let scrollToIndexResult;
            if (current != null) {
              const obj4 = { index: null, animated: false };
              let _Math = Math;
              const _Math2 = Math;
              obj4.index = Math.max(0, Math.min(first.index, arr.length - 1));
              scrollToIndexResult = current.scrollToIndex(obj4);
            }
            c1 = 1;
            c2 = 1;
            return { value: scrollToIndexResult, done: false };
          }
        }
      }
      function restoreOffset() {
        const current = ref.current;
        if (current != null) {
          const firstItemOffset = current.getFirstItemOffset();
        }
        if (numColumns.numColumns !== restoreOffset) {
          if (numColumns.isInHeader) {
            if (null != firstItemOffset) {
              if (firstItemOffset > 0) {
                const _Math = Math;
                let offset = Math.min(numColumns.offset, firstItemOffset);
              }
              const current2 = ref.current;
              if (current2 != null) {
                obj = { offset, animated: false };
                current2.scrollToOffset(obj);
              }
            }
          }
        }
        offset = numColumns.offset;
      }
      restoreOffset();
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (typeof restoreOffset === "function") {
          const current = ref.current;
          if (current != null) {
            const firstItemOffset = current.getFirstItemOffset();
          }
          if (numColumns.numColumns !== closure_0) {
            if (numColumns.isInHeader) {
              if (null != firstItemOffset) {
                if (firstItemOffset > 0) {
                  const _Math = Math;
                  let offset = Math.min(numColumns.offset, firstItemOffset);
                }
                const current2 = ref.current;
                if (current2 != null) {
                  obj = { offset, animated: false };
                  current2.scrollToOffset(obj);
                }
                guildGameIds(false);
              }
            }
          }
          offset = numColumns.offset;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
    await "HermesInternal";
    closure_128_7(false);
  }), items1);
  const effect = first.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => guildGameIds(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items2);
  const items3 = [guildGameIds];
  const stateFromStoresObject = numColumns(onDismiss[11]).useStateFromStoresObject(items3, () => guildGameIds.getGuildGameIds());
  obj = numColumns(onDismiss[11]);
  const analyticsLocations = suggestedGuilds(onDismiss[12])(suggestedGuilds(onDismiss[13]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items4 = [onDismiss, stateFromStoresObject, numColumns, tmp];
  closure_129_0 = stateFromStoresObject;
  closure_129_1 = analyticsLocations;
  const callback3 = first.useCallback((item) => {
    item = item.item;
    let tmp = null;
    obj = { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: null };
    if (tmp2) {
      tmp = onDismiss;
    }
    obj.onDismiss = tmp;
    const tmp3Result = jsx(GameCommunityMultiGuildUpsellCardDefault, { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: null }, item.id);
    if (1 === numColumns) {
      return tmp3Result;
    } else {
      items = [gridItem.gridItem, ];
      const obj2 = { style: null, children: null };
      items[1] = item.index % 2 === 0 ? obj2.leftColumn : obj2.rightColumn;
      obj2.style = items;
      obj2.children = tmp3Result;
      <View style={null}>{null}</View>;
      const tmp6 = item.index % 2 === 0 ? obj2.leftColumn : obj2.rightColumn;
    }
    tmp2 = null != stateFromStoresObject[item.id];
  }, items4);
  const tmp11 = suggestedGuilds(onDismiss[12]);
  closure_129_2 = first.useRef(new Set());
  const set = new Set();
  const focusEffect = numColumns(onDismiss[10]).useFocusEffect(first.useCallback(() => {
    const current = onDismiss.current;
    current.clear();
  }, []));
  const items5 = [stateFromStoresObject, analyticsLocations];
  const callback4 = first.useCallback((viewableItems) => {
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
          const obj2 = { type: numColumns(onDismiss[9]).ImpressionTypes.PANE, name: numColumns(onDismiss[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: null };
          const obj3 = { game_id: closure_1_0[item.id], guild_id: item.id, location_stack };
          obj2.properties = obj3;
          numColumns(onDismiss[8]).trackImpression(obj2);
          obj = numColumns(onDismiss[8]);
        }
      }
    });
  }, items5);
  let obj3 = { numColumns, ref, style: null, onViewableItemsChanged: null, viewabilityConfig: null, contentContainerStyle: null, keyExtractor: null, data: null, ListHeaderComponent: null, renderItem: null, drawDistance: 3000, onScroll: null, scrollEventThrottle: 16, onLoad: null };
  let hidden;
  if (first1) {
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
  return stateFromStoresObject(numColumns(onDismiss[15]).FlashList, obj3);
}