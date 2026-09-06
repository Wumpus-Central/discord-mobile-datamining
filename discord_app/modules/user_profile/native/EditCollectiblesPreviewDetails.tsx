// === Module 13174: EditCollectiblesPreviewDetails ===

// Module 13174 (EditCollectiblesPreviewDetails)
import initialize from "initialize" /* 504 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import Text_Text from "Text/Text" /* 4556 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8173 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
function EditCollectiblesPreviewDescription(arg0) {
  ({ user, purchase } = arg0);
  let stringResult = dependencyMap;
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  let obj = initialize;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = PremiumUtilsDefault;
  const canUseCollectiblesResult = obj1.canUseCollectibles(user);
  let obj2 = CollectiblesUtils;
  let result = obj2.isPremiumCollectiblesProduct(product);
  if (!result) {
    let tmpResult = tmp(7554);
    result = tmpResult.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (!canUseCollectiblesResult) {
    tmpResult = tmp(7554);
    result1 = tmpResult.isPremiumCollectiblesPurchase(purchase);
  }
  if (null != purchase) {
    if (!result1) {
      let expiresAt;
      if (purchase != null) {
        expiresAt = purchase.expiresAt;
      }
      let diffAsUnitsResult = null;
      if (null != expiresAt) {
        const _Date = Date;
        const date = new Date();
        diffAsUnitsResult = tmp(4242).diffAsUnits(date, purchase.expiresAt);
        const tmpResult1 = tmp(4242);
      }
      let tmp17 = null != diffAsUnitsResult;
      if (tmp17) {
        obj = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp(1114).intl;
        obj = { days: diffAsUnitsResult.days.toString() };
        obj.children = intl.format(tmp(1114).t.Io7ozn, obj);
        tmp17 = hasOwnProperty(tmp(4556).Text, obj);
      }
      const items1 = [tmp17, , ];
      const intl2 = tmp(1114).intl;
      let toLocaleDateStringResult;
      if (purchase != null) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
      obj2 = { date: toLocaleDateStringResult };
      obj1.children = intl2.format(tmp(1114).t.gW9R4B, obj2);
      items1[1] = hasOwnProperty(tmp(4556).Text, obj1);
      let expiresAt1;
      if (purchase != null) {
        expiresAt1 = purchase.expiresAt;
      }
      let tmp19Result = null != expiresAt1;
      if (tmp19Result) {
        const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl3 = tmp(1114).intl;
        const obj4 = { date: null };
        expiresAt = purchase.expiresAt;
        obj4.date = expiresAt.toLocaleDateString(stateFromStores, { minute: "numeric", hour: "numeric", day: "numeric", month: "long", year: "numeric" });
        obj3.children = intl3.format(tmp(1114).t.eZSTa5, obj4);
        tmp19Result = tmp19(tmp(4556).Text, obj3);
      }
      const obj5 = { children: null };
      items1[2] = tmp19Result;
      obj5.children = items1;
      return React5(timestampProducer, obj5);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = tmp(1114).intl;
      stringResult = intl5.string(tmp(1114).t.hmyYK8);
      obj6.children = stringResult;
      let tmp25Result = hasOwnProperty(tmp(4556).Text, obj6);
    } else {
      const tmp4Result = PremiumUtilsDefault;
      const Text = tmp(4556).Text;
      const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
      if (isPremiumResult) {
        obj7.children = nitroUpgradeCTA;
        tmp25Result = tmp25(Text, obj7);
      } else {
        obj7.children = nitroJoinCTA;
        tmp25Result = tmp25(Text, obj7);
      }
      isPremiumResult = PremiumUtilsDefault.isPremium(user);
    }
  } else {
    const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = tmp(1114).intl;
    obj8.children = intl4.string(tmp(1114).t.fEGjVQ);
    return hasOwnProperty(tmp(4556).Text, obj8);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = closure_8();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let tmp5Result = null;
  if (null != previewSkuId) {
    if (null != product) {
      let obj = { style: tmp.productDetailsContainer, children: null };
      let name;
      if (product != null) {
        name = product.name;
      }
      if (name == null) {
        let name1;
        if (purchase != null) {
          name1 = purchase.name;
        }
        name = name1;
      }
      obj = { variant: "text-md/bold", color: "text-default", children: name };
      const items = [hasOwnProperty(Text_Text.Text, obj), ];
      obj = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = hasOwnProperty(EditCollectiblesPreviewDescription, obj);
      obj.children = items;
      tmp5Result = React5(View, obj);
    } else {
      tmp5Result = null;
    }
  }
  return tmp5Result;
};