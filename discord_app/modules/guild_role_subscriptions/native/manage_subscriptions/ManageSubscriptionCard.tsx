// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import FormSeparatorDefault from "../components/FormSeparator.tsx";
import useManageSubscriptionCardDataDefault from "../../manage_subscriptions/useManageSubscriptionCardData.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
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
function Header(guild) {
  guild = guild.guild;
  ({ expanded, isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = guild);
  const tmp = closure_14();
  const obj = { style: tmp.header, onPress: onToggleExpanded, children: null };
  const items = [closure_1_11(HeaderStatus, { isCancelled, isTrial, isPastDue })];
  const obj2 = { style: tmp.headerContent, children: null };
  const items1 = [closure_1_11(GuildIconDefault, { guild }), ,];
  const obj3 = { style: tmp.headerTitlesContainer, children: null };
  const items2 = [
    closure_1_11(Text_Text.Text, {
      ellipsizeMode: "tail",
      lineClamp: 2,
      variant: "text-md/semibold",
      color: "interactive-text-active",
      children: listing.name,
    }),
  ];
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(util.t["He+cmd"]);
  }
  items2[1] = closure_1_11(Text_Text.Text, {
    variant: "text-sm/medium",
    color: "interactive-text-default",
    children: name,
  });
  obj3.children = items2;
  items1[1] = closure_1_12(View, obj3);
  let expandIconExpanded;
  if (expanded) {
    expandIconExpanded = tmp.expandIconExpanded;
  }
  items1[2] = closure_1_11(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "md", style: expandIconExpanded });
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
  let resubscribeSubscription;
  _slicedToArray = undefined;
  noop = async function _handleResubscribe() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
              const intl = tmp5(1113).intl;
              obj5.body = intl.string(tmp5(1113).t.NL7DFi);
              const intl2 = tmp5(1113).intl;
              obj5.confirmText = intl2.string(tmp5(1113).t["NX+WJN"]);
              tmp3(5959).show(obj5);
              c5 = 3;
              const obj6 = tmp3(5959);
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
                const obj8 = { value: tmp38(6535).resubscribeToSubscription(tmp45, analyticsLocations), done: false };
                return obj8;
              }
            }
          }
        } else if (1 === tmp8) {
          dependencyMap = 0;
          closure_129_4(false);
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
            closure_129_4(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
          }
          if (closure_128_0) {
            (function openResubsribedAlert() {
              const obj2 = { importer: null, isDismissable: false };
              closure_0 = closure_5(function* () {
                yield tmp2(paths[17])(paths[16], paths.paths);
                closure_128_0 = value.default;
                return (arg0) => {
                  const merged = Object.assign(arg0);
                  return closure_2_11(closure_1_0, {});
                };
              });
              obj2.importer = function importer() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_1(closure_3[15]).openLazy(obj2);
            })();
          }
          dependencyMap = 0;
          closure_129_4(false);
        }
        dependencyMap = 0;
        closure_129_4(false);
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
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } =
    isTrial);
  const tmp = closure_14();
  resubscribeSubscription = subscription(resubscribeSubscription[18]).useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  let obj = subscription(resubscribeSubscription[18]);
  [tmp6, c4] = noop.useState(false);
  const analyticsLocations = subscription(resubscribeSubscription[19])().analyticsLocations;
  let obj2 = { style: tmp.cardContent, children: null };
  let tmp7Result = null;
  if (isPastDue) {
    const obj3 = { children: null };
    let obj4 = { style: tmp.paymentOverDueWarning, children: null };
    let obj5 = { size: "xs", color: tmp2(tmp3[8]).unsafe_rawColors.YELLOW_300 };
    const items = [closure_11(isTrial(tmp3[21]).CircleErrorIcon, obj5)];
    let obj6 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
    let intl = isTrial(tmp3[9]).intl;
    obj6.children = intl.string(isTrial(tmp3[9]).t.eaqlau);
    items[1] = closure_11(isTrial(tmp3[10]).Text, obj6);
    obj4.children = items;
    const items1 = [closure_12(View, obj4), closure_11(isTrial(tmp3[22]).Spacer, { size: 12 })];
    obj3.children = items1;
    tmp7Result = closure_12(closure_13, obj3);
  }
  const items2 = [tmp7Result, , , , ,];
  let obj7 = { title: null, icon: null, onPressIcon: null, children: null };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  let intl2 = isTrial(tmp3[9]).intl;
  obj7.title = intl2.string(isTrial(resubscribeSubscription[9]).t.dltUMH);
  let prop;
  if (isTrial) {
    prop = tmp15(tmp3[24]).CircleInformationIcon;
  }
  obj7.icon = prop;
  let prop1;
  if (isTrial) {
    prop1 = tmp15(tmp3[25]).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj7.onPressIcon = prop1;
  obj7.children = subscriptionPrice;
  items2[1] = closure_11(subscription(resubscribeSubscription[23]), obj7);
  items2[2] = closure_11(isTrial(resubscribeSubscription[22]).Spacer, { size: 16 });
  let obj8 = { style: tmp.cardRow, children: null };
  const items3 = [
    closure_11(subscription(resubscribeSubscription[23]), { title: nextRenewalLabel, children: nextRenewalDate }),
  ];
  let obj9 = { title: null, children: null };
  const tmp2Result = subscription(resubscribeSubscription[23]);
  const intl3 = tmp15(tmp3[9]).intl;
  obj9.title = intl3.string(isTrial(resubscribeSubscription[9]).t.AOcwWB);
  obj9.children = memberSince;
  items3[1] = closure_11(subscription(resubscribeSubscription[23]), obj9);
  obj8.children = items3;
  items2[3] = closure_12(View, obj8);
  items2[4] = closure_11(isTrial(resubscribeSubscription[22]).Spacer, { size: 16 });
  const obj10 = { hasIcons: false, title: null, children: null };
  const intl4 = tmp15(tmp3[9]).intl;
  obj10.title = intl4.string(isTrial(resubscribeSubscription[9]).t["4neDM+"]);
  const obj11 = { arrow: true, label: null, onPress: null };
  const intl5 = tmp15(tmp3[9]).intl;
  obj11.label = intl5.string(isTrial(resubscribeSubscription[9]).t["7spYft"]);
  obj11.onPress = function handleUpdatePaymentMethod() {
    if (null != subscription) {
      if (subscription.isPurchasedViaAppleGeneric) {
        const tmp14Result = LinkingDefault;
        tmp14Result.openURL(
          PremiumUtils.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"),
        );
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
  const items4 = [closure_11(isTrial(resubscribeSubscription[27]).TableRow, obj11), ,];
  const obj12 = { arrow: true, label: null, onPress: null };
  const intl6 = tmp15(tmp3[9]).intl;
  obj12.label = intl6.string(isTrial(resubscribeSubscription[9]).t.FRbWR8);
  obj12.onPress = function handleChangeTier() {
    router_utils.transitionTo(React6.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = closure_11(isTrial(resubscribeSubscription[27]).TableRow, obj12);
  if (isCancelled) {
    const obj13 = { style: tmp.resubscribeButtonContainer, children: null };
    const obj14 = { text: null, onPress: null, loading: null };
    const intl8 = tmp15(tmp3[9]).intl;
    obj14.text = intl8.string(tmp15(tmp3[9]).t.iIvF2z);
    obj14.onPress = function handleResubscribe() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj14.loading = tmp6;
    obj13.children = closure_11(tmp2(tmp3[31]), obj14);
    let tmp13Result = closure_11(View, obj13);
    const tmp2Result4 = tmp2(tmp3[31]);
  } else {
    const obj15 = { arrow: true, variant: "danger", label: null, onPress: null };
    const intl7 = tmp15(tmp3[9]).intl;
    obj15.label = intl7.string(tmp15(tmp3[9]).t.Dx0lF7);
    obj15.onPress = onCancelSubscription;
    tmp13Result = closure_11(tmp15(tmp3[27]).TableRow, obj15);
  }
  items4[2] = tmp13Result;
  obj10.children = items4;
  items2[5] = closure_12(isTrial(resubscribeSubscription[26]).TableRowGroup, obj10);
  obj2.children = items2;
  return closure_12(View, obj2);
}
const View = fn(17).View;
const Constants = fn(1072);
({ Routes: closure_8, UserSettingsSections: closure_9 } = Constants);
const StaticChannelRoute = fn(4870).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { padding: 0 },
  cardContent: { padding: 16 },
  resubscribeButtonContainer: { backgroundColor: nativeDefault.colors.CARD_MUTED_BG, padding: 16 },
  separator: { paddingHorizontal: 16 },
  header: null,
  headerContent: null,
  headerTitlesContainer: null,
  expandIconExpanded: null,
  cardRow: null,
  paymentOverDueWarning: null,
  headerStatusContainer: null,
  headerStatusCancel: null,
  headerStatusTrial: null,
  headerStatusPastDue: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.CARD_MUTED_BG, padding: 16 };
obj2.header = { borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
obj2.headerContent = { padding: 16, alignItems: "center", flexDirection: "row" };
obj2.headerTitlesContainer = { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16, gap: 2 };
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
obj2.expandIconExpanded = obj5;
let obj4 = { borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
obj2.cardRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.paymentOverDueWarning = { flexDirection: "row", width: "90%", gap: nativeDefault.space.PX_8 };
obj2.headerStatusContainer = { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" };
let obj7 = { flexDirection: "row", width: "90%", gap: nativeDefault.space.PX_8 };
obj2.headerStatusCancel = { backgroundColor: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND };
let obj8 = { backgroundColor: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND };
obj2.headerStatusTrial = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.headerStatusPastDue = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx",
);

export default function ManageSubscriptionCard(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_14();
  ({ listing, guild, expanded, subscriptionInfo, groupListing, handleToggleExpanded } =
    useManageSubscriptionCardDataDefault(subscription));
  const tmp3 = useManageSubscriptionCardDataDefault(subscription);
  const tmp4 = subscription;
  importDefault = subscription(1497).useNavigation();
  let tmp6Result = null;
  if (null != groupListing) {
    tmp6Result = null;
    if (null != listing) {
      tmp6Result = null;
      if (null != subscriptionInfo) {
        const obj2 = { variant: "primary", style: tmp.container, children: null };
        const obj4 = {
          expanded,
          guild,
          isCancelled: null,
          isTrial: null,
          isPastDue: null,
          listing: null,
          onToggleExpanded: null,
        };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        obj4.listing = listing;
        obj4.onToggleExpanded = handleToggleExpanded;
        const items = [closure_11(Header, obj4)];
        if (expanded) {
          const items1 = [closure_11(Separator, {})];
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
              },
            });
          };
          items1[1] = closure_11(CardBody, obj5);
          obj9.children = items1;
          expanded = closure_12(closure_13, obj9);
        }
        items[1] = expanded;
        obj2.children = items;
        tmp6Result = closure_12(tmp4(6977).Card, obj2);
      }
    }
  }
  return tmp6Result;
}
