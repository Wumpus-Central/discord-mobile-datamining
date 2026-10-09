// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import PriceUtils from "../../../../../utils/PriceUtils.tsx";
import TouchableHitBoxDefault from "../../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionTypeUtils from "../../../GuildRoleSubscriptionTypeUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SubscriptionIntervalTypes = fn(1392).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1096).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    padding: 24,
    borderTopLeftRadius: nativeDefault.radii.md,
    borderTopRightRadius: nativeDefault.radii.md,
  },
  rowContainer: null,
  containerSelected: null,
  rowStatusIcon: null,
  confirmButton: null,
  backToTemplates: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: 24,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
};
obj2.rowContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  alignSelf: "stretch",
  justifyContent: "flex-start",
  padding: 12,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  alignSelf: "stretch",
  justifyContent: "flex-start",
  padding: 12,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.containerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.rowStatusIcon = { height: 20, width: 20, marginRight: 12 };
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.confirmButton = { borderRadius: nativeDefault.radii.xs };
obj2.backToTemplates = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PriceOptionRow(arg0) {
      const cResult = c.c(19);
      ({ price, selected, onPress } = arg0);
      const tmp4 = closure_11();
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      let containerSelected;
      if (selected) {
        containerSelected = tmp4.containerSelected;
      }
      if (cResult[2] === tmp4.rowContainer) {
        if (cResult[3] === containerSelected) {
          let tmp8 = cResult[4];
        }
        const tmp9Result = importDefault(selected ? 18384 : 16937);
        if (cResult[5] === tmp4.rowStatusIcon) {
          if (cResult[6] === tmp9Result) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== price) {
            const intl = util.intl;
            const obj3 = { price: PriceUtils.formatPrice(price, CurrencyCodes.USD), interval: null };
            const tmpResult3 = PriceUtils;
            const obj4 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
            obj3.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval(obj4);
            const formatResult = intl.format(util.t.CgmBaG, obj3);
            cResult[8] = price;
            cResult[9] = formatResult;
            let tmp14 = formatResult;
            const tmpResult4 = GuildRoleSubscriptionTypeUtils;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp14) {
            const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp14 };
            const tmp20 = options(Text_Text.Text, obj5);
            cResult[10] = tmp14;
            cResult[11] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] === accessibilityRole) {
            if (cResult[13] === accessibilityState) {
              if (cResult[14] === onPress) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp11) {
                    if (cResult[17] === tmp18) {
                      let tmp21 = cResult[18];
                    }
                    return tmp21;
                  }
                }
              }
            }
          }
          const obj6 = { style: tmp8, accessibilityRole, accessibilityState, onPress, children: null };
          const items = [tmp11, tmp18];
          obj6.children = items;
          const tmp23 = collapsed(TouchableHitBoxDefault, obj6);
          cResult[12] = accessibilityRole;
          cResult[13] = accessibilityState;
          cResult[14] = onPress;
          cResult[15] = tmp8;
          cResult[16] = tmp11;
          cResult[17] = tmp18;
          cResult[18] = tmp23;
          tmp21 = tmp23;
        }
        const obj7 = { style: tmp4.rowStatusIcon, source: tmp9Result };
        const tmp13 = options(FastImageDefault, obj7);
        cResult[5] = tmp4.rowStatusIcon;
        cResult[6] = tmp9Result;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      const items1 = [tmp4.rowContainer, containerSelected];
      cResult[2] = tmp4.rowContainer;
      cResult[3] = containerSelected;
      cResult[4] = items1;
      tmp8 = items1;
      const tmpResult = useA11yRolesNative;
    }
  : function PriceOptionRow(selected) {
      selected = selected.selected;
      ({ price, onPress } = selected);
      const tmp = closure_11();
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const items = [tmp.rowContainer];
      let containerSelected;
      if (selected) {
        containerSelected = tmp.containerSelected;
      }
      const obj2 = { style: items, accessibilityRole, accessibilityState, onPress, children: null };
      items[1] = containerSelected;
      const obj3 = { style: tmp.rowStatusIcon, source: null };
      const tmp7 = TouchableHitBoxDefault;
      obj3.source = importDefault(selected ? 18384 : 16937);
      const items1 = [options(FastImageDefault, obj3)];
      const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl = util.intl;
      const obj5 = { price: null, interval: null };
      const tmp6Result = FastImageDefault;
      obj5.price = PriceUtils.formatPrice(price, CurrencyCodes.USD);
      const tmp2Result = PriceUtils;
      obj5.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval({
        interval: SubscriptionIntervalTypes.MONTH,
        interval_count: 1,
      });
      obj4.children = intl.format(util.t.CgmBaG, obj5);
      items1[1] = options(Text_Text.Text, obj4);
      obj2.children = items1;
      return collapsed(tmp7, obj2);
    };
