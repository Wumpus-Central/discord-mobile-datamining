// discord_app/modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import openPremiumModalDefault from "../../../../components_native/premium/openPremiumModal.tsx";
import _modDef9736 from "../../../../../_runtime/metro/09736__.js";
import _modDef9737 from "../../../../../_runtime/metro/09737__.js";
import _modDef9738 from "../../../../../_runtime/metro/09738__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, AnalyticsObjects: c10 } = Constants);
const PremiumConstants = fn(1391);
({
  SubscriptionPlans: closure_11,
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12,
  PRICE_PLACEHOLDER: map1,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [
  {
    icon: _modDef9736,
    description() {
      const intl = util.intl;
      return intl.string(util.t.uAfKTe);
    },
    color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE,
  },
  ,
];
let obj = {
  icon: _modDef9736,
  description() {
    const intl = util.intl;
    return intl.string(util.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE,
};
items[1] = {
  icon: _modDef9737,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  },
};
let obj2 = {
  icon: _modDef9737,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  },
};
items[2] = {
  icon: _modDef9738,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN,
};
const createStyles = fn(5090);
let obj5 = {
  alert: { paddingTop: 18 },
  shortHeightAlert: { height: 500 },
  content: { alignItems: "center" },
  closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 },
  description: { textAlign: "center", lineHeight: 20 },
  perks: null,
  perkRow: null,
  lastPerkRow: null,
  perkIcon: null,
  perkText: null,
  imageHeader: null,
};
let obj3 = {
  icon: _modDef9738,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN,
};
obj5.perks = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 16,
  marginBottom: 0,
  paddingHorizontal: 12,
  paddingVertical: 8,
  width: "100%",
};
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 16,
  marginBottom: 0,
  paddingHorizontal: 12,
  paddingVertical: 8,
  width: "100%",
};
obj5.perkRow = {
  paddingVertical: 10,
  borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560,
  borderBottomWidth: 1,
  flexDirection: "row",
  alignItems: "center",
};
obj5.lastPerkRow = { borderBottomWidth: 0 };
obj5.perkIcon = { width: 24, marginRight: 20 };
obj5.perkText = { lineHeight: 20, flexShrink: 1 };
obj5.imageHeader = { marginBottom: 12 };
let closure_17 = createStyles.createStyles(obj5);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PerkRow(perk) {
      const cResult = c.c(17);
      perk = perk.perk;
      const tmp4 = closure_17();
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
                const tmp20 = closure_1_15(React4, obj2);
                cResult[13] = tmp6;
                cResult[14] = tmp9;
                cResult[15] = tmp14;
                cResult[16] = tmp20;
                tmp17 = tmp20;
              }
              const obj3 = {
                style: tmp4.perkText,
                variant: "text-md/medium",
                color: "interactive-text-active",
                children: tmp12,
              };
              const tmp16 = state(Text_Text.Text, obj3);
              cResult[10] = tmp4.perkText;
              cResult[11] = tmp12;
              cResult[12] = tmp16;
              tmp14 = tmp16;
            }
          }
        }
        const obj4 = { style: tmp4.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
        const tmp11 = state(native.Icon, obj4);
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
    }
  : function PerkRow(perk) {
      perk = perk.perk;
      const tmp = closure_17();
      items = [tmp.perkRow];
      let lastPerkRow;
      if (perk.isLastPerk) {
        lastPerkRow = tmp.lastPerkRow;
      }
      const obj = { style: items, children: null };
      items[1] = lastPerkRow;
      const items1 = [
        state(native.Icon, {
          style: tmp.perkIcon,
          source: perk.icon,
          disableColor: null == perk.color,
          color: perk.color,
        }),
        state(Text_Text.Text, {
          style: tmp.perkText,
          variant: "text-md/medium",
          color: "interactive-text-active",
          children: perk.description(),
        }),
      ];
      obj.children = items1;
      return closure_1_15(React4, obj);
    };
