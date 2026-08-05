// discord_app/design/components/Input/native/Input.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { inputRow: null, labelWrapper: null, label: null, description: null, error: null };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_4, marginBottom: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_4, flexDirection: "row", alignItems: "center" };
let obj1 = { marginBottom: require("Themes").space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_4 };
let obj2 = { marginBottom: require("Themes").space.PX_4 };
createCacheKey[3] = { marginTop: require("Themes").space.PX_4 };
let obj3 = { marginTop: require("Themes").space.PX_4 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_4, width: "auto" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: require("Themes").space.PX_4, width: "auto" };
const result = require("jsxProd").fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  let children;
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let labelId;
  let labelTrailing;
  let required;
  const tmp = createCacheKey();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  if (typeof label === "string") {
    if (true === required) {
      const intl = require(1236) /* getSystemLocale */.intl;
      const _HermesInternal = HermesInternal;
      const combined = "" + label + " (" + intl.string(require(1236) /* getSystemLocale */.t.EkokLy) + ")";
    }
  }
  let obj = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: null, children: null };
    obj[0] = tmp.inputRow;
    obj[1] = children;
    items[1] = callback(tmp8, obj);
    let tmp15Result = null;
    if (null != description) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj[2] = tmp.description;
      obj[3] = description;
      tmp15Result = tmp15(require(4281) /* Text */.Text, obj);
    }
    items[2] = tmp15Result;
    tmp15Result = null;
    if (null != errorMessage) {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp.error;
      obj1[1] = errorMessage;
      tmp15Result = tmp15(require(7715) /* ErrorText */.ErrorText, obj1);
    }
    items[3] = tmp15Result;
    obj[1] = items;
    return tmp7(tmp8, obj);
  } else if (null != labelTrailing) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.labelWrapper;
    const obj3 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: null, children: null };
    obj3[2] = labelId;
    obj3[3] = label;
    const items1 = [callback(require(4281) /* Text */.Text, obj3), labelTrailing];
    obj2[1] = items1;
    let tmp7Result = tmp7(tmp8, obj2);
  } else {
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", style: null, nativeID: null, accessibilityLabel: null, children: null };
    obj4[2] = tmp.label;
    obj4[3] = labelId;
    obj4[4] = combined;
    const items2 = [label, ];
    tmp7Result = null;
    if (required) {
      const obj5 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: null };
      obj5[3] = [" ", "*"];
      tmp7Result = tmp7(tmp22(4281).Text, obj5);
    }
    items2[1] = tmp7Result;
    obj4[5] = items2;
    tmp7Result = tmp7(require(4281) /* Text */.Text, obj4);
    tmp22 = require;
  }
};