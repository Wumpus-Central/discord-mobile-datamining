// === Module 9754: StickersPremiumUpsellAlert ===

// Module 9754 (StickersPremiumUpsellAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import openPremiumModalDefault from "openPremiumModal" /* 9366 */;
import _modDef9755 from "module_9755" /* 9755 */;
import _modDef9756 from "module_9756" /* 9756 */;
import _modDef9757 from "module_9757" /* 9757 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7125 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, AnalyticsObjects: closure_9 } = Constants);
const PremiumConstants = fn(1392);
({ SubscriptionPlans: c10, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_11, PRICE_PLACEHOLDER: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [
  {
    icon: _modDef9755,
    description() {
      const intl = util.intl;
      return intl.string(util.t.uAfKTe);
    },
    color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
  },
,

];
let obj = {
  icon: _modDef9755,
  description() {
    const intl = util.intl;
    return intl.string(util.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
items[1] = {
  icon: _modDef9756,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
let obj2 = {
  icon: _modDef9756,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
items[2] = {
  icon: _modDef9757,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
const createStyles = fn(5091);
let obj5 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: null, perkRow: null, lastPerkRow: null, perkIcon: null, perkText: null, imageHeader: null };
let obj3 = {
  icon: _modDef9757,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
obj5.perks = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
obj5.perkRow = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
obj5.lastPerkRow = { borderBottomWidth: 0 };
obj5.perkIcon = { width: 24, marginRight: 20 };
obj5.perkText = { lineHeight: 20, flexShrink: 1 };
obj5.imageHeader = { marginBottom: 12 };
let closure_16 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerkRow(perk) {
  const cResult = c.c(17);
  perk = perk.perk;
  const tmp4 = closure_16();
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp4.lastPerkRow;
  }
  if (cResult[0] === tmp4.perkRow) {
    if (cResult[1] === lastPerkRow) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === perk.color) {
      if (cResult[4] === perk.icon) {
        if (cResult[5] === tmp4.perkIcon) {
          if (cResult[6] === tmp8) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] !== perk) {
            const descriptionResult = perk.description();
            cResult[8] = perk;
            cResult[9] = descriptionResult;
            let tmp12 = descriptionResult;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp4.perkText) {
            if (cResult[11] === tmp12) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === tmp14) {
                  let tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
            const obj2 = { style: tmp6, children: null };
            items = [tmp9, tmp14];
            obj2.children = items;
            const tmp20 = state(React4, obj2);
            cResult[13] = tmp6;
            cResult[14] = tmp9;
            cResult[15] = tmp14;
            cResult[16] = tmp20;
            tmp17 = tmp20;
          }
          const obj3 = { style: tmp4.perkText, variant: "text-md/medium", color: "interactive-text-active", children: tmp12 };
          const tmp16 = __initData2(Text_Text.Text, obj3);
          cResult[10] = tmp4.perkText;
          cResult[11] = tmp12;
          cResult[12] = tmp16;
          tmp14 = tmp16;
        }
      }
    }
    const obj4 = { style: tmp4.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
    const tmp11 = __initData2(native.Icon, obj4);
    cResult[3] = perk.color;
    cResult[4] = perk.icon;
    cResult[5] = tmp4.perkIcon;
    cResult[6] = null == perk.color;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const items1 = [tmp4.perkRow, lastPerkRow];
  cResult[0] = tmp4.perkRow;
  cResult[1] = lastPerkRow;
  cResult[2] = items1;
  tmp6 = items1;
}) : (function PerkRow(perk) {
  perk = perk.perk;
  const tmp = closure_16();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: null };
  items[1] = lastPerkRow;
  const items1 = [__initData2(native.Icon, { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color }), __initData2(Text_Text.Text, { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() })];
  obj.children = items1;
  return state(React4, obj);
});
ReactCompilerGating = fn(558);
let obj7 = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StickersPremiumUpsellAlert(arg0) {
  const cResult = analyticsLocation(576).c(38);
  ({ onClose, analyticsLocation } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      if (!ready.isReady()) {
        analyticsLocations(dependencyMap[16]).wait(() => analyticsLocations(closure_1_2[17]).loadProducts());
        const obj = analyticsLocations(dependencyMap[16]);
      }
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = noop.useEffect(tmp5, tmp6);
  const tmp9 = analyticsLocations(9369)(closure_10.PREMIUM_MONTH_TIER_2);
  if (tmp9 != null) {
    const priceString = tmp9.priceString;
  }
  analyticsLocations = tmp8(6848)().analyticsLocations;
  if (cResult[2] === analyticsLocation) {
    if (cResult[3] === analyticsLocations) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = analyticsLocation(1126).intl;
      const stringResult = intl.string(analyticsLocation(1126).t.f3Pet9);
      cResult[5] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = analyticsLocation(1126).intl;
      const stringResult1 = intl2.string(analyticsLocation(1126).t.o3Tnif);
      cResult[6] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[6];
    }
    let shortHeightAlert = null;
    if (tmp8(1497)().height <= 580) {
      shortHeightAlert = tmp4.shortHeightAlert;
    }
    if (cResult[7] === tmp4.alert) {
      if (cResult[8] === shortHeightAlert) {
        let tmp16 = cResult[9];
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { source: tmp8(5010) };
        const tmp19 = closure_13(analyticsLocation(1200).Icon, obj2);
        cResult[10] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== onClose) {
        let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: tmp17 };
        const tmp22 = closure_13(analyticsLocation(6191).PressableOpacity, obj3);
        cResult[11] = onClose;
        cResult[12] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp4.closeContainer) {
        if (cResult[14] === tmp20) {
          let tmp23 = cResult[15];
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function j() {
            return true;
          };
          cResult[16] = fn2;
          let tmp27 = fn2;
        } else {
          tmp27 = cResult[16];
        }
        if (cResult[17] !== tmp4.imageHeader) {
          const obj4 = { source: tmp8(9758), style: tmp4.imageHeader };
          const tmp31 = closure_13(tmp8(6163), obj4);
          cResult[17] = tmp4.imageHeader;
          cResult[18] = tmp31;
          let tmp28 = tmp31;
          const tmp8Result = tmp8(6163);
        } else {
          tmp28 = cResult[18];
        }
        if (cResult[19] !== priceString) {
          const intl3 = analyticsLocation(1126).intl;
          let tmp33 = priceString;
          if (priceString == null) {
            tmp33 = closure_12;
          }
          const obj5 = { monthlyPrice: tmp33 };
          const formatResult = intl3.format(analyticsLocation(1126).t.TBsJfQ, obj5);
          cResult[19] = priceString;
          cResult[20] = formatResult;
          let tmp32 = formatResult;
        } else {
          tmp32 = cResult[20];
        }
        if (cResult[21] === tmp4.description) {
          if (cResult[22] === tmp32) {
            let tmp35 = cResult[23];
          }
          const _Symbol5 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const mapped = items.map((perk, index) => closure_1_13(closure_1_17, { perk, isLastPerk: index === length.length - 1 }, index));
            cResult[24] = mapped;
            let tmp38 = mapped;
          } else {
            tmp38 = cResult[24];
          }
          if (cResult[25] !== tmp4.perks) {
            const obj6 = { style: tmp4.perks, children: tmp38 };
            const tmp44 = closure_13(closure_4, obj6);
            cResult[25] = tmp4.perks;
            cResult[26] = tmp44;
            let tmp41 = tmp44;
          } else {
            tmp41 = cResult[26];
          }
          if (cResult[27] === tmp4.content) {
            if (cResult[28] === tmp28) {
              if (cResult[29] === tmp35) {
                if (cResult[30] === tmp41) {
                  let tmp45 = cResult[31];
                }
                if (cResult[32] === onClose) {
                  if (cResult[33] === tmp10) {
                    if (cResult[34] === tmp23) {
                      if (cResult[35] === tmp45) {
                        if (cResult[36] === tmp16) {
                          let tmp51 = cResult[37];
                        }
                        return tmp51;
                      }
                    }
                  }
                }
                const obj7 = { cancelText: tmp11, confirmColor: analyticsLocation(1200).ButtonColors.GREEN, confirmText: tmp13, onConfirm: tmp10, onClose, onCancel: onClose, style: tmp16, children: null };
                const items1 = [tmp23, tmp45];
                obj7.children = items1;
                const tmp54 = closure_14(tmp8(5395), obj7);
                cResult[32] = onClose;
                cResult[33] = tmp10;
                cResult[34] = tmp23;
                cResult[35] = tmp45;
                cResult[36] = tmp16;
                cResult[37] = tmp54;
                tmp51 = tmp54;
                const tmp8Result2 = tmp8(5395);
              }
            }
          }
          const obj8 = { children: null };
          const obj9 = { style: tmp4.content, onStartShouldSetResponder: tmp27, children: null };
          const items2 = [tmp28, tmp35, tmp41];
          obj9.children = items2;
          obj8.children = closure_14(closure_4, obj9);
          const tmp50 = closure_13(closure_5, obj8);
          cResult[27] = tmp4.content;
          cResult[28] = tmp28;
          cResult[29] = tmp35;
          cResult[30] = tmp41;
          cResult[31] = tmp50;
          tmp45 = tmp50;
        }
        const obj10 = { style: tmp4.description, variant: "text-md/medium", children: tmp32 };
        const tmp37 = closure_13(analyticsLocation(5087).Text, obj10);
        cResult[21] = tmp4.description;
        cResult[22] = tmp32;
        cResult[23] = tmp37;
        tmp35 = tmp37;
      }
      const obj11 = { style: tmp4.closeContainer, children: tmp20 };
      const tmp26 = closure_13(closure_4, obj11);
      cResult[13] = tmp4.closeContainer;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp23 = tmp26;
    }
    const items3 = [tmp4.alert, shortHeightAlert];
    cResult[7] = tmp4.alert;
    cResult[8] = shortHeightAlert;
    cResult[9] = items3;
    tmp16 = items3;
  }
  function onConfirm() {
    const obj2 = { location: null };
    const obj3 = {};
    const merged = Object.assign(analyticsLocation);
    obj3.section = closure_2_8.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj3.object = constants2.BUTTON_CTA;
    obj2.location = obj3;
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
    openPremiumModalDefault({ analyticsLocations });
  }
  cResult[2] = analyticsLocation;
  cResult[3] = analyticsLocations;
  cResult[4] = onConfirm;
  tmp10 = onConfirm;
  let obj = analyticsLocation(576);
}) : (function StickersPremiumUpsellAlert(arg0) {
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = closure_16();
  const effect = noop.useEffect(() => {
    if (!ready.isReady()) {
      analyticsLocations(dependencyMap[16]).wait(() => analyticsLocations(closure_1_2[17]).loadProducts());
      const obj = analyticsLocations(dependencyMap[16]);
    }
  }, []);
  const tmp5 = analyticsLocations(9369)(closure_10.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  analyticsLocations = tmp3(6848)().analyticsLocations;
  let obj = { cancelText: null, confirmColor: null, confirmText: null, onConfirm: null, onClose: null, onCancel: null, style: null, children: null };
  const intl = util.intl;
  obj.cancelText = intl.string(util.t.f3Pet9);
  obj.confirmColor = native.ButtonColors.GREEN;
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.o3Tnif);
  obj.onConfirm = function onConfirm() {
    const obj2 = { location: null };
    const obj3 = {};
    const merged = Object.assign(require);
    obj3.section = closure_2_8.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj3.object = constants2.BUTTON_CTA;
    obj2.location = obj3;
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
    openPremiumModalDefault({ analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (analyticsLocations(1497)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  let obj2 = { style: tmp.closeContainer, children: null };
  let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
  const tmp3Result = analyticsLocations(5395);
  obj3.children = closure_13(native.Icon, { source: analyticsLocations(5010) });
  obj2.children = closure_13(Pressables.PressableOpacity, obj3);
  const items1 = [closure_13(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: null
  };
  const obj6 = { source: null, style: null };
  const obj4 = { source: analyticsLocations(5010) };
  obj6.source = analyticsLocations(9758);
  obj6.style = tmp.imageHeader;
  const items2 = [closure_13(analyticsLocations(6163), obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl3 = util.intl;
  if (priceString == null) {
    priceString = closure_12;
  }
  const obj8 = { children: null };
  obj7.children = intl3.format(util.t.TBsJfQ, { monthlyPrice: priceString });
  items2[1] = closure_13(Text_Text.Text, obj7);
  const tmp3Result2 = analyticsLocations(6163);
  items2[2] = closure_13(closure_4, { style: tmp.perks, children: items.map((perk, index) => closure_1_13(closure_1_17, { perk, isLastPerk: index === length.length - 1 }, index)) });
  obj5.children = items2;
  obj8.children = closure_14(closure_4, obj5);
  items1[1] = closure_13(closure_5, obj8);
  obj.children = items1;
  return closure_14(tmp3Result, obj);
});