// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import OrbCheckoutUtils from "../OrbCheckoutUtils.tsx";
import OrbsIcon2 from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import CollectiblesShopCheckoutDetailsDefault from "../../../collectibles/native/CollectiblesShopCheckoutDetails.tsx";
import OrbCheckoutAmountTagDefault from "../../native/OrbCheckoutAmountTag.tsx";
import OrbCheckoutModalContext from "../OrbCheckoutModalContext.tsx";
import useVirtualCurrencyBalance from "../../hooks/useVirtualCurrencyBalance.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let error, onPress, orbBalance, product;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  topRowWrapper: { width: "100%", marginBottom: 10 },
  rowWrapper: { width: "100%", marginVertical: 10 },
  rowDetailsContainer: obj2,
  orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  sectionTitle: obj3,
  spinner: obj4,
  disclaimer: { opacity: 0.5 },
  errorCard: obj5,
};
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  padding: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj5 = {
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (error) => {
      let first;
      let items;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      error = error.error;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = metroRequire(CircleErrorIcon.CircleErrorIcon, {
          size: "sm",
          color: "mobile-text-heading-primary",
        });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== error) {
        const obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items };
        items = [first];
        const Stack = Stack_Stack.Stack;
        const obj3 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: error };
        items[1] = metroRequire(Text_Text.Text, obj3);
        const tmp11 = metroImportDefault(Stack, obj2);
        cResult[1] = error;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.errorCard) {
        let tmp12;
        if (cResult[4] === tmp8) {
          tmp12 = cResult[5];
        }
        return tmp12;
      }
      const obj4 = { style: tmp4.errorCard, children: tmp8 };
      const tmp13 = metroRequire(React3, obj4);
      cResult[3] = tmp4.errorCard;
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      tmp12 = tmp13;
    }
  : (error) => {
      let Stack;
      let items;
      let obj2;
      error = error.error;
      const obj = { style: closure_8().errorCard, children: metroImportDefault(Stack, obj2) };
      obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items };
      Stack = Stack_Stack.Stack;
      items = [
        metroRequire(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }),
        metroRequire(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "mobile-text-heading-primary",
          children: error,
        }),
      ];
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      let items1;
      let sectionTitle;
      let tmp19;
      let tmp21;
      let tmp5;
      let topRowWrapper;
      const obj = react2;
      const cResult = obj.c(15);
      product = product.product;
      const tmp4 = closure_8();
      if (null == product) {
        if (cResult[0] === tmp4.rowDetailsContainer) {
          let tmp9;
          let tmp11;
          let tmp15;
          if (cResult[1] === tmp4.spinner) {
            tmp9 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp14 = metroRequire(hasOwnProperty, { size: "small" });
            cResult[3] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[3];
          }
          if (cResult[4] !== tmp9) {
            const obj2 = { style: tmp9, children: tmp11 };
            const tmp18 = metroRequire(React3, obj2);
            cResult[4] = tmp9;
            cResult[5] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[5];
          }
          tmp5 = tmp15;
        }
        const items = [,];
        ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp4);
        cResult[0] = tmp4.rowDetailsContainer;
        cResult[1] = tmp4.spinner;
        cResult[2] = items;
        tmp9 = items;
      } else if (cResult[6] !== product) {
        const obj3 = { product, useOrbPrice: true };
        const tmp8 = metroRequire(CollectiblesShopCheckoutDetailsDefault, obj3);
        cResult[6] = product;
        cResult[7] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[7];
      }
      ({ topRowWrapper, sectionTitle } = tmp4);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.hws7bC);
        cResult[8] = stringResult;
        tmp19 = stringResult;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== tmp4.sectionTitle) {
        const obj4 = {
          variant: "heading-sm/bold",
          color: "mobile-text-heading-primary",
          style: sectionTitle,
          children: tmp19,
        };
        const tmp23 = metroRequire(Text_Text.Text, obj4);
        cResult[9] = tmp4.sectionTitle;
        cResult[10] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[10];
      }
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp4.topRowWrapper) {
          let tmp24;
          if (cResult[13] === tmp21) {
            tmp24 = cResult[14];
          }
          return tmp24;
        }
      }
      const obj5 = { style: topRowWrapper, children: items1 };
      items1 = [tmp21, tmp5];
      const tmp25 = metroImportDefault(React3, obj5);
      cResult[11] = tmp5;
      cResult[12] = tmp4.topRowWrapper;
      cResult[13] = tmp21;
      cResult[14] = tmp25;
      tmp24 = tmp25;
    }
  : (product) => {
      let intl;
      let items;
      let items1;
      let tmp5;
      let tmp6;
      product = product.product;
      const tmp = closure_8();
      if (null == product) {
        const obj2 = { style: items, children: metroRequire(hasOwnProperty, { size: "small" }) };
        items = [,];
        ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
        tmp5 = metroRequire(React3, obj2);
        tmp6 = metroRequire;
      } else {
        const obj = { product, useOrbPrice: true };
        tmp5 = metroRequire(CollectiblesShopCheckoutDetailsDefault, obj);
        tmp6 = metroRequire;
      }
      const obj3 = { style: tmp.topRowWrapper, children: items1 };
      const obj4 = {
        variant: "heading-sm/bold",
        color: "mobile-text-heading-primary",
        style: tmp.sectionTitle,
        children: intl.string(intl3.t.hws7bC),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items1 = [tmp6(Text, obj4), tmp5];
      return metroImportDefault(React3, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (orbBalance) => {
      let first;
      let intl2;
      let items;
      let items1;
      let rowWrapper;
      let sectionTitle;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(16);
      orbBalance = orbBalance.orbBalance;
      const tmp4 = closure_8();
      ({ rowWrapper, sectionTitle } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["zLch/S"]);
        cResult[0] = stringResult;
        first = stringResult;
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
        const tmp9 = metroRequire(Text_Text.Text, obj2);
        cResult[1] = tmp4.sectionTitle;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.orbPaymentSourceDetails) {
        let tmp10;
        let tmp11;
        let tmp14;
        if (cResult[4] === tmp4.rowDetailsContainer) {
          tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: intl2.string(intl3.t.y0WGqP),
          };
          const Text = Text_Text.Text;
          intl2 = intl3.intl;
          const tmp13 = metroRequire(Text, obj3);
          cResult[6] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] !== orbBalance) {
          const obj4 = { orbAmount: orbBalance };
          const tmp17 = metroRequire(OrbCheckoutAmountTagDefault, obj4);
          cResult[7] = orbBalance;
          cResult[8] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp10) {
          let tmp18;
          if (cResult[10] === tmp14) {
            tmp18 = cResult[11];
          }
          if (cResult[12] === tmp4.rowWrapper) {
            if (cResult[13] === tmp7) {
              let tmp22;
              if (cResult[14] === tmp18) {
                tmp22 = cResult[15];
              }
              return tmp22;
            }
          }
          const obj5 = { style: rowWrapper, children: items };
          items = [tmp7, tmp18];
          const tmp25 = metroImportDefault(React3, obj5);
          cResult[12] = tmp4.rowWrapper;
          cResult[13] = tmp7;
          cResult[14] = tmp18;
          cResult[15] = tmp25;
          tmp22 = tmp25;
        }
        const obj6 = { style: tmp10, children: items1 };
        items1 = [tmp11, tmp14];
        const tmp21 = metroImportDefault(React3, obj6);
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
  : (orbBalance) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let items2;
      orbBalance = orbBalance.orbBalance;
      const tmp = closure_8();
      const obj = { style: tmp.rowWrapper, children: items };
      const obj2 = {
        variant: "heading-sm/bold",
        color: "mobile-text-heading-primary",
        style: tmp.sectionTitle,
        children: intl.string(intl3.t["zLch/S"]),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items = [metroRequire(Text, obj2)];
      const obj3 = { style: items1, children: items2 };
      items1 = [,];
      ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
      const obj4 = {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: intl2.string(intl3.t.y0WGqP),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items2 = [metroRequire(Text2, obj4), metroRequire(OrbCheckoutAmountTagDefault, { orbAmount: orbBalance })];
      items[1] = metroImportDefault(React3, obj3);
      return metroImportDefault(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_8();
      const obj2 = OrbCheckoutModalContext;
      const skuId = obj2.useOrbCheckoutModalContext().skuId;
      if (cResult[0] !== skuId) {
        const tmpResult = OrbCheckoutUtils;
        const orbCheckoutDisclaimerMessage = tmpResult.getOrbCheckoutDisclaimerMessage(skuId);
        cResult[0] = skuId;
        cResult[1] = orbCheckoutDisclaimerMessage;
        tmp5 = orbCheckoutDisclaimerMessage;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        let tmp7;
        if (cResult[3] === tmp4.disclaimer) {
          tmp7 = cResult[4];
        }
        return tmp7;
      }
      const obj3 = {
        style: tmp4.disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: tmp5,
      };
      const tmp8 = metroRequire(Text_Text.Text, obj3);
      cResult[2] = tmp5;
      cResult[3] = tmp4.disclaimer;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : () => {
      let skuId;
      const tmp = closure_8();
      let obj = skuId(12990);
      skuId = obj.useOrbCheckoutModalContext().skuId;
      const items = [skuId];
      const memo = react.useMemo(() => {
        const obj = OrbCheckoutUtils;
        return obj.getOrbCheckoutDisclaimerMessage(skuId);
      }, items);
      const obj2 = {
        style: tmp.disclaimer,
        variant: "text-xxs/normal",
        color: "interactive-text-active",
        children: memo,
      };
      return closure_6(skuId(4886).Text, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      let isRedeeming;
      let orbProductContext;
      let tmp11;
      const obj = react2;
      const cResult = obj.c(9);
      onPress = onPress.onPress;
      const tmp4 = useThemeDefault();
      const obj2 = OrbCheckoutModalContext;
      const orbCheckoutModalContext = obj2.useOrbCheckoutModalContext();
      ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
      const obj3 = useVirtualCurrencyBalance;
      const virtualCurrencyBalance = obj3.useVirtualCurrencyBalance();
      let orbPriceAmount;
      if (orbProductContext != null) {
        orbPriceAmount = orbProductContext.orbPriceAmount;
      }
      let str = "primary";
      const tmpResult = shared;
      if (tmpResult.isThemeDark(tmp4)) {
        str = "primary-overlay";
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["zLch/S"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      let str2 = "control-primary-text-default";
      const tmpResult2 = shared;
      if (tmpResult2.isThemeDark(tmp4)) {
        str2 = "control-overlay-primary-text-default";
      }
      if (cResult[1] !== str2) {
        const obj4 = { size: "md", color: str2 };
        const tmp13 = metroRequire(OrbsIcon2.OrbsIcon, obj4);
        cResult[1] = str2;
        cResult[2] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[2];
      }
      if (
        cResult[3] ===
        (isRedeeming ||
          null == orbPriceAmount ||
          null == virtualCurrencyBalance ||
          virtualCurrencyBalance < orbPriceAmount)
      ) {
        if (cResult[4] === isRedeeming) {
          if (cResult[5] === onPress) {
            if (cResult[6] === str) {
              let tmp14;
              if (cResult[7] === tmp11) {
                tmp14 = cResult[8];
              }
              return tmp14;
            }
          }
        }
      }
      const tmp15 = metroRequire(components_Button_Button.Button, {
        variant: str,
        size: "lg",
        text: first,
        icon: tmp11,
        iconPosition: "start",
        loading: isRedeeming,
        onPress,
        disabled:
          isRedeeming ||
          null == orbPriceAmount ||
          null == virtualCurrencyBalance ||
          virtualCurrencyBalance < orbPriceAmount,
      });
      cResult[3] =
        isRedeeming ||
        null == orbPriceAmount ||
        null == virtualCurrencyBalance ||
        virtualCurrencyBalance < orbPriceAmount;
      cResult[4] = isRedeeming;
      cResult[5] = onPress;
      cResult[6] = str;
      cResult[7] = tmp11;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    }
  : (onPress) => {
      let OrbsIcon;
      let intl;
      let isRedeeming;
      let orbPriceAmount;
      let orbProductContext;
      let str2;
      onPress = onPress.onPress;
      const tmp2 = useThemeDefault();
      const obj = OrbCheckoutModalContext;
      const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
      ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
      const obj2 = useVirtualCurrencyBalance;
      const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
      if (orbProductContext != null) {
        orbPriceAmount = orbProductContext.orbPriceAmount;
      }
      const Button = components_Button_Button.Button;
      let str = "primary";
      const tmp3Result = shared;
      if (tmp3Result.isThemeDark(tmp2)) {
        str = "primary-overlay";
      }
      const obj3 = {
        variant: str,
        size: "lg",
        text: intl.string(intl3.t["zLch/S"]),
        icon: metroRequire(OrbsIcon, { size: "md", color: str2 }),
        iconPosition: "start",
        loading: isRedeeming,
        onPress,
        disabled: isRedeeming,
      };
      intl = intl3.intl;
      OrbsIcon = OrbsIcon2.OrbsIcon;
      str2 = "control-primary-text-default";
      const tmp3Result2 = shared;
      if (tmp3Result2.isThemeDark(tmp2)) {
        str2 = "control-overlay-primary-text-default";
      }
      if (!isRedeeming) {
        isRedeeming = null == orbPriceAmount;
      }
      if (!isRedeeming) {
        isRedeeming = null == virtualCurrencyBalance;
      }
      if (!isRedeeming) {
        isRedeeming = virtualCurrencyBalance < orbPriceAmount;
      }
      return metroRequire(Button, obj3);
    };
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = tmp5;
export const OrbCheckoutOrderSummary = tmp6;
export const OrbCheckoutPaymentSourceDetails = tmp7;
export const OrbCheckoutLegalFinePrint = tmp8;
export const OrbCheckoutPurchaseButton = tmp9;
