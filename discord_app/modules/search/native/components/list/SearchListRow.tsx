// === Module 16005: SearchListRow ===

// Module 16005 (SearchListRow)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4376 */;
import PressableBase from "PressableBase" /* 4949 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { SEARCH_ROW_TAP_STATE_PADDING as closure_4 } from "MessageEmbedTypes" /* 8554 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((marginLeft) => {
  obj = { pressable: obj, body: { flexDirection: "row", alignItems: "center" }, labels: { justifyContent: "center", flex: 1 }, underlayColor: null, text: null, iconContainer: null, extrasContainer: null };
  obj = { paddingHorizontal: 16, paddingVertical: closure_4 };
  obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj[3] = obj;
  obj[4] = { flexShrink: 1 };
  obj[5] = { marginRight: 12 };
  obj[6] = { marginLeft };
  return obj;
});
const memoResult = importAllResult.memo((accessibilityRole) => {
  ({ label, iconWidth, extras, accessible } = accessibilityRole);
  ({ containerStyle, onPress, subLabel, icon, iconContainerStyle, trailing, header } = accessibilityRole);
  if (accessible === undefined) {
    accessible = true;
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, bodyStyle } = accessibilityRole);
  if (iconWidth == null) {
    iconWidth = 0;
  }
  const tmpResult = closure_7(iconWidth);
  let obj = { accessible, accessibilityRole: str, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, style: items, onPress, unstable_pressDelay: 130, underlayColor: tmpResult.underlayColor.backgroundColor, children: null };
  items = [tmpResult.pressable, containerStyle];
  const items1 = [header, , ];
  obj = { style: items2, children: null };
  items2 = [tmpResult.body, bodyStyle];
  const items3 = [tmpResult.iconContainer, iconContainerStyle];
  const items4 = [callback(View, { style: items3, children: icon }), , ];
  obj = { style: tmpResult.labels, children: null };
  let tmp7Result = label;
  if (typeof label === "string") {
    obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj1[3] = tmpResult.text;
    obj1[4] = label;
    tmp7Result = tmp7(Text.Text, obj1);
  }
  const items5 = [tmp7Result, subLabel];
  obj[1] = items5;
  items4[1] = closure_6(View, obj);
  items4[2] = trailing;
  obj[1] = items4;
  items1[1] = closure_6(View, obj);
  tmp7Result = null != extras;
  if (tmp7Result) {
    const obj2 = { style: null, children: null };
    const items6 = [tmpResult.extrasContainer];
    obj2[0] = items6;
    obj2[1] = extras;
    tmp7Result = tmp7(tmp6, obj2);
  }
  items1[2] = tmp7Result;
  obj[10] = items1;
  return closure_6(PressableBase.PressableHighlight, obj);
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;