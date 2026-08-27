// discord_app/modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx
import Text from "../../../../design/components/Text/native/Text.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../stores/SelectedChannelStore.tsx";
import closure_9 from "../../GuildRoleSubscriptionsStore.tsx";
import { AnalyticsLocations } from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function emphasisHook(children) {
  return callback3(Text.Text, { variant: "text-xs/semibold", color: "text-default", children });
}
function SwitchTiersButton(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  let obj = changeToListingId(14771);
  obj1 = activeListingId(4043)(activeSubscription.currentPeriodEnd);
  obj = { children: null };
  obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = activeSubscription(1236).intl;
  obj1 = { activeListingName: callback2(obj.useName(activeListingId), 1)[0], billingEndDate: obj1.format("MMMM Do"), emphasisHook };
  obj[2] = intl.format(activeSubscription(1236).t.lA7ztO, obj1);
  const items = [callback3(activeSubscription(4441).Text, obj), callback3(activeSubscription(1297).Spacer, { size: 16 }), ];
  const obj2 = { text: null, onPress: null };
  const intl2 = activeSubscription(1236).intl;
  obj2[0] = intl2.string(activeSubscription(1236).t.SACegK);
  obj2[1] = function onPress() {
    let obj = activeListingId(closure_1_3[19]);
    obj = { activeSubscription, activeListingId, changeToListingId };
    obj.openLazy(activeSubscription(closure_1_3[21])(closure_1_3[20], closure_1_3.paths), "ChangeSubscriptionCard:" + changeToListingId, obj);
  };
  items[2] = callback3(activeSubscription(16042).ArrowButton, obj2);
  obj[0] = items;
  return callback4(View, obj);
}
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  listingId = listingId.listingId;
  let createSubscription = listingId;
  let callback;
  let guild_id;
  let showMemberVerificationGate;
  let obj = createSubscription(showMemberVerificationGate[10]);
  const items = [closure_9];
  const items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getSubscriptionGroupListingForSubscriptionListing(createSubscription), items1);
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
  obj1 = guild_id(tmp2[9]);
  let obj2 = guild_id(tmp2[9]);
  const applicationId = obj2.useApplicationId(listingId);
  let tmpResult = tmp(tmp2[10]);
  const items2 = [closure_8];
  if (tmpResult.useStateFromStores(items2, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    let ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  let tmp4Result = tmp4(tmp2[11]);
  obj = { planId: callback2(obj1.useSubscriptionPlan(listingId), 1)[0].id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId };
  createSubscription = tmp4Result.useCreateSubscription(obj);
  createSubscription = createSubscription.createSubscription;
  const nativePaymentsConnected = createSubscription.nativePaymentsConnected;
  const tmp9Result = callback2(React.useState(false), 2);
  callback = tmp9Result[1];
  const items3 = [createSubscription];
  callback = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            v0(true);
            v0 = 2;
            c4 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          v0(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v0(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c3 = 0;
          v0(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items3);
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
    obj[0] = intl2.string(tmp(tmp2[14]).t.XvAuMo);
    obj[3] = function onPress() {

    };
    let tmp22 = callback3(tmp(tmp2[24]).Button, obj);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        obj1 = { changeToListingId: null, activeListingId: null, activeSubscription: null };
        obj1[0] = listingId;
        obj1[1] = activeSubscriptionListing.id;
        obj1[2] = activeSubscription;
        tmp22 = callback3(SwitchTiersButton, obj1);
      }
    }
    obj2 = { text: null, onPress: null, loading: null };
    tmp4Result = tmp4(tmp2[25]);
    let intl = tmp(tmp2[14]).intl;
    obj2[0] = intl.string(tmp(tmp2[14]).t.BEeXib);
    obj2[1] = tmp19;
    obj2[2] = first;
    tmp22 = callback3(tmp4Result, obj2);
  }
  return tmp22;
};