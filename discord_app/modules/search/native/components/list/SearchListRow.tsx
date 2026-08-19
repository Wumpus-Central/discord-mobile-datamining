// discord_app/modules/search/native/components/list/SearchListRow.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../../design/void/Pressables/native/Pressables.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { SEARCH_ROW_TAP_STATE_PADDING as closure_4 } from "../../../SearchConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((marginLeft) => {
  const obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
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
  const tmpResult = callback2(iconWidth);
  const items = [tmpResult.pressable, containerStyle];
  const items1 = [header, , ];
  const items2 = [tmpResult.body, bodyStyle];
  const items3 = [tmpResult.iconContainer, iconContainerStyle];
  const items4 = [callback(View, { style: items3, children: icon }), , ];
  const obj = { style: tmpResult.labels, children: null };
  let tmp7Result = label;
  if (typeof label === "string") {
    obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj1[3] = tmpResult.text;
    obj1[4] = label;
    tmp7Result = callback(Text.Text, obj1);
  }
  const items5 = [tmp7Result, subLabel];
  obj[1] = items5;
  items4[1] = callback(View, obj);
  items4[2] = trailing;
  obj[1] = items4;
  items1[1] = callback(View, obj);
  tmp7Result = null != extras;
  if (tmp7Result) {
    const obj2 = { style: null, children: null };
    const items6 = [tmpResult.extrasContainer];
    obj2[0] = items6;
    obj2[1] = extras;
    tmp7Result = callback(View, obj2);
  }
  items1[2] = tmp7Result;
  obj[10] = items1;
  return callback(PressableBase.PressableHighlight, obj);
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;