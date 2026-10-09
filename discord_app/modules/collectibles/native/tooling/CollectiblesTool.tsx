// discord_app/modules/collectibles/native/tooling/CollectiblesTool.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BaseTextButton from "../../../../design/components/Button/native/BaseTextButton.native.tsx";
import CollectiblesShopCardV2Default from "../CollectiblesShopCardV2.tsx";
import actions_GiftCodeActionCreators from "../../../../actions/native/GiftCodeActionCreators.tsx";
import ProductPurchaseSuccessActionCreatorsDefault from "../ProductPurchaseSuccessActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GiftCodeRecord from "../../../../records/GiftCodeRecord.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";
import CollectiblesPurchaseStore from "../../CollectiblesPurchaseStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_11 = fn(8313).useFramePreviewOverrideStore;
const application_id = fn(1085).COLLECTIBLES_APPLICATION_ID;
const PremiumGiftStyles = fn(1392).PremiumGiftStyles;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollContainer: null, contentContainer: null, section: null, sectionHeader: null, sectionTitle: null, inputContainer: null, inputWrapper: null, inputLabel: null, statusText: null, statusSuccess: null, statusError: null, statusLoading: null, previewContainer: null, previewButton: null, secondaryButton: null, description: null, placeholder: null, placeholderText: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.contentContainer = { gap: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_12 };
obj2.section = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.sectionHeader = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj7 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.sectionTitle = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
let obj8 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
obj2.inputContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj9 = { marginBottom: nativeDefault.space.PX_16 };
obj2.inputWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
obj2.inputLabel = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
let obj11 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
obj2.statusText = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
let obj12 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
obj2.statusSuccess = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.statusError = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj14 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.statusLoading = { color: nativeDefault.colors.TEXT_MUTED };
let obj15 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.previewContainer = { marginBottom: nativeDefault.space.PX_16 };
let obj16 = { marginBottom: nativeDefault.space.PX_16 };
obj2.previewButton = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
let obj17 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
obj2.secondaryButton = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
let obj18 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
obj2.description = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
let obj19 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
obj2.placeholder = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
let obj20 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  [tmp4, require] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const getPurchase = CollectiblesPurchaseStore.getPurchase;
      CollectiblesPurchaseStore.getPurchase = () => {

      };
      CollectiblesPurchaseStore.emitChange();
      require("logAppStart");
      return () => {
        CollectiblesPurchaseStore.getPurchase = getPurchase;
        CollectiblesPurchaseStore.emitChange();
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
  if (cResult[2] === tmp4) {
    if (cResult[3] === arg0) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = {};
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  const merged = Object.assign(arg0);
  const tmp11 = closure_14(CollectiblesShopCardV2Default, obj3, tmp4);
  cResult[2] = tmp4;
  cResult[3] = arg0;
  cResult[4] = tmp11;
  tmp8 = tmp11;
}) : ((arg0) => {
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
  return closure_14(CollectiblesShopCardV2Default, obj, tmp2);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingFlowSection(product) {
  const cResult = require("c").c(10);
  product = product.product;
  const tmp4 = closure_16();
  if (null == product) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_14(tmp(5087).Text, { variant: "text-xs/normal", color: "text-muted", children: "Enter a valid product SKU ID above to preview the gift screens." });
      cResult[0] = tmp19;
      let first = tmp19;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const currentUser = UserStore.getCurrentUser();
      cResult[1] = currentUser;
      let tmp5 = currentUser;
    } else {
      tmp5 = cResult[1];
    }
    if (null != tmp5) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { id: tmp5.id };
        cResult[2] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== product.skuId) {
        const obj3 = { code: "devtools-collectibles-gift", user: tmp8, sku_id: product.skuId, uses: 1, max_uses: 1, expires_at: null, redeemed: false, application_id, gift_style: PremiumGiftStyles.STANDARD_BOX };
        cResult[3] = product.skuId;
        cResult[4] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[4];
      }
      _require = tmp9;
      if (cResult[5] !== tmp9) {
        const fn = function _() {
          return actions_GiftCodeActionCreators.openGiftCodeRedeemModal("devtools-collectibles-gift", GiftCodeRecord.createFromServer(closure_0));
        };
        cResult[5] = tmp9;
        cResult[6] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.previewButton) {
        if (cResult[8] === tmp12) {
          let tmp13 = cResult[9];
        }
        return tmp13;
      }
      const obj4 = { variant: "primary", pillStyle: tmp4.previewButton, text: "Open Gift Redeem Modal", onPress: tmp12 };
      const tmp15 = closure_14(tmp(5377).BaseTextButton, obj4);
      cResult[7] = tmp4.previewButton;
      cResult[8] = tmp12;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
  }
  const obj = require("c");
}) : (function GiftingFlowSection(product) {
  product = product.product;
  _require = undefined;
  let obj;
  if (null == product) {
    return closure_14(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Enter a valid product SKU ID above to preview the gift screens." });
  } else {
    _require = "devtools-collectibles-gift";
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      obj = { code: "devtools-collectibles-gift", user: null, sku_id: null, uses: 1, max_uses: 1, expires_at: null, redeemed: false, application_id: null, gift_style: null };
      const obj2 = { id: currentUser.id };
      obj.user = obj2;
      obj.sku_id = product.skuId;
      obj.application_id = application_id;
      obj.gift_style = PremiumGiftStyles.STANDARD_BOX;
      const obj3 = {
        variant: "primary",
        pillStyle: tmp.previewButton,
        text: "Open Gift Redeem Modal",
        onPress() {
              obj = actions_GiftCodeActionCreators;
              return obj.openGiftCodeRedeemModal(c0, GiftCodeRecord.createFromServer(obj));
            }
      };
      return closure_14(require("BaseTextButton").BaseTextButton, obj3);
    }
  }
});
let closure_18 = tmp4;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function FramePreviewOverrideSection() {
  const cResult = c.c(34);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(override) {
      return override.override;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = closure_11(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(status) {
      return status.status;
    };
    cResult[1] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = closure_11(tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function u(error) {
      return error.error;
    };
    cResult[2] = fn3;
    let tmp10 = fn3;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function h(loadFromDevice) {
      return loadFromDevice.loadFromDevice;
    };
    cResult[3] = fn4;
    let tmp12 = fn4;
  } else {
    tmp12 = cResult[3];
  }
  const tmp6Result5 = closure_11(tmp12);
  closure_0 = tmp6Result5;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
    cResult[4] = T;
  } else {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
  }
  const tmp6Result6 = closure_11(T);
  if ("error" === tmp6Result) {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
  } else {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
    const tmp17 = "loading" === tmp6Result ? tmp4.statusLoading : tmp4.statusSuccess;
  }
  if ("loading" === tmp6Result) {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
    if (cResult[7] === tmp4.sectionHeader) {
      class T {
        constructor(arg0) {
          return arg0.clear;
        }
      }
      if (cResult[10] !== tmp4.description) {
        class T {
          constructor(arg0) {
            return arg0.clear;
          }
        }
        const obj2 = { variant: "text-sm/normal", style: tmp4.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
        const tmp30 = state(Text_Text.Text, obj2);
        cResult[10] = tmp4.description;
        cResult[11] = tmp30;
      } else {
        class T {
          constructor(arg0) {
            return arg0.clear;
          }
        }
      }
      if (cResult[12] === tmp17) {
        class T {
          constructor(arg0) {
            return arg0.clear;
          }
        }
        if (cResult[15] === "Loading\u2026") {
          class T {
            constructor(arg0) {
              return arg0.clear;
            }
          }
          if (cResult[18] !== tmp6Result5) {
            class T {
              constructor(arg0) {
                return arg0.clear;
              }
            }
            cResult[18] = tmp6Result5;
            cResult[19] = tmp36;
          } else {
            class T {
              constructor(arg0) {
                return arg0.clear;
              }
            }
          }
          if (cResult[20] === tmp4.secondaryButton) {
            class T {
              constructor(arg0) {
                return arg0.clear;
              }
            }
            if (cResult[23] === tmp6Result6) {
              class T {
                constructor(arg0) {
                  return arg0.clear;
                }
              }
            }
            let tmp42 = null != tmp7;
            if (tmp42) {
              class T {
                constructor(arg0) {
                  return arg0.clear;
                }
              }
              const obj3 = { pillStyle: tmp4.secondaryButton, text: "Clear override", onPress: tmp6Result6 };
              tmp42 = state(BaseTextButton.BaseTextButton, obj3);
            }
            cResult[23] = tmp6Result6;
            cResult[24] = tmp7;
            cResult[25] = tmp4.secondaryButton;
            cResult[26] = tmp42;
          }
          const obj4 = { pillStyle: tmp4.secondaryButton, text: "Load from device", onPress: tmp36 };
          const tmp39 = state(BaseTextButton.BaseTextButton, obj4);
          cResult[20] = tmp4.secondaryButton;
          cResult[21] = tmp36;
          cResult[22] = tmp39;
        }
        const obj5 = { variant: "text-xs/normal", style: tmp31, children: "Loading\u2026" };
        const tmp34 = state(Text_Text.Text, obj5);
        cResult[15] = "Loading\u2026";
        cResult[16] = tmp31;
        cResult[17] = tmp34;
      }
      const items = [tmp4.statusText, tmp17];
      cResult[12] = tmp17;
      cResult[13] = tmp4.statusText;
      cResult[14] = items;
    }
    const obj6 = { style: tmp4.sectionHeader, children: tmp24 };
    const tmp28 = state(timestampProducer, obj6);
    cResult[7] = tmp4.sectionHeader;
    cResult[8] = tmp24;
    cResult[9] = tmp28;
  } else {
    class T {
      constructor(arg0) {
        return arg0.clear;
      }
    }
    if (tmp16) {
      class T {
        constructor(arg0) {
          return arg0.clear;
        }
      }
      let combined = tmp6Result4;
    } else {
      class T {
        constructor(arg0) {
          return arg0.clear;
        }
      }
      if (null != tmp7) {
        class T {
          constructor(arg0) {
            return arg0.clear;
          }
        }
        if (1 === tmp7.layers.length) {
          class T {
            constructor(arg0) {
              return arg0.clear;
            }
          }
        }
        const _HermesInternal = HermesInternal;
        combined = "Showing \"" + tmp19 + "\" \u00B7 " + length + " layer" + str;
      }
    }
  }
  tmp6Result4 = closure_11(tmp10);
}) : (function FramePreviewOverrideSection() {
  const tmp = closure_16();
  const tmp2 = closure_11((override) => override.override);
  const tmp3 = closure_11((status) => status.status);
  let str = closure_11((error) => error.error);
  closure_0 = closure_11((loadFromDevice) => loadFromDevice.loadFromDevice);
  if ("error" === tmp3) {
    let statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  if ("loading" === tmp3) {
    const obj = { style: tmp.section, children: null };
    const obj2 = { style: tmp.sectionHeader, children: null };
    const obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
    obj2.children = state(Text_Text.Text, obj3);
    const items = [state(timestampProducer, obj2), , , , ];
    const obj4 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
    items[1] = state(Text_Text.Text, obj4);
    const obj5 = { variant: "text-xs/normal", style: null, children: null };
    const items1 = [tmp.statusText, statusError];
    obj5.style = items1;
    obj5.children = "Loading\u2026";
    items[2] = state(Text_Text.Text, obj5);
    const obj6 = {
      pillStyle: tmp.secondaryButton,
      text: "Load from device",
      onPress() {
          closure_0();
        }
    };
    items[3] = state(BaseTextButton.BaseTextButton, obj6);
    let tmp13Result = null != tmp2;
    if (tmp13Result) {
      const obj7 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
      tmp13Result = state(BaseTextButton.BaseTextButton, obj7);
    }
    items[4] = tmp13Result;
    obj.children = items;
    return closure_1_15(timestampProducer, obj);
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
  tmp4 = closure_11((clear) => clear.clear);
});
ReactCompilerGating = fn(558);
let obj21 = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = _require;
  let tmp2 = previewContainer;
  const cResult = require("c").c(89);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function c() {
      return CollectiblesCategoryStore.categories;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = tmp(tmp2[19]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    class T {
      constructor() {
        return closure_1_10.purchases;
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp10 = T;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(tmp2[19]);
  const stateFromStores1 = tmp(tmp2[19]).useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CollectiblesCategoryStore];
    class E {
      constructor() {
        return closure_1_9.lastSuccessfulFetch;
      }
    }
    cResult[4] = items2;
    cResult[5] = E;
    let tmp14 = E;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  const tmpResult3 = tmp(tmp2[19]);
  let tmp17 = stateFromStores.size > 0;
  const stateFromStores2 = tmp(tmp2[19]).useStateFromStores(tmp13, tmp14);
  if (tmp17) {
    tmp17 = stateFromStores1.size > 0;
  }
  if (tmp17) {
    tmp17 = null != stateFromStores2;
  }
  if (cResult[6] !== tmp17) {
    let obj2 = { logPerf: false, stalePurchasesOK: true, noOp: tmp17 };
    class E {
      constructor() {
        return closure_1_9.lastSuccessfulFetch;
      }
    }
    cResult[7] = obj2;
    let tmp19 = obj2;
  } else {
    tmp19 = cResult[7];
  }
  const tmp20 = value;
  const tmpResult4 = tmp(tmp2[19]);
  ({ isFetching, categories } = value(tmp2[20])(tmp19));
  let tmp22 = tmp17;
  if (!tmp17) {
    let tmp23 = !isFetching;
    if (!isFetching) {
      if (tmp17) {
        categories = stateFromStores;
      }
      tmp23 = categories.size > 0;
    }
    tmp22 = tmp23;
  }
  _require = tmp22;
  const tmp21 = value(tmp2[20])(tmp19);
  value = _slicedToArray(noop.useState(""), 2)[0];
  [previewContainer, _slicedToArray] = noop.useState(null);
  const tmp24 = _slicedToArray(noop.useState(""), 2);
  [tmp28, noop] = noop.useState(null);
  if (cResult[8] === tmp22) {
    if (cResult[9] === value) {
      let tmp29 = cResult[10];
      let tmp30 = cResult[11];
    }
    const effect = noop.useEffect(tmp29, tmp30);
    if (cResult[12] !== previewContainer) {
      function handleOpenCollectedModal() {
        if (null != previewContainer) {
          const obj2 = { product: tmp, useCategoryImage: true };
          ProductPurchaseSuccessActionCreatorsDefault.open(obj2);
        }
      }
      cResult[12] = previewContainer;
      class E {
        constructor() {
          return closure_1_9.lastSuccessfulFetch;
        }
      }
      cResult[13] = handleOpenCollectedModal;
      let tmp32 = handleOpenCollectedModal;
    } else {
      tmp32 = cResult[13];
    }
    class E {
      constructor() {
        return closure_1_9.lastSuccessfulFetch;
      }
    }
    if (cResult[16] === tmp4.sectionHeader) {
      if (cResult[17] === tmp33) {
        let tmp34 = cResult[18];
      }
      const _Symbol = Symbol;
      class E {
        constructor() {
          return closure_1_9.lastSuccessfulFetch;
        }
      }
      if (cResult[20] === tmp4.section) {
        if (cResult[21] === tmp34) {
          let tmp40 = cResult[22];
        }
        if (cResult[23] !== tmp4.sectionTitle) {
          { variant: "heading-md/semibold", style: null, children: "Product Configuration" }.style = tmp4.sectionTitle;
          class E {
            constructor() {
              return closure_1_9.lastSuccessfulFetch;
            }
          }
          cResult[23] = tmp4.sectionTitle;
          cResult[24] = tmp46;
          let tmp44 = tmp46;
          const obj3 = { variant: "heading-md/semibold", style: null, children: "Product Configuration" };
        } else {
          tmp44 = cResult[24];
        }
        if (cResult[25] === tmp4.sectionHeader) {
          if (cResult[26] === tmp44) {
            let tmp47 = cResult[27];
          }
          if (cResult[28] !== tmp4.inputLabel) {
            { variant: "text-md/semibold", style: null, children: "Primary Product SKU ID" }.style = tmp4.inputLabel;
            class E {
              constructor() {
                return closure_1_9.lastSuccessfulFetch;
              }
            }
            cResult[28] = tmp4.inputLabel;
            cResult[29] = tmp52;
            let tmp50 = tmp52;
            const obj4 = { variant: "text-md/semibold", style: null, children: "Primary Product SKU ID" };
          } else {
            tmp50 = cResult[29];
          }
          const _Symbol2 = Symbol;
          class E {
            constructor() {
              return closure_1_9.lastSuccessfulFetch;
            }
          }
          if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { fontSize: 14, padding: tmp20(tmp2[12]).space.PX_12 };
            class E {
              constructor() {
                return closure_1_9.lastSuccessfulFetch;
              }
            }
            let tmp54 = obj5;
          } else {
            tmp54 = cResult[30];
          }
          if (cResult[31] !== value) {
            const obj7 = { value, onChangeText: null, placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
            class E {
              constructor() {
                return closure_1_9.lastSuccessfulFetch;
              }
            }
            obj7.style = tmp54;
            const tmp57 = closure_14(tmp(tmp2[23]).TextInput, obj7);
            cResult[31] = value;
            cResult[32] = tmp57;
            let tmp55 = tmp57;
          } else {
            tmp55 = cResult[32];
          }
          if (cResult[33] === tmp4.inputWrapper) {
            if (cResult[34] === tmp55) {
              let tmp58 = cResult[35];
            }
            if (cResult[36] === tmp22) {
              if (cResult[37] === value) {
                if (cResult[38] === tmp4.statusLoading) {
                  if (cResult[39] === tmp4.statusText) {
                    let tmp62 = cResult[40];
                  }
                  if (cResult[41] === tmp22) {
                    if (cResult[42] === value) {
                      if (cResult[43] === previewContainer) {
                        if (cResult[44] === tmp4.statusError) {
                          if (cResult[45] === tmp4.statusText) {
                            let tmp65 = cResult[46];
                          }
                          if (cResult[47] === previewContainer) {
                            if (cResult[48] === tmp4.statusSuccess) {
                              if (cResult[49] === tmp4.statusText) {
                                let tmp68 = cResult[50];
                              }
                              if (cResult[51] === tmp4.inputContainer) {
                                if (cResult[52] === tmp50) {
                                  if (cResult[53] === tmp58) {
                                    if (cResult[54] === tmp62) {
                                      if (cResult[55] === tmp65) {
                                        if (cResult[56] === tmp68) {
                                          let tmp70 = cResult[57];
                                        }
                                        if (cResult[58] === tmp4.section) {
                                          if (cResult[59] === tmp47) {
                                            if (cResult[60] === tmp70) {
                                              let tmp73 = cResult[61];
                                            }
                                            if (cResult[62] !== tmp4.sectionTitle) {
                                              { variant: "heading-md/semibold", style: null, children: "Product Preview" }.style = tmp4.sectionTitle;
                                              class E {
                                                constructor() {
                                                  return closure_1_9.lastSuccessfulFetch;
                                                }
                                              }
                                              cResult[62] = tmp4.sectionTitle;
                                              cResult[63] = tmp78;
                                              let tmp76 = tmp78;
                                              const obj8 = { variant: "heading-md/semibold", style: null, children: "Product Preview" };
                                            } else {
                                              tmp76 = cResult[63];
                                            }
                                            if (cResult[64] === tmp4.sectionHeader) {
                                              if (cResult[65] === tmp76) {
                                                let tmp79 = cResult[66];
                                              }
                                              if (cResult[67] === tmp32) {
                                                if (cResult[68] === tmp28) {
                                                  if (cResult[69] === previewContainer) {
                                                    if (cResult[70] === tmp4.contentContainer) {
                                                      if (cResult[71] === tmp4.placeholder) {
                                                        if (cResult[72] === tmp4.placeholderText) {
                                                          if (cResult[73] === tmp4.previewButton) {
                                                            if (cResult[74] === tmp4.previewContainer) {
                                                              if (cResult[76] === tmp4.section) {
                                                                if (cResult[77] === tmp79) {
                                                                  if (cResult[78] === tmp82) {
                                                                    let tmp91 = cResult[79];
                                                                  }
                                                                  const _Symbol3 = Symbol;
                                                                  class E {
                                                                    constructor() {
                                                                      return closure_1_9.lastSuccessfulFetch;
                                                                    }
                                                                  }
                                                                  if (cResult[81] === tmp4.scrollContainer) {
                                                                    if (cResult[82] === tmp40) {
                                                                      if (cResult[83] === tmp73) {
                                                                        if (cResult[84] === tmp91) {
                                                                          let tmp96 = cResult[85];
                                                                        }
                                                                        if (cResult[86] === tmp4.container) {
                                                                          if (cResult[87] === tmp96) {
                                                                            let tmp100 = cResult[88];
                                                                          }
                                                                          return tmp100;
                                                                        }
                                                                        class E {
                                                                          constructor() {
                                                                            return closure_1_9.lastSuccessfulFetch;
                                                                          }
                                                                        }
                                                                        const obj9 = { style: tmp4.container, children: tmp96 };
                                                                        const tmp102 = closure_14(closure_6, obj9);
                                                                        cResult[86] = tmp4.container;
                                                                        cResult[87] = tmp96;
                                                                        cResult[88] = tmp102;
                                                                        tmp100 = tmp102;
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj10 = { contentContainerStyle: tmp4.scrollContainer, showsVerticalScrollIndicator: false, children: null };
                                                                  const items3 = [tmp40, tmp73, tmp91, tmp95];
                                                                  obj10.children = items3;
                                                                  const tmp99 = closure_15(closure_5, obj10);
                                                                  cResult[81] = tmp4.scrollContainer;
                                                                  cResult[82] = tmp40;
                                                                  cResult[83] = tmp73;
                                                                  cResult[84] = tmp91;
                                                                  cResult[85] = tmp99;
                                                                  tmp96 = tmp99;
                                                                }
                                                              }
                                                              class E {
                                                                constructor() {
                                                                  return closure_1_9.lastSuccessfulFetch;
                                                                }
                                                              }
                                                              const obj11 = { style: tmp4.section, children: null };
                                                              const items4 = [tmp79, cResult[75]];
                                                              obj11.children = items4;
                                                              const tmp93 = closure_15(closure_6, obj11);
                                                              cResult[76] = tmp4.section;
                                                              cResult[77] = tmp79;
                                                              cResult[78] = cResult[75];
                                                              cResult[79] = tmp93;
                                                              tmp91 = tmp93;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              if (null == previewContainer) {
                                                const obj12 = { style: null, children: null };
                                                class E {
                                                  constructor() {
                                                    return closure_1_9.lastSuccessfulFetch;
                                                  }
                                                }
                                                const obj13 = { variant: "text-sm/normal", style: tmp4.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] };
                                                obj12.children = closure_15(tmp(tmp2[16]).Text, obj13);
                                                let tmp86 = closure_14(closure_6, obj12);
                                                cResult[67] = tmp32;
                                                cResult[68] = tmp28;
                                                cResult[69] = previewContainer;
                                                cResult[70] = tmp4.contentContainer;
                                                cResult[71] = tmp4.placeholder;
                                                cResult[72] = tmp4.placeholderText;
                                                ({ previewButton: tmp3[73], previewContainer } = tmp4);
                                                cResult[74] = previewContainer;
                                                cResult[75] = tmp86;
                                              }
                                              class E {
                                                constructor() {
                                                  return closure_1_9.lastSuccessfulFetch;
                                                }
                                              }
                                              const obj14 = { style: tmp4.contentContainer, children: null };
                                              const obj15 = { style: tmp4.previewContainer, children: null };
                                              const obj16 = { product: previewContainer };
                                              obj15.children = closure_14(closure_17, obj16);
                                              const items5 = [closure_14(closure_6, obj15), , ];
                                              const obj17 = { pillStyle: tmp4.previewButton, text: "Show Collectibles Modal", onPress: tmp32 };
                                              items5[1] = closure_14(tmp(tmp2[18]).BaseTextButton, obj17);
                                              tmp = closure_18;
                                              const obj18 = { product: previewContainer };
                                              tmp2 = closure_14(closure_18, obj18);
                                              items5[2] = tmp2;
                                              obj14.children = items5;
                                              tmp86 = closure_15(closure_6, obj14);
                                            }
                                            class E {
                                              constructor() {
                                                return closure_1_9.lastSuccessfulFetch;
                                              }
                                            }
                                            const obj19 = { style: tmp4.sectionHeader, children: tmp76 };
                                            const tmp81 = closure_14(closure_6, obj19);
                                            cResult[64] = tmp4.sectionHeader;
                                            cResult[65] = tmp76;
                                            cResult[66] = tmp81;
                                            tmp79 = tmp81;
                                          }
                                        }
                                        class E {
                                          constructor() {
                                            return closure_1_9.lastSuccessfulFetch;
                                          }
                                        }
                                        const obj20 = { style: tmp4.section, children: null };
                                        const items6 = [tmp47, tmp70];
                                        obj20.children = items6;
                                        const tmp75 = closure_15(closure_6, obj20);
                                        cResult[58] = tmp4.section;
                                        cResult[59] = tmp47;
                                        cResult[60] = tmp70;
                                        cResult[61] = tmp75;
                                        tmp73 = tmp75;
                                      }
                                    }
                                  }
                                }
                              }
                              class E {
                                constructor() {
                                  return closure_1_9.lastSuccessfulFetch;
                                }
                              }
                              const obj21 = { style: tmp4.inputContainer, children: null };
                              const items7 = [tmp50, tmp58, tmp62, tmp65, tmp68];
                              obj21.children = items7;
                              const tmp72 = closure_15(closure_6, obj21);
                              cResult[51] = tmp4.inputContainer;
                              cResult[52] = tmp50;
                              cResult[53] = tmp58;
                              cResult[54] = tmp62;
                              cResult[55] = tmp65;
                              cResult[56] = tmp68;
                              cResult[57] = tmp72;
                              tmp70 = tmp72;
                            }
                          }
                          class E {
                            constructor() {
                              return closure_1_9.lastSuccessfulFetch;
                            }
                          }
                          cResult[47] = previewContainer;
                          cResult[48] = tmp4.statusSuccess;
                          cResult[49] = tmp4.statusText;
                          cResult[50] = null != previewContainer;
                          tmp68 = tmp69;
                        }
                      }
                    }
                  }
                  let tmp66 = tmp22;
                  class E {
                    constructor() {
                      return closure_1_9.lastSuccessfulFetch;
                    }
                  }
                  if (tmp66) {
                    tmp66 = null == previewContainer;
                  }
                  if (tmp66) {
                    const obj22 = { variant: "text-xs/normal", style: null, children: "Product not found" };
                    const items8 = [, ];
                    class E {
                      constructor() {
                        return closure_1_9.lastSuccessfulFetch;
                      }
                    }
                    items8[1] = tmp4.statusError;
                    obj22.style = items8;
                    tmp66 = closure_14(tmp(tmp2[16]).Text, obj22);
                  }
                  cResult[41] = tmp22;
                  cResult[42] = value;
                  cResult[43] = previewContainer;
                  cResult[44] = tmp4.statusError;
                  cResult[45] = tmp4.statusText;
                  cResult[46] = tmp66;
                  tmp65 = tmp66;
                }
              }
            }
            let tmp63 = !tmp22;
            class E {
              constructor() {
                return closure_1_9.lastSuccessfulFetch;
              }
            }
            if (tmp63) {
              const obj23 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
              const items9 = [, ];
              class E {
                constructor() {
                  return closure_1_9.lastSuccessfulFetch;
                }
              }
              items9[1] = tmp4.statusLoading;
              obj23.style = items9;
              tmp63 = closure_14(tmp(tmp2[16]).Text, obj23);
            }
            cResult[36] = tmp22;
            cResult[37] = value;
            cResult[38] = tmp4.statusLoading;
            cResult[39] = tmp4.statusText;
            cResult[40] = tmp63;
            tmp62 = tmp63;
          }
          const obj24 = { style: tmp4.inputWrapper, children: tmp55 };
          const tmp61 = closure_14(closure_6, obj24);
          cResult[33] = tmp4.inputWrapper;
          cResult[34] = tmp55;
          cResult[35] = tmp61;
          tmp58 = tmp61;
        }
        class E {
          constructor() {
            return closure_1_9.lastSuccessfulFetch;
          }
        }
        const obj25 = { style: tmp4.sectionHeader, children: tmp44 };
        const tmp49 = closure_14(closure_6, obj25);
        cResult[25] = tmp4.sectionHeader;
        cResult[26] = tmp44;
        cResult[27] = tmp49;
        tmp47 = tmp49;
      }
      const obj26 = { style: tmp4.section, children: null };
      const items10 = [tmp34, tmp39];
      obj26.children = items10;
      const tmp43 = closure_15(closure_6, obj26);
      cResult[20] = tmp4.section;
      cResult[21] = tmp34;
      cResult[22] = tmp43;
      tmp40 = tmp43;
    }
    const obj27 = { style: tmp4.sectionHeader, children: tmp33 };
    const tmp37 = closure_14(closure_6, obj27);
    cResult[16] = tmp4.sectionHeader;
    cResult[17] = tmp33;
    cResult[18] = tmp37;
    tmp34 = tmp37;
  }
  class L {
    constructor() {
      tmp = closure_1;
      if ("" !== closure_1.trim()) {
        tmp2 = closure_0;
        if (closure_0) {
          tmp3 = closure_9;
          product = closure_9.getProduct(tmp);
          categoryForProduct = closure_9.getCategoryForProduct(tmp);
          tmp6 = null;
          if (null != product) {
            if (null != categoryForProduct) {
              tmp11 = closure_3;
              tmp12 = closure_3(product);
              tmp13 = closure_4;
              tmp14 = closure_4(categoryForProduct);
            }
            return;
          }
          tmp7 = closure_3;
          tmp8 = closure_3(null);
          tmp9 = closure_4;
          tmp10 = closure_4(null);
        }
      }
      tmp15 = closure_3(null);
      tmp16 = closure_4(null);
      return;
    }
  }
  const items11 = [value, tmp22];
  cResult[8] = tmp22;
  cResult[9] = value;
  cResult[10] = L;
  cResult[11] = items11;
  tmp30 = items11;
  tmp29 = L;
  const tmp27 = _slicedToArray(noop.useState(null), 2);
}) : (() => {
  const tmp = closure_16();
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
  ({ isFetching, categories } = str(product[20])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
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
  const obj7 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" }) };
  const items4 = [closure_14(closure_6, obj7), closure_14(require("ShopSkipCategoriesFilter").ShopSkipCategoriesFilter, {})];
  obj6.children = items4;
  const items5 = [closure_15(closure_6, obj6), , , ];
  const obj9 = { style: tmp.section, children: null };
  const obj10 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" }) };
  const items6 = [closure_14(closure_6, obj10), ];
  const obj12 = { style: tmp.inputContainer, children: null };
  const items7 = [closure_14(require("Text/Text").Text, { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" }), , , , ];
  const obj14 = { style: tmp.inputWrapper, children: null };
  const obj15 = { value: tmp13[0], onChangeText: tmp13[1], placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: null };
  const obj11 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  const obj13 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  const obj8 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  const tmp10 = str(product[20])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  obj15.style = { fontSize: 14, padding: tmp9(product[12]).space.PX_12 };
  obj14.children = closure_14(require("native").TextInput, obj15);
  items7[1] = closure_14(closure_6, obj14);
  let tmp18Result = !tmp18Result2;
  if (!tmp18Result2) {
    tmp18Result = "" !== str.trim();
  }
  if (tmp18Result) {
    const obj17 = { variant: "text-xs/normal", style: null, children: "Loading products..." };
    const items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    obj17.style = items8;
    tmp18Result = closure_14(tmp2(tmp3[16]).Text, obj17);
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
    tmp18Result2 = closure_14(tmp2(tmp3[16]).Text, obj18);
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
    tmp20Result = closure_15(tmp2(tmp3[16]).Text, obj19);
  }
  items7[4] = tmp20Result;
  obj12.children = items7;
  items6[1] = closure_15(closure_6, obj12);
  obj9.children = items6;
  items5[1] = closure_15(closure_6, obj9);
  const obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" }) };
  const items12 = [closure_14(closure_6, obj21), ];
  if (null != product) {
    if (null != tmp16[0]) {
      const obj23 = { style: tmp.contentContainer, children: null };
      const obj24 = { style: tmp.previewContainer, children: null };
      const obj25 = { product };
      obj24.children = closure_14(closure_17, obj25);
      const items13 = [closure_14(closure_6, obj24), , ];
      const obj26 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress: function handleOpenCollectedModal() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                ProductPurchaseSuccessActionCreatorsDefault.open(obj2);
              }
            }
      };
      items13[1] = closure_14(tmp2(tmp3[18]).BaseTextButton, obj26);
      const obj27 = { product };
      items13[2] = closure_14(closure_18, obj27);
      obj23.children = items13;
      let tmp20Result2 = closure_15(closure_6, obj23);
    }
    items12[1] = tmp20Result2;
    obj20.children = items12;
    items5[2] = closure_15(closure_6, obj20);
    items5[3] = closure_14(closure_19, {});
    obj5.children = items5;
    obj4.children = closure_15(closure_5, obj5);
    return closure_14(closure_6, obj4);
  }
  const obj28 = { style: tmp.placeholder, children: closure_15(require("Text/Text").Text, { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] }) };
  tmp20Result2 = closure_14(closure_6, obj28);
  const obj16 = { fontSize: 14, padding: tmp9(product[12]).space.PX_12 };
  const obj22 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" };
  const obj29 = { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] };
});
export const GiftingFlowSection = tmp4;