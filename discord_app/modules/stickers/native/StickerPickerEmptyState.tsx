// discord_app/modules/stickers/native/StickerPickerEmptyState.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickerDefault from "Sticker.tsx";
import StickersHooks from "../StickersHooks.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../StickersStore.tsx";

const require = globalThis.__r;

require = fn;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = StickersHooks.useShouldAnimateSticker(sticker.isFocused);
  let id;
  if (sticker != null) {
    id = sticker.id;
  }
  return closure_1_11(StickerDefault, { sticker, size: 60, animated }, id);
}
const View = fn(17).View;
const EMPTY_STATE_STICKERS = fn(2023).EMPTY_STATE_STICKERS;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles({
  header: { marginBottom: 8, textAlign: "center" },
  blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 },
  premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 },
  nitroWheel: { width: 32 },
  stickersRow: { flexDirection: "row", alignSelf: "center" },
  sticker: { paddingHorizontal: 2 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default function _default() {
  const tmp = closure_13();
  _require = tmp;
  const fetchStickerPacks = require("StickersHooks").useFetchStickerPacks();
  let obj = require("StickersHooks");
  analyticsLocations = analyticsLocations(7495)(analyticsLocations(7515).EMPTY_STATE).analyticsLocations;
  const tmp3 = analyticsLocations(7495);
  const items = [StickersStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => null != item);
  });
  let obj2 = require("initialize");
  [dependencyMap, _slicedToArray] = noop.useState(null);
  const items1 = [analyticsLocations];
  const effect = noop.useEffect(() => {
    const obj2 = {
      type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
      source: { section: constants2.EMPTY_STICKER_PICKER_UPSELL },
      location_stack: analyticsLocations,
    };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const obj3 = { children: null };
  const obj4 = {
    style: tmp.header,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t.HEm04J);
  const items2 = [closure_11(require("Text/Text").Text, obj4), , ,];
  const obj5 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.FnNud4);
  items2[1] = closure_11(require("Text/Text").Text, obj5);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  items2[2] = closure_11(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      const obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: closure_1_11(EmptyStateSticker, { sticker, isFocused: closure_2 === sticker.id }),
      };
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5427).PressableOpacity, obj, id);
    }),
  });
  const obj7 = { style: tmp.premiumButton, children: null };
  const obj8 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj9 = { source: null, style: null, resizeMode: "contain" };
  const obj6 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      const obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: closure_1_11(EmptyStateSticker, { sticker, isFocused: closure_2 === sticker.id }),
      };
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5427).PressableOpacity, obj, id);
    }),
  };
  obj9.source = analyticsLocations(9555);
  obj9.style = tmp.nitroWheel;
  obj8.icon = closure_11(analyticsLocations(5892), obj9);
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t.pj0XBN);
  obj8.onPress = function onPress() {
    return analyticsLocations(10754)({ section: constants.EXPRESSION_PICKER });
  };
  obj7.children = closure_11(require("components/Button/Button").Button, obj8);
  items2[3] = closure_11(View, obj7);
  obj3.children = items2;
  return closure_12(View, obj3);
}
