// === Module 14032: GiftSubscriptionInventoryCard ===

// Module 14032 (GiftSubscriptionInventoryCard)
import nativeDefault from "native" /* 575 */;
import _modDef2451 from "module_2451" /* 2451 */;
import _modDef2911 from "module_2911" /* 2911 */;
import FastImageDefault from "FastImage" /* 5730 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11928 */;
import _modDef14033 from "module_14033" /* 14033 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 11927 */;
import UserStore from "UserStore" /* 1387 */;
import EntitlementStore from "EntitlementStore" /* 6359 */;
import SKUStore from "SKUStore" /* 6360 */;

const require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1389).SubscriptionIntervalTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5043);
let obj = { card: { marginBottom: nativeDefault.space.PX_16 }, header: null, icon: null, caret: null, caretOpen: null, details: null, body: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
obj.icon = size;
const size1 = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, tintColor: nativeDefault.colors.ICON_DEFAULT };
obj.caret = size1;
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
obj.caretOpen = obj5;
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj.details = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj.body = { paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.md, borderBottomRightRadius: nativeDefault.radii.md };
let closure_13 = createStyles.createStyles(obj);
let obj7 = { paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.md, borderBottomRightRadius: nativeDefault.radii.md };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/GiftSubscriptionInventoryCard.tsx");

