// === Module 15838: CollectiblesTool ===

// Module 15838 (CollectiblesTool)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import BaseTextButton from "BaseTextButton" /* 5061 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8904 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11230 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7652 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7667 */;

const require = globalThis.__r;

require = fn;
function FramePreviewOverrideSection() {
  const tmp = closure_12();
  const tmp2 = closure_9((override) => override.override);
  const tmp3 = closure_9((status) => status.status);
  let str = closure_9((error) => error.error);
  closure_0 = closure_9((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    const obj = { style: tmp.section, children: null };
    const obj2 = { style: tmp.sectionHeader, children: null };
    const obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
    obj2.children = closure_1_10(Text_Text.Text, obj3);
    const items = [closure_1_10(timestampProducer, obj2), , , , ];
    const obj4 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    items[1] = closure_1_10(Text_Text.Text, obj4);
    const obj5 = { variant: "text-xs/normal", style: null, children: null };
    const items1 = [tmp.statusText, statusError];
    obj5.style = items1;
    obj5.children = "Loading\u2026";
    items[2] = closure_1_10(Text_Text.Text, obj5);
    const obj6 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          closure_0();
        }
    };
    items[3] = closure_1_10(BaseTextButton.BaseTextButton, obj6);
    let tmp13Result = null != tmp2;
    if (tmp13Result) {
      const obj7 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
      tmp13Result = closure_1_10(BaseTextButton.BaseTextButton, obj7);
    }
    items[4] = tmp13Result;
    obj.children = items;
    return closure_1_11(timestampProducer, obj);
  } else if (tmp5) {
    if (str == null) {
      str = "Failed to load";
    }
  } else {
    let str3 = "No frame loaded";
    if (null != tmp2) {
      const frameKey = tmp2.frameKey;
      let str4 = "s";
      if (1 === tmp2.layers.length) {
        str4 = "";
      }
      const _HermesInternal = HermesInternal;
      str3 = "Showing \"" + frameKey + "\" \u00B7 " + length + " layer" + str4;
    }
  }
  tmp4 = closure_9((clear) => clear.clear);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(8332).useFramePreviewOverrideStore;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollContainer: null, section: null, sectionHeader: null, sectionTitle: null, inputContainer: null, inputWrapper: null, inputLabel: null, statusText: null, statusSuccess: null, statusError: null, statusLoading: null, previewContainer: null, previewButton: null, secondaryButton: null, description: null, placeholder: null, placeholderText: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.section = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.sectionHeader = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.sectionTitle = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
let obj7 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
obj2.inputWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
obj2.inputLabel = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
let obj10 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
obj2.statusText = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
let obj11 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
obj2.statusSuccess = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj12 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.statusError = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.statusLoading = { color: nativeDefault.colors.TEXT_MUTED };
let obj14 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.previewContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj15 = { marginBottom: nativeDefault.space.PX_16 };
obj2.previewButton = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
let obj16 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
obj2.secondaryButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
let obj17 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
obj2.description = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
let obj18 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
obj2.placeholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj19 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_12 = createStyles.createStyles(obj2);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  [tmp2, require] = noop.useState(0);
  const layoutEffect = noop.useLayoutEffect(() => {
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    CollectiblesPurchaseStore.getPurchase = () => {

    };
    CollectiblesPurchaseStore.emitChange();
    require("logAppStart");
    return () => {
      CollectiblesPurchaseStore.getPurchase = getPurchase;
      CollectiblesPurchaseStore.emitChange();
    };
  }, []);
  const obj = {};
  const tmp = _slicedToArray(noop.useState(0), 2);
  const merged = Object.assign(arg0);
  return closure_10(CollectiblesShopCardV2Default, obj, tmp2);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default function _default() {
  const tmp = closure_12();
  const items = [CollectiblesCategoryStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => purchases.purchases);
  let obj2 = require("useStateFromStores");
  const items2 = [CollectiblesCategoryStore];
  let tmp7 = stateFromStores.size > 0;
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(items2, () => CollectiblesCategoryStore.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  const obj3 = require("useStateFromStores");
  const tmp9 = str;
  ({ isFetching, categories } = str(product[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
  let tmp18Result2 = tmp7;
  if (!tmp7) {
    let tmp12 = !isFetching;
    if (!isFetching) {
      if (tmp7) {
        categories = stateFromStores;
      }
      tmp12 = categories.size > 0;
    }
    tmp18Result2 = tmp12;
  }
  _require = tmp18Result2;
  const tmp13 = _slicedToArray(noop.useState(""), 2);
  [product, _slicedToArray] = noop.useState(null);
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  noop = tmp16[1];
  const items3 = [tmp13[0], tmp18Result2];
  const effect = noop.useEffect(() => {
    if ("" !== str.trim()) {
      if (closure_0) {
        product = CollectiblesCategoryStore.getProduct(str);
        const categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(str);
        if (null != product) {
          if (null != categoryForProduct) {
            closure_3(product);
            closure_4(categoryForProduct);
          }
        }
        closure_3(null);
        closure_4(null);
      }
    }
    closure_3(null);
    closure_4(null);
  }, items3);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { contentContainerStyle: tmp.scrollContainer, showsVerticalScrollIndicator: false, children: null };
  const obj6 = { style: tmp.section, children: null };
  const obj7 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" }) };
  const items4 = [closure_10(closure_6, obj7), closure_10(require("ShopSkipCategoriesFilter").ShopSkipCategoriesFilter, {})];
  obj6.children = items4;
  const items5 = [closure_11(closure_6, obj6), , , ];
  const obj9 = { style: tmp.section, children: null };
  const obj10 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" }) };
  const items6 = [closure_10(closure_6, obj10), ];
  const obj12 = { style: tmp.inputContainer, children: null };
  const items7 = [closure_10(require("Text/Text").Text, { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" }), , , , ];
  const obj14 = { style: tmp.inputWrapper, children: null };
  const obj15 = { value: tmp13[0], onChangeText: tmp13[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
  const obj11 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  const obj13 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  const obj8 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const tmp10 = str(product[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  obj15.style = { fontSize: 14, padding: tmp9(product[8]).space.PX_12 };
  obj14.children = closure_10(require("native").TextInput, obj15);
  items7[1] = closure_10(closure_6, obj14);
  let tmp18Result = !tmp18Result2;
  if (!tmp18Result2) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    const obj17 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj17.style = items8;
    tmp18Result = closure_10(tmp2(tmp3[10]).Text, obj17);
  }
  items7[2] = tmp18Result;
  if (tmp18Result2) {
    tmp18Result2 = "" !== str.trim();
  }
  if (tmp18Result2) {
    tmp18Result2 = null == product;
  }
  if (tmp18Result2) {
    const obj18 = { variant: "text-xs/normal", style: null, children: "Product not found" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj18.style = items9;
    tmp18Result2 = closure_10(tmp2(tmp3[10]).Text, obj18);
  }
  items7[3] = tmp18Result2;
  let tmp20Result = null != product;
  if (tmp20Result) {
    const obj19 = { variant: "text-xs/normal", style: null, children: null };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj19.style = items10;
    const items11 = ["Found: ", product.name];
    obj19.children = items11;
    tmp20Result = closure_11(tmp2(tmp3[10]).Text, obj19);
  }
  items7[4] = tmp20Result;
  obj12.children = items7;
  items6[1] = closure_11(closure_6, obj12);
  obj9.children = items6;
  items5[1] = closure_11(closure_6, obj9);
  const obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" }) };
  const items12 = [closure_10(closure_6, obj21), ];
  if (null != product) {
    if (null != tmp16[0]) {
      const obj23 = { children: null };
      const obj24 = { style: tmp.previewContainer, children: null };
      const obj25 = { product };
      obj24.children = closure_10(UnpurchasedCollectiblesShopCardV2, obj25);
      const items13 = [closure_10(closure_6, obj24), ];
      const obj26 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                ProductPurchaseSuccessActionCreatorsDefault.open(obj2);
              }
            }
      };
      items13[1] = closure_10(tmp2(tmp3[11]).BaseTextButton, obj26);
      obj23.children = items13;
      let tmp20Result2 = closure_11(closure_6, obj23);
    }
    items12[1] = tmp20Result2;
    obj20.children = items12;
    items5[2] = closure_11(closure_6, obj20);
    items5[3] = closure_10(FramePreviewOverrideSection, {});
    obj5.children = items5;
    obj4.children = closure_11(closure_5, obj5);
    return closure_10(closure_6, obj4);
  }
  const obj27 = { style: tmp.placeholder, children: closure_11(require("Text/Text").Text, { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] }) };
  tmp20Result2 = closure_10(closure_6, obj27);
  const obj16 = { fontSize: 14, padding: tmp9(product[8]).space.PX_12 };
  const obj22 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" };
  const obj28 = { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] };
};