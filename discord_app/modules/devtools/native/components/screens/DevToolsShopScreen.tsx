// === Module 14901: DevToolsShopScreen ===

// Module 14901 (DevToolsShopScreen)
import "noop";
import { ScrollView } from "get ActivityIndicator";
import getUserAgnosticState from "getUserAgnosticState";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  let obj = require(589) /* initialize */;
  const items = [getUserAgnosticState];
  const stateFromStores = obj.useStateFromStores(items, () => store.get("shop_disable_cache"));
  let obj1 = require(589) /* initialize */;
  const items1 = [getUserAgnosticState];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.get("shop_include_unpublished"));
  let obj2 = require(589) /* initialize */;
  const items2 = [getUserAgnosticState];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.get("shop_show_debug_overlay"));
  let obj3 = require(589) /* initialize */;
  const items3 = [getUserAgnosticState];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => store.get("bypass_google_sku_sync"));
  const tmp = createCacheKey();
  const tmp6 = importDefault(14800);
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: importDefault(712).space.PX_16, paddingBottom: importDefault(712).space.PX_16 + importDefault(5281)({ includeKeyboardHeight: true }).insets.bottom };
  ({ isDismissed, handleToggleDismissState } = importDefault(14800)(require(1358) /* DismissibleContent */.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING));
  obj[1] = obj;
  obj1 = { spacing: 16, children: null };
  obj2 = { title: "Shop Toggles", hasIcons: false, children: null };
  obj3 = { label: "Disable collectibles shop cache", subLabel: "shop_disable_cache", subLabelLineClamp: 1, trailing: null };
  obj3[3] = callback(require(5622) /* FormSwitch */.FormSwitch, {
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(14874).toggle("shop_disable_cache", arg0);
    }
  });
  const items4 = [callback(require(5286) /* TableRowInner */.TableRow, obj3), , , , ];
  const obj5 = { label: "Show unpublished items in collectibles shop", subLabel: "shop_include_unpublished", subLabelLineClamp: 1, trailing: null };
  obj5[3] = callback(require(5622) /* FormSwitch */.FormSwitch, {
    value: stateFromStores1,
    onValueChange(arg0) {
      return callback(14874).toggle("shop_include_unpublished", arg0);
    }
  });
  items4[1] = callback(require(5286) /* TableRowInner */.TableRow, obj5);
  items4[2] = callback(require(5621) /* TableSwitchRow */.TableSwitchRow, { label: "Collectibles Marketing", subLabel: "COLLECTIBLES_SHOP_ENTRY_MARKETING", subLabelLineClamp: 1, value: isDismissed, onValueChange: handleToggleDismissState });
  const obj7 = { label: "Show debug log overlay in collectibles shop", subLabel: "shop_show_debug_overlay", subLabelLineClamp: 1, trailing: null };
  obj7[3] = callback(require(5622) /* FormSwitch */.FormSwitch, {
    value: stateFromStores2,
    onValueChange(arg0) {
      return callback(14874).toggle("shop_show_debug_overlay", arg0);
    }
  });
  items4[3] = callback(require(5286) /* TableRowInner */.TableRow, obj7);
  const obj9 = { label: "[Android] Bypass Google SKU sync in collectibles shop", subLabel: "bypass_google_sku_sync", subLabelLineClamp: 1, trailing: null };
  obj9[3] = callback(require(5622) /* FormSwitch */.FormSwitch, {
    value: stateFromStores3,
    onValueChange(arg0) {
      return callback(14874).toggle("bypass_google_sku_sync", arg0);
    }
  });
  items4[4] = callback(require(5286) /* TableRowInner */.TableRow, obj9);
  obj2[2] = items4;
  obj1[1] = callback2(require(5620) /* TableRowGroupTitle */.TableRowGroup, obj2);
  obj[2] = callback(require(4664) /* Stack */.Stack, obj1);
  return callback(ScrollView, obj);
};