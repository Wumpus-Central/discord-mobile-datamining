// === Module 19876: GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet ===

// Module 19876 (GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const CurrencyCodes = fn(1095).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  const cResult = selectedTemplate(newPricesToPick[8]).c(39);
  selectedTemplate = selectedTemplate.selectedTemplate;
  const handleCreateFromTemplate = selectedTemplate.handleCreateFromTemplate;
  newPricesToPick = selectedTemplate.newPricesToPick;
  let obj = selectedTemplate(newPricesToPick[8]);
  const bottom = handleCreateFromTemplate(newPricesToPick[9])().bottom;
  const tmp4 = closure_9();
  value = value(noop.useState(0), 2)[0];
  if (cResult[0] === handleCreateFromTemplate) {
    if (cResult[1] === newPricesToPick) {
      if (cResult[2] === value) {
        if (cResult[3] === selectedTemplate) {
          let tmp8 = cResult[4];
        }
        noop = tmp8;
        const container = tmp4.container;
        if (cResult[5] !== bottom) {
          let obj2 = { paddingBottom: bottom };
          cResult[5] = bottom;
          cResult[6] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== selectedTemplate.listings[0].name) {
          const intl = tmp(tmp2[10]).intl;
          const obj3 = { tierName: selectedTemplate.listings[0].name };
          const formatResult = intl.format(tmp(tmp2[10]).t["5WZ9Ct"], obj3);
          cResult[7] = selectedTemplate.listings[0].name;
          cResult[8] = formatResult;
          let tmp10 = formatResult;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp10) {
          const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp10 };
          const tmp14 = closure_7(tmp(tmp2[11]).Text, obj4);
          cResult[9] = tmp10;
          cResult[10] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp18 = closure_7(tmp(tmp2[12]).Spacer, { size: 12 });
          cResult[11] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] !== selectedTemplate.listings[0].price_tier) {
          const intl2 = tmp(tmp2[10]).intl;
          const obj5 = { price: tmp(tmp2[13]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD) };
          const formatResult1 = intl2.format(tmp(tmp2[10]).t["5i7Uhb"], obj5);
          cResult[12] = selectedTemplate.listings[0].price_tier;
          cResult[13] = formatResult1;
          let tmp19 = formatResult1;
          const tmpResult = tmp(tmp2[13]);
        } else {
          tmp19 = cResult[13];
        }
        if (cResult[14] !== tmp19) {
          const obj6 = { variant: "text-sm/normal", color: "text-default", children: tmp19 };
          const tmp24 = closure_7(tmp(tmp2[11]).Text, obj6);
          cResult[14] = tmp19;
          cResult[15] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[15];
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp27 = closure_7(tmp(tmp2[12]).Spacer, { size: 24 });
          cResult[16] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[16];
        }
        if (cResult[17] !== newPricesToPick) {
          const _Symbol3 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(arg0, arg1) {
                obj = { value: arg1, label: null };
                obj2 = selectedTemplate(newPricesToPick[15]);
                obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
              }
            }
            cResult[19] = O;
          } else {
            class O {
              constructor(arg0, arg1) {
                obj = { value: arg1, label: null };
                obj2 = selectedTemplate(newPricesToPick[15]);
                obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
              }
            }
          }
          const mapped = newPricesToPick.map(O);
          cResult[17] = newPricesToPick;
          cResult[18] = mapped;
        } else {
          class O {
            constructor(arg0, arg1) {
              obj = { value: arg1, label: null };
              obj2 = selectedTemplate(newPricesToPick[15]);
              obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
              return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
            }
          }
          if (cResult[20] === value) {
            class O {
              constructor(arg0, arg1) {
                obj = { value: arg1, label: null };
                obj2 = selectedTemplate(newPricesToPick[15]);
                obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
              const tmp36 = closure_7(tmp(tmp2[12]).Spacer, { size: 20 });
              cResult[23] = tmp36;
              const tmp35 = tmp36;
            } else {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            const _Symbol5 = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
              const stringResult = obj9.string(tmp(tmp2[10]).t.DVCXzm);
              cResult[24] = stringResult;
              const tmp37 = stringResult;
            } else {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            if (cResult[25] !== tmp8) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
              const obj7 = {
                text: tmp37,
                onPress() {
                              return closure_4();
                            }
              };
              const tmp40 = closure_7(tmp(tmp2[17]).Button, obj7);
              cResult[25] = tmp8;
              cResult[26] = tmp40;
            } else {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            const _Symbol6 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
              const obj8 = { variant: "secondary", text: null, onPress: null };
              const intl3 = tmp(tmp2[10]).intl;
              obj8.text = intl3.string(tmp(tmp2[10]).t.h26VOI);
              obj8.onPress = function onPress() {
                return handleCreateFromTemplate(newPricesToPick[18]).hideActionSheet();
              };
              const tmp42 = closure_7(tmp(tmp2[17]).Button, obj8);
              cResult[27] = tmp42;
              const tmp41 = tmp42;
            } else {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            if (cResult[28] !== tmp39) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
              const obj10 = { children: null };
              let items = [tmp39, tmp41];
              obj10.children = items;
              const tmp44 = closure_8(tmp(tmp2[19]).ButtonGroup, obj10);
              cResult[28] = tmp39;
              cResult[29] = tmp44;
            } else {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            if (cResult[30] === tmp32) {
              class O {
                constructor(arg0, arg1) {
                  obj = { value: arg1, label: null };
                  obj2 = selectedTemplate(newPricesToPick[15]);
                  obj.label = obj2.formatMonthlyPriceLabel(selectedTemplate);
                  return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, selectedTemplate);
                }
              }
            }
            const obj11 = { contentContainerStyle: tmp9, children: null };
            const items1 = [tmp12, tmp16, tmp22, tmp25, tmp32, tmp35, tmp43];
            obj11.children = items1;
            const tmp47 = closure_8(tmp(tmp2[20]).BottomSheetScrollView, obj11);
            cResult[30] = tmp32;
            cResult[31] = tmp43;
            cResult[32] = tmp9;
            cResult[33] = tmp12;
            cResult[34] = tmp22;
            cResult[35] = tmp47;
          }
          const obj12 = { hasIcons: false, value, onChange: tmp7, children: tmp28 };
          const tmp34 = closure_7(tmp(tmp2[16]).TableRadioGroup, obj12);
          cResult[20] = value;
          cResult[21] = tmp28;
          cResult[22] = tmp34;
        }
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
  cResult[2] = value;
  cResult[3] = selectedTemplate;
  cResult[4] = handleSelectNewPrice;
  tmp8 = handleSelectNewPrice;
  const tmp5 = value(noop.useState(0), 2);
}) : (function GuildRoleSubscriptionTierTemplatePriceReselectionActionSheet(selectedTemplate) {
  selectedTemplate = selectedTemplate.selectedTemplate;
  ({ handleCreateFromTemplate: importDefault, newPricesToPick } = selectedTemplate);
  value = undefined;
  const tmp2 = value(noop.useState(0), 2);
  value = tmp2[0];
  let obj = { backdropOpacity: 0.8, startExpanded: true, children: null };
  let obj2 = { style: closure_9().container, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: require("useSafeAreaInsets")().bottom }, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = selectedTemplate(newPricesToPick[10]).intl;
  obj4.children = intl.format(selectedTemplate(newPricesToPick[10]).t["5WZ9Ct"], { tierName: selectedTemplate.listings[0].name });
  let items = [closure_7(selectedTemplate(newPricesToPick[11]).Text, obj4), closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 12 }), , , , , ];
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = selectedTemplate(newPricesToPick[10]).intl;
  const obj7 = { price: null };
  const obj5 = { tierName: selectedTemplate.listings[0].name };
  const tmp = closure_9();
  obj7.price = selectedTemplate(newPricesToPick[13]).formatPrice(selectedTemplate.listings[0].price_tier, CurrencyCodes.USD);
  obj6.children = intl2.format(selectedTemplate(newPricesToPick[10]).t["5i7Uhb"], obj7);
  items[2] = closure_7(selectedTemplate(newPricesToPick[11]).Text, obj6);
  items[3] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 24 });
  const obj8 = selectedTemplate(newPricesToPick[13]);
  items[4] = closure_7(selectedTemplate(newPricesToPick[16]).TableRadioGroup, {
    hasIcons: false,
    value,
    onChange: tmp2[1],
    children: newPricesToPick.map((item, value) => {
      const obj = { value, label: selectedTemplate(newPricesToPick[15]).formatMonthlyPriceLabel(item) };
      return closure_1_7(selectedTemplate(newPricesToPick[14]).TableRadioRow, obj, item);
    })
  });
  items[5] = closure_7(selectedTemplate(newPricesToPick[12]).Spacer, { size: 20 });
  const obj10 = { children: null };
  const obj11 = { text: null, onPress: null };
  const intl3 = selectedTemplate(newPricesToPick[10]).intl;
  obj11.text = intl3.string(selectedTemplate(newPricesToPick[10]).t.DVCXzm);
  obj11.onPress = function onPress() {
    const obj = {};
    const merged = Object.assign(selectedTemplate);
    const obj2 = {};
    const merged1 = Object.assign(selectedTemplate.listings[0]);
    obj2.price_tier = newPricesToPick[first];
    const items = [obj2];
    obj.listings = items;
    importDefault(obj, true);
  };
  const items1 = [closure_7(selectedTemplate(newPricesToPick[17]).Button, obj11), ];
  const obj12 = { variant: "secondary", text: null, onPress: null };
  const intl4 = selectedTemplate(newPricesToPick[10]).intl;
  obj12.text = intl4.string(selectedTemplate(newPricesToPick[10]).t.h26VOI);
  obj12.onPress = function onPress() {
    return require("ActionSheetActionCreators").hideActionSheet();
  };
  items1[1] = closure_7(selectedTemplate(newPricesToPick[17]).Button, obj12);
  obj10.children = items1;
  items[6] = closure_8(selectedTemplate(newPricesToPick[19]).ButtonGroup, obj10);
  obj3.children = items;
  obj2.children = closure_8(selectedTemplate(newPricesToPick[20]).BottomSheetScrollView, obj3);
  obj.children = closure_7(View, obj2);
  return closure_7(selectedTemplate(newPricesToPick[21]).BottomSheet, obj);
});