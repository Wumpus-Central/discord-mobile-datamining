// === Module 6607: Input ===

// Module 6607 (Input)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getNodeText from "getNodeText" /* 4264 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6608 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { inputRow: null, labelWrapper: null, label: null, description: null, error: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
let obj1 = { marginBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_4 };
let obj2 = { marginBottom: ThemesDefault.space.PX_4 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_4 };
let obj3 = { marginTop: ThemesDefault.space.PX_4 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_4, width: "auto" };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginTop: ThemesDefault.space.PX_4, width: "auto" };
const result = require("set").fileFinishedImporting("design/components/Input/native/Input.native.tsx");

export const Input = function Input(arg0) {
  const tmp = callback2();
  ({ label, labelTrailing, labelId, description, errorMessage, required } = arg0);
  ({ children, containerStyle } = arg0);
  let obj = getRequiredFieldA11yName;
  obj1 = getNodeText;
  const requiredFieldA11yName = obj.getRequiredFieldA11yName(obj1.getNodeText(label), required);
  obj = { style: containerStyle, children: null };
  if (null == label) {
    const items = [null, , , ];
    obj = { style: null, children: null };
    obj[0] = tmp.inputRow;
    obj[1] = children;
    items[1] = callback(tmp6, obj);
    let tmp11Result = null;
    if (null != description) {
      obj1 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
      obj1[2] = tmp.description;
      obj1[3] = description;
      tmp11Result = tmp11(tmp2(4556).Text, obj1);
    }
    items[2] = tmp11Result;
    tmp11Result = null;
    if (null != errorMessage) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.error;
      obj2[1] = errorMessage;
      tmp11Result = tmp11(tmp2(6609).ErrorText, obj2);
    }
    items[3] = tmp11Result;
    obj[1] = items;
    return tmp5(tmp6, obj);
  } else if (null != labelTrailing) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.labelWrapper;
    const obj4 = { variant: "text-sm/semibold", color: "text-subtle", nativeID: null, accessibilityLabel: null, children: null };
    obj4[2] = labelId;
    obj4[3] = requiredFieldA11yName;
    obj4[4] = label;
    const items1 = [callback(tmp2(4556).Text, obj4), labelTrailing];
    obj3[1] = items1;
    let tmp5Result = tmp5(tmp6, obj3);
  } else {
    const obj5 = { variant: "text-sm/semibold", color: "text-subtle", style: null, nativeID: null, accessibilityLabel: null, children: null };
    obj5[2] = tmp.label;
    obj5[3] = labelId;
    obj5[4] = requiredFieldA11yName;
    const items2 = [label, ];
    tmp5Result = null;
    if (required) {
      const obj6 = { variant: "text-sm/bold", color: "text-feedback-critical", "aria-hidden": true, children: null };
      obj6[3] = [" ", "*"];
      tmp5Result = tmp5(tmp2(4556).Text, obj6);
    }
    items2[1] = tmp5Result;
    obj5[5] = items2;
    tmp5Result = tmp5(tmp2(4556).Text, obj5);
  }
};