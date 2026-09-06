// discord_app/modules/user_profile/native/EditCollectiblesPreviewDetails.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import Text2 from "../../../design/components/Text/native/Text.tsx";
import getItemRecordsFromPurchases from "../../collectibles/CollectiblesUtils.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function EditCollectiblesPreviewDescription(arg0) {
  ({ user, purchase } = arg0);
  let stringResult = dependencyMap;
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  obj1 = getPremiumPlanItemDefault;
  const canUseCollectiblesResult = obj1.canUseCollectibles(user);
  let obj2 = getItemRecordsFromPurchases;
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
        obj = { days: null };
        obj[0] = diffAsUnitsResult.days.toString();
        obj[2] = intl.format(tmp(1114).t.Io7ozn, obj);
        tmp17 = callback(tmp(4556).Text, obj);
        const str = diffAsUnitsResult.days;
      }
      const items1 = [tmp17, ,];
      const intl2 = tmp(1114).intl;
      let toLocaleDateStringResult;
      if (purchase != null) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
      obj2 = { date: null };
      obj2[0] = toLocaleDateStringResult;
      obj1[2] = intl2.format(tmp(1114).t.gW9R4B, obj2);
      items1[1] = callback(tmp(4556).Text, obj1);
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
        obj4[0] = expiresAt.toLocaleDateString(stateFromStores, {
          minute: "numeric",
          hour: "numeric",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        obj3[2] = intl3.format(tmp(1114).t.eZSTa5, obj4);
        tmp19Result = tmp19(tmp(4556).Text, obj3);
      }
      const obj5 = { children: null };
      items1[2] = tmp19Result;
      obj5[0] = items1;
      return closure_7(closure_6, obj5);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = tmp(1114).intl;
      stringResult = intl5.string(tmp(1114).t.hmyYK8);
      obj6[2] = stringResult;
      let tmp25Result = callback(tmp(4556).Text, obj6);
    } else {
      const tmp4Result = getPremiumPlanItemDefault;
      const Text = tmp(4556).Text;
      const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
      if (isPremiumResult) {
        obj7[2] = nitroUpgradeCTA;
        tmp25Result = tmp25(Text, obj7);
      } else {
        obj7[2] = nitroJoinCTA;
        tmp25Result = tmp25(Text, obj7);
      }
      isPremiumResult = getPremiumPlanItemDefault.isPremium(user);
    }
  } else {
    const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = tmp(1114).intl;
    obj8[2] = intl4.string(tmp(1114).t.fEGjVQ);
    return callback(tmp(4556).Text, obj8);
  }
}
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({
  productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 },
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = callback2();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let tmp5Result = null;
  if (null != previewSkuId) {
    if (null != product) {
      let obj = { style: null, children: null };
      obj[0] = tmp.productDetailsContainer;
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
      obj = { variant: "text-md/bold", color: "text-default", children: null };
      obj[2] = name;
      const items = [closure_5(Text2.Text, obj)];
      obj = { user: null, product: null, purchase: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
      obj[0] = user;
      obj[1] = product;
      obj[2] = purchase;
      obj[3] = nitroJoinCTA;
      obj[4] = nitroUpgradeCTA;
      items[1] = closure_5(EditCollectiblesPreviewDescription, obj);
      obj[1] = items;
      tmp5Result = closure_7(View, obj);
      const tmp5 = closure_7;
      const tmp6 = View;
    } else {
      tmp5Result = null;
    }
  }
  return tmp5Result;
}
