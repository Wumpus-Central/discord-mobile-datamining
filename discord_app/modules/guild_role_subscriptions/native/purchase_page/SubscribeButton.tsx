// === Module 16499: SubscribeButton ===

// Module 16499 (SubscribeButton)
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 8871 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15041 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4502 */;

require = fn;
function useCreateRoleSubscription(listingId) {
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const applicationId = GuildRoleSubscriptionListingEditStateUtilsAll.useApplicationId(listingId);
  const items = [SelectedChannelStore];
  if (obj3.useStateFromStores(items, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  obj3 = createSubscription(504);
  let obj4 = NativePaymentHooksDefault;
  const createSubscription1 = obj4.useCreateSubscription({ planId: _slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0].id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId });
  createSubscription = createSubscription1.createSubscription;
  const nativePaymentsConnected = createSubscription1.nativePaymentsConnected;
  const tmp2Result = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp2Result[1];
  const obj6 = { createSubscription: null, loading: null };
  const items1 = [createSubscription];
  obj6.createSubscription = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v2(true);
            c1 = 2;
            c4 = 1;
            const obj4 = { value: createSubscription(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items1);
  let first = !nativePaymentsConnected;
  if (nativePaymentsConnected) {
    first = tmp2Result[0];
  }
  obj6.loading = first;
  return obj6;
}
function emphasisHook(children) {
  return __initData(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children });
}
function SwitchTiersButton(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  let obj = changeToListingId(15041);
  const obj3 = { children: null };
  const obj2 = activeListingId(4461)(activeSubscription.currentPeriodEnd);
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = activeSubscription(1126).intl;
  const formatResult = activeListingId(4461)(activeSubscription.currentPeriodEnd).format("MMMM Do");
  obj4.children = intl.format(activeSubscription(1126).t.lA7ztO, { activeListingName: _slicedToArray(obj.useName(activeListingId), 1)[0], billingEndDate: activeListingId(4461)(activeSubscription.currentPeriodEnd).format("MMMM Do"), emphasisHook });
  const items = [closure_12(activeSubscription(4886).Text, obj4), closure_12(activeSubscription(1188).Spacer, { size: 16 }), ];
  const obj6 = { text: null, onPress: null };
  const intl2 = activeSubscription(1126).intl;
  obj6.text = intl2.string(activeSubscription(1126).t.SACegK);
  obj6.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(16500, dependencyMap.paths), "ChangeSubscriptionCard:" + changeToListingId, { activeSubscription, activeListingId, changeToListingId });
  };
  items[2] = closure_12(activeSubscription(16493).ArrowButton, obj6);
  obj3.children = items;
  return closure_13(View, obj3);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1085).AnalyticsLocations;
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((listingId) => {
  let Button = listingId;
  let tmp = showMemberVerificationGate;
  const cResult = listingId(showMemberVerificationGate[23]).c(18);
  listingId = listingId.listingId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleSubscriptionsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== listingId) {
    const fn = function o() {
      return GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId);
    };
    const items1 = [listingId];
    cResult[1] = listingId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let obj = listingId(showMemberVerificationGate[23]);
  const stateFromStores = Button(tmp[10]).useStateFromStores(first, tmp5, tmp6);
  let id1;
  const ButtonResult = Button(tmp[10]);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  const tmp9 = createSubscription(tmp[24]);
  ({ activeSubscriptionListing, activeSubscription } = createSubscription(tmp[24])(id1));
  if (activeSubscriptionListing != null) {
    const id = activeSubscriptionListing.id;
  }
  const tmp9Result = createSubscription(tmp[24])(id1);
  ({ loading, createSubscription } = useCreateRoleSubscription(listingId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp12 = useCreateRoleSubscription(listingId);
  showMemberVerificationGate = Button(tmp[25]).useShowMemberVerificationGate(guild_id);
  if (cResult[4] === createSubscription) {
    if (cResult[5] === guild_id) {
      if (cResult[6] === showMemberVerificationGate) {
        let tmp15 = cResult[7];
      }
      if (id === listingId) {
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl2 = Button(tmp[14]).intl;
          const stringResult = intl2.string(Button(tmp[14]).t.XvAuMo);
          cResult[8] = stringResult;
          let onPress = stringResult;
        } else {
          onPress = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          Button = Button(tmp[26]).Button;
          let obj2 = { text: onPress, variant: "secondary", disabled: true, onPress: null };
          onPress = function onPress() {

          };
          obj2.onPress = onPress;
          tmp = closure_12(Button, obj2);
          cResult[9] = tmp;
        }
      } else {
        if (null != activeSubscriptionListing) {
          if (null != activeSubscription) {
            if (cResult[10] === activeSubscription) {
              if (cResult[11] === activeSubscriptionListing.id) {
              }
            }
            const obj3 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
            const tmp24 = closure_12(SwitchTiersButton, obj3);
            cResult[10] = activeSubscription;
            activeSubscriptionListing = activeSubscriptionListing.id;
            cResult[11] = activeSubscriptionListing;
            cResult[12] = listingId;
            cResult[13] = tmp24;
          }
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = Button(tmp[14]).intl;
          const stringResult1 = intl.string(Button(tmp[14]).t.BEeXib);
          cResult[14] = stringResult1;
          let tmp16 = stringResult1;
        } else {
          tmp16 = cResult[14];
        }
        if (cResult[15] === tmp15) {
          if (cResult[16] === loading) {
            let tmp18 = cResult[17];
          }
          return tmp18;
        }
        const obj4 = { text: tmp16, onPress: tmp15, loading };
        const tmp20 = closure_12(createSubscription(tmp[27]), obj4);
        cResult[15] = tmp15;
        cResult[16] = loading;
        cResult[17] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  class S {
    constructor() {
      if (closure_3) {
        tmp = null;
        if (null != guild_id) {
          closure_0 = guild_id;
          tmp3 = closure_1;
          tmp4 = closure_3;
          obj = closure_1(closure_3[13]);
          obj1 = { body: null, onConfirm: null, confirmText: null, cancelText: null };
          tmp5 = closure_0;
          intl = closure_0(closure_3[14]).intl;
          obj1.body = intl.string(closure_0(closure_3[14]).t.PYrJGS);
          obj1.onConfirm = function onConfirm() {
            return listingId(showMemberVerificationGate[15]).openMemberVerificationModal(closure_0);
          };
          intl2 = closure_0(closure_3[14]).intl;
          obj1.confirmText = intl2.string(closure_0(closure_3[14]).t.IjFdkV);
          intl3 = closure_0(closure_3[14]).intl;
          obj1.cancelText = intl3.string(closure_0(closure_3[14]).t["ETE/oC"]);
          showResult = obj.show(obj1);
        }
        return;
      }
      tmp2 = createSubscription();
      return;
    }
  }
  cResult[4] = createSubscription;
  cResult[5] = guild_id;
  cResult[6] = showMemberVerificationGate;
  cResult[7] = S;
  tmp15 = S;
  const ButtonResult1 = Button(tmp[25]);
}) : ((listingId) => {
  listingId = listingId.listingId;
  let createSubscription;
  let guild_id;
  let showMemberVerificationGate;
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [listingId];
  const stateFromStores = listingId(showMemberVerificationGate[10]).useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId), items1);
  let id;
  let obj = listingId(showMemberVerificationGate[10]);
  const tmp4 = createSubscription;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = createSubscription(showMemberVerificationGate[24]);
  ({ activeSubscriptionListing, activeSubscription } = createSubscription(showMemberVerificationGate[24])(id));
  let id1;
  if (activeSubscriptionListing != null) {
    id1 = activeSubscriptionListing.id;
  }
  const tmp9 = useCreateRoleSubscription(listingId);
  createSubscription = tmp9.createSubscription;
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp5Result = createSubscription(showMemberVerificationGate[24])(id);
  showMemberVerificationGate = listingId(showMemberVerificationGate[25]).useShowMemberVerificationGate(guild_id);
  const items2 = [createSubscription, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    let obj2 = { text: null, variant: "secondary", disabled: true, onPress: null };
    let intl2 = tmp(tmp2[14]).intl;
    obj2.text = intl2.string(tmp(tmp2[14]).t.XvAuMo);
    obj2.onPress = function onPress() {

    };
    let tmp15 = closure_12(tmp(tmp2[26]).Button, obj2);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        const obj3 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp15 = closure_12(SwitchTiersButton, obj3);
      }
    }
    const obj4 = { text: null, onPress: null, loading: null };
    let intl = tmp(tmp2[14]).intl;
    obj4.text = intl.string(tmp(tmp2[14]).t.BEeXib);
    obj4.onPress = tmp12;
    obj4.loading = tmp9.loading;
    tmp15 = closure_12(tmp4(tmp2[27]), obj4);
    const tmp4Result = tmp4(tmp2[27]);
  }
  return tmp15;
});