// === Module 19341: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet ===

// Module 19341 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5039 */;
import Text_Text from "Text/Text" /* 5234 */;
import FormRadio from "FormRadio" /* 6988 */;
import PriceUtils from "PriceUtils" /* 7339 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9041 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 16588 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const SubscriptionIntervalTypes = fn(1394).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1098).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md }, rowContainer: null, containerSelected: null, rowStatusIcon: null, backToTemplates: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
obj2.rowContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.containerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.rowStatusIcon = { marginRight: 12 };
obj2.backToTemplates = { alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PriceOptionRow(arg0) {
  const cResult = c.c(21);
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
    if (cResult[5] !== selected) {
      const obj3 = { selected };
      const tmp11 = React6(FormRadio.FormRadio, obj3);
      cResult[5] = selected;
      cResult[6] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp4.rowStatusIcon) {
      if (cResult[8] === tmp9) {
        let tmp12 = cResult[9];
      }
      if (cResult[10] !== price) {
        const intl = util.intl;
        const obj4 = { price: PriceUtils.formatPrice(price, CurrencyCodes.USD), interval: null };
        const tmpResult3 = PriceUtils;
        const obj5 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
        obj4.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval(obj5);
        const formatResult = intl.format(util.t.CgmBaG, obj4);
        cResult[10] = price;
        cResult[11] = formatResult;
        let tmp16 = formatResult;
        const tmpResult4 = GuildRoleSubscriptionTypeUtils;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp16) {
        const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp16 };
        const tmp22 = React6(Text_Text.Text, obj6);
        cResult[12] = tmp16;
        cResult[13] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[13];
      }
      if (cResult[14] === accessibilityRole) {
        if (cResult[15] === accessibilityState) {
          if (cResult[16] === onPress) {
            if (cResult[17] === tmp8) {
              if (cResult[18] === tmp12) {
                if (cResult[19] === tmp20) {
                  let tmp23 = cResult[20];
                }
                return tmp23;
              }
            }
          }
        }
      }
      const obj7 = { style: tmp8, accessibilityRole, accessibilityState, onPress, children: null };
      const items = [tmp12, tmp20];
      obj7.children = items;
      const tmp26 = v65535(TouchableHitBoxDefault, obj7);
      cResult[14] = accessibilityRole;
      cResult[15] = accessibilityState;
      cResult[16] = onPress;
      cResult[17] = tmp8;
      cResult[18] = tmp12;
      cResult[19] = tmp20;
      cResult[20] = tmp26;
      tmp23 = tmp26;
    }
    const obj8 = { style: tmp4.rowStatusIcon, children: tmp9 };
    const tmp15 = React6(timestampProducer, obj8);
    cResult[7] = tmp4.rowStatusIcon;
    cResult[8] = tmp9;
    cResult[9] = tmp15;
    tmp12 = tmp15;
  }
  const items1 = [tmp4.rowContainer, containerSelected];
  cResult[2] = tmp4.rowContainer;
  cResult[3] = containerSelected;
  cResult[4] = items1;
  tmp8 = items1;
  const tmpResult = useA11yRolesNative;
}) : (function PriceOptionRow(selected) {
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = closure_11();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress, children: null };
  items[1] = containerSelected;
  const tmp6 = TouchableHitBoxDefault;
  const items1 = [React6(timestampProducer, { style: tmp.rowStatusIcon, children: React6(FormRadio.FormRadio, { selected }) }), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl = util.intl;
  const obj5 = { price: null, interval: null };
  const obj3 = { style: tmp.rowStatusIcon, children: React6(FormRadio.FormRadio, { selected }) };
  obj5.price = PriceUtils.formatPrice(price, CurrencyCodes.USD);
  const tmp2Result = PriceUtils;
  obj5.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj4.children = intl.format(util.t.CgmBaG, obj5);
  items1[1] = React6(Text_Text.Text, obj4);
  obj2.children = items1;
  return v65535(tmp6, obj2);
});
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  const cResult = selectedTemplate(newPricesToPick[9]).c(40);
  selectedTemplate = selectedTemplate.selectedTemplate;
  const handleCreateFromTemplate = selectedTemplate.handleCreateFromTemplate;
  newPricesToPick = selectedTemplate.newPricesToPick;
  const tmp4 = closure_11();
  const bottom = handleCreateFromTemplate(newPricesToPick[17])().bottom;
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
          const intl = tmp(tmp2[12]).intl;
          const obj3 = { tierName: selectedTemplate.listings[0].name };
          const formatResult = intl.format(tmp(tmp2[12]).t["5WZ9Ct"], obj3);
          cResult[7] = selectedTemplate.listings[0].name;
          cResult[8] = formatResult;
          let tmp9 = formatResult;
        } else {
          tmp9 = cResult[8];
        }
        if (cResult[9] !== tmp9) {
          const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
          const tmp13 = closure_9(tmp(tmp2[15]).Text, obj4);
          cResult[9] = tmp9;
          cResult[10] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = closure_9(tmp(tmp2[18]).Spacer, { size: 12 });
          cResult[11] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== selectedTemplate.listings[0].price_tier) {
          const intl2 = tmp(tmp2[12]).intl;
          const obj5 = { price: tmp(tmp2[13]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
          const formatResult1 = intl2.format(tmp(tmp2[12]).t["5i7Uhb"], obj5);
          cResult[12] = selectedTemplate.listings[0].price_tier;
          cResult[13] = formatResult1;
          let tmp18 = formatResult1;
          const tmpResult = tmp(tmp2[13]);
        } else {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp18) {
          const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp18 };
          const tmp23 = closure_9(tmp(tmp2[15]).Text, obj6);
          cResult[14] = tmp18;
          cResult[15] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = closure_9(tmp(tmp2[18]).Spacer, { size: 24 });
          cResult[16] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[16];
        }
        if (cResult[17] === newPricesToPick) {
          if (cResult[18] === first) {
            const _Symbol3 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp33 = closure_9(tmp(tmp2[18]).Spacer, { size: 36 });
              cResult[22] = tmp33;
              let tmp31 = tmp33;
            } else {
              tmp31 = cResult[22];
            }
            if (cResult[23] !== tmp7) {
              const obj7 = {
                text: "Confirm New Price",
                onPress() {
                              return closure_5();
                            },
                grow: true
              };
              const tmp36 = closure_9(tmp(tmp2[19]).Button, obj7);
              cResult[23] = tmp7;
              cResult[24] = tmp36;
              let tmp34 = tmp36;
            } else {
              tmp34 = cResult[24];
            }
            const _Symbol4 = Symbol;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp39 = closure_9(tmp(tmp2[18]).Spacer, { size: 24 });
              cResult[25] = tmp39;
              let tmp37 = tmp39;
            } else {
              tmp37 = cResult[25];
            }
            const _Symbol5 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
              cResult[26] = H;
            } else {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
            }
            const _Symbol6 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
              const obj8 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
              const intl3 = tmp(tmp2[12]).intl;
              obj8.children = intl3.string(tmp(tmp2[12]).t.h26VOI);
              const tmp42 = closure_9(tmp(tmp2[15]).Text, obj8);
              cResult[27] = tmp42;
              const tmp41 = tmp42;
            } else {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
            }
            if (cResult[28] !== tmp4.backToTemplates) {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
              const obj9 = { onPress: H, style: tmp4.backToTemplates, activeOpacity: 0.5, children: tmp41 };
              const tmp45 = closure_9(closure_5, obj9);
              cResult[28] = tmp4.backToTemplates;
              cResult[29] = tmp45;
            } else {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
            }
            if (cResult[30] === cResult[19]) {
              class H {
                constructor() {
                  obj = handleCreateFromTemplate(newPricesToPick[20]);
                  return obj.hideActionSheet();
                }
              }
            }
            const obj10 = { contentContainerStyle: tmp8, children: null };
            let items = [tmp11, tmp15, tmp21, tmp24, cResult[19], tmp31, tmp34, tmp37, tmp43];
            obj10.children = items;
            const tmp48 = closure_10(tmp(tmp2[21]).BottomSheetScrollView, obj10);
            cResult[30] = cResult[19];
            cResult[31] = tmp34;
            cResult[32] = tmp43;
            cResult[33] = tmp8;
            cResult[34] = tmp11;
            cResult[35] = tmp21;
            cResult[36] = tmp48;
          }
        }
        if (cResult[20] !== first) {
          class H {
            constructor() {
              obj = handleCreateFromTemplate(newPricesToPick[20]);
              return obj.hideActionSheet();
            }
          }
          cResult[20] = first;
          cResult[21] = E;
        } else {
          class H {
            constructor() {
              obj = handleCreateFromTemplate(newPricesToPick[20]);
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
}) : (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
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
  const intl = selectedTemplate(newPricesToPick[12]).intl;
  obj4.children = intl.format(selectedTemplate(newPricesToPick[12]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [closure_9(selectedTemplate(newPricesToPick[15]).Text, obj4), closure_9(selectedTemplate(newPricesToPick[18]).Spacer, { size: 12 }), , , , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[12]).intl;
  const obj7 = { price: null };
  const obj5 = { tierName: selectedTemplate.listings[0].name };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  obj7.price = selectedTemplate(newPricesToPick[13]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj6.children = intl2.format(selectedTemplate(newPricesToPick[12]).t["5i7Uhb"], obj7);
  items[2] = closure_9(selectedTemplate(newPricesToPick[15]).Text, obj6);
  items[3] = closure_9(selectedTemplate(newPricesToPick[18]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price, index) => {
    closure_0 = index;
    return closure_1_9(closure_1_12, {
      price,
      selected: index === c3,
      onPress() {
        return c4(closure_0);
      }
    }, price);
  });
  items[5] = closure_9(selectedTemplate(newPricesToPick[18]).Spacer, { size: 36 });
  items[6] = closure_9(selectedTemplate(newPricesToPick[19]).Button, {
    text: "Confirm New Price",
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
    grow: true
  });
  items[7] = closure_9(selectedTemplate(newPricesToPick[18]).Spacer, { size: 24 });
  const obj10 = {
    onPress() {
      return require("ActionSheetActionCreators").hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: null
  };
  const obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
  const intl3 = selectedTemplate(newPricesToPick[12]).intl;
  obj11.children = intl3.string(selectedTemplate(newPricesToPick[12]).t.h26VOI);
  obj10.children = closure_9(selectedTemplate(newPricesToPick[15]).Text, obj11);
  items[8] = closure_9(closure_5, obj10);
  obj3.children = items;
  obj2.children = closure_10(selectedTemplate(newPricesToPick[21]).BottomSheetScrollView, obj3);
  obj.children = closure_9(closure_6, obj2);
  return closure_9(selectedTemplate(newPricesToPick[22]).BottomSheet, obj);
});