// discord_app/modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
const createStyles = fn(5005);
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOnViewableItemsChanged(arg0, arg1) {
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
              const obj2 = {
                type: dependencyMap(ref[6]).ImpressionTypes.PANE,
                name: dependencyMap(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
                properties: null,
              };
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
    }
  : function useOnViewableItemsChanged(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      dependencyMap = noop.useRef(new Set());
      const set = new Set();
      const focusEffect = require("Link").useFocusEffect(
        noop.useCallback(() => {
          const current = ref.current;
          current.clear();
        }, []),
      );
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
              const obj2 = {
                type: dependencyMap(ref[6]).ImpressionTypes.PANE,
                name: dependencyMap(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
                properties: null,
              };
              const obj3 = { game_id: dependencyMap[item.id], guild_id: item.id, location_stack };
              obj2.properties = obj3;
              dependencyMap(ref[5]).trackImpression(obj2);
              const obj = dependencyMap(ref[5]);
            }
          }
        });
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = ReactCompilerGating.isReactCompilerEnabled()
  ? function OneColumnGuildUpsellList(arg0) {
      const cResult = onDismiss(first1[8]).c(21);
      ({ suggestedGuilds, contentContainerStyle, subheader, onDismiss } = arg0);
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
      const ref = stateFromStoresObject.useRef(null);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
        cResult[1] = S;
      } else {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
      }
      [first1, _slicedToArray] = stateFromStoresObject.useState(S);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
        cResult[2] = tmp11;
      } else {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
      }
      if (cResult[3] !== first1) {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
        cResult[3] = first1;
        cResult[4] = tmp13;
      } else {
        class S {
          constructor() {
            return closure_8 > 0;
          }
        }
      }
      if (cResult[5] !== first1) {
        class D {
          constructor() {
            if (closure_2) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 500;
              closure_0 = setTimeout(() => closure_1_3(false), 500);
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
        let tmp15 = items;
      } else {
        class D {
          constructor() {
            if (closure_2) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 500;
              closure_0 = setTimeout(() => closure_1_3(false), 500);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        tmp15 = cResult[7];
      }
      const effect = obj2.useEffect(D, tmp15);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            if (closure_2) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 500;
              closure_0 = setTimeout(() => closure_1_3(false), 500);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const items1 = [MobileGameCommunitiesStore];
        class A {
          constructor() {
            return closure_1_5.getGuildGameIds();
          }
        }
        cResult[8] = items1;
        cResult[9] = A;
        let tmp18 = A;
        const tmp17 = items1;
      } else {
        class D {
          constructor() {
            if (closure_2) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 500;
              closure_0 = setTimeout(() => closure_1_3(false), 500);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        tmp18 = cResult[9];
      }
      let obj = onDismiss(first1[8]);
      stateFromStoresObject = onDismiss(first1[10]).useStateFromStoresObject(tmp17, tmp18);
      ref(first1[11]);
      if (cResult[10] === stateFromStoresObject) {
        class D {
          constructor() {
            if (closure_2) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 500;
              closure_0 = setTimeout(() => closure_1_3(false), 500);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
        const tmp24 = closure_10(stateFromStoresObject, tmp21);
        class A {
          constructor() {
            return closure_1_5.getGuildGameIds();
          }
        }
        if (first1) {
          class D {
            constructor() {
              if (closure_2) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 500;
                closure_0 = setTimeout(() => closure_1_3(false), 500);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
        }
        if (cResult[13] === contentContainerStyle) {
          class D {
            constructor() {
              if (closure_2) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 500;
                closure_0 = setTimeout(() => closure_1_3(false), 500);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
        }
        const obj3 = {
          ref,
          style: tmp25,
          onViewableItemsChanged: tmp24,
          viewabilityConfig,
          contentContainerStyle,
          keyExtractor: first,
          data: suggestedGuilds,
          ListHeaderComponent: subheader,
          renderItem: P,
          drawDistance: 3000,
          onScroll: tmp11,
          scrollEventThrottle: 16,
          onLoad: tmp13,
        };
        const tmp29 = jsx(onDismiss(tmp2[14]).FlashList, {
          ref,
          style: tmp25,
          onViewableItemsChanged: tmp24,
          viewabilityConfig,
          contentContainerStyle,
          keyExtractor: first,
          data: suggestedGuilds,
          ListHeaderComponent: subheader,
          renderItem: P,
          drawDistance: 3000,
          onScroll: tmp11,
          scrollEventThrottle: 16,
          onLoad: tmp13,
        });
        cResult[13] = contentContainerStyle;
        cResult[14] = tmp13;
        cResult[15] = tmp24;
        cResult[16] = P;
        cResult[17] = subheader;
        cResult[18] = suggestedGuilds;
        cResult[19] = tmp25;
        cResult[20] = tmp29;
      }
      class P {
        constructor(arg0) {
          item = arg0.item;
          tmp = null;
          tmp2 = null != closure_4[item.id];
          tmp3 = jsx;
          obj = { guild: item, gameId: closure_4[item.id], onDismiss: null };
          tmp4 = closure_1(closure_2[13]);
          if (tmp2) {
            tmp = onDismiss;
          }
          obj.onDismiss = tmp;
          return tmp3(tmp4, obj, item.id);
        }
      }
      cResult[10] = stateFromStoresObject;
      cResult[11] = onDismiss;
      cResult[12] = P;
      const tmpResult = onDismiss(first1[10]);
    }
  : function OneColumnGuildUpsellList(onDismiss) {
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
      stateFromStoresObject = onDismiss(first[10]).useStateFromStoresObject(items2, () =>
        guildGameIds.getGuildGameIds(),
      );
      let obj = onDismiss(first[10]);
      const items3 = [onDismiss, stateFromStoresObject];
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
      const tmp10 = ref(first[11]);
      const obj2 = {
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
      obj2.style = hidden;
      obj2.onViewableItemsChanged = closure_10(
        stateFromStoresObject,
        ref(first[11])(ref(first[12]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations,
      );
      obj2.viewabilityConfig = viewabilityConfig;
      obj2.contentContainerStyle = contentContainerStyle;
      obj2.keyExtractor = callback;
      obj2.data = suggestedGuilds;
      obj2.ListHeaderComponent = subheader;
      obj2.renderItem = callback3;
      obj2.onScroll = callback1;
      obj2.onLoad = callback2;
      return jsx(onDismiss(first[14]).FlashList, {
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
