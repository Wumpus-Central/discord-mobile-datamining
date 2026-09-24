// discord_app/modules/user_profile/native/EditCollectiblesPreviewDetails.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CollectiblesUtils from "../../collectibles/CollectiblesUtils.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";

require = fn;
function EditCollectiblesPreviewDescription(arg0) {
  ({ user, purchase } = arg0);
  let stringResult = dependencyMap;
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  const items = [LocaleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => locale.locale);
  const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  if (!result) {
    result = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
    const tmpResult = CollectiblesUtils;
  }
  let result1 = !canUseCollectiblesResult;
  if (!canUseCollectiblesResult) {
    result1 = CollectiblesUtils.isPremiumCollectiblesPurchase(purchase);
    const tmpResult3 = CollectiblesUtils;
  }
  if (null != purchase) {
    if (!result1) {
      let expiresAt1;
      if (purchase != null) {
        expiresAt1 = purchase.expiresAt;
      }
      let diffAsUnitsResult = null;
      if (null != expiresAt1) {
        const _Date = Date;
        const date = new Date();
        diffAsUnitsResult = DateUtils.diffAsUnits(date, purchase.expiresAt);
        const tmpResult4 = DateUtils;
      }
      let tmp17 = null != diffAsUnitsResult;
      if (tmp17) {
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = util.intl;
        const obj5 = { days: diffAsUnitsResult.days.toString() };
        obj4.children = intl.format(util.t.Io7ozn, obj5);
        tmp17 = hasOwnProperty(Text_Text.Text, obj4);
      }
      const items1 = [tmp17, ,];
      const intl2 = util.intl;
      let toLocaleDateStringResult;
      if (purchase != null) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
      const obj7 = { date: toLocaleDateStringResult };
      obj6.children = intl2.format(util.t.gW9R4B, obj7);
      items1[1] = hasOwnProperty(Text_Text.Text, obj6);
      let expiresAt2;
      if (purchase != null) {
        expiresAt2 = purchase.expiresAt;
      }
      let tmp19Result = null != expiresAt2;
      if (tmp19Result) {
        const obj8 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl3 = util.intl;
        const obj9 = { date: null };
        const expiresAt = purchase.expiresAt;
        obj9.date = expiresAt.toLocaleDateString(stateFromStores, {
          minute: "numeric",
          hour: "numeric",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        obj8.children = intl3.format(util.t.eZSTa5, obj9);
        tmp19Result = hasOwnProperty(Text_Text.Text, obj8);
      }
      const obj10 = { children: null };
      items1[2] = tmp19Result;
      obj10.children = items1;
      return React5(timestampProducer, obj10);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = util.intl;
      stringResult = intl5.string(util.t.hmyYK8);
      obj11.children = stringResult;
      let tmp25Result = hasOwnProperty(Text_Text.Text, obj11);
    } else {
      const tmp4Result = PremiumUtilsDefault;
      const Text = Text_Text.Text;
      const obj12 = { variant: "text-sm/medium", color: "text-default", children: null };
      if (isPremiumResult) {
        obj12.children = nitroUpgradeCTA;
        tmp25Result = hasOwnProperty(Text, obj12);
      } else {
        obj12.children = nitroJoinCTA;
        tmp25Result = hasOwnProperty(Text, obj12);
      }
      isPremiumResult = PremiumUtilsDefault.isPremium(user);
    }
  } else {
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    obj13.children = intl4.string(util.t.fEGjVQ);
    return hasOwnProperty(Text_Text.Text, obj13);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({
  productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 },
});
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
      const obj = { style: tmp.productDetailsContainer, children: null };
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
      const obj2 = { variant: "text-md/bold", color: "text-default", children: name };
      const items = [hasOwnProperty(Text_Text.Text, obj2)];
      const obj3 = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = hasOwnProperty(EditCollectiblesPreviewDescription, obj3);
      obj.children = items;
      tmp5Result = React5(View, obj);
    } else {
      tmp5Result = null;
    }
  }
  return tmp5Result;
}
