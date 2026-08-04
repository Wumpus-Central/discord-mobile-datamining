import _slicedToArray from "_slicedToArray";
import IMPACT_LIGHT from "IMPACT_LIGHT";
import { View } from "PressableBase";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import { EMPTY_STATE_STICKERS } from "STICKER_PICKER_TAB_PANEL_ID";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "preload";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = require(9872) /* useStickerPackCategories */.useShouldAnimateSticker(sticker.isFocused);
  let id;
  const obj = require(9872) /* useStickerPackCategories */;
  const tmp2 = closure_11;
  if (sticker != null) {
    id = sticker.id;
  }
  return tmp2(importDefault(9764), { sticker, size: 60, animated }, id);
}
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  let _slicedToArray;
  let dependencyMap;
  let tmp = callback4();
  const require = tmp;
  let obj = require(9872) /* useStickerPackCategories */;
  const fetchStickerPacks = obj.useFetchStickerPacks();
  analyticsLocations = analyticsLocations(5610)(analyticsLocations(5630).EMPTY_STATE).analyticsLocations;
  let obj1 = require(589) /* initialize */;
  const items = [loadSavedGuildStickers];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = closure_7.map((arg0) => stickerById.getStickerById(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const tmp3 = analyticsLocations(5610);
  [dependencyMap, _slicedToArray] = callback(React.useState(null), 2);
  const items1 = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(outer1_2[14]);
    obj = { type: outer1_10.EMPTY_STICKER_PICKER_UPSELL, source: obj, location_stack: analyticsLocations };
    obj = { section: outer1_9.EMPTY_STICKER_PICKER_UPSELL };
    obj.track(outer1_8.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = { children: null };
  obj = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl.string(require(1236) /* getSystemLocale */.t.HEm04J);
  const items2 = [callback2(require(4281) /* Text */.Text, obj), , , ];
  obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require(1236) /* getSystemLocale */.t.FnNud4);
  items2[1] = callback2(require(4281) /* Text */.Text, obj1);
  const tmp4 = callback(React.useState(null), 2);
  items2[2] = callback2(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = outer1_11;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(outer2_2[18]).triggerHapticFeedback(analyticsLocations(outer2_2[19]).IMPACT_LIGHT);
          outer1_3(id.id);
        },
        style: tmp.sticker,
        children: null
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj[3] = outer1_11(outer1_14, obj);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return tmp(tmp(outer1_2[17]).PressableOpacity, obj, id);
    })
  });
  const obj3 = { style: tmp.premiumButton, children: null };
  const obj4 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj5 = { source: null, style: null, resizeMode: "contain" };
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((id) => {
      let tmp = id;
      tmp = outer1_11;
      let obj = {
        accessible: false,
        onLongPress() {
          const result = id(outer2_2[18]).triggerHapticFeedback(analyticsLocations(outer2_2[19]).IMPACT_LIGHT);
          outer1_3(id.id);
        },
        style: tmp.sticker,
        children: null
      };
      obj = { sticker: id, isFocused: closure_2 === id.id };
      obj[3] = outer1_11(outer1_14, obj);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return tmp(tmp(outer1_2[17]).PressableOpacity, obj, id);
    })
  };
  obj5[0] = analyticsLocations(8622);
  obj5[1] = tmp.nitroWheel;
  obj4[0] = callback2(analyticsLocations(5236), obj5);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[1] = intl3.string(require(1236) /* getSystemLocale */.t.pj0XBN);
  obj4[4] = function onPress() {
    return analyticsLocations(table[23])({ section: constants.EXPRESSION_PICKER });
  };
  obj3[1] = callback2(require(4695) /* Button */.Button, obj4);
  items2[3] = callback2(View, obj3);
  obj[0] = items2;
  return callback3(View, obj);
};