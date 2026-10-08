// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import OrbCheckoutUtils from "../OrbCheckoutUtils.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import CollectiblesShopCheckoutDetailsDefault from "../../../collectibles/native/CollectiblesShopCheckoutDetails.tsx";
import OrbCheckoutAmountTagDefault from "../../native/OrbCheckoutAmountTag.tsx";
import OrbCheckoutModalContext from "../OrbCheckoutModalContext.tsx";
import useVirtualCurrencyBalance from "../../hooks/useVirtualCurrencyBalance.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  topRowWrapper: { width: "100%", marginBottom: 10 },
  rowWrapper: { width: "100%", marginVertical: 10 },
  rowDetailsContainer: {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    padding: nativeDefault.space.PX_16,
  },
  orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  sectionTitle: null,
  spinner: null,
  disclaimer: null,
  errorCard: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  padding: nativeDefault.space.PX_16,
};
obj2.sectionTitle = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.disclaimer = { opacity: 0.5 };
let obj5 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.errorCard = {
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj6 = {
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutErrorCard(error) {
      const cResult = c.c(6);
      error = error.error;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = timestampProducer(CircleErrorIcon.CircleErrorIcon, {
          size: "sm",
          color: "mobile-text-heading-primary",
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== error) {
        const obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
        const items = [first];
        const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: error };
        items[1] = timestampProducer(Text_Text.Text, obj3);
        obj2.children = items;
        const tmp11 = React5(Stack_Stack.Stack, obj2);
        cResult[1] = error;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.errorCard) {
        if (cResult[4] === tmp8) {
          let tmp12 = cResult[5];
        }
        return tmp12;
      }
      const tmp13 = timestampProducer(React4, { style: tmp4.errorCard, children: tmp8 });
      cResult[3] = tmp4.errorCard;
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      const obj4 = { style: tmp4.errorCard, children: tmp8 };
    }
  : function OrbCheckoutErrorCard(children) {
      const obj = { style: closure_8().errorCard, children: null };
      const obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
      const items = [
        timestampProducer(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "mobile-text-heading-primary",
          children: children.error,
        }),
      ];
      obj2.children = items;
      obj.children = React5(Stack_Stack.Stack, obj2);
      return timestampProducer(React4, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutOrderSummary(product) {
      const cResult = c.c(15);
      product = product.product;
      const tmp4 = closure_8();
      if (null == product) {
        if (cResult[0] === tmp4.rowDetailsContainer) {
          if (cResult[1] === tmp4.spinner) {
            let tmp9 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp14 = timestampProducer(hasOwnProperty, { size: "small" });
            cResult[3] = tmp14;
            let tmp11 = tmp14;
          } else {
            tmp11 = cResult[3];
          }
          if (cResult[4] !== tmp9) {
            const obj2 = { style: tmp9, children: tmp11 };
            const tmp18 = timestampProducer(React4, obj2);
            cResult[4] = tmp9;
            cResult[5] = tmp18;
          }
        }
        const items = [,];
        ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp4);
        cResult[0] = tmp4.rowDetailsContainer;
        cResult[1] = tmp4.spinner;
        cResult[2] = items;
        tmp9 = items;
      } else {
        if (cResult[6] !== product) {
          const obj3 = { product, useOrbPrice: true };
          const tmp8 = timestampProducer(CollectiblesShopCheckoutDetailsDefault, obj3);
          cResult[6] = product;
          cResult[7] = tmp8;
          let tmp5 = tmp8;
        } else {
          tmp5 = cResult[7];
        }
        const _Symbol2 = Symbol;
        ({ topRowWrapper, sectionTitle } = tmp4);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.hws7bC);
          cResult[8] = stringResult;
          let tmp21 = stringResult;
        } else {
          tmp21 = cResult[8];
        }
        if (cResult[9] !== tmp4.sectionTitle) {
          const obj4 = {
            variant: "heading-sm/bold",
            color: "mobile-text-heading-primary",
            style: sectionTitle,
            children: tmp21,
          };
          const tmp25 = timestampProducer(Text_Text.Text, obj4);
          cResult[9] = tmp4.sectionTitle;
          cResult[10] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp4.topRowWrapper) {
            if (cResult[13] === tmp23) {
              let tmp26 = cResult[14];
            }
            return tmp26;
          }
        }
        const obj5 = { style: topRowWrapper, children: null };
        const items1 = [tmp23, tmp5];
        obj5.children = items1;
        const tmp29 = React5(React4, obj5);
        cResult[11] = tmp5;
        cResult[12] = tmp4.topRowWrapper;
        cResult[13] = tmp23;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
    }
  : function OrbCheckoutOrderSummary(product) {
      product = product.product;
      const tmp = closure_8();
      if (null == product) {
        const obj2 = { style: null, children: null };
        const items = [,];
        ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
        obj2.style = items;
        obj2.children = timestampProducer(hasOwnProperty, { size: "small" });
        let tmp5 = timestampProducer(React4, obj2);
        let tmp6 = timestampProducer;
      } else {
        const obj = { product, useOrbPrice: true };
        tmp5 = timestampProducer(CollectiblesShopCheckoutDetailsDefault, obj);
        tmp6 = timestampProducer;
      }
      const obj3 = { style: tmp.topRowWrapper, children: null };
      const obj4 = {
        variant: "heading-sm/bold",
        color: "mobile-text-heading-primary",
        style: tmp.sectionTitle,
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.hws7bC);
      const items1 = [tmp6(Text_Text.Text, obj4), tmp5];
      obj3.children = items1;
      return React5(React4, obj3);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutPaymentSourceDetails(orbBalance) {
      const cResult = c.c(16);
      orbBalance = orbBalance.orbBalance;
      const tmp4 = closure_8();
      ({ rowWrapper, sectionTitle } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["zLch/S"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.sectionTitle) {
        const obj2 = {
          variant: "heading-sm/bold",
          color: "mobile-text-heading-primary",
          style: sectionTitle,
          children: first,
        };
        const tmp9 = timestampProducer(Text_Text.Text, obj2);
        cResult[1] = tmp4.sectionTitle;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.orbPaymentSourceDetails) {
        if (cResult[4] === tmp4.rowDetailsContainer) {
          let tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
          const intl2 = util.intl;
          obj3.children = intl2.string(util.t.y0WGqP);
          const tmp13 = timestampProducer(Text_Text.Text, obj3);
          cResult[6] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] !== orbBalance) {
          const obj4 = { orbAmount: orbBalance };
          const tmp17 = timestampProducer(OrbCheckoutAmountTagDefault, obj4);
          cResult[7] = orbBalance;
          cResult[8] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp14) {
            let tmp18 = cResult[11];
          }
          if (cResult[12] === tmp4.rowWrapper) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp18) {
                let tmp22 = cResult[15];
              }
              return tmp22;
            }
          }
          const obj5 = { style: rowWrapper, children: null };
          const items = [tmp7, tmp18];
          obj5.children = items;
          const tmp25 = React5(React4, obj5);
          cResult[12] = tmp4.rowWrapper;
          cResult[13] = tmp7;
          cResult[14] = tmp18;
          cResult[15] = tmp25;
          tmp22 = tmp25;
        }
        const obj6 = { style: tmp10, children: null };
        const items1 = [tmp11, tmp14];
        obj6.children = items1;
        const tmp21 = React5(React4, obj6);
        cResult[9] = tmp10;
        cResult[10] = tmp14;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const items2 = [,];
      ({ rowDetailsContainer: arr[0], orbPaymentSourceDetails: arr[1] } = tmp4);
      cResult[3] = tmp4.orbPaymentSourceDetails;
      cResult[4] = tmp4.rowDetailsContainer;
      cResult[5] = items2;
      tmp10 = items2;
    }
  : function OrbCheckoutPaymentSourceDetails(orbAmount) {
      const tmp = closure_8();
      const obj = { style: tmp.rowWrapper, children: null };
      const obj2 = {
        variant: "heading-sm/bold",
        color: "mobile-text-heading-primary",
        style: tmp.sectionTitle,
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t["zLch/S"]);
      const items = [timestampProducer(Text_Text.Text, obj2)];
      const obj3 = { style: null, children: null };
      const items1 = [,];
      ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
      obj3.style = items1;
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.y0WGqP);
      const items2 = [
        timestampProducer(Text_Text.Text, obj4),
        timestampProducer(OrbCheckoutAmountTagDefault, { orbAmount: orbAmount.orbBalance }),
      ];
      obj3.children = items2;
      items[1] = React5(React4, obj3);
      obj.children = items;
      return React5(React4, obj);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutLegalFinePrint() {
      const cResult = c.c(5);
      const tmp4 = closure_8();
      const skuId = OrbCheckoutModalContext.useOrbCheckoutModalContext().skuId;
      if (cResult[0] !== skuId) {
        const orbCheckoutDisclaimerMessage = OrbCheckoutUtils.getOrbCheckoutDisclaimerMessage(skuId);
        cResult[0] = skuId;
        cResult[1] = orbCheckoutDisclaimerMessage;
        let tmp5 = orbCheckoutDisclaimerMessage;
        const tmpResult = OrbCheckoutUtils;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4.disclaimer) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = timestampProducer(Text_Text.Text, {
        style: tmp4.disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: tmp5,
      });
      cResult[2] = tmp5;
      cResult[3] = tmp4.disclaimer;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj3 = {
        style: tmp4.disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: tmp5,
      };
    }
  : function OrbCheckoutLegalFinePrint() {
      const tmp = closure_8();
      skuId = skuId(13287).useOrbCheckoutModalContext().skuId;
      const items = [skuId];
      const memo = noop.useMemo(() => OrbCheckoutUtils.getOrbCheckoutDisclaimerMessage(skuId), items);
      return closure_6(skuId(5086).Text, {
        style: tmp.disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: memo,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = tmp4;
export const OrbCheckoutOrderSummary = tmp5;
export const OrbCheckoutPaymentSourceDetails = tmp6;
export const OrbCheckoutLegalFinePrint = tmp7;
export const OrbCheckoutPurchaseButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutPurchaseButton(onPress) {
      const cResult = c.c(9);
      onPress = onPress.onPress;
      const tmp4 = useThemeDefault();
      const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
      ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
      const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
      if (orbProductContext != null) {
        const orbPriceAmount = orbProductContext.orbPriceAmount;
      }
      let tmp7 = isRedeeming;
      if (!isRedeeming) {
        tmp7 = null == orbPriceAmount;
      }
      if (!tmp7) {
        tmp7 = null == virtualCurrencyBalance;
      }
      if (!tmp7) {
        tmp7 = virtualCurrencyBalance < orbPriceAmount;
      }
      let str = "primary";
      if (tmpResult.isThemeDark(tmp4)) {
        str = "primary-overlay";
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["zLch/S"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      tmpResult = shared;
      let str2 = "control-primary-text-default";
      if (tmpResult2.isThemeDark(tmp4)) {
        str2 = "control-overlay-primary-text-default";
      }
      if (cResult[1] !== str2) {
        const obj4 = { size: "md", color: str2 };
        const tmp12 = timestampProducer(OrbsIcon.OrbsIcon, obj4);
        cResult[1] = str2;
        cResult[2] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === tmp7) {
        if (cResult[4] === isRedeeming) {
          if (cResult[5] === onPress) {
            if (cResult[6] === str) {
              if (cResult[7] === tmp10) {
                let tmp13 = cResult[8];
              }
              return tmp13;
            }
          }
        }
      }
      const tmp14 = timestampProducer(components_Button_Button.Button, {
        variant: str,
        size: "lg",
        text: first,
        icon: tmp10,
        iconPosition: "start",
        loading: isRedeeming,
        onPress,
        disabled: tmp7,
      });
      cResult[3] = tmp7;
      cResult[4] = isRedeeming;
      cResult[5] = onPress;
      cResult[6] = str;
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      tmp13 = tmp14;
      tmpResult2 = shared;
    }
  : function OrbCheckoutPurchaseButton(onPress) {
      const tmp2 = useThemeDefault();
      const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
      ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
      const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
      if (orbProductContext != null) {
        const orbPriceAmount = orbProductContext.orbPriceAmount;
      }
      let str = "primary";
      if (tmp3Result.isThemeDark(tmp2)) {
        str = "primary-overlay";
      }
      const obj3 = {
        variant: str,
        size: "lg",
        text: null,
        icon: null,
        iconPosition: "start",
        loading: null,
        onPress: null,
        disabled: null,
      };
      const intl = util.intl;
      obj3.text = intl.string(util.t["zLch/S"]);
      tmp3Result = shared;
      let str2 = "control-primary-text-default";
      if (tmp3Result2.isThemeDark(tmp2)) {
        str2 = "control-overlay-primary-text-default";
      }
      obj3.icon = timestampProducer(OrbsIcon.OrbsIcon, { size: "md", color: str2 });
      obj3.loading = isRedeeming;
      obj3.onPress = onPress.onPress;
      if (!isRedeeming) {
        isRedeeming = null == orbPriceAmount;
      }
      if (!isRedeeming) {
        isRedeeming = null == virtualCurrencyBalance;
      }
      if (!isRedeeming) {
        isRedeeming = virtualCurrencyBalance < orbPriceAmount;
      }
      obj3.disabled = isRedeeming;
      return timestampProducer(components_Button_Button.Button, obj3);
    };
