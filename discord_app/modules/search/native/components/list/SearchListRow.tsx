// discord_app/modules/search/native/components/list/SearchListRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const paddingVertical = fn(7878).SEARCH_ROW_TAP_STATE_PADDING;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((marginLeft) => {
  let obj = {
    pressable: null,
    body: { flexDirection: "row", alignItems: "center" },
    labels: { justifyContent: "center", flex: 1 },
    underlayColor: null,
    text: null,
    iconContainer: null,
    extrasContainer: null,
  };
  obj = { paddingHorizontal: 16, paddingVertical };
  obj.pressable = obj;
  obj = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.underlayColor = obj;
  obj.text = { flexShrink: 1 };
  obj.iconContainer = { marginRight: 12 };
  obj.extrasContainer = { marginLeft };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = noop.memo((accessibilityRole) => {
  ({ label, iconWidth, extras, accessible } = accessibilityRole);
  ({ containerStyle, onPress, subLabel, icon, iconContainerStyle, trailing, header } = accessibilityRole);
  if (accessible === undefined) {
    accessible = true;
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  ({ accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, bodyStyle } =
    accessibilityRole);
  if (iconWidth == null) {
    iconWidth = 0;
  }
  const tmpResult = closure_7(iconWidth);
  let obj = {
    accessible,
    accessibilityRole: str,
    accessibilityLabel,
    accessibilityHint,
    accessibilityActions,
    onAccessibilityAction,
    style: null,
    onPress,
    unstable_pressDelay: 130,
    underlayColor: tmpResult.underlayColor.backgroundColor,
    children: null,
  };
  const items = [tmpResult.pressable, containerStyle];
  obj.style = items;
  const items1 = [header, ,];
  obj = { style: null, children: null };
  const items2 = [tmpResult.body, bodyStyle];
  obj.style = items2;
  obj = { style: null, children: icon };
  const items3 = [tmpResult.iconContainer, iconContainerStyle];
  obj.style = items3;
  const items4 = [hasOwnProperty(View, obj), ,];
  const obj1 = { style: tmpResult.labels, children: null };
  let tmp7Result = label;
  if (typeof label === "string") {
    const obj2 = {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmpResult.text,
      children: label,
    };
    tmp7Result = hasOwnProperty(Text_Text.Text, obj2);
  }
  const items5 = [tmp7Result, subLabel];
  obj1.children = items5;
  items4[1] = timestampProducer(View, obj1);
  items4[2] = trailing;
  obj.children = items4;
  items1[1] = timestampProducer(View, obj);
  tmp7Result = null != extras;
  if (tmp7Result) {
    const obj3 = { style: null, children: null };
    const items6 = [tmpResult.extrasContainer];
    obj3.style = items6;
    obj3.children = extras;
    tmp7Result = hasOwnProperty(View, obj3);
  }
  items1[2] = tmp7Result;
  obj.children = items1;
  return timestampProducer(Pressables.PressableHighlight, obj);
});