export default noop.memo(function GiftSubscriptionInventoryCard(subscription) {
  subscription = subscription.subscription;
  let recipientUserId;
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores1;
  noop = undefined;
  let first;
  let first1;
  closure_7 = undefined;
  const tmp = closure_13();
  const giftedSubscriptionRowState = recipientUserId(14020).getGiftedSubscriptionRowState(subscription);
  recipientUserId = null;
  if ("pending" !== giftedSubscriptionRowState.kind) {
    recipientUserId = giftedSubscriptionRowState.recipientUserId;
  }
  let obj = recipientUserId(14020);
  items = [closure_7];
  const stateFromStores = recipientUserId(504).useStateFromStores(items, () => {
    let user = null;
    if (null != recipientUserId) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
  const tmp2Result = recipientUserId(504);
  ({ initialEntitlementId: c1, initialGiftCode: c2 } = subscription.giftSubscription);
  const userTag = recipientUserId(5099).useUserTag(stateFromStores, { decoration: "auto" });
  const tmp2Result6 = recipientUserId(5099);
  const items1 = [EntitlementStore];
  stateFromStores1 = recipientUserId(504).useStateFromStores(items1, () => {
    let found;
    if (null != c1) {
      const giftable = EntitlementStore.getGiftable();
      found = giftable.find((id) => id.id === closure_1_1);
    }
    return found;
  });
  const tmp2Result7 = recipientUserId(504);
  const items2 = [SKUStore];
  const stateFromStores2 = recipientUserId(504).useStateFromStores(items2, () => {
    value = null;
    if (null != stateFromStores1) {
      value = SKUStore.get(tmp.skuId);
    }
    return value;
  });
  const tmp2Result8 = recipientUserId(504);
  const items3 = [first1];
  const stateFromStoresObject = recipientUserId(504).useStateFromStoresObject(items3, () => {
    value = null;
    if (null != c2) {
      value = GiftCodeStore.get(tmp);
    }
    const obj = { giftCode: value, isFetching: null, loadedAt: null };
    let userGiftCodesFetchingForSKUAndPlan = null != stateFromStores1;
    if (userGiftCodesFetchingForSKUAndPlan) {
      userGiftCodesFetchingForSKUAndPlan = GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(stateFromStores1.skuId, stateFromStores1.subscriptionPlanId);
    }
    obj.isFetching = userGiftCodesFetchingForSKUAndPlan;
    let userGiftCodesLoadedAtForSKUAndPlan = null;
    if (null != stateFromStores1) {
      userGiftCodesLoadedAtForSKUAndPlan = GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(stateFromStores1.skuId, stateFromStores1.subscriptionPlanId);
    }
    obj.loadedAt = userGiftCodesLoadedAtForSKUAndPlan;
    return obj;
  });
  ({ giftCode, isFetching, loadedAt: c4 } = stateFromStoresObject);
  first = stateFromStores1(noop.useState(Date.now), 1)[0];
  const tmp12 = stateFromStores1(noop.useState(false), 2);
  first1 = tmp12[0];
  closure_7 = tmp12[1];
  if ("pending" === giftedSubscriptionRowState.kind) {
    const intl3 = tmp2(1112).intl;
    const obj2 = { hours: null };
    const _Math = Math;
    const _Math2 = Math;
    const expiresAt = giftedSubscriptionRowState.expiresAt;
    obj2.hours = Math.max(0, Math.floor((expiresAt.getTime() - first) / 3600000));
    let formatToPlainStringResult = intl3.formatToPlainString(tmp2(1112).t.ltVZcJ, obj2);
  } else {
    const kind = giftedSubscriptionRowState.kind;
    if ("active" === kind) {
      const intl2 = tmp2(1112).intl;
      const obj3 = { renewalDate: giftedSubscriptionRowState.renewsAt };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef2451.MR4VnX, obj3);
    } else if ("canceled" === kind) {
      const intl = tmp2(1112).intl;
      formatToPlainStringResult = intl.string(_modDef2911.bWW0Gp);
    } else if ("payment_failed" === kind) {
      const intl7 = tmp2(1112).intl;
      formatToPlainStringResult = intl7.string(_modDef2911.nZIlOV);
    }
  }
  const obj4 = { style: tmp.card, children: null };
  let tmp21 = !tmp14;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    tmp21 = !first1;
  }
  const obj5 = { end: tmp21, onPress: null, accessibilityState: null, children: null };
  let handleToggleOpen;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    handleToggleOpen = function handleToggleOpen() {
      let tmp2 = !first1;
      if (!first1) {
        tmp2 = null != stateFromStores1;
      }
      if (tmp2) {
        let tmp7 = null == c4;
        if (!tmp7) {
          tmp7 = tmp5 < first;
        }
        tmp2 = tmp7;
      }
      if (tmp2) {
        const userGiftCodesForSKU = GiftCodeActionCreatorsDefault.fetchUserGiftCodesForSKU(stateFromStores1.skuId, stateFromStores1.subscriptionPlanId);
      }
      closure_7(!first1);
    };
  }
  obj5.onPress = handleToggleOpen;
  let tmp22;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    const obj6 = { expanded: first1 };
    tmp22 = obj6;
  }
  obj5.accessibilityState = tmp22;
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { source: null, style: null, accessible: false };
  const tmp2Result9 = recipientUserId(504);
  obj8.source = _modDef14033;
  obj8.style = tmp.icon;
  const items4 = [closure_11(FastImageDefault, obj8), , ];
  const obj9 = { style: tmp.details, children: null };
  const intl4 = tmp2(1112).intl;
  const stringResult = intl4.string(recipientUserId(1112).t.lG6a5x);
  let intervalCount = recipientUserId(14020).getGiftSubscriptionInterval(subscription.planId);
  if (null == intervalCount) {
    const obj10 = { variant: "body-md/semibold", children: stringResult };
    const items5 = [closure_11(tmp2(5634).Text, obj10), , ];
    let tmp20Result = null;
    if ("pending" !== giftedSubscriptionRowState.kind) {
      tmp20Result = null;
      if (null != stateFromStores) {
        const obj11 = { variant: "body-sm/medium", color: "text-muted", children: null };
        const intl6 = tmp2(1112).intl;
        const obj12 = { username: userTag };
        obj11.children = intl6.formatToPlainString(tmp23(2911).kVUGot, obj12);
        tmp20Result = closure_11(tmp2(5634).Text, obj11);
      }
    }
    items5[1] = tmp20Result;
    const obj13 = { variant: "body-sm/medium", color: "text-muted", children: formatToPlainStringResult };
    items5[2] = closure_11(tmp2(5634).Text, obj13);
    obj9.children = items5;
    items4[1] = closure_12(tmp19, obj9);
    let tmp20Result4 = null;
    if (tmp14) {
      const obj14 = { source: tmp23(7508), style: null, accessible: false };
      const items6 = [tmp.caret, ];
      let caretOpen = null;
      if (first1) {
        caretOpen = tmp.caretOpen;
      }
      items6[1] = caretOpen;
      obj14.style = items6;
      tmp20Result4 = closure_11(tmp23(5730), obj14);
      const tmp23Result = tmp23(5730);
    }
    items4[2] = tmp20Result4;
    obj7.children = items4;
    obj5.children = closure_12(tmp19, obj7);
    const items7 = [closure_11(tmp2(6145).Card, obj5), ];
    let tmp18Result = null;
    if (tmp14) {
      tmp18Result = null;
      if (first1) {
        const obj15 = { style: tmp.body, children: null };
        let tmp20Result5 = null;
        if (isFetching) {
          tmp20Result5 = closure_11(tmp2(7047).ActivityIndicator, {});
        }
        const items8 = [tmp20Result5, ];
        let tmp20Result6 = null;
        if (!isFetching) {
          tmp20Result6 = null;
          if (null != giftCode) {
            tmp20Result6 = null;
            if (null != stateFromStores2) {
              const obj16 = { giftCode, sku: stateFromStores2, isFirst: true, canRevoke: false, showCopy: true };
              tmp20Result6 = closure_11(tmp23(14034), obj16);
            }
          }
        }
        items8[1] = tmp20Result6;
        obj15.children = items8;
        tmp18Result = closure_12(tmp19, obj15);
      }
    }
    items7[1] = tmp18Result;
    obj4.children = items7;
    return closure_12(tmp19, obj4);
  } else {
    const intl5 = tmp2(1112).intl;
    if (intervalCount.interval === SubscriptionIntervalTypes.MONTH) {
      let Vd3Iu8 = tmp2(1112).t.rCJvqo;
    } else {
      Vd3Iu8 = tmp2(1112).t.Vd3Iu8;
    }
    const obj17 = { skuName: stringResult, intervalCount: null };
    intervalCount = intervalCount.intervalCount;
    obj17.intervalCount = intervalCount;
    intl5.formatToPlainString(Vd3Iu8, obj17);
  }
  const tmp2Result10 = recipientUserId(14020);
});