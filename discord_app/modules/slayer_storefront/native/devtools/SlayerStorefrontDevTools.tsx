// === Module 15548: SlayerStorefrontDevTools ===

// Module 15548 (SlayerStorefrontDevTools)
import ThemesDefault from "Themes" /* 709 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import closure_9 from "addSku" /* 4527 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { wrap: null, inputRow: null, buttons: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_12 };
let obj1 = { padding: ThemesDefault.space.PX_12 };
createCacheKey[2] = { padding: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj2 = { padding: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default function SlayerStorefrontDevTools() {
  const tmp = callback2();
  [str, tmp4] = callback(React.useState(""), 2);
  const trimmed = str.trim();
  let _require = trimmed;
  let obj = _require(586);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let value;
    if (length.length > 0) {
      value = closure_1_9.get(tmp);
    }
    return value;
  });
  const tmp3 = callback(React.useState(""), 2);
  [tmp8, importDefault] = callback(React.useState(false), 2);
  const tmp7 = callback(React.useState(false), 2);
  [tmp10, dependencyMap] = callback(React.useState(null), 2);
  obj1 = _require(586);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  _require = undefined;
  _require = stateFromStores1((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let lib2 = tmp5;
              if (0 !== lib.length) {
                closure_1_2(null);
                lib2(true);
                c4 = 1;
                obj1 = lib(closure_2_2[11]);
                c5 = 2;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.fetchSKU(lib);
                return obj1;
              } else {
                c6 = 3;
              }
            }
          } else if (1 === tmp8) {
            c4 = 0;
            lib2 = closure_3;
            const _Error = Error;
            if (lib2 instanceof Error) {
              let message = lib2.message;
            } else {
              const _String = String;
              message = String(lib2);
            }
            closure_1_2(message);
            lib2(false);
            c6 = 3;
            const tmp20 = closure_1_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c4 = 0;
            lib2(false);
            lib(lib);
          }
          c4 = 0;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp36) {
          closure_3 = tmp36;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp36;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [trimmed];
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback];
  const items4 = [callback, stateFromStores1];
  const callback1 = React.useCallback(() => {
    callback((skuId) => {
      let obj = callback(table[12]);
      obj = { skuId };
      const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    });
  }, items3);
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: null, paddingBottom: null };
  callback2 = React.useCallback(() => {
    callback((skuId) => {
      let obj = closure_1_0(closure_1_2[12]);
      obj = { skuId, recipient: closure_3 };
      const result = obj.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    });
  }, items4);
  obj[0] = ThemesDefault.space.PX_16;
  obj[1] = ThemesDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  obj[1] = obj;
  obj1 = { style: tmp.inputRow, children: callback(_require(7714).TextInput, { label: "SKU ID", value: str, onChange: tmp4, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  const items5 = [callback(closure_7, obj1), , , ];
  let str2;
  if (stateFromStores != null) {
    str2 = stateFromStores.name;
  }
  if (str2 == null) {
    str2 = "Not loaded";
  }
  const tmp16 = closure_6;
  const tmp18 = closure_7;
  const tmp9 = callback(React.useState(null), 2);
  items5[1] = callback(_require(5607).TableRow, { label: "Name: " + str2 });
  let str3;
  if (stateFromStores != null) {
    str3 = stateFromStores.applicationId;
  }
  if (str3 == null) {
    str3 = "N/A";
  }
  const obj2 = { label: "Name: " + str2 };
  items5[2] = callback(_require(5607).TableRow, { label: "Application ID: " + str3 });
  let tmp15Result = null != tmp10;
  if (tmp15Result) {
    const obj4 = { label: null };
    const _HermesInternal = HermesInternal;
    obj4[0] = "Fetch failed: " + tmp10;
    tmp15Result = tmp15(tmp5(5607).TableRow, obj4);
  }
  items5[3] = tmp15Result;
  const items6 = [closure_11(_require(6000).TableRowGroup, { title: "SKU", hasIcons: false, children: items5 }), ];
  const obj5 = { style: tmp.buttons, children: null };
  const items7 = [callback(_require(4928).Button, { text: "Open Self Purchase Success", onPress: callback1, disabled: 0 === trimmed.length, loading: tmp8 }), callback(_require(4928).Button, { text: "Open Gift Purchase Success", onPress: callback2, disabled: 0 === trimmed.length, loading: tmp8, variant: "secondary" })];
  obj5[1] = items7;
  const items8 = [closure_11(tmp18, obj5), ];
  let str5;
  if (stateFromStores1 != null) {
    str5 = stateFromStores1.username;
  }
  if (str5 == null) {
    str5 = "N/A";
  }
  const obj8 = { spacing: 16, children: null };
  const obj9 = { title: "Purchase Success Modals", hasIcons: false, children: null };
  const obj3 = { label: "Application ID: " + str3 };
  const obj6 = { text: "Open Self Purchase Success", onPress: callback1, disabled: 0 === trimmed.length, loading: tmp8 };
  const obj7 = { text: "Open Gift Purchase Success", onPress: callback2, disabled: 0 === trimmed.length, loading: tmp8, variant: "secondary" };
  items8[1] = callback(_require(5607).TableRow, { label: "Gift recipient: " + str5 + " (self)" });
  obj9[2] = items8;
  items6[1] = closure_11(_require(6000).TableRowGroup, obj9);
  obj8[1] = items6;
  obj[2] = closure_11(_require(4926).Stack, obj8);
  return callback(tmp16, obj);
};