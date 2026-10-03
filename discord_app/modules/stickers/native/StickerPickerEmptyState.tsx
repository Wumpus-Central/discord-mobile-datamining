// discord_app/modules/stickers/native/StickerPickerEmptyState.tsx
import c from "../../../../_runtime/00576_c.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersHooks from "../StickersHooks.tsx";
import StickerDefault from "Sticker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import StickersStore from "../StickersStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const EMPTY_STATE_STICKERS = fn(2031).EMPTY_STATE_STICKERS;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({
  header: { marginBottom: 8, textAlign: "center" },
  blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 },
  premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 },
  nitroWheel: { width: 32 },
  stickersRow: { flexDirection: "row", alignSelf: "center" },
  sticker: { paddingHorizontal: 2 },
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(4);
      ({ sticker, isFocused } = arg0);
      const shouldAnimateSticker = StickersHooks.useShouldAnimateSticker(isFocused);
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      if (cResult[0] === shouldAnimateSticker) {
        if (cResult[1] === sticker) {
          if (cResult[2] === id) {
            let tmp5 = cResult[3];
          }
          return tmp5;
        }
      }
      const tmp6 = closure_1_11(StickerDefault, { sticker, size: 60, animated: shouldAnimateSticker }, id);
      cResult[0] = shouldAnimateSticker;
      cResult[1] = sticker;
      cResult[2] = id;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (sticker) => {
      sticker = sticker.sticker;
      const animated = StickersHooks.useShouldAnimateSticker(sticker.isFocused);
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      return closure_1_11(StickerDefault, { sticker, size: 60, animated }, id);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(35);
      const tmp4 = closure_13();
      _require = tmp4;
      let obj = require("c");
      const fetchStickerPacks = require("StickersHooks").useFetchStickerPacks();
      let obj2 = require("StickersHooks");
      analyticsLocations = analyticsLocations(first[13])(analyticsLocations(first[14]).EMPTY_STATE).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        const fn = function p() {
          const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
          return mapped.filter((item) => null != item);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmp6 = analyticsLocations(first[13]);
      let stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp7, tmp8);
      [first, _slicedToArray] = noop.useState(null);
      if (cResult[2] !== analyticsLocations) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        const items1 = [analyticsLocations];
        cResult[2] = analyticsLocations;
        cResult[3] = R;
        cResult[4] = items1;
        let tmp13 = items1;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        tmp13 = cResult[4];
      }
      const effect = noop.useEffect(R, tmp13);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        const stringResult = obj5.string(tmp(tmp2[17]).t.HEm04J);
        cResult[5] = stringResult;
        const tmp15 = stringResult;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[6] !== tmp4.header) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        const obj3 = {
          style: tmp4.header,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        const tmp18 = closure_11(tmp(tmp2[18]).Text, obj3);
        cResult[6] = tmp4.header;
        cResult[7] = tmp18;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        const stringResult1 = obj7.string(tmp(tmp2[17]).t.FnNud4);
        cResult[8] = stringResult1;
        const tmp19 = stringResult1;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[9] !== tmp4.blurb) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        const obj6 = { style: tmp4.blurb, variant: "text-sm/medium", color: "text-default", children: tmp19 };
        const tmp22 = closure_11(tmp(tmp2[18]).Text, obj6);
        cResult[9] = tmp4.blurb;
        cResult[10] = tmp22;
      } else {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[11] === first) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
      }
      if (cResult[15] === first) {
        class R {
          constructor() {
            obj = closure_1(closure_2[16]);
            obj1 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: null,
              location_stack: analyticsLocations,
            };
            obj4 = { section: AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL };
            obj1.source = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        let mapped = stateFromStoresArray.map(H);
        cResult[11] = first;
        cResult[12] = stateFromStoresArray;
        stateFromStoresArray = tmp4.sticker;
        cResult[13] = stateFromStoresArray;
        cResult[14] = mapped;
      }
      class H {
        constructor(arg0) {
          closure_0 = arg0;
          tmp = closure_1_11;
          obj = {
            accessible: false,
            onLongPress() {
              const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              closure_3(sticker.id);
            },
            style: closure_0.sticker,
            children: null,
          };
          obj1 = { sticker: arg0, isFocused: closure_2 === arg0.id };
          obj.children = closure_1_11(closure_1_14, obj1);
          id = undefined;
          if (arg0 != null) {
            id = arg0.id;
          }
          return tmp(closure_0(closure_2[19]).PressableOpacity, obj, id);
        }
      }
      cResult[15] = first;
      cResult[16] = tmp4.sticker;
      cResult[17] = H;
      const tmpResult = require("initialize");
    }
  : () => {
      const tmp = closure_13();
      _require = tmp;
      const fetchStickerPacks = require("StickersHooks").useFetchStickerPacks();
      let obj = require("StickersHooks");
      analyticsLocations = analyticsLocations(6657)(analyticsLocations(6681).EMPTY_STATE).analyticsLocations;
      const tmp3 = analyticsLocations(6657);
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
            children: closure_1_11(closure_1_14, { sticker, isFocused: closure_2 === sticker.id }),
          };
          let id;
          if (sticker != null) {
            id = sticker.id;
          }
          return closure_1_11(sticker(5909).PressableOpacity, obj, id);
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
            children: closure_1_11(closure_1_14, { sticker, isFocused: closure_2 === sticker.id }),
          };
          let id;
          if (sticker != null) {
            id = sticker.id;
          }
          return closure_1_11(sticker(5909).PressableOpacity, obj, id);
        }),
      };
      obj9.source = analyticsLocations(8865);
      obj9.style = tmp.nitroWheel;
      obj8.icon = closure_11(analyticsLocations(5974), obj9);
      const intl3 = require("util").intl;
      obj8.text = intl3.string(require("util").t.pj0XBN);
      obj8.onPress = function onPress() {
        return analyticsLocations(10135)({ section: constants.EXPRESSION_PICKER });
      };
      obj7.children = closure_11(require("components/Button/Button").Button, obj8);
      items2[3] = closure_11(View, obj7);
      obj3.children = items2;
      return closure_12(View, obj3);
    };
