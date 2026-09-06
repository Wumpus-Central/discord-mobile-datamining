// === Module 13175: EditCollectiblesPickerList ===

// Module 13175 (EditCollectiblesPickerList)
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { list: { flex: 1, marginTop: 12 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: null };
obj = { paddingHorizontal: fn(13170).GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
obj.header = obj;
let closure_7 = createStyles.createStyles(obj);
let closure_8 = noop.memo((children) => <hasOwnProperty style={closure_7().header}>{jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: arg0.header })}</hasOwnProperty>);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

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
  const tmp = closure_7();
  let obj = flag;
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
        const item = items(12).chunk(header.items, items(13170).ROW_SIZE).forEach((items, index) => {
          items.push({ type: "row", key: "row-" + header.section + "-" + index, items });
        });
      });
      return items;
    }
  }, items);
  const callback1 = obj.useCallback((item) => {
    item = item.item;
    if ("header" === item.type) {
      let obj = { header: item.header };
      let tmp4 = <closure_8 header={item.header} />;
    } else {
      obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  obj = { style: null, children: null };
  if (flag) {
    obj.style = tmp.loadingContainer;
    obj.children = tmp12(c4, { animating: true, size: "large" });
    let tmp17 = obj;
  } else {
    obj.style = tmp.list;
    obj = { data: memo, renderItem: callback1, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: null, onLayout: null, keyboardShouldPersistTaps: "always" };
    if (listContent == null) {
      listContent = tmp.listContent;
    }
    obj.contentContainerStyle = listContent;
    obj.onLayout = callback;
    obj.children = tmp12(sections(selectedSkuId[8]).BottomSheetFlashList, obj);
    tmp17 = obj;
  }
  return <num {...tmp17} />;
};