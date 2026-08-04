import Text from "Text";
import { View } from "useGradientBottom";
import set from "set";
import { AnalyticEvents } from "ME";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import jsxProd from "fetchMobileGameCommunities";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
class OneColumnGuildUpsellList {
  constructor(arg0) {
    onDismiss = global.onDismiss;
    c1 = undefined;
    ({ suggestedGuilds, contentContainerStyle, subheader } = global);
    callback = Text.useCallback((id) => id.id, []);
    obj = require("initialize");
    items = [];
    items[0] = View;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => guildGameIds.getGuildGameIds());
    c1 = stateFromStoresObject;
    tmp3 = require("context");
    analyticsLocations = tmp3(require("QUICK_SWITCHER").GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
    items1 = [, ];
    items1[0] = onDismiss;
    items1[1] = stateFromStoresObject;
    onDismiss = stateFromStoresObject;
    c1 = "one-column";
    Set = undefined;
    callback1 = Text.useCallback((item) => {
      item = item.item;
      let tmp = null;
      const obj = { guild: item, gameId: dependencyMap[item.id], variant: "one-column", onDismiss: null };
      if (tmp2) {
        tmp = stateFromStoresObject;
      }
      obj[3] = tmp;
      return outer1_9(dependencyMap(table[14]), obj, item.id);
    }, items1);
    set = new Set();
    Set = Text.useRef(set);
    obj2 = require("Link");
    focusEffect = obj2.useFocusEffect(Text.useCallback(() => {
      const current = ref.current;
      current.clear();
    }, []));
    items2 = [, , ];
    items2[0] = stateFromStoresObject;
    items2[1] = analyticsLocations;
    items2[2] = "one-column";
    callback2 = Text.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        if (null != item) {
          let tmp = "left" in item && null != item.left;
          if (tmp) {
            const current = closure_3.current;
            tmp = !current.has(item.left.id);
          }
          if (tmp) {
            const left = item.left;
            const current2 = closure_3.current;
            current2.add(left.id);
            let obj = outer1_0(outer1_3[8]);
            obj = { type: null, name: null, properties: null };
            obj[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            obj = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj[0] = dependencyMap[item.left.id];
            obj[1] = left.id;
            obj[2] = closure_2;
            obj[3] = closure_1;
            obj[2] = obj;
            obj.trackImpression(obj);
          }
          let tmp11 = "right" in item && null != item.right;
          if (tmp11) {
            const current3 = closure_3.current;
            tmp11 = !current3.has(item.right.id);
          }
          if (tmp11) {
            const right = item.right;
            const current4 = closure_3.current;
            current4.add(right.id);
            let obj3 = outer1_0(outer1_3[8]);
            const obj1 = { type: null, name: null, properties: null };
            obj1[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj1[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            const obj2 = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj2[0] = dependencyMap[item.right.id];
            obj2[1] = right.id;
            obj2[2] = closure_2;
            obj2[3] = closure_1;
            obj1[2] = obj2;
            obj3.trackImpression(obj1);
          }
          let tmp21 = "id" in item && null != item.id;
          if (tmp21) {
            const current5 = closure_3.current;
            tmp21 = !current5.has(item.id);
          }
          if (tmp21) {
            const current6 = closure_3.current;
            current6.add(item.id);
            obj3 = { type: null, name: null, properties: null };
            obj3[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj3[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            const obj4 = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj4[0] = dependencyMap[item.id];
            obj4[1] = item.id;
            obj4[2] = closure_2;
            obj4[3] = closure_1;
            obj3[2] = obj4;
            outer1_0(outer1_3[8]).trackImpression(obj3);
            const obj7 = outer1_0(outer1_3[8]);
          }
        }
      });
    }, items2);
    obj = { onViewableItemsChanged: callback2, viewabilityConfig: f61249, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback1 };
    return jsx(require("noop").FlashList, obj);
  }
}
class TwoColumnGuildUpsellList {
  constructor(arg0) {
    suggestedGuilds = global.suggestedGuilds;
    rowStyle = global.rowStyle;
    c1 = rowStyle;
    onDismiss = global.onDismiss;
    analyticsLocations = onDismiss;
    Set = undefined;
    items = [];
    items[0] = suggestedGuilds;
    ({ contentContainerStyle, subheader } = global);
    memo = Text.useMemo(() => stateFromStoresObject.reduce((arr) => {
      if (arg2 % 2 === 0) {
        const obj = { left: null, right: null };
        obj[0] = arg1;
        obj[1] = table[arg2 + 1];
        arr.push(obj);
      }
      return arr;
    }, []), items);
    callback = Text.useCallback((left) => {
      left = left.left;
      let str;
      if (left != null) {
        str = left.id;
      }
      if (str == null) {
        str = "";
      }
      const right = left.right;
      let str2;
      if (right != null) {
        str2 = right.id;
      }
      if (str2 == null) {
        str2 = "";
      }
      return "" + str + "-" + str2;
    }, []);
    obj = require("initialize");
    items1 = [];
    items1[0] = View;
    stateFromStoresObject = obj.useStateFromStoresObject(items1, () => guildGameIds.getGuildGameIds());
    Set = stateFromStoresObject;
    tmp4 = require("context");
    analyticsLocations = tmp4(require("QUICK_SWITCHER").GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
    suggestedGuilds = stateFromStoresObject;
    c1 = "two-column";
    Set = undefined;
    set = new Set();
    Set = Text.useRef(set);
    obj2 = require("Link");
    focusEffect = obj2.useFocusEffect(Text.useCallback(() => {
      const current = ref.current;
      current.clear();
    }, []));
    items2 = [, , ];
    items2[0] = stateFromStoresObject;
    items2[1] = analyticsLocations;
    items2[2] = "two-column";
    items3 = [, , ];
    items3[0] = rowStyle;
    items3[1] = onDismiss;
    items3[2] = stateFromStoresObject;
    callback1 = Text.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      let item = viewableItems.forEach((item) => {
        item = item.item;
        if (null != item) {
          let tmp = "left" in item && null != item.left;
          if (tmp) {
            const current = closure_3.current;
            tmp = !current.has(item.left.id);
          }
          if (tmp) {
            const left = item.left;
            const current2 = closure_3.current;
            current2.add(left.id);
            let obj = outer1_0(outer1_3[8]);
            obj = { type: null, name: null, properties: null };
            obj[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            obj = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj[0] = dependencyMap[item.left.id];
            obj[1] = left.id;
            obj[2] = closure_2;
            obj[3] = closure_1;
            obj[2] = obj;
            obj.trackImpression(obj);
          }
          let tmp11 = "right" in item && null != item.right;
          if (tmp11) {
            const current3 = closure_3.current;
            tmp11 = !current3.has(item.right.id);
          }
          if (tmp11) {
            const right = item.right;
            const current4 = closure_3.current;
            current4.add(right.id);
            let obj3 = outer1_0(outer1_3[8]);
            const obj1 = { type: null, name: null, properties: null };
            obj1[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj1[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            const obj2 = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj2[0] = dependencyMap[item.right.id];
            obj2[1] = right.id;
            obj2[2] = closure_2;
            obj2[3] = closure_1;
            obj1[2] = obj2;
            obj3.trackImpression(obj1);
          }
          let tmp21 = "id" in item && null != item.id;
          if (tmp21) {
            const current5 = closure_3.current;
            tmp21 = !current5.has(item.id);
          }
          if (tmp21) {
            const current6 = closure_3.current;
            current6.add(item.id);
            obj3 = { type: null, name: null, properties: null };
            obj3[0] = outer1_0(outer1_3[9]).ImpressionTypes.PANE;
            obj3[1] = outer1_0(outer1_3[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
            const obj4 = { game_id: null, guild_id: null, location_stack: null, variant: null };
            obj4[0] = dependencyMap[item.id];
            obj4[1] = item.id;
            obj4[2] = closure_2;
            obj4[3] = closure_1;
            obj3[2] = obj4;
            outer1_0(outer1_3[8]).trackImpression(obj3);
            const obj7 = outer1_0(outer1_3[8]);
          }
        }
      });
    }, items2);
    callback2 = Text.useCallback((item) => {
      item = item.item;
      const left = item.left;
      let id;
      if (left != null) {
        id = left.id;
      }
      let tmp2 = null != id;
      if (tmp2) {
        tmp2 = null != ref[item.left.id];
      }
      const right = item.right;
      let id1;
      if (right != null) {
        id1 = right.id;
      }
      let tmp5 = null != id1;
      if (tmp5) {
        tmp5 = null != ref[item.right.id];
      }
      let obj = { style: twocolumn, children: null };
      let tmp10Result = null != item.left;
      if (tmp10Result) {
        obj = { guild: null, gameId: null, variant: "two-column", onDismiss: null };
        obj[0] = item.left;
        obj[1] = ref[item.left.id];
        let tmp15 = null;
        if (tmp2) {
          tmp15 = analyticsLocations;
        }
        obj[3] = tmp15;
        tmp10Result = outer1_9(twocolumn(ref[14]), obj);
        const tmp10 = outer1_9;
        const tmp13 = twocolumn(ref[14]);
      }
      const items = [tmp10Result, ];
      if (null != item.right) {
        obj = { guild: null, gameId: null, variant: "two-column", onDismiss: null };
        obj[0] = item.right;
        obj[1] = ref[item.right.id];
        let tmp23 = null;
        if (tmp5) {
          tmp23 = analyticsLocations;
        }
        obj[3] = tmp23;
        let tmp18Result = outer1_9(twocolumn(ref[14]), obj);
        const tmp18 = outer1_9;
        const tmp21 = twocolumn(ref[14]);
      } else {
        const obj1 = { style: null };
        obj1[0] = { flex: 1 };
        tmp18Result = outer1_9(tmp8, obj1);
      }
      items[1] = tmp18Result;
      obj[1] = items;
      return outer1_10(outer1_5, obj);
    }, items3);
    obj = { onViewableItemsChanged: callback1, viewabilityConfig: f61249, contentContainerStyle, keyExtractor: callback, data: memo, ListHeaderComponent: subheader, renderItem: callback2 };
    return jsx(require("noop").FlashList, obj);
  }
}
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((paddingBottom, paddingTop) => {
  let obj = { container: null, headerWrapper: null, headerTitle: null, subtitle: null, listContent: null, twoColumnRow: null };
  obj = { flex: 1, backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", flexShrink: 0, paddingTop, minHeight: paddingTop + MIN_HEADER_HEIGHT, paddingHorizontal: importDefault(712).space.PX_8 };
  obj[1] = obj;
  obj[2] = { flex: 1, alignItems: "center", justifyContent: "center" };
  obj[3] = { alignSelf: "center", marginHorizontal: importDefault(712).space.PX_24, marginBottom: importDefault(712).space.PX_24, marginTop: importDefault(712).space.PX_8, backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  const obj1 = { alignSelf: "center", marginHorizontal: importDefault(712).space.PX_24, marginBottom: importDefault(712).space.PX_24, marginTop: importDefault(712).space.PX_8, backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW, textAlign: "center" };
  obj[4] = { paddingHorizontal: importDefault(712).space.PX_16, paddingBottom };
  const obj2 = { paddingHorizontal: importDefault(712).space.PX_16, paddingBottom };
  obj[5] = { flexDirection: "row", gap: importDefault(712).space.PX_16, flex: 1 };
  return obj;
});
let closure_12 = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellModal.tsx");

export default function GameCommunityMultiGuildUpsellModal(onClose) {
  let bottom;
  let top;
  let gradientTop;
  let importDefault;
  let visualVariant;
  ({ top, bottom } = importDefault(1581)());
  let obj = gradientTop(8202);
  gradientTop = obj.useGradientTop();
  const tmp3 = callback3(bottom, top);
  importDefault = tmp3;
  const GameCommunityUpsellMultiExperiment = gradientTop(12881).GameCommunityUpsellMultiExperiment;
  visualVariant = GameCommunityUpsellMultiExperiment.useConfig({ location: "GameCommunityMultiGuildUpsellModal" }).visualVariant;
  let obj1 = gradientTop(589);
  let items = [set];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => presentableUpsellGuilds.getPresentableUpsellGuilds());
  const items1 = [tmp3.headerWrapper, gradientTop];
  const items2 = [tmp3.subtitle];
  const memo = React.useMemo(() => {
    const items = [_undefined.headerWrapper, gradientTop];
    return items;
  }, items1);
  const memo1 = React.useMemo(() => {
    const obj = { variant: "text-sm/medium", color: "text-muted", style: _undefined.subtitle, children: null };
    const intl = gradientTop(outer1_3[20]).intl;
    obj[3] = intl.string(gradientTop(outer1_3[20]).t["PH+G/A"]);
    return outer1_9(gradientTop(outer1_3[19]).Text, obj);
  }, items2);
  const items3 = [visualVariant];
  const callback = React.useCallback((guild_id, game_id) => {
    let obj = visualVariant(outer1_3[21]);
    obj.dismissGuild(guild_id);
    obj = { game_id, guild_id, variant: visualVariant };
    _undefined(outer1_3[22]).track(outer1_7.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD_DISMISSED, obj);
  }, items3);
  obj = { style: tmp3.container, children: null };
  obj = { style: memo, children: null };
  obj1 = { source: null, onPress: null, accessibilityLabel: null };
  obj1[0] = importDefault(8201);
  obj1[1] = onClose.onClose;
  let intl = gradientTop(1236).intl;
  obj1[2] = intl.string(gradientTop(1236).t.cpT0Cq);
  const items4 = [callback(gradientTop(8193).HeaderIconButton, obj1), , ];
  const obj2 = { style: tmp3.headerTitle, children: null };
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const intl2 = gradientTop(1236).intl;
  obj3[3] = intl2.string(gradientTop(1236).t["fs+2Kn"]);
  obj2[1] = callback(gradientTop(4281).Text, obj3);
  items4[1] = callback(View, obj2);
  items4[2] = callback(View, { style: { width: 40 } });
  obj[1] = items4;
  const items5 = [callback2(View, obj), ];
  const obj4 = { style: { flex: 1 }, children: null };
  let tmp9Result = null;
  if ("one-column" === visualVariant) {
    const obj5 = { suggestedGuilds: null, contentContainerStyle: null, subheader: null, onDismiss: null };
    obj5[0] = stateFromStoresArray.slice(0, 8);
    obj5[1] = tmp3.listContent;
    obj5[2] = memo1;
    obj5[3] = callback;
    tmp9Result = tmp9(OneColumnGuildUpsellList, obj5);
  }
  const items6 = [tmp9Result, ];
  tmp9Result = null;
  if ("two-column" === visualVariant) {
    const obj6 = { suggestedGuilds: null, contentContainerStyle: null, rowStyle: null, subheader: null, onDismiss: null };
    obj6[0] = stateFromStoresArray.slice(0, 20);
    ({ listContent: obj10[1], twoColumnRow: obj10[2] } = tmp3);
    obj6[3] = memo1;
    obj6[4] = callback;
    tmp9Result = tmp9(TwoColumnGuildUpsellList, obj6);
  }
  items6[1] = tmp9Result;
  obj4[1] = items6;
  items5[1] = callback2(View, obj4);
  obj[1] = items5;
  return callback2(View, obj);
};
export { OneColumnGuildUpsellList };
export { TwoColumnGuildUpsellList };