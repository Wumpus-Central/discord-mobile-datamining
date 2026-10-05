// discord_app/modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, num, offset, scrollToOffsetResult, set, tmp3, tmp6;

let react = react_mod;
const jsx = Fragment.jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1) {
      let closure_0;
      let first;
      let ref;
      let tmp7;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        cResult[0] = set;
        first = set;
      } else {
        first = cResult[0];
      }
      dependencyMap = react.useRef(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          const current = ref.current;
          current.clear();
        };
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = tmp(1491);
      const focusEffect = tmpResult.useFocusEffect(tmp7);
      if (cResult[2] === arg1) {
        let tmp9;
        if (cResult[3] === arg0) {
          tmp9 = cResult[4];
        }
        return tmp9;
      }
      const fn2 = function u(viewableItems) {
        let location_stack;
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((item) => {
          let obj2;
          item = item.item;
          if (null != item) {
            let hasItem = null == item.id;
            if (!hasItem) {
              const current = ref.current;
              hasItem = current.has(item.id);
            }
            if (!hasItem) {
              const current2 = ref.current;
              const tmp5 = closure_1_0[item.id];
              current2.add(item.id);
              const obj = {
                type: closure_0(ref[6]).ImpressionTypes.PANE,
                name: closure_0(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
                properties: obj2,
              };
              const trackImpression = closure_0(ref[5]).trackImpression;
              closure_0(ref[5]);
              obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
              trackImpression(obj);
            }
          }
        });
      };
      cResult[2] = arg1;
      cResult[3] = arg0;
      cResult[4] = fn2;
      tmp9 = fn2;
    }
  : (arg0, arg1) => {
      let closure_0;
      let ref;
      _require = arg0;
      let closure_1 = arg1;
      const useRef = react.useRef;
      set = new Set();
      dependencyMap = useRef(set);
      let obj = require("Link");
      const focusEffect = obj.useFocusEffect(
        react.useCallback(() => {
          const current = ref.current;
          current.clear();
        }, []),
      );
      const items = [arg0, arg1];
      return react.useCallback((viewableItems) => {
        let location_stack;
        viewableItems = viewableItems.viewableItems;
        let item = viewableItems.forEach((item) => {
          let obj2;
          item = item.item;
          if (null != item) {
            let hasItem = null == item.id;
            if (!hasItem) {
              const current = ref.current;
              hasItem = current.has(item.id);
            }
            if (!hasItem) {
              const current2 = ref.current;
              const tmp5 = closure_1_0[item.id];
              current2.add(item.id);
              const obj = {
                type: closure_0(ref[6]).ImpressionTypes.PANE,
                name: closure_0(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD,
                properties: obj2,
              };
              const trackImpression = closure_0(ref[5]).trackImpression;
              closure_0(ref[5]);
              obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
              trackImpression(obj);
            }
          }
        });
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onDismiss) => {
      let cardAction;
      let closure_4;
      let contentContainerStyle;
      let first1;
      let ref;
      let stateFromStoresObject;
      let subheader;
      let suggestedGuilds;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp2 = ref;
      let obj = cardAction(ref[8]);
      const cResult = obj.c(22);
      ({ suggestedGuilds, contentContainerStyle, subheader, cardAction } = onDismiss);
      onDismiss = onDismiss.onDismiss;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v(id) {
          return id.id;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      ref = react.useRef(null);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return offset > 0;
          }
        }
        cResult[1] = E;
      } else {
        class E {
          constructor() {
            return offset > 0;
          }
        }
      }
      const tmp8 = first1(react.useState(E), 2);
      first1 = tmp8[0];
      react = tmp8[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(nativeEvent) {
            const y = nativeEvent.nativeEvent.contentOffset.y;
          }
        }
        cResult[2] = G;
      } else {
        class G {
          constructor(nativeEvent) {
            const y = nativeEvent.nativeEvent.contentOffset.y;
          }
        }
      }
      if (cResult[3] !== first1) {
        class M {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_2;
              current = closure_2.current;
              tmp3 = null;
              if (current != null) {
                obj = { offset: null, animated: false };
                tmp4 = c8;
                obj.offset = c8;
                scrollToOffsetResult = current.scrollToOffset(obj);
              }
              tmp6 = globalThis;
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
        cResult[4] = M;
      } else {
        class M {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_2;
              current = closure_2.current;
              tmp3 = null;
              if (current != null) {
                obj = { offset: null, animated: false };
                tmp4 = c8;
                obj.offset = c8;
                scrollToOffsetResult = current.scrollToOffset(obj);
              }
              tmp6 = globalThis;
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
        class F {
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
        cResult[6] = F;
        cResult[7] = items;
        tmp13 = items;
      } else {
        class F {
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
      const effect = obj2.useEffect(F, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
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
            return stateFromStoresObject.getGuildGameIds();
          }
        }
        cResult[8] = items1;
        cResult[9] = N;
        tmp16 = N;
        tmp15 = items1;
      } else {
        class F {
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
      const tmpResult = cardAction(tmp2[10]);
      stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp15, tmp16);
      onDismiss(tmp2[11]);
      if (cResult[10] === cardAction) {
        class F {
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
      class Y {
        constructor(item) {
          item = item.item;
          let tmp = null;
          const tmp2 = null != stateFromStoresObject[item.id];
          GameCommunityMultiGuildUpsellCardDefault;
          if (tmp2) {
            tmp = onDismiss;
          }
          return (
            <tmp4
              key={item.id}
              guild={item}
              gameId={stateFromStoresObject[item.id]}
              cardAction={cardAction}
              onDismiss={tmp}
            />
          );
        }
      }
      cResult[10] = cardAction;
      cResult[11] = stateFromStoresObject;
      cResult[12] = onDismiss;
      cResult[13] = Y;
    }
  : (cardAction) => {
      let closure_4;
      let closure_8;
      let contentContainerStyle;
      let subheader;
      let suggestedGuilds;
      cardAction = cardAction.cardAction;
      const onDismiss = cardAction.onDismiss;
      let first;
      react = undefined;
      let stateFromStoresObject;
      ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
      let tmp = closure_9();
      const callback = react.useCallback((id) => id.id, []);
      const ref = react.useRef(null);
      const tmp4 = first(
        react.useState(() => closure_8 > 0),
        2,
      );
      first = tmp4[0];
      react = tmp4[1];
      const items = [first];
      const callback1 = react.useCallback((nativeEvent) => {
        const y = nativeEvent.nativeEvent.contentOffset.y;
      }, []);
      const items1 = [first];
      const callback2 = react.useCallback(() => {
        if (first) {
          offset = closure_8;
          let current = ref.current;
          if (current != null) {
            let obj = { offset: tmp2, animated: false };
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
      const effect = react.useEffect(() => {
        let closure_0;
        if (first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        }
      }, items1);
      let obj = cardAction(ref[10]);
      const items2 = [stateFromStoresObject];
      stateFromStoresObject = obj.useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
      const items3 = [onDismiss, stateFromStoresObject, cardAction];
      const tmp10 = onDismiss(ref[11]);
      const analyticsLocations = tmp10(
        onDismiss(ref[12]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT,
      ).analyticsLocations;
      const callback3 = react.useCallback((item) => {
        item = item.item;
        let tmp = null;
        const tmp2 = null != stateFromStoresObject[item.id];
        GameCommunityMultiGuildUpsellCardDefault;
        if (tmp2) {
          tmp = onDismiss;
        }
        return (
          <tmp4
            key={item.id}
            guild={item}
            gameId={stateFromStoresObject[item.id]}
            cardAction={cardAction}
            onDismiss={tmp}
          />
        );
      }, items3);
      let hidden;
      const tmp12 = closure_10(stateFromStoresObject, analyticsLocations);
      const FlashList = cardAction(ref[14]).FlashList;
      if (first) {
        hidden = tmp.hidden;
      }
      return (
        <FlashList
          ref={ref}
          style={hidden}
          onViewableItemsChanged={tmp12}
          viewabilityConfig={viewabilityConfig}
          contentContainerStyle={contentContainerStyle}
          keyExtractor={callback}
          data={suggestedGuilds}
          ListHeaderComponent={subheader}
          renderItem={callback3}
          drawDistance={3000}
          onScroll={callback1}
          scrollEventThrottle={16}
          onLoad={callback2}
        />
      );
    };
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = tmp2;
