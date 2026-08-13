// discord_app/modules/devtools/native/components/screens/DevToolsShopScreen.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import getUserAgnosticState from "getUserAgnosticState";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { DismissibleContent } from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { FormSwitch } from "../../../../../design/components/Forms/native/FormSwitch.native.tsx";
import { Stack } from "../../../../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { TableSwitchRow } from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import { useToggleDismissibleContentDismissState } from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { wrap: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getUserAgnosticState").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let handleToggleDismissState;
  let isDismissed;
  let obj = initialize;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => store.get("shop_disable_cache"));
  let obj1 = initialize;
  const items1 = [getUserAgnosticState];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.get("shop_include_unpublished"));
  let obj2 = initialize;
  const items2 = [getUserAgnosticState];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.get("shop_show_debug_overlay"));
  let obj3 = initialize;
  const items3 = [getUserAgnosticState];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => store.get("bypass_google_sku_sync"));
  const tmp = createCacheKey();
  const tmp6 = useToggleDismissibleContentDismissState;
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: Themes.space.PX_16, paddingBottom: Themes.space.PX_16 + useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets.bottom };
  ({ isDismissed, handleToggleDismissState } = useToggleDismissibleContentDismissState(DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  obj[1] = obj;
  obj1 = { spacing: 16, children: null };
  obj2 = { title: "Shop Toggles", hasIcons: false, children: null };
  obj3 = { label: "Disable collectibles shop cache", subLabel: "shop_disable_cache", subLabelLineClamp: 1, trailing: null };
  obj3[3] = callback(FormSwitch.FormSwitch, {
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(15090).toggle("shop_disable_cache", arg0);
    }
  });
  const items4 = [callback(TableRowInner.TableRow, obj3), , , , ];
  const obj5 = { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: null };
  obj5[3] = callback(FormSwitch.FormSwitch, {
    value: stateFromStores1,
    onValueChange(arg0) {
      return callback(15090).toggle("shop_include_unpublished", arg0);
    }
  });
  items4[1] = callback(TableRowInner.TableRow, obj5);
  items4[2] = callback(TableSwitchRow.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  const obj7 = { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: null };
  obj7[3] = callback(FormSwitch.FormSwitch, {
    value: stateFromStores2,
    onValueChange(arg0) {
      return callback(15090).toggle("shop_show_debug_overlay", arg0);
    }
  });
  items4[3] = callback(TableRowInner.TableRow, obj7);
  const obj9 = { label: "[Android] Bypass Google SKU sync in collectibles shop", subLabel: "bypass_google_sku_sync", subLabelLineClamp: 1, trailing: null };
  obj9[3] = callback(FormSwitch.FormSwitch, {
    value: stateFromStores3,
    onValueChange(arg0) {
      return callback(15090).toggle("bypass_google_sku_sync", arg0);
    }
  });
  items4[4] = callback(TableRowInner.TableRow, obj9);
  obj2[2] = items4;
  obj1[1] = callback2(TableRowGroupTitle.TableRowGroup, obj2);
  obj[2] = callback(Stack.Stack, obj1);
  return callback(ScrollView, obj);
};