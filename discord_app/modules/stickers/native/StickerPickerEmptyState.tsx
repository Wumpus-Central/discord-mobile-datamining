// === Module 10431: EmptyStateSticker ===

// Module 10431 (EmptyStateSticker)
import StickerDefault from "Sticker" /* 10287 */;
import useStickerPackCategories from "useStickerPackCategories" /* 10405 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "loadSavedGuildStickers" /* 5453 */;
import { EMPTY_STATE_STICKERS } from "STICKER_PICKER_TAB_PANEL_ID" /* 4169 */;
import ME from "ME" /* 673 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = useStickerPackCategories.useShouldAnimateSticker(sticker.isFocused);
  let id;
  const obj = useStickerPackCategories;
  const tmp2 = closure_11;
  if (sticker != null) {
    id = sticker.id;
  }
  return tmp2(StickerDefault, { sticker, size: 60, animated }, id);
}
({ AnalyticEvents: closure_8, AnalyticsSections: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
let result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  const tmp = callback4();
  const _require = tmp;
  let obj = _require(10405);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  analyticsLocations = analyticsLocations(5962)(analyticsLocations(5982).EMPTY_STATE).analyticsLocations;
  obj1 = _require(586);
  const items = [closure_6];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = closure_7.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const tmp3 = analyticsLocations(5962);
  [dependencyMap, closure_3] = callback(React.useState(null), 2);
  const items1 = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(closure_1_2[14]);
    obj = { type: closure_1_10.EMPTY_STICKER_PICKER_UPSELL, source: obj, location_stack: analyticsLocations };
    obj = { section: closure_1_9.EMPTY_STICKER_PICKER_UPSELL };
    obj.track(closure_1_8.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = { children: null };
  obj = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = _require(1233).intl;
  obj[4] = intl.string(_require(1233).t.HEm04J);
  const items2 = [callback2(_require(4474).Text, obj), , , ];
  obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _require(1233).intl;
  obj1[3] = intl2.string(_require(1233).t.FnNud4);
  items2[1] = callback2(_require(4474).Text, obj1);
  const tmp4 = callback(React.useState(null), 2);
  items2[2] = callback2(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      const lib = id;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(closure_2_2[18]).triggerHapticFeedback(analyticsLocations(closure_2_2[19]).IMPACT_LIGHT);
          closure_1_3(id.id);
        },
        style: lib.sticker,
        children: null
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj[3] = closure_1_11(closure_1_14, obj);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return closure_1_11(lib(closure_1_2[17]).PressableOpacity, obj, id);
    })
  });
  const obj3 = { style: tmp.premiumButton, children: null };
  const obj4 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj5 = { source: null, style: null, resizeMode: "contain" };
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      const lib = id;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(closure_2_2[18]).triggerHapticFeedback(analyticsLocations(closure_2_2[19]).IMPACT_LIGHT);
          closure_1_3(id.id);
        },
        style: lib.sticker,
        children: null
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj[3] = closure_1_11(closure_1_14, obj);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return closure_1_11(lib(closure_1_2[17]).PressableOpacity, obj, id);
    })
  };
  obj5[0] = analyticsLocations(8228);
  obj5[1] = tmp.nitroWheel;
  obj4[0] = callback2(analyticsLocations(5502), obj5);
  const intl3 = _require(1233).intl;
  obj4[1] = intl3.string(_require(1233).t.pj0XBN);
  obj4[4] = function onPress() {
    return analyticsLocations(table[23])({ section: constants.EXPRESSION_PICKER });
  };
  obj3[1] = callback2(_require(4929).Button, obj4);
  items2[3] = callback2(View, obj3);
  obj[0] = items2;
  return callback3(View, obj);
};