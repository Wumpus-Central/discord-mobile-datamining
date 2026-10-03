// === Module 15593: DevToolsShopScreen ===

// Module 15593 (DevToolsShopScreen)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import TableRow from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import TableSwitchRow from "TableSwitchRow" /* 6698 */;
import FormSwitch from "FormSwitch" /* 6699 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15442 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;

const require = globalThis.__r;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(36);
  closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function h() {
      return DevSettingsStore.get("shop_disable_cache");
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DevSettingsStore];
    class L {
      constructor() {
        return closure_1_4.get("shop_include_unpublished");
      }
    }
    cResult[3] = items1;
    cResult[4] = L;
    let tmp12 = L;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [DevSettingsStore];
    class C {
      constructor() {
        return closure_1_4.get("shop_show_debug_overlay");
      }
    }
    cResult[5] = items2;
    cResult[6] = C;
    let tmp16 = C;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[5];
    tmp16 = cResult[6];
  }
  const tmpResult4 = initialize;
  const stateFromStores2 = initialize.useStateFromStores(tmp15, tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [DevSettingsStore];
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
    cResult[7] = items3;
    cResult[8] = R;
    let tmp20 = R;
    let tmp19 = items3;
  } else {
    tmp19 = cResult[7];
    tmp20 = cResult[8];
  }
  const tmpResult5 = initialize;
  const stateFromStores3 = initialize.useStateFromStores(tmp19, tmp20);
  const tmpResult6 = initialize;
  const tmp6Result = toggleDismissibleContentDismissStateDefault;
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  const sum = nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom;
  if (cResult[9] !== sum) {
    const obj3 = { paddingVertical: nativeDefault.space.PX_16, paddingBottom: sum };
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
    cResult[9] = sum;
    cResult[10] = obj3;
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f(flag) {
      return require("DevSettingsActions").toggle("shop_disable_cache", flag);
    };
    cResult[11] = fn2;
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
  } else {
    const tmp27 = cResult[11];
  }
  if (cResult[12] !== stateFromStores) {
    const obj4 = { label: "Disable collectibles shop cache", subLabel: "shop_disable_cache", subLabelLineClamp: 1, trailing: null };
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
    tmp30[0] = stateFromStores;
    tmp30[1] = tmp27;
    obj4.trailing = hasOwnProperty(FormSwitch.FormSwitch, tmp30);
    const tmp31 = hasOwnProperty(TableRow.TableRow, obj4);
    cResult[12] = stateFromStores;
    cResult[13] = tmp31;
    let tmp28 = tmp31;
  } else {
    tmp28 = cResult[13];
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function k(flag) {
      return require("DevSettingsActions").toggle("shop_include_unpublished", flag);
    };
    cResult[14] = fn3;
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
  } else {
    const tmp32 = cResult[14];
  }
  if (cResult[15] !== stateFromStores1) {
    const obj5 = { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: null };
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
    tmp35[0] = stateFromStores1;
    tmp35[1] = tmp32;
    obj5.trailing = hasOwnProperty(FormSwitch.FormSwitch, tmp35);
    const tmp36 = hasOwnProperty(TableRow.TableRow, obj5);
    cResult[15] = stateFromStores1;
    cResult[16] = tmp36;
    let tmp33 = tmp36;
  } else {
    tmp33 = cResult[16];
  }
  if (cResult[17] === isDismissed) {
    if (cResult[18] === handleToggleDismissState) {
      let tmp37 = cResult[19];
    }
    const _Symbol = Symbol;
    class R {
      constructor() {
        return closure_1_4.get("bypass_google_sku_sync");
      }
    }
    if (cResult[21] !== stateFromStores2) {
      const obj6 = { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: null };
      class R {
        constructor() {
          return closure_1_4.get("bypass_google_sku_sync");
        }
      }
      tmp43[0] = stateFromStores2;
      tmp43[1] = tmp40;
      obj6.trailing = hasOwnProperty(FormSwitch.FormSwitch, tmp43);
      const tmp44 = hasOwnProperty(TableRow.TableRow, obj6);
      cResult[21] = stateFromStores2;
      cResult[22] = tmp44;
      let tmp41 = tmp44;
    } else {
      tmp41 = cResult[22];
    }
    const _Symbol2 = Symbol;
    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[12]);
          return obj.toggle("bypass_google_sku_sync", arg0);
        }
      }
      cResult[23] = P;
      class R {
        constructor() {
          return closure_1_4.get("bypass_google_sku_sync");
        }
      }
    } else {
      class P {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[12]);
          return obj.toggle("bypass_google_sku_sync", arg0);
        }
      }
    }
    if (cResult[24] !== stateFromStores3) {
      class P {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[12]);
          return obj.toggle("bypass_google_sku_sync", arg0);
        }
      }
      const obj7 = { label: "[Android] Bypass Google SKU sync in collectibles shop", subLabel: "bypass_google_sku_sync", subLabelLineClamp: 1, trailing: null };
      class R {
        constructor() {
          return closure_1_4.get("bypass_google_sku_sync");
        }
      }
      tmp47[0] = stateFromStores3;
      tmp47[1] = tmp45;
      obj7.trailing = hasOwnProperty(FormSwitch.FormSwitch, tmp47);
      const tmp48 = hasOwnProperty(TableRow.TableRow, obj7);
      cResult[24] = stateFromStores3;
      cResult[25] = tmp48;
    } else {
      class P {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[12]);
          return obj.toggle("bypass_google_sku_sync", arg0);
        }
      }
    }
    if (cResult[26] === tmp28) {
      class P {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[12]);
          return obj.toggle("bypass_google_sku_sync", arg0);
        }
      }
    }
    const obj8 = { spacing: 16, children: null };
    const obj9 = { title: "Shop Toggles", hasIcons: false, children: null };
    const items4 = [tmp28, tmp33, tmp37, tmp41, tmp46];
    obj9.children = items4;
    obj8.children = timestampProducer(TableRowGroup.TableRowGroup, obj9);
    const tmp52 = hasOwnProperty(Stack_Stack.Stack, obj8);
    cResult[26] = tmp28;
    cResult[27] = tmp33;
    cResult[28] = tmp37;
    cResult[29] = tmp41;
    cResult[30] = tmp46;
    cResult[31] = tmp52;
  }
  const tmp38 = hasOwnProperty(TableSwitchRow.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  cResult[17] = isDismissed;
  cResult[18] = handleToggleDismissState;
  cResult[19] = tmp38;
  tmp37 = tmp38;
  const tmp6ResultResult = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
}) : (() => {
  const tmp = closure_7();
  const items = [DevSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => DevSettingsStore.get("shop_disable_cache"));
  const items1 = [DevSettingsStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => DevSettingsStore.get("shop_include_unpublished"));
  const items2 = [DevSettingsStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => DevSettingsStore.get("shop_show_debug_overlay"));
  const items3 = [DevSettingsStore];
  const stateFromStores3 = initialize.useStateFromStores(items3, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const obj5 = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const tmp6Result = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
  ({ isDismissed, handleToggleDismissState } = tmp6Result);
  obj5.contentContainerStyle = { paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  const obj7 = { spacing: 16, children: null };
  const obj8 = { title: "Shop Toggles", hasIcons: false, children: null };
  const obj9 = {
    label: "Disable collectibles shop cache",
    subLabel: "shop_disable_cache",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores,
      onValueChange(flag) {
        return require("DevSettingsActions").toggle("shop_disable_cache", flag);
      }
    })
  };
  const items4 = [hasOwnProperty(TableRow.TableRow, obj9), , , , ];
  const obj11 = {
    label: "Show unpublished items in collectibles shop",
    subLabel: "shop_include_unpublished",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores1,
      onValueChange(flag) {
        return require("DevSettingsActions").toggle("shop_include_unpublished", flag);
      }
    })
  };
  items4[1] = hasOwnProperty(TableRow.TableRow, obj11);
  items4[2] = hasOwnProperty(TableSwitchRow.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  const obj13 = {
    label: "Show debug log overlay in collectibles shop",
    subLabel: "shop_show_debug_overlay",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores2,
      onValueChange(flag) {
        return require("DevSettingsActions").toggle("shop_show_debug_overlay", flag);
      }
    })
  };
  items4[3] = hasOwnProperty(TableRow.TableRow, obj13);
  const obj15 = {
    label: "[Android] Bypass Google SKU sync in collectibles shop",
    subLabel: "bypass_google_sku_sync",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores3,
      onValueChange(flag) {
        return require("DevSettingsActions").toggle("bypass_google_sku_sync", flag);
      }
    })
  };
  items4[4] = hasOwnProperty(TableRow.TableRow, obj15);
  obj8.children = items4;
  obj7.children = timestampProducer(TableRowGroup.TableRowGroup, obj8);
  obj5.children = hasOwnProperty(Stack_Stack.Stack, obj7);
  return hasOwnProperty(ScrollView, obj5);
});