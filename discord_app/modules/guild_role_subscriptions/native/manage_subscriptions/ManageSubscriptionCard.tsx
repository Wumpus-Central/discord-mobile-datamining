// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import _modDef9711 from "../../../../../_runtime/metro/09711__.js";
import FormSeparatorDefault from "../components/FormSeparator.tsx";
import useManageSubscriptionCardDataDefault from "../../manage_subscriptions/useManageSubscriptionCardData.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    let obj = { style: null, children: null };
    const items = [tmp.headerStatusContainer, headerStatusPastDue];
    obj.style = items;
    let str2 = "text-overlay-dark";
    if (flag) {
      str2 = "text-overlay-light";
    }
    obj = { variant: "text-xs/semibold", color: str2, children: str };
    obj.children = closure_1_11(Text_Text.Text, obj);
    tmp9Result = closure_1_11(View, obj);
  }
  return tmp9Result;
}
function Header(arg0) {
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = closure_14();
  let obj = { style: tmp.header, onPress: onToggleExpanded, children: null };
  const items = [closure_1_11(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  obj = { style: tmp.headerContent, children: null };
  const items1 = [closure_1_11(GuildIconDefault, { guild }), , ];
  obj = { style: tmp.headerTitlesContainer, children: null };
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
  obj.children = items2;
  items1[1] = closure_1_12(View, obj);
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  items1[2] = closure_1_11(native.Icon, { style: items3, size: native.Icon.Sizes.MEDIUM, source: _modDef9711 });
  obj.children = items1;
  items[1] = closure_1_12(View, obj);
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            if (isTrial) {
              const obj1 = { body: null, confirmText: null, isDismissable: true };
              const intl = tmp5(1114).intl;
              obj1.body = intl.string(tmp5(1114).t.NL7DFi);
              const intl2 = tmp5(1114).intl;
              obj1.confirmText = intl2.string(tmp5(1114).t["NX+WJN"]);
              tmp3(4905).show(obj1);
              c5 = 3;
              const obj6 = tmp3(4905);
            } else {
              dependencyMap = 1;
              _slicedToArray(true);
              closure_128_0 = false;
              if (tmp46) {
                c4 = 3;
                c5 = 1;
                let obj2 = { value: resubscribeSubscription(), done: false };
                return obj2;
              } else {
                obj2 = tmp38(4884);
                c4 = 2;
                c5 = 1;
                const obj3 = { value: obj2.resubscribeToSubscription(tmp45, analyticsLocations), done: false };
                return obj3;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
          }
          if (closure_128_0) {
            (function openResubsribedAlert() {
              closure_1_1(dependencyMap[16]);
              const obj = {
                importer() {
                  return closure_1_0(paths[18])(paths[17], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return () => { ... };
                  });
                }
              };
              obj.openLazy(obj);
            })();
          }
          dependencyMap = 0;
          closure_129_5(false);
        }
        dependencyMap = 0;
        closure_129_5(false);
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
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
  let obj = subscription(9366);
  let resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  [tmp6, c5] = _slicedToArray(analyticsLocations.useState(false), 2);
  analyticsLocations = subscription(7162)().analyticsLocations;
  obj = { style: tmp.cardContent, children: null };
  let tmp7Result = null;
  if (isPastDue) {
    obj = { children: null };
    let obj1 = { style: tmp.paymentOverDueWarning, children: null };
    const size = { color: tmp2(576).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const items = [closure_11(isTrial(1178).WarningCircle, size), closure_11(isTrial(1178).Spacer, { size: 8 }), ];
    let obj2 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
    let intl = isTrial(1114).intl;
    obj2.children = intl.string(isTrial(1114).t.eaqlau);
    items[2] = closure_11(isTrial(4556).Text, obj2);
    obj1.children = items;
    const items1 = [closure_12(tmp8, obj1), closure_11(isTrial(1178).Spacer, { size: 12 })];
    obj.children = items1;
    tmp7Result = closure_12(closure_13, obj);
  }
  const items2 = [tmp7Result, , , , ];
  let obj3 = { title: null, icon: null, onPressIcon: null, children: null };
  tmp2(15220);
  let intl2 = isTrial(1114).intl;
  obj3.title = intl2.string(isTrial(1114).t.dltUMH);
  let tmp2Result;
  if (isTrial) {
    tmp2Result = tmp2(12769);
  }
  obj3.icon = tmp2Result;
  let prop;
  if (isTrial) {
    prop = tmp15(4258).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj3.onPressIcon = prop;
  obj3.children = subscriptionPrice;
  items2[1] = closure_11(tmp2Result, obj3);
  items2[2] = closure_11(isTrial(1178).Spacer, { size: 16 });
  let obj4 = { style: tmp.cardRow, children: null };
  const items3 = [closure_11(subscription(15220), { title: nextRenewalLabel, children: nextRenewalDate }), closure_11(isTrial(1178).Spacer, { size: 8 }), ];
  const obj5 = { title: null, children: null };
  const tmp5 = _slicedToArray(analyticsLocations.useState(false), 2);
  const intl3 = tmp15(1114).intl;
  obj5.title = intl3.string(isTrial(1114).t.AOcwWB);
  obj5.children = memberSince;
  items3[2] = closure_11(subscription(15220), obj5);
  obj4.children = items3;
  items2[3] = closure_12(closure_7, obj4);
  let obj6 = { inset: true, titleViewStyle: tmp.manageSection, title: null, children: null };
  const intl4 = tmp15(1114).intl;
  obj6.title = intl4.string(isTrial(1114).t["4neDM+"]);
  const obj7 = { style: tmp.buttonsContainer, children: null };
  const obj8 = {
    renderGap() {
      return closure_2_11(View, { style: buttonDivider.buttonDivider });
    },
    children: null
  };
  const obj9 = { text: null, onPress: null };
  const tmp2Result1 = subscription(15220);
  const intl5 = tmp15(1114).intl;
  obj9.text = intl5.string(isTrial(1114).t["7spYft"]);
  obj9.onPress = function handleUpdatePaymentMethod() {
    if (null != subscription) {
      if (subscription.isPurchasedViaAppleGeneric) {
        let tmp14Result = LinkingDefault;
        tmp14Result.openURL(PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
      } else {
        tmp14Result = actions_AlertActionCreatorsDefault;
        const obj = { body: null, confirmText: null, isDismissable: true };
        const intl = util.intl;
        obj.body = intl.string(util.t.fmm9jo);
        const intl2 = util.intl;
        obj.confirmText = intl2.string(util.t["NX+WJN"]);
        tmp14Result.show(obj);
      }
    }
  };
  const items4 = [closure_11(subscription(15221), obj9), , ];
  const obj10 = { text: null, onPress: null };
  const tmp2Result2 = subscription(15221);
  const intl6 = tmp15(1114).intl;
  obj10.text = intl6.string(isTrial(1114).t.FRbWR8);
  obj10.onPress = function handleChangeTier() {
    router_utils.transitionTo(React6.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = closure_11(subscription(15221), obj10);
  if (isCancelled) {
    const obj11 = { style: tmp.resubscribeButtonContainer, children: null };
    const obj12 = { text: null, onPress: null, loading: null };
    const intl8 = tmp15(1114).intl;
    obj12.text = intl8.string(tmp15(1114).t.iIvF2z);
    obj12.onPress = function handleResubscribe() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj12.loading = tmp6;
    obj11.children = closure_11(tmp2(10301), obj12);
    let tmp13Result = closure_11(tmp8, obj11);
    const tmp2Result4 = tmp2(10301);
  } else {
    const obj13 = { text: null, onPress: null };
    const intl7 = tmp15(1114).intl;
    obj13.text = intl7.string(tmp15(1114).t.Dx0lF7);
    obj13.onPress = onCancelSubscription;
    tmp13Result = closure_11(tmp2(15221), obj13);
    const tmp2Result5 = tmp2(15221);
  }
  items4[2] = tmp13Result;
  obj8.children = items4;
  obj7.children = closure_12(isTrial(10346).GappedList, obj8);
  obj6.children = closure_11(closure_7, obj7);
  items2[4] = closure_11(isTrial(8593).FormSection, obj6);
  obj.children = items2;
  return closure_12(closure_7, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ Routes: closure_8, UserSettingsSections: closure_9 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { container: null, cardContent: null, buttonsContainer: null, buttonDivider: null, resubscribeButtonContainer: null, separator: null, header: null, headerContent: null, headerTitlesContainer: null, expandIcon: null, expandIconExpanded: null, cardRow: null, manageSection: null, paymentOverDueWarning: null, headerStatusContainer: null, headerStatusCancel: null, headerStatusTrial: null, headerStatusPastDue: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles.container = createStyles;
createStyles.cardContent = { padding: 16 };
createStyles.buttonsContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.buttonDivider = { width: "100%", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
createStyles.resubscribeButtonContainer = { padding: 16 };
createStyles.separator = { paddingHorizontal: 16 };
let obj2 = { width: "100%", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
createStyles.header = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.headerContent = { padding: 16, alignItems: "center", flexDirection: "row" };
createStyles.headerTitlesContainer = { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 };
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.expandIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
createStyles.expandIconExpanded = obj5;
createStyles.cardRow = { flexDirection: "row" };
createStyles.manageSection = { paddingTop: 16 };
createStyles.paymentOverDueWarning = { flexDirection: "row", width: "90%" };
createStyles.headerStatusContainer = { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" };
let obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.headerStatusCancel = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
createStyles.headerStatusTrial = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.headerStatusPastDue = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  subscription = subscription.subscription;
  const tmp2 = useManageSubscriptionCardDataDefault(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  let obj = subscription(1483);
  importDefault = obj.useNavigation();
  let tmp4Result = null;
  if (null != groupListing) {
    tmp4Result = null;
    if (null != listing) {
      tmp4Result = null;
      if (null != subscriptionInfo) {
        obj = { style: tmp.container, children: null };
        obj = { expanded, guild, isCancelled: null, isTrial: null, isPastDue: null, listing: null, onToggleExpanded: null };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        obj.listing = listing;
        obj.onToggleExpanded = handleToggleExpanded;
        const items = [closure_11(Header, obj), ];
        if (expanded) {
          const items1 = [closure_11(Separator, {}), ];
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
            closure_1.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, {
              subscriptionId: subscription.id,
              onClose() {
                return closure_1_1.pop();
              }
            });
          };
          items1[1] = closure_11(CardBody, obj1);
          obj2.children = items1;
          expanded = closure_12(closure_13, obj2);
        }
        items[1] = expanded;
        obj.children = items;
        tmp4Result = closure_12(View, obj);
      }
    }
  }
  return tmp4Result;
};