ReactCompilerGating = fn(558);
let obj6 = { borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
      const cResult = selectedTemplate(newPricesToPick[9]).c(43);
      selectedTemplate = selectedTemplate.selectedTemplate;
      const handleCreateFromTemplate = selectedTemplate.handleCreateFromTemplate;
      newPricesToPick = selectedTemplate.newPricesToPick;
      const tmp4 = closure_11();
      const bottom = handleCreateFromTemplate(newPricesToPick[19])().bottom;
      const tmp5 = first(noop.useState(0), 2);
      first = tmp5[0];
      noop = tmp5[1];
      if (cResult[0] === handleCreateFromTemplate) {
        if (cResult[1] === newPricesToPick) {
          if (cResult[2] === first) {
            if (cResult[3] === selectedTemplate) {
              let tmp7 = cResult[4];
            }
            closure_5 = tmp7;
            const container = tmp4.container;
            if (cResult[5] !== bottom) {
              let obj2 = { paddingBottom: bottom };
              cResult[5] = bottom;
              cResult[6] = obj2;
              let tmp8 = obj2;
            } else {
              tmp8 = cResult[6];
            }
            if (cResult[7] !== selectedTemplate.listings[0].name) {
              const intl = tmp(tmp2[14]).intl;
              const obj3 = { tierName: selectedTemplate.listings[0].name };
              const formatResult = intl.format(tmp(tmp2[14]).t["5WZ9Ct"], obj3);
              cResult[7] = selectedTemplate.listings[0].name;
              cResult[8] = formatResult;
              let tmp9 = formatResult;
            } else {
              tmp9 = cResult[8];
            }
            if (cResult[9] !== tmp9) {
              const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
              const tmp13 = closure_9(tmp(tmp2[17]).Text, obj4);
              cResult[9] = tmp9;
              cResult[10] = tmp13;
              let tmp11 = tmp13;
            } else {
              tmp11 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp17 = closure_9(tmp(tmp2[20]).Spacer, { size: 12 });
              cResult[11] = tmp17;
              let tmp15 = tmp17;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] !== selectedTemplate.listings[0].price_tier) {
              const intl2 = tmp(tmp2[14]).intl;
              const obj5 = {
                price: tmp(tmp2[15]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD),
              };
              const formatResult1 = intl2.format(tmp(tmp2[14]).t["5i7Uhb"], obj5);
              cResult[12] = selectedTemplate.listings[0].price_tier;
              cResult[13] = formatResult1;
              let tmp18 = formatResult1;
              const tmpResult = tmp(tmp2[15]);
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] !== tmp18) {
              const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp18 };
              const tmp23 = closure_9(tmp(tmp2[17]).Text, obj6);
              cResult[14] = tmp18;
              cResult[15] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp26 = closure_9(tmp(tmp2[20]).Spacer, { size: 24 });
              cResult[16] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === newPricesToPick) {
              if (cResult[18] === first) {
                const _Symbol3 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp33 = closure_9(tmp(tmp2[20]).Spacer, { size: 36 });
                  cResult[22] = tmp33;
                  let tmp31 = tmp33;
                } else {
                  tmp31 = cResult[22];
                }
                if (cResult[23] !== tmp7) {
                  const fn = function z() {
                    return closure_5();
                  };
                  cResult[23] = tmp7;
                  cResult[24] = fn;
                  let tmp34 = fn;
                } else {
                  tmp34 = cResult[24];
                }
                if (cResult[25] === tmp4.confirmButton) {
                  if (cResult[26] === tmp34) {
                    let tmp35 = cResult[27];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp40 = closure_9(tmp(tmp2[20]).Spacer, { size: 24 });
                    cResult[28] = tmp40;
                    let tmp38 = tmp40;
                  } else {
                    tmp38 = cResult[28];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                    cResult[29] = V;
                  } else {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                  }
                  const _Symbol6 = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                    const obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
                    const intl3 = tmp(tmp2[14]).intl;
                    obj7.children = intl3.string(tmp(tmp2[14]).t.h26VOI);
                    const tmp43 = closure_9(tmp(tmp2[17]).Text, obj7);
                    cResult[30] = tmp43;
                    const tmp42 = tmp43;
                  } else {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                  }
                  if (cResult[31] !== tmp4.backToTemplates) {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                    const obj8 = { onPress: V, style: tmp4.backToTemplates, activeOpacity: 0.5, children: tmp42 };
                    const tmp46 = closure_9(closure_5, obj8);
                    cResult[31] = tmp4.backToTemplates;
                    cResult[32] = tmp46;
                  } else {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                  }
                  if (cResult[33] === tmp27) {
                    class V {
                      constructor() {
                        obj = handleCreateFromTemplate(newPricesToPick[22]);
                        return obj.hideActionSheet();
                      }
                    }
                  }
                  const obj9 = { contentContainerStyle: tmp8, children: null };
                  let items = [tmp11, tmp15, tmp21, tmp24, tmp27, tmp31, tmp35, tmp38, tmp44];
                  obj9.children = items;
                  const tmp49 = closure_10(tmp(tmp2[23]).BottomSheetScrollView, obj9);
                  cResult[33] = tmp27;
                  cResult[34] = tmp35;
                  cResult[35] = tmp44;
                  cResult[36] = tmp8;
                  cResult[37] = tmp11;
                  cResult[38] = tmp21;
                  cResult[39] = tmp49;
                }
                const obj10 = { text: "Confirm New Price", pillStyle: tmp4.confirmButton, onPress: tmp34, grow: true };
                const tmp37 = closure_9(tmp(tmp2[21]).BaseTextButton, obj10);
                cResult[25] = tmp4.confirmButton;
                cResult[26] = tmp34;
                cResult[27] = tmp37;
                tmp35 = tmp37;
              }
            }
            if (cResult[20] !== first) {
              class V {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
              cResult[20] = first;
              cResult[21] = E;
            } else {
              class V {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
            }
            const mapped = newPricesToPick.map(E);
            cResult[17] = newPricesToPick;
            cResult[18] = first;
            cResult[19] = mapped;
          }
        }
      }
      function handleSelectNewPrice() {
        const obj = {};
        const merged = Object.assign(selectedTemplate);
        const obj2 = {};
        const merged1 = Object.assign(selectedTemplate.listings[0]);
        obj2.price_tier = newPricesToPick[first];
        const items = [obj2];
        obj.listings = items;
        handleCreateFromTemplate(obj, true);
      }
      cResult[0] = handleCreateFromTemplate;
      cResult[1] = newPricesToPick;
      cResult[2] = first;
      cResult[3] = selectedTemplate;
      cResult[4] = handleSelectNewPrice;
      tmp7 = handleSelectNewPrice;
      let obj = selectedTemplate(newPricesToPick[9]);
    }
  : function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
      selectedTemplate = selectedTemplate.selectedTemplate;
      ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_11();
      [c3, c4] = noop.useState(0);
      let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
      let obj2 = { style: tmp.container, children: null };
      const obj3 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
      const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = selectedTemplate(newPricesToPick[14]).intl;
      obj4.children = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], {
        tierName: selectedTemplate.listings[0].name,
      });
      let items = [
        closure_9(selectedTemplate(newPricesToPick[17]).Text, obj4),
        closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }),
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl2 = selectedTemplate(newPricesToPick[14]).intl;
      const obj7 = { price: null };
      const obj5 = { tierName: selectedTemplate.listings[0].name };
      const tmp2 = _slicedToArray(noop.useState(0), 2);
      obj7.price = selectedTemplate(newPricesToPick[15]).formatPrice(
        selectedTemplate.listings[0].price_tier,
        CurrencyCodes.USD,
      );
      obj6.children = intl2.format(selectedTemplate(newPricesToPick[14]).t["5i7Uhb"], obj7);
      items[2] = closure_9(selectedTemplate(newPricesToPick[17]).Text, obj6);
      items[3] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
      items[4] = newPricesToPick.map((price, index) => {
        closure_0 = index;
        return closure_1_9(
          closure_1_12,
          {
            price,
            selected: index === c3,
            onPress() {
              return c4(closure_0);
            },
          },
          price,
        );
      });
      items[5] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
      items[6] = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, {
        text: "Confirm New Price",
        pillStyle: tmp.confirmButton,
        onPress() {
          const obj = {};
          const merged = Object.assign(selectedTemplate);
          const obj2 = {};
          const merged1 = Object.assign(selectedTemplate.listings[0]);
          obj2.price_tier = newPricesToPick[c3];
          const items = [obj2];
          obj.listings = items;
          importDefault(obj, true);
        },
        grow: true,
      });
      items[7] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
      const obj10 = {
        onPress() {
          return require("ActionSheetActionCreators").hideActionSheet();
        },
        style: tmp.backToTemplates,
        activeOpacity: 0.5,
        children: null,
      };
      const obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
      const intl3 = selectedTemplate(newPricesToPick[14]).intl;
      obj11.children = intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI);
      obj10.children = closure_9(selectedTemplate(newPricesToPick[17]).Text, obj11);
      items[8] = closure_9(closure_5, obj10);
      obj3.children = items;
      obj2.children = closure_10(selectedTemplate(newPricesToPick[23]).BottomSheetScrollView, obj3);
      obj.children = closure_9(closure_6, obj2);
      return closure_9(selectedTemplate(newPricesToPick[24]).BottomSheet, obj);
    };
