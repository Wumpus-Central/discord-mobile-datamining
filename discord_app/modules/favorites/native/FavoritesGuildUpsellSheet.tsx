// discord_app/modules/favorites/native/FavoritesGuildUpsellSheet.tsx
import router_utils from "../../routing/router_utils.tsx";
import _modDef3439 from "../intl/FavoritesGuild.messages.js";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import useTrackFavoritesGuildUpsellModalOpenedDefault from "../analytics/useTrackFavoritesGuildUpsellModalOpened.tsx";
import FavoritesGuildAnalytics from "../analytics/FavoritesGuildAnalytics.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const MAX_FAVORITE_CHANNELS = fn(2077).MAX_FAVORITE_CHANNELS;
const FAVORITES = fn(1085).FAVORITES;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildUpsellSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildUpsellSheet(arg0) {
      const cResult = analyticsLocations(576).c(22);
      ({ limit, source, variant } = arg0);
      if (undefined === limit) {
        limit = tmp(10295).FREE_FAVORITE_LIMIT;
      }
      let str = "channel_context_menu";
      if (undefined !== source) {
        str = source;
      }
      let str2 = "no_access";
      if (undefined !== variant) {
        str2 = variant;
      }
      analyticsLocations = first(10299)(str).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          first(5054).hideActionSheet(analyticsLocations(10297).FAVORITES_UPSELL_SHEET_KEY);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== ("limit_reached" === str2)) {
        const intl = tmp(1126).intl;
        const tmp4Result = tmp4(3439);
        const stringResult = intl.string(tmp6 ? tmp4Result.hINqUs : tmp4Result.aA0vO8);
        cResult[1] = tmp6;
        cResult[2] = stringResult;
      } else {
        if (cResult[3] === tmp6) {
          if (cResult[4] === limit) {
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp17 = closure_6(tmp(10300).FavoritesSpotIllustration, {});
              cResult[6] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[6];
            }
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult1 = intl3.string(tmp(1126).t.pj0XBN);
              cResult[7] = stringResult1;
              let tmp18 = stringResult1;
            } else {
              tmp18 = cResult[7];
            }
            if (cResult[8] !== analyticsLocations) {
              const obj2 = {
                size: "lg",
                variant: "primary",
                text: tmp18,
                onPress() {
                  first();
                  const obj = {
                    analyticsLocations,
                    premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
                  };
                  openPremiumModalDefault(obj);
                },
              };
              const tmp22 = closure_6(tmp(5375).Button, obj2);
              cResult[8] = analyticsLocations;
              cResult[9] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[9];
            }
            if (cResult[10] !== tmp6) {
              const intl4 = tmp(1126).intl;
              const tmp4Result2 = tmp4(3439);
              const stringResult2 = intl4.string(tmp6 ? tmp4Result2.PprSsy : tmp4Result2["+dSwhE"]);
              cResult[10] = tmp6;
              cResult[11] = stringResult2;
            } else {
              const _Symbol3 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function x() {
                  first();
                  const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
                  router_utils.transitionToGuild(FAVORITES);
                };
                cResult[12] = fn2;
                let tmp27 = fn2;
              } else {
                tmp27 = cResult[12];
              }
              if (cResult[13] !== cResult[11]) {
                const obj3 = { size: "lg", variant: "secondary", text: tmp23, onPress: tmp27 };
                const tmp30 = closure_6(tmp(5375).Button, obj3);
                cResult[13] = tmp23;
                cResult[14] = tmp30;
                let tmp28 = tmp30;
              } else {
                tmp28 = cResult[14];
              }
              if (cResult[15] === tmp28) {
                if (cResult[16] === tmp20) {
                  let tmp31 = cResult[17];
                }
                if (cResult[18] === tmp31) {
                  if (cResult[19] === tmp7) {
                    if (cResult[20] === tmp11) {
                      let tmp34 = cResult[21];
                    }
                    return tmp34;
                  }
                }
                const obj4 = { title: tmp7, description: tmp11, illustration: tmp15, actions: tmp31 };
                const tmp36 = closure_6(tmp(10303).PromoSheet, obj4);
                cResult[18] = tmp31;
                cResult[19] = tmp7;
                cResult[20] = tmp11;
                cResult[21] = tmp36;
                tmp34 = tmp36;
              }
              const obj5 = { children: null };
              const items = [tmp20, tmp28];
              obj5.children = items;
              const tmp33 = closure_7(tmp(5963).ButtonGroup, obj5);
              cResult[15] = tmp28;
              cResult[16] = tmp20;
              cResult[17] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        const intl2 = tmp(1126).intl;
        if (tmp6) {
          const obj6 = { count: limit, maxCount: MAX_FAVORITE_CHANNELS };
          let formatToPlainStringResult = intl2.formatToPlainString(tmp4(3439).D7S0Zo, obj6);
        } else {
          formatToPlainStringResult = intl2.string(tmp4(3439)["WaP/lz"]);
        }
        cResult[3] = tmp6;
        cResult[4] = limit;
        cResult[5] = formatToPlainStringResult;
      }
      let obj = analyticsLocations(576);
    }
  : function FavoritesGuildUpsellSheet(limit) {
      let FREE_FAVORITE_LIMIT = limit.limit;
      if (FREE_FAVORITE_LIMIT === undefined) {
        FREE_FAVORITE_LIMIT = analyticsLocations(10295).FREE_FAVORITE_LIMIT;
      }
      let str = limit.source;
      if (str === undefined) {
        str = "channel_context_menu";
      }
      let str2 = limit.variant;
      if (str2 === undefined) {
        str2 = "no_access";
      }
      analyticsLocations = useTrackFavoritesGuildUpsellModalOpenedDefault(str).analyticsLocations;
      importDefault = noop.useCallback(() => {
        closure_1(5054).hideActionSheet(analyticsLocations(10297).FAVORITES_UPSELL_SHEET_KEY);
      }, []);
      const intl = analyticsLocations(1126).intl;
      const tmp8 = _modDef3439;
      let obj = {
        title: intl.string("limit_reached" === str2 ? tmp8.hINqUs : tmp8.aA0vO8),
        description: null,
        illustration: null,
        actions: null,
      };
      const intl2 = tmp7(1126).intl;
      if ("limit_reached" === str2) {
        const obj2 = { count: FREE_FAVORITE_LIMIT, maxCount: MAX_FAVORITE_CHANNELS };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp3(3439).D7S0Zo, obj2);
      } else {
        formatToPlainStringResult = intl2.string(tmp3(3439)["WaP/lz"]);
      }
      obj.description = formatToPlainStringResult;
      obj.illustration = closure_6(analyticsLocations(10300).FavoritesSpotIllustration, {});
      const obj3 = { size: "lg", variant: "primary", text: null, onPress: null };
      const intl3 = tmp7(1126).intl;
      obj3.text = intl3.string(analyticsLocations(1126).t.pj0XBN);
      obj3.onPress = function onPress() {
        closure_1();
        const obj = {
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      };
      const items = [closure_6(analyticsLocations(5375).Button, obj3)];
      const intl4 = tmp7(1126).intl;
      const tmp3Result = _modDef3439;
      const obj4 = { children: null };
      items[1] = closure_6(analyticsLocations(5375).Button, {
        size: "lg",
        variant: "secondary",
        text: intl4.string("limit_reached" === str2 ? tmp3Result.PprSsy : tmp3Result["+dSwhE"]),
        onPress() {
          closure_1();
          const result = FavoritesGuildAnalytics.setNextFavoritesGuildViewSource("upsell_modal");
          router_utils.transitionToGuild(FAVORITES);
        },
      });
      obj4.children = items;
      obj.actions = closure_7(analyticsLocations(5963).ButtonGroup, obj4);
      return closure_6(analyticsLocations(10303).PromoSheet, obj);
    };
