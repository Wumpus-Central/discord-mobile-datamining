// discord_app/modules/devtools/native/components/screens/DevToolsShopScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow5 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import FormSwitch from "../../../../../design/components/Forms/native/FormSwitch.native.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import DevSettingsStore from "../../../dev_settings/DevSettingsStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { wrap: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let handleToggleDismissState;
      let isDismissed;
      let items4;
      let obj9;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp27;
      let tmp28;
      let tmp32;
      let tmp33;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(36);
      closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { includeKeyboardHeight: true };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function h() {
          return DevSettingsStore.get("shop_disable_cache");
        };
        cResult[1] = items;
        cResult[2] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DevSettingsStore];
        class L {
          constructor() {
            return DevSettingsStore.get("shop_include_unpublished");
          }
        }
        cResult[3] = items1;
        cResult[4] = L;
        tmp12 = L;
        tmp11 = items1;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult4 = get_initialized;
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [DevSettingsStore];
        class C {
          constructor() {
            return DevSettingsStore.get("shop_show_debug_overlay");
          }
        }
        cResult[5] = items2;
        cResult[6] = C;
        tmp16 = C;
        tmp15 = items2;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const tmpResult5 = get_initialized;
      const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp16);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [DevSettingsStore];
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
        cResult[7] = items3;
        cResult[8] = R;
        tmp20 = R;
        tmp19 = items3;
      } else {
        tmp19 = cResult[7];
        tmp20 = cResult[8];
      }
      const tmpResult6 = get_initialized;
      const stateFromStores3 = tmpResult6.useStateFromStores(tmp19, tmp20);
      const tmp6Result = toggleDismissibleContentDismissStateDefault;
      ({ isDismissed, handleToggleDismissState } = tmp6Result(
        dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
      ));
      tmp6Result(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
      const sum = nativeDefault.space.PX_16 + insets.bottom;
      if (cResult[9] !== sum) {
        const obj3 = { paddingVertical: nativeDefault.space.PX_16, paddingBottom: sum };
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
        cResult[9] = sum;
        cResult[10] = obj3;
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("shop_disable_cache", arg0);
        };
        cResult[11] = fn2;
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
      } else {
        tmp27 = cResult[11];
      }
      if (cResult[12] !== stateFromStores) {
        const obj4 = {
          label: "Disable collectibles shop cache",
          subLabel: "shop_disable_cache",
          subLabelLineClamp: 1,
          trailing: hasOwnProperty(FormSwitch.FormSwitch, tmp30),
        };
        const TableRow = TableRow5.TableRow;
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
        tmp30[0] = stateFromStores;
        tmp30[1] = tmp27;
        const tmp31 = hasOwnProperty(TableRow, obj4);
        cResult[12] = stateFromStores;
        cResult[13] = tmp31;
        tmp28 = tmp31;
      } else {
        tmp28 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function k(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("shop_include_unpublished", arg0);
        };
        cResult[14] = fn3;
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
      } else {
        tmp32 = cResult[14];
      }
      if (cResult[15] !== stateFromStores1) {
        const obj5 = {
          label: "Show unpublished items in collectibles shop",
          subLabel: "shop_include_unpublished",
          subLabelLineClamp: 1,
          trailing: hasOwnProperty(FormSwitch.FormSwitch, tmp35),
        };
        const TableRow2 = TableRow5.TableRow;
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
        tmp35[0] = stateFromStores1;
        tmp35[1] = tmp32;
        const tmp36 = hasOwnProperty(TableRow2, obj5);
        cResult[15] = stateFromStores1;
        cResult[16] = tmp36;
        tmp33 = tmp36;
      } else {
        tmp33 = cResult[16];
      }
      if (cResult[17] === isDismissed) {
        let tmp37;
        let tmp41;
        if (cResult[18] === handleToggleDismissState) {
          tmp37 = cResult[19];
        }
        const _Symbol = Symbol;
        class R {
          constructor() {
            return DevSettingsStore.get("bypass_google_sku_sync");
          }
        }
        if (cResult[21] !== stateFromStores2) {
          const obj6 = {
            label: "Show debug log overlay in collectibles shop",
            subLabel: "shop_show_debug_overlay",
            subLabelLineClamp: 1,
            trailing: hasOwnProperty(FormSwitch.FormSwitch, tmp43),
          };
          const TableRow3 = TableRow5.TableRow;
          class R {
            constructor() {
              return DevSettingsStore.get("bypass_google_sku_sync");
            }
          }
          tmp43[0] = stateFromStores2;
          tmp43[1] = tmp40;
          const tmp44 = hasOwnProperty(TableRow3, obj6);
          cResult[21] = stateFromStores2;
          cResult[22] = tmp44;
          tmp41 = tmp44;
        } else {
          tmp41 = cResult[22];
        }
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle("bypass_google_sku_sync", arg0);
            }
          }
          cResult[23] = P;
          class R {
            constructor() {
              return DevSettingsStore.get("bypass_google_sku_sync");
            }
          }
        } else {
          class P {
            constructor(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle("bypass_google_sku_sync", arg0);
            }
          }
        }
        if (cResult[24] !== stateFromStores3) {
          class P {
            constructor(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle("bypass_google_sku_sync", arg0);
            }
          }
          const obj7 = {
            label: "[Android] Bypass Google SKU sync in collectibles shop",
            subLabel: "bypass_google_sku_sync",
            subLabelLineClamp: 1,
            trailing: hasOwnProperty(FormSwitch.FormSwitch, tmp47),
          };
          const TableRow4 = TableRow5.TableRow;
          class R {
            constructor() {
              return DevSettingsStore.get("bypass_google_sku_sync");
            }
          }
          tmp47[0] = stateFromStores3;
          tmp47[1] = tmp45;
          cResult[24] = stateFromStores3;
          cResult[25] = hasOwnProperty(TableRow4, obj7);
          const tmp48 = hasOwnProperty(TableRow4, obj7);
        } else {
          class P {
            constructor(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle("bypass_google_sku_sync", arg0);
            }
          }
        }
        if (cResult[26] === tmp28) {
          class P {
            constructor(arg0) {
              const obj = require("DevSettingsActions");
              return obj.toggle("bypass_google_sku_sync", arg0);
            }
          }
        }
        const obj8 = { spacing: 16, children: metroRequire(TableRowGroup2.TableRowGroup, obj9) };
        const Stack = Stack_Stack.Stack;
        obj9 = { title: "Shop Toggles", hasIcons: false, children: items4 };
        items4 = [tmp28, tmp33, tmp37, tmp41, tmp46];
        cResult[26] = tmp28;
        cResult[27] = tmp33;
        cResult[28] = tmp37;
        cResult[29] = tmp41;
        cResult[30] = tmp46;
        cResult[31] = hasOwnProperty(Stack, obj8);
        const tmp52 = hasOwnProperty(Stack, obj8);
      }
      const tmp38 = hasOwnProperty(TableSwitchRow.TableSwitchRow, {
        label: "Collectibles Marketing",
        subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING",
        subLabelLineClamp: 1,
        value: isDismissed,
        onValueChange: handleToggleDismissState,
      });
      cResult[17] = isDismissed;
      cResult[18] = handleToggleDismissState;
      cResult[19] = tmp38;
      tmp37 = tmp38;
    }
  : () => {
      let Stack;
      let TableRowGroup;
      let handleToggleDismissState;
      let isDismissed;
      let items4;
      let obj10;
      let obj12;
      let obj14;
      let obj16;
      let obj7;
      let obj8;
      const tmp = closure_7();
      const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
      let obj = get_initialized;
      const items = [DevSettingsStore];
      const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_disable_cache"));
      const items1 = [DevSettingsStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => DevSettingsStore.get("shop_include_unpublished"));
      const items2 = [DevSettingsStore];
      const obj3 = get_initialized;
      const stateFromStores2 = obj3.useStateFromStores(items2, () => DevSettingsStore.get("shop_show_debug_overlay"));
      const items3 = [DevSettingsStore];
      const obj4 = get_initialized;
      const stateFromStores3 = obj4.useStateFromStores(items3, () => DevSettingsStore.get("bypass_google_sku_sync"));
      const tmp6 = toggleDismissibleContentDismissStateDefault;
      const obj5 = {
        style: tmp.wrap,
        contentContainerStyle: {
          paddingVertical: nativeDefault.space.PX_16,
          paddingBottom: nativeDefault.space.PX_16 + insets.bottom,
        },
        children: hasOwnProperty(Stack, obj7),
      };
      ({ isDismissed, handleToggleDismissState } = tmp6(
        dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
      ));
      const tmp6Result = tmp6(dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
      obj7 = { spacing: 16, children: metroRequire(TableRowGroup, obj8) };
      ({ paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom });
      Stack = Stack_Stack.Stack;
      obj8 = { title: "Shop Toggles", hasIcons: false, children: items4 };
      TableRowGroup = TableRowGroup2.TableRowGroup;
      const obj9 = {
        label: "Disable collectibles shop cache",
        subLabel: "shop_disable_cache",
        subLabelLineClamp: 1,
        trailing: hasOwnProperty(FormSwitch.FormSwitch, obj10),
      };
      const TableRow = TableRow5.TableRow;
      obj10 = {
        value: stateFromStores,
        onValueChange(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("shop_disable_cache", arg0);
        },
      };
      items4 = [hasOwnProperty(TableRow, obj9), , , ,];
      const obj11 = {
        label: "Show unpublished items in collectibles shop",
        subLabel: "shop_include_unpublished",
        subLabelLineClamp: 1,
        trailing: hasOwnProperty(FormSwitch.FormSwitch, obj12),
      };
      const TableRow2 = TableRow5.TableRow;
      obj12 = {
        value: stateFromStores1,
        onValueChange(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("shop_include_unpublished", arg0);
        },
      };
      items4[1] = hasOwnProperty(TableRow2, obj11);
      items4[2] = hasOwnProperty(TableSwitchRow.TableSwitchRow, {
        label: "Collectibles Marketing",
        subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING",
        subLabelLineClamp: 1,
        value: isDismissed,
        onValueChange: handleToggleDismissState,
      });
      const obj13 = {
        label: "Show debug log overlay in collectibles shop",
        subLabel: "shop_show_debug_overlay",
        subLabelLineClamp: 1,
        trailing: hasOwnProperty(FormSwitch.FormSwitch, obj14),
      };
      const TableRow3 = TableRow5.TableRow;
      obj14 = {
        value: stateFromStores2,
        onValueChange(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("shop_show_debug_overlay", arg0);
        },
      };
      items4[3] = hasOwnProperty(TableRow3, obj13);
      const obj15 = {
        label: "[Android] Bypass Google SKU sync in collectibles shop",
        subLabel: "bypass_google_sku_sync",
        subLabelLineClamp: 1,
        trailing: hasOwnProperty(FormSwitch.FormSwitch, obj16),
      };
      const TableRow4 = TableRow5.TableRow;
      obj16 = {
        value: stateFromStores3,
        onValueChange(arg0) {
          const obj = require("DevSettingsActions");
          return obj.toggle("bypass_google_sku_sync", arg0);
        },
      };
      items4[4] = hasOwnProperty(TableRow4, obj15);
      return hasOwnProperty(ScrollView, obj5);
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default tmp4;
