// === Module 17983: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet ===

// Module 17983 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import react_native from "react-native" /* 4594 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15049 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, selectedTemplate;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native2);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, rowContainer: obj3, containerSelected: obj4, rowStatusIcon: { height: 20, width: 20, marginRight: 12 }, confirmButton: obj5, backToTemplates: { alignSelf: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignSelf: "stretch", justifyContent: "flex-start", padding: 12, marginBottom: 12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let items;
  let obj4;
  let onPress;
  let price;
  let selected;
  let tmp5;
  let tmpResult3;
  let tmpResult4;
  const obj = react2;
  const cResult = obj.c(19);
  ({ price, selected, onPress } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = react_native;
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let containerSelected;
  if (selected) {
    containerSelected = tmp4.containerSelected;
  }
  if (cResult[2] === tmp4.rowContainer) {
    let tmp8;
    if (cResult[3] === containerSelected) {
      tmp8 = cResult[4];
    }
    const tmp9Result = importDefault(selected ? 17889 : 16518);
    if (cResult[5] === tmp4.rowStatusIcon) {
      let tmp11;
      let tmp14;
      let tmp18;
      if (cResult[6] === tmp9Result) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== price) {
        const intl = intl4.intl;
        const format = intl.format;
        const obj3 = { price: tmpResult3.formatPrice(price, CurrencyCodes.USD), interval: tmpResult4.formatPlanInterval(obj4) };
        const CgmBaG = intl4.t.CgmBaG;
        obj4 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
        tmpResult3 = PriceUtils;
        tmpResult4 = GuildRoleSubscriptionTypeUtils;
        const formatResult = format(CgmBaG, obj3);
        cResult[8] = price;
        cResult[9] = formatResult;
        tmp14 = formatResult;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp14) {
        const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp14 };
        const tmp20 = React4(Text_Text.Text, obj5);
        cResult[10] = tmp14;
        cResult[11] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[11];
      }
      if (cResult[12] === accessibilityRole) {
        if (cResult[13] === accessibilityState) {
          if (cResult[14] === onPress) {
            if (cResult[15] === tmp8) {
              if (cResult[16] === tmp11) {
                let tmp21;
                if (cResult[17] === tmp18) {
                  tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
          }
        }
      }
      const obj6 = { style: tmp8, accessibilityRole, accessibilityState, onPress, children: items };
      items = [tmp11, tmp18];
      const tmp23 = authStore(TouchableHitBoxDefault, obj6);
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
    const tmp13 = React4(FastImageDefault, obj7);
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
}) : ((selected) => {
  let CgmBaG;
  let accessibilityRole;
  let accessibilityState;
  let format;
  let items1;
  let obj5;
  let obj6;
  let onPress;
  let price;
  let tmp2Result;
  let tmp2Result2;
  selected = selected.selected;
  ({ price, onPress } = selected);
  const tmp = closure_11();
  const obj = react_native;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.rowContainer, ];
  let containerSelected;
  const tmp7 = TouchableHitBoxDefault;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress, children: items1 };
  items[1] = containerSelected;
  const obj3 = { style: tmp.rowStatusIcon, source: importDefault(selected ? 17889 : 16518) };
  const tmp6Result = FastImageDefault;
  items1 = [React4(tmp6Result, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(CgmBaG, obj5) };
  const Text = Text_Text.Text;
  const intl = intl4.intl;
  format = intl.format;
  obj5 = { price: tmp2Result.formatPrice(price, CurrencyCodes.USD), interval: tmp2Result2.formatPlanInterval(obj6) };
  CgmBaG = intl4.t.CgmBaG;
  obj6 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
  tmp2Result = PriceUtils;
  tmp2Result2 = GuildRoleSubscriptionTypeUtils;
  items1[1] = React4(Text, obj4);
  return authStore(tmp7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedTemplate) => {
  let closure_4;
  let first;
  let intl3;
  let items;
  let newPricesToPick;
  let tmpResult;
  let obj = selectedTemplate(newPricesToPick[9]);
  const cResult = obj.c(43);
  selectedTemplate = selectedTemplate.selectedTemplate;
  const handleCreateFromTemplate = selectedTemplate.handleCreateFromTemplate;
  newPricesToPick = selectedTemplate.newPricesToPick;
  const tmp4 = closure_11();
  const bottom = handleCreateFromTemplate(newPricesToPick[19])().bottom;
  const tmp5 = first(react.useState(0), 2);
  first = tmp5[0];
  react = tmp5[1];
  if (cResult[0] === handleCreateFromTemplate) {
    if (cResult[1] === newPricesToPick) {
      if (cResult[2] === first) {
        let tmp7;
        let tmp8;
        let tmp9;
        let tmp11;
        let tmp15;
        let tmp18;
        let tmp22;
        let tmp25;
        if (cResult[3] === selectedTemplate) {
          tmp7 = cResult[4];
        }
        let closure_5 = tmp7;
        const container = tmp4.container;
        if (cResult[5] !== bottom) {
          let obj2 = { paddingBottom: bottom };
          cResult[5] = bottom;
          cResult[6] = obj2;
          tmp8 = obj2;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] !== selectedTemplate.listings[0].name) {
          const intl = tmp(tmp2[14]).intl;
          const obj3 = { tierName: selectedTemplate.listings[0].name };
          const formatResult = intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], obj3);
          cResult[7] = selectedTemplate.listings[0].name;
          cResult[8] = formatResult;
          tmp9 = formatResult;
        } else {
          tmp9 = cResult[8];
        }
        if (cResult[9] !== tmp9) {
          const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
          const tmp13 = closure_9(selectedTemplate(newPricesToPick[17]).Text, obj4);
          cResult[9] = tmp9;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 });
          cResult[11] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== selectedTemplate.listings[0].price_tier) {
          const intl2 = tmp(tmp2[14]).intl;
          const format = intl2.format;
          const obj5 = { price: tmpResult.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
          const v5i7Uhb = tmp(tmp2[14]).t["5i7Uhb"];
          tmpResult = selectedTemplate(newPricesToPick[15]);
          const formatResult1 = format(v5i7Uhb, obj5);
          cResult[12] = selectedTemplate.listings[0].price_tier;
          cResult[13] = formatResult1;
          tmp18 = formatResult1;
        } else {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp18) {
          const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp18 };
          const tmp24 = closure_9(selectedTemplate(newPricesToPick[17]).Text, obj6);
          cResult[14] = tmp18;
          cResult[15] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp27 = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
          cResult[16] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[16];
        }
        if (cResult[17] === newPricesToPick) {
          let tmp28;
          let tmp31;
          if (cResult[18] === first) {
            tmp28 = cResult[19];
          }
          const _Symbol3 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp33 = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
            cResult[22] = tmp33;
            tmp31 = tmp33;
          } else {
            tmp31 = cResult[22];
          }
          if (cResult[23] !== tmp7) {
            class G {
              constructor() {
                return closure_5();
              }
            }
            cResult[23] = tmp7;
            cResult[24] = G;
          } else {
            class G {
              constructor() {
                return closure_5();
              }
            }
          }
          if (cResult[25] === tmp4.confirmButton) {
            let tmp38;
            let tmp41;
            class G {
              constructor() {
                return closure_5();
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              class G {
                constructor() {
                  return closure_5();
                }
              }
              const tmp39 = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
              cResult[28] = tmp39;
              tmp38 = tmp39;
            } else {
              class G {
                constructor() {
                  return closure_5();
                }
              }
            }
            const _Symbol5 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
              cResult[29] = V;
            } else {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
            }
            const _Symbol6 = Symbol;
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
              const obj7 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI) };
              const Text = tmp(tmp2[17]).Text;
              intl3 = tmp(tmp2[14]).intl;
              const tmp42 = closure_9(Text, obj7);
              cResult[30] = tmp42;
              tmp41 = tmp42;
            } else {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
            }
            if (cResult[31] !== tmp4.backToTemplates) {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
              const obj8 = { onPress: V, style: tmp4.backToTemplates, activeOpacity: 0.5, children: tmp41 };
              cResult[31] = tmp4.backToTemplates;
              cResult[32] = closure_9(closure_5, obj8);
              const tmp45 = closure_9(closure_5, obj8);
            } else {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
            }
            if (cResult[33] === tmp28) {
              class V {
                constructor() {
                  const obj = handleCreateFromTemplate(newPricesToPick[22]);
                  return obj.hideActionSheet();
                }
              }
            }
            const obj9 = { contentContainerStyle: tmp8, children: items };
            items = [tmp11, tmp15, tmp22, tmp25, tmp28, tmp31, tmp35, tmp38, tmp43];
            cResult[33] = tmp28;
            cResult[34] = tmp35;
            cResult[35] = tmp43;
            cResult[36] = tmp8;
            cResult[37] = tmp11;
            cResult[38] = tmp22;
            cResult[39] = closure_10(selectedTemplate(newPricesToPick[23]).BottomSheetScrollView, obj9);
            const tmp48 = closure_10(selectedTemplate(newPricesToPick[23]).BottomSheetScrollView, obj9);
          }
          const obj10 = { text: "Confirm New Price", pillStyle: tmp4.confirmButton, onPress: G, grow: true };
          cResult[25] = tmp4.confirmButton;
          cResult[26] = G;
          cResult[27] = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, obj10);
          const tmp37 = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, obj10);
        }
        if (cResult[20] !== first) {
          class V {
            constructor() {
              const obj = handleCreateFromTemplate(newPricesToPick[22]);
              return obj.hideActionSheet();
            }
          }
          cResult[20] = first;
          cResult[21] = A;
        } else {
          class V {
            constructor() {
              const obj = handleCreateFromTemplate(newPricesToPick[22]);
              return obj.hideActionSheet();
            }
          }
        }
        const mapped = newPricesToPick.map(A);
        cResult[17] = newPricesToPick;
        cResult[18] = first;
        cResult[19] = mapped;
        tmp28 = mapped;
      }
    }
  }
  const fn = function s() {
    let items;
    const obj = { listings: items };
    const merged = Object.assign(selectedTemplate);
    const obj2 = { price_tier: newPricesToPick[first] };
    const merged1 = Object.assign(selectedTemplate.listings[0]);
    items = [obj2];
    handleCreateFromTemplate(obj, true);
  };
  cResult[0] = handleCreateFromTemplate;
  cResult[1] = newPricesToPick;
  cResult[2] = first;
  cResult[3] = selectedTemplate;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((selectedTemplate) => {
  let BottomSheetScrollView;
  let Text3;
  let c3;
  let c4;
  let format;
  let intl;
  let intl3;
  let items;
  let newPricesToPick;
  let obj11;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let obj8;
  let v5i7Uhb;
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_11();
  const bottom = require("useSafeAreaInsets")().bottom;
  [c3, c4] = react.useState(0);
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: closure_9(closure_6, obj2) };
  obj2 = { style: tmp.container, children: closure_10(BottomSheetScrollView, obj3) };
  _slicedToArray(react.useState(0), 2);
  BottomSheet = selectedTemplate(newPricesToPick[24]).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = selectedTemplate(newPricesToPick[23]).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(selectedTemplate(newPricesToPick[14]).t["5WZ9Ct"], obj5) };
  const Text = selectedTemplate(newPricesToPick[17]).Text;
  intl = selectedTemplate(newPricesToPick[14]).intl;
  obj5 = { tierName: selectedTemplate.listings[0].name };
  items = [closure_9(Text, obj4), closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 12 }), , , , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: format(v5i7Uhb, obj7) };
  const Text2 = selectedTemplate(newPricesToPick[17]).Text;
  const intl2 = selectedTemplate(newPricesToPick[14]).intl;
  format = intl2.format;
  obj7 = { price: obj8.formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
  v5i7Uhb = selectedTemplate(newPricesToPick[14]).t["5i7Uhb"];
  obj8 = selectedTemplate(newPricesToPick[15]);
  items[2] = closure_9(Text2, obj6);
  items[3] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  items[4] = newPricesToPick.map((price, index) => {
    let closure_0 = index;
    const obj = {
      price,
      selected: index === c3,
      onPress() {
        return c4(index);
      }
    };
    return closure_1_9(closure_1_12, obj, price);
  });
  items[5] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 36 });
  const obj9 = {
    text: "Confirm New Price",
    pillStyle: tmp.confirmButton,
    onPress() {
      let items;
      const obj = { listings: items };
      const merged = Object.assign(selectedTemplate);
      const obj2 = { price_tier: newPricesToPick[c3] };
      const merged1 = Object.assign(selectedTemplate.listings[0]);
      items = [obj2];
      importDefault(obj, true);
    },
    grow: true
  };
  items[6] = closure_9(selectedTemplate(newPricesToPick[21]).BaseTextButton, obj9);
  items[7] = closure_9(selectedTemplate(newPricesToPick[20]).Spacer, { size: 24 });
  const obj10 = {
    onPress() {
      const obj = require("ActionSheetActionCreators");
      return obj.hideActionSheet();
    },
    style: tmp.backToTemplates,
    activeOpacity: 0.5,
    children: closure_9(Text3, obj11)
  };
  obj11 = { variant: "text-sm/semibold", color: "interactive-text-active", children: intl3.string(selectedTemplate(newPricesToPick[14]).t.h26VOI) };
  Text3 = selectedTemplate(newPricesToPick[17]).Text;
  intl3 = selectedTemplate(newPricesToPick[14]).intl;
  items[8] = closure_9(closure_5, obj10);
  return closure_9(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default tmp5;