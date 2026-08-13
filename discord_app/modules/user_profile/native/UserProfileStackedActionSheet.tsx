// discord_app/modules/user_profile/native/UserProfileStackedActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Background } from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: null, headerSpacer: null, list: null, contentContainer: null, divider: null };
createCacheKey = { flexDirection: "row", marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: require("Themes").space.PX_24, height: require("Themes").space.PX_24 };
createCacheKey[2] = { flex: 1 };
let obj1 = { width: require("Themes").space.PX_24, height: require("Themes").space.PX_24 };
createCacheKey[3] = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { marginLeft: 64 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { marginHorizontal: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

export default function UserProfileStackedActionSheet(onBack) {
  let children;
  let title;
  onBack = onBack.onBack;
  ({ title, children } = onBack);
  const merged = Object.assign(onBack, Object.create(null));
  const tmp2 = createCacheKey();
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
    const intl = tmp5(1236).intl;
    obj[1] = intl.string(tmp5(1236).t["13/7kX"]);
    obj[2] = onBack;
    obj[3] = tmp4(tmp5(5314).ArrowLargeLeftIcon, { size: "md" });
    tmp4Result = tmp4(tmp5(4887).PressableOpacity, obj);
  }
  const items1 = [tmp4Result, closure_4(Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result) {
    const obj1 = { style: null };
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
  let dependencyMap;
  const merged = Object.assign(data, Object.create(null));
  const tmp2 = createCacheKey();
  dependencyMap = tmp2;
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.data = data;
  obj.style = tmp2.list;
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return outer1_4(data(_undefined[7]).FormDivider, { style: _undefined.divider });
  };
  const items = [tmp2.contentContainer, , ];
  let num = 0;
  if (obj2.isAndroid()) {
    num = renderItem(712).space.PX_16;
  }
  items[1] = { paddingBottom: renderItem(1628)().bottom + num };
  items[2] = data.contentContainerStyle;
  obj.contentContainerStyle = items;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return closure_4(data(5439).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
  let closure_1;
  const merged = Object.assign(renderItem, Object.create(null));
  closure_1 = createCacheKey();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.contentContainerStyle = renderItem.contentContainerStyle;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, start: 0 === index, end: index === index.section.data.length - 1 });
  };
  obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return outer1_4(renderItem(outer1_2[7]).FormDivider, { style: divider.divider });
  };
  return callback(renderItem(5439).BottomSheetSectionList, obj);
};