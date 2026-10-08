// === Module 15321: UserSettingsGuildRoleSubscriptionsCancel ===

// Module 15321 (UserSettingsGuildRoleSubscriptionsCancel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import _modDef4659 from "module_4659" /* 4659 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildIconDefault from "GuildIcon" /* 6161 */;
import FastImageDefault from "FastImage" /* 6164 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6654 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15307 */;
import FormSeparatorDefault from "FormSeparator" /* 15312 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 15318 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15322 */;
import _modDef15330 from "module_15330" /* 15330 */;
import FastAssetImageDefault from "FastAssetImage" /* 15331 */;
import GuildRoleSubscriptionCardAll from "GuildRoleSubscriptionCard" /* 15332 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;

require = fn;
function CancelSubscriptionButtonFooter(guild) {
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  dependencyMap = undefined;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  const tmp = closure_13();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp2 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const analyticsLocations = subscription(6841)(subscription(6865).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  const tmp5 = subscription(6841);
  const cancelSubscription1 = subscription(9333).useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription1.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  const obj2 = { style: tmp.footer, children: null };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
            guild = tmp7;
            closure_128_0 = undefined;
            const obj6 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = guild(1126).intl;
            const obj9 = { guildName: guild.name };
            obj6.title = intl2.formatToPlainString(guild(1126).t.sBs7sh, obj9);
            const obj15 = tmp3(5298);
            const _HermesInternal = HermesInternal;
            obj6.body = "You can resubscribe any time before " + tmp3(4659)(subscription.currentPeriodEnd).format(closure_1_12) + ".";
            const intl3 = guild(1126).intl;
            obj6.confirmText = intl3.string(guild(1126).t["3KZjFH"]);
            obj6.confirmColor = guild(1200).ButtonColors.RED;
            c4 = 1;
            c5 = 1;
            const obj10 = { value: obj15.confirm(obj6), done: false };
            return obj10;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else if (value) {
              closure_129_3(true);
              dependencyMap = 1;
              closure_128_0 = false;
              if (closure_129_6) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_129_5(), done: false };
                return obj12;
              } else if (closure_129_1.isPurchasedViaDesktop) {
                c4 = 4;
                c5 = 1;
                const obj13 = { value: tmp63(5720).cancelSubscription(closure_129_1.id, closure_129_4), done: false };
                return obj13;
              } else {
                const _Error = Error;
                const error = new Error("Cancellation not supported for subscription");
                throw error;
              }
            }
          } else {
            if (2 === tmp7) {
              dependencyMap = 0;
              closure_128_1 = tmp63;
              closure_129_3(false);
              guild(4765).presentFailedToast(closure_128_1.message);
              let tmp38 = closure_128_1 instanceof tmp3(4748);
              if (tmp38) {
                tmp38 = closure_128_1.code === guild(4748).ErrorCodes.ALREADY_CANCELED;
              }
              if (tmp38) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              }
              const obj7 = guild(4765);
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_0 = value;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c5 = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  c4 = 5;
                  c5 = 1;
                  const obj16 = { value: tmp63(5720).fetchSubscriptions(), done: false };
                  return obj16;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = true;
              }
              closure_129_3(false);
              if (closure_128_0) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              } else {
                const intl = guild(1126).intl;
                guild(4765).presentFailedToast(intl.string(guild(1126).t.R0RpRX));
                const obj5 = guild(4765);
              }
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            const obj17 = { value, done: true };
            return obj17;
          }
          c5 = 3;
        }
      } catch (tmp63) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp63;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  if (!tmp3) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !cancelSubscription1.nativePaymentsConnected;
    }
  }
  let obj3 = { variant: "destructive", loading: tmp3, text: null, onPress: null };
  let intl = tmp10(1126).intl;
  obj3.text = intl.string(guild(1126).t.cM1H0K);
  obj3.onPress = callback;
  obj2.children = closure_10(guild(5375).Button, obj3);
  return closure_10(closure_7, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = "M/DD/YY";
let createStyles = fn(5090);
let obj2 = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "__packager_asset", aspectRatio: "<string:2353406737>" }, footer: { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 } };
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let obj5 = { container: null, header: null, cactus: null };
let obj3 = { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
obj5.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
obj5.header = { flex: 1, flexDirection: "row" };
obj5.cactus = { width: 99, position: "absolute", right: 16, bottom: 12 };
let closure_14 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function WhatYouLose(arg0) {
  const cResult = c.c(36);
  ({ listingId, guild, subscription } = arg0);
  const tmp4 = closure_14();
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guild.id), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
  const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId), 1)[0];
  const first3 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(listingId), 1)[0];
  if (cResult[0] !== subscription.currentPeriodEnd) {
    const obj6 = _modDef4659(subscription.currentPeriodEnd);
    const intl = util.intl;
    const obj7 = { subscriptionEndDate: _modDef4659(subscription.currentPeriodEnd).format(c12) };
    const formatResult1 = intl.format(util.t.EtAXzC, obj7);
    cResult[0] = subscription.currentPeriodEnd;
    cResult[1] = formatResult1;
    let tmp7 = formatResult1;
    const formatResult = _modDef4659(subscription.currentPeriodEnd).format(c12);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === first1.length) {
    if (cResult[3] === first.size) {
      if (cResult[4] === first2.length) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] !== guild) {
        const obj8 = { guild };
        const tmp17 = collapsed(GuildIconDefault, obj8);
        cResult[6] = guild;
        cResult[7] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = collapsed(native.Spacer, { size: 16 });
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== first3) {
        const obj9 = { variant: "text-md/semibold", color: "interactive-text-active", children: first3 };
        const tmp24 = collapsed(Text_Text.Text, obj9);
        cResult[9] = first3;
        cResult[10] = tmp24;
        let tmp22 = tmp24;
      } else {
        tmp22 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = collapsed(native.Spacer, { size: 2 });
        cResult[11] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] !== guild.name) {
        const obj10 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
        const tmp30 = collapsed(Text_Text.Text, obj10);
        cResult[12] = guild.name;
        cResult[13] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[13];
      }
      if (cResult[14] === tmp22) {
        if (cResult[15] === tmp28) {
          let tmp31 = cResult[16];
        }
        if (cResult[17] === tmp14) {
          if (cResult[18] === tmp31) {
            if (cResult[19] === tmp4.header) {
              let tmp35 = cResult[20];
            }
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const obj11 = { style: { marginVertical: 16 } };
              const tmp42 = collapsed(FormSeparatorDefault, obj11);
              cResult[21] = tmp42;
              let tmp39 = tmp42;
            } else {
              tmp39 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const obj12 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
              const intl3 = util.intl;
              obj12.children = intl3.string(util.t["9SgXmT"]);
              const tmp46 = collapsed(Text_Text.Text, obj12);
              const tmp47 = collapsed(native.Spacer, { size: 12 });
              cResult[22] = tmp46;
              cResult[23] = tmp47;
              let tmp44 = tmp47;
              let tmp43 = tmp46;
            } else {
              tmp43 = cResult[22];
              tmp44 = cResult[23];
            }
            if (cResult[24] !== tmp7) {
              const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
              const items = [tmp7, "\n"];
              obj13.children = items;
              const tmp50 = closure_1_11(Text_Text.Text, obj13);
              cResult[24] = tmp7;
              cResult[25] = tmp50;
              let tmp48 = tmp50;
            } else {
              tmp48 = cResult[25];
            }
            if (cResult[26] !== tmp12) {
              const obj14 = { variant: "text-sm/medium", color: "text-default", children: tmp12 };
              const tmp53 = collapsed(Text_Text.Text, obj14);
              cResult[26] = tmp12;
              cResult[27] = tmp53;
              let tmp51 = tmp53;
            } else {
              tmp51 = cResult[27];
            }
            if (cResult[28] !== tmp4.cactus) {
              const obj15 = { source: _modDef15330, style: tmp4.cactus };
              const tmp58 = collapsed(FastImageDefault, obj15);
              cResult[28] = tmp4.cactus;
              cResult[29] = tmp58;
              let tmp54 = tmp58;
            } else {
              tmp54 = cResult[29];
            }
            if (cResult[30] === tmp48) {
              if (cResult[31] === tmp51) {
                if (cResult[32] === tmp54) {
                  if (cResult[33] === tmp35) {
                    if (cResult[34] === tmp4.container) {
                      let tmp59 = cResult[35];
                    }
                    return tmp59;
                  }
                }
              }
            }
            const obj16 = { style: tmp4.container, children: null };
            const items1 = [tmp35, tmp39, tmp43, tmp44, tmp48, tmp51, tmp54];
            obj16.children = items1;
            const tmp62 = closure_1_11(React5, obj16);
            cResult[30] = tmp48;
            cResult[31] = tmp51;
            cResult[32] = tmp54;
            cResult[33] = tmp35;
            cResult[34] = tmp4.container;
            cResult[35] = tmp62;
            tmp59 = tmp62;
          }
        }
        const obj17 = { style: tmp4.header, children: null };
        const items2 = [tmp14, tmp19, tmp31];
        obj17.children = items2;
        const tmp38 = closure_1_11(React5, obj17);
        cResult[17] = tmp14;
        cResult[18] = tmp31;
        cResult[19] = tmp4.header;
        cResult[20] = tmp38;
        tmp35 = tmp38;
      }
      const obj18 = { children: null };
      const items3 = [tmp22, tmp25, tmp28];
      obj18.children = items3;
      const tmp34 = closure_1_11(React5, obj18);
      cResult[14] = tmp22;
      cResult[15] = tmp28;
      cResult[16] = tmp34;
      tmp31 = tmp34;
    }
  }
  const intl2 = util.intl;
  const formatToPlainStringResult = intl2.formatToPlainString(util.t.OVlNGT, { numEmojis: first.size, numChannels: first1.length, numIntangibles: first2.length });
  cResult[2] = first1.length;
  cResult[3] = first.size;
  cResult[4] = first2.length;
  cResult[5] = formatToPlainStringResult;
  tmp12 = formatToPlainStringResult;
  const obj19 = { numEmojis: first.size, numChannels: first1.length, numIntangibles: first2.length };
}) : (function WhatYouLose(subscription) {
  ({ listingId, guild } = subscription);
  const tmp = closure_14();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj5 = _modDef4659(subscription.subscription.currentPeriodEnd);
  const intl = util.intl;
  const formatResult = _modDef4659(subscription.subscription.currentPeriodEnd).format(c12);
  const intl2 = util.intl;
  const formatResult1 = intl.format(util.t.EtAXzC, { subscriptionEndDate: _modDef4659(subscription.subscription.currentPeriodEnd).format(c12) });
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.header, children: null };
  const obj6 = { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length };
  const items = [collapsed(GuildIconDefault, { guild }), collapsed(native.Spacer, { size: 16 }), ];
  const obj9 = { children: null };
  const items1 = [collapsed(Text_Text.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: _slicedToArray(obj4.useName(listingId), 1)[0] }), collapsed(native.Spacer, { size: 2 }), collapsed(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name })];
  obj9.children = items1;
  items[2] = closure_1_11(React5, obj9);
  obj8.children = items;
  const items2 = [closure_1_11(React5, obj8), collapsed(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
  const intl3 = util.intl;
  obj11.children = intl3.string(util.t["9SgXmT"]);
  items2[2] = collapsed(Text_Text.Text, obj11);
  items2[3] = collapsed(native.Spacer, { size: 12 });
  const obj12 = { variant: "text-sm/normal", color: "text-default", children: null };
  const items3 = [formatResult1, "\n"];
  obj12.children = items3;
  items2[4] = closure_1_11(Text_Text.Text, obj12);
  items2[5] = collapsed(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: intl2.formatToPlainString(util.t.OVlNGT, { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length }) });
  const obj13 = { source: null, style: null };
  const formatToPlainStringResult = intl2.formatToPlainString(util.t.OVlNGT, { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length });
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  obj13.source = _modDef15330;
  obj13.style = tmp.cactus;
  items2[6] = collapsed(FastImageDefault, obj13);
  obj7.children = items2;
  return closure_1_11(React5, obj7);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content(arg0) {
  const cResult = c.c(34);
  ({ subscription, onClose } = arg0);
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("GuildRoleSubscriptionsCancel");
  const tmp5 = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  const tmp7 = useManageSubscriptionCardDataDefault(subscription);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  if (null != listing) {
    if (null != guild) {
      if (cResult[0] === cover_image_asset) {
        if (cResult[1] === tmp5.heroImage) {
          let tmp11 = cResult[2];
        }
        if (cResult[3] === guild) {
          if (cResult[4] === listing.id) {
            if (cResult[5] === subscription) {
              let tmp15 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp22 = collapsed(native.Spacer, { size: 24 });
              cResult[7] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[7];
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { textTransform: "uppercase" };
              cResult[8] = obj4;
              let tmp23 = obj4;
            } else {
              tmp23 = cResult[8];
            }
            if (cResult[9] !== typeConsolidationTextTransform) {
              const items = [tmp23, typeConsolidationTextTransform];
              cResult[9] = typeConsolidationTextTransform;
              cResult[10] = items;
              let tmp24 = items;
            } else {
              tmp24 = cResult[10];
            }
            const _Symbol3 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult = intl.string(util.t.xyvN8p);
              cResult[11] = stringResult;
              let tmp25 = stringResult;
            } else {
              tmp25 = cResult[11];
            }
            if (cResult[12] !== tmp24) {
              const obj5 = { variant: "text-sm/bold", color: "text-default", style: tmp24, children: tmp25 };
              const tmp29 = collapsed(Text_Text.Text, obj5);
              cResult[12] = tmp24;
              cResult[13] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[13];
            }
            const _Symbol4 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp32 = collapsed(native.Spacer, { size: 16 });
              cResult[14] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[14];
            }
            if (cResult[15] === guild.id) {
              if (cResult[16] === listing.id) {
                let tmp33 = cResult[17];
              }
              if (cResult[18] === tmp5.body) {
                if (cResult[19] === tmp33) {
                  if (cResult[20] === tmp15) {
                    if (cResult[21] === tmp27) {
                      let tmp37 = cResult[22];
                    }
                    if (cResult[23] === tmp37) {
                      if (cResult[24] === tmp11) {
                        let tmp41 = cResult[25];
                      }
                      if (cResult[26] === guild) {
                        if (cResult[27] === onClose) {
                          if (cResult[28] === subscription) {
                            let tmp45 = cResult[29];
                          }
                          if (cResult[30] === tmp5.container) {
                            if (cResult[31] === tmp41) {
                              if (cResult[32] === tmp45) {
                                let tmp49 = cResult[33];
                              }
                              return tmp49;
                            }
                          }
                          const obj6 = { style: tmp53, children: null };
                          const items1 = [tmp41, tmp45];
                          obj6.children = items1;
                          const tmp52 = closure_1_11(React5, obj6);
                          cResult[30] = tmp5.container;
                          cResult[31] = tmp41;
                          cResult[32] = tmp45;
                          cResult[33] = tmp52;
                          tmp49 = tmp52;
                        }
                      }
                      const obj7 = { guild, subscription, onClose };
                      const tmp48 = collapsed(CancelSubscriptionButtonFooter, obj7);
                      cResult[26] = guild;
                      cResult[27] = onClose;
                      cResult[28] = subscription;
                      cResult[29] = tmp48;
                      tmp45 = tmp48;
                    }
                    const obj8 = { children: null };
                    const items2 = [tmp11, tmp37];
                    obj8.children = items2;
                    const tmp44 = closure_1_11(closure_1_8, obj8);
                    cResult[23] = tmp37;
                    cResult[24] = tmp11;
                    cResult[25] = tmp44;
                    tmp41 = tmp44;
                  }
                }
              }
              const obj9 = { style: tmp14, children: null };
              const items3 = [tmp15, tmp20, tmp27, tmp30, tmp33];
              obj9.children = items3;
              const tmp40 = closure_1_11(React5, obj9);
              cResult[18] = tmp5.body;
              cResult[19] = tmp33;
              cResult[20] = tmp15;
              cResult[21] = tmp27;
              cResult[22] = tmp40;
              tmp37 = tmp40;
            }
            const obj10 = { listingId: listing.id, guildId: guild.id };
            const tmp36 = collapsed(GuildRoleSubscriptionCardAll.Content, obj10);
            cResult[15] = guild.id;
            cResult[16] = listing.id;
            cResult[17] = tmp36;
            tmp33 = tmp36;
          }
        }
        const obj11 = { guild, listingId: listing.id, subscription };
        const tmp18 = collapsed(closure_15, obj11);
        cResult[3] = guild;
        cResult[4] = listing.id;
        cResult[5] = subscription;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      }
      const obj12 = { style: tmp5.heroImage, asset: cover_image_asset };
      const tmp13 = collapsed(FastAssetImageDefault, obj12);
      cResult[0] = cover_image_asset;
      cResult[1] = tmp5.heroImage;
      cResult[2] = tmp13;
      tmp11 = tmp13;
    }
  }
  return null;
}) : (function Content(subscription) {
  subscription = subscription.subscription;
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("GuildRoleSubscriptionsCancel");
  const tmp4 = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  const tmp6 = useManageSubscriptionCardDataDefault(subscription);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  let tmp10 = null;
  if (null != listing) {
    tmp10 = null;
    if (null != guild) {
      const obj3 = { style: tmp4.container, children: null };
      const obj4 = { children: null };
      const obj5 = { style: tmp4.heroImage, asset: cover_image_asset };
      const items = [collapsed(FastAssetImageDefault, obj5), ];
      const obj6 = { style: tmp4.body, children: null };
      const obj7 = { guild, listingId: listing.id, subscription };
      const items1 = [collapsed(closure_15, obj7), collapsed(native.Spacer, { size: 24 }), , , ];
      const obj8 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
      const items2 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
      obj8.style = items2;
      const intl = util.intl;
      obj8.children = intl.string(util.t.xyvN8p);
      items1[2] = collapsed(Text_Text.Text, obj8);
      items1[3] = collapsed(native.Spacer, { size: 16 });
      const obj9 = { listingId: listing.id, guildId: guild.id };
      items1[4] = collapsed(GuildRoleSubscriptionCardAll.Content, obj9);
      obj6.children = items1;
      items[1] = closure_1_11(React5, obj6);
      obj4.children = items;
      const items3 = [closure_1_11(closure_1_8, obj4), ];
      const obj10 = { guild, subscription, onClose: subscription.onClose };
      items3[1] = collapsed(CancelSubscriptionButtonFooter, obj10);
      obj3.children = items3;
      tmp10 = closure_1_11(React5, obj3);
    }
  }
  return tmp10;
});
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  const cResult = subscriptionId(576).c(6);
  subscriptionId = subscriptionId.subscriptionId;
  const onClose = subscriptionId.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== subscriptionId) {
    const fn = function n() {
      return SubscriptionStore.getSubscriptionById(subscriptionId);
    };
    cResult[1] = subscriptionId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = subscriptionId(576);
  const stateFromStores = subscriptionId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === onClose) {
    }
    const obj2 = { subscription: stateFromStores, onClose };
    const tmp11 = closure_10(closure_17, obj2);
    cResult[3] = onClose;
    cResult[4] = stateFromStores;
    cResult[5] = tmp11;
  }
  const tmpResult = subscriptionId(504);
}) : (function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  const items = [SubscriptionStore];
  const stateFromStores = subscriptionId(504).useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { subscription: stateFromStores, onClose: subscriptionId.onClose };
    tmp2 = closure_10(closure_17, obj2);
  }
  return tmp2;
});