// discord_app/modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx
import noop from "noop";
import set from "set";
import { jsx } from "jsxProd";

const require = arg1;
let closure_6 = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
const result = require("jsxProd").fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = function OneColumnGuildUpsellList(cardAction) {
  let contentContainerStyle;
  let subheader;
  let suggestedGuilds;
  cardAction = cardAction.cardAction;
  let stateFromStoresObject = cardAction;
  const onDismiss = cardAction.onDismiss;
  let analyticsLocations = onDismiss;
  let dependencyMap;
  ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
  const callback = React.useCallback((id) => id.id, []);
  let obj = stateFromStoresObject(589);
  const items = [set];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => guildGameIds.getGuildGameIds());
  dependencyMap = stateFromStoresObject;
  analyticsLocations = analyticsLocations(5728)(analyticsLocations(5748).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items1 = [onDismiss, stateFromStoresObject, cardAction];
  dependencyMap = undefined;
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: ref[item.id], cardAction: stateFromStoresObject, onDismiss: null };
    if (tmp2) {
      tmp = analyticsLocations;
    }
    obj[3] = tmp;
    return outer1_5(analyticsLocations(ref[9]), obj, item.id);
  }, items1);
  const tmp3 = analyticsLocations(5728);
  dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = stateFromStoresObject(1500).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items2 = [stateFromStoresObject, analyticsLocations];
  const callback2 = React.useCallback((viewableItems) => {
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
          let obj = outer1_0(outer1_2[3]);
          obj = { type: null, name: null, properties: null };
          obj[0] = outer1_0(outer1_2[4]).ImpressionTypes.PANE;
          obj[1] = outer1_0(outer1_2[4]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD;
          obj = { game_id: null, guild_id: null, location_stack: null };
          obj[0] = table[item.id];
          obj[1] = item.id;
          obj[2] = closure_1;
          obj[2] = obj;
          obj.trackImpression(obj);
        }
      }
    });
  }, items2);
  obj = { onViewableItemsChanged: callback2, viewabilityConfig: closure_6, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback1 };
  return jsx(stateFromStoresObject(7747).FlashList, { onViewableItemsChanged: callback2, viewabilityConfig: closure_6, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback1 });
};