import set from "set";
import useManageSubscriptionCardData from "useManageSubscriptionCardData";
import notSupported from "notSupported";
import { View } from "ResubscribedAlert";
import ME from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "_deletePaymentSource";
import createCacheKey from "createCacheKey";

let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function HeaderStatus(arg0) {
  let isCancelled;
  let isPastDue;
  let isTrial;
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp = createCacheKey();
  if (isCancelled) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let str = intl3.string(require(1236) /* getSystemLocale */.t["7uFZGt"]);
    let headerStatusPastDue = tmp.headerStatusCancel;
    let flag = true;
  } else if (isTrial) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    str = intl2.string(require(1236) /* getSystemLocale */.t["6anton"]);
    headerStatusPastDue = tmp.headerStatusTrial;
    flag = true;
  } else {
    str = "";
    flag = true;
    if (isPastDue) {
      const intl = require(1236) /* getSystemLocale */.intl;
      str = intl.string(require(1236) /* getSystemLocale */.t.uENdgb);
      headerStatusPastDue = tmp.headerStatusPastDue;
      flag = false;
    }
  }
  let tmp9Result = null;
  if ("" !== str) {
    let obj = { style: null, children: null };
    const items = [tmp.headerStatusContainer, headerStatusPastDue];
    obj[0] = items;
    let str2 = "text-overlay-dark";
    if (flag) {
      str2 = "text-overlay-light";
    }
    obj = { variant: "text-xs/semibold", color: null, children: null };
    obj[1] = str2;
    obj[2] = str;
    obj[1] = closure_11(require(4281) /* Text */.Text, obj);
    tmp9Result = tmp9(View, obj);
    const tmp10 = View;
  }
  return tmp9Result;
}
function Header(arg0) {
  let expanded;
  let guild;
  let isCancelled;
  let isPastDue;
  let isTrial;
  let listing;
  let onToggleExpanded;
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.header, onPress: onToggleExpanded, children: null };
  const items = [callback2(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  obj = { style: tmp.headerContent, children: null };
  const items1 = [callback2(importDefault(5661), { guild }), , ];
  obj = { style: tmp.headerTitlesContainer, children: null };
  const items2 = [callback2(require(4281) /* Text */.Text, { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name }), callback2(require(1297) /* Button */.Spacer, { size: 2 }), ];
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp3(1236).intl;
    name = intl.string(tmp3(1236).t["He+cmd"]);
  }
  items2[2] = callback2(require(4281) /* Text */.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: name });
  obj[1] = items2;
  items1[1] = closure_12(View, obj);
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  items1[2] = callback2(require(1297) /* Button */.Icon, { style: items3, size: require(1297) /* Button */.Icon.Sizes.MEDIUM, source: importDefault(8891) });
  obj[1] = items1;
  items[1] = closure_12(View, obj);
  obj[2] = items;
  return closure_12(require(4812) /* PressableBase */.PressableHighlight, obj);
}
function Separator() {
  const tmp = createCacheKey();
  return callback2(importDefault(14354), { style: createCacheKey().separator, withoutMargins: true });
}
function CardBody(isTrial) {
  let c5;
  let isCancelled;
  let isPastDue;
  let memberSince;
  let nextRenewalDate;
  let nextRenewalLabel;
  let onCancelSubscription;
  let subscriptionPrice;
  let tmp6;
  isTrial = isTrial.isTrial;
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  let dependencyMap;
  let resubscribeSubscription;
  let callback;
  let analyticsLocations;
  function _handleResubscribe() {
    const self = this;
    const tmp = resubscribeSubscription(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let closure_0 = tmp5;
              closure_0 = undefined;
              if (outer1_0) {
                const obj1 = { body: null, confirmText: null, isDismissable: true };
                const intl = outer1_0(1236).intl;
                obj1[0] = intl.string(outer1_0(1236).t.NL7DFi);
                const intl2 = outer1_0(1236).intl;
                obj1[1] = intl2.string(outer1_0(1236).t["NX+WJN"]);
                outer1_1(4624).show(obj1);
                v02 = 3;
                const obj6 = outer1_1(4624);
              } else {
                let dependencyMap = 1;
                v02(true);
                closure_0 = false;
                if (tmp47) {
                  v0 = 3;
                  v02 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = v0();
                  return obj2;
                } else {
                  obj2 = outer1_2(4604);
                  v0 = 2;
                  v02 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = obj2.resubscribeToSubscription(tmp46, outer1_6);
                  return obj3;
                }
              }
            }
          } else if (1 === tmp8) {
            dependencyMap = 0;
            v02(false);
            throw closure_2;
          } else {
            if (2 === tmp8) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = true;
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              v02(false);
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
            }
            if (closure_0) {
              (function openResubsribedAlert() {
                let obj = tmp3(table[16]);
                obj = {
                  importer() {
                    return callback(paths[18])(paths[17], paths.paths).then(() => { ... });
                  }
                };
                obj.openLazy(obj);
              })();
            }
            dependencyMap = 0;
            v02(false);
          }
          dependencyMap = 0;
          v02(false);
          v02 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } catch (tmp38) {
          closure_2 = tmp38;
          if (tmp4 === dependencyMap) {
            v02 = tmp2;
            throw tmp38;
          } else {
            v0 = tmp;
          }
        }
      }
    });
    const _handleResubscribe = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } = isTrial);
  let tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = subscription(7572);
  resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  [tmp6, c5] = callback(analyticsLocations.useState(false), 2);
  analyticsLocations = subscription(5610)().analyticsLocations;
  obj = { style: tmp.cardContent, children: null };
  let tmp7Result = null;
  if (isPastDue) {
    obj = { children: null };
    let obj1 = { style: null, children: null };
    obj1[0] = tmp.paymentOverDueWarning;
    let obj2 = { color: null, width: 16, height: 16 };
    obj2[0] = tmp2(712).unsafe_rawColors.YELLOW_300;
    const items = [callback2(isTrial(1297).WarningCircle, obj2), callback2(isTrial(1297).Spacer, { size: 8 }), ];
    let obj3 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
    let intl = isTrial(1236).intl;
    obj3[2] = intl.string(isTrial(1236).t.eaqlau);
    items[2] = callback2(isTrial(4281).Text, obj3);
    obj1[1] = items;
    const items1 = [tmp7(tmp8, obj1), callback2(isTrial(1297).Spacer, { size: 12 })];
    obj[0] = items1;
    tmp7Result = tmp7(closure_13, obj);
  }
  const items2 = [tmp7Result, , , , ];
  let obj4 = { title: null, icon: null, onPressIcon: null, children: null };
  let tmp2Result = tmp2(14357);
  let intl2 = isTrial(1236).intl;
  obj4[0] = intl2.string(isTrial(1236).t.dltUMH);
  tmp2Result = undefined;
  if (isTrial) {
    tmp2Result = tmp2(7556);
  }
  obj4[1] = tmp2Result;
  let prop;
  if (isTrial) {
    prop = tmp15(3985).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj4[2] = prop;
  obj4[3] = subscriptionPrice;
  items2[1] = callback2(tmp2Result, obj4);
  items2[2] = callback2(isTrial(1297).Spacer, { size: 16 });
  const obj5 = { style: tmp.cardRow, children: null };
  const items3 = [callback2(subscription(14357), { title: nextRenewalLabel, children: nextRenewalDate }), callback2(isTrial(1297).Spacer, { size: 8 }), ];
  let obj6 = { title: null, children: null };
  const tmp5 = callback(analyticsLocations.useState(false), 2);
  const intl3 = tmp15(1236).intl;
  obj6[0] = intl3.string(isTrial(1236).t.AOcwWB);
  obj6[1] = memberSince;
  items3[2] = callback2(subscription(14357), obj6);
  obj5[1] = items3;
  items2[3] = closure_12(_handleResubscribe, obj5);
  const obj7 = { inset: true, titleViewStyle: tmp.manageSection, title: null, children: null };
  const intl4 = tmp15(1236).intl;
  obj7[2] = intl4.string(isTrial(1236).t["4neDM+"]);
  const obj8 = { style: tmp.buttonsContainer, children: null };
  const obj9 = {
    renderGap() {
      return outer1_11(_handleResubscribe, { style: _undefined.buttonDivider });
    },
    children: null
  };
  const obj10 = { text: null, onPress: null };
  const tmp2Result1 = subscription(14357);
  const intl5 = tmp15(1236).intl;
  obj10[0] = intl5.string(isTrial(1236).t["7spYft"]);
  obj10[1] = function handleUpdatePaymentMethod() {
    if (null != subscription) {
      if (tmp.isPurchasedViaAppleGeneric) {
        let tmp14Result = tmp14(tmp15[28]);
        tmp14Result.openURL(isTrial(_undefined[29]).getExternalSubscriptionMethodUrl(tmp.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        const obj4 = isTrial(_undefined[29]);
      } else {
        tmp14Result = tmp14(tmp15[16]);
        const obj = { body: null, confirmText: null, isDismissable: true };
        const intl = isTrial(_undefined[9]).intl;
        obj[0] = intl.string(isTrial(_undefined[9]).t.fmm9jo);
        const intl2 = isTrial(_undefined[9]).intl;
        obj[1] = intl2.string(isTrial(_undefined[9]).t["NX+WJN"]);
        tmp14Result.show(obj);
      }
    }
  };
  const items4 = [callback2(subscription(14358), obj10), , ];
  const obj11 = { text: null, onPress: null };
  const tmp2Result2 = subscription(14358);
  const intl6 = tmp15(1236).intl;
  obj11[0] = intl6.string(isTrial(1236).t.FRbWR8);
  obj11[1] = function handleChangeTier() {
    isTrial(_undefined[30]).transitionTo(outer1_8.CHANNEL(guildId, outer1_10.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = callback2(subscription(14358), obj11);
  if (isCancelled) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.resubscribeButtonContainer;
    const obj13 = { text: null, onPress: null, loading: null };
    const intl8 = tmp15(1236).intl;
    obj13[0] = intl8.string(tmp15(1236).t.iIvF2z);
    obj13[1] = function handleResubscribe() {
      const self = this;
      const apply = _handleResubscribe.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj13[2] = tmp6;
    obj12[1] = tmp13(tmp2(8609), obj13);
    let tmp13Result = tmp13(tmp8, obj12);
    const tmp2Result4 = tmp2(8609);
  } else {
    const obj14 = { text: null, onPress: null };
    const intl7 = tmp15(1236).intl;
    obj14[0] = intl7.string(tmp15(1236).t.Dx0lF7);
    obj14[1] = onCancelSubscription;
    tmp13Result = tmp13(tmp2(14358), obj14);
    const tmp2Result5 = tmp2(14358);
  }
  items4[2] = tmp13Result;
  obj9[1] = items4;
  obj8[1] = closure_12(isTrial(8676).GappedList, obj9);
  obj7[3] = callback2(_handleResubscribe, obj8);
  items2[4] = callback2(isTrial(7777).FormSection, obj7);
  obj[1] = items2;
  return closure_12(_handleResubscribe, obj);
}
({ Routes: metroImportAll, UserSettingsSections: c9 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { container: null, cardContent: null, buttonsContainer: null, buttonDivider: null, resubscribeButtonContainer: null, separator: null, header: null, headerContent: null, headerTitlesContainer: null, expandIcon: null, expandIconExpanded: null, cardRow: null, manageSection: null, paymentOverDueWarning: null, headerStatusContainer: null, headerStatusCancel: null, headerStatusTrial: null, headerStatusPastDue: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[3] = { width: "100%", borderBottomWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
createCacheKey[4] = { padding: 16 };
createCacheKey[5] = { paddingHorizontal: 16 };
let obj2 = { width: "100%", borderBottomWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
createCacheKey[6] = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[7] = { padding: 16, alignItems: "center", flexDirection: "row" };
createCacheKey[8] = { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 };
let obj3 = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[9] = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "180deg" }];
createCacheKey[10] = { transform: items };
createCacheKey[11] = { flexDirection: "row" };
createCacheKey[12] = { paddingTop: 16 };
createCacheKey[13] = { flexDirection: "row", width: "90%" };
createCacheKey[14] = { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" };
let obj4 = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[15] = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL };
createCacheKey[16] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
let obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[17] = { backgroundColor: require("Themes").colors.STATUS_WARNING };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { backgroundColor: require("Themes").colors.STATUS_WARNING };
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  let expanded;
  let groupListing;
  let guild;
  let handleToggleExpanded;
  let listing;
  let subscriptionInfo;
  subscription = subscription.subscription;
  let importDefault;
  const tmp2 = importDefault(14360)(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  let obj = subscription(1480);
  importDefault = obj.useNavigation();
  let tmp4Result = null;
  if (null != groupListing) {
    tmp4Result = null;
    if (null != listing) {
      tmp4Result = null;
      if (null != subscriptionInfo) {
        obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { expanded: null, guild: null, isCancelled: null, isTrial: null, isPastDue: null, listing: null, onToggleExpanded: null };
        obj[0] = expanded;
        obj[1] = guild;
        ({ isCancelled: obj3[2], isTrial: obj3[3], isPastDue: obj3[4] } = subscriptionInfo);
        obj[5] = listing;
        obj[6] = handleToggleExpanded;
        const items = [callback2(Header, obj), ];
        if (expanded) {
          const items1 = [tmp6(Separator, {}), ];
          const obj1 = {};
          const merged = Object.assign(subscriptionInfo);
          let id;
          if (guild != null) {
            id = guild.id;
          }
          const obj2 = { children: null };
          obj1.guildId = id;
          obj1.subscription = subscription;
          obj1.onCancelSubscription = function handleCancelSubscription() {

          };
          items1[1] = tmp6(CardBody, obj1);
          obj2[0] = items1;
          expanded = tmp4(closure_13, obj2);
          const tmp10 = CardBody;
          const tmp8 = closure_13;
        }
        items[1] = expanded;
        obj[1] = items;
        tmp4Result = tmp4(View, obj);
        const tmp5 = View;
      }
    }
  }
  return tmp4Result;
};