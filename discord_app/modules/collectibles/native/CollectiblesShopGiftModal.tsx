// === Module 9628: CollectiblesShopGiftModal ===

// Module 9628 (CollectiblesShopGiftModal)
import closure_3 from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 5306 */;
import { COLLECTIBLES_APPLICATION_ID as closure_5 } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  const giftingOrigin = skuId.giftingOrigin;
  let enabled;
  let skuId2;
  skuId = undefined;
  let obj = giftingOrigin;
  const GiftingBadgeExperiment = skuId(giftingOrigin[4]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = enabled.useEffect(() => {
    if (enabled) {
      const badge = skuId(giftingOrigin[5]).fetchBadge(skuId(giftingOrigin[6]).BadgeId.GIFTING);
      const obj = skuId(giftingOrigin[5]);
    }
  }, items);
  const items1 = [skuId2];
  const items2 = [skuId];
  skuId2 = skuId(giftingOrigin[7]).useStateFromStores(items1, () => skuId2.getProduct(skuId), items2);
  let tmp3 = onGiftModalDismiss;
  const items3 = [];
  const obj2 = enabled;
  const obj3 = skuId(giftingOrigin[7]);
  const tmp4 = onGiftModalDismiss(giftingOrigin[8]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = onGiftModalDismiss(giftingOrigin[9]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId = undefined;
  if (skuId2 != null) {
    skuId = skuId2.skuId;
  }
  const items4 = [skuId];
  let renderProductDetails = obj2.useCallback((arg0) => {
    if (obj.isNullOrEmpty(skuId)) {
      let resolved = Promise.resolve(false);
    } else {
      resolved = skuId(giftingOrigin[11]).validateCollectiblesRecipient(arg0, skuId);
      const tmpResult = skuId(giftingOrigin[11]);
    }
    return resolved;
  }, items4);
  if (null == skuId2) {
    return null;
  } else {
    if (tmpResult.isCollectibleGiftingSupported()) {
      tmp3 = tmp3(obj[15]);
      obj = { skuId: null, applicationId: null, analyticsLocations: null, lockedRecipientUser: null, onGiftModalDismiss: null, giftingOrigin: null, validateRecipient: null, renderProductDetails: null, renderPurchaseSection: null };
      skuId2 = skuId2.skuId;
      obj[0] = skuId2;
      obj[1] = skuId;
      obj[2] = tmp4(items3).analyticsLocations;
      obj[3] = skuId.lockedRecipientUser;
      obj[4] = onGiftModalDismiss;
      obj[5] = giftingOrigin;
      obj[6] = renderProductDetails;
      renderProductDetails = function renderProductDetails(arg0) {
        ({ recipientUser, isValidRecipient } = arg0);
        return closure_1_6(onGiftModalDismiss(giftingOrigin[16]), { product: skuId2, recipientUser, isValidRecipient, isGift: true });
      };
      obj[7] = renderProductDetails;
      obj[8] = function renderPurchaseSection(arg0) {
        ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields } = arg0);
        return closure_1_6(onGiftModalDismiss(giftingOrigin[17]), { product: skuId2, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin, onGiftModalDismiss });
      };
      let tmp7Result = tmp7(tmp3, obj);
    } else {
      obj = { onDismiss: null, title: null };
      obj[0] = onGiftModalDismiss;
      const intl = tmp(obj[14]).intl;
      obj[1] = intl.string(tmp(obj[14]).t["JCFN/y"]);
      tmp7Result = tmp7(tmp3(obj[13]), obj);
      const tmp3Result = tmp3(obj[13]);
    }
    tmpResult = tmp(obj[12]);
  }
};