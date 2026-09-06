// discord_app/modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRadioRow from "../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../../../stores/native/IAPStore.android.tsx";

require = fn;
const View = fn(17).View;
let closure_5 = fn(4542).EUR_TO_HRK_CONVERSION_RATE;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { header: null, hrkWarning: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: nativeDefault.space.PX_8,
};
createStyles.header = createStyles;
createStyles.hrkWarning = {
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  backgroundColor: fn(5441).DARK_PRIMARY_630_LIGHT_PRIMARY_230,
  marginTop: nativeDefault.space.PX_8,
  overflow: "hidden",
};
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx",
);

export default function BuyNitroPlanSelector(planSelection) {
  planSelection = planSelection.planSelection;
  dependencyMap = undefined;
  closure_4 = undefined;
  const selection = planSelection.selection;
  ({ items, unavailableProductIds: c2 } = planSelection);
  const tmp = closure_9();
  let obj = planSelection(504);
  items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != selection.productId) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  let obj1 = planSelection(13356);
  const isBuyNitroPurchaseBlocked = obj1.useIsBuyNitroPurchaseBlocked();
  let obj2 = planSelection(13404);
  closure_4 = obj2.useBuyNitroPlanLabelRenderer();
  let obj3 = planSelection(13405);
  closure_5 = obj3.useBuyNitroPlanSubLabelRenderer();
  obj = { style: tmp.header, children: null };
  obj = { title: null };
  const intl = planSelection(1114).intl;
  obj.title = intl.string(planSelection(1114).t.u95Dt4);
  const items1 = [closure_7(selection(13392), obj)];
  obj1 = { selectedTier: selection.tier, setSelectedTier: selection.setTier, disabled: isBuyNitroPurchaseBlocked };
  items1[1] = closure_7(selection(13406), obj1);
  obj.children = items1;
  const children = [closure_8(isBuyNitroPurchaseBlocked, obj), ,];
  let tmp8Result = null != selection.productId;
  if (tmp8Result) {
    obj2 = { hasIcons: false, value: null, onChange: null, children: null };
    ({ productId: obj8.value, setProductId: obj8.onChange } = selection);
    const found = items.filter((productId) => !_undefined.has(productId.productId));
    obj2.children = found.map((productId) =>
      React5(
        TableRadioRow.TableRadioRow,
        {
          value: productId.productId,
          label: closure_4(planSelection, productId),
          subLabel: closure_5(planSelection, productId),
          disabled: isBuyNitroPurchaseBlocked,
        },
        productId.productId,
      ),
    );
    tmp8Result = tmp8(tmp2(5685).TableRadioGroup, obj2);
  }
  children[1] = tmp8Result;
  tmp8Result = null != stateFromStores;
  if (tmp8Result) {
    tmp8Result = "HR" === stateFromStores.countryCode;
  }
  if (tmp8Result) {
    tmp8Result = stateFromStores.currencyCode.toLowerCase() === CurrencyCodes.EUR;
  }
  if (tmp8Result) {
    obj3 = { style: tmp.hrkWarning, children: null };
    const obj4 = { message: null };
    const intl2 = tmp2(1114).intl;
    const obj5 = { kunaPriceWithCurrency: null };
    tmp2(7234);
    const obj6 = { convertToMajorUnits: null };
    const result = stateFromStores.price * closure_5;
    const tmp2Result = tmp2(1115);
    obj6.convertToMajorUnits = tmp2Result.isAndroid();
    obj5.kunaPriceWithCurrency = tmp2Result.formatPrice(result, CurrencyCodes.HRK, obj6);
    obj4.message = intl2.formatToPlainString(tmp2(1114).t["9hnZoK"], obj5);
    obj3.children = tmp8(selection(13300), obj4);
    tmp8Result = tmp8(tmp7, obj3);
    const tmp9Result = selection(13300);
  }
  children[2] = tmp8Result;
  return closure_8(isBuyNitroPurchaseBlocked, { children });
}
