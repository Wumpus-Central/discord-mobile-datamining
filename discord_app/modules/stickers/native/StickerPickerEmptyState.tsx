// discord_app/modules/stickers/native/StickerPickerEmptyState.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import StickersConstants from "../StickersConstants.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersHooks from "../StickersHooks.tsx";
import StickerDefault from "Sticker.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import StickersStore from "../StickersStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const View = react_native.View;
const EMPTY_STATE_STICKERS = StickersConstants.EMPTY_STATE_STICKERS;
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({
  header: { marginBottom: 8, textAlign: "center" },
  blurb: { lineHeight: 18, textAlign: "center", marginBottom: 12 },
  premiumButton: { marginTop: 20, alignSelf: "center", paddingLeft: 5, paddingRight: 10, flexGrow: 0 },
  nitroWheel: { width: 32 },
  stickersRow: { flexDirection: "row", alignSelf: "center" },
  sticker: { paddingHorizontal: 2 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isFocused;
      let sticker;
      const obj = react2;
      const cResult = obj.c(4);
      ({ sticker, isFocused } = arg0);
      const obj2 = StickersHooks;
      const shouldAnimateSticker = obj2.useShouldAnimateSticker(isFocused);
      let id;
      if (sticker != null) {
        id = sticker.id;
      }
      if (cResult[0] === shouldAnimateSticker) {
        if (cResult[1] === sticker) {
          let tmp5;
          if (cResult[2] === id) {
            tmp5 = cResult[3];
          }
          return tmp5;
        }
      }
      const tmp6 = unpackModuleId(StickerDefault, { sticker, size: 60, animated: shouldAnimateSticker }, id);
      cResult[0] = shouldAnimateSticker;
      cResult[1] = sticker;
      cResult[2] = id;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (sticker) => {
      sticker = sticker.sticker;
      const isFocused = sticker.isFocused;
      const obj = StickersHooks;
      const animated = obj.useShouldAnimateSticker(isFocused);
      let id;
      const tmp3 = StickerDefault;
      if (sticker != null) {
        id = sticker.id;
      }
      return unpackModuleId(tmp3, { sticker, size: 60, animated }, id);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let analyticsLocations;
      let closure_0;
      let closure_3;
      let first;
      let tmp13;
      let tmp15;
      let tmp19;
      let tmp7;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(35);
      const tmp4 = closure_13();
      _require = tmp4;
      let obj2 = require("StickersHooks");
      const fetchStickerPacks = obj2.useFetchStickerPacks();
      const tmp6 = analyticsLocations(first[13]);
      analyticsLocations = tmp6(analyticsLocations(first[14]).EMPTY_STATE).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StickersStore];
        const fn = function p() {
          let stickerById;
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
      const tmpResult = require("get initialized");
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8);
      [first, _slicedToArray] = react.useState(null);
      if (cResult[2] !== analyticsLocations) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const items1 = [analyticsLocations];
        cResult[2] = analyticsLocations;
        cResult[3] = R;
        cResult[4] = items1;
        tmp13 = items1;
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        tmp13 = cResult[4];
      }
      const effect = react.useEffect(R, tmp13);
      const header = tmp4.header;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const stringResult = obj5.string(require("intl").t.HEm04J);
        cResult[5] = stringResult;
        tmp15 = stringResult;
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
      }
      if (cResult[6] !== tmp4.header) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        let obj3 = {
          style: header,
          accessibilityRole: "header",
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        cResult[6] = tmp4.header;
        cResult[7] = closure_11(require("Text/Text").Text, obj3);
        const tmp18 = closure_11(require("Text/Text").Text, obj3);
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
      }
      const blurb = tmp4.blurb;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const stringResult1 = obj7.string(require("intl").t.FnNud4);
        cResult[8] = stringResult1;
        tmp19 = stringResult1;
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
      }
      if (cResult[9] !== tmp4.blurb) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        const obj6 = { style: blurb, variant: "text-sm/medium", color: "text-default", children: tmp19 };
        cResult[9] = tmp4.blurb;
        cResult[10] = closure_11(require("Text/Text").Text, obj6);
        const tmp22 = closure_11(require("Text/Text").Text, obj6);
      } else {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
      }
      if (cResult[11] === first) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
      }
      if (cResult[15] === first) {
        class R {
          constructor() {
            let obj3;
            const obj2 = {
              type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
              source: obj3,
              location_stack: analyticsLocations,
            };
            obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
          }
        }
        let mapped = stateFromStoresArray.map(H);
        cResult[11] = first;
        cResult[12] = stateFromStoresArray;
        cResult[13] = tmp4.sticker;
        cResult[14] = mapped;
      }
      class H {
        constructor(sticker) {
          let obj2;
          let obj = {
            accessible: false,
            onLongPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              closure_3(sticker.id);
            },
            style: sticker.sticker,
            children: closure_1_11(closure_1_14, obj2),
          };
          obj2 = { sticker, isFocused: first === sticker.id };
          const PressableOpacity = sticker(first[19]).PressableOpacity;
          let id;
          if (sticker != null) {
            id = sticker.id;
          }
          return closure_1_11(PressableOpacity, obj, id);
        }
      }
      cResult[15] = first;
      cResult[16] = tmp4.sticker;
      cResult[17] = H;
    }
  : () => {
      let Button;
      let analyticsLocations;
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let items2;
      let obj8;
      let obj9;
      let tmp6;
      const tmp = closure_13();
      _require = tmp;
      let obj = require("StickersHooks");
      const fetchStickerPacks = obj.useFetchStickerPacks();
      const tmp3 = analyticsLocations(6657);
      analyticsLocations = tmp3(analyticsLocations(6681).EMPTY_STATE).analyticsLocations;
      let obj2 = require("get initialized");
      const items = [StickersStore];
      const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
        let stickerById;
        const mapped = EMPTY_STATE_STICKERS.map((item) => stickerById.getStickerById(item));
        return mapped.filter((item) => null != item);
      });
      const tmp4 = _slicedToArray(react.useState(null), 2);
      [dependencyMap, _slicedToArray] = tmp4;
      const items1 = [analyticsLocations];
      const effect = react.useEffect(() => {
        let obj3;
        const obj2 = {
          type: PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
          source: obj3,
          location_stack: analyticsLocations,
        };
        obj3 = { section: constants.EMPTY_STICKER_PICKER_UPSELL };
        const obj = AnalyticsUtilsDefault;
        obj.track(metroImportAll.PREMIUM_UPSELL_VIEWED, obj2);
      }, items1);
      let obj3 = { children: items2 };
      const obj4 = {
        style: tmp.header,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(require("intl").t.HEm04J),
      };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items2 = [closure_11(Text, obj4), , ,];
      const obj5 = {
        style: tmp.blurb,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.string(require("intl").t.FnNud4),
      };
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      items2[1] = closure_11(Text2, obj5);
      const obj6 = {
        style: tmp.stickersRow,
        children: stateFromStoresArray.map((sticker) => {
          let obj2;
          let obj = {
            accessible: false,
            onLongPress() {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              _slicedToArray(sticker.id);
            },
            style: sticker.sticker,
            children: closure_1_11(closure_1_14, obj2),
          };
          obj2 = { sticker, isFocused: dependencyMap === sticker.id };
          const PressableOpacity = sticker(dependencyMap[19]).PressableOpacity;
          let id;
          if (sticker != null) {
            id = sticker.id;
          }
          return closure_1_11(PressableOpacity, obj, id);
        }),
      };
      items2[2] = closure_11(View, obj6);
      const obj7 = { style: tmp.premiumButton, children: closure_11(Button, obj8) };
      obj8 = {
        icon: closure_11(tmp6, obj9),
        text: intl3.string(require("intl").t.pj0XBN),
        variant: "active",
        size: "sm",
        onPress() {
          const obj = { section: constants.EXPRESSION_PICKER };
          return analyticsLocations(dependencyMap[24])(obj);
        },
      };
      Button = require("components/Button/Button").Button;
      obj9 = { source: analyticsLocations(8865), style: tmp.nitroWheel, resizeMode: "contain" };
      tmp6 = analyticsLocations(5974);
      intl3 = require("intl").intl;
      items2[3] = closure_11(View, obj7);
      return closure_12(View, obj3);
    };
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerEmptyState.tsx");

export default tmp4;
