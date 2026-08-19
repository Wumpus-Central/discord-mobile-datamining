// === Module 12839: BuyNitroPlanSelector ===

// Module 12839 (BuyNitroPlanSelector)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateProduct from "updateProduct" /* 5319 */;
import { EUR_TO_HRK_CONVERSION_RATE as closure_5 } from "CustomCheckoutFlow" /* 4357 */;
import { CurrencyCodes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: ThemesDefault.space.PX_8, overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: ThemesDefault.space.PX_8, overflow: "hidden" };
let result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx");

export default function BuyNitroPlanSelector(planSelection) {
  planSelection = planSelection.planSelection;
  dependencyMap = undefined;
  closure_4 = undefined;
  const selection = planSelection.selection;
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
  obj1 = planSelection(7932);
  const isBuyNitroPurchaseBlocked = obj1.useIsBuyNitroPurchaseBlocked();
  let obj2 = planSelection(12840);
  closure_4 = obj2.useBuyNitroPlanLabelRenderer();
  let obj3 = planSelection(12841);
  closure_5 = obj3.useBuyNitroPlanSubLabelRenderer();
  obj = { title: null };
  const intl = planSelection(1236).intl;
  obj[0] = intl.string(planSelection(1236).t.u95Dt4);
  const items1 = [callback(selection(8026), obj), ];
  obj1 = { selectedTier: selection.tier, setSelectedTier: selection.setTier, disabled: isBuyNitroPurchaseBlocked };
  items1[1] = callback(selection(12842), obj1);
  obj[1] = items1;
  const children = [callback2(isBuyNitroPurchaseBlocked, obj), , ];
  let tmp8Result = null != selection.productId;
  if (tmp8Result) {
    obj2 = { hasIcons: false, value: null, onChange: null, children: null };
    ({ productId: obj8[1], setProductId: obj8[2] } = selection);
    const found = items.filter((item, index) => !_undefined.has(item.productId));
    obj2[3] = found.map((item, index) => closure_1_7(planSelection(_undefined[17]).TableRadioRow, { value: item.productId, label: product(planSelection, item), subLabel: callback(planSelection, item), disabled: isBuyNitroPurchaseBlocked }, item.productId));
    tmp8Result = callback(tmp2(8101).TableRadioGroup, obj2);
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
    obj3 = { style: null, children: null };
    obj3[0] = tmp.hrkWarning;
    const obj4 = { message: null };
    const intl2 = tmp2(1236).intl;
    const obj5 = { kunaPriceWithCurrency: null };
    tmp2(5316);
    const obj6 = { convertToMajorUnits: null };
    const result = stateFromStores.price * closure_5;
    const tmp2Result = tmp2(500);
    obj6[0] = tmp2Result.isAndroid();
    obj5[0] = tmp2Result.formatPrice(result, CurrencyCodes.HRK, obj6);
    obj4[0] = intl2.formatToPlainString(tmp2(1236).t["9hnZoK"], obj5);
    obj3[1] = callback(selection(7695), obj4);
    tmp8Result = callback(tmp7, obj3);
    const tmp9Result = selection(7695);
  }
  children[2] = tmp8Result;
  return callback2(isBuyNitroPurchaseBlocked, { children });
};