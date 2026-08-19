// discord_app/modules/collectibles/native/EditCollectiblesPickerList.tsx
import Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
let obj = { paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
obj[3] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let closure_8 = importAllResult.memo((children) => <closure_5 style={callback().header}>{jsx(Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: children.header })}</closure_5>);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = function EditCollectiblesPickerList(sections) {
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  let listContent = sections.contentContainerStyle;
  c4 = undefined;
  const tmp = callback();
  let obj = flag;
  let num = 0;
  [tmp3, c4] = renderRow(flag.useState(0), 2);
  callback = flag.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (tmp3 > 0) {
    const diff = tmp3 - 4 * sections(selectedSkuId[5]).GUTTER_SIZE;
    num = diff / sections(selectedSkuId[5]).ROW_SIZE;
  }
  let items = [sections, flag];
  const items1 = [renderRow, num, selectedSkuId];
  const memo = obj.useMemo(() => {
    let items = [];
    if (flag) {
      return items;
    } else {
      let item = items.forEach((item, index) => {
        items = item;
        items.push({ type: "header", key: "header-" + item.section, header: item.header });
        const obj = { type: "header", key: "header-" + item.section, header: item.header };
        const obj2 = items(selectedSkuId[7]);
        item = items(selectedSkuId[7]).chunk(item.items, items(selectedSkuId[5]).ROW_SIZE).forEach((item, index) => {
          item.push({ type: "row", key: "row-" + item.section + "-" + index, items: item });
        });
      });
      return items;
    }
  }, items);
  const callback1 = obj.useCallback((item) => {
    item = item.item;
    if ("header" === item.type) {
      let obj = { header: null };
      obj[0] = item.header;
      let tmp4 = <closure_1_8 header={null} />;
    } else {
      obj = { items: null, size: null, selectedSkuId: null };
      obj[0] = item.items;
      obj[1] = num;
      obj[2] = selectedSkuId;
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  obj = { style: null, children: null };
  if (flag) {
    obj[0] = tmp.loadingContainer;
    obj[1] = <c4 animating size="large" />;
    let tmp17 = obj;
  } else {
    obj[0] = tmp.list;
    obj = { data: null, renderItem: null, getItemType: null, keyExtractor: null, extraData: null, contentContainerStyle: null, onLayout: null, keyboardShouldPersistTaps: "always" };
    obj[0] = memo;
    obj[1] = callback1;
    obj[2] = callback2;
    obj[3] = tmp11;
    obj[4] = selectedSkuId;
    if (listContent == null) {
      listContent = tmp.listContent;
    }
    obj[5] = listContent;
    obj[6] = callback;
    obj[1] = jsx(sections(selectedSkuId[8]).BottomSheetFlashList, { data: null, renderItem: null, getItemType: null, keyExtractor: null, extraData: null, contentContainerStyle: null, onLayout: null, keyboardShouldPersistTaps: "always" });
    tmp17 = obj;
  }
  return <num {...tmp17} />;
};