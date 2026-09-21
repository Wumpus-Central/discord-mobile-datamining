// discord_app/modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    overflow: "hidden",
    height: 64,
    paddingVertical: fn(8122).SEARCH_ROW_TAP_STATE_PADDING,
    alignItems: "center",
  },
  avatar: null,
  innerContainer: null,
  upperText: null,
  lowerText: null,
};
let size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xl,
  marginRight: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.avatar = size;
obj2.innerContainer = { justifyContent: "center", flex: 1 };
const size1 = {
  width: "50%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  marginBottom: 8,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.upperText = size1;
const size2 = {
  justifyContent: "center",
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.lowerText = size2;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx",
);

export default function FormRowPlaceholderItem(style) {
  const tmp = closure_6();
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj2.style = items;
  const items1 = [React4(View, { style: tmp.avatar })];
  const obj4 = { style: tmp.innerContainer, children: null };
  const items2 = [React4(View, { style: tmp.upperText }), React4(View, { style: tmp.lowerText })];
  obj4.children = items2;
  items1[1] = hasOwnProperty(View, obj4);
  obj2.children = items1;
  return hasOwnProperty(ReanimatedRexportDefault.View, obj2);
}
