// discord_app/modules/stickers/native/StickerPickerEmptyState.tsx
import StickerDefault from "Sticker.tsx";
import useStickerPackCategories from "../StickersHooks.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import loadSavedGuildStickers from "../StickersStore.tsx";
import { EMPTY_STATE_STICKERS } from "../StickersConstants.tsx";
import ME from "../../../Constants.tsx";
import { PremiumUpsellTypes } from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useStickerPackCategories } from "../StickersHooks.tsx";

require = fn;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = useStickerPackCategories.useShouldAnimateSticker(sticker.isFocused);
  let id;
  if (sticker != null) {
    id = sticker.id;
  }
  return callback(StickerDefault, { sticker, size: 60, animated }, id);
}
({ AnalyticEvents: closure_8, AnalyticsSections: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ header: { marginBottom: 8, textAlign: "center" }, blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 }, premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 }, nitroWheel: { width: 32 }, stickersRow: { flexDirection: "row", alignSelf: "center" }, sticker: { paddingHorizontal: 2 } });
let result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  const tmp = callback4();
  const _require = tmp;
  let obj = useStickerPackCategories;
  const fetchStickerPacks = obj.useFetchStickerPacks();
  analyticsLocations = analyticsLocations(7139)(analyticsLocations(7159).EMPTY_STATE).analyticsLocations;
  obj1 = initialize;
  const items = [closure_6];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = closure_7.map((item, index) => stickerById.getStickerById(item));
    return mapped.filter((item, index) => null != item);
  });
  const tmp3 = analyticsLocations(7139);
  [dependencyMap, closure_3] = callback(React.useState(null), 2);
  const items1 = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(dependencyMap[14]);
    obj = { section: closure_1_9.EMPTY_STICKER_PICKER_UPSELL };
    obj.track(closure_1_8.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = { style: tmp.header, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj[4] = intl.string(require("../../../intl/index.native.tsx").t.HEm04J);
  const items2 = [callback2(require("../../../design/components/Text/native/Text.tsx").Text, obj), , , ];
  obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj1[3] = intl2.string(require("../../../intl/index.native.tsx").t.FnNud4);
  items2[1] = callback2(require("../../../design/components/Text/native/Text.tsx").Text, obj1);
  const tmp4 = callback(React.useState(null), 2);
  items2[2] = callback2(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((item, index) => {
      const lib = item;
      const obj = { sticker: item, isFocused: closure_2 === item.id };
      obj[3] = closure_1_11(EmptyStateSticker, obj);
      let id;
      if (item != null) {
        id = item.id;
      }
      return closure_1_11(lib(dependencyMap[17]).PressableOpacity, obj, id);
    })
  });
  const obj3 = { style: tmp.premiumButton, children: null };
  const obj4 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj5 = { source: null, style: null, resizeMode: "contain" };
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((item, index) => {
      const lib = item;
      const obj = { sticker: item, isFocused: closure_2 === item.id };
      obj[3] = closure_1_11(EmptyStateSticker, obj);
      let id;
      if (item != null) {
        id = item.id;
      }
      return closure_1_11(lib(dependencyMap[17]).PressableOpacity, obj, id);
    })
  };
  obj5[0] = analyticsLocations(9367);
  obj5[1] = tmp.nitroWheel;
  obj4[0] = callback2(analyticsLocations(5449), obj5);
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj4[1] = intl3.string(require("../../../intl/index.native.tsx").t.pj0XBN);
  obj4[4] = function onPress() {
    return analyticsLocations(table[23])({ section: constants.EXPRESSION_PICKER });
  };
  obj3[1] = callback2(require("../../../design/components/Button/native/Button.native.tsx").Button, obj4);
  items2[3] = callback2(View, obj3);
  obj[0] = items2;
  return callback3(View, obj);
};