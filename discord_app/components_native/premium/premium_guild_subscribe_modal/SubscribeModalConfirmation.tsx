// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef4807 from "../../../../_runtime/metro/04807__.js";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef13415 from "../../../../_runtime/metro/13415__.js";
import PremiumGuildPreviewDefault from "PremiumGuildPreview.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppliedGuildBoostStore from "../../../stores/AppliedGuildBoostStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildBoostSlotStore from "../../../stores/billing/GuildBoostSlotStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

const require = globalThis.__r;

const initialize = SFpsCH(504);
const util = SFpsCH(1126);
const Text_Text = SFpsCH(4886);
require = fn;
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  View: closure_7,
  ScrollView: closure_8,
  StyleSheet,
} = get_ActivityIndicator);
const Constants = fn(1085);
({
  AnalyticEvents: map1,
  AnalyticsObjects: closure_14,
  AnalyticsSections: closure_15,
  GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16,
} = Constants);
const Gradients = fn(6938).Gradients;
const BoostPurchaseIntent = fn(4768).BoostPurchaseIntent;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  content: { paddingHorizontal: 24, marginBottom: 24 },
  scrollableContent: { alignItems: "center", width: "100%" },
  subscribeImage: { marginTop: 105, alignSelf: "center" },
  transferImage: { marginTop: 65, alignSelf: "center" },
  header: { marginTop: 32, marginBottom: 8 },
  transferPreviews: { marginTop: 16, width: "100%" },
  previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 },
  guildPreview: { marginTop: 8, width: "100%" },
  blurb: { lineHeight: 18, textAlign: "center" },
  warning: { marginTop: 16 },
  pendingCancellation: null,
  pendingCancellationMessage: null,
  pendingCancellationIcon: null,
  loading: null,
  confirmButton: null,
  activeTransferGuildCardBorder: null,
};
let obj3 = {
  marginTop: 16,
  padding: 16,
  backgroundColor: null,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: null,
  borderColor: null,
  borderWidth: null,
  width: "100%",
};
const ColorUtils = fn(4727);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1);
obj3.borderRadius = nativeDefault.radii.xs;
obj3.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
obj3.borderWidth = StyleSheet.hairlineWidth;
obj2.pendingCancellation = obj3;
obj2.pendingCancellationMessage = { marginLeft: 10, flexShrink: 1 };
obj2.pendingCancellationIcon = { flexShrink: 0, width: 20, height: 20 };
obj2.loading = { marginTop: 32 };
obj2.confirmButton = { marginTop: 32, width: "100%" };
obj2.activeTransferGuildCardBorder = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_22 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (slots) => {
      let SFpsCH = require;
      let obj = dependencyMap;
      const cResult = c.c(26);
      slots = slots.slots;
      const tmp2 = closure_22();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        const fn = function l() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === slots) {
          if (cResult[4] === tmp2) {
            let tmp7 = cResult[5];
            let tmp8 = cResult[6];
            let tmp9 = cResult[7];
            let tmp10 = cResult[8];
            let tmp11 = cResult[9];
            let tmp12 = cResult[10];
            let tmp13 = cResult[11];
            let tmp14 = cResult[12];
          }
          const _Symbol = Symbol;
          if (tmp14 !== Symbol.for("react.early_return_sentinel")) {
            return tmp14;
          } else {
            if (cResult[16] === tmp7) {
              if (cResult[17] === tmp9) {
                if (cResult[18] === tmp10) {
                  if (cResult[19] === tmp11) {
                    let tmp34 = cResult[20];
                  }
                  if (cResult[21] === tmp8) {
                    if (cResult[22] === tmp12) {
                      if (cResult[23] === tmp13) {
                      }
                    }
                  }
                  const obj3 = { style: tmp12, children: null };
                  const items1 = [tmp13, tmp34];
                  obj3.children = items1;
                  const tmp39 = closure_1_20(tmp8, obj3);
                  cResult[21] = tmp8;
                  cResult[22] = tmp12;
                  cResult[23] = tmp13;
                  cResult[24] = tmp34;
                  cResult[25] = tmp39;
                }
              }
            }
            const obj4 = { style: tmp9, variant: tmp10, children: tmp11 };
            const tmp36 = closure_1_19(tmp7, obj4);
            cResult[16] = tmp7;
            cResult[17] = tmp9;
            cResult[18] = tmp10;
            cResult[19] = tmp11;
            cResult[20] = tmp36;
            tmp34 = tmp36;
          }
        }
      }
      const SFpsCHResult = initialize;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[17]);
            return obj.isGuildBoostSlotCanceled(slots);
          }
        }
        cResult[13] = B;
      } else {
        class B {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[17]);
            return obj.isGuildBoostSlotCanceled(slots);
          }
        }
      }
      let found = slots.filter(B);
      if (0 !== found.length) {
        class B {
          constructor(arg0) {
            obj = closure_1_0(closure_1_2[17]);
            return obj.isGuildBoostSlotCanceled(slots);
          }
        }
        if (null != stateFromStores) {
          class B {
            constructor(arg0) {
              obj = closure_1_0(closure_1_2[17]);
              return obj.isGuildBoostSlotCanceled(slots);
            }
          }
          if (cResult[14] !== tmp2.pendingCancellationIcon) {
            class B {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[17]);
                return obj.isGuildBoostSlotCanceled(slots);
              }
            }
            const obj5 = { style: tmp2.pendingCancellationIcon, source: _modDef4807 };
            const tmp29 = closure_1_19(timestampProducer, obj5);
            cResult[14] = tmp2.pendingCancellationIcon;
            cResult[15] = tmp29;
          } else {
            class B {
              constructor(arg0) {
                obj = closure_1_0(closure_1_2[17]);
                return obj.isGuildBoostSlotCanceled(slots);
              }
            }
          }
          const Text = Text_Text.Text;
          const pendingCancellationMessage = tmp2.pendingCancellationMessage;
          const intl = util.intl;
          SFpsCH = util.t.SFpsCH;
          obj = { date: stateFromStores.currentPeriodEnd, canceledCount: null };
          found = found.length;
          obj.canceledCount = found;
          intl.format(SFpsCH, obj);
          const pendingCancellation = tmp2.pendingCancellation;
        }
      }
      cResult[2] = stateFromStores;
      cResult[3] = slots;
      cResult[4] = tmp2;
      cResult[5] = undefined;
      cResult[6] = undefined;
      cResult[7] = undefined;
      cResult[8] = undefined;
      cResult[9] = undefined;
      cResult[10] = undefined;
      cResult[11] = undefined;
      cResult[12] = null;
      tmp14 = tmp17;
      tmp13 = tmp18;
      tmp12 = tmp19;
      tmp11 = tmp20;
      tmp10 = tmp21;
      tmp9 = tmp22;
      tmp8 = tmp23;
      tmp7 = tmp24;
      const forResult = Symbol.for("react.early_return_sentinel");
    }
  : (slots) => {
      slots = slots.slots;
      const tmp = closure_22();
      const items = [SubscriptionStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      const found = slots.filter((item) => require("GuildBoostingUtils").isGuildBoostSlotCanceled(item));
      let tmp5 = null;
      if (0 !== found.length) {
        tmp5 = null;
        if (null != stateFromStores) {
          const obj2 = { style: tmp.pendingCancellation, children: null };
          const obj3 = { style: tmp.pendingCancellationIcon, source: _modDef4807 };
          const items1 = [closure_1_19(timestampProducer, obj3)];
          const obj4 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: null };
          const intl = util.intl;
          const obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
          obj4.children = intl.format(util.t.SFpsCH, obj5);
          items1[1] = closure_1_19(Text_Text.Text, obj4);
          obj2.children = items1;
          tmp5 = closure_1_20(React5, obj2);
        }
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(36);
      ({ guild, isModifyingSubscription, slots, onPremiumGuildSubscribe } = arg0);
      const tmp4 = closure_22();
      if (cResult[0] !== tmp4.subscribeImage) {
        const obj2 = { style: tmp4.subscribeImage, source: _modDef13415 };
        const tmp9 = closure_1_19(timestampProducer, obj2);
        cResult[0] = tmp4.subscribeImage;
        cResult[1] = tmp9;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.yTlZV0);
        cResult[2] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.header) {
        const obj3 = {
          style: tmp4.header,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp10,
        };
        const tmp14 = closure_1_19(Text_Text.Text, obj3);
        cResult[3] = tmp4.header;
        cResult[4] = tmp14;
      }
      if (cResult[5] === guild) {
        if (cResult[8] === tmp4.blurb) {
          if (cResult[9] === tmp4.warning) {
            let tmp17 = cResult[10];
          }
          if (cResult[11] !== slots.length) {
            const intl2 = util.intl;
            const obj4 = { days, slotCount: slots.length };
            const formatResult = intl2.format(util.t.KPnDlu, obj4);
            cResult[11] = slots.length;
            cResult[12] = formatResult;
            let tmp18 = formatResult;
          } else {
            tmp18 = cResult[12];
          }
          if (cResult[13] === tmp17) {
            if (cResult[16] !== slots) {
              const obj5 = { slots };
              const tmp27 = closure_1_19(closure_23, obj5);
              cResult[16] = slots;
              cResult[17] = tmp27;
            }
            const confirmButton = tmp4.confirmButton;
            if (cResult[18] !== slots.length) {
              const intl3 = util.intl;
              const obj6 = { slotCount: slots.length };
              const formatToPlainStringResult = intl3.formatToPlainString(util.t.ZU5x5w, obj6);
              cResult[18] = slots.length;
              cResult[19] = formatToPlainStringResult;
              let tmp28 = formatToPlainStringResult;
            } else {
              tmp28 = cResult[19];
            }
            if (cResult[20] !== onPremiumGuildSubscribe) {
              class O {
                constructor() {
                  tmp = onPremiumGuildSubscribe(false);
                  return;
                }
              }
              cResult[20] = onPremiumGuildSubscribe;
              cResult[21] = O;
            } else {
              class O {
                constructor() {
                  tmp = onPremiumGuildSubscribe(false);
                  return;
                }
              }
            }
            if (cResult[22] === isModifyingSubscription) {
              class O {
                constructor() {
                  tmp = onPremiumGuildSubscribe(false);
                  return;
                }
              }
            }
            const obj7 = { variant: "primary", text: tmp28, onPress: O, loading: isModifyingSubscription };
            const tmp33 = closure_1_19(components_Button_Button.Button, obj7);
            cResult[22] = isModifyingSubscription;
            cResult[23] = tmp28;
            cResult[24] = O;
            cResult[25] = tmp33;
          }
          const obj8 = { style: tmp17, variant: "text-sm/medium", children: tmp18 };
          const tmp23 = closure_1_19(Text_Text.Text, obj8);
          cResult[13] = tmp17;
          cResult[14] = tmp18;
          cResult[15] = tmp23;
        }
        const items = [,];
        ({ blurb: arr[0], warning: arr[1] } = tmp4);
        cResult[8] = tmp4.blurb;
        cResult[9] = tmp4.warning;
        cResult[10] = items;
        tmp17 = items;
      }
      const obj9 = { style: tmp4.guildPreview, guild };
      cResult[5] = guild;
      cResult[6] = tmp4.guildPreview;
      cResult[7] = closure_1_19(PremiumGuildPreviewDefault, { style: tmp4.guildPreview, guild });
      const tmp16 = closure_1_19(PremiumGuildPreviewDefault, { style: tmp4.guildPreview, guild });
    }
  : (arg0) => {
      ({ slots, onPremiumGuildSubscribe: require } = arg0);
      ({ guild, isModifyingSubscription } = arg0);
      const tmp = closure_22();
      const obj = { children: null };
      const items = [closure_1_19(timestampProducer, { style: tmp.subscribeImage, source: _modDef13415 }), , , , ,];
      const obj3 = {
        style: tmp.header,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj3.children = intl.string(util.t.yTlZV0);
      items[1] = closure_1_19(Text_Text.Text, obj3);
      items[2] = closure_1_19(PremiumGuildPreviewDefault, { style: tmp.guildPreview, guild });
      const obj5 = { style: null, variant: "text-sm/medium", children: null };
      const items1 = [,];
      ({ blurb: arr2[0], warning: arr2[1] } = tmp);
      obj5.style = items1;
      const intl2 = util.intl;
      obj5.children = intl2.format(util.t.KPnDlu, { days, slotCount: slots.length });
      items[3] = closure_1_19(Text_Text.Text, obj5);
      items[4] = closure_1_19(closure_23, { slots });
      const obj7 = { style: tmp.confirmButton, children: null };
      const obj8 = { variant: "primary", text: null, onPress: null, loading: null };
      const intl3 = util.intl;
      obj8.text = intl3.formatToPlainString(util.t.ZU5x5w, { slotCount: slots.length });
      obj8.onPress = function onPress() {
        _require(false);
      };
      obj8.loading = isModifyingSubscription;
      obj7.children = closure_1_19(components_Button_Button.Button, obj8);
      items[5] = closure_1_19(React5, obj7);
      obj.children = items;
      return closure_1_20(closure_1_21, obj);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPremiumGuildSubscribe) => {
      const cResult = previousGuildSubscriptionSlots(576).c(62);
      ({ guild, isModifyingSubscription, previousGuildSubscriptionSlots } = onPremiumGuildSubscribe);
      onPremiumGuildSubscribe = onPremiumGuildSubscribe.onPremiumGuildSubscribe;
      const tmp4 = closure_22();
      const obj = previousGuildSubscriptionSlots(576);
      const guildSubscriptionRemovalSource = previousGuildSubscriptionSlots(13425).useGuildSubscriptionRemovalSource();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== previousGuildSubscriptionSlots) {
        const fn = function l() {
          const found = previousGuildSubscriptionSlots.find(
            (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription,
          );
          let guildId;
          if (found != null) {
            const premiumGuildSubscription = found.premiumGuildSubscription;
            if (premiumGuildSubscription != null) {
              guildId = premiumGuildSubscription.guildId;
            }
          }
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = previousGuildSubscriptionSlots;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const obj2 = previousGuildSubscriptionSlots(13425);
      const stateFromStores = previousGuildSubscriptionSlots(504).useStateFromStores(first, tmp8);
      if (null == stateFromStores) {
        if (cResult[3] !== tmp4.loading) {
          const obj3 = { style: tmp4.loading };
          const tmp66 = closure_19(closure_5, obj3);
          cResult[3] = tmp4.loading;
          cResult[4] = tmp66;
          let tmp63 = tmp66;
        } else {
          tmp63 = cResult[4];
        }
        return tmp63;
      } else {
        if (cResult[5] === tmp4.transferImage) {
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = previousGuildSubscriptionSlots(1126).intl;
            const stringResult = intl.string(previousGuildSubscriptionSlots(1126).t.h92jfS);
            cResult[8] = stringResult;
            let tmp14 = stringResult;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== tmp4.header) {
            const obj4 = {
              style: tmp4.header,
              variant: "heading-lg/extrabold",
              color: "mobile-text-heading-primary",
              children: tmp14,
            };
            const tmp18 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj4);
            cResult[9] = tmp4.header;
            cResult[10] = tmp18;
          }
          if (cResult[11] !== previousGuildSubscriptionSlots.length) {
            const intl2 = previousGuildSubscriptionSlots(1126).intl;
            const obj5 = { slotCount: previousGuildSubscriptionSlots.length, guildCount: 1 };
            const formatResult = intl2.format(previousGuildSubscriptionSlots(1126).t.SSA2lu, obj5);
            cResult[11] = previousGuildSubscriptionSlots.length;
            cResult[12] = formatResult;
            let tmp19 = formatResult;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] === tmp4.blurb) {
            const _Symbol2 = Symbol;
            ({ transferPreviews, previewHeader } = tmp4);
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = previousGuildSubscriptionSlots(1126).intl;
              const formatResult1 = intl3.format(previousGuildSubscriptionSlots(1126).t["5zQYEz"], { guildCount: 1 });
              cResult[16] = formatResult1;
              let tmp24 = formatResult1;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === tmp4.previewHeader) {
              if (cResult[18] === tmp24) {
                let tmp26 = cResult[19];
              }
              if (cResult[20] === stateFromStores) {
                if (cResult[21] === tmp4.guildPreview) {
                  let tmp29 = cResult[22];
                }
                if (cResult[23] !== previousGuildSubscriptionSlots.length) {
                  const intl4 = previousGuildSubscriptionSlots(1126).intl;
                  const obj6 = { slotCount: previousGuildSubscriptionSlots.length };
                  const formatResult2 = intl4.format(previousGuildSubscriptionSlots(1126).t.ct6oxD, obj6);
                  cResult[23] = previousGuildSubscriptionSlots.length;
                  cResult[24] = formatResult2;
                  let tmp33 = formatResult2;
                } else {
                  tmp33 = cResult[24];
                }
                if (cResult[25] === tmp4.previewHeader) {
                  if (cResult[26] === tmp33) {
                    let tmp35 = cResult[27];
                  }
                  if (cResult[28] === tmp4.activeTransferGuildCardBorder) {
                    if (cResult[29] === tmp4.guildPreview) {
                      let tmp38 = cResult[30];
                    }
                    if (cResult[31] !== guild) {
                      const obj7 = { guild };
                      const tmp42 = closure_19(onPremiumGuildSubscribe(13416), obj7);
                      cResult[31] = guild;
                      cResult[32] = tmp42;
                      let tmp39 = tmp42;
                    } else {
                      tmp39 = cResult[32];
                    }
                    if (cResult[33] === tmp38) {
                      if (cResult[34] === tmp39) {
                        let tmp43 = cResult[35];
                      }
                      if (cResult[36] === tmp4.transferPreviews) {
                        if (cResult[37] === tmp26) {
                          if (cResult[38] === tmp29) {
                            if (cResult[39] === tmp35) {
                              if (cResult[42] !== previousGuildSubscriptionSlots) {
                                const obj8 = { slots: previousGuildSubscriptionSlots };
                                const tmp56 = closure_19(closure_23, obj8);
                                cResult[42] = previousGuildSubscriptionSlots;
                                cResult[43] = tmp56;
                              }
                              const confirmButton = tmp4.confirmButton;
                              if (cResult[44] !== previousGuildSubscriptionSlots.length) {
                                const intl5 = previousGuildSubscriptionSlots(1126).intl;
                                const obj9 = { slotCount: previousGuildSubscriptionSlots.length };
                                const formatToPlainStringResult = intl5.formatToPlainString(
                                  previousGuildSubscriptionSlots(1126).t.Oh6mxU,
                                  obj9,
                                );
                                cResult[44] = previousGuildSubscriptionSlots.length;
                                cResult[45] = formatToPlainStringResult;
                                let tmp57 = formatToPlainStringResult;
                              } else {
                                tmp57 = cResult[45];
                              }
                              if (cResult[46] !== onPremiumGuildSubscribe) {
                                class X {
                                  constructor() {
                                    return onPremiumGuildSubscribe(true);
                                  }
                                }
                                cResult[46] = onPremiumGuildSubscribe;
                                cResult[47] = X;
                              } else {
                                class X {
                                  constructor() {
                                    return onPremiumGuildSubscribe(true);
                                  }
                                }
                              }
                              if (cResult[48] === isModifyingSubscription) {
                                class X {
                                  constructor() {
                                    return onPremiumGuildSubscribe(true);
                                  }
                                }
                              }
                              const obj10 = {
                                variant: "primary",
                                text: tmp57,
                                onPress: X,
                                loading: isModifyingSubscription,
                              };
                              const tmp62 = closure_19(previousGuildSubscriptionSlots(5594).Button, obj10);
                              cResult[48] = isModifyingSubscription;
                              cResult[49] = tmp57;
                              cResult[50] = X;
                              cResult[51] = tmp62;
                            }
                          }
                        }
                      }
                      const obj11 = { style: transferPreviews, children: null };
                      const items1 = [tmp26, tmp29, tmp35, tmp43];
                      obj11.children = items1;
                      const tmp52 = closure_20(closure_7, obj11);
                      cResult[36] = tmp4.transferPreviews;
                      cResult[37] = tmp26;
                      cResult[38] = tmp29;
                      cResult[39] = tmp35;
                      cResult[40] = tmp43;
                      cResult[41] = tmp52;
                    }
                    const obj12 = {
                      style: tmp38,
                      start: previousGuildSubscriptionSlots(1105).HorizontalGradient.START,
                      end: previousGuildSubscriptionSlots(1105).HorizontalGradient.END,
                      colors: Gradients.PREMIUM_GUILD,
                      children: tmp39,
                    };
                    const tmp48 = closure_19(onPremiumGuildSubscribe(5605), obj12);
                    cResult[33] = tmp38;
                    cResult[34] = tmp39;
                    cResult[35] = tmp48;
                    tmp43 = tmp48;
                    const tmp46 = onPremiumGuildSubscribe(5605);
                  }
                  const items2 = [,];
                  ({ guildPreview: arr2[0], activeTransferGuildCardBorder: arr2[1] } = tmp4);
                  cResult[28] = tmp4.activeTransferGuildCardBorder;
                  cResult[29] = tmp4.guildPreview;
                  cResult[30] = items2;
                  tmp38 = items2;
                }
                const obj13 = { style: tmp4.previewHeader, variant: "eyebrow", color: "text-default", children: tmp33 };
                const tmp37 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj13);
                cResult[25] = tmp4.previewHeader;
                cResult[26] = tmp33;
                cResult[27] = tmp37;
                tmp35 = tmp37;
              }
              const obj14 = { style: tmp4.guildPreview, guild: stateFromStores };
              const tmp32 = closure_19(onPremiumGuildSubscribe(13416), obj14);
              cResult[20] = stateFromStores;
              cResult[21] = tmp4.guildPreview;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
            const obj15 = { style: previewHeader, variant: "eyebrow", color: "text-default", children: tmp24 };
            const tmp28 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj15);
            cResult[17] = tmp4.previewHeader;
            cResult[18] = tmp24;
            cResult[19] = tmp28;
            tmp26 = tmp28;
          }
          const obj16 = { style: tmp4.blurb, variant: "text-sm/medium", children: tmp19 };
          const tmp23 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj16);
          cResult[13] = tmp4.blurb;
          cResult[14] = tmp19;
          cResult[15] = tmp23;
        }
        const obj17 = { style: tmp4.transferImage, source: guildSubscriptionRemovalSource };
        const tmp13 = closure_19(closure_6, obj17);
        cResult[5] = tmp4.transferImage;
        cResult[6] = guildSubscriptionRemovalSource;
        cResult[7] = tmp13;
      }
      const tmpResult = previousGuildSubscriptionSlots(504);
    }
  : (previousGuildSubscriptionSlots) => {
      const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
      const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
      ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
      const tmp = closure_22();
      const guildSubscriptionRemovalSource = prop(13425).useGuildSubscriptionRemovalSource();
      const obj = prop(13425);
      const items = [GuildStore];
      const stateFromStores = prop(504).useStateFromStores(items, () => {
        const found = prop.find(
          (premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription,
        );
        let guildId;
        if (found != null) {
          const premiumGuildSubscription = found.premiumGuildSubscription;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
        }
        return GuildStore.getGuild(guildId);
      });
      if (null == stateFromStores) {
        const obj3 = { style: tmp.loading };
        let tmp8 = closure_19(closure_5, obj3);
      } else {
        const obj4 = { children: null };
        const obj5 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
        const items1 = [closure_19(closure_6, obj5), , , , ,];
        const obj6 = {
          style: tmp.header,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl = tmp2(1126).intl;
        obj6.children = intl.string(tmp2(1126).t.h92jfS);
        items1[1] = closure_19(tmp2(4886).Text, obj6);
        const obj7 = { style: tmp.blurb, variant: "text-sm/medium", children: null };
        const intl2 = tmp2(1126).intl;
        const obj8 = { slotCount: prop.length, guildCount: 1 };
        obj7.children = intl2.format(tmp2(1126).t.SSA2lu, obj8);
        items1[2] = closure_19(tmp2(4886).Text, obj7);
        const obj9 = { style: tmp.transferPreviews, children: null };
        const obj10 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
        const intl3 = tmp2(1126).intl;
        obj10.children = intl3.format(tmp2(1126).t["5zQYEz"], { guildCount: 1 });
        const items2 = [closure_19(tmp2(4886).Text, obj10), , ,];
        const obj11 = { style: tmp.guildPreview, guild: stateFromStores };
        items2[1] = closure_19(onPremiumGuildSubscribe(13416), obj11);
        const obj12 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
        const intl4 = tmp2(1126).intl;
        const obj13 = { slotCount: prop.length };
        obj12.children = intl4.format(tmp2(1126).t.ct6oxD, obj13);
        items2[2] = closure_19(tmp2(4886).Text, obj12);
        const obj14 = { style: null, start: null, end: null, colors: null, children: null };
        const items3 = [,];
        ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
        obj14.style = items3;
        obj14.start = tmp2(1105).HorizontalGradient.START;
        obj14.end = tmp2(1105).HorizontalGradient.END;
        obj14.colors = Gradients.PREMIUM_GUILD;
        const obj15 = { guild };
        obj14.children = closure_19(onPremiumGuildSubscribe(13416), obj15);
        items2[3] = closure_19(onPremiumGuildSubscribe(5605), obj14);
        obj9.children = items2;
        items1[3] = closure_20(closure_7, obj9);
        const obj16 = { slots: prop };
        items1[4] = closure_19(closure_23, obj16);
        const obj17 = { style: tmp.confirmButton, children: null };
        const obj18 = { variant: "primary", text: null, onPress: null, loading: null };
        const intl5 = tmp2(1126).intl;
        const obj19 = { slotCount: prop.length };
        obj18.text = intl5.formatToPlainString(tmp2(1126).t.Oh6mxU, obj19);
        obj18.onPress = function onPress() {
          return onPremiumGuildSubscribe(true);
        };
        obj18.loading = isModifyingSubscription;
        obj17.children = closure_19(tmp2(5594).Button, obj18);
        items1[5] = closure_19(closure_7, obj17);
        obj4.children = items1;
        tmp8 = closure_20(closure_21, obj4);
        const tmp15 = onPremiumGuildSubscribe(5605);
      }
      return tmp8;
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx",
);

export default function SubscribeModalConfirmation(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: asyncGeneratorStep, onResult: noop } = arg0);
  closure_8 = async function _handleSubscribe(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp32 = tmp3;
            let everyResult = stateFromStoresArray.length > 0;
            if (everyResult) {
              everyResult = stateFromStoresArray.every((cooldownEndsAt) => {
                let tmp = null == cooldownEndsAt.cooldownEndsAt;
                if (!tmp) {
                  const _Date = Date;
                  const date = new Date(cooldownEndsAt.cooldownEndsAt);
                  const _Date2 = Date;
                  tmp = date.valueOf() < Date.now();
                  const valueOfResult = date.valueOf();
                }
                return tmp;
              });
            }
            tmp3(tmp32[29])(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
            c4 = 1;
            if (closure_0) {
              c5 = 2;
              c6 = 1;
              const obj5 = {
                value: Promise.all(
                  stateFromStoresArray.map((premiumGuildSubscription) => {
                    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                    if (null != premiumGuildSubscription) {
                      let unapplyFromGuildResult = closure_1_0(paths[30]).unapplyFromGuild(
                        premiumGuildSubscription.guildId,
                        premiumGuildSubscription.id,
                      );
                      const obj = closure_1_0(paths[30]);
                    } else {
                      unapplyFromGuildResult = Promise.resolve();
                    }
                    return unapplyFromGuildResult;
                  }),
                ),
                done: false,
              };
              return obj5;
            }
            const tmp59 = tmp3(tmp32[29]);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            if (closure_130_4 != null) {
              closure_130_4(false);
            }
            const obj6 = { title: null, body: null };
            const intl = closure_0(tmp32[20]).intl;
            obj6.title = intl.string(closure_0(tmp32[20]).t.Kx5W0V);
            const intl2 = closure_0(tmp32[20]).intl;
            tmp32 = closure_0;
            obj6.body = intl2.string(closure_0(tmp32[20]).t.XueBVY);
            tmp3(tmp32[31]).show(obj6);
            c6 = 3;
            const obj7 = tmp3(tmp32[31]);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_130_4 != null) {
              closure_130_4(true);
            }
            const obj10 = {
              importer() {
                return guildId(paths[33])(paths[32], paths.paths).then((result) => {
                  closure_0 = result.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.guildId = guildId;
                    obj.guildBoostSlots = guildBoostSlots;
                    return closure_3_19(closure_0, obj);
                  };
                });
              },
              isDismissable: false,
            };
            tmp3(tmp32[31]).openLazy(obj10);
            let obj = tmp3(tmp32[31]);
            const obj11 = {
              type: constants3.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL,
              location_object: constants2.BUTTON_CTA,
            };
            tmp3(tmp32[27]).track(constants.MODAL_DISMISSED, obj11);
            c4 = 0;
            const obj3 = tmp3(tmp32[27]);
          }
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        }
        c5 = 3;
        c6 = 1;
        const obj13 = {
          value: closure_0(tmp32[30]).applyToGuild(
            closure_130_6.id,
            closure_130_7.map((id) => id.id),
            closure_130_3 === constants4.PERK,
          ),
          done: false,
        };
        return obj13;
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  let tmp = closure_22();
  const ref = noop.useRef(_location);
  let items = [_location];
  const effect = noop.useEffect(() => {
    closure_5.current = _location;
  }, items);
  const effect1 = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, {
      type: constants2.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL,
      location: ref.current,
    });
  }, []);
  require("useFetchGuildBoostSlots")();
  let items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(_require));
  let obj = require("initialize");
  const items2 = [AppliedGuildBoostStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => AppliedGuildBoostStore.isModifyingAppliedBoost,
  );
  let obj2 = require("initialize");
  const items3 = [GuildBoostSlotStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
    if (null != importDefault) {
      if (importDefault.length > 0) {
        return importDefault;
      }
    }
    if (GuildBoostSlotStore.hasFetched) {
      const _Object = Object;
      const values = Object.values(tmp.boostSlots);
      const found = values.filter((isAvailable) => isAvailable.isAvailable());
      let sorted = found.sort((subscription) => {
        let num = -1;
        if (obj.isGuildBoostSlotCanceled(subscription)) {
          num = 1;
        }
        return num;
      });
    } else {
      sorted = [];
    }
    if (sorted.length > 0) {
      const items = [sorted[0]];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 === stateFromStoresArray.length) {
    let obj4 = { style: tmp.loading };
    let tmp14Result2 = closure_19(ref, obj4);
  } else {
    function handleSubscribe() {
      const self = this;
      const apply = closure_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let obj5 = { contentContainerStyle: null, style: null, children: null };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    if (tmp7) {
      let obj6 = {
        guild: stateFromStores,
        onPremiumGuildSubscribe: handleSubscribe,
        previousGuildSubscriptionSlots: stateFromStoresArray,
        isModifyingSubscription: stateFromStores1,
      };
      let tmp14Result = closure_19(closure_25, obj6);
    } else {
      let obj7 = {
        guild: stateFromStores,
        slots: stateFromStoresArray,
        isModifyingSubscription: stateFromStores1,
        onPremiumGuildSubscribe: handleSubscribe,
      };
      tmp14Result = closure_19(closure_24, obj7);
    }
    let obj13 = { children: null };
    obj5.children = tmp14Result;
    obj13.children = closure_19(closure_8, obj5);
    tmp14Result2 = closure_19(stateFromStoresArray, obj13);
  }
  return tmp14Result2;
}
