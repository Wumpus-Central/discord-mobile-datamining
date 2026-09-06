// discord_app/modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, inputRow: null, buttons: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.wrap = createStyles;
createStyles.inputRow = { padding: nativeDefault.space.PX_12 };
let obj1 = { padding: nativeDefault.space.PX_12 };
createStyles.buttons = { padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default function SlayerStorefrontDevTools() {
  const tmp = closure_12();
  [str, tmp4] = callback(noop.useState(""), 2);
  const trimmed = str.trim();
  _require = trimmed;
  let obj = require("initialize");
  const items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    value = undefined;
    if (length.length > 0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  const tmp3 = callback(noop.useState(""), 2);
  [tmp8, importDefault] = callback(noop.useState(false), 2);
  const tmp7 = callback(noop.useState(false), 2);
  [tmp10, dependencyMap] = callback(noop.useState(null), 2);
  let obj1 = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  _require = stateFromStores1(function* (arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = length;
            if (0 !== length.length) {
              tmp3(null);
              tmp5(true);
              c4 = 1;
              let obj1 = length(10816);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.fetchSKU(length);
              return obj1;
            } else {
              c6 = 3;
            }
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_129_1 = closure_3;
          const _Error = Error;
          if (closure_129_1 instanceof Error) {
            let message = closure_129_1.message;
          } else {
            const _String = String;
            message = String(closure_129_1);
          }
          tmp3(message);
          tmp5(false);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c4 = 0;
          tmp5(false);
          closure_129_0(length);
        }
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
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
  });
  const items2 = [trimmed];
  callback = noop.useCallback(function () {
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
  const callback1 = noop.useCallback(() => {
    callback((skuId) => {
      length(dependencyMap[12]);
      const obj = { skuId };
      const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    });
  }, items3);
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: null, paddingBottom: null };
  const callback2 = noop.useCallback(() => {
    callback((skuId) => {
      closure_0(10797);
      const obj = { skuId, recipient: stateFromStores1 };
      const result = obj.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    });
  }, items4);
  obj.paddingVertical = nativeDefault.space.PX_16;
  obj.paddingBottom =
    nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom;
  obj.contentContainerStyle = obj;
  obj1 = {
    style: tmp.inputRow,
    children: closure_10(require("TextInput").TextInput, {
      label: "SKU ID",
      value: str,
      onChange: tmp4,
      placeholder: "1234567890123456789",
      autoCapitalize: "none",
      autoCorrect: false,
      keyboardType: "number-pad",
    }),
  };
  const items5 = [closure_10(closure_7, obj1), , ,];
  let str2;
  if (stateFromStores != null) {
    str2 = stateFromStores.name;
  }
  if (str2 == null) {
    str2 = "Not loaded";
  }
  const tmp9 = callback(noop.useState(null), 2);
  items5[1] = closure_10(require("TableRow").TableRow, { label: "Name: " + str2 });
  let str3;
  if (stateFromStores != null) {
    str3 = stateFromStores.applicationId;
  }
  if (str3 == null) {
    str3 = "N/A";
  }
  const obj2 = { label: "Name: " + str2 };
  items5[2] = closure_10(require("TableRow").TableRow, { label: "Application ID: " + str3 });
  let tmp15Result = null != tmp10;
  if (tmp15Result) {
    const obj4 = { label: null };
    const _HermesInternal = HermesInternal;
    obj4.label = "Fetch failed: " + tmp10;
    tmp15Result = closure_10(tmp5(5605).TableRow, obj4);
  }
  items5[3] = tmp15Result;
  const items6 = [
    closure_11(require("TableRowGroup").TableRowGroup, { title: "SKU", hasIcons: false, children: items5 }),
  ];
  const obj5 = { style: tmp.buttons, children: null };
  const items7 = [
    closure_10(require("components/Button/Button").Button, {
      text: "Open Self Purchase Success",
      onPress: callback1,
      disabled: 0 === trimmed.length,
      loading: tmp8,
    }),
    closure_10(require("components/Button/Button").Button, {
      text: "Open Gift Purchase Success",
      onPress: callback2,
      disabled: 0 === trimmed.length,
      loading: tmp8,
      variant: "secondary",
    }),
  ];
  obj5.children = items7;
  const items8 = [closure_11(closure_7, obj5)];
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
  const obj6 = {
    text: "Open Self Purchase Success",
    onPress: callback1,
    disabled: 0 === trimmed.length,
    loading: tmp8,
  };
  const obj7 = {
    text: "Open Gift Purchase Success",
    onPress: callback2,
    disabled: 0 === trimmed.length,
    loading: tmp8,
    variant: "secondary",
  };
  items8[1] = closure_10(require("TableRow").TableRow, { label: "Gift recipient: " + str5 + " (self)" });
  obj9.children = items8;
  items6[1] = closure_11(require("TableRowGroup").TableRowGroup, obj9);
  obj8.children = items6;
  obj.children = closure_11(require("Stack/Stack").Stack, obj8);
  return closure_10(closure_6, obj);
}
