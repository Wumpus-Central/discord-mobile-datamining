// discord_app/modules/search/native/components/list/SearchListRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const paddingVertical = fn(8000).SEARCH_ROW_TAP_STATE_PADDING;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles((marginLeft) => {
  const obj = {
    pressable: { paddingHorizontal: 16, paddingVertical },
    body: { flexDirection: "row", alignItems: "center" },
    labels: { justifyContent: "center", flex: 1 },
    underlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
    text: { flexShrink: 1 },
    iconContainer: { marginRight: 12 },
    extrasContainer: { marginLeft },
  };
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
  const obj = {
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
  const obj2 = { style: null, children: null };
  const items2 = [tmpResult.body, bodyStyle];
  obj2.style = items2;
  const obj3 = { style: null, children: icon };
  const items3 = [tmpResult.iconContainer, iconContainerStyle];
  obj3.style = items3;
  const items4 = [hasOwnProperty(View, obj3), ,];
  const obj4 = { style: tmpResult.labels, children: null };
  let tmp7Result = label;
  if (typeof label === "string") {
    const obj5 = {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmpResult.text,
      children: label,
    };
    tmp7Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  const items5 = [tmp7Result, subLabel];
  obj4.children = items5;
  items4[1] = timestampProducer(View, obj4);
  items4[2] = trailing;
  obj2.children = items4;
  items1[1] = timestampProducer(View, obj2);
  let tmp7Result2 = null != extras;
  if (tmp7Result2) {
    const obj6 = { style: null, children: null };
    const items6 = [tmpResult.extrasContainer];
    obj6.style = items6;
    obj6.children = extras;
    tmp7Result2 = hasOwnProperty(View, obj6);
  }
  items1[2] = tmp7Result2;
  obj.children = items1;
  return timestampProducer(Pressables.PressableHighlight, obj);
});
