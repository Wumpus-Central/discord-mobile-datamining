// discord_app/modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = {
  itemContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    overflow: "hidden",
    height: 64,
    paddingVertical: fn(7878).SEARCH_ROW_TAP_STATE_PADDING,
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
createStyles.avatar = size;
createStyles.innerContainer = { justifyContent: "center", flex: 1 };
const size1 = {
  width: "50%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  marginBottom: 8,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.upperText = size1;
const size2 = {
  justifyContent: "center",
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  height: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.lowerText = size2;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/FormRowPlaceholder.tsx",
);

export default function FormRowPlaceholderItem(style) {
  const tmp = closure_6();
  let obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: null, pointerEvents: "none", children: null };
  const items = [placeholderAnimatedStyle, tmp.itemContainer, style.style];
  obj.style = items;
  obj = { style: tmp.avatar };
  const items1 = [React4(View, obj)];
  const obj1 = { style: tmp.innerContainer, children: null };
  const items2 = [React4(View, { style: tmp.upperText }), React4(View, { style: tmp.lowerText })];
  obj1.children = items2;
  items1[1] = hasOwnProperty(View, obj1);
  obj.children = items1;
  return hasOwnProperty(ReanimatedRexportDefault.View, obj);
}
