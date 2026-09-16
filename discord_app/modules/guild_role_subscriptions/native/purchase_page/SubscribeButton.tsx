// discord_app/modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
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
  let obj = changeToListingId(15337);
  const obj3 = { children: null };
  const obj2 = activeListingId(4229)(activeSubscription.currentPeriodEnd);
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = activeSubscription(1115).intl;
  const formatResult = activeListingId(4229)(activeSubscription.currentPeriodEnd).format("MMMM Do");
  obj4.children = intl.format(activeSubscription(1115).t.lA7ztO, {
    activeListingName: _slicedToArray(obj.useName(activeListingId), 1)[0],
    billingEndDate: activeListingId(4229)(activeSubscription.currentPeriodEnd).format("MMMM Do"),
    emphasisHook,
  });
  const items = [
    closure_12(activeSubscription(4634).Text, obj4),
    closure_12(activeSubscription(1177).Spacer, { size: 16 }),
  ];
  const obj6 = { text: null, onPress: null };
  const intl2 = activeSubscription(1115).intl;
  obj6.text = intl2.string(activeSubscription(1115).t.SACegK);
  obj6.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequireImpl(16684, dependencyMap.paths), "ChangeSubscriptionCard:" + changeToListingId, {
      activeSubscription,
      activeListingId,
      changeToListingId,
    });
  };
  items[2] = closure_12(activeSubscription(16677).ArrowButton, obj6);
  obj3.children = items;
  return closure_13(View, obj3);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  listingId = listingId.listingId;
  let callback;
  let guild_id;
  let showMemberVerificationGate;
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [listingId];
  const stateFromStores = listingId(showMemberVerificationGate[10]).useStateFromStores(
    items,
    () => GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId),
    items1,
  );
  let id;
  let obj = listingId(showMemberVerificationGate[10]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = callback(showMemberVerificationGate[22]);
  ({ activeSubscriptionListing, activeSubscription } = callback(showMemberVerificationGate[22])(id));
  let id1;
  if (activeSubscriptionListing != null) {
    id1 = activeSubscriptionListing.id;
  }
  const tmp5Result = callback(showMemberVerificationGate[22])(id);
  let obj2 = guild_id(showMemberVerificationGate[9]);
  const applicationId = guild_id(showMemberVerificationGate[9]).useApplicationId(listingId);
  let obj3 = guild_id(showMemberVerificationGate[9]);
  const items2 = [SelectedChannelStore];
  if (
    tmpResult.useStateFromStores(items2, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) ===
    StaticChannelRoute.ROLE_SUBSCRIPTIONS
  ) {
    let ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  tmpResult = listingId(showMemberVerificationGate[10]);
  const tmp4Result = callback(showMemberVerificationGate[11]);
  const createSubscription1 = tmp4Result.useCreateSubscription({
    planId: _slicedToArray(obj2.useSubscriptionPlan(listingId), 1)[0].id,
    analyticsLocation: ROLE_SUBSCRIPTIONS_TAB,
    skuId: listingId,
    applicationId,
  });
  const createSubscription = createSubscription1.createSubscription;
  closure_129_0 = createSubscription;
  const nativePaymentsConnected = createSubscription1.nativePaymentsConnected;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp3;
              c3 = 1;
              callback(true);
              c1 = 2;
              c4 = 1;
              const obj4 = { value: listingId(), done: false };
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
  let obj4 = {
    planId: _slicedToArray(obj2.useSubscriptionPlan(listingId), 1)[0].id,
    analyticsLocation: ROLE_SUBSCRIPTIONS_TAB,
    skuId: listingId,
    applicationId,
  };
  showMemberVerificationGate = listingId(showMemberVerificationGate[23]).useShowMemberVerificationGate(guild_id);
  const items4 = [callback, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    const obj5 = { text: null, variant: "secondary", disabled: true, onPress: null };
    let intl2 = tmp(tmp2[14]).intl;
    obj5.text = intl2.string(tmp(tmp2[14]).t.XvAuMo);
    obj5.onPress = function onPress() {};
    let tmp22 = closure_12(tmp(tmp2[24]).Button, obj5);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        const obj6 = {
          changeToListingId: listingId,
          activeListingId: activeSubscriptionListing.id,
          activeSubscription,
        };
        tmp22 = closure_12(SwitchTiersButton, obj6);
      }
    }
    const obj7 = { text: null, onPress: null, loading: null };
    let intl = tmp(tmp2[14]).intl;
    obj7.text = intl.string(tmp(tmp2[14]).t.BEeXib);
    obj7.onPress = tmp19;
    obj7.loading = first;
    tmp22 = closure_12(tmp4(tmp2[25]), obj7);
    const tmp4Result2 = tmp4(tmp2[25]);
  }
  return tmp22;
}
