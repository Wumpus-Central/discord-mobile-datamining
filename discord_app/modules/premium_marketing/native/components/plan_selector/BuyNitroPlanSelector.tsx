// discord_app/modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx
import "formatSingleCurrencyPrice";
import { View } from "TableRadioRow";
import updateProduct from "updateProduct";
import { EUR_TO_HRK_CONVERSION_RATE as closure_5 } from "CustomCheckoutFlow";
import { CurrencyCodes } from "sum";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { header: null, hrkWarning: null };
createCacheKey = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: require("Themes").space.PX_8, overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: require("Themes").space.PX_8, overflow: "hidden" };
let result = require("updateProduct").fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx");

export default function BuyNitroPlanSelector(planSelection) {
  let c2;
  let items;
  planSelection = planSelection.planSelection;
  let selection;
  let dependencyMap;
  let isBuyNitroPurchaseBlocked;
  let updateProduct;
  let closure_5;
  selection = planSelection.selection;
  ({ items, unavailableProductIds: c2 } = planSelection);
  const tmp = createCacheKey();
  let obj = planSelection(589);
  items = [updateProduct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let product = null;
    if (null != selection.productId) {
      product = product.getProduct(tmp.productId);
    }
    return product;
  });
  let obj1 = planSelection(7932);
  isBuyNitroPurchaseBlocked = obj1.useIsBuyNitroPurchaseBlocked();
  let obj2 = planSelection(12840);
  updateProduct = obj2.useBuyNitroPlanLabelRenderer();
  let obj3 = planSelection(12841);
  closure_5 = obj3.useBuyNitroPlanSubLabelRenderer();
  obj = { style: tmp.header, children: null };
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
    const found = items.filter((productId) => !_undefined.has(productId.productId));
    obj2[3] = found.map((productId) => {
      const obj = { value: productId.productId, label: null, subLabel: null, disabled: null };
      obj[1] = product(planSelection, productId);
      obj[2] = callback(planSelection, productId);
      obj[3] = isBuyNitroPurchaseBlocked;
      return outer1_7(planSelection(_undefined[17]).TableRadioRow, obj, productId.productId);
    });
    tmp8Result = tmp8(tmp2(8101).TableRadioGroup, obj2);
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
    let tmp2Result = tmp2(5316);
    const obj6 = { convertToMajorUnits: null };
    const result = stateFromStores.price * closure_5;
    tmp2Result = tmp2(500);
    obj6[0] = tmp2Result.isAndroid();
    obj5[0] = tmp2Result.formatPrice(result, CurrencyCodes.HRK, obj6);
    obj4[0] = intl2.formatToPlainString(tmp2(1236).t["9hnZoK"], obj5);
    obj3[1] = tmp8(selection(7695), obj4);
    tmp8Result = tmp8(tmp7, obj3);
    const tmp9Result = selection(7695);
  }
  children[2] = tmp8Result;
  return callback2(isBuyNitroPurchaseBlocked, { children });
};