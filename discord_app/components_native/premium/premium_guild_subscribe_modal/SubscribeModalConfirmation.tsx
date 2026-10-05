// === Module 13414: SubscribeModalConfirmation ===

// Module 13414 (SubscribeModalConfirmation)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 4807 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ColorConstants from "ColorConstants" /* 6938 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13415 */;
import PremiumGuildPreviewDefault from "PremiumGuildPreview" /* 13416 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12221 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 6908 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6;

let ColorUtils;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, View: metroImportDefault, ScrollView: metroImportAll, StyleSheet } = react_native);
({ AnalyticEvents: map1, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = Constants);
const Gradients = ColorConstants.Gradients;
const BoostPurchaseIntent = GuildPowerupsConstants.BoostPurchaseIntent;
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 }, pendingCancellation: obj2, pendingCancellationMessage: { marginLeft: 10, flexShrink: 1 }, pendingCancellationIcon: { flexShrink: 0, width: 20, height: 20 }, loading: { marginTop: 32 }, confirmButton: { marginTop: 32, width: "100%" }, activeTransferGuildCardBorder: obj3 };
obj2 = { marginTop: 16, padding: 16, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1), alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: StyleSheet.hairlineWidth, width: "100%" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj3 = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_22 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((slots) => {
  let items1;
  let premiumTypeSubscription;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(26);
  slots = slots.slots;
  const tmp4 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function l() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === slots) {
      let tmp9;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      if (cResult[4] === tmp4) {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
        tmp11 = cResult[7];
        tmp12 = cResult[8];
        tmp13 = cResult[9];
        tmp14 = cResult[10];
        tmp15 = cResult[11];
        tmp16 = cResult[12];
      }
      const _Symbol = Symbol;
      if (tmp16 === Symbol.for("react.early_return_sentinel")) {
        if (cResult[16] === tmp9) {
          if (cResult[17] === tmp11) {
            if (cResult[18] === tmp12) {
              let tmp31;
              if (cResult[19] === tmp13) {
                tmp31 = cResult[20];
              }
              if (cResult[21] === tmp10) {
                if (cResult[22] === tmp14) {
                  if (cResult[23] === tmp15) {
                    let tmp34;
                    if (cResult[24] === tmp31) {
                      tmp34 = cResult[25];
                    }
                    tmp16 = tmp34;
                  }
                }
              }
              const obj2 = { style: tmp14, children: items1 };
              items1 = [tmp15, tmp31];
              const tmp36 = closure_20(tmp10, obj2);
              cResult[21] = tmp10;
              cResult[22] = tmp14;
              cResult[23] = tmp15;
              cResult[24] = tmp31;
              cResult[25] = tmp36;
              tmp34 = tmp36;
            }
          }
        }
        const obj3 = { style: tmp11, variant: tmp12, children: tmp13 };
        const tmp33 = closure_19(tmp9, obj3);
        cResult[16] = tmp9;
        cResult[17] = tmp11;
        cResult[18] = tmp12;
        cResult[19] = tmp13;
        cResult[20] = tmp33;
        tmp31 = tmp33;
      }
      return tmp16;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(subscription) {
        const obj = require("GuildBoostingUtils");
        return obj.isGuildBoostSlotCanceled(subscription);
      }
    }
    cResult[13] = B;
  } else {
    class B {
      constructor(subscription) {
        const obj = require("GuildBoostingUtils");
        return obj.isGuildBoostSlotCanceled(subscription);
      }
    }
  }
  const found = slots.filter(B);
  let tmp19 = null;
  let tmp20;
  let tmp21;
  let formatResult;
  let str;
  let prop;
  let tmp24;
  let Text;
  if (0 !== found.length) {
    class B {
      constructor(subscription) {
        const obj = require("GuildBoostingUtils");
        return obj.isGuildBoostSlotCanceled(subscription);
      }
    }
    if (null != stateFromStores) {
      let tmp27;
      class B {
        constructor(subscription) {
          const obj = require("GuildBoostingUtils");
          return obj.isGuildBoostSlotCanceled(subscription);
        }
      }
      const pendingCancellation = tmp4.pendingCancellation;
      if (cResult[14] !== tmp4.pendingCancellationIcon) {
        class B {
          constructor(subscription) {
            const obj = require("GuildBoostingUtils");
            return obj.isGuildBoostSlotCanceled(subscription);
          }
        }
        const obj4 = { style: tmp4.pendingCancellationIcon, source: AssetRegistryDefault };
        const tmp30 = closure_19(metroRequire, obj4);
        cResult[14] = tmp4.pendingCancellationIcon;
        cResult[15] = tmp30;
        tmp27 = tmp30;
      } else {
        class B {
          constructor(subscription) {
            const obj = require("GuildBoostingUtils");
            return obj.isGuildBoostSlotCanceled(subscription);
          }
        }
      }
      Text = Text_Text.Text;
      prop = tmp4.pendingCancellationMessage;
      const intl = intl6.intl;
      const obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      formatResult = intl.format(intl6.t.SFpsCH, obj5);
      str = "text-sm/medium";
      tmp20 = tmp27;
      tmp19 = forResult;
      tmp21 = pendingCancellation;
      tmp24 = tmp26;
    }
  }
  cResult[2] = stateFromStores;
  cResult[3] = slots;
  cResult[4] = tmp4;
  cResult[5] = Text;
  cResult[6] = tmp24;
  cResult[7] = prop;
  cResult[8] = str;
  cResult[9] = formatResult;
  cResult[10] = tmp21;
  cResult[11] = tmp20;
  cResult[12] = tmp19;
  tmp16 = tmp19;
  tmp15 = tmp20;
  tmp14 = tmp21;
  tmp13 = formatResult;
  tmp12 = str;
  tmp11 = prop;
  tmp10 = tmp24;
  tmp9 = Text;
}) : ((slots) => {
  let intl;
  let items1;
  let obj5;
  let premiumTypeSubscription;
  slots = slots.slots;
  const tmp = closure_22();
  let obj = get_initialized;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((item) => {
    const obj = require("GuildBoostingUtils");
    return obj.isGuildBoostSlotCanceled(item);
  });
  let tmp5 = null;
  if (0 !== found.length) {
    tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { style: tmp.pendingCancellation, children: items1 };
      const obj3 = { style: tmp.pendingCancellationIcon, source: AssetRegistryDefault };
      items1 = [closure_19(metroRequire, obj3), ];
      const obj4 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: intl.format(intl6.t.SFpsCH, obj5) };
      const Text = Text_Text.Text;
      intl = intl6.intl;
      obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      items1[1] = closure_19(Text, obj4);
      tmp5 = closure_20(metroImportDefault, obj2);
    }
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guild;
  let isModifyingSubscription;
  let onPremiumGuildSubscribe;
  let slots;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(36);
  ({ guild, isModifyingSubscription, slots, onPremiumGuildSubscribe } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] !== tmp4.subscribeImage) {
    const obj2 = { style: tmp4.subscribeImage, source: AssetRegistryDefault2 };
    cResult[0] = tmp4.subscribeImage;
    cResult[1] = closure_19(metroRequire, obj2);
    const tmp9 = closure_19(metroRequire, obj2);
  }
  const header = tmp4.header;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t.yTlZV0);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.header) {
    const obj3 = { style: header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp10 };
    cResult[3] = tmp4.header;
    cResult[4] = closure_19(Text_Text.Text, obj3);
    const tmp14 = closure_19(Text_Text.Text, obj3);
  }
  if (cResult[5] === guild) {
    if (cResult[8] === tmp4.blurb) {
      let tmp17;
      let tmp18;
      if (cResult[9] === tmp4.warning) {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== slots.length) {
        const intl2 = intl6.intl;
        const obj4 = { days, slotCount: slots.length };
        const formatResult = intl2.format(intl6.t.KPnDlu, obj4);
        cResult[11] = slots.length;
        cResult[12] = formatResult;
        tmp18 = formatResult;
      } else {
        tmp18 = cResult[12];
      }
      if (cResult[13] === tmp17) {
        let tmp28;
        if (cResult[16] !== slots) {
          const obj5 = { slots };
          cResult[16] = slots;
          cResult[17] = closure_19(closure_23, obj5);
          const tmp27 = closure_19(closure_23, obj5);
        }
        const confirmButton = tmp4.confirmButton;
        if (cResult[18] !== slots.length) {
          const intl3 = intl6.intl;
          const obj6 = { slotCount: slots.length };
          const formatToPlainStringResult = intl3.formatToPlainString(intl6.t.ZU5x5w, obj6);
          cResult[18] = slots.length;
          cResult[19] = formatToPlainStringResult;
          tmp28 = formatToPlainStringResult;
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
        cResult[22] = isModifyingSubscription;
        cResult[23] = tmp28;
        cResult[24] = O;
        cResult[25] = closure_19(components_Button_Button.Button, obj7);
        const tmp33 = closure_19(components_Button_Button.Button, obj7);
      }
      const obj8 = { style: tmp17, variant: "text-sm/medium", children: tmp18 };
      cResult[13] = tmp17;
      cResult[14] = tmp18;
      cResult[15] = closure_19(Text_Text.Text, obj8);
      const tmp23 = closure_19(Text_Text.Text, obj8);
    }
    const items = [, ];
    ({ blurb: arr[0], warning: arr[1] } = tmp4);
    cResult[8] = tmp4.blurb;
    cResult[9] = tmp4.warning;
    cResult[10] = items;
    tmp17 = items;
  }
  const obj9 = { style: tmp4.guildPreview, guild };
  cResult[5] = guild;
  cResult[6] = tmp4.guildPreview;
  cResult[7] = closure_19(PremiumGuildPreviewDefault, obj9);
  closure_19(PremiumGuildPreviewDefault, obj9);
}) : ((arg0) => {
  let Button;
  let closure_129_0;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let isModifyingSubscription;
  let items;
  let items1;
  let obj6;
  let obj8;
  let obj9;
  let slots;
  ({ slots, onPremiumGuildSubscribe: closure_129_0 } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = closure_22();
  const obj = { children: items };
  items = [, , , , , ];
  const obj2 = { style: tmp.subscribeImage, source: AssetRegistryDefault2 };
  items[0] = closure_19(metroRequire, obj2);
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.yTlZV0) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items[1] = closure_19(Text, obj3);
  const obj4 = { style: tmp.guildPreview, guild };
  items[2] = closure_19(PremiumGuildPreviewDefault, obj4);
  const obj5 = { style: items1, variant: "text-sm/medium", children: intl2.format(intl6.t.KPnDlu, obj6) };
  items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  obj6 = { days, slotCount: slots.length };
  items[3] = closure_19(Text2, obj5);
  items[4] = closure_19(closure_23, { slots });
  const obj7 = { style: tmp.confirmButton, children: closure_19(Button, obj8) };
  obj8 = {
    variant: "primary",
    text: intl3.formatToPlainString(intl6.t.ZU5x5w, obj9),
    onPress() {
      closure_1_0(false);
    },
    loading: isModifyingSubscription
  };
  Button = components_Button_Button.Button;
  intl3 = intl6.intl;
  obj9 = { slotCount: slots.length };
  items[5] = closure_19(metroImportDefault, obj7);
  return closure_20(closure_21, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPremiumGuildSubscribe) => {
  let first;
  let guild;
  let isModifyingSubscription;
  let items1;
  let previewHeader;
  let previousGuildSubscriptionSlots;
  let tmp8;
  let transferPreviews;
  const obj = previousGuildSubscriptionSlots(576);
  const cResult = obj.c(62);
  ({ guild, isModifyingSubscription, previousGuildSubscriptionSlots } = onPremiumGuildSubscribe);
  onPremiumGuildSubscribe = onPremiumGuildSubscribe.onPremiumGuildSubscribe;
  const tmp4 = closure_22();
  const obj2 = previousGuildSubscriptionSlots(13425);
  const guildSubscriptionRemovalSource = obj2.useGuildSubscriptionRemovalSource();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== previousGuildSubscriptionSlots) {
    const fn = function l() {
      const found = previousGuildSubscriptionSlots.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
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
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = previousGuildSubscriptionSlots(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (null == stateFromStores) {
    let tmp63;
    if (cResult[3] !== tmp4.loading) {
      const obj3 = { style: tmp4.loading };
      const tmp66 = closure_19(closure_5, obj3);
      cResult[3] = tmp4.loading;
      cResult[4] = tmp66;
      tmp63 = tmp66;
    } else {
      tmp63 = cResult[4];
    }
    return tmp63;
  } else {
    if (cResult[5] === tmp4.transferImage) {
      let tmp14;
      let tmp19;
      const _Symbol = Symbol;
      const header = tmp4.header;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = previousGuildSubscriptionSlots(1126).intl;
        const stringResult = intl.string(previousGuildSubscriptionSlots(1126).t.h92jfS);
        cResult[8] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== tmp4.header) {
        const obj4 = { style: header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp14 };
        cResult[9] = tmp4.header;
        cResult[10] = closure_19(previousGuildSubscriptionSlots(4886).Text, obj4);
        const tmp18 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj4);
      }
      const blurb = tmp4.blurb;
      if (cResult[11] !== previousGuildSubscriptionSlots.length) {
        const intl2 = previousGuildSubscriptionSlots(1126).intl;
        const obj5 = { slotCount: previousGuildSubscriptionSlots.length, guildCount: 1 };
        const formatResult = intl2.format(previousGuildSubscriptionSlots(1126).t.SSA2lu, obj5);
        cResult[11] = previousGuildSubscriptionSlots.length;
        cResult[12] = formatResult;
        tmp19 = formatResult;
      } else {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp4.blurb) {
        let tmp24;
        const _Symbol2 = Symbol;
        ({ transferPreviews, previewHeader } = tmp4);
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = previousGuildSubscriptionSlots(1126).intl;
          const formatResult1 = intl3.format(previousGuildSubscriptionSlots(1126).t["5zQYEz"], { guildCount: 1 });
          cResult[16] = formatResult1;
          tmp24 = formatResult1;
        } else {
          tmp24 = cResult[16];
        }
        if (cResult[17] === tmp4.previewHeader) {
          let tmp26;
          if (cResult[18] === tmp24) {
            tmp26 = cResult[19];
          }
          if (cResult[20] === stateFromStores) {
            let tmp29;
            let tmp33;
            if (cResult[21] === tmp4.guildPreview) {
              tmp29 = cResult[22];
            }
            const previewHeader2 = tmp4.previewHeader;
            if (cResult[23] !== previousGuildSubscriptionSlots.length) {
              const intl4 = previousGuildSubscriptionSlots(1126).intl;
              const obj6 = { slotCount: previousGuildSubscriptionSlots.length };
              const formatResult2 = intl4.format(previousGuildSubscriptionSlots(1126).t.ct6oxD, obj6);
              cResult[23] = previousGuildSubscriptionSlots.length;
              cResult[24] = formatResult2;
              tmp33 = formatResult2;
            } else {
              tmp33 = cResult[24];
            }
            if (cResult[25] === tmp4.previewHeader) {
              let tmp35;
              if (cResult[26] === tmp33) {
                tmp35 = cResult[27];
              }
              if (cResult[28] === tmp4.activeTransferGuildCardBorder) {
                let tmp38;
                let tmp39;
                if (cResult[29] === tmp4.guildPreview) {
                  tmp38 = cResult[30];
                }
                if (cResult[31] !== guild) {
                  const obj7 = { guild };
                  const tmp42 = closure_19(onPremiumGuildSubscribe(13416), obj7);
                  cResult[31] = guild;
                  cResult[32] = tmp42;
                  tmp39 = tmp42;
                } else {
                  tmp39 = cResult[32];
                }
                if (cResult[33] === tmp38) {
                  let tmp43;
                  if (cResult[34] === tmp39) {
                    tmp43 = cResult[35];
                  }
                  if (cResult[36] === tmp4.transferPreviews) {
                    if (cResult[37] === tmp26) {
                      if (cResult[38] === tmp29) {
                        if (cResult[39] === tmp35) {
                          let tmp57;
                          if (cResult[42] !== previousGuildSubscriptionSlots) {
                            const obj8 = { slots: previousGuildSubscriptionSlots };
                            cResult[42] = previousGuildSubscriptionSlots;
                            cResult[43] = closure_19(closure_23, obj8);
                            const tmp56 = closure_19(closure_23, obj8);
                          }
                          const confirmButton = tmp4.confirmButton;
                          if (cResult[44] !== previousGuildSubscriptionSlots.length) {
                            const intl5 = previousGuildSubscriptionSlots(1126).intl;
                            const obj9 = { slotCount: previousGuildSubscriptionSlots.length };
                            const formatToPlainStringResult = intl5.formatToPlainString(previousGuildSubscriptionSlots(1126).t.Oh6mxU, obj9);
                            cResult[44] = previousGuildSubscriptionSlots.length;
                            cResult[45] = formatToPlainStringResult;
                            tmp57 = formatToPlainStringResult;
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
                          const obj10 = { variant: "primary", text: tmp57, onPress: X, loading: isModifyingSubscription };
                          cResult[48] = isModifyingSubscription;
                          cResult[49] = tmp57;
                          cResult[50] = X;
                          cResult[51] = closure_19(previousGuildSubscriptionSlots(5594).Button, obj10);
                          const tmp62 = closure_19(previousGuildSubscriptionSlots(5594).Button, obj10);
                        }
                      }
                    }
                  }
                  const obj11 = { style: transferPreviews, children: items1 };
                  items1 = [tmp26, tmp29, tmp35, tmp43];
                  cResult[36] = tmp4.transferPreviews;
                  cResult[37] = tmp26;
                  cResult[38] = tmp29;
                  cResult[39] = tmp35;
                  cResult[40] = tmp43;
                  cResult[41] = closure_20(closure_7, obj11);
                  const tmp52 = closure_20(closure_7, obj11);
                }
                const obj12 = { style: tmp38, start: previousGuildSubscriptionSlots(1105).HorizontalGradient.START, end: previousGuildSubscriptionSlots(1105).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: tmp39 };
                const tmp46 = onPremiumGuildSubscribe(5605);
                const tmp48 = closure_19(tmp46, obj12);
                cResult[33] = tmp38;
                cResult[34] = tmp39;
                cResult[35] = tmp48;
                tmp43 = tmp48;
              }
              const items2 = [, ];
              ({ guildPreview: arr2[0], activeTransferGuildCardBorder: arr2[1] } = tmp4);
              cResult[28] = tmp4.activeTransferGuildCardBorder;
              cResult[29] = tmp4.guildPreview;
              cResult[30] = items2;
              tmp38 = items2;
            }
            const obj13 = { style: previewHeader2, variant: "eyebrow", color: "text-default", children: tmp33 };
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
      const obj16 = { style: blurb, variant: "text-sm/medium", children: tmp19 };
      cResult[13] = tmp4.blurb;
      cResult[14] = tmp19;
      cResult[15] = closure_19(previousGuildSubscriptionSlots(4886).Text, obj16);
      const tmp23 = closure_19(previousGuildSubscriptionSlots(4886).Text, obj16);
    }
    const obj17 = { style: tmp4.transferImage, source: guildSubscriptionRemovalSource };
    cResult[5] = tmp4.transferImage;
    cResult[6] = guildSubscriptionRemovalSource;
    cResult[7] = closure_19(closure_6, obj17);
    const tmp13 = closure_19(closure_6, obj17);
  }
}) : ((previousGuildSubscriptionSlots) => {
  let Button;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isModifyingSubscription;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj15;
  let obj18;
  let obj19;
  let obj8;
  let tmp8;
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = closure_22();
  const obj = prop(13425);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  const items = [GuildStore];
  const obj2 = prop(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const found = prop.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
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
    tmp8 = closure_19(closure_5, obj3);
  } else {
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    items1 = [closure_19(closure_6, obj5), , , , , ];
    const obj6 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(prop(1126).t.h92jfS) };
    const Text = tmp2(4886).Text;
    intl = tmp2(1126).intl;
    items1[1] = closure_19(Text, obj6);
    const obj7 = { style: tmp.blurb, variant: "text-sm/medium", children: intl2.format(prop(1126).t.SSA2lu, obj8) };
    const Text2 = tmp2(4886).Text;
    intl2 = tmp2(1126).intl;
    obj8 = { slotCount: prop.length, guildCount: 1 };
    items1[2] = closure_19(Text2, obj7);
    const obj9 = { style: tmp.transferPreviews, children: items2 };
    const obj10 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl3.format(prop(1126).t["5zQYEz"], { guildCount: 1 }) };
    const Text3 = tmp2(4886).Text;
    intl3 = tmp2(1126).intl;
    items2 = [closure_19(Text3, obj10), , , ];
    const obj11 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = closure_19(onPremiumGuildSubscribe(13416), obj11);
    const obj12 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl4.format(prop(1126).t.ct6oxD, obj13) };
    const Text4 = tmp2(4886).Text;
    intl4 = tmp2(1126).intl;
    obj13 = { slotCount: prop.length };
    items2[2] = closure_19(Text4, obj12);
    const obj14 = { style: items3, start: prop(1105).HorizontalGradient.START, end: prop(1105).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: closure_19(onPremiumGuildSubscribe(13416), obj15) };
    items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj15 = { guild };
    const tmp15 = onPremiumGuildSubscribe(5605);
    items2[3] = closure_19(tmp15, obj14);
    items1[3] = closure_20(closure_7, obj9);
    const obj16 = { slots: prop };
    items1[4] = closure_19(closure_23, obj16);
    const obj17 = { style: tmp.confirmButton, children: closure_19(Button, obj18) };
    obj18 = {
      variant: "primary",
      text: intl5.formatToPlainString(prop(1126).t.Oh6mxU, obj19),
      onPress() {
          return onPremiumGuildSubscribe(true);
        },
      loading: isModifyingSubscription
    };
    Button = tmp2(5594).Button;
    intl5 = tmp2(1126).intl;
    obj19 = { slotCount: prop.length };
    items1[5] = closure_19(closure_7, obj17);
    tmp8 = closure_20(closure_21, obj4);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  let _location;
  let require;
  let tmp14Result;
  let tmp14Result2;
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: _asyncToGenerator, onResult: react } = arg0);
  let obj = function _handleSubscribe() {
    obj = _asyncToGenerator(async (arg0) => {
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      let obj8;
      let tmp;
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let paths;
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
              paths = tmp;
              let everyResult = stateFromStoresArray.length > 0;
              const tmp56 = tmp(paths[29]);
              if (everyResult) {
                everyResult = stateFromStoresArray.every(function(cooldownEndsAt) {
                  let tmp = null == cooldownEndsAt.cooldownEndsAt;
                  if (!tmp) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const _Date2 = Date;
                    const date = new Date(cooldownEndsAt.cooldownEndsAt);
                    const valueOfResult = date.valueOf();
                    tmp = valueOfResult < Date.now();
                  }
                  return tmp;
                });
              }
              tmp56(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
              c4 = 1;
              if (closure_0) {
                const _Promise = Promise;
                c5 = 2;
                c6 = 1;
                const obj5 = {
                  value: Promise.all(stateFromStoresArray.map((premiumGuildSubscription) => {
                              let unapplyFromGuildResult;
                              premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                              if (null != premiumGuildSubscription) {
                                obj = closure_1_0(paths[30]);
                                unapplyFromGuildResult = obj.unapplyFromGuild(premiumGuildSubscription.guildId, premiumGuildSubscription.id);
                              } else {
                                unapplyFromGuildResult = Promise.resolve();
                              }
                              return unapplyFromGuildResult;
                            })),
                  done: false
                };
                return obj5;
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              if (closure_130_4 != null) {
                closure_130_4(false);
              }
              const obj6 = { title: intl.string(closure_0(paths[20]).t.Kx5W0V), body: intl2.string(closure_0(paths[20]).t.XueBVY) };
              const show = tmp(paths[31]).show;
              const tmp23 = tmp(paths[31]);
              intl = closure_0(paths[20]).intl;
              intl2 = closure_0(paths[20]).intl;
              show(obj6);
            } else if (2 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              if (closure_130_4 != null) {
                closure_130_4(true);
              }
              obj = tmp(paths[31]);
              const obj10 = {
                importer() {
                          let guildBoostSlots;
                          const promise = guildId(paths[33])(paths[32], paths.paths);
                          return promise.then((result) => {
                            closure_0 = result.default;
                            return (arg0) => {
                              obj = { guildId, guildBoostSlots };
                              const merged = Object.assign(arg0);
                              return closure_3_19(closure_0, obj);
                            };
                          });
                        },
                isDismissable: false
              };
              obj.openLazy(obj10);
              const obj11 = { type: constants3.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location_object: constants2.BUTTON_CTA };
              const obj3 = tmp(paths[27]);
              obj3.track(constants.MODAL_DISMISSED, obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
          c5 = 3;
          c6 = 1;
          const obj12 = { value: obj8.applyToGuild(closure_130_6.id, closure_130_7.map((id) => id.id), closure_130_3 === constants4.PERK), done: false };
          obj8 = closure_0(paths[30]);
          return obj12;
        } catch (tmp44) {
          let closure_3 = tmp44;
          if (0 === c4) {
            c6 = 3;
            throw tmp44;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_22();
  const ref = react.useRef(_location);
  let items = [_location];
  const effect = react.useEffect(() => {
    ref.current = _location;
  }, items);
  const effect1 = react.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(map1.OPEN_MODAL, obj2);
  }, []);
  require("useFetchGuildBoostSlots")();
  obj = require("get initialized");
  let items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(_require));
  let obj2 = require("get initialized");
  const items2 = [AppliedGuildBoostStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AppliedGuildBoostStore.isModifyingAppliedBoost);
  let obj3 = require("get initialized");
  const items3 = [GuildBoostSlotStore];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items3, () => {
    let items1;
    let sorted;
    if (null != importDefault) {
      let num = 0;
      if (importDefault.length > 0) {
        return importDefault;
      }
    }
    if (GuildBoostSlotStore.hasFetched) {
      const _Object = Object;
      const values = Object.values(tmp.boostSlots);
      const found = values.filter((isAvailable) => isAvailable.isAvailable());
      sorted = found.sort((subscription) => {
        let num = -1;
        obj = closure_1_0(_location[17]);
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
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 === stateFromStoresArray.length) {
    let obj4 = { style: tmp.loading };
    tmp14Result2 = closure_19(ref, obj4);
  } else {
    function handleSubscribe() {
      return obj(...arguments);
    }
    let obj5 = { contentContainerStyle: null, style: null, children: tmp14Result };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    const tmp15 = stateFromStoresArray;
    const tmp16 = obj;
    if (tmp7) {
      let obj6 = { guild: stateFromStores, onPremiumGuildSubscribe: handleSubscribe, previousGuildSubscriptionSlots: stateFromStoresArray, isModifyingSubscription: stateFromStores1 };
      tmp14Result = closure_19(closure_25, obj6);
    } else {
      let obj7 = { guild: stateFromStores, slots: stateFromStoresArray, isModifyingSubscription: stateFromStores1, onPremiumGuildSubscribe: handleSubscribe };
      tmp14Result = closure_19(closure_24, obj7);
    }
    const obj13 = { children: closure_19(tmp16, obj5) };
    tmp14Result2 = closure_19(tmp15, obj13);
  }
  return tmp14Result2;
};