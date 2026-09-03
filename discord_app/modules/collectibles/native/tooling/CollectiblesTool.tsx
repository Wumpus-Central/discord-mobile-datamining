// === Module 15560: FramePreviewOverrideSection ===

// Module 15560 (FramePreviewOverrideSection)
import ThemesDefault from "Themes" /* 709 */;
import CollectiblesShopCardInternalV2Default from "CollectiblesShopCardInternalV2" /* 8906 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "updateCategoriesAndProducts" /* 7297 */;
import closure_8 from "map" /* 7313 */;
import { useFramePreviewOverrideStore as closure_9 } from "measure" /* 8552 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function FramePreviewOverrideSection() {
  const tmp = callback5();
  const tmp2 = callback2((override) => override.override);
  const tmp3 = callback2((status) => status.status);
  let str = callback2((error) => error.error);
  const _require = callback2((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    let obj = { style: null, children: null };
    obj[0] = tmp.section;
    obj = { style: null, children: null };
    obj[0] = tmp.sectionHeader;
    obj = { variant: "heading-md/semibold", style: null, children: "Frame Preview Override" };
    obj[1] = tmp.sectionTitle;
    obj[1] = callback3(_require(4474).Text, obj);
    const items = [callback3(closure_6, obj), , , , ];
    obj1 = { variant: "text-sm/normal", style: null, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    obj1[1] = tmp.description;
    items[1] = callback3(_require(4474).Text, obj1);
    const obj2 = { variant: "text-xs/normal", style: null, children: null };
    const items1 = [tmp.statusText, statusError];
    obj2[1] = items1;
    obj2[2] = "Loading\u2026";
    items[2] = callback3(_require(4474).Text, obj2);
    const obj3 = { pillStyle: null, text: "Load from device", onPress: null };
    obj3[0] = tmp.secondaryButton;
    obj3[2] = function onPress() {
      callback();
    };
    items[3] = callback3(_require(4930).BaseTextButton, obj3);
    let tmp13Result = null != tmp2;
    if (tmp13Result) {
      const obj4 = { pillStyle: null, text: "Clear override", onPress: null };
      obj4[0] = tmp.secondaryButton;
      obj4[2] = tmp4;
      tmp13Result = callback3(_require(4930).BaseTextButton, obj4);
    }
    items[4] = tmp13Result;
    obj[1] = items;
    return closure_11(closure_6, obj);
  } else if (tmp5) {
    if (str == null) {
      str = "Failed to load";
    }
    let str3 = str;
  } else {
    str3 = "No frame loaded";
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
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, scrollContainer: null, section: null, sectionHeader: null, sectionTitle: null, inputContainer: null, inputWrapper: null, inputLabel: null, statusText: null, statusSuccess: null, statusError: null, statusLoading: null, previewContainer: null, previewButton: null, secondaryButton: null, description: null, placeholder: null, placeholderText: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
let obj1 = { padding: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, padding: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, padding: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = { flex: 1, color: ThemesDefault.colors.TEXT_DEFAULT };
let obj4 = { flex: 1, color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[5] = { marginBottom: ThemesDefault.space.PX_16 };
let obj5 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, padding: ThemesDefault.space.PX_4 };
const obj6 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, padding: ThemesDefault.space.PX_4 };
createCacheKey[7] = { marginBottom: ThemesDefault.space.PX_8, color: ThemesDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
let obj7 = { marginBottom: ThemesDefault.space.PX_8, color: ThemesDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
createCacheKey[8] = { marginTop: ThemesDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
let obj8 = { marginTop: ThemesDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
createCacheKey[9] = { color: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj9 = { color: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE };
createCacheKey[10] = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj10 = { color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
createCacheKey[11] = { color: ThemesDefault.colors.TEXT_MUTED };
let obj11 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[12] = { marginBottom: ThemesDefault.space.PX_16 };
let obj12 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[13] = { backgroundColor: "#23a55a", borderRadius: ThemesDefault.radii.md, paddingVertical: ThemesDefault.space.PX_12, alignItems: "center" };
let obj13 = { backgroundColor: "#23a55a", borderRadius: ThemesDefault.radii.md, paddingVertical: ThemesDefault.space.PX_12, alignItems: "center" };
createCacheKey[14] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.md, paddingVertical: ThemesDefault.space.PX_12, alignItems: "center", marginTop: ThemesDefault.space.PX_8 };
let obj14 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.md, paddingVertical: ThemesDefault.space.PX_12, alignItems: "center", marginTop: ThemesDefault.space.PX_8 };
createCacheKey[15] = { color: ThemesDefault.colors.TEXT_MUTED, marginBottom: ThemesDefault.space.PX_12 };
let obj15 = { color: ThemesDefault.colors.TEXT_MUTED, marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[16] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: ThemesDefault.colors.BORDER_MUTED, padding: ThemesDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj16 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: ThemesDefault.colors.BORDER_MUTED, padding: ThemesDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
createCacheKey[17] = { color: ThemesDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
function UnpurchasedCollectiblesShopCardV2(arg0) {
  [tmp2, require] = callback(React.useState(0), 2);
  const layoutEffect = React.useLayoutEffect(() => {
    const getPurchase = closure_1_8.getPurchase;
    closure_1_8.getPurchase = () => {

    };
    closure_1_8.emitChange();
    getPurchase(1);
    return () => {
      closure_1_8.getPurchase = getPurchase;
      closure_1_8.emitChange();
    };
  }, []);
  const obj = {};
  const tmp = callback(React.useState(0), 2);
  const merged = Object.assign(arg0);
  return callback3(CollectiblesShopCardInternalV2Default, obj, tmp2);
}
const obj17 = { color: ThemesDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
const result = require("set").fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default function _default() {
  const tmp = callback5();
  let obj = _require(first[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_7.categories);
  obj1 = _require(first[12]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => purchases.purchases);
  let obj2 = _require(first[12]);
  const items2 = [closure_7];
  let tmp7 = stateFromStores.size > 0;
  const stateFromStores2 = obj2.useStateFromStores(items2, () => closure_7.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  ({ isFetching, categories } = str(first[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
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
  const tmp13 = callback(React.useState(""), 2);
  str = tmp13[0];
  const tmp14 = callback(React.useState(null), 2);
  first = tmp14[0];
  callback = tmp14[1];
  const tmp16 = callback(React.useState(null), 2);
  React = tmp16[1];
  const items3 = [str, tmp18Result];
  const effect = React.useEffect(() => {
    if ("" !== str.trim()) {
      if (closure_0) {
        const product = closure_1_7.getProduct(tmp);
        const categoryForProduct = closure_1_7.getCategoryForProduct(tmp);
        if (null != product) {
          if (null != categoryForProduct) {
            callback(product);
            callback2(categoryForProduct);
          }
        }
        callback(null);
        callback2(null);
      }
    }
    callback(null);
    callback2(null);
  }, items3);
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: tmp.scrollContainer, showsVerticalScrollIndicator: false, children: null };
  obj1 = { style: tmp.section, children: null };
  obj2 = { style: tmp.sectionHeader, children: callback3(tmp2(tmp3[10]).Text, obj3) };
  const items4 = [callback3(closure_6, obj2), callback3(_require(first[14]).ShopSkipCategoriesFilter, {})];
  obj1[1] = items4;
  const items5 = [callback4(closure_6, obj1), , , ];
  const obj4 = { style: tmp.section, children: null };
  obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const tmp10 = str(first[13])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  const tmp21 = closure_5;
  const tmp9 = str;
  const items6 = [callback3(closure_6, { style: tmp.sectionHeader, children: callback3(_require(first[10]).Text, obj6) }), ];
  const obj7 = { style: tmp.inputContainer, children: null };
  const items7 = [callback3(_require(first[10]).Text, { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" }), , , , ];
  const obj9 = { style: tmp.inputWrapper, children: null };
  const obj10 = { value: str, onChangeText: tmp13[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
  const obj5 = { style: tmp.sectionHeader, children: callback3(_require(first[10]).Text, obj6) };
  const obj8 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  obj10[4] = { fontSize: 14, padding: tmp9(first[8]).space.PX_12 };
  obj9[1] = callback3(_require(first[15]).TextInput, obj10);
  items7[1] = callback3(closure_6, obj9);
  tmp18Result = !tmp18Result;
  if (!tmp18Result) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    const obj12 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj12[1] = items8;
    tmp18Result = tmp18(tmp2(tmp3[10]).Text, obj12);
  }
  items7[2] = tmp18Result;
  if (tmp18Result) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    tmp18Result = null == first;
  }
  if (tmp18Result) {
    const obj13 = { variant: "text-xs/normal", style: null, children: "Product not found" };
    const items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    obj13[1] = items9;
    tmp18Result = tmp18(tmp2(tmp3[10]).Text, obj13);
  }
  items7[3] = tmp18Result;
  let tmp20Result = null != first;
  if (tmp20Result) {
    const obj14 = { variant: "text-xs/normal", style: null, children: null };
    const items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    obj14[1] = items10;
    const items11 = ["Found: ", first.name];
    obj14[2] = items11;
    tmp20Result = tmp20(tmp2(tmp3[10]).Text, obj14);
  }
  items7[4] = tmp20Result;
  obj7[1] = items7;
  items6[1] = callback4(closure_6, obj7);
  obj4[1] = items6;
  items5[1] = callback4(closure_6, obj4);
  const obj15 = { style: tmp.section, children: null };
  const obj11 = { fontSize: 14, padding: tmp9(first[8]).space.PX_12 };
  const items12 = [callback3(closure_6, { style: tmp.sectionHeader, children: callback3(_require(first[10]).Text, obj17) }), ];
  if (null != first) {
    if (null != tmp16[0]) {
      const obj18 = { children: null };
      const obj19 = { style: null, children: null };
      obj19[0] = tmp.previewContainer;
      const obj20 = { product: null };
      obj20[0] = first;
      obj19[1] = tmp18(UnpurchasedCollectiblesShopCardV2, obj20);
      const items13 = [tmp18(tmp19, obj19), ];
      const obj21 = { pillStyle: null, text: "Show Collectibles Modal", onPress: null };
      obj21[0] = tmp.previewButton;
      obj21[2] = function onPress() {
        if (null != first) {
          let obj = str(first[16]);
          obj = { product: null, useCategoryImage: true };
          obj[0] = tmp;
          obj.open(obj);
        }
      };
      items13[1] = tmp18(tmp2(tmp3[11]).BaseTextButton, obj21);
      obj18[0] = items13;
      tmp20Result = tmp20(tmp19, obj18);
    }
    items12[1] = tmp20Result;
    obj15[1] = items12;
    items5[2] = tmp20(tmp19, obj15);
    items5[3] = tmp18(FramePreviewOverrideSection, {});
    obj[2] = items5;
    obj[1] = tmp20(tmp21, obj);
    return tmp18(tmp19, obj);
  }
  const obj16 = { style: tmp.sectionHeader, children: callback3(_require(first[10]).Text, obj17) };
  tmp20Result = tmp18(tmp19, { style: tmp.placeholder, children: callback4(_require(first[10]).Text, obj23) });
};