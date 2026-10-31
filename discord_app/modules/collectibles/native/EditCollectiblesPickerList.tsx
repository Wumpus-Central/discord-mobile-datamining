// === Module 15075: EditCollectiblesPickerList ===

// Module 15075 (EditCollectiblesPickerList)
import Text_Text from "Text/Text" /* 5624 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj = { list: { flex: 1 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: { paddingHorizontal: fn(15070).GUTTER_SIZE, paddingBottom: 5 } };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = noop.memo(function DefaultHeader(children) {
  return timestampProducer(hasOwnProperty, { style: closure_9().header, children: timestampProducer(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: children.header }) });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export function EditCollectiblesPickerList(sections) {
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  const ListHeaderComponent = sections.ListHeaderComponent;
  c4 = undefined;
  const tmp = closure_9();
  let num = 0;
  [tmp3, c4] = renderRow(flag.useState(0), 2);
  const callback = flag.useCallback((nativeEvent) => {
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
      let item = sections.forEach((header) => {
        items = header;
        items.push({ type: "header", key: "header-" + header.section, header: header.header });
        const obj = { type: "header", key: "header-" + header.section, header: header.header };
        const obj2 = items(12);
        const item = items(12).chunk(header.items, items(15070).ROW_SIZE).forEach((items, index) => {
          items.push({ type: "row", key: "row-" + header.section + "-" + index, items });
        });
      });
      return items;
    }
  }, items);
  const callback1 = obj.useCallback((item) => {
    item = item.item;
    if ("header" === item.type) {
      const obj2 = { header: item.header };
      let tmp4 = timestampProducer(closure_10, obj2);
    } else {
      const obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  if (flag) {
    let obj2 = { children: null };
    const items2 = [ListHeaderComponent, ];
    const obj3 = { style: tmp.loadingContainer, children: closure_6(c4, { animating: true, size: "large" }) };
    items2[1] = closure_6(num, obj3);
    obj2.children = items2;
    let tmp16 = closure_8(closure_7, obj2);
  } else {
    const obj4 = { style: tmp.list, children: null };
    const obj5 = { data: memo, renderItem: callback1, ListHeaderComponent, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: tmp.listContent, onLayout: callback, keyboardShouldPersistTaps: "always" };
    obj4.children = closure_6(sections(selectedSkuId[8]).BottomSheetFlashList, obj5);
    tmp16 = closure_6(num, obj4);
  }
  return tmp16;
}