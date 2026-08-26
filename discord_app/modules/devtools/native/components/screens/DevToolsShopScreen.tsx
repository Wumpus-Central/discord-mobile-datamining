// === Module 15344: DevToolsShopScreen ===

// Module 15344 (DevToolsShopScreen)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import Stack from "Stack" /* 4877 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5541 */;
import TableRowInner from "TableRowInner" /* 5546 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5939 */;
import TableSwitchRow from "TableSwitchRow" /* 5940 */;
import FormSwitch from "FormSwitch" /* 5941 */;
import useToggleDismissibleContentDismissStateDefault from "useToggleDismissibleContentDismissState" /* 15243 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_4 from "getUserAgnosticState" /* 4443 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { wrap: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsShopScreen.tsx");

export default function DevToolsShopScreen() {
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => store.get("shop_disable_cache"));
  obj1 = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.get("shop_include_unpublished"));
  let obj2 = initialize;
  const items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.get("shop_show_debug_overlay"));
  let obj3 = initialize;
  const items3 = [closure_4];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => store.get("bypass_google_sku_sync"));
  const tmp = callback3();
  const tmp6 = useToggleDismissibleContentDismissStateDefault;
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  ({ isDismissed, handleToggleDismissState } = useToggleDismissibleContentDismissStateDefault(DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  obj[1] = obj;
  obj1 = { spacing: 16, children: null };
  obj2 = { title: "Shop Toggles", hasIcons: false, children: null };
  obj3 = { label: "Disable collectibles shop cache", subLabel: "shop_disable_cache", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj4) };
  const items4 = [callback(TableRowInner.TableRow, obj3), , , , ];
  obj4 = {
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(15317).toggle("shop_disable_cache", arg0);
    }
  };
  const tmp6Result = useToggleDismissibleContentDismissStateDefault(DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING);
  items4[1] = callback(TableRowInner.TableRow, { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj6) });
  items4[2] = callback(TableSwitchRow.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  const obj5 = { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj6) };
  items4[3] = callback(TableRowInner.TableRow, { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj8) });
  const obj7 = { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj8) };
  items4[4] = callback(TableRowInner.TableRow, { label: "[Android] Bypass Google SKU sync in collectibles shop", subLabel: "bypass_google_sku_sync", subLabelLineClamp: 1, trailing: callback(FormSwitch.FormSwitch, obj10) });
  obj2[2] = items4;
  obj1[1] = callback2(TableRowGroupTitle.TableRowGroup, obj2);
  obj[2] = callback(Stack.Stack, obj1);
  return callback(ScrollView, obj);
};