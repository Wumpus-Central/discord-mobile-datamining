// === Module 16503: SubscribeButton ===

// Module 16503 (SubscribeButton)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 8871 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15045 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4502 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, intl3, show, showResult, tmp;

let closure_12;
let map1;
function useCreateRoleSubscription(listingId) {
  let ROLE_SUBSCRIPTIONS_TAB;
  let closure_1;
  let createSubscription;
  let currentlySelectedChannelId;
  let first1;
  let items1;
  let tmp10;
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useSubscriptionPlan(listingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const applicationId = obj2.useApplicationId(listingId);
  let obj3 = createSubscription(504);
  const items = [SelectedChannelStore];
  if (obj3.useStateFromStores(items, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  let obj4 = NativePaymentHooksDefault;
  const obj5 = { planId: first.id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId };
  const createSubscription1 = obj4.useCreateSubscription(obj5);
  createSubscription = createSubscription1.createSubscription;
  const nativePaymentsConnected = createSubscription1.nativePaymentsConnected;
  [first1, importDefault] = react.useState(false);
  const obj6 = {
    createSubscription: react.useCallback(_asyncToGenerator(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
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
              let closure_0 = tmp;
              c3 = 1;
              v1(true);
              c1 = 2;
              c4 = 1;
              const obj4 = { value: createSubscription(), done: false };
              return obj4;
            }
          } else if (1 === tmp4) {
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          closure_2 = tmp19;
          if (0 === c3) {
            c4 = 3;
            throw tmp19;
          } else {
            c1 = 1;
          }
        }
      }
    }), items1),
    loading: tmp10
  };
  items1 = [createSubscription];
  tmp10 = !nativePaymentsConnected;
  if (nativePaymentsConnected) {
    tmp10 = first1;
  }
  return obj6;
}
function emphasisHook(children) {
  const obj = { variant: "text-xs/semibold", color: "text-default", children };
  return closure_12(Text_Text.Text, obj);
}
function SwitchTiersButton(activeSubscription) {
  let intl;
  let intl2;
  let items;
  let obj5;
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  let obj = changeToListingId(15045);
  const first = _slicedToArray(obj.useName(activeListingId), 1)[0];
  const obj3 = { children: items };
  const obj2 = activeListingId(4461)(activeSubscription.currentPeriodEnd);
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(activeSubscription(1126).t.lA7ztO, obj5) };
  const formatResult = obj2.format("MMMM Do");
  const Text = activeSubscription(4886).Text;
  intl = activeSubscription(1126).intl;
  obj5 = { activeListingName: first, billingEndDate: formatResult, emphasisHook };
  items = [closure_12(Text, obj4), closure_12(activeSubscription(1188).Spacer, { size: 16 }), ];
  const obj6 = {
    text: intl2.string(activeSubscription(1126).t.SACegK),
    onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activeSubscription, activeListingId, changeToListingId };
      const tmp2 = asyncRequire(16504, dependencyMap.paths);
      openLazy(tmp2, "ChangeSubscriptionCard:" + changeToListingId, obj);
    }
  };
  const ArrowButton = activeSubscription(16497).ArrowButton;
  intl2 = activeSubscription(1126).intl;
  items[2] = closure_12(ArrowButton, obj6);
  return closure_13(View, obj3);
}
const View = react_native.View;
const AnalyticsLocations = Constants.AnalyticsLocations;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((listingId) => {
  let activeSubscription;
  let activeSubscriptionListing;
  let createSubscription;
  let first;
  let id;
  let loading;
  let showMemberVerificationGate;
  let tmp6;
  let tmp7;
  let obj = listingId(showMemberVerificationGate[23]);
  const cResult = obj.c(18);
  listingId = listingId.listingId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleSubscriptionsStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = listingId(showMemberVerificationGate[10]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let id1;
  const tmp10 = createSubscription(showMemberVerificationGate[24]);
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  ({ activeSubscriptionListing, activeSubscription } = tmp10(id1));
  tmp10(id1);
  if (activeSubscriptionListing != null) {
    id = activeSubscriptionListing.id;
  }
  ({ loading, createSubscription } = useCreateRoleSubscription(listingId));
  let guild_id;
  useCreateRoleSubscription(listingId);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmpResult2 = listingId(showMemberVerificationGate[25]);
  showMemberVerificationGate = tmpResult2.useShowMemberVerificationGate(guild_id);
  if (cResult[4] === createSubscription) {
    if (cResult[5] === guild_id) {
      let tmp16;
      let tmp19;
      if (cResult[6] === showMemberVerificationGate) {
        tmp16 = cResult[7];
      }
      if (id === listingId) {
        let tmp26;
        let tmp28;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl2 = tmp(tmp2[14]).intl;
          const stringResult = intl2.string(listingId(showMemberVerificationGate[14]).t.XvAuMo);
          cResult[8] = stringResult;
          tmp26 = stringResult;
        } else {
          tmp26 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            text: tmp26,
            variant: "secondary",
            disabled: true,
            onPress() {

                    }
          };
          const tmp30 = closure_12(listingId(showMemberVerificationGate[26]).Button, obj2);
          cResult[9] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[9];
        }
        tmp19 = tmp28;
      } else {
        let tmp17;
        if (null != activeSubscriptionListing) {
          if (null != activeSubscription) {
            if (cResult[10] === activeSubscription) {
              if (cResult[11] === activeSubscriptionListing.id) {
                let tmp22;
                if (cResult[12] === listingId) {
                  tmp22 = cResult[13];
                }
                tmp19 = tmp22;
              }
            }
            const obj3 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
            const tmp25 = closure_12(SwitchTiersButton, obj3);
            cResult[10] = activeSubscription;
            cResult[11] = activeSubscriptionListing.id;
            cResult[12] = listingId;
            cResult[13] = tmp25;
            tmp22 = tmp25;
          }
        }
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[14]).intl;
          const stringResult1 = intl.string(listingId(showMemberVerificationGate[14]).t.BEeXib);
          cResult[14] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp16) {
          if (cResult[16] === loading) {
            tmp19 = cResult[17];
          }
        }
        const obj4 = { text: tmp17, onPress: tmp16, loading };
        const tmp21 = closure_12(createSubscription(showMemberVerificationGate[27]), obj4);
        cResult[15] = tmp16;
        cResult[16] = loading;
        cResult[17] = tmp21;
        tmp19 = tmp21;
      }
      return tmp19;
    }
  }
  class S {
    constructor() {
      tmp = closure_3;
      if (tmp) {
        tmp2 = null;
        if (null != guild_id) {
          closure_0 = guild_id;
          tmp4 = closure_1;
          tmp5 = closure_3;
          tmp6 = closure_1(closure_3[13]);
          obj = { body: null, onConfirm: null, confirmText: null, cancelText: null };
          tmp7 = closure_0;
          show = tmp6.show;
          intl = closure_0(closure_3[14]).intl;
          obj.body = intl.string(closure_0(closure_3[14]).t.PYrJGS);
          obj.onConfirm = function onConfirm() {
            const obj = listingId(showMemberVerificationGate[15]);
            return obj.openMemberVerificationModal(closure_0);
          };
          intl2 = closure_0(closure_3[14]).intl;
          obj.confirmText = intl2.string(closure_0(closure_3[14]).t.IjFdkV);
          intl3 = closure_0(closure_3[14]).intl;
          obj.cancelText = intl3.string(closure_0(closure_3[14]).t["ETE/oC"]);
          showResult = show(obj);
        }
        return;
      }
      tmp3 = createSubscription();
      return;
    }
  }
  cResult[4] = createSubscription;
  cResult[5] = guild_id;
  cResult[6] = showMemberVerificationGate;
  cResult[7] = S;
  tmp16 = S;
}) : ((listingId) => {
  let activeSubscription;
  let activeSubscriptionListing;
  let intl;
  let intl2;
  let tmp15;
  listingId = listingId.listingId;
  let createSubscription;
  let guild_id;
  let showMemberVerificationGate;
  let obj = listingId(showMemberVerificationGate[10]);
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId), items1);
  let id;
  const tmp5 = createSubscription(showMemberVerificationGate[24]);
  const tmp4 = createSubscription;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  ({ activeSubscriptionListing, activeSubscription } = tmp5(id));
  let id1;
  tmp5(id);
  if (activeSubscriptionListing != null) {
    id1 = activeSubscriptionListing.id;
  }
  const tmp9 = useCreateRoleSubscription(listingId);
  createSubscription = tmp9.createSubscription;
  guild_id = undefined;
  const loading = tmp9.loading;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmpResult = listingId(showMemberVerificationGate[25]);
  showMemberVerificationGate = tmpResult.useShowMemberVerificationGate(guild_id);
  const items2 = [createSubscription, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    const obj2 = {
      text: intl2.string(listingId(showMemberVerificationGate[14]).t.XvAuMo),
      variant: "secondary",
      disabled: true,
      onPress() {

        }
    };
    const Button = tmp(tmp2[26]).Button;
    intl2 = tmp(tmp2[14]).intl;
    tmp15 = closure_12(Button, obj2);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        const obj3 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp15 = closure_12(SwitchTiersButton, obj3);
      }
    }
    const obj4 = { text: intl.string(listingId(showMemberVerificationGate[14]).t.BEeXib), onPress: tmp12, loading };
    const tmp4Result = tmp4(showMemberVerificationGate[27]);
    intl = tmp(tmp2[14]).intl;
    tmp15 = closure_12(tmp4Result, obj4);
  }
  return tmp15;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default tmp3;