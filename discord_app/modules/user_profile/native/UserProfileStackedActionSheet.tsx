// === Module 11151: UserProfileStackedActionSheet ===

// Module 11151 (UserProfileStackedActionSheet)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import Form from "Form" /* 8593 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { header: null, headerSpacer: null, list: null, contentContainer: null, divider: null };
createStyles = { flexDirection: "row", marginHorizontal: nativeDefault.space.PX_16 };
createStyles.header = createStyles;
let size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
createStyles.headerSpacer = size;
createStyles.list = { flex: 1 };
createStyles.contentContainer = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.divider = { marginLeft: 64 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.assign({ title: 0, children: 0, onBack: 0 }));
  const tmp2 = closure_6();
  let tmp4Result = null != onBack;
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.header, ];
  let str = "center";
  if (tmp4Result) {
    str = "space-between";
  }
  obj = { style: items, children: null };
  items[1] = { justifyContent: str };
  if (tmp4Result) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = tmp5(1114).intl;
    obj.accessibilityLabel = intl.string(tmp5(1114).t["13/7kX"]);
    obj.onPress = onBack;
    obj.children = tmp4(tmp5(5628).ArrowLargeLeftIcon, { size: "md" });
    tmp4Result = tmp4(tmp5(5123).PressableOpacity, obj);
  }
  const items1 = [tmp4Result, React4(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result) {
    const obj1 = { style: tmp2.headerSpacer };
    tmp4Result = tmp4(tmp9, obj1);
  }
  items1[2] = tmp4Result;
  obj.children = items1;
  obj.header = hasOwnProperty(View, obj);
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
  items[1] = { paddingBottom: renderItem(1611)().bottom + num };
  items[2] = data.contentContainerStyle;
  obj.contentContainerStyle = items;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(data(6627).BottomSheetFlatList, obj);
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
  return closure_4(renderItem(6627).BottomSheetSectionList, obj);
};