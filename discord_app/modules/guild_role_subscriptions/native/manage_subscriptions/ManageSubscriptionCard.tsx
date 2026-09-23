// === Module 15551: ManageSubscriptionCard ===

// Module 15551 (ManageSubscriptionCard)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtils from "PremiumUtils" /* 4481 */;
import LinkingDefault from "Linking" /* 4518 */;
import Text_Text from "Text/Text" /* 4823 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5194 */;
import Pressables from "Pressables" /* 5425 */;
import GuildIconDefault from "GuildIcon" /* 5887 */;
import _modDef9875 from "module_9875" /* 9875 */;
import FormSeparatorDefault from "FormSeparator" /* 15552 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 15558 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function HeaderStatus(arg0) {
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp = closure_14();
  if (isCancelled) {
    const intl3 = util.intl;
    let str = intl3.string(util.t["7uFZGt"]);
    let headerStatusPastDue = tmp.headerStatusCancel;
    let flag = true;
  } else if (isTrial) {
    const intl2 = util.intl;
    str = intl2.string(util.t["6anton"]);
    headerStatusPastDue = tmp.headerStatusTrial;
    flag = true;
  } else {
    str = "";
    flag = true;
    if (isPastDue) {
      const intl = util.intl;
      str = intl.string(util.t.uENdgb);
      headerStatusPastDue = tmp.headerStatusPastDue;
      flag = false;
    }
  }
  let tmp9Result = null;
  if ("" !== str) {
    const obj = { style: null, children: null };
    const items = [tmp.headerStatusContainer, headerStatusPastDue];
    obj.style = items;
    let str2 = "text-overlay-dark";
    if (flag) {
      str2 = "text-overlay-light";
    }
    const obj2 = { variant: "text-xs/semibold", color: str2, children: str };
    obj.children = closure_1_11(Text_Text.Text, obj2);
    tmp9Result = closure_1_11(View, obj);
  }
  return tmp9Result;
}
function Header(arg0) {
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = closure_14();
  const obj = { style: tmp.header, onPress: onToggleExpanded, children: null };
  const items = [closure_1_11(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  const obj2 = { style: tmp.headerContent, children: null };
  const items1 = [closure_1_11(GuildIconDefault, { guild }), , ];
  const obj3 = { style: tmp.headerTitlesContainer, children: null };
  const items2 = [closure_1_11(Text_Text.Text, { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name }), closure_1_11(native.Spacer, { size: 2 }), ];
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(util.t["He+cmd"]);
  }
  items2[2] = closure_1_11(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: name });
  obj3.children = items2;
  items1[1] = closure_1_12(View, obj3);
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  items1[2] = closure_1_11(native.Icon, { style: items3, size: native.Icon.Sizes.MEDIUM, source: _modDef9875 });
  obj2.children = items1;
  items[1] = closure_1_12(View, obj2);
  obj.children = items;
  return closure_1_12(Pressables.PressableHighlight, obj);
}
function Separator() {
  const tmp = closure_14();
  return closure_1_11(FormSeparatorDefault, { style: closure_14().separator, withoutMargins: true });
}
function CardBody(isTrial) {
  isTrial = isTrial.isTrial;
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  _slicedToArray = undefined;
  let analyticsLocations;
  closure_7 = async function _handleResubscribe() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            if (isTrial) {
              const obj5 = { body: null, confirmText: null, isDismissable: true };
              const intl = tmp5(1115).intl;
              obj5.body = intl.string(tmp5(1115).t.NL7DFi);
              const intl2 = tmp5(1115).intl;
              obj5.confirmText = intl2.string(tmp5(1115).t["NX+WJN"]);
              tmp3(5194).show(obj5);
              c5 = 3;
              const obj6 = tmp3(5194);
            } else {
              dependencyMap = 1;
              _slicedToArray(true);
              closure_128_0 = false;
              if (tmp46) {
                c4 = 3;
                c5 = 1;
                const obj7 = { value: resubscribeSubscription(), done: false };
                return obj7;
              } else {
                c4 = 2;
                c5 = 1;
                const obj8 = { value: tmp38(5164).resubscribeToSubscription(tmp45, analyticsLocations), done: false };
                return obj8;
              }
            }
          }
        } else if (1 === tmp8) {
          dependencyMap = 0;
          closure_129_5(false);
          throw tmp38;
        } else {
          if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = true;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            closure_129_5(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
          }
          if (closure_128_0) {
            (function openResubsribedAlert() {
              closure_1_1(dependencyMap[16]).openLazy({
                importer() {
                  return closure_1_0(paths[18])(paths[17], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return () => { ... };
                  });
                },
                isDismissable: false
              });
            })();
          }
          dependencyMap = 0;
          closure_129_5(false);
        }
        dependencyMap = 0;
        closure_129_5(false);
        c5 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } catch (tmp38) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } = isTrial);
  const tmp = closure_14();
  dependencyMap = tmp;
  let resubscribeSubscription = subscription(9557).useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  let obj = subscription(9557);
  [tmp6, c5] = analyticsLocations.useState(false);
  analyticsLocations = subscription(7493)().analyticsLocations;
  let obj2 = { style: tmp.cardContent, children: null };
  let tmp7Result = null;
  if (isPastDue) {
    const obj3 = { children: null };
    let obj4 = { style: tmp.paymentOverDueWarning, children: null };
    const size = { color: tmp2(576).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const items = [closure_11(isTrial(1177).WarningCircle, size), closure_11(isTrial(1177).Spacer, { size: 8 }), ];
    let obj5 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
    let intl = isTrial(1115).intl;
    obj5.children = intl.string(isTrial(1115).t.eaqlau);
    items[2] = closure_11(isTrial(4823).Text, obj5);
    obj4.children = items;
    const items1 = [closure_12(tmp8, obj4), closure_11(isTrial(1177).Spacer, { size: 12 })];
    obj3.children = items1;
    tmp7Result = closure_12(closure_13, obj3);
  }
  const items2 = [tmp7Result, , , , ];
  let obj6 = { title: null, icon: null, onPressIcon: null, children: null };
  const tmp5 = _slicedToArray(analyticsLocations.useState(false), 2);
  let intl2 = isTrial(1115).intl;
  obj6.title = intl2.string(isTrial(1115).t.dltUMH);
  let tmp2Result7;
  if (isTrial) {
    tmp2Result7 = tmp2(13108);
  }
  obj6.icon = tmp2Result7;
  let prop;
  if (isTrial) {
    prop = tmp15(4520).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj6.onPressIcon = prop;
  obj6.children = subscriptionPrice;
  items2[1] = closure_11(subscription(15555), obj6);
  items2[2] = closure_11(isTrial(1177).Spacer, { size: 16 });
  let obj7 = { style: tmp.cardRow, children: null };
  const items3 = [closure_11(subscription(15555), { title: nextRenewalLabel, children: nextRenewalDate }), closure_11(isTrial(1177).Spacer, { size: 8 }), ];
  let obj8 = { title: null, children: null };
  const tmp2Result = subscription(15555);
  const intl3 = tmp15(1115).intl;
  obj8.title = intl3.string(isTrial(1115).t.AOcwWB);
  obj8.children = memberSince;
  items3[2] = closure_11(subscription(15555), obj8);
  obj7.children = items3;
  items2[3] = closure_12(closure_7, obj7);
  let obj9 = { inset: true, titleViewStyle: tmp.manageSection, title: null, children: null };
  const intl4 = tmp15(1115).intl;
  obj9.title = intl4.string(isTrial(1115).t["4neDM+"]);
  const obj10 = { style: tmp.buttonsContainer, children: null };
  const obj11 = {
    renderGap() {
      return closure_2_11(View, { style: buttonDivider.buttonDivider });
    },
    children: null
  };
  const obj12 = { text: null, onPress: null };
  const tmp2Result8 = subscription(15555);
  const intl5 = tmp15(1115).intl;
  obj12.text = intl5.string(isTrial(1115).t["7spYft"]);
  obj12.onPress = function handleUpdatePaymentMethod() {
    if (null != subscription) {
      if (subscription.isPurchasedViaAppleGeneric) {
        const tmp14Result = LinkingDefault;
        tmp14Result.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
      } else {
        const obj = { body: null, confirmText: null, isDismissable: true };
        const intl = util.intl;
        obj.body = intl.string(util.t.fmm9jo);
        const intl2 = util.intl;
        obj.confirmText = intl2.string(util.t["NX+WJN"]);
        actions_AlertActionCreatorsDefault.show(obj);
        const tmp14Result2 = actions_AlertActionCreatorsDefault;
      }
    }
  };
  const items4 = [closure_11(subscription(15556), obj12), , ];
  const obj13 = { text: null, onPress: null };
  const tmp2Result9 = subscription(15556);
  const intl6 = tmp15(1115).intl;
  obj13.text = intl6.string(isTrial(1115).t.FRbWR8);
  obj13.onPress = function handleChangeTier() {
    router_utils.transitionTo(React6.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = closure_11(subscription(15556), obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer, children: null };
    const obj15 = { text: null, onPress: null, loading: null };
    const intl8 = tmp15(1115).intl;
    obj15.text = intl8.string(tmp15(1115).t.iIvF2z);
    obj15.onPress = function handleResubscribe() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj15.loading = tmp6;
    obj14.children = closure_11(tmp2(10641), obj15);
    let tmp13Result = closure_11(tmp8, obj14);
    const tmp2Result11 = tmp2(10641);
  } else {
    const obj16 = { text: null, onPress: null };
    const intl7 = tmp15(1115).intl;
    obj16.text = intl7.string(tmp15(1115).t.Dx0lF7);
    obj16.onPress = onCancelSubscription;
    tmp13Result = closure_11(tmp2(15556), obj16);
    const tmp2Result12 = tmp2(15556);
  }
  items4[2] = tmp13Result;
  obj11.children = items4;
  obj10.children = closure_12(isTrial(10687).GappedList, obj11);
  obj9.children = closure_11(closure_7, obj10);
  items2[4] = closure_11(isTrial(8947).FormSection, obj9);
  obj2.children = items2;
  return closure_12(closure_7, obj2);
}
const View = fn(17).View;
const Constants = fn(1074);
({ Routes: closure_8, UserSettingsSections: closure_9 } = Constants);
const StaticChannelRoute = fn(2049).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm }, cardContent: { padding: 16 }, buttonsContainer: null, buttonDivider: null, resubscribeButtonContainer: null, separator: null, header: null, headerContent: null, headerTitlesContainer: null, expandIcon: null, expandIconExpanded: null, cardRow: null, manageSection: null, paymentOverDueWarning: null, headerStatusContainer: null, headerStatusCancel: null, headerStatusTrial: null, headerStatusPastDue: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj2.buttonsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.buttonDivider = { width: "100%", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
obj2.resubscribeButtonContainer = { padding: 16 };
obj2.separator = { paddingHorizontal: 16 };
let obj5 = { width: "100%", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
obj2.header = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.headerContent = { padding: 16, alignItems: "center", flexDirection: "row" };
obj2.headerTitlesContainer = { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.expandIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj8 = { transform: null };
let items = [{ rotate: "180deg" }];
obj8.transform = items;
obj2.expandIconExpanded = obj8;
obj2.cardRow = { flexDirection: "row" };
obj2.manageSection = { paddingTop: 16 };
obj2.paymentOverDueWarning = { flexDirection: "row", width: "90%" };
obj2.headerStatusContainer = { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" };
let obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.headerStatusCancel = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj2.headerStatusTrial = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.headerStatusPastDue = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  subscription = subscription.subscription;
  const tmp2 = useManageSubscriptionCardDataDefault(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  const tmp = closure_14();
  importDefault = subscription(1484).useNavigation();
  let tmp4Result = null;
  if (null != groupListing) {
    tmp4Result = null;
    if (null != listing) {
      tmp4Result = null;
      if (null != subscriptionInfo) {
        const obj2 = { style: tmp.container, children: null };
        const obj4 = { expanded, guild, isCancelled: null, isTrial: null, isPastDue: null, listing: null, onToggleExpanded: null };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        obj4.listing = listing;
        obj4.onToggleExpanded = handleToggleExpanded;
        const items = [closure_11(Header, obj4), ];
        if (expanded) {
          const items1 = [closure_11(Separator, {}), ];
          const obj5 = {};
          const merged = Object.assign(subscriptionInfo);
          let id;
          if (guild != null) {
            id = guild.id;
          }
          const obj9 = { children: null };
          obj5.guildId = id;
          obj5.subscription = subscription;
          obj5.onCancelSubscription = function handleCancelSubscription() {
            closure_1.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, {
              subscriptionId: subscription.id,
              onClose() {
                return closure_1_1.pop();
              }
            });
          };
          items1[1] = closure_11(CardBody, obj5);
          obj9.children = items1;
          expanded = closure_12(closure_13, obj9);
        }
        items[1] = expanded;
        obj2.children = items;
        tmp4Result = closure_12(View, obj2);
      }
    }
  }
  return tmp4Result;
};