// discord_app/modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../stores/native/IAPStore.android.tsx";
import { EUR_TO_HRK_CONVERSION_RATE as closure_5 } from "../../../../payments/PaymentConstants.tsx";
import { CurrencyCodes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { header: null, hrkWarning: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: ThemesDefault.space.PX_8, overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: ThemesDefault.space.PX_8, overflow: "hidden" };
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx");

export default function BuyNitroPlanSelector(planSelection) {
  planSelection = planSelection.planSelection;
  let selection;
  dependencyMap = undefined;
  let isBuyNitroPurchaseBlocked;
  closure_4 = undefined;
  closure_5 = undefined;
  selection = planSelection.selection;
  ({ items, unavailableProductIds: c2 } = planSelection);
  const tmp = callback3();
  let obj = planSelection(589);
  items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != selection.productId) {
      product = product.getProduct(tmp.productId);
    }
    return product;
  });
  obj1 = planSelection(7792);
  isBuyNitroPurchaseBlocked = obj1.useIsBuyNitroPurchaseBlocked();
  let obj2 = planSelection(12882);
  closure_4 = obj2.useBuyNitroPlanLabelRenderer();
  let obj3 = planSelection(12883);
  closure_5 = obj3.useBuyNitroPlanSubLabelRenderer();
  obj = { style: tmp.header, children: null };
  obj = { title: null };
  const intl = planSelection(1236).intl;
  obj[0] = intl.string(planSelection(1236).t.u95Dt4);
  const items1 = [callback(selection(7887), obj), ];
  obj1 = { selectedTier: selection.tier, setSelectedTier: selection.setTier, disabled: isBuyNitroPurchaseBlocked };
  items1[1] = callback(selection(12884), obj1);
  obj[1] = items1;
  const children = [callback2(isBuyNitroPurchaseBlocked, obj), , ];
  let tmp8Result = null != selection.productId;
  if (tmp8Result) {
    obj2 = { hasIcons: false, value: null, onChange: null, children: null };
    ({ productId: obj8[1], setProductId: obj8[2] } = selection);
    const found = items.filter((productId) => !_undefined.has(productId.productId));
    obj2[3] = found.map((productId) => closure_1_7(planSelection(_undefined[17]).TableRadioRow, { value: productId.productId, label: product(planSelection, productId), subLabel: callback(planSelection, productId), disabled: isBuyNitroPurchaseBlocked }, productId.productId));
    tmp8Result = tmp8(tmp2(8136).TableRadioGroup, obj2);
  }
  children[1] = tmp8Result;
  tmp8Result = null != stateFromStores;
  if (tmp8Result) {
    tmp8Result = "HR" === stateFromStores.countryCode;
  }
  if (tmp8Result) {
    tmp8Result = stateFromStores.currencyCode.toLowerCase() === CurrencyCodes.EUR;
    const str2 = stateFromStores.currencyCode;
  }
  if (tmp8Result) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.hrkWarning;
    const obj4 = { message: null };
    const intl2 = tmp2(1236).intl;
    const obj5 = { kunaPriceWithCurrency: null };
    let tmp2Result = tmp2(5962);
    const obj6 = { convertToMajorUnits: null };
    const result = stateFromStores.price * closure_5;
    tmp2Result = tmp2(500);
    obj6[0] = tmp2Result.isAndroid();
    obj5[0] = tmp2Result.formatPrice(result, CurrencyCodes.HRK, obj6);
    obj4[0] = intl2.formatToPlainString(tmp2(1236).t["9hnZoK"], obj5);
    obj3[1] = tmp8(selection(7554), obj4);
    tmp8Result = tmp8(tmp7, obj3);
    const tmp9Result = selection(7554);
  }
  children[2] = tmp8Result;
  return callback2(isBuyNitroPurchaseBlocked, { children });
};