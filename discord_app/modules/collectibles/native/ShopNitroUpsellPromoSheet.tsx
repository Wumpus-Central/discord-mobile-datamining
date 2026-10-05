// discord_app/modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import ButtonGroup2 from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import PremiumUpsellUtils from "../../../utils/native/PremiumUpsellUtils.tsx";
import PremiumFeatureUpsellUtils from "../../premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import PromoSheet2 from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import DiscountsMegaphoneSpotIllustration from "../../../design/components/mana-assets/native/generated/DiscountsMegaphoneSpotIllustration.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const AnalyticsPages = Constants.AnalyticsPages;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let description;
      let items1;
      let loading;
      let onPress;
      let title;
      let tmp10;
      let tmp13;
      let tmp4;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(18);
      ({ analyticsLocations, title, description } = arg0);
      if (cResult[0] !== analyticsLocations) {
        let items = analyticsLocations;
        if (undefined === analyticsLocations) {
          items = [];
        }
        cResult[0] = analyticsLocations;
        cResult[1] = items;
        tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      const analyticsLocations2 = useAnalyticsLocationsDefault(tmp4).analyticsLocations;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = PremiumFeatureUpsellUtils;
        const upsellType = tmpResult.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING);
        cResult[2] = upsellType;
        tmp7 = upsellType;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult2 = PremiumUpsellUtils;
      const onViewAllPerks = tmpResult2.usePremiumUpsellConfig(tmp7, analyticsLocations2).onViewAllPerks;
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
        undefined,
        tmp4,
      ));
      usePremiumFeatureUpsellGetNitroDefault(
        false,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
        undefined,
        tmp4,
      );
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = React3(DiscountsMegaphoneSpotIllustration.DiscountsMegaphoneSpotIllustration, {});
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["8x0jKT"]);
        cResult[4] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === loading) {
        let tmp15;
        let tmp17;
        let tmp19;
        if (cResult[6] === onPress) {
          tmp15 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.PcTCB7);
          cResult[8] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== onViewAllPerks) {
          const obj2 = { size: "lg", variant: "secondary", text: tmp17, onPress: onViewAllPerks };
          const tmp21 = React3(components_Button_Button.Button, obj2);
          cResult[9] = onViewAllPerks;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] === tmp15) {
          let tmp22;
          if (cResult[12] === tmp19) {
            tmp22 = cResult[13];
          }
          if (cResult[14] === description) {
            if (cResult[15] === tmp22) {
              let tmp25;
              if (cResult[16] === title) {
                tmp25 = cResult[17];
              }
              return tmp25;
            }
          }
          const obj3 = { illustration: tmp10, title, description, actions: tmp22 };
          const tmp27 = React3(PromoSheet2.PromoSheet, obj3);
          cResult[14] = description;
          cResult[15] = tmp22;
          cResult[16] = title;
          cResult[17] = tmp27;
          tmp25 = tmp27;
        }
        const obj4 = { children: items1 };
        items1 = [tmp15, tmp19];
        const tmp24 = hasOwnProperty(ButtonGroup2.ButtonGroup, obj4);
        cResult[11] = tmp15;
        cResult[12] = tmp19;
        cResult[13] = tmp24;
        tmp22 = tmp24;
      }
      const tmp16 = React3(NitroUpsellButtonDefault, { text: tmp13, loading, onPress, shiny: false });
      cResult[5] = loading;
      cResult[6] = onPress;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  : (analyticsLocations) => {
      let ButtonGroup;
      let description;
      let intl;
      let intl2;
      let items;
      let loading;
      let obj3;
      let onPress;
      let title;
      let analyticsLocations1 = analyticsLocations.analyticsLocations;
      if (analyticsLocations1 === undefined) {
        analyticsLocations1 = [];
      }
      ({ title, description } = analyticsLocations);
      analyticsLocations = useAnalyticsLocationsDefault(analyticsLocations1).analyticsLocations;
      const usePremiumUpsellConfig = PremiumUpsellUtils.usePremiumUpsellConfig;
      PremiumUpsellUtils;
      const obj = PremiumFeatureUpsellUtils;
      const onViewAllPerks = usePremiumUpsellConfig(
        obj.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING),
        analyticsLocations,
      ).onViewAllPerks;
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        false,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
        undefined,
        analyticsLocations1,
      ));
      const obj2 = {
        illustration: React3(DiscountsMegaphoneSpotIllustration.DiscountsMegaphoneSpotIllustration, {}),
        title,
        description,
        actions: hasOwnProperty(ButtonGroup, obj3),
      };
      usePremiumFeatureUpsellGetNitroDefault(
        false,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
        undefined,
        analyticsLocations1,
      );
      const PromoSheet = PromoSheet2.PromoSheet;
      obj3 = { children: items };
      ButtonGroup = ButtonGroup2.ButtonGroup;
      const obj4 = { text: intl.string(intl3.t["8x0jKT"]), loading, onPress, shiny: false };
      const tmp3 = NitroUpsellButtonDefault;
      intl = intl3.intl;
      items = [React3(tmp3, obj4)];
      const obj5 = { size: "lg", variant: "secondary", text: intl2.string(intl3.t.PcTCB7), onPress: onViewAllPerks };
      const Button = components_Button_Button.Button;
      intl2 = intl3.intl;
      items[1] = React3(Button, obj5);
      return React3(PromoSheet, obj2);
    };
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx");

export default tmp4;
