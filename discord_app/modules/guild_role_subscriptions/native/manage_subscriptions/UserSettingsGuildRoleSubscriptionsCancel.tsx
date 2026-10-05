// === Module 15044: UserSettingsGuildRoleSubscriptionsCancel ===

// Module 15044 (UserSettingsGuildRoleSubscriptionsCancel)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import _modDef4461 from "module_4461" /* 4461 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildIconDefault from "GuildIcon" /* 5971 */;
import FastImageDefault from "FastImage" /* 5974 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6469 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15030 */;
import FormSeparatorDefault from "FormSeparator" /* 15035 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 15041 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15045 */;
import AssetRegistryDefault from "AssetRegistry" /* 15053 */;
import FastAssetImageDefault from "FastAssetImage" /* 15054 */;
import GuildRoleSubscriptionCardAll from "GuildRoleSubscriptionCard" /* 15055 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _undefined, c4, c5, dependencyMap, subscriptionId;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj4;
let unpackModuleId;
function CancelSubscriptionButtonFooter(guild) {
  let Button;
  let c3;
  let intl;
  let obj3;
  let tmp3;
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  dependencyMap = undefined;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  const tmp = closure_13();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp4 = dependencyMap;
  cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp5 = subscription(6657);
  const analyticsLocations = tmp5(subscription(6681).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(8871);
  const cancelSubscription1 = obj.useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription1.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  const nativePaymentsConnected = cancelSubscription1.nativePaymentsConnected;
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  let obj2 = { style: tmp.footer, children: closure_10(Button, obj3) };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(function*() {
    let c3;
    let closure_0;
    let closure_1;
    let closure_2;
    let intl2;
    let intl3;
    let obj16;
    let obj2;
    let obj7;
    let obj8;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let c0;
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
            guild = tmp4;
            c0 = undefined;
            const obj5 = { title: intl2.formatToPlainString(guild(_undefined[12]).t.sBs7sh, obj8), body: "You can resubscribe any time before " + obj16.format(closure_1_12) + ".", confirmText: intl3.string(guild(_undefined[12]).t["3KZjFH"]), confirmColor: guild(_undefined[14]).ButtonColors.RED };
            const _confirm = tmp59(_undefined[22]).confirm;
            const tmp71 = tmp59(_undefined[22]);
            intl2 = guild(_undefined[12]).intl;
            obj8 = { guildName: guild.name };
            const _HermesInternal = HermesInternal;
            obj16 = tmp59(_undefined[11])(subscription.currentPeriodEnd);
            intl3 = guild(_undefined[12]).intl;
            c4 = 1;
            c5 = 1;
            const obj9 = { value: _confirm(obj5), done: false };
            return obj9;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (value) {
              closure_129_3(true);
              _undefined = 1;
              c0 = false;
              if (closure_129_6) {
                c4 = 3;
                c5 = 1;
                const obj11 = { value: closure_129_5(), done: false };
                return obj11;
              } else if (closure_129_1.isPurchasedViaDesktop) {
                c4 = 4;
                c5 = 1;
                const obj12 = { value: obj7.cancelSubscription(closure_129_1.id, closure_129_4), done: false };
                obj7 = tmp59(_undefined[23]);
                return obj12;
              } else {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Cancellation not supported for subscription");
                throw error;
              }
            }
          } else if (2 === c4) {
            _undefined = 0;
            closure_129_3(false);
            const obj6 = guild(_undefined[24]);
            obj6.presentFailedToast(tmp59.message);
            const tmp36 = tmp59 instanceof tmp59(_undefined[25]) && tmp59.code === guild(_undefined[25]).ErrorCodes.ALREADY_CANCELED;
            if (tmp36) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
            }
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                _undefined = 0;
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                c0 = value;
              }
            } else if (4 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                _undefined = 0;
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                c4 = 5;
                c5 = 1;
                const obj15 = { value: obj2.fetchSubscriptions(), done: false };
                obj2 = tmp59(_undefined[23]);
                return obj15;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              _undefined = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c0 = true;
            }
            closure_129_3(false);
            if (c0) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
            } else {
              const presentFailedToast = guild(_undefined[24]).presentFailedToast;
              const tmp16 = guild(_undefined[24]);
              const intl = guild(_undefined[12]).intl;
              presentFailedToast(intl.string(guild(_undefined[12]).t.R0RpRX));
            }
            _undefined = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp59) {
        if (0 === _undefined) {
          c5 = 3;
          throw tmp59;
        } else {
          c4 = 2;
        }
      }
    }
  }), items);
  Button = guild(5594).Button;
  if (!tmp3) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !nativePaymentsConnected;
    }
    tmp3 = isPurchasedViaAppleGeneric;
  }
  obj3 = { variant: "destructive", loading: tmp3, text: intl.string(guild(1126).t.cM1H0K), onPress: callback };
  intl = tmp10(1126).intl;
  return closure_10(closure_7, obj2);
}
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = "M/DD/YY";
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "filter", aspectRatio: "<string:2353406737>" }, footer: obj2 };
obj2 = { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
let closure_13 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { container: obj4, header: { flex: 1, flexDirection: "row" }, cactus: { width: 99, position: "absolute", right: 16, bottom: 12 } };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
let closure_14 = createStyles.createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let listingId;
  let subscription;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(36);
  ({ listingId, guild, subscription } = arg0);
  const tmp4 = closure_14();
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useTierEmojiIds(listingId, guild.id), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useChannelBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useIntangibleBenefits(listingId), 1)[0];
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj5.useName(listingId), 1)[0];
  if (cResult[0] !== subscription.currentPeriodEnd) {
    const obj6 = _modDef4461(subscription.currentPeriodEnd);
    const formatResult = obj6.format(c12);
    const intl = intl4.intl;
    const obj7 = { subscriptionEndDate: formatResult };
    const formatResult1 = intl.format(intl4.t.EtAXzC, obj7);
    cResult[0] = subscription.currentPeriodEnd;
    cResult[1] = formatResult1;
    tmp7 = formatResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === first1.length) {
    if (cResult[3] === first.size) {
      let tmp12;
      let tmp14;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp28;
      if (cResult[4] === first2.length) {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== guild) {
        const obj8 = { guild };
        const tmp17 = authStore(GuildIconDefault, obj8);
        cResult[6] = guild;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = authStore(native.Spacer, { size: 16 });
        cResult[8] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== first3) {
        const obj9 = { variant: "text-md/semibold", color: "interactive-text-active", children: first3 };
        const tmp24 = authStore(Text_Text.Text, obj9);
        cResult[9] = first3;
        cResult[10] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = authStore(native.Spacer, { size: 2 });
        cResult[11] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] !== guild.name) {
        const obj10 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
        const tmp30 = authStore(Text_Text.Text, obj10);
        cResult[12] = guild.name;
        cResult[13] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[13];
      }
      if (cResult[14] === tmp22) {
        let tmp31;
        if (cResult[15] === tmp28) {
          tmp31 = cResult[16];
        }
        if (cResult[17] === tmp14) {
          if (cResult[18] === tmp31) {
            let tmp35;
            let tmp39;
            let tmp44;
            let tmp43;
            let tmp48;
            let tmp51;
            let tmp54;
            if (cResult[19] === tmp4.header) {
              tmp35 = cResult[20];
            }
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const obj11 = { style: { marginVertical: 16 } };
              const tmp42 = authStore(FormSeparatorDefault, obj11);
              cResult[21] = tmp42;
              tmp39 = tmp42;
            } else {
              tmp39 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj12 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl3.string(intl4.t["9SgXmT"]) };
              const Text = Text_Text.Text;
              intl3 = intl4.intl;
              const tmp46 = authStore(Text, obj12);
              const tmp47 = authStore(native.Spacer, { size: 12 });
              cResult[22] = tmp46;
              cResult[23] = tmp47;
              tmp44 = tmp47;
              tmp43 = tmp46;
            } else {
              tmp43 = cResult[22];
              tmp44 = cResult[23];
            }
            if (cResult[24] !== tmp7) {
              const obj13 = { variant: "text-sm/normal", color: "text-default", children: items };
              items = [tmp7, "\n"];
              const tmp50 = unpackModuleId(Text_Text.Text, obj13);
              cResult[24] = tmp7;
              cResult[25] = tmp50;
              tmp48 = tmp50;
            } else {
              tmp48 = cResult[25];
            }
            if (cResult[26] !== tmp12) {
              const obj14 = { variant: "text-sm/medium", color: "text-default", children: tmp12 };
              const tmp53 = authStore(Text_Text.Text, obj14);
              cResult[26] = tmp12;
              cResult[27] = tmp53;
              tmp51 = tmp53;
            } else {
              tmp51 = cResult[27];
            }
            if (cResult[28] !== tmp4.cactus) {
              const obj15 = { source: AssetRegistryDefault, style: tmp4.cactus };
              const tmp57 = FastImageDefault;
              const tmp58 = authStore(tmp57, obj15);
              cResult[28] = tmp4.cactus;
              cResult[29] = tmp58;
              tmp54 = tmp58;
            } else {
              tmp54 = cResult[29];
            }
            if (cResult[30] === tmp48) {
              if (cResult[31] === tmp51) {
                if (cResult[32] === tmp54) {
                  if (cResult[33] === tmp35) {
                    let tmp59;
                    if (cResult[34] === tmp4.container) {
                      tmp59 = cResult[35];
                    }
                    return tmp59;
                  }
                }
              }
            }
            const obj16 = { style: tmp4.container, children: items1 };
            items1 = [tmp35, tmp39, tmp43, tmp44, tmp48, tmp51, tmp54];
            const tmp62 = unpackModuleId(metroImportDefault, obj16);
            cResult[30] = tmp48;
            cResult[31] = tmp51;
            cResult[32] = tmp54;
            cResult[33] = tmp35;
            cResult[34] = tmp4.container;
            cResult[35] = tmp62;
            tmp59 = tmp62;
          }
        }
        const obj17 = { style: tmp4.header, children: items2 };
        items2 = [tmp14, tmp19, tmp31];
        const tmp38 = unpackModuleId(metroImportDefault, obj17);
        cResult[17] = tmp14;
        cResult[18] = tmp31;
        cResult[19] = tmp4.header;
        cResult[20] = tmp38;
        tmp35 = tmp38;
      }
      const obj18 = { children: items3 };
      items3 = [tmp22, tmp25, tmp28];
      const tmp34 = unpackModuleId(metroImportDefault, obj18);
      cResult[14] = tmp22;
      cResult[15] = tmp28;
      cResult[16] = tmp34;
      tmp31 = tmp34;
    }
  }
  const intl2 = intl4.intl;
  const obj19 = { numEmojis: first.size, numChannels: first1.length, numIntangibles: first2.length };
  const formatToPlainStringResult = intl2.formatToPlainString(intl4.t.OVlNGT, obj19);
  cResult[2] = first1.length;
  cResult[3] = first.size;
  cResult[4] = first2.length;
  cResult[5] = formatToPlainStringResult;
  tmp12 = formatToPlainStringResult;
}) : ((subscription) => {
  let guild;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let listingId;
  ({ listingId, guild } = subscription);
  subscription = subscription.subscription;
  const tmp = closure_14();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj4.useName(listingId), 1)[0];
  const obj5 = _modDef4461(subscription.currentPeriodEnd);
  const formatResult = obj5.format(c12);
  const intl = intl4.intl;
  const formatResult1 = intl.format(intl4.t.EtAXzC, { subscriptionEndDate: formatResult });
  const intl2 = intl4.intl;
  const obj8 = { style: tmp.header, children: items };
  items = [, , ];
  const obj6 = { numEmojis: first.size, numChannels: first1.length, numIntangibles: first2.length };
  const obj7 = { style: tmp.container, children: items2 };
  const formatToPlainStringResult = intl2.formatToPlainString(intl4.t.OVlNGT, obj6);
  items[0] = authStore(GuildIconDefault, { guild });
  items[1] = authStore(native.Spacer, { size: 16 });
  const obj9 = { children: items1 };
  items1 = [authStore(Text_Text.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: first3 }), authStore(native.Spacer, { size: 2 }), ];
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = authStore(Text_Text.Text, obj10);
  items[2] = unpackModuleId(metroImportDefault, obj9);
  items2 = [unpackModuleId(metroImportDefault, obj8), authStore(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl3.string(intl4.t["9SgXmT"]) };
  const Text = Text_Text.Text;
  intl3 = intl4.intl;
  items2[2] = authStore(Text, obj11);
  items2[3] = authStore(native.Spacer, { size: 12 });
  const obj12 = { variant: "text-sm/normal", color: "text-default", children: items3 };
  items3 = [formatResult1, "\n"];
  items2[4] = unpackModuleId(Text_Text.Text, obj12);
  items2[5] = authStore(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult });
  const obj13 = { source: AssetRegistryDefault, style: tmp.cactus };
  const tmp7 = FastImageDefault;
  items2[6] = authStore(tmp7, obj13);
  return unpackModuleId(metroImportDefault, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let items1;
  let items2;
  let items3;
  let listing;
  let onClose;
  let subscription;
  const obj = react2;
  const cResult = obj.c(34);
  ({ subscription, onClose } = arg0);
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("GuildRoleSubscriptionsCancel");
  const tmp5 = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  useManageSubscriptionCardDataDefault(subscription);
  let id;
  const useSubscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings;
  GuildRoleSubscriptionsHooks;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  if (null != listing) {
    if (null != guild) {
      if (cResult[0] === cover_image_asset) {
        let tmp12;
        if (cResult[1] === tmp5.heroImage) {
          tmp12 = cResult[2];
        }
        if (cResult[3] === guild) {
          if (cResult[4] === listing.id) {
            let tmp16;
            let tmp21;
            let tmp24;
            let tmp25;
            let tmp26;
            let tmp28;
            let tmp31;
            if (cResult[5] === subscription) {
              tmp16 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp23 = authStore(native.Spacer, { size: 24 });
              cResult[7] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[7];
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { textTransform: "uppercase" };
              cResult[8] = obj3;
              tmp24 = obj3;
            } else {
              tmp24 = cResult[8];
            }
            if (cResult[9] !== typeConsolidationTextTransform) {
              const items = [tmp24, typeConsolidationTextTransform];
              cResult[9] = typeConsolidationTextTransform;
              cResult[10] = items;
              tmp25 = items;
            } else {
              tmp25 = cResult[10];
            }
            const _Symbol3 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl4.intl;
              const stringResult = intl.string(intl4.t.xyvN8p);
              cResult[11] = stringResult;
              tmp26 = stringResult;
            } else {
              tmp26 = cResult[11];
            }
            if (cResult[12] !== tmp25) {
              const obj4 = { variant: "text-sm/bold", color: "text-default", style: tmp25, children: tmp26 };
              const tmp30 = authStore(Text_Text.Text, obj4);
              cResult[12] = tmp25;
              cResult[13] = tmp30;
              tmp28 = tmp30;
            } else {
              tmp28 = cResult[13];
            }
            const _Symbol4 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = authStore(native.Spacer, { size: 16 });
              cResult[14] = tmp33;
              tmp31 = tmp33;
            } else {
              tmp31 = cResult[14];
            }
            if (cResult[15] === guild.id) {
              let tmp34;
              if (cResult[16] === listing.id) {
                tmp34 = cResult[17];
              }
              if (cResult[18] === tmp5.body) {
                if (cResult[19] === tmp34) {
                  if (cResult[20] === tmp16) {
                    let tmp38;
                    if (cResult[21] === tmp28) {
                      tmp38 = cResult[22];
                    }
                    if (cResult[23] === tmp38) {
                      let tmp42;
                      if (cResult[24] === tmp12) {
                        tmp42 = cResult[25];
                      }
                      if (cResult[26] === guild) {
                        if (cResult[27] === onClose) {
                          let tmp46;
                          if (cResult[28] === subscription) {
                            tmp46 = cResult[29];
                          }
                          if (cResult[30] === tmp5.container) {
                            if (cResult[31] === tmp42) {
                              let tmp50;
                              if (cResult[32] === tmp46) {
                                tmp50 = cResult[33];
                              }
                              return tmp50;
                            }
                          }
                          const obj5 = { style: tmp54, children: items1 };
                          items1 = [tmp42, tmp46];
                          const tmp53 = unpackModuleId(metroImportDefault, obj5);
                          cResult[30] = tmp5.container;
                          cResult[31] = tmp42;
                          cResult[32] = tmp46;
                          cResult[33] = tmp53;
                          tmp50 = tmp53;
                        }
                      }
                      const obj6 = { guild, subscription, onClose };
                      const tmp49 = authStore(CancelSubscriptionButtonFooter, obj6);
                      cResult[26] = guild;
                      cResult[27] = onClose;
                      cResult[28] = subscription;
                      cResult[29] = tmp49;
                      tmp46 = tmp49;
                    }
                    const obj7 = { children: items2 };
                    items2 = [tmp12, tmp38];
                    const tmp45 = unpackModuleId(metroImportAll, obj7);
                    cResult[23] = tmp38;
                    cResult[24] = tmp12;
                    cResult[25] = tmp45;
                    tmp42 = tmp45;
                  }
                }
              }
              const obj8 = { style: tmp15, children: items3 };
              items3 = [tmp16, tmp21, tmp28, tmp31, tmp34];
              const tmp41 = unpackModuleId(metroImportDefault, obj8);
              cResult[18] = tmp5.body;
              cResult[19] = tmp34;
              cResult[20] = tmp16;
              cResult[21] = tmp28;
              cResult[22] = tmp41;
              tmp38 = tmp41;
            }
            const obj9 = { listingId: listing.id, guildId: guild.id };
            const tmp37 = authStore(GuildRoleSubscriptionCardAll.Content, obj9);
            cResult[15] = guild.id;
            cResult[16] = listing.id;
            cResult[17] = tmp37;
            tmp34 = tmp37;
          }
        }
        const obj10 = { guild, listingId: listing.id, subscription };
        const tmp19 = authStore(closure_15, obj10);
        cResult[3] = guild;
        cResult[4] = listing.id;
        cResult[5] = subscription;
        cResult[6] = tmp19;
        tmp16 = tmp19;
      }
      const obj11 = { style: tmp5.heroImage, asset: cover_image_asset };
      const tmp14 = authStore(FastAssetImageDefault, obj11);
      cResult[0] = cover_image_asset;
      cResult[1] = tmp5.heroImage;
      cResult[2] = tmp14;
      tmp12 = tmp14;
    }
  }
  return null;
}) : ((subscription) => {
  let guild;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let listing;
  subscription = subscription.subscription;
  const onClose = subscription.onClose;
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("GuildRoleSubscriptionsCancel");
  const tmp4 = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  useManageSubscriptionCardDataDefault(subscription);
  let id;
  const useSubscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings;
  GuildRoleSubscriptionsHooks;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  let tmp11 = null;
  if (null != listing) {
    tmp11 = null;
    if (null != guild) {
      const obj2 = { style: tmp4.container, children: items3 };
      const obj3 = { children: items };
      const obj4 = { style: tmp4.heroImage, asset: cover_image_asset };
      items = [authStore(FastAssetImageDefault, obj4), ];
      const obj5 = { style: tmp4.body, children: items1 };
      const obj6 = { guild, listingId: listing.id, subscription };
      items1 = [authStore(closure_15, obj6), authStore(native.Spacer, { size: 24 }), , , ];
      const obj7 = { variant: "text-sm/bold", color: "text-default", style: items2, children: intl.string(intl4.t.xyvN8p) };
      items2 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items1[2] = authStore(Text, obj7);
      items1[3] = authStore(native.Spacer, { size: 16 });
      const obj8 = { listingId: listing.id, guildId: guild.id };
      items1[4] = authStore(GuildRoleSubscriptionCardAll.Content, obj8);
      items[1] = unpackModuleId(metroImportDefault, obj5);
      items3 = [unpackModuleId(metroImportAll, obj3), ];
      const obj9 = { guild, subscription, onClose };
      items3[1] = authStore(CancelSubscriptionButtonFooter, obj9);
      tmp11 = unpackModuleId(metroImportDefault, obj2);
    }
  }
  return tmp11;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((subscriptionId) => {
  let first;
  let tmp6;
  const obj = subscriptionId(576);
  const cResult = obj.c(6);
  const tmp = subscriptionId;
  subscriptionId = subscriptionId.subscriptionId;
  const onClose = subscriptionId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== subscriptionId) {
    const fn = function n() {
      return SubscriptionStore.getSubscriptionById(subscriptionId);
    };
    cResult[1] = subscriptionId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === onClose) {
      let tmp9;
      if (cResult[4] === stateFromStores) {
        tmp9 = cResult[5];
      }
      tmp8 = tmp9;
    }
    const obj2 = { subscription: stateFromStores, onClose };
    const tmp12 = closure_10(closure_17, obj2);
    cResult[3] = onClose;
    cResult[4] = stateFromStores;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : ((subscriptionId) => {
  subscriptionId = subscriptionId.subscriptionId;
  const onClose = subscriptionId.onClose;
  const items = [SubscriptionStore];
  const obj = subscriptionId(504);
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { subscription: stateFromStores, onClose };
    tmp2 = closure_10(closure_17, obj2);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default tmp4;