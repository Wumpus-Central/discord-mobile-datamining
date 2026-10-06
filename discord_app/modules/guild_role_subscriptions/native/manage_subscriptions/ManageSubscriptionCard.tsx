// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import intl9 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09222_AssetRegistry.js";
import FormSeparatorDefault from "../components/FormSeparator.tsx";
import useManageSubscriptionCardDataDefault from "../../manage_subscriptions/useManageSubscriptionCardData.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c3, c4, dependencyMap, importDefault, navigation;

let c9;
let closure_12;
let items;
let map1;
let metroImportAll;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function CardBody(isTrial) {
  let GappedList;
  let _undefined;
  let buttonDivider;
  let c5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isCancelled;
  let isPastDue;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let memberSince;
  let nextRenewalDate;
  let nextRenewalLabel;
  let obj10;
  let obj11;
  let obj15;
  let onCancelSubscription;
  let prop;
  let subscriptionPrice;
  let tmp13Result;
  let tmp2Result11;
  let tmp2Result7;
  let tmp6;
  isTrial = isTrial.isTrial;
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  _slicedToArray = undefined;
  let analyticsLocations;
  let obj = function _handleResubscribe() {
    obj = _asyncToGenerator(async () => {
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      function openResubsribedAlert() {
        let paths;
        obj = closure_1_1(closure_1_3[18]);
        const obj2 = {
          importer() {
            const promise = closure_1_0(paths[20])(paths[19], paths.paths);
            return promise.then((result) => {
              let closure_0 = result.default;
              return (arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                return closure_2_11(closure_0, obj);
              };
            });
          },
          isDismissable: false,
        };
        obj.openLazy(obj2);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          let show;
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
              closure_0 = undefined;
              if (isTrial) {
                show = tmp(c3[18]).show;
                const obj5 = {
                  body: intl.string(show(c3[11]).t.NL7DFi),
                  confirmText: intl2.string(show(c3[11]).t["NX+WJN"]),
                  isDismissable: true,
                };
                const tmp28 = tmp(c3[18]);
                intl = show(c3[11]).intl;
                intl2 = show(c3[11]).intl;
                show(obj5);
              } else {
                c3 = 1;
                _undefined(true);
                closure_0 = false;
                if (tmp38) {
                  show = resubscribeSubscription();
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: show, done: false };
                  return obj6;
                } else {
                  const obj3 = tmp31(c3[23]);
                  show = obj3.resubscribeToSubscription(tmp37, analyticsLocations);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: show, done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            show = closure_129_5(false);
            throw tmp31;
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_5(false);
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_0 = true;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              show = closure_129_5(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
            }
            show = closure_0;
            if (show) {
              openResubsribedAlert();
            }
            c3 = 0;
            closure_129_5(false);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp31) {
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } =
    isTrial);
  const tmp = closure_14();
  dependencyMap = tmp;
  const tmp3 = dependencyMap;
  obj = subscription(8900);
  let resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  const nativePaymentsConnected = resubscribeSubscription.nativePaymentsConnected;
  [tmp6, c5] = _slicedToArray(analyticsLocations.useState(false), 2);
  const tmp5 = _slicedToArray(analyticsLocations.useState(false), 2);
  analyticsLocations = subscription(6664)().analyticsLocations;
  let obj2 = { style: tmp.cardContent, children: items2 };
  let tmp7Result = null;
  if (isPastDue) {
    let obj3 = { children: items1 };
    let obj4 = { style: tmp.paymentOverDueWarning, children: items };
    size = { color: subscription(587).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const WarningCircle = isTrial(1188).WarningCircle;
    items = [closure_11(WarningCircle, size), closure_11(isTrial(1188).Spacer, { size: 8 })];
    let obj5 = {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: intl.string(isTrial(1126).t.eaqlau),
    };
    const Text = isTrial(4892).Text;
    intl = isTrial(1126).intl;
    items[2] = closure_11(Text, obj5);
    items1 = [closure_12(tmp8, obj4), closure_11(isTrial(1188).Spacer, { size: 12 })];
    tmp7Result = closure_12(closure_13, obj3);
  }
  items2 = [tmp7Result, , , ,];
  let obj6 = {
    title: intl2.string(isTrial(1126).t.dltUMH),
    icon: tmp2Result7,
    onPressIcon: prop,
    children: subscriptionPrice,
  };
  const tmp2Result = subscription(15053);
  intl2 = isTrial(1126).intl;
  tmp2Result7 = undefined;
  if (isTrial) {
    tmp2Result7 = tmp2(4821);
  }
  prop = undefined;
  if (isTrial) {
    prop = tmp15(4573).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  items2[1] = closure_11(tmp2Result, obj6);
  items2[2] = closure_11(isTrial(1188).Spacer, { size: 16 });
  let obj7 = { style: tmp.cardRow, children: items3 };
  items3 = [
    closure_11(subscription(15053), { title: nextRenewalLabel, children: nextRenewalDate }),
    closure_11(tmp15(1188).Spacer, { size: 8 }),
  ];
  let obj8 = { title: intl3.string(tmp15(1126).t.AOcwWB), children: memberSince };
  const tmp2Result8 = subscription(15053);
  intl3 = tmp15(1126).intl;
  items3[2] = closure_11(tmp2Result8, obj8);
  items2[3] = closure_12(obj, obj7);
  const obj9 = {
    inset: true,
    titleViewStyle: tmp.manageSection,
    title: intl4.string(isTrial(1126).t["4neDM+"]),
    children: closure_11(obj, obj10),
  };
  const FormSection = tmp15(8924).FormSection;
  intl4 = tmp15(1126).intl;
  obj10 = { style: tmp.buttonsContainer, children: closure_12(GappedList, obj11) };
  obj11 = {
    renderGap() {
      obj = { style: buttonDivider.buttonDivider };
      return unpackModuleId(View, obj);
    },
    children: items4,
  };
  GappedList = tmp15(9966).GappedList;
  const obj12 = {
    text: intl5.string(isTrial(1126).t["7spYft"]),
    onPress: function handleUpdatePaymentMethod() {
      let intl;
      let intl2;
      if (null != subscription) {
        if (subscription.isPurchasedViaAppleGeneric) {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = PremiumUtils;
          openURL(obj2.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        } else {
          obj = {
            body: intl.string(intl9.t.fmm9jo),
            confirmText: intl2.string(intl9.t["NX+WJN"]),
            isDismissable: true,
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl9.intl;
          intl2 = intl9.intl;
          show(obj);
        }
      }
    },
  };
  const tmp2Result9 = subscription(15054);
  intl5 = tmp15(1126).intl;
  items4 = [closure_11(tmp2Result9, obj12), ,];
  const obj13 = {
    text: intl6.string(isTrial(1126).t.FRbWR8),
    onPress: function handleChangeTier() {
      obj = router_utils;
      obj.transitionTo(metroImportAll.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    },
  };
  const tmp2Result10 = subscription(15054);
  intl6 = tmp15(1126).intl;
  items4[1] = closure_11(tmp2Result10, obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer, children: closure_11(tmp2Result11, obj15) };
    obj15 = {
      text: intl8.string(isTrial(1126).t.iIvF2z),
      onPress: function handleResubscribe() {
        return obj(...arguments);
      },
      loading: tmp6,
    };
    tmp2Result11 = subscription(9916);
    intl8 = tmp15(1126).intl;
    tmp13Result = closure_11(tmp8, obj14);
  } else {
    const obj16 = { text: intl7.string(isTrial(1126).t.Dx0lF7), onPress: onCancelSubscription };
    const tmp2Result12 = subscription(15054);
    intl7 = tmp15(1126).intl;
    tmp13Result = closure_11(tmp2Result12, obj16);
  }
  items4[2] = tmp13Result;
  items2[4] = closure_11(FormSection, obj9);
  return closure_12(obj, obj2);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ Routes: metroImportAll, UserSettingsSections: c9 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  cardContent: { padding: 16 },
  buttonsContainer: obj3,
  buttonDivider: obj4,
  resubscribeButtonContainer: { padding: 16 },
  separator: { paddingHorizontal: 16 },
  header: obj5,
  headerContent: { padding: 16, alignItems: "center", flexDirection: "row" },
  headerTitlesContainer: { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 },
  expandIcon: obj6,
  expandIconExpanded: obj7,
  cardRow: { flexDirection: "row" },
  manageSection: { paddingTop: 16 },
  paymentOverDueWarning: { flexDirection: "row", width: "90%" },
  headerStatusContainer: { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" },
  headerStatusCancel: obj8,
  headerStatusTrial: obj9,
  headerStatusPastDue: obj10,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj4 = {
  width: "100%",
  borderBottomWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginLeft: 16,
  marginTop: -1,
};
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj7 = { transform: items };
items = [{ rotate: "180deg" }];
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj10 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let flag;
      let headerStatusPastDue;
      let isCancelled;
      let isPastDue;
      let isTrial;
      let str;
      const obj = react2;
      const cResult = obj.c(12);
      ({ isCancelled, isTrial, isPastDue } = arg0);
      const tmp4 = closure_14();
      if (isCancelled) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl9.intl;
          const stringResult = intl3.string(intl9.t["7uFZGt"]);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        headerStatusPastDue = tmp4.headerStatusCancel;
        flag = true;
        str = first;
      } else if (isTrial) {
        let tmp9;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl9.intl;
          const stringResult1 = intl2.string(intl9.t["6anton"]);
          cResult[1] = stringResult1;
          tmp9 = stringResult1;
        } else {
          tmp9 = cResult[1];
        }
        headerStatusPastDue = tmp4.headerStatusTrial;
        flag = true;
        str = tmp9;
      } else {
        str = "";
        flag = true;
        if (isPastDue) {
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl9.intl;
            const stringResult2 = intl.string(intl9.t.uENdgb);
            cResult[2] = stringResult2;
            tmp6 = stringResult2;
          } else {
            tmp6 = cResult[2];
          }
          headerStatusPastDue = tmp4.headerStatusPastDue;
          flag = false;
          str = tmp6;
        }
      }
      if ("" === str) {
        return null;
      } else {
        if (cResult[3] === headerStatusPastDue) {
          let tmp14;
          if (cResult[4] === tmp4.headerStatusContainer) {
            tmp14 = cResult[5];
          }
          let str5 = "text-overlay-dark";
          if (flag) {
            str5 = "text-overlay-light";
          }
          if (cResult[6] === str) {
            let tmp15;
            if (cResult[7] === str5) {
              tmp15 = cResult[8];
            }
            if (cResult[9] === tmp14) {
              let tmp18;
              if (cResult[10] === tmp15) {
                tmp18 = cResult[11];
              }
              return tmp18;
            }
            const obj2 = { style: tmp14, children: tmp15 };
            const tmp21 = unpackModuleId(View, obj2);
            cResult[9] = tmp14;
            cResult[10] = tmp15;
            cResult[11] = tmp21;
            tmp18 = tmp21;
          }
          const obj3 = { variant: "text-xs/semibold", color: str5, children: str };
          const tmp17 = unpackModuleId(Text_Text.Text, obj3);
          cResult[6] = str;
          cResult[7] = str5;
          cResult[8] = tmp17;
          tmp15 = tmp17;
        }
        const items = [tmp4.headerStatusContainer, headerStatusPastDue];
        cResult[3] = headerStatusPastDue;
        cResult[4] = tmp4.headerStatusContainer;
        cResult[5] = items;
        tmp14 = items;
      }
    }
  : (arg0) => {
      let Text;
      let flag;
      let headerStatusPastDue;
      let isCancelled;
      let isPastDue;
      let isTrial;
      let items;
      let obj2;
      let str;
      ({ isCancelled, isTrial, isPastDue } = arg0);
      const tmp = closure_14();
      if (isCancelled) {
        const intl3 = intl9.intl;
        str = intl3.string(intl9.t["7uFZGt"]);
        headerStatusPastDue = tmp.headerStatusCancel;
        flag = true;
      } else if (isTrial) {
        const intl2 = intl9.intl;
        str = intl2.string(intl9.t["6anton"]);
        headerStatusPastDue = tmp.headerStatusTrial;
        flag = true;
      } else {
        str = "";
        flag = true;
        if (isPastDue) {
          const intl = intl9.intl;
          str = intl.string(intl9.t.uENdgb);
          headerStatusPastDue = tmp.headerStatusPastDue;
          flag = false;
        }
      }
      let tmp9Result = null;
      if ("" !== str) {
        const obj = { style: items, children: unpackModuleId(Text, obj2) };
        items = [tmp.headerStatusContainer, headerStatusPastDue];
        let str2 = "text-overlay-dark";
        Text = Text_Text.Text;
        if (flag) {
          str2 = "text-overlay-light";
        }
        obj2 = { variant: "text-xs/semibold", color: str2, children: str };
        tmp9Result = unpackModuleId(View, obj);
      }
      return tmp9Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let expanded;
      let guild;
      let isCancelled;
      let isPastDue;
      let isTrial;
      let items;
      let items1;
      let items2;
      let items3;
      let listing;
      let onToggleExpanded;
      const obj = react2;
      const cResult = obj.c(30);
      ({ expanded, guild, isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
      const tmp4 = closure_14();
      if (cResult[0] === isCancelled) {
        if (cResult[1] === isPastDue) {
          let tmp5;
          let tmp7;
          let tmp11;
          let tmp15;
          let tmp21;
          let tmp24;
          if (cResult[2] === isTrial) {
            tmp5 = cResult[3];
          }
          if (cResult[4] !== guild) {
            const obj2 = { guild };
            const tmp10 = unpackModuleId(GuildIconDefault, obj2);
            cResult[4] = guild;
            cResult[5] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== listing.name) {
            const obj3 = {
              ellipsizeMode: "tail",
              lineClamp: 2,
              variant: "text-md/semibold",
              color: "interactive-text-active",
              children: listing.name,
            };
            const tmp13 = unpackModuleId(Text_Text.Text, obj3);
            cResult[6] = listing.name;
            cResult[7] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = unpackModuleId(native.Spacer, { size: 2 });
            cResult[8] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[8];
          }
          let name;
          const tmp18 = cResult[9];
          if (guild != null) {
            name = guild.name;
          }
          if (tmp18 !== name) {
            let name1;
            if (guild != null) {
              name1 = guild.name;
            }
            if (name1 == null) {
              const intl = intl9.intl;
              name1 = intl.string(intl9.t["He+cmd"]);
            }
            let name2;
            if (guild != null) {
              name2 = guild.name;
            }
            cResult[9] = name2;
            cResult[10] = name1;
            tmp21 = name1;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] !== tmp21) {
            const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: tmp21 };
            const tmp26 = unpackModuleId(Text_Text.Text, obj4);
            cResult[11] = tmp21;
            cResult[12] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[12];
          }
          if (cResult[13] === tmp4.headerTitlesContainer) {
            if (cResult[14] === tmp11) {
              let tmp27;
              if (cResult[15] === tmp24) {
                tmp27 = cResult[16];
              }
              if (expanded) {
                expanded = tmp4.expandIconExpanded;
              }
              if (cResult[17] === tmp4.expandIcon) {
                let tmp31;
                if (cResult[18] === expanded) {
                  tmp31 = cResult[19];
                }
                if (cResult[20] === tmp4.headerContent) {
                  if (cResult[21] === tmp7) {
                    if (cResult[22] === tmp27) {
                      let tmp35;
                      if (cResult[23] === tmp31) {
                        tmp35 = cResult[24];
                      }
                      if (cResult[25] === onToggleExpanded) {
                        if (cResult[26] === tmp4.header) {
                          if (cResult[27] === tmp5) {
                            let tmp39;
                            if (cResult[28] === tmp35) {
                              tmp39 = cResult[29];
                            }
                            return tmp39;
                          }
                        }
                      }
                      const obj5 = { style: tmp4.header, onPress: onToggleExpanded, children: items };
                      items = [tmp5, tmp35];
                      const tmp41 = closure_12(Pressables.PressableHighlight, obj5);
                      cResult[25] = onToggleExpanded;
                      cResult[26] = tmp4.header;
                      cResult[27] = tmp5;
                      cResult[28] = tmp35;
                      cResult[29] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                }
                const obj6 = { style: tmp4.headerContent, children: items1 };
                items1 = [tmp7, tmp27, tmp31];
                const tmp38 = closure_12(View, obj6);
                cResult[20] = tmp4.headerContent;
                cResult[21] = tmp7;
                cResult[22] = tmp27;
                cResult[23] = tmp31;
                cResult[24] = tmp38;
                tmp35 = tmp38;
              }
              const obj7 = { style: items2, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
              items2 = [tmp4.expandIcon, expanded];
              const Icon = native.Icon;
              const tmp34 = unpackModuleId(Icon, obj7);
              cResult[17] = tmp4.expandIcon;
              cResult[18] = expanded;
              cResult[19] = tmp34;
              tmp31 = tmp34;
            }
          }
          const obj8 = { style: tmp4.headerTitlesContainer, children: items3 };
          items3 = [tmp11, tmp15, tmp24];
          const tmp30 = closure_12(View, obj8);
          cResult[13] = tmp4.headerTitlesContainer;
          cResult[14] = tmp11;
          cResult[15] = tmp24;
          cResult[16] = tmp30;
          tmp27 = tmp30;
        }
      }
      const tmp6 = unpackModuleId(closure_15, { isCancelled, isTrial, isPastDue });
      cResult[0] = isCancelled;
      cResult[1] = isPastDue;
      cResult[2] = isTrial;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let expanded;
      let guild;
      let isCancelled;
      let isPastDue;
      let isTrial;
      let items;
      let items1;
      let items2;
      let listing;
      let onToggleExpanded;
      ({ expanded, guild } = arg0);
      ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
      const tmp = closure_14();
      const obj = { style: tmp.header, onPress: onToggleExpanded, children: items };
      const PressableHighlight = Pressables.PressableHighlight;
      items = [unpackModuleId(closure_15, { isCancelled, isTrial, isPastDue })];
      const obj2 = { style: tmp.headerContent, children: items1 };
      items1 = [unpackModuleId(GuildIconDefault, { guild }), ,];
      const obj3 = { style: tmp.headerTitlesContainer, children: items2 };
      items2 = [, ,];
      const obj4 = {
        ellipsizeMode: "tail",
        lineClamp: 2,
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: listing.name,
      };
      items2[0] = unpackModuleId(Text_Text.Text, obj4);
      items2[1] = unpackModuleId(native.Spacer, { size: 2 });
      let name;
      const Text = Text_Text.Text;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        const intl = intl9.intl;
        name = intl.string(intl9.t["He+cmd"]);
      }
      items2[2] = unpackModuleId(Text, {
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: name,
      });
      items1[1] = closure_12(View, obj3);
      const items3 = [tmp.expandIcon];
      const Icon = native.Icon;
      if (expanded) {
        expanded = tmp.expandIconExpanded;
      }
      items3[1] = expanded;
      const obj5 = { style: items3, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
      items1[2] = unpackModuleId(Icon, obj5);
      items[1] = closure_12(View, obj2);
      return closure_12(PressableHighlight, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp3 = closure_14();
      if (cResult[0] !== tmp3.separator) {
        const obj2 = { style: tmp3.separator, withoutMargins: true };
        const tmp7 = unpackModuleId(FormSeparatorDefault, obj2);
        cResult[0] = tmp3.separator;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = { style: closure_14().separator, withoutMargins: true };
      return unpackModuleId(FormSeparatorDefault, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManageSubscriptionCard(subscription) {
      let expanded;
      let groupListing;
      let guild;
      let handleToggleExpanded;
      let id1;
      let items;
      let listing;
      let subscriptionInfo;
      let obj = subscription(576);
      const cResult = obj.c(21);
      subscription = subscription.subscription;
      const tmp2 = closure_14();
      ({ listing, guild, expanded, handleToggleExpanded, subscriptionInfo, groupListing } =
        navigation(15056)(subscription));
      navigation(15056)(subscription);
      const obj2 = subscription(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === navigation) {
        let tmp5;
        if (cResult[1] === subscription.id) {
          tmp5 = cResult[2];
        }
        let tmp7 = null;
        if (null != groupListing) {
          tmp7 = null;
          if (null != listing) {
            tmp7 = null;
            if (null != subscriptionInfo) {
              if (cResult[3] === expanded) {
                if (cResult[4] === guild) {
                  if (cResult[5] === handleToggleExpanded) {
                    if (cResult[6] === listing) {
                      if (cResult[7] === subscriptionInfo.isCancelled) {
                        if (cResult[8] === subscriptionInfo.isPastDue) {
                          let tmp8;
                          if (cResult[9] === subscriptionInfo.isTrial) {
                            tmp8 = cResult[10];
                          }
                          if (cResult[11] === expanded) {
                            let id;
                            const tmp12 = cResult[12];
                            if (guild != null) {
                              id = guild.id;
                            }
                            if (tmp12 === id) {
                              if (cResult[13] === tmp5) {
                                if (cResult[14] === subscription) {
                                  let tmp14;
                                  if (cResult[15] === subscriptionInfo) {
                                    tmp14 = cResult[16];
                                  }
                                  if (cResult[17] === tmp2.container) {
                                    if (cResult[18] === tmp8) {
                                      let tmp26;
                                      if (cResult[19] === tmp14) {
                                        tmp26 = cResult[20];
                                      }
                                      tmp7 = tmp26;
                                    }
                                  }
                                  const obj4 = { style: tmp2.container, children: items };
                                  items = [tmp8, tmp14];
                                  const tmp29 = closure_12(View, obj4);
                                  cResult[17] = tmp2.container;
                                  cResult[18] = tmp8;
                                  cResult[19] = tmp14;
                                  cResult[20] = tmp29;
                                  tmp26 = tmp29;
                                }
                              }
                            }
                          }
                          let tmp16Result = expanded;
                          if (tmp16Result) {
                            const items1 = [closure_11(closure_17, {})];
                            const obj5 = { guildId: id1, subscription, onCancelSubscription: tmp5 };
                            const merged = Object.assign(subscriptionInfo);
                            id1 = undefined;
                            if (guild != null) {
                              id1 = guild.id;
                            }
                            const obj6 = { children: items1 };
                            items1[1] = closure_11(CardBody, obj5);
                            tmp16Result = closure_12(closure_13, obj6);
                          }
                          cResult[11] = expanded;
                          let id2;
                          if (guild != null) {
                            id2 = guild.id;
                          }
                          cResult[12] = id2;
                          cResult[13] = tmp5;
                          cResult[14] = subscription;
                          cResult[15] = subscriptionInfo;
                          cResult[16] = tmp16Result;
                          tmp14 = tmp16Result;
                        }
                      }
                    }
                  }
                }
              }
              const obj10 = {
                expanded,
                guild,
                isCancelled: null,
                isTrial: null,
                isPastDue: null,
                listing,
                onToggleExpanded: handleToggleExpanded,
              };
              ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
              const tmp11 = closure_11(closure_16, obj10);
              cResult[3] = expanded;
              cResult[4] = guild;
              cResult[5] = handleToggleExpanded;
              cResult[6] = listing;
              cResult[7] = subscriptionInfo.isCancelled;
              cResult[8] = subscriptionInfo.isPastDue;
              cResult[9] = subscriptionInfo.isTrial;
              cResult[10] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
        return tmp7;
      }
      function handleCancelSubscription() {
        const obj = {
          subscriptionId: subscription.id,
          onClose() {
            return navigation.pop();
          },
        };
        navigation.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, obj);
      }
      cResult[0] = navigation;
      cResult[1] = subscription.id;
      cResult[2] = handleCancelSubscription;
      tmp5 = handleCancelSubscription;
    }
  : function ManageSubscriptionCard(subscription) {
      let closure_1;
      let expanded;
      let groupListing;
      let guild;
      let handleToggleExpanded;
      let id;
      let items;
      let listing;
      let subscriptionInfo;
      subscription = subscription.subscription;
      const tmp = closure_14();
      const tmp2 = useManageSubscriptionCardDataDefault(subscription);
      ({ listing, guild, expanded, subscriptionInfo } = tmp2);
      ({ groupListing, handleToggleExpanded } = tmp2);
      let obj = subscription(1490);
      importDefault = obj.useNavigation();
      let tmp4Result = null;
      if (null != groupListing) {
        tmp4Result = null;
        if (null != listing) {
          tmp4Result = null;
          if (null != subscriptionInfo) {
            const obj2 = { style: tmp.container, children: items };
            const obj4 = {
              expanded,
              guild,
              isCancelled: null,
              isTrial: null,
              isPastDue: null,
              listing,
              onToggleExpanded: handleToggleExpanded,
            };
            ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
            items = [closure_11(closure_16, obj4)];
            if (expanded) {
              const items1 = [closure_11(closure_17, {})];
              const obj5 = {
                guildId: id,
                subscription,
                onCancelSubscription: function handleCancelSubscription() {
                  const obj = {
                    subscriptionId: subscription.id,
                    onClose() {
                      return closure_1_1.pop();
                    },
                  };
                  closure_1.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, obj);
                },
              };
              const merged = Object.assign(subscriptionInfo);
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              const obj9 = { children: items1 };
              items1[1] = closure_11(CardBody, obj5);
              expanded = closure_12(closure_13, obj9);
            }
            items[1] = expanded;
            tmp4Result = closure_12(View, obj2);
          }
        }
      }
      return tmp4Result;
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx",
);

export default tmp5;
