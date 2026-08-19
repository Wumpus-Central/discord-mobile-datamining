// === Module 8072: Input ===

// Module 8072 (Input)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import ErrorText from "ErrorText" /* 8073 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_4 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4, width: "auto" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  const tmp = callback2();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  if (typeof label === "string") {
    if (true === required) {
      const intl = getSystemLocale.intl;
      const _HermesInternal = HermesInternal;
      const combined = "" + label + " (" + intl.string(getSystemLocale.t.EkokLy) + ")";
    }
  }
  let obj = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: null, children: null };
    obj[0] = tmp.inputRow;
    obj[1] = children;
    items[1] = callback(View, obj);
    let tmp15Result = null;
    if (null != description) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj[2] = tmp.description;
      obj[3] = description;
      tmp15Result = callback(Text.Text, obj);
    }
    items[2] = tmp15Result;
    tmp15Result = null;
    if (null != errorMessage) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp.error;
      obj1[1] = errorMessage;
      tmp15Result = callback(ErrorText.ErrorText, obj1);
    }
    items[3] = tmp15Result;
    obj[1] = items;
    return callback(View, obj);
  } else if (null != labelTrailing) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.labelWrapper;
    const obj3 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: null, children: null };
    obj3[2] = labelId;
    obj3[3] = label;
    const items1 = [callback(Text.Text, obj3), labelTrailing];
    obj2[1] = items1;
    let tmp7Result = callback(View, obj2);
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
      tmp7Result = callback(Text.Text, obj5);
    }
    items2[1] = tmp7Result;
    obj4[5] = items2;
    tmp7Result = callback(Text.Text, obj4);
  }
};