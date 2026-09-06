// discord_app/modules/stickers/native/StickerPickerEmptyState.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickerDefault from "Sticker.tsx";
import StickersHooks from "../StickersHooks.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../StickersStore.tsx";

require = fn;
function EmptyStateSticker(sticker) {
  sticker = sticker.sticker;
  const animated = StickersHooks.useShouldAnimateSticker(sticker.isFocused);
  let id;
  const tmp2 = closure_1_11;
  if (sticker != null) {
    id = sticker.id;
  }
  return tmp2(StickerDefault, { sticker, size: 60, animated }, id);
}
const View = fn(17).View;
const EMPTY_STATE_STICKERS = fn(1938).EMPTY_STATE_STICKERS;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = require("StickersHooks");
  const fetchStickerPacks = obj.useFetchStickerPacks();
  analyticsLocations = analyticsLocations(7162)(analyticsLocations(7182).EMPTY_STATE).analyticsLocations;
  let obj1 = require("initialize");
  const items = [StickersStore];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items, () => {
    const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
    return mapped.filter((item) => null != item);
  });
  const tmp3 = analyticsLocations(7162);
  [dependencyMap, _slicedToArray] = _slicedToArray(noop.useState(null), 2);
  const items1 = [analyticsLocations];
  const effect = noop.useEffect(() => {
    let obj = {
      type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
      source: null,
      location_stack: analyticsLocations,
    };
    obj = { section: constants2.EMPTY_STICKER_PICKER_UPSELL };
    obj.source = obj;
    obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  obj = { children: null };
  obj = {
    style: tmp.header,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.HEm04J);
  const items2 = [closure_11(require("Text/Text").Text, obj), , ,];
  obj1 = { style: tmp.blurb, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj1.children = intl2.string(require("util").t.FnNud4);
  items2[1] = closure_11(require("Text/Text").Text, obj1);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  items2[2] = closure_11(View, {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      let obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: null,
      };
      obj = { sticker, isFocused: closure_2 === sticker.id };
      obj.children = closure_1_11(EmptyStateSticker, obj);
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5123).PressableOpacity, obj, id);
    }),
  });
  const obj3 = { style: tmp.premiumButton, children: null };
  const obj4 = { icon: null, text: null, variant: "active", size: "sm", onPress: null };
  const obj5 = { source: null, style: null, resizeMode: "contain" };
  const obj2 = {
    style: tmp.stickersRow,
    children: stateFromStoresArray.map((sticker) => {
      let obj = {
        accessible: false,
        onLongPress() {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          _slicedToArray(sticker.id);
        },
        style: sticker.sticker,
        children: null,
      };
      obj = { sticker, isFocused: closure_2 === sticker.id };
      obj.children = closure_1_11(EmptyStateSticker, obj);
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(sticker(5123).PressableOpacity, obj, id);
    }),
  };
  obj5.source = analyticsLocations(9360);
  obj5.style = tmp.nitroWheel;
  obj4.icon = closure_11(analyticsLocations(5587), obj5);
  const intl3 = require("util").intl;
  obj4.text = intl3.string(require("util").t.pj0XBN);
  obj4.onPress = function onPress() {
    return analyticsLocations(10407)({ section: constants.EXPRESSION_PICKER });
  };
  obj3.children = closure_11(require("components/Button/Button").Button, obj4);
  items2[3] = closure_11(View, obj3);
  obj.children = items2;
  return closure_12(View, obj);
}
