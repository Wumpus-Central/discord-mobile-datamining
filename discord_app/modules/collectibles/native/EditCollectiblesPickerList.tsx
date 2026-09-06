// === Module 13175: EditCollectiblesPickerList ===

// Module 13175 (EditCollectiblesPickerList)
import Text from "Text" /* 4556 */;
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
let obj = { list: { flex: 1, marginTop: 12 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: null };
obj = { paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
obj[3] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let closure_8 = importAllResult.memo((children) => <closure_5 style={callback().header}>{jsx(Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: arg0.header })}</closure_5>);
const result = require("set").fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

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
  let num;
  const tmp = callback();
  let obj = flag;
  num = 0;
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
      let item = items.forEach((header) => {
        items = header;
        items.push({ type: "header", key: "header-" + header.section, header: header.header });
        const obj = { type: "header", key: "header-" + header.section, header: header.header };
        const obj2 = items(closure_1_1[7]);
        const item = items(closure_1_1[7]).chunk(header.items, items(closure_1_1[5]).ROW_SIZE).forEach((items) => {
          header.push({ type: "row", key: "row-" + header.section + "-" + arg1, items });
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
      let tmp4 = closure_1_6(closure_1_8, obj);
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
    obj[1] = tmp12(c4, { animating: true, size: "large" });
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
    obj[1] = tmp12(sections(selectedSkuId[8]).BottomSheetFlashList, obj);
    tmp17 = obj;
  }
  return <num {...tmp17} />;
};