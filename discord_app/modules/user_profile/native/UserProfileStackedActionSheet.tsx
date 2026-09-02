// === Module 9232: UserProfileStackedActionSheet ===

// Module 9232 (UserProfileStackedActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import Background from "Background" /* 5630 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerSpacer: null, list: null, contentContainer: null, divider: null };
createCacheKey = { flexDirection: "row", marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: ThemesDefault.space.PX_24, height: ThemesDefault.space.PX_24 };
createCacheKey[2] = { flex: 1 };
let obj1 = { width: ThemesDefault.space.PX_24, height: ThemesDefault.space.PX_24 };
createCacheKey[3] = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { marginLeft: 64 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.create(null));
  const tmp2 = callback2();
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
    const intl = tmp5(1233).intl;
    obj[1] = intl.string(tmp5(1233).t["13/7kX"]);
    obj[2] = onBack;
    obj[3] = tmp4(tmp5(5507).ArrowLargeLeftIcon, { size: "md" });
    tmp4Result = tmp4(tmp5(5076).PressableOpacity, obj);
  }
  const items1 = [tmp4Result, closure_4(Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result) {
    obj1 = { style: null };
    obj1[0] = tmp2.headerSpacer;
    tmp4Result = tmp4(tmp9, obj1);
  }
  items1[2] = tmp4Result;
  obj[1] = items1;
  obj.header = closure_5(View, obj);
  obj.children = children;
  return closure_4(Background.BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  data = data.data;
  const renderItem = data.renderItem;
  dependencyMap = undefined;
  const merged = Object.assign(data, Object.create(null));
  const tmp2 = callback2();
  dependencyMap = tmp2;
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.data = data;
  obj.style = tmp2.list;
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return closure_1_4(data(divider[7]).FormDivider, { style: divider.divider });
  };
  const items = [tmp2.contentContainer, , ];
  let num = 0;
  if (obj2.isAndroid()) {
    num = renderItem(709).space.PX_16;
  }
  items[1] = { paddingBottom: renderItem(1627)().bottom + num };
  items[2] = data.contentContainerStyle;
  obj.contentContainerStyle = items;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(data(5632).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
  closure_1 = undefined;
  const merged = Object.assign(renderItem, Object.create(null));
  closure_1 = callback2();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.contentContainerStyle = renderItem.contentContainerStyle;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
  };
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return closure_1_4(renderItem(closure_1_2[7]).FormDivider, { style: divider.divider });
  };
  return callback(renderItem(5632).BottomSheetSectionList, obj);
};