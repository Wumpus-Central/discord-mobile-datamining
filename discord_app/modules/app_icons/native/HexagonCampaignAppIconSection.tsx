// discord_app/modules/app_icons/native/HexagonCampaignAppIconSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4248 from "../../hexagon_campaign/HexagonCampaign.messages.js";
import AppIconTypes from "../AppIconTypes.tsx";
import HexagonCampaignPromoGradientDefault from "../../hexagon_campaign/native/HexagonCampaignPromoGradient.tsx";
import HexagonCampaignDaysLeftBadgeDefault from "../../hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx";
import AppIconDefault from "AppIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4997);
({
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: metroRequire,
  HexagonCampaignPerk: closure_7,
  HexagonCampaignPerkAvailability: closure_8,
} = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4972);
let obj2 = {
  section: { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, paddingBottom: 0 },
  header: null,
  row: null,
  icon: null,
  label: null,
  legal: null,
};
let obj3 = { gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_16, paddingBottom: 0 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
  paddingLeft: nativeDefault.space.PX_12,
  paddingRight: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderBottomWidth: 0,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopLeftRadius: nativeDefault.radii.lg,
  borderTopRightRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj2.icon = { borderRadius: nativeDefault.radii.md };
obj2.label = { flex: 1 };
let obj6 = { borderRadius: nativeDefault.radii.md };
obj2.legal = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomLeftRadius: nativeDefault.radii.lg,
  borderBottomRightRadius: nativeDefault.radii.lg,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/HexagonCampaignAppIconSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignAppIconSection(currentAppIcon) {
      const cResult = onSelect(576).c(39);
      ({ isPending, onSelect } = currentAppIcon);
      let tmp4 = undefined !== isPending;
      if (tmp4) {
        tmp4 = isPending;
      }
      const tmp5 = closure_11();
      const obj = onSelect(576);
      const hexagonCampaignPerkAvailability = onSelect(5000).useHexagonCampaignPerkAvailability(
        constants.APP_ICON,
        "HexagonCampaignAppIconSection",
      );
      const tmpResult = onSelect(5000);
      const trackHexagonCampaignContentViewed = onSelect(15895).useTrackHexagonCampaignContentViewed(
        onSelect(6714).QuestContent.APP_ICON_SETTINGS,
        onSelect(15895).HexagonCampaignContentSurface.APP_ICON_PICKER,
        true,
      );
      const tmp9 = currentAppIcon.currentAppIcon === onSelect(9868).LimitedTimeAppIconIds.HEXAGON;
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp9) {
          let tmp10 = cResult[2];
        }
        const radioA11yNative = onSelect(5040).useRadioA11yNative(tmp10);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = onSelect(1125).intl;
          const stringResult = intl.string(_modDef4248.JC4Pii);
          cResult[3] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[3];
        }
        const tmpResult5 = onSelect(5040);
        const token = onSelect(5253).useToken(nativeDefault.colors.WHITE);
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          function learnMoreHook(children, arg1) {
            return closure_1_9(
              onSelect(5235).Text,
              {
                variant: "text-xs/medium",
                color: "text-link",
                accessibilityRole: "link",
                onPress: onSelect(15912).openHexagonCampaignLearnMore,
                children,
              },
              arg1,
            );
          }
          cResult[4] = learnMoreHook;
        }
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
          const intl2 = onSelect(1125).intl;
          obj2.children = intl2.string(_modDef4248["2UCcmW"]);
          const tmp21 = closure_9(onSelect(5235).Text, obj2);
          cResult[5] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[5];
        }
        if (cResult[6] !== hexagonCampaignPerkAvailability) {
          let tmp24 = hexagonCampaignPerkAvailability !== constants2.LOCKED;
          if (tmp24) {
            const obj3 = { perk: constants.APP_ICON };
            tmp24 = closure_9(HexagonCampaignDaysLeftBadgeDefault, obj3);
          }
          cResult[6] = hexagonCampaignPerkAvailability;
          cResult[7] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[7];
        }
        if (cResult[8] === tmp5.header) {
          if (cResult[11] !== onSelect) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            cResult[11] = onSelect;
            cResult[12] = L;
          } else {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            const tmp32 = closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 });
            cResult[13] = tmp32;
          } else {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
          }
          if (cResult[14] !== tmp5.icon) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            const obj4 = { id: onSelect(9868).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp5.icon };
            const tmp35 = closure_9(AppIconDefault, obj4);
            cResult[14] = tmp5.icon;
            cResult[15] = tmp35;
            const tmp16Result = AppIconDefault;
          } else {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
          }
          if (cResult[16] !== tmp5.label) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            const obj5 = { variant: "text-md/semibold", color: "text-strong", style: tmp5.label, children: tmp13 };
            const tmp37 = closure_9(onSelect(5235).Text, obj5);
            cResult[16] = tmp5.label;
            cResult[17] = tmp37;
          } else {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
          }
          if (cResult[18] === tmp4) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
          }
          if (tmp4) {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            tmp41[1] = token;
            let tmp38Result = closure_9(onSelect(6882).ActivityIndicator, tmp41);
          } else {
            class L {
              constructor() {
                return onSelect(closure_0(closure_2[11]).LimitedTimeAppIconIds.HEXAGON);
              }
            }
            tmp39[0] = tmp9;
            tmp38Result = closure_9(onSelect(6990).FormRadio, tmp39);
          }
          cResult[18] = tmp4;
          cResult[19] = tmp9;
          cResult[20] = token;
          cResult[21] = tmp38Result;
        }
        const obj6 = { style: tmp5.header, children: null };
        const items = [tmp19, tmp22];
        obj6.children = items;
        const tmp29 = closure_10(closure_4, obj6);
        cResult[8] = tmp5.header;
        cResult[9] = tmp22;
        cResult[10] = tmp29;
        const tmpResult6 = onSelect(5253);
      }
      const obj7 = { selected: tmp9, busy: tmp4 };
      cResult[0] = tmp4;
      cResult[1] = tmp9;
      cResult[2] = obj7;
      tmp10 = obj7;
      const tmpResult4 = onSelect(15895);
    }
  : function HexagonCampaignAppIconSection(isPending) {
      let flag = isPending.isPending;
      if (flag === undefined) {
        flag = false;
      }
      const onSelect = isPending.onSelect;
      const tmp = closure_11();
      const hexagonCampaignPerkAvailability = onSelect(5000).useHexagonCampaignPerkAvailability(
        constants.APP_ICON,
        "HexagonCampaignAppIconSection",
      );
      const obj = onSelect(5000);
      const trackHexagonCampaignContentViewed = onSelect(15895).useTrackHexagonCampaignContentViewed(
        onSelect(6714).QuestContent.APP_ICON_SETTINGS,
        onSelect(15895).HexagonCampaignContentSurface.APP_ICON_PICKER,
        true,
      );
      const tmp7 = isPending.currentAppIcon === onSelect(9868).LimitedTimeAppIconIds.HEXAGON;
      const obj2 = onSelect(15895);
      const radioA11yNative = onSelect(5040).useRadioA11yNative({ selected: tmp7, busy: flag });
      const intl = onSelect(1125).intl;
      const stringResult = intl.string(_modDef4248.JC4Pii);
      const obj3 = onSelect(5040);
      const obj5 = { style: tmp.section, children: null };
      const obj6 = { style: tmp.header, children: null };
      const token = onSelect(5253).useToken(nativeDefault.colors.WHITE);
      const obj7 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl2 = onSelect(1125).intl;
      obj7.children = intl2.string(_modDef4248["2UCcmW"]);
      const items = [closure_9(onSelect(5235).Text, obj7)];
      let tmp14Result = hexagonCampaignPerkAvailability !== constants2.LOCKED;
      if (tmp14Result) {
        const obj8 = { perk: constants.APP_ICON };
        tmp14Result = closure_9(HexagonCampaignDaysLeftBadgeDefault, obj8);
      }
      items[1] = tmp14Result;
      obj6.children = items;
      const items1 = [closure_10(closure_4, obj6)];
      const obj9 = { theme: onSelect(15915).ThemeTypes.DARK, children: null };
      const obj10 = {
        onPress() {
          return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
        },
        style: tmp.row,
      };
      const merged = Object.assign(radioA11yNative);
      obj10.accessibilityLabel = stringResult;
      const items2 = [closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 }), , ,];
      const obj11 = { id: null, size: 48, style: null };
      const obj4 = onSelect(5253);
      obj11.id = onSelect(9868).LimitedTimeAppIconIds.HEXAGON;
      obj11.style = tmp.icon;
      items2[1] = closure_9(AppIconDefault, obj11);
      items2[2] = closure_9(onSelect(5235).Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        style: tmp.label,
        children: stringResult,
      });
      if (flag) {
        const obj13 = { size: "small", color: token };
        let tmp14Result2 = closure_9(tmp2(6882).ActivityIndicator, obj13);
      } else {
        const obj14 = { selected: tmp7 };
        tmp14Result2 = closure_9(tmp2(6990).FormRadio, obj14);
      }
      const obj15 = { children: null };
      items2[3] = tmp14Result2;
      obj10.children = items2;
      obj9.children = closure_10(closure_3, obj10);
      const items3 = [closure_9(onSelect(5038).ThemeContextProvider, obj9)];
      const obj16 = { style: tmp.legal, children: null };
      const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp2(1125).intl;
      obj17.children = intl3.format(_modDef4248.y2YmJv, {
        nonPremiumEndDate,
        premiumEndDate,
        learnMoreHook(children, arg1) {
          return closure_1_9(
            onSelect(5235).Text,
            {
              variant: "text-xs/medium",
              color: "text-link",
              accessibilityRole: "link",
              onPress: onSelect(15912).openHexagonCampaignLearnMore,
              children,
            },
            arg1,
          );
        },
      });
      obj16.children = closure_9(onSelect(5235).Text, obj17);
      items3[1] = closure_9(closure_4, obj16);
      obj15.children = items3;
      items1[1] = closure_10(closure_4, obj15);
      obj5.children = items1;
      return closure_10(closure_4, obj5);
    };