ReactCompilerGating = fn(558);
let obj7 = {
  paddingVertical: 10,
  borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560,
  borderBottomWidth: 1,
  flexDirection: "row",
  alignItems: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StickersPremiumUpsellAlert(arg0) {
      const cResult = analyticsLocation(576).c(38);
      ({ onClose, analyticsLocation } = arg0);
      const tmp4 = closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p() {
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
      const tmp9 = analyticsLocations(9331)(closure_11.PREMIUM_MONTH_TIER_2);
      if (tmp9 != null) {
        const priceString = tmp9.priceString;
      }
      analyticsLocations = tmp8(6841)().analyticsLocations;
      if (cResult[2] === analyticsLocation) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = analyticsLocation(1126).intl;
          const stringResult = intl.string(analyticsLocation(1126).t.f3Pet9);
          cResult[5] = stringResult;
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = analyticsLocation(1126).intl;
          const stringResult1 = intl2.string(analyticsLocation(1126).t.o3Tnif);
          cResult[6] = stringResult1;
        }
        let shortHeightAlert = null;
        if (tmp8(1496)().height <= 580) {
          shortHeightAlert = tmp4.shortHeightAlert;
        }
        if (cResult[7] === tmp4.alert) {
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { source: tmp8(5009) };
            const tmp19 = closure_14(analyticsLocation(1200).Icon, obj2);
            cResult[10] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] !== onClose) {
            let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: tmp17 };
            const tmp22 = closure_14(analyticsLocation(6189).PressableOpacity, obj3);
            cResult[11] = onClose;
            cResult[12] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] === tmp4.closeContainer) {
            const _Symbol4 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class K {
                constructor() {
                  return true;
                }
              }
              cResult[16] = K;
            } else {
              class K {
                constructor() {
                  return true;
                }
              }
            }
            if (cResult[17] !== tmp4.imageHeader) {
              class K {
                constructor() {
                  return true;
                }
              }
              const obj4 = { source: tmp8(9739), style: tmp4.imageHeader };
              const tmp30 = closure_14(closure_5, obj4);
              cResult[17] = tmp4.imageHeader;
              cResult[18] = tmp30;
            } else {
              class K {
                constructor() {
                  return true;
                }
              }
            }
            if (cResult[19] !== priceString) {
              class K {
                constructor() {
                  return true;
                }
              }
              if (priceString == null) {
                class K {
                  constructor() {
                    return true;
                  }
                }
              }
              const obj5 = { monthlyPrice: priceString };
              const formatResult = obj6.format(analyticsLocation(1126).t.TBsJfQ, obj5);
              cResult[19] = priceString;
              cResult[20] = formatResult;
            } else {
              class K {
                constructor() {
                  return true;
                }
              }
            }
            if (cResult[21] === tmp4.description) {
              class K {
                constructor() {
                  return true;
                }
              }
              const _Symbol5 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                class K {
                  constructor() {
                    return true;
                  }
                }
                const mapped = items.map((perk, index) =>
                  closure_1_14(closure_1_18, { perk, isLastPerk: index === length.length - 1 }, index),
                );
                cResult[24] = mapped;
                const tmp37 = mapped;
              } else {
                class K {
                  constructor() {
                    return true;
                  }
                }
              }
              if (cResult[25] !== tmp4.perks) {
                class K {
                  constructor() {
                    return true;
                  }
                }
                const obj7 = { style: tmp4.perks, children: tmp37 };
                const tmp41 = closure_14(closure_4, obj7);
                cResult[25] = tmp4.perks;
                cResult[26] = tmp41;
              } else {
                class K {
                  constructor() {
                    return true;
                  }
                }
              }
              if (cResult[27] === tmp4.content) {
                class K {
                  constructor() {
                    return true;
                  }
                }
              }
              const obj8 = { children: null };
              const obj9 = { style: tmp4.content, onStartShouldSetResponder: K, children: null };
              const items1 = [tmp28, tmp34, tmp39];
              obj9.children = items1;
              obj8.children = closure_15(closure_4, obj9);
              const tmp47 = closure_14(closure_6, obj8);
              cResult[27] = tmp4.content;
              cResult[28] = tmp28;
              cResult[29] = tmp34;
              cResult[30] = tmp39;
              cResult[31] = tmp47;
            }
            const obj10 = { style: tmp4.description, variant: "text-md/medium", children: tmp31 };
            const tmp36 = closure_14(analyticsLocation(5086).Text, obj10);
            cResult[21] = tmp4.description;
            cResult[22] = tmp31;
            cResult[23] = tmp36;
          }
          const obj11 = { style: tmp4.closeContainer, children: tmp20 };
          const tmp26 = closure_14(closure_4, obj11);
          cResult[13] = tmp4.closeContainer;
          cResult[14] = tmp20;
          cResult[15] = tmp26;
        }
        const items2 = [tmp4.alert, shortHeightAlert];
        cResult[7] = tmp4.alert;
        cResult[8] = shortHeightAlert;
        cResult[9] = items2;
      }
      function onConfirm() {
        const obj2 = { location: null };
        const obj3 = {};
        const merged = Object.assign(analyticsLocation);
        obj3.section = options.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
        obj3.object = constants2.BUTTON_CTA;
        obj2.location = obj3;
        AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
        openPremiumModalDefault({ analyticsLocations });
      }
      cResult[2] = analyticsLocation;
      cResult[3] = analyticsLocations;
      cResult[4] = onConfirm;
      let obj = analyticsLocation(576);
    }
  : function StickersPremiumUpsellAlert(arg0) {
      ({ onClose, analyticsLocation: require } = arg0);
      let analyticsLocations;
      const tmp = closure_17();
      const effect = noop.useEffect(() => {
        if (!ready.isReady()) {
          analyticsLocations(dependencyMap[16]).wait(() => analyticsLocations(closure_1_2[17]).loadProducts());
          const obj = analyticsLocations(dependencyMap[16]);
        }
      }, []);
      const tmp5 = analyticsLocations(9331)(closure_11.PREMIUM_MONTH_TIER_2);
      let priceString;
      if (tmp5 != null) {
        priceString = tmp5.priceString;
      }
      analyticsLocations = tmp3(6841)().analyticsLocations;
      let obj = {
        cancelText: null,
        confirmColor: null,
        confirmText: null,
        onConfirm: null,
        onClose: null,
        onCancel: null,
        style: null,
        children: null,
      };
      const intl = util.intl;
      obj.cancelText = intl.string(util.t.f3Pet9);
      obj.confirmColor = native.ButtonColors.GREEN;
      const intl2 = util.intl;
      obj.confirmText = intl2.string(util.t.o3Tnif);
      obj.onConfirm = function onConfirm() {
        const obj2 = { location: null };
        const obj3 = {};
        const merged = Object.assign(require);
        obj3.section = options.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
        obj3.object = constants2.BUTTON_CTA;
        obj2.location = obj3;
        AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
        openPremiumModalDefault({ analyticsLocations });
      };
      obj.onClose = onClose;
      obj.onCancel = onClose;
      items = [tmp.alert];
      let shortHeightAlert = null;
      if (analyticsLocations(1496)().height <= 580) {
        shortHeightAlert = tmp.shortHeightAlert;
      }
      items[1] = shortHeightAlert;
      obj.style = items;
      let obj2 = { style: tmp.closeContainer, children: null };
      let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
      const tmp3Result = analyticsLocations(5394);
      obj3.children = closure_14(native.Icon, { source: analyticsLocations(5009) });
      obj2.children = closure_14(Pressables.PressableOpacity, obj3);
      const items1 = [closure_14(closure_4, obj2)];
      const obj5 = {
        style: tmp.content,
        onStartShouldSetResponder() {
          return true;
        },
        children: null,
      };
      const obj4 = { source: analyticsLocations(5009) };
      const items2 = [closure_14(closure_5, { source: analyticsLocations(9739), style: tmp.imageHeader }), ,];
      const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
      const intl3 = util.intl;
      if (priceString == null) {
        priceString = closure_13;
      }
      const obj8 = { children: null };
      obj7.children = intl3.format(util.t.TBsJfQ, { monthlyPrice: priceString });
      items2[1] = closure_14(Text_Text.Text, obj7);
      const obj6 = { source: analyticsLocations(9739), style: tmp.imageHeader };
      items2[2] = closure_14(closure_4, {
        style: tmp.perks,
        children: items.map((perk, index) =>
          closure_1_14(closure_1_18, { perk, isLastPerk: index === length.length - 1 }, index),
        ),
      });
      obj5.children = items2;
      obj8.children = closure_15(closure_4, obj5);
      items1[1] = closure_14(closure_6, obj8);
      obj.children = items1;
      return closure_15(tmp3Result, obj);
    };
