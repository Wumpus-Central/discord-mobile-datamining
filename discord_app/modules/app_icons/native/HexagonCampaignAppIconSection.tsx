// discord_app/modules/app_icons/native/HexagonCampaignAppIconSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AppIconTypes from "../AppIconTypes.tsx";
import HexagonCampaignPromoGradientDefault from "../../hexagon_campaign/native/HexagonCampaignPromoGradient.tsx";
import HexagonCampaignDaysLeftBadgeDefault from "../../hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx";
import AppIconDefault from "AppIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4994);
({
  HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS: hasOwnProperty,
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: metroRequire,
  HexagonCampaignPerk: closure_7,
  HexagonCampaignPerkAvailability: closure_8,
} = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4969);
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
      const hexagonCampaignPerkAvailability = onSelect(4997).useHexagonCampaignPerkAvailability(
        constants.APP_ICON,
        "HexagonCampaignAppIconSection",
      );
      const tmp8 = currentAppIcon.currentAppIcon === onSelect(9865).LimitedTimeAppIconIds.HEXAGON;
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp8) {
          let tmp9 = cResult[2];
        }
        const radioA11yNative = onSelect(5037).useRadioA11yNative(tmp9);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = onSelect(1128).intl;
          const stringResult = intl.string(onSelect(1128).t.JC4Pii);
          cResult[3] = stringResult;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[3];
        }
        const tmpResult3 = onSelect(5037);
        const token = onSelect(5250).useToken(nativeDefault.colors.WHITE);
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          function learnMoreHook(children, arg1) {
            return closure_1_9(
              onSelect(5232).Text,
              {
                variant: "text-xs/medium",
                color: "text-link",
                accessibilityRole: "link",
                onPress: onSelect(15845).openHexagonCampaignLearnMore,
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
          const intl2 = onSelect(1128).intl;
          obj2.children = intl2.string(onSelect(1128).t["2UCcmW"]);
          const tmp19 = closure_9(onSelect(5232).Text, obj2);
          cResult[5] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[5];
        }
        if (cResult[6] !== hexagonCampaignPerkAvailability) {
          if (hexagonCampaignPerkAvailability === constants2.LOCKED) {
            let tmp23 = closure_9(onSelect(15851).HexagonCampaignExtendPerkBadge, {});
          } else {
            const obj3 = { perk: constants.APP_ICON };
            tmp23 = closure_9(HexagonCampaignDaysLeftBadgeDefault, obj3);
          }
          cResult[6] = hexagonCampaignPerkAvailability;
          cResult[7] = tmp23;
        } else {
          if (cResult[8] === tmp5.header) {
            if (cResult[11] !== onSelect) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              cResult[11] = onSelect;
              cResult[12] = S;
            } else {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              const tmp32 = closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 });
              cResult[13] = tmp32;
            } else {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
            }
            if (cResult[14] !== tmp5.icon) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              const obj4 = { id: onSelect(9865).LimitedTimeAppIconIds.HEXAGON, size: 48, style: tmp5.icon };
              const tmp35 = closure_9(AppIconDefault, obj4);
              cResult[14] = tmp5.icon;
              cResult[15] = tmp35;
              const tmp14Result = AppIconDefault;
            } else {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
            }
            if (cResult[16] !== tmp5.label) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              const obj5 = { variant: "text-md/semibold", color: "text-strong", style: tmp5.label, children: tmp12 };
              const tmp37 = closure_9(onSelect(5232).Text, obj5);
              cResult[16] = tmp5.label;
              cResult[17] = tmp37;
            } else {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
            }
            if (cResult[18] === tmp4) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
            }
            if (tmp4) {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              tmp41[1] = token;
              let tmp38Result = closure_9(onSelect(6878).ActivityIndicator, tmp41);
            } else {
              class S {
                constructor() {
                  return onSelect(closure_0(closure_2[9]).LimitedTimeAppIconIds.HEXAGON);
                }
              }
              tmp39[0] = tmp8;
              tmp38Result = closure_9(onSelect(6986).FormRadio, tmp39);
            }
            cResult[18] = tmp4;
            cResult[19] = tmp8;
            cResult[20] = token;
            cResult[21] = tmp38Result;
          }
          const obj6 = { style: tmp5.header, children: null };
          const items = [tmp17, cResult[7]];
          obj6.children = items;
          const tmp29 = closure_10(closure_4, obj6);
          cResult[8] = tmp5.header;
          cResult[9] = cResult[7];
          cResult[10] = tmp29;
        }
        const tmpResult4 = onSelect(5250);
      }
      const obj7 = { selected: tmp8, busy: tmp4 };
      cResult[0] = tmp4;
      cResult[1] = tmp8;
      cResult[2] = obj7;
      tmp9 = obj7;
      const tmpResult = onSelect(4997);
    }
  : function HexagonCampaignAppIconSection(isPending) {
      let flag = isPending.isPending;
      if (flag === undefined) {
        flag = false;
      }
      const onSelect = isPending.onSelect;
      const tmp = closure_11();
      const hexagonCampaignPerkAvailability = onSelect(4997).useHexagonCampaignPerkAvailability(
        constants.APP_ICON,
        "HexagonCampaignAppIconSection",
      );
      const tmp6 = isPending.currentAppIcon === onSelect(9865).LimitedTimeAppIconIds.HEXAGON;
      const obj = onSelect(4997);
      const radioA11yNative = onSelect(5037).useRadioA11yNative({ selected: tmp6, busy: flag });
      const intl = onSelect(1128).intl;
      const stringResult = intl.string(onSelect(1128).t.JC4Pii);
      const obj2 = onSelect(5037);
      const obj4 = { style: tmp.section, children: null };
      const obj5 = { style: tmp.header, children: null };
      const token = onSelect(5250).useToken(nativeDefault.colors.WHITE);
      const obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl2 = onSelect(1128).intl;
      obj6.children = intl2.string(onSelect(1128).t["2UCcmW"]);
      const items = [closure_9(onSelect(5232).Text, obj6)];
      if (hexagonCampaignPerkAvailability === constants2.LOCKED) {
        let tmp13Result = closure_9(tmp2(15851).HexagonCampaignExtendPerkBadge, {});
      } else {
        const obj7 = { perk: constants.APP_ICON };
        tmp13Result = closure_9(HexagonCampaignDaysLeftBadgeDefault, obj7);
      }
      items[1] = tmp13Result;
      obj5.children = items;
      const items1 = [closure_10(closure_4, obj5)];
      const obj8 = { theme: onSelect(15848).ThemeTypes.DARK, children: null };
      const obj9 = {
        onPress() {
          return onSelect(AppIconTypes.LimitedTimeAppIconIds.HEXAGON);
        },
        style: tmp.row,
      };
      const merged = Object.assign(radioA11yNative);
      obj9.accessibilityLabel = stringResult;
      const items2 = [closure_9(HexagonCampaignPromoGradientDefault, { angle: 164 }), , ,];
      const obj10 = { id: null, size: 48, style: null };
      const obj3 = onSelect(5250);
      obj10.id = onSelect(9865).LimitedTimeAppIconIds.HEXAGON;
      obj10.style = tmp.icon;
      items2[1] = closure_9(AppIconDefault, obj10);
      items2[2] = closure_9(onSelect(5232).Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        style: tmp.label,
        children: stringResult,
      });
      if (flag) {
        const obj12 = { size: "small", color: token };
        let tmp13Result2 = closure_9(tmp2(6878).ActivityIndicator, obj12);
      } else {
        const obj13 = { selected: tmp6 };
        tmp13Result2 = closure_9(tmp2(6986).FormRadio, obj13);
      }
      const obj14 = { children: null };
      items2[3] = tmp13Result2;
      obj9.children = items2;
      obj8.children = closure_10(closure_3, obj9);
      const items3 = [closure_9(onSelect(5035).ThemeContextProvider, obj8)];
      const obj15 = { style: tmp.legal, children: null };
      const obj16 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl3 = tmp2(1128).intl;
      obj16.children = intl3.format(onSelect(1128).t.y2YmJv, {
        nonPremiumEndDate,
        premiumEndDate,
        learnMoreHook(children, arg1) {
          return closure_1_9(
            onSelect(5232).Text,
            {
              variant: "text-xs/medium",
              color: "text-link",
              accessibilityRole: "link",
              onPress: onSelect(15845).openHexagonCampaignLearnMore,
              children,
            },
            arg1,
          );
        },
      });
      obj15.children = closure_9(onSelect(5232).Text, obj16);
      items3[1] = closure_9(closure_4, obj15);
      obj14.children = items3;
      items1[1] = closure_10(closure_4, obj14);
      obj4.children = items1;
      return closure_10(closure_4, obj4);
    };
