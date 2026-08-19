// discord_app/modules/user_profile/native/UserProfileStackedActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flexDirection: "row", marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: ThemesDefault.space.PX_24, height: ThemesDefault.space.PX_24 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = { marginLeft: 64 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileStackedActionSheet.tsx");

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
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["13/7kX"]);
    obj[2] = onBack;
    obj[3] = callback(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
    tmp4Result = callback(PressableBase.PressableOpacity, obj);
  }
  const items1 = [tmp4Result, callback(Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), ];
  if (tmp4Result) {
    obj1 = { style: null };
    obj1[0] = tmp2.headerSpacer;
    tmp4Result = callback(View, obj1);
  }
  items1[2] = tmp4Result;
  obj[1] = items1;
  obj.header = callback2(View, obj);
  obj.children = children;
  return callback(Background.BottomSheet, obj);
};
export const UserProfileStackedActionSheetList = function UserProfileStackedActionSheetList(data) {
  data = data.data;
  const renderItem = data.renderItem;
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
    num = renderItem(712).space.PX_16;
  }
  items[1] = { paddingBottom: renderItem(1629)().bottom + num };
  items[2] = data.contentContainerStyle;
  obj.contentContainerStyle = items;
  obj.renderItem = function renderItem(index) {
    index = index.index;
    return renderItem({ item: index.item, index, start: 0 === index, end: index === data.length - 1 });
  };
  return callback(data(6952).BottomSheetFlatList, obj);
};
export const UserProfileStackedActionSheetSectionList = function UserProfileStackedActionSheetSectionList(renderItem) {
  renderItem = renderItem.renderItem;
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
    return closure_1_4(renderItem(dependencyMap[7]).FormDivider, { style: divider.divider });
  };
  return callback(renderItem(6952).BottomSheetSectionList, obj);
};