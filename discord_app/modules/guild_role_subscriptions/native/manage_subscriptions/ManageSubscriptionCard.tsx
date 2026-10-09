// === Module 15424: ManageSubscriptionCard ===

// Module 15424 (ManageSubscriptionCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import LinkingDefault from "Linking" /* 4765 */;
import Text_Text from "Text/Text" /* 5087 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import GuildIconDefault from "GuildIcon" /* 6165 */;
import Pressables from "Pressables" /* 6191 */;
import _modDef8538 from "module_8538" /* 8538 */;
import FormSeparatorDefault from "FormSeparator" /* 15425 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 15431 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
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
        return { value: "IconComponent", done: null };
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
              const intl = tmp5(1126).intl;
              obj5.body = intl.string(tmp5(1126).t.NL7DFi);
              const intl2 = tmp5(1126).intl;
              obj5.confirmText = intl2.string(tmp5(1126).t["NX+WJN"]);
              tmp3(5299).show(obj5);
              c5 = 3;
              const obj6 = tmp3(5299);
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
                const obj8 = { value: tmp38(5721).resubscribeToSubscription(tmp45, analyticsLocations), done: false };
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
              closure_1_1(dependencyMap[18]).openLazy({
                importer() {
                  return closure_1_0(paths[20])(paths[19], paths.paths).then((result) => {
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
  let resubscribeSubscription = subscription(9371).useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  let obj = subscription(9371);
  [tmp6, c5] = analyticsLocations.useState(false);
  analyticsLocations = subscription(6848)().analyticsLocations;
  let obj2 = { style: tmp.cardContent, children: null };
  let tmp7Result = null;
  if (isPastDue) {
    const obj3 = { children: null };
    let obj4 = { style: tmp.paymentOverDueWarning, children: null };
    const size = { color: tmp2(587).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const items = [closure_11(isTrial(1200).WarningCircle, size), closure_11(isTrial(1200).Spacer, { size: 8 }), ];
    let obj5 = { variant: "text-sm/medium", color: "interactive-text-active", children: null };
    let intl = isTrial(1126).intl;
    obj5.children = intl.string(isTrial(1126).t.eaqlau);
    items[2] = closure_11(isTrial(5087).Text, obj5);
    obj4.children = items;
    const items1 = [closure_12(tmp8, obj4), closure_11(isTrial(1200).Spacer, { size: 12 })];
    obj3.children = items1;
    tmp7Result = closure_12(closure_13, obj3);
  }
  const items2 = [tmp7Result, , , , ];
  let obj6 = { title: null, icon: null, onPressIcon: null, children: null };
  const tmp5 = _slicedToArray(analyticsLocations.useState(false), 2);
  let intl2 = isTrial(1126).intl;
  obj6.title = intl2.string(isTrial(1126).t.dltUMH);
  let tmp2Result7;
  if (isTrial) {
    tmp2Result7 = tmp2(5016);
  }
  obj6.icon = tmp2Result7;
  let prop;
  if (isTrial) {
    prop = tmp15(4767).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj6.onPressIcon = prop;
  obj6.children = subscriptionPrice;
  items2[1] = closure_11(subscription(15428), obj6);
  items2[2] = closure_11(isTrial(1200).Spacer, { size: 16 });
  let obj7 = { style: tmp.cardRow, children: null };
  const items3 = [closure_11(subscription(15428), { title: nextRenewalLabel, children: nextRenewalDate }), closure_11(isTrial(1200).Spacer, { size: 8 }), ];
  let obj8 = { title: null, children: null };
  const tmp2Result = subscription(15428);
  const intl3 = tmp15(1126).intl;
  obj8.title = intl3.string(isTrial(1126).t.AOcwWB);
  obj8.children = memberSince;
  items3[2] = closure_11(subscription(15428), obj8);
  obj7.children = items3;
  items2[3] = closure_12(closure_7, obj7);
  let obj9 = { inset: true, titleViewStyle: tmp.manageSection, title: null, children: null };
  const intl4 = tmp15(1126).intl;
  obj9.title = intl4.string(isTrial(1126).t["4neDM+"]);
  const obj10 = { style: tmp.buttonsContainer, children: null };
  const obj11 = {
    renderGap() {
      return closure_2_11(View, { style: buttonDivider.buttonDivider });
    },
    children: null
  };
  const obj12 = { text: null, onPress: null };
  const tmp2Result8 = subscription(15428);
  const intl5 = tmp15(1126).intl;
  obj12.text = intl5.string(isTrial(1126).t["7spYft"]);
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
  const items4 = [closure_11(subscription(15429), obj12), , ];
  const obj13 = { text: null, onPress: null };
  const tmp2Result9 = subscription(15429);
  const intl6 = tmp15(1126).intl;
  obj13.text = intl6.string(isTrial(1126).t.FRbWR8);
  obj13.onPress = function handleChangeTier() {
    router_utils.transitionTo(closure_2_8.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = closure_11(subscription(15429), obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer, children: null };
    const obj15 = { text: null, onPress: null, loading: null };
    const intl8 = tmp15(1126).intl;
    obj15.text = intl8.string(tmp15(1126).t.iIvF2z);
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
    obj14.children = closure_11(tmp2(9436), obj15);
    let tmp13Result = closure_11(tmp8, obj14);
    const tmp2Result11 = tmp2(9436);
  } else {
    const obj16 = { text: null, onPress: null };
    const intl7 = tmp15(1126).intl;
    obj16.text = intl7.string(tmp15(1126).t.Dx0lF7);
    obj16.onPress = onCancelSubscription;
    tmp13Result = closure_11(tmp2(15429), obj16);
    const tmp2Result12 = tmp2(15429);
  }
  items4[2] = tmp13Result;
  obj11.children = items4;
  obj10.children = closure_12(isTrial(9531).GappedList, obj11);
  obj9.children = closure_11(closure_7, obj10);
  items2[4] = closure_11(isTrial(8563).FormSection, obj9);
  obj2.children = items2;
  return closure_12(closure_7, obj2);
}
const View = fn(17).View;
const Constants = fn(1085);
({ Routes: closure_8, UserSettingsSections: closure_9 } = Constants);
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderStatus(arg0) {
  const cResult = c.c(12);
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp4 = closure_14();
  if (isCancelled) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t["7uFZGt"]);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    const headerStatusCancel = tmp4.headerStatusCancel;
  } else {
    if (isTrial) {
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["6anton"]);
        cResult[1] = stringResult1;
        let tmp9 = stringResult1;
      } else {
        tmp9 = cResult[1];
      }
      let headerStatusPastDue = tmp4.headerStatusTrial;
      let flag = true;
      let str = tmp9;
    } else {
      str = "";
      flag = true;
      if (isPastDue) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult2 = intl.string(util.t.uENdgb);
          cResult[2] = stringResult2;
          let tmp6 = stringResult2;
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
        if (cResult[4] === tmp4.headerStatusContainer) {
          let tmp15 = cResult[5];
        }
        let str6 = "text-overlay-dark";
        if (flag) {
          str6 = "text-overlay-light";
        }
        if (cResult[6] === str) {
          if (cResult[7] === str6) {
            let tmp16 = cResult[8];
          }
          if (cResult[9] === tmp15) {
            if (cResult[10] === tmp16) {
              let tmp19 = cResult[11];
            }
            return tmp19;
          }
          const obj2 = { style: tmp15, children: tmp16 };
          const tmp22 = closure_1_11(View, obj2);
          cResult[9] = tmp15;
          cResult[10] = tmp16;
          cResult[11] = tmp22;
          tmp19 = tmp22;
        }
        const obj3 = { variant: "text-xs/semibold", color: str6, children: str };
        const tmp18 = closure_1_11(Text_Text.Text, obj3);
        cResult[6] = str;
        cResult[7] = str6;
        cResult[8] = tmp18;
        tmp16 = tmp18;
      }
      const items = [tmp4.headerStatusContainer, headerStatusPastDue];
      cResult[3] = headerStatusPastDue;
      cResult[4] = tmp4.headerStatusContainer;
      cResult[5] = items;
      tmp15 = items;
    }
  }
}) : (function HeaderStatus(arg0) {
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
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(arg0) {
  const cResult = c.c(30);
  ({ expanded, guild, isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === isCancelled) {
    if (cResult[1] === isPastDue) {
      if (cResult[2] === isTrial) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== guild) {
        const obj2 = { guild };
        const tmp10 = closure_1_11(GuildIconDefault, obj2);
        cResult[4] = guild;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] !== listing.name) {
        const obj3 = { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name };
        const tmp13 = closure_1_11(Text_Text.Text, obj3);
        cResult[6] = listing.name;
        cResult[7] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = closure_1_11(native.Spacer, { size: 2 });
        cResult[8] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (cResult[9] !== name) {
        let name1;
        if (guild != null) {
          name1 = guild.name;
        }
        if (name1 == null) {
          const intl = util.intl;
          name1 = intl.string(util.t["He+cmd"]);
        }
        let name2;
        if (guild != null) {
          name2 = guild.name;
        }
        cResult[9] = name2;
        cResult[10] = name1;
        let tmp20 = name1;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] !== tmp20) {
        const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: tmp20 };
        const tmp25 = closure_1_11(Text_Text.Text, obj4);
        cResult[11] = tmp20;
        cResult[12] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[12];
      }
      if (cResult[13] === tmp4.headerTitlesContainer) {
        if (cResult[14] === tmp11) {
          if (cResult[15] === tmp23) {
            let tmp26 = cResult[16];
          }
          if (expanded) {
            expanded = tmp4.expandIconExpanded;
          }
          if (cResult[17] === tmp4.expandIcon) {
            if (cResult[18] === expanded) {
              let tmp30 = cResult[19];
            }
            if (cResult[20] === tmp4.headerContent) {
              if (cResult[21] === tmp7) {
                if (cResult[22] === tmp26) {
                  if (cResult[23] === tmp30) {
                    let tmp34 = cResult[24];
                  }
                  if (cResult[25] === onToggleExpanded) {
                    if (cResult[26] === tmp4.header) {
                      if (cResult[27] === tmp5) {
                        if (cResult[28] === tmp34) {
                          let tmp38 = cResult[29];
                        }
                        return tmp38;
                      }
                    }
                  }
                  const obj5 = { style: tmp4.header, onPress: onToggleExpanded, children: null };
                  const items = [tmp5, tmp34];
                  obj5.children = items;
                  const tmp40 = __initData(Pressables.PressableHighlight, obj5);
                  cResult[25] = onToggleExpanded;
                  cResult[26] = tmp4.header;
                  cResult[27] = tmp5;
                  cResult[28] = tmp34;
                  cResult[29] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
            const obj6 = { style: tmp4.headerContent, children: null };
            const items1 = [tmp7, tmp26, tmp30];
            obj6.children = items1;
            const tmp37 = __initData(View, obj6);
            cResult[20] = tmp4.headerContent;
            cResult[21] = tmp7;
            cResult[22] = tmp26;
            cResult[23] = tmp30;
            cResult[24] = tmp37;
            tmp34 = tmp37;
          }
          const obj7 = { style: null, size: null, source: null };
          const items2 = [tmp4.expandIcon, expanded];
          obj7.style = items2;
          obj7.size = native.Icon.Sizes.MEDIUM;
          obj7.source = _modDef8538;
          const tmp33 = closure_1_11(native.Icon, obj7);
          cResult[17] = tmp4.expandIcon;
          cResult[18] = expanded;
          cResult[19] = tmp33;
          tmp30 = tmp33;
        }
      }
      const obj8 = { style: tmp4.headerTitlesContainer, children: null };
      const items3 = [tmp11, tmp15, tmp23];
      obj8.children = items3;
      const tmp29 = __initData(View, obj8);
      cResult[13] = tmp4.headerTitlesContainer;
      cResult[14] = tmp11;
      cResult[15] = tmp23;
      cResult[16] = tmp29;
      tmp26 = tmp29;
    }
  }
  const tmp6 = closure_1_11(closure_15, { isCancelled, isTrial, isPastDue });
  cResult[0] = isCancelled;
  cResult[1] = isPastDue;
  cResult[2] = isTrial;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : (function Header(arg0) {
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = closure_14();
  const obj = { style: tmp.header, onPress: onToggleExpanded, children: null };
  const items = [closure_1_11(closure_15, { isCancelled, isTrial, isPastDue }), ];
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
  items1[1] = __initData(View, obj3);
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  items1[2] = closure_1_11(native.Icon, { style: items3, size: native.Icon.Sizes.MEDIUM, source: _modDef8538 });
  obj2.children = items1;
  items[1] = __initData(View, obj2);
  obj.children = items;
  return __initData(Pressables.PressableHighlight, obj);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  const cResult = c.c(2);
  const tmp3 = closure_14();
  if (cResult[0] !== tmp3.separator) {
    const obj2 = { style: tmp3.separator, withoutMargins: true };
    const tmp7 = closure_1_11(FormSeparatorDefault, obj2);
    cResult[0] = tmp3.separator;
    cResult[1] = tmp7;
    let tmp4 = tmp7;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function Separator() {
  const tmp = closure_14();
  return closure_1_11(FormSeparatorDefault, { style: closure_14().separator, withoutMargins: true });
});
ReactCompilerGating = fn(558);
let obj11 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ManageSubscriptionCard(subscription) {
  const cResult = subscription(576).c(21);
  subscription = subscription.subscription;
  let container = closure_14();
  const obj = subscription(576);
  ({ listing, guild, expanded, handleToggleExpanded, subscriptionInfo, groupListing } = navigation(15431)(subscription));
  const tmp2 = navigation(15431)(subscription);
  navigation = subscription(1503).useNavigation();
  if (cResult[0] === navigation) {
    if (cResult[1] === subscription.id) {
      let tmp4 = cResult[2];
    }
    let tmp6 = null;
    if (null != groupListing) {
      tmp6 = null;
      if (null != listing) {
        tmp6 = null;
        if (null != subscriptionInfo) {
          if (cResult[3] === expanded) {
            if (cResult[4] === guild) {
              if (cResult[5] === handleToggleExpanded) {
                if (cResult[6] === listing) {
                  if (cResult[7] === subscriptionInfo.isCancelled) {
                    if (cResult[8] === subscriptionInfo.isPastDue) {
                      if (cResult[9] === subscriptionInfo.isTrial) {
                        let tmp7 = cResult[10];
                      }
                      if (cResult[11] === expanded) {
                        let id;
                        if (guild != null) {
                          id = guild.id;
                        }
                        if (cResult[12] === id) {
                          if (cResult[13] === tmp4) {
                            if (cResult[14] === subscription) {
                              if (cResult[15] === subscriptionInfo) {
                                let tmp12 = cResult[16];
                              }
                              if (cResult[17] === container.container) {
                                if (cResult[18] === tmp7) {
                                }
                              }
                              const obj4 = { style: container.container, children: null };
                              const items = [tmp7, tmp12];
                              obj4.children = items;
                              const tmp27 = closure_12(View, obj4);
                              container = container.container;
                              cResult[17] = container;
                              cResult[18] = tmp7;
                              cResult[19] = tmp12;
                              cResult[20] = tmp27;
                            }
                          }
                        }
                      }
                      let tmp14Result = expanded;
                      if (expanded) {
                        const items1 = [closure_11(closure_17, {}), ];
                        const obj5 = {};
                        const merged = Object.assign(subscriptionInfo);
                        let id1;
                        if (guild != null) {
                          id1 = guild.id;
                        }
                        const obj6 = { children: null };
                        obj5.guildId = id1;
                        obj5.subscription = subscription;
                        obj5.onCancelSubscription = tmp4;
                        items1[1] = closure_11(CardBody, obj5);
                        obj6.children = items1;
                        tmp14Result = closure_12(closure_13, obj6);
                      }
                      cResult[11] = expanded;
                      let id2;
                      if (guild != null) {
                        id2 = guild.id;
                      }
                      cResult[12] = id2;
                      cResult[13] = tmp4;
                      cResult[14] = subscription;
                      cResult[15] = subscriptionInfo;
                      cResult[16] = tmp14Result;
                      tmp12 = tmp14Result;
                    }
                  }
                }
              }
            }
          }
          const obj10 = { expanded, guild, isCancelled: null, isTrial: null, isPastDue: null, listing: null, onToggleExpanded: null };
          ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
          obj10.listing = listing;
          obj10.onToggleExpanded = handleToggleExpanded;
          const tmp10 = closure_11(closure_16, obj10);
          cResult[3] = expanded;
          cResult[4] = guild;
          cResult[5] = handleToggleExpanded;
          cResult[6] = listing;
          cResult[7] = subscriptionInfo.isCancelled;
          cResult[8] = subscriptionInfo.isPastDue;
          cResult[9] = subscriptionInfo.isTrial;
          cResult[10] = tmp10;
          tmp7 = tmp10;
        }
      }
    }
    return tmp6;
  }
  function handleCancelSubscription() {
    navigation.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, {
      subscriptionId: subscription.id,
      onClose() {
        return navigation.pop();
      }
    });
  }
  cResult[0] = navigation;
  cResult[1] = subscription.id;
  cResult[2] = handleCancelSubscription;
  tmp4 = handleCancelSubscription;
  const obj2 = subscription(1503);
}) : (function ManageSubscriptionCard(subscription) {
  subscription = subscription.subscription;
  const tmp2 = useManageSubscriptionCardDataDefault(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  const tmp = closure_14();
  importDefault = subscription(1503).useNavigation();
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
        const items = [closure_11(closure_16, obj4), ];
        if (expanded) {
          const items1 = [closure_11(closure_17, {}), ];
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
});