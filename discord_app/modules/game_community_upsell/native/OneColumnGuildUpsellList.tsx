// === Module 16507: OneColumnGuildUpsellList ===

// Module 16507 (OneColumnGuildUpsellList)
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 16508 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15728 */;

const require = fn;
const jsx = fn(21).jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnViewableItemsChanged(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const set = new Set();
    cResult[0] = set;
    let first = set;
  } else {
    first = cResult[0];
  }
  dependencyMap = noop.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const current = ref.current;
      current.clear();
    };
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let obj = require("c");
  const focusEffect = require("Link").useFocusEffect(tmp9);
  if (cResult[2] === arg1) {
    if (cResult[3] === arg0) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const fn2 = function u(viewableItems) {
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
          const obj2 = { type: dependencyMap(ref[6]).ImpressionTypes.PANE, name: dependencyMap(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: null };
          const obj3 = { game_id: dependencyMap[item.id], guild_id: item.id, location_stack };
          obj2.properties = obj3;
          dependencyMap(ref[5]).trackImpression(obj2);
          const obj = dependencyMap(ref[5]);
        }
      }
    });
  };
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn2;
  tmp11 = fn2;
}) : (function useOnViewableItemsChanged(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = noop.useRef(new Set());
  const set = new Set();
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items = [arg0, arg1];
  return noop.useCallback((viewableItems) => {
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
          const obj2 = { type: dependencyMap(ref[6]).ImpressionTypes.PANE, name: dependencyMap(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: null };
          const obj3 = { game_id: dependencyMap[item.id], guild_id: item.id, location_stack };
          obj2.properties = obj3;
          dependencyMap(ref[5]).trackImpression(obj2);
          const obj = dependencyMap(ref[5]);
        }
      }
    });
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = ReactCompilerGating.isReactCompilerEnabled() ? (function OneColumnGuildUpsellList(onDismiss) {
  const cResult = cardAction(ref[8]).c(22);
  ({ suggestedGuilds, contentContainerStyle, subheader, cardAction } = onDismiss);
  onDismiss = onDismiss.onDismiss;
  closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(id) {
      return id.id;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ref = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_8 > 0;
      }
    }
    cResult[1] = E;
  } else {
    class E {
      constructor() {
        return closure_8 > 0;
      }
    }
  }
  const tmp8 = first1(noop.useState(E), 2);
  first1 = tmp8[0];
  noop = tmp8[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        closure_8 = onDismiss.nativeEvent.contentOffset.y;
        return;
      }
    }
    cResult[2] = O;
  } else {
    class O {
      constructor(arg0) {
        closure_8 = onDismiss.nativeEvent.contentOffset.y;
        return;
      }
    }
  }
  if (cResult[3] !== first1) {
    class A {
      constructor() {
        if (closure_3) {
          tmp = closure_2;
          current = closure_2.current;
          tmp2 = null;
          if (current != null) {
            obj = { offset: null, animated: false };
            tmp3 = c8;
            obj.offset = c8;
            scrollToOffsetResult = current.scrollToOffset(obj);
          }
          tmp5 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              const obj = { offset, animated: false };
              current.scrollToOffset(obj);
            }
            closure_1_4(false);
          });
        }
        return;
      }
    }
    cResult[3] = first1;
    cResult[4] = A;
  } else {
    class A {
      constructor() {
        if (closure_3) {
          tmp = closure_2;
          current = closure_2.current;
          tmp2 = null;
          if (current != null) {
            obj = { offset: null, animated: false };
            tmp3 = c8;
            obj.offset = c8;
            scrollToOffsetResult = current.scrollToOffset(obj);
          }
          tmp5 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              const obj = { offset, animated: false };
              current.scrollToOffset(obj);
            }
            closure_1_4(false);
          });
        }
        return;
      }
    }
  }
  if (cResult[5] !== first1) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items = [first1];
    cResult[5] = first1;
    cResult[6] = D;
    cResult[7] = items;
    let tmp13 = items;
  } else {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp13 = cResult[7];
  }
  const effect = obj2.useEffect(D, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [stateFromStoresObject];
    class N {
      constructor() {
        return closure_5.getGuildGameIds();
      }
    }
    cResult[8] = items1;
    cResult[9] = N;
    let tmp16 = N;
    const tmp15 = items1;
  } else {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp16 = cResult[9];
  }
  let obj = cardAction(ref[8]);
  stateFromStoresObject = cardAction(ref[10]).useStateFromStoresObject(tmp15, tmp16);
  onDismiss(ref[11]);
  if (cResult[10] === cardAction) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  class V {
    constructor(arg0) {
      item = onDismiss.item;
      tmp = null;
      tmp2 = null != closure_5[item.id];
      tmp3 = jsx;
      obj = { guild: item, gameId: closure_5[item.id], cardAction, onDismiss: null };
      tmp4 = closure_1(closure_2[13]);
      if (tmp2) {
        tmp = onDismiss;
      }
      obj.onDismiss = tmp;
      return tmp3(tmp4, obj, item.id);
    }
  }
  cResult[10] = cardAction;
  cResult[11] = stateFromStoresObject;
  cResult[12] = onDismiss;
  cResult[13] = V;
  const tmpResult = cardAction(ref[10]);
}) : (function OneColumnGuildUpsellList(cardAction) {
  cardAction = cardAction.cardAction;
  const onDismiss = cardAction.onDismiss;
  let first;
  noop = undefined;
  let stateFromStoresObject;
  ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
  const callback = noop.useCallback((id) => id.id, []);
  const ref = noop.useRef(null);
  const tmp4 = first(noop.useState(() => closure_8 > 0), 2);
  first = tmp4[0];
  noop = tmp4[1];
  const items = [first];
  const callback1 = noop.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = noop.useCallback(() => {
    if (first) {
      offset = closure_8;
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
  let tmp = closure_9();
  const items2 = [stateFromStoresObject];
  stateFromStoresObject = cardAction(ref[10]).useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
  let obj = cardAction(ref[10]);
  const items3 = [onDismiss, stateFromStoresObject, cardAction];
  const callback3 = noop.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: null };
    if (tmp2) {
      tmp = onDismiss;
    }
    obj.onDismiss = tmp;
    return jsx(GameCommunityMultiGuildUpsellCardDefault, { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: null }, item.id);
  }, items3);
  const tmp10 = onDismiss(ref[11]);
  const obj2 = { ref, style: null, onViewableItemsChanged: null, viewabilityConfig: null, contentContainerStyle: null, keyExtractor: null, data: null, ListHeaderComponent: null, renderItem: null, drawDistance: 3000, onScroll: null, scrollEventThrottle: 16, onLoad: null };
  let hidden;
  if (first) {
    hidden = tmp.hidden;
  }
  obj2.style = hidden;
  obj2.onViewableItemsChanged = closure_10(stateFromStoresObject, onDismiss(ref[11])(onDismiss(ref[12]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations);
  obj2.viewabilityConfig = viewabilityConfig;
  obj2.contentContainerStyle = contentContainerStyle;
  obj2.keyExtractor = callback;
  obj2.data = suggestedGuilds;
  obj2.ListHeaderComponent = subheader;
  obj2.renderItem = callback3;
  obj2.onScroll = callback1;
  obj2.onLoad = callback2;
  return jsx(cardAction(ref[14]).FlashList, { ref, style: null, onViewableItemsChanged: null, viewabilityConfig: null, contentContainerStyle: null, keyExtractor: null, data: null, ListHeaderComponent: null, renderItem: null, drawDistance: 3000, onScroll: null, scrollEventThrottle: 16, onLoad: null });
});