// discord_app/modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";

require = fn;
function emphasisHook(children) {
  return closure_1_12(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children });
}
function SwitchTiersButton(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  changeToListingId(15227);
  let obj1 = activeListingId(4153)(activeSubscription.currentPeriodEnd);
  let obj = { children: null };
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = activeSubscription(1114).intl;
  obj1 = {
    activeListingName: _slicedToArray(obj.useName(activeListingId), 1)[0],
    billingEndDate: obj1.format("MMMM Do"),
    emphasisHook,
  };
  obj.children = intl.format(activeSubscription(1114).t.lA7ztO, obj1);
  const items = [
    closure_12(activeSubscription(4556).Text, obj),
    closure_12(activeSubscription(1178).Spacer, { size: 16 }),
  ];
  const obj2 = { text: null, onPress: null };
  const intl2 = activeSubscription(1114).intl;
  obj2.text = intl2.string(activeSubscription(1114).t.SACegK);
  obj2.onPress = function onPress() {
    const obj = { activeSubscription, activeListingId, changeToListingId };
    obj.openLazy(asyncRequireImpl(16548, dependencyMap.paths), "ChangeSubscriptionCard:" + changeToListingId, obj);
  };
  items[2] = closure_12(activeSubscription(16541).ArrowButton, obj2);
  obj.children = items;
  return closure_13(View, obj);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  listingId = listingId.listingId;
  let callback;
  let guild_id;
  let showMemberVerificationGate;
  let obj = listingId(showMemberVerificationGate[10]);
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId),
    items1,
  );
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = callback(showMemberVerificationGate[22]);
  ({ activeSubscriptionListing, activeSubscription } = callback(showMemberVerificationGate[22])(id));
  let id1;
  if (activeSubscriptionListing != null) {
    id1 = activeSubscriptionListing.id;
  }
  let obj1 = guild_id(tmp2[9]);
  let obj2 = guild_id(tmp2[9]);
  const applicationId = obj2.useApplicationId(listingId);
  let tmpResult = tmp(tmp2[10]);
  const items2 = [SelectedChannelStore];
  if (
    tmpResult.useStateFromStores(items2, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) ===
    StaticChannelRoute.ROLE_SUBSCRIPTIONS
  ) {
    let ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  let tmp4Result = tmp4(tmp2[11]);
  obj = {
    planId: _slicedToArray(obj1.useSubscriptionPlan(listingId), 1)[0].id,
    analyticsLocation: ROLE_SUBSCRIPTIONS_TAB,
    skuId: listingId,
    applicationId,
  };
  let createSubscription = tmp4Result.useCreateSubscription(obj);
  createSubscription = createSubscription.createSubscription;
  closure_129_0 = createSubscription;
  const nativePaymentsConnected = createSubscription.nativePaymentsConnected;
  const tmp9Result = _slicedToArray(noop.useState(false), 2);
  closure_129_1 = tmp9Result[1];
  const items3 = [createSubscription];
  callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              c3 = 1;
              callback(true);
              c1 = 2;
              c4 = 1;
              const obj1 = { value: listingId(), done: false };
              return obj1;
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
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_1(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
    }),
    items3,
  );
  let first = !nativePaymentsConnected;
  if (nativePaymentsConnected) {
    first = tmp9Result[0];
  }
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  tmpResult = tmp(tmp2[23]);
  showMemberVerificationGate = tmpResult.useShowMemberVerificationGate(guild_id);
  const items4 = [callback, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    obj = { text: null, variant: "secondary", disabled: true, onPress: null };
    let intl2 = tmp(tmp2[14]).intl;
    obj.text = intl2.string(tmp(tmp2[14]).t.XvAuMo);
    obj.onPress = function onPress() {};
    let tmp22 = closure_12(tmp(tmp2[24]).Button, obj);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        obj1 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp22 = closure_12(SwitchTiersButton, obj1);
      }
    }
    obj2 = { text: null, onPress: null, loading: null };
    tmp4Result = tmp4(tmp2[25]);
    let intl = tmp(tmp2[14]).intl;
    obj2.text = intl.string(tmp(tmp2[14]).t.BEeXib);
    obj2.onPress = tmp19;
    obj2.loading = first;
    tmp22 = closure_12(tmp4Result, obj2);
  }
  return tmp22;
}
