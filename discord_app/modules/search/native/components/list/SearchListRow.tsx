import { View } from "get ActivityIndicator";
import { SEARCH_ROW_TAP_STATE_PADDING as closure_4 } from "MessageEmbedTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((marginLeft) => {
  obj = { pressable: obj, body: { flexDirection: "row", alignItems: "center" }, labels: { justifyContent: "center", flex: 1 }, underlayColor: null, text: null, iconContainer: null, extrasContainer: null };
  obj = { paddingHorizontal: 16, paddingVertical: closure_4 };
  obj = { backgroundColor: importDefault(712).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj[3] = obj;
  obj[4] = { flexShrink: 1 };
  obj[5] = { marginRight: 12 };
  obj[6] = { marginLeft };
  return obj;
});
const memoResult = require("noop").memo((accessibilityRole) => {
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessible;
  let bodyStyle;
  let containerStyle;
  let extras;
  let header;
  let icon;
  let iconContainerStyle;
  let iconWidth;
  let label;
  let onAccessibilityAction;
  let onPress;
  let subLabel;
  let trailing;
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
    const obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj1[3] = tmpResult.text;
    obj1[4] = label;
    tmp7Result = tmp7(require(4281) /* Text */.Text, obj1);
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
  return closure_6(require(4812) /* PressableBase */.PressableHighlight, obj);
});
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;