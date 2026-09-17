// === Module 15854: DevToolsShopScreen ===

// Module 15854 (DevToolsShopScreen)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import Stack_Stack from "Stack/Stack" /* 5060 */;
import TableRow from "TableRow" /* 5693 */;
import TableRowGroup from "TableRowGroup" /* 5775 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7095 */;
import TableSwitchRow from "TableSwitchRow" /* 7314 */;
import FormSwitch from "FormSwitch" /* 7315 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15740 */;
import DevSettingsActions from "DevSettingsActions" /* 15827 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4639 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
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
        return DevSettingsActions.toggle("shop_disable_cache", flag);
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
        return DevSettingsActions.toggle("shop_include_unpublished", flag);
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
        return DevSettingsActions.toggle("shop_show_debug_overlay", flag);
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
        return DevSettingsActions.toggle("bypass_google_sku_sync", flag);
      }
    })
  };
  items4[4] = hasOwnProperty(TableRow.TableRow, obj15);
  obj8.children = items4;
  obj7.children = timestampProducer(TableRowGroup.TableRowGroup, obj8);
  obj5.children = hasOwnProperty(Stack_Stack.Stack, obj7);
  return hasOwnProperty(ScrollView, obj5);
};