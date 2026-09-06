// === Module 15718: CollectiblesTool ===

// Module 15718 (CollectiblesTool)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import BaseTextButton from "BaseTextButton" /* 4976 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8764 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11077 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

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
    let obj = { style: tmp.section, children: null };
    obj = { style: tmp.sectionHeader, children: null };
    obj = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
    obj.children = closure_1_10(Text_Text.Text, obj);
    const items = [closure_1_10(timestampProducer, obj), , , , ];
    const obj1 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    items[1] = closure_1_10(Text_Text.Text, obj1);
    const obj2 = { variant: "text-xs/normal", style: null, children: null };
    const items1 = [tmp.statusText, statusError];
    obj2.style = items1;
    obj2.children = "Loading\u2026";
    items[2] = closure_1_10(Text_Text.Text, obj2);
    const obj3 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          closure_0();
        }
    };
    items[3] = closure_1_10(BaseTextButton.BaseTextButton, obj3);
    let tmp13Result = null != tmp2;
    if (tmp13Result) {
      const obj4 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
      tmp13Result = closure_1_10(BaseTextButton.BaseTextButton, obj4);
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
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(8203).useFramePreviewOverrideStore;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollContainer: null, section: null, sectionHeader: null, sectionTitle: null, inputContainer: null, inputWrapper: null, inputLabel: null, statusText: null, statusSuccess: null, statusError: null, statusLoading: null, previewContainer: null, previewButton: null, secondaryButton: null, description: null, placeholder: null, placeholderText: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.scrollContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj1 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles.section = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles.sectionHeader = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.sectionTitle = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
createStyles.inputWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
createStyles.inputLabel = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
let obj7 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
createStyles.statusText = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
let obj8 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
createStyles.statusSuccess = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj9 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
createStyles.statusError = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj10 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles.statusLoading = { color: nativeDefault.colors.TEXT_MUTED };
const obj11 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.previewContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj12 = { marginBottom: nativeDefault.space.PX_16 };
createStyles.previewButton = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
let obj13 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
createStyles.secondaryButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
createStyles.description = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
let obj15 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
createStyles.placeholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
createStyles.placeholderText = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_12 = createStyles.createStyles(createStyles);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  [tmp2, require] = _slicedToArray(noop.useState(0), 2);
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
  let obj = require("useStateFromStores");
  const items = [CollectiblesCategoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj1 = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => purchases.purchases);
  let obj2 = require("useStateFromStores");
  const items2 = [CollectiblesCategoryStore];
  let tmp7 = stateFromStores.size > 0;
  const stateFromStores2 = obj2.useStateFromStores(items2, () => CollectiblesCategoryStore.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  ({ isFetching, categories } = str(product[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
  let tmp18Result = tmp7;
  if (!tmp7) {
    let tmp12 = !isFetching;
    if (!isFetching) {
      if (tmp7) {
        categories = stateFromStores;
      }
      tmp12 = categories.size > 0;
    }
    tmp18Result = tmp12;
  }
  _require = tmp18Result;
  const tmp13 = _slicedToArray(noop.useState(""), 2);
  str = tmp13[0];
  const tmp14 = _slicedToArray(noop.useState(null), 2);
  product = tmp14[0];
  _slicedToArray = tmp14[1];
  const tmp16 = _slicedToArray(noop.useState(null), 2);
  noop = tmp16[1];
  const items3 = [str, tmp18Result];
  const effect = noop.useEffect(() => {
    if ("" !== str.trim()) {
      if (closure_0) {
        product = CollectiblesCategoryStore.getProduct(tmp);
        const categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(tmp);
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
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: tmp.scrollContainer, showsVerticalScrollIndicator: false, children: null };
  obj1 = { style: tmp.section, children: null };
  obj2 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" }) };
  const items4 = [closure_10(closure_6, obj2), closure_10(require("ShopSkipCategoriesFilter").ShopSkipCategoriesFilter, {})];
  obj1.children = items4;
  const items5 = [closure_11(closure_6, obj1), , , ];
  const obj4 = { style: tmp.section, children: null };
  const obj5 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" }) };
  const items6 = [closure_10(closure_6, obj5), ];
  const obj7 = { style: tmp.inputContainer, children: null };
  const items7 = [closure_10(require("Text/Text").Text, { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" }), , , , ];
  const obj9 = { style: tmp.inputWrapper, children: null };
  const obj10 = { value: str, onChangeText: tmp13[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
  const obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const obj6 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  const obj8 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  const tmp10 = str(product[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  const tmp21 = closure_5;
  obj10.style = { fontSize: 14, padding: str(product[8]).space.PX_12 };
  obj9.children = closure_10(require("native").TextInput, obj10);
  items7[1] = closure_10(closure_6, obj9);
  tmp18Result = !tmp18Result;
  if (!tmp18Result) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    const obj12 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj12.style = items8;
    tmp18Result = tmp18(tmp2(tmp3[10]).Text, obj12);
  }
  items7[2] = tmp18Result;
  if (tmp18Result) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    tmp18Result = null == product;
  }
  if (tmp18Result) {
    const obj13 = { variant: "text-xs/normal", style: null, children: "Product not found" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj13.style = items9;
    tmp18Result = tmp18(tmp2(tmp3[10]).Text, obj13);
  }
  items7[3] = tmp18Result;
  let tmp20Result = null != product;
  if (tmp20Result) {
    const obj14 = { variant: "text-xs/normal", style: null, children: null };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj14.style = items10;
    const items11 = ["Found: ", product.name];
    obj14.children = items11;
    tmp20Result = tmp20(tmp2(tmp3[10]).Text, obj14);
  }
  items7[4] = tmp20Result;
  obj7.children = items7;
  items6[1] = closure_11(closure_6, obj7);
  obj4.children = items6;
  items5[1] = closure_11(closure_6, obj4);
  const obj15 = { style: tmp.section, children: null };
  const obj16 = { style: tmp.sectionHeader, children: closure_10(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" }) };
  const items12 = [closure_10(closure_6, obj16), ];
  if (null != product) {
    if (null != tmp16[0]) {
      const obj18 = { children: null };
      const obj19 = { style: tmp.previewContainer, children: null };
      const obj20 = { product };
      obj19.children = tmp18(UnpurchasedCollectiblesShopCardV2, obj20);
      const items13 = [tmp18(tmp19, obj19), ];
      const obj21 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                const obj = { product: tmp, useCategoryImage: true };
                obj.open(obj);
              }
            }
      };
      items13[1] = tmp18(tmp2(tmp3[11]).BaseTextButton, obj21);
      obj18.children = items13;
      tmp20Result = tmp20(tmp19, obj18);
    }
    items12[1] = tmp20Result;
    obj15.children = items12;
    items5[2] = tmp20(tmp19, obj15);
    items5[3] = tmp18(FramePreviewOverrideSection, {});
    obj.children = items5;
    obj.children = tmp20(tmp21, obj);
    return tmp18(tmp19, obj);
  }
  const obj22 = { style: tmp.placeholder, children: closure_11(require("Text/Text").Text, { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] }) };
  tmp20Result = tmp18(tmp19, obj22);
};