// discord_app/modules/devtools/native/components/screens/DevToolsShopScreen.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import FormSwitch from "../../../../../design/components/Forms/native/FormSwitch.native.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import DevSettingsActions from "../../../dev_settings/DevSettingsActions.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../dev_settings/DevSettingsStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { wrap: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.wrap = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let obj = initialize;
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("shop_disable_cache"));
  let obj1 = initialize;
  const items1 = [DevSettingsStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => DevSettingsStore.get("shop_include_unpublished"));
  let obj2 = initialize;
  const items2 = [DevSettingsStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => DevSettingsStore.get("shop_show_debug_overlay"));
  let obj3 = initialize;
  const items3 = [DevSettingsStore];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => DevSettingsStore.get("bypass_google_sku_sync"));
  const tmp = closure_7();
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = {
    paddingVertical: nativeDefault.space.PX_16,
    paddingBottom:
      nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom,
  };
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(
    dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
  ));
  obj.contentContainerStyle = obj;
  obj1 = { spacing: 16, children: null };
  obj2 = { title: "Shop Toggles", hasIcons: false, children: null };
  obj3 = {
    label: "Disable collectibles shop cache",
    subLabel: "shop_disable_cache",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores,
      onValueChange(flag) {
        return DevSettingsActions.toggle("shop_disable_cache", flag);
      },
    }),
  };
  const items4 = [hasOwnProperty(TableRow.TableRow, obj3), , , ,];
  const obj5 = {
    label: "Show unpublished items in collectibles shop",
    subLabel: "shop_include_unpublished",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores1,
      onValueChange(flag) {
        return DevSettingsActions.toggle("shop_include_unpublished", flag);
      },
    }),
  };
  items4[1] = hasOwnProperty(TableRow.TableRow, obj5);
  items4[2] = hasOwnProperty(TableSwitchRow.TableSwitchRow, {
    label: "Collectibles Marketing",
    subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING",
    subLabelLineClamp: 1,
    value: isDismissed,
    onValueChange: handleToggleDismissState,
  });
  const obj7 = {
    label: "Show debug log overlay in collectibles shop",
    subLabel: "shop_show_debug_overlay",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores2,
      onValueChange(flag) {
        return DevSettingsActions.toggle("shop_show_debug_overlay", flag);
      },
    }),
  };
  items4[3] = hasOwnProperty(TableRow.TableRow, obj7);
  const obj9 = {
    label: "[Android] Bypass Google SKU sync in collectibles shop",
    subLabel: "bypass_google_sku_sync",
    subLabelLineClamp: 1,
    trailing: hasOwnProperty(FormSwitch.FormSwitch, {
      value: stateFromStores3,
      onValueChange(flag) {
        return DevSettingsActions.toggle("bypass_google_sku_sync", flag);
      },
    }),
  };
  items4[4] = hasOwnProperty(TableRow.TableRow, obj9);
  obj2.children = items4;
  obj1.children = timestampProducer(TableRowGroup.TableRowGroup, obj2);
  obj.children = hasOwnProperty(Stack_Stack.Stack, obj1);
  return hasOwnProperty(ScrollView, obj);
}
