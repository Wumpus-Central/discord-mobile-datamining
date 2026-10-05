// === Module 15598: CollectiblesTool ===

// Module 15598 (CollectiblesTool)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Text_Text from "Text/Text" /* 4886 */;
import BaseTextButton from "BaseTextButton" /* 5595 */;
import FramePreviewOverrideStore from "FramePreviewOverrideStore" /* 7874 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8418 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10813 */;
import actions_GiftCodeActionCreators from "actions/GiftCodeActionCreators" /* 11091 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeRecord from "GiftCodeRecord" /* 10431 */;
import UserStore from "UserStore" /* 1377 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7068 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let closure_11 = FramePreviewOverrideStore.useFramePreviewOverrideStore;
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: obj3, contentContainer: obj4, section: obj5, sectionHeader: obj6, sectionTitle: obj7, inputContainer: obj8, inputWrapper: obj9, inputLabel: obj10, statusText: obj11, statusSuccess: obj12, statusError: obj13, statusLoading: obj14, previewContainer: obj15, previewButton: obj16, secondaryButton: obj17, description: obj18, placeholder: obj19, placeholderText: obj20 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
obj6 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { flex: 1, color: nativeDefault.colors.TEXT_DEFAULT };
obj8 = { marginBottom: nativeDefault.space.PX_16 };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_4 };
obj10 = { marginBottom: nativeDefault.space.PX_8, color: nativeDefault.colors.TEXT_DEFAULT, fontWeight: "600" };
obj11 = { marginTop: nativeDefault.space.PX_8, fontSize: 12, fontWeight: "500" };
obj12 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj14 = { color: nativeDefault.colors.TEXT_MUTED };
obj15 = { marginBottom: nativeDefault.space.PX_16 };
obj16 = { backgroundColor: "#23a55a", borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center" };
obj17 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, paddingVertical: nativeDefault.space.PX_12, alignItems: "center", marginTop: nativeDefault.space.PX_8 };
obj18 = { color: nativeDefault.colors.TEXT_MUTED, marginBottom: nativeDefault.space.PX_12 };
obj19 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_MUTED, padding: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", minHeight: 120 };
obj20 = { color: nativeDefault.colors.TEXT_MUTED, textAlign: "center", fontSize: 14 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let require;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  [tmp4, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const getPurchase = CollectiblesPurchaseStore.getPurchase;
      CollectiblesPurchaseStore.getPurchase = () => {

      };
      CollectiblesPurchaseStore.emitChange();
      require("logAppStart");
      return () => {
        closure_2_10.getPurchase = getPurchase;
        closure_2_10.emitChange();
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
  const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
  if (cResult[2] === tmp4) {
    let tmp8;
    if (cResult[3] === arg0) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = {};
  const tmp9 = CollectiblesShopCardV2Default;
  const merged = Object.assign(arg0);
  const tmp11 = closure_14(tmp9, obj3, tmp4);
  cResult[2] = tmp4;
  cResult[3] = arg0;
  cResult[4] = tmp11;
  tmp8 = tmp11;
}) : ((arg0) => {
  let require;
  let tmp2;
  [tmp2, require] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const layoutEffect = react.useLayoutEffect(() => {
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    CollectiblesPurchaseStore.getPurchase = () => {

    };
    CollectiblesPurchaseStore.emitChange();
    require("logAppStart");
    return () => {
      closure_2_10.getPurchase = getPurchase;
      closure_2_10.emitChange();
    };
  }, []);
  const obj = {};
  const tmp4 = CollectiblesShopCardV2Default;
  const merged = Object.assign(arg0);
  return closure_14(tmp4, obj, tmp2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let closure_0;
  let obj = require("react");
  const cResult = obj.c(10);
  product = product.product;
  const tmp4 = closure_16();
  if (null == product) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_14(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Enter a valid product SKU ID above to preview the gift screens." });
      cResult[0] = tmp19;
      first = tmp19;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let tmp5;
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const currentUser = UserStore.getCurrentUser();
      cResult[1] = currentUser;
      tmp5 = currentUser;
    } else {
      tmp5 = cResult[1];
    }
    if (null != tmp5) {
      let tmp8;
      let tmp9;
      let tmp12;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { id: tmp5.id };
        cResult[2] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== product.skuId) {
        const obj3 = { code: "devtools-collectibles-gift", user: tmp8, sku_id: product.skuId, uses: 1, max_uses: 1, expires_at: null, redeemed: false, application_id, gift_style: PremiumGiftStyles.STANDARD_BOX };
        cResult[3] = product.skuId;
        cResult[4] = obj3;
        tmp9 = obj3;
      } else {
        tmp9 = cResult[4];
      }
      _require = tmp9;
      if (cResult[5] !== tmp9) {
        const fn = function _() {
          const obj = actions_GiftCodeActionCreators;
          return obj.openGiftCodeRedeemModal("devtools-collectibles-gift", GiftCodeRecord.createFromServer(closure_0));
        };
        cResult[5] = tmp9;
        cResult[6] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === tmp4.previewButton) {
        let tmp13;
        if (cResult[8] === tmp12) {
          tmp13 = cResult[9];
        }
        return tmp13;
      }
      const obj4 = { variant: "primary", pillStyle: tmp4.previewButton, text: "Open Gift Redeem Modal", onPress: tmp12 };
      const tmp15 = closure_14(require("BaseTextButton").BaseTextButton, obj4);
      cResult[7] = tmp4.previewButton;
      cResult[8] = tmp12;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
  }
}) : ((product) => {
  let c0;
  let obj2;
  product = product.product;
  _require = undefined;
  let obj;
  if (null == product) {
    return closure_14(require("Text/Text").Text, { variant: "text-xs/normal", color: "text-muted", children: "Enter a valid product SKU ID above to preview the gift screens." });
  } else {
    _require = "devtools-collectibles-gift";
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      obj = { code: "devtools-collectibles-gift", user: obj2, sku_id: product.skuId, uses: 1, max_uses: 1, expires_at: null, redeemed: false, application_id, gift_style: PremiumGiftStyles.STANDARD_BOX };
      obj2 = { id: currentUser.id };
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
let closure_18 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp10;
  let tmp12;
  let tmp17;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(34);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(override) {
      return override.override;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = closure_11(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(status) {
      return status.status;
    };
    cResult[1] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = closure_11(tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function u(error) {
      return error.error;
    };
    cResult[2] = fn3;
    tmp10 = fn3;
  } else {
    tmp10 = cResult[2];
  }
  const tmp6Result4 = closure_11(tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function h(loadFromDevice) {
      return loadFromDevice.loadFromDevice;
    };
    cResult[3] = fn4;
    tmp12 = fn4;
  } else {
    tmp12 = cResult[3];
  }
  const tmp6Result5 = closure_11(tmp12);
  let closure_0 = tmp6Result5;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
    cResult[4] = T;
  } else {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
  }
  const tmp6Result6 = closure_11(T);
  if ("error" === tmp6Result) {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
  } else {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
    tmp17 = "loading" === tmp6Result ? tmp4.statusLoading : tmp4.statusSuccess;
  }
  let str = "Loading\u2026";
  if ("loading" !== tmp6Result) {
    let combined;
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
    if ("error" === tmp6Result) {
      class T {
        constructor(clear) {
          return clear.clear;
        }
      }
      combined = tmp6Result4;
    } else {
      class T {
        constructor(clear) {
          return clear.clear;
        }
      }
      if (null != tmp7) {
        class T {
          constructor(clear) {
            return clear.clear;
          }
        }
        if (1 === tmp7.layers.length) {
          class T {
            constructor(clear) {
              return clear.clear;
            }
          }
        }
        const _HermesInternal = HermesInternal;
        combined = "Showing \"" + tmp19 + "\" \u00B7 " + length + " layer" + str2;
      }
    }
    str = combined;
  }
  if (cResult[5] !== tmp4.sectionTitle) {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
    const obj2 = { variant: "heading-md/semibold", style: tmp4.sectionTitle, children: "Frame Preview Override" };
    cResult[5] = tmp4.sectionTitle;
    cResult[6] = authStore2(Text_Text.Text, obj2);
    const tmp24 = authStore2(Text_Text.Text, obj2);
  } else {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
  }
  if (cResult[7] === tmp4.sectionHeader) {
    class T {
      constructor(clear) {
        return clear.clear;
      }
    }
    if (cResult[10] !== tmp4.description) {
      class T {
        constructor(clear) {
          return clear.clear;
        }
      }
      const obj3 = { variant: "text-sm/normal", style: tmp4.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
      cResult[10] = tmp4.description;
      cResult[11] = authStore2(Text_Text.Text, obj3);
      const tmp27 = authStore2(Text_Text.Text, obj3);
    } else {
      class T {
        constructor(clear) {
          return clear.clear;
        }
      }
    }
    if (cResult[12] === tmp17) {
      class T {
        constructor(clear) {
          return clear.clear;
        }
      }
      if (cResult[15] === str) {
        class T {
          constructor(clear) {
            return clear.clear;
          }
        }
        if (cResult[18] !== tmp6Result5) {
          class T {
            constructor(clear) {
              return clear.clear;
            }
          }
          cResult[18] = tmp6Result5;
          cResult[19] = tmp33;
        } else {
          class T {
            constructor(clear) {
              return clear.clear;
            }
          }
        }
        if (cResult[20] === tmp4.secondaryButton) {
          class T {
            constructor(clear) {
              return clear.clear;
            }
          }
          if (cResult[23] === tmp6Result6) {
            class T {
              constructor(clear) {
                return clear.clear;
              }
            }
          }
          let tmp39 = null != tmp7;
          if (tmp39) {
            class T {
              constructor(clear) {
                return clear.clear;
              }
            }
            const obj4 = { pillStyle: tmp4.secondaryButton, text: "Clear override", onPress: tmp6Result6 };
            tmp39 = authStore2(BaseTextButton.BaseTextButton, obj4);
          }
          cResult[23] = tmp6Result6;
          cResult[24] = tmp7;
          cResult[25] = tmp4.secondaryButton;
          cResult[26] = tmp39;
        }
        const obj5 = { pillStyle: tmp4.secondaryButton, text: "Load from device", onPress: tmp33 };
        cResult[20] = tmp4.secondaryButton;
        cResult[21] = tmp33;
        cResult[22] = authStore2(BaseTextButton.BaseTextButton, obj5);
        const tmp36 = authStore2(BaseTextButton.BaseTextButton, obj5);
      }
      const obj6 = { variant: "text-xs/normal", style: tmp28, children: str };
      cResult[15] = str;
      cResult[16] = tmp28;
      cResult[17] = authStore2(Text_Text.Text, obj6);
      const tmp31 = authStore2(Text_Text.Text, obj6);
    }
    const items = [tmp4.statusText, tmp17];
    cResult[12] = tmp17;
    cResult[13] = tmp4.statusText;
    cResult[14] = items;
  }
  const obj7 = { style: tmp4.sectionHeader, children: tmp23 };
  cResult[7] = tmp4.sectionHeader;
  cResult[8] = tmp23;
  cResult[9] = authStore2(metroRequire, obj7);
  authStore2(metroRequire, obj7);
}) : (() => {
  let items;
  let items1;
  let obj3;
  let statusError;
  const tmp = closure_16();
  const tmp2 = closure_11((override) => override.override);
  const tmp3 = closure_11((status) => status.status);
  let str = closure_11((error) => error.error);
  let closure_0 = closure_11((loadFromDevice) => loadFromDevice.loadFromDevice);
  const tmp4 = closure_11((clear) => clear.clear);
  if ("error" === tmp3) {
    statusError = tmp.statusError;
  } else {
    statusError = "loading" === tmp3 ? tmp.statusLoading : tmp.statusSuccess;
  }
  let str3 = "Loading\u2026";
  if ("loading" !== tmp3) {
    let str4;
    if ("error" === tmp3) {
      if (str == null) {
        str = "Failed to load";
      }
      str4 = str;
    } else {
      str4 = "No frame loaded";
      if (null != tmp2) {
        const frameKey = tmp2.frameKey;
        let str5 = "s";
        if (1 === tmp2.layers.length) {
          str5 = "";
        }
        const _HermesInternal = HermesInternal;
        str4 = "Showing \"" + frameKey + "\" \u00B7 " + length + " layer" + str5;
      }
    }
    str3 = str4;
  }
  const obj = { style: tmp.section, children: items };
  const obj2 = { style: tmp.sectionHeader, children: authStore2(Text_Text.Text, obj3) };
  obj3 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Frame Preview Override" };
  items = [authStore2(metroRequire, obj2), , , , ];
  const obj4 = { variant: "text-sm/normal", style: tmp.description, children: "Overrides every profile-frame preview with a frame pushed to this device. Tap Load after Cap (or pushFrameOverride.mjs) pushes one." };
  items[1] = authStore2(Text_Text.Text, obj4);
  const obj5 = { variant: "text-xs/normal", style: items1, children: str3 };
  items1 = [tmp.statusText, statusError];
  items[2] = authStore2(Text_Text.Text, obj5);
  const obj6 = {
    pillStyle: tmp.secondaryButton,
    text: "Load from device",
    onPress() {
      closure_0();
    }
  };
  items[3] = authStore2(BaseTextButton.BaseTextButton, obj6);
  let tmp12Result = null != tmp2;
  if (tmp12Result) {
    const obj7 = { pillStyle: tmp.secondaryButton, text: "Clear override", onPress: tmp4 };
    tmp12Result = authStore2(BaseTextButton.BaseTextButton, obj7);
  }
  items[4] = tmp12Result;
  return closure_15(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let categories;
  let closure_0;
  let closure_3;
  let first;
  let isFetching;
  let items3;
  let purchases;
  let str;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(89);
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
  const tmpResult = tmp(first[19]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesPurchaseStore];
    class T {
      constructor() {
        return purchases.purchases;
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    tmp10 = T;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(first[19]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CollectiblesCategoryStore];
    class E {
      constructor() {
        return CollectiblesCategoryStore.lastSuccessfulFetch;
      }
    }
    cResult[4] = items2;
    cResult[5] = E;
    tmp14 = E;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  let tmp17 = stateFromStores.size > 0;
  const tmpResult4 = tmp(first[19]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
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
        return CollectiblesCategoryStore.lastSuccessfulFetch;
      }
    }
    cResult[7] = obj2;
    tmp19 = obj2;
  } else {
    tmp19 = cResult[7];
  }
  ({ isFetching, categories } = str(first[20])(tmp19));
  let tmp22 = tmp17;
  str(first[20])(tmp19);
  const tmp20 = str;
  if (!tmp22) {
    let tmp23 = !isFetching;
    if (tmp23) {
      if (tmp17) {
        categories = stateFromStores;
      }
      tmp23 = categories.size > 0;
    }
    tmp22 = tmp23;
  }
  _require = tmp22;
  str = _slicedToArray(react.useState(""), 2)[0];
  _slicedToArray(react.useState(""), 2);
  [first, _slicedToArray] = react.useState(null);
  const tmp27 = _slicedToArray(react.useState(null), 2);
  [r10094, react] = tmp27;
  if (cResult[8] === tmp22) {
    let tmp28;
    let tmp29;
    if (cResult[9] === str) {
      tmp28 = cResult[10];
      tmp29 = cResult[11];
    }
    const effect = react.useEffect(tmp28, tmp29);
    if (cResult[12] !== first) {
      class R {
        constructor() {
          if (null != first) {
            const obj2 = { product: tmp, useCategoryImage: true };
            const obj = ProductPurchaseSuccessActionCreatorsDefault;
            obj.open(obj2);
          }
        }
      }
      cResult[12] = first;
      class E {
        constructor() {
          return CollectiblesCategoryStore.lastSuccessfulFetch;
        }
      }
      cResult[13] = R;
    } else {
      class R {
        constructor() {
          if (null != first) {
            const obj2 = { product: tmp, useCategoryImage: true };
            const obj = ProductPurchaseSuccessActionCreatorsDefault;
            obj.open(obj2);
          }
        }
      }
    }
    class E {
      constructor() {
        return CollectiblesCategoryStore.lastSuccessfulFetch;
      }
    }
    if (cResult[16] === tmp4.sectionHeader) {
      class R {
        constructor() {
          if (null != first) {
            const obj2 = { product: tmp, useCategoryImage: true };
            const obj = ProductPurchaseSuccessActionCreatorsDefault;
            obj.open(obj2);
          }
        }
      }
      const _Symbol = Symbol;
      class E {
        constructor() {
          return CollectiblesCategoryStore.lastSuccessfulFetch;
        }
      }
      if (cResult[20] === tmp4.section) {
        class R {
          constructor() {
            if (null != first) {
              const obj2 = { product: tmp, useCategoryImage: true };
              const obj = ProductPurchaseSuccessActionCreatorsDefault;
              obj.open(obj2);
            }
          }
        }
        if (cResult[23] !== tmp4.sectionTitle) {
          class R {
            constructor() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                const obj = ProductPurchaseSuccessActionCreatorsDefault;
                obj.open(obj2);
              }
            }
          }
          class E {
            constructor() {
              return CollectiblesCategoryStore.lastSuccessfulFetch;
            }
          }
          cResult[23] = tmp4.sectionTitle;
          cResult[24] = tmp44;
        } else {
          class R {
            constructor() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                const obj = ProductPurchaseSuccessActionCreatorsDefault;
                obj.open(obj2);
              }
            }
          }
        }
        if (cResult[25] === tmp4.sectionHeader) {
          class R {
            constructor() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                const obj = ProductPurchaseSuccessActionCreatorsDefault;
                obj.open(obj2);
              }
            }
          }
          if (cResult[28] !== tmp4.inputLabel) {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
            class E {
              constructor() {
                return CollectiblesCategoryStore.lastSuccessfulFetch;
              }
            }
            cResult[28] = tmp4.inputLabel;
            cResult[29] = tmp49;
          } else {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
          }
          const _Symbol2 = Symbol;
          class E {
            constructor() {
              return CollectiblesCategoryStore.lastSuccessfulFetch;
            }
          }
          if (tmp50 === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
            tmp52[1] = tmp20(first[12]).space.PX_12;
            class E {
              constructor() {
                return CollectiblesCategoryStore.lastSuccessfulFetch;
              }
            }
          } else {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
          }
          if (cResult[31] !== str) {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
            const obj5 = { value: str, onChangeText: null, placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: tmp52 };
            class E {
              constructor() {
                return CollectiblesCategoryStore.lastSuccessfulFetch;
              }
            }
            cResult[31] = str;
            cResult[32] = closure_14(tmp(first[23]).TextInput, obj5);
            const tmp54 = closure_14(tmp(first[23]).TextInput, obj5);
          } else {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
          }
          if (cResult[33] === tmp4.inputWrapper) {
            class R {
              constructor() {
                if (null != first) {
                  const obj2 = { product: tmp, useCategoryImage: true };
                  const obj = ProductPurchaseSuccessActionCreatorsDefault;
                  obj.open(obj2);
                }
              }
            }
            if (cResult[36] === tmp22) {
              class R {
                constructor() {
                  if (null != first) {
                    const obj2 = { product: tmp, useCategoryImage: true };
                    const obj = ProductPurchaseSuccessActionCreatorsDefault;
                    obj.open(obj2);
                  }
                }
              }
            }
            const tmp60 = !tmp22 && "" !== str.trim();
            class E {
              constructor() {
                return CollectiblesCategoryStore.lastSuccessfulFetch;
              }
            }
            cResult[36] = tmp22;
            cResult[37] = str;
            cResult[38] = tmp4.statusLoading;
            cResult[39] = tmp4.statusText;
            cResult[40] = tmp60;
          }
          const obj7 = { style: tmp4.inputWrapper, children: tmp53 };
          cResult[33] = tmp4.inputWrapper;
          cResult[34] = tmp53;
          cResult[35] = closure_14(closure_6, obj7);
          const tmp58 = closure_14(closure_6, obj7);
        }
        class E {
          constructor() {
            return CollectiblesCategoryStore.lastSuccessfulFetch;
          }
        }
        const obj8 = { style: tmp4.sectionHeader, children: tmp44 };
        cResult[25] = tmp4.sectionHeader;
        cResult[26] = tmp44;
        cResult[27] = closure_14(closure_6, obj8);
        const tmp47 = closure_14(closure_6, obj8);
      }
      const obj9 = { style: tmp4.section, children: items3 };
      items3 = [tmp33, tmp38];
      cResult[20] = tmp4.section;
      cResult[21] = tmp33;
      cResult[22] = closure_15(closure_6, obj9);
      const tmp42 = closure_15(closure_6, obj9);
    }
    const obj10 = { style: tmp4.sectionHeader, children: tmp32 };
    cResult[16] = tmp4.sectionHeader;
    cResult[17] = tmp32;
    cResult[18] = closure_14(closure_6, obj10);
    const tmp36 = closure_14(closure_6, obj10);
  }
  class O {
    constructor() {
      if ("" !== str.trim()) {
        if (closure_0) {
          const product = CollectiblesCategoryStore.getProduct(str);
          const categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(str);
          if (null != product) {
            if (null != categoryForProduct) {
              closure_3(product);
              react(categoryForProduct);
            }
          }
          closure_3(null);
          react(null);
        }
      }
      closure_3(null);
      react(null);
    }
  }
  const items4 = [str, tmp22];
  cResult[8] = tmp22;
  cResult[9] = str;
  cResult[10] = O;
  cResult[11] = items4;
  tmp29 = items4;
  tmp28 = O;
}) : (() => {
  let TextInput;
  let categories;
  let closure_0;
  let closure_3;
  let closure_4;
  let first1;
  let isFetching;
  let items10;
  let items11;
  let items13;
  let items4;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj15;
  let obj16;
  let obj22;
  let obj25;
  let obj29;
  let obj8;
  let product;
  let purchases;
  let str;
  let tmp14;
  const tmp = closure_16();
  let obj = require("useStateFromStores");
  const items = [CollectiblesCategoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  let obj2 = require("useStateFromStores");
  const items1 = [CollectiblesPurchaseStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => purchases.purchases);
  const items2 = [CollectiblesCategoryStore];
  let tmp7 = stateFromStores.size > 0;
  const obj3 = require("useStateFromStores");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => CollectiblesCategoryStore.lastSuccessfulFetch);
  if (tmp7) {
    tmp7 = stateFromStores1.size > 0;
  }
  if (tmp7) {
    tmp7 = null != stateFromStores2;
  }
  ({ isFetching, categories } = str(tmp3[20])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 }));
  let tmp20Result2 = tmp7;
  const tmp10 = str(tmp3[20])({ logPerf: false, stalePurchasesOK: true, noOp: tmp7 });
  const tmp9 = str;
  if (!tmp20Result2) {
    let tmp12 = !isFetching;
    if (tmp12) {
      if (tmp7) {
        categories = stateFromStores;
      }
      tmp12 = categories.size > 0;
    }
    tmp20Result2 = tmp12;
  }
  _require = tmp20Result2;
  [str, tmp14] = react.useState("");
  [product, _slicedToArray] = react.useState(null);
  [first1, react] = react.useState(null);
  const items3 = [str, tmp20Result2];
  const effect = react.useEffect(() => {
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
  const obj6 = { style: tmp.section, children: items4 };
  const obj7 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, obj8) };
  obj8 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Shop Settings" };
  items4 = [closure_14(closure_6, obj7), closure_14(require("ShopSkipCategoriesFilter").ShopSkipCategoriesFilter, {})];
  const items5 = [closure_15(closure_6, obj6), , , ];
  const obj9 = { style: tmp.section, children: items6 };
  const obj10 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, obj11) };
  obj11 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Configuration" };
  items6 = [closure_14(closure_6, obj10), ];
  const obj12 = { style: tmp.inputContainer, children: items7 };
  items7 = [, , , , ];
  const obj13 = { variant: "text-md/semibold", style: tmp.inputLabel, children: "Primary Product SKU ID" };
  items7[0] = closure_14(require("Text/Text").Text, obj13);
  const obj14 = { style: tmp.inputWrapper, children: closure_14(TextInput, obj15) };
  obj15 = { value: str, onChangeText: tmp14, placeholder: "Enter product SKU ID (e.g., 1366494385482502184)", returnKeyType: "done", style: obj16 };
  obj16 = { fontSize: 14, padding: tmp9(product[12]).space.PX_12 };
  TextInput = tmp2(tmp3[23]).TextInput;
  items7[1] = closure_14(closure_6, obj14);
  let tmp20Result = !tmp20Result2 && "" !== str.trim();
  if (tmp20Result) {
    const obj17 = { variant: "text-xs/normal", style: items8, children: "Loading products..." };
    items8 = [, ];
    ({ statusText: arr9[0], statusLoading: arr9[1] } = tmp);
    tmp20Result = closure_14(tmp2(tmp3[16]).Text, obj17);
  }
  items7[2] = tmp20Result;
  if (tmp20Result2) {
    tmp20Result2 = "" !== str.trim();
  }
  if (tmp20Result2) {
    tmp20Result2 = null == product;
  }
  if (tmp20Result2) {
    const obj18 = { variant: "text-xs/normal", style: items9, children: "Product not found" };
    items9 = [, ];
    ({ statusText: arr10[0], statusError: arr10[1] } = tmp);
    tmp20Result2 = closure_14(tmp2(tmp3[16]).Text, obj18);
  }
  items7[3] = tmp20Result2;
  let tmp22Result = null != product;
  if (tmp22Result) {
    const obj19 = { variant: "text-xs/normal", style: items10, children: items11 };
    items10 = [, ];
    ({ statusText: arr11[0], statusSuccess: arr11[1] } = tmp);
    items11 = ["Found: ", product.name];
    tmp22Result = closure_15(tmp2(tmp3[16]).Text, obj19);
  }
  items7[4] = tmp22Result;
  items6[1] = closure_15(closure_6, obj12);
  items5[1] = closure_15(closure_6, obj9);
  const obj20 = { style: tmp.section, children: null };
  const obj21 = { style: tmp.sectionHeader, children: closure_14(require("Text/Text").Text, obj22) };
  obj22 = { variant: "heading-md/semibold", style: tmp.sectionTitle, children: "Product Preview" };
  const items12 = [closure_14(closure_6, obj21), ];
  if (null != product) {
    let tmp22Result2;
    if (null != first1) {
      const obj23 = { style: tmp.contentContainer, children: items13 };
      const obj24 = { style: tmp.previewContainer, children: closure_14(closure_17, obj25) };
      obj25 = { product };
      items13 = [closure_14(closure_6, obj24), , ];
      const obj26 = {
        pillStyle: tmp.previewButton,
        text: "Show Collectibles Modal",
        onPress() {
              if (null != first) {
                const obj2 = { product: tmp, useCategoryImage: true };
                const obj = ProductPurchaseSuccessActionCreatorsDefault;
                obj.open(obj2);
              }
            }
      };
      items13[1] = closure_14(require("BaseTextButton").BaseTextButton, obj26);
      const obj27 = { product };
      items13[2] = closure_14(closure_18, obj27);
      tmp22Result2 = closure_15(closure_6, obj23);
    }
    items12[1] = tmp22Result2;
    obj20.children = items12;
    items5[2] = closure_15(closure_6, obj20);
    items5[3] = closure_14(closure_19, {});
    obj5.children = items5;
    obj4.children = closure_15(closure_5, obj5);
    return closure_14(closure_6, obj4);
  }
  const obj28 = { style: tmp.placeholder, children: closure_15(require("Text/Text").Text, obj29) };
  obj29 = { variant: "text-sm/normal", style: tmp.placeholderText, children: ["Enter a valid product SKU ID above", "\n", "to see the product preview"] };
  tmp22Result2 = closure_14(closure_6, obj28);
});
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/CollectiblesTool.tsx");

export default tmp6;
export const GiftingFlowSection = tmp5;