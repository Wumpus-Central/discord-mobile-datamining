// === Module 11290: UserProfileStackedActionSheet ===

// Module 11290 (UserProfileStackedActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import Pressables from "Pressables" /* 5207 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5713 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7257 */;
import Form from "Form" /* 8719 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let obj2 = { header: { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 }, headerSpacer: null, list: null, contentContainer: null, divider: null };
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj2.headerSpacer = size;
obj2.list = { flex: 1 };
let obj3 = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.divider = { marginLeft: 64 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.assign({ title: 0, children: 0, onBack: 0 }));
  const tmp2 = closure_6();
  let tmp4Result2 = null != onBack;
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.header, ];
  let str = "center";
  if (tmp4Result2) {
    str = "space-between";
  }
  const obj2 = { style: items, children: null };
  items[1] = { justifyContent: str };
  let tmp4Result = tmp4Result2;
  if (tmp4Result2) {
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj3.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj3.onPress = onBack;
    obj3.children = React4(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
    tmp4Result = React4(Pressables.PressableOpacity, obj3);
  }
  const items1 = [tmp4Result, React4(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result2) {
    const obj4 = { style: tmp2.headerSpacer };
    tmp4Result2 = React4(View, obj4);
  }
  items1[2] = tmp4Result2;
  obj2.children = items1;
  obj.header = hasOwnProperty(View, obj2);
  obj.children = children;
  return React4(Sheet_BottomSheet.BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  data = data.data;
  const renderItem = data.renderItem;
  const merged = Object.assign(data, Object.assign({ data: 0, contentContainerStyle: 0, renderItem: 0 }));
  const tmp2 = closure_6();
  dependencyMap = tmp2;
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.data = data;
  obj.style = tmp2.list;
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return React4(Form.FormDivider, { style: divider.divider });
  };
  const items = [tmp2.contentContainer, , ];
  let num = 0;
  if (obj2.isAndroid()) {
    num = renderItem(576).space.PX_16;
  }
  items[1] = { paddingBottom: renderItem(1612)().bottom + num };
  items[2] = data.contentContainerStyle;
  obj.contentContainerStyle = items;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(data(6732).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
  const merged = Object.assign(renderItem, Object.assign({ contentContainerStyle: 0, renderItem: 0 }));
  const divider = closure_6();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.contentContainerStyle = renderItem.contentContainerStyle;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
  };
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return React4(Form.FormDivider, { style: divider.divider });
  };
  return closure_4(renderItem(6732).BottomSheetSectionList, obj);
};