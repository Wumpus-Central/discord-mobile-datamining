// === Module 13033: EditCollectiblesPickerList ===

// Module 13033 (EditCollectiblesPickerList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13028 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let header;

let closure_4;
let hasOwnProperty;
let obj2;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = { list: { flex: 1, marginTop: 12 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: obj2 };
obj2 = { paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE, paddingTop: 10, paddingBottom: 5 };
let closure_7 = createStyles.createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((header) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  header = header.header;
  const tmp4 = closure_7();
  if (cResult[0] !== header) {
    const tmp7 = jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header });
    cResult[0] = header;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.header) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = <hasOwnProperty style={tmp4.header}>{tmp5}</hasOwnProperty>;
  cResult[2] = tmp4.header;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((header) => {
  header = header.header;
  return <hasOwnProperty style={closure_7().header}>{jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header })}</hasOwnProperty>;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((renderRow) => {
  let closure_3;
  let contentContainerStyle;
  let first;
  let isFetching;
  let sections;
  let selectedSkuId;
  let tmp10;
  let tmp7;
  let obj = selectedSkuId(renderRow[7]);
  const cResult = obj.c(21);
  ({ sections, selectedSkuId } = renderRow);
  renderRow = renderRow.renderRow;
  ({ isFetching, contentContainerStyle } = renderRow);
  let tmp4 = undefined !== isFetching && isFetching;
  const tmp5 = closure_7();
  const tmp6 = _slicedToArray(react.useState(0), 2);
  [tmp7, _slicedToArray] = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(nativeEvent) {
      _slicedToArray(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let num = 0;
  if (tmp7 > 0) {
    const diff = tmp7 - 4 * selectedSkuId(tmp2[5]).GUTTER_SIZE;
    num = diff / selectedSkuId(tmp2[5]).ROW_SIZE;
  }
  if (tmp4) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[1] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[1];
    }
    tmp10 = tmp12;
  } else if (cResult[2] !== sections) {
    const items1 = [];
    react = items1;
    let item = sections.forEach((header) => {
      let obj = { type: "header", key: "header-" + header.section, header: header.header };
      closure_3.push(obj);
      const obj2 = selectedSkuId(renderRow[9]);
      const chunkResult = obj2.chunk(header.items, selectedSkuId(renderRow[5]).ROW_SIZE);
      const item = chunkResult.forEach((items, index) => {
        const obj = { type: "row", key: "row-" + header.section + "-" + index, items };
        closure_3.push(obj);
      });
    });
    cResult[2] = sections;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    react = cResult[3];
  }
  if (cResult[4] === num) {
    if (cResult[5] === renderRow) {
      let tmp13;
      if (cResult[6] === selectedSkuId) {
        tmp13 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor(type) {
            return type.type;
          }
        }
        cResult[8] = O;
      } else {
        class O {
          constructor(type) {
            return type.type;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(key) {
            return key.key;
          }
        }
        cResult[9] = B;
      } else {
        class B {
          constructor(key) {
            return key.key;
          }
        }
      }
      if (tmp4) {
        let tmp19;
        let tmp22;
        class B {
          constructor(key) {
            return key.key;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(key) {
              return key.key;
            }
          }
          const tmp21 = <num animating size="large" />;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        } else {
          class B {
            constructor(key) {
              return key.key;
            }
          }
        }
        if (cResult[11] !== tmp5.loadingContainer) {
          class B {
            constructor(key) {
              return key.key;
            }
          }
          const tmp24 = <closure_5 style={tmp5.loadingContainer}>{tmp19}</closure_5>;
          cResult[11] = tmp5.loadingContainer;
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          class B {
            constructor(key) {
              return key.key;
            }
          }
        }
        return tmp22;
      } else {
        class B {
          constructor(key) {
            return key.key;
          }
        }
        if (contentContainerStyle == null) {
          class B {
            constructor(key) {
              return key.key;
            }
          }
        }
        if (cResult[13] === tmp10) {
          class B {
            constructor(key) {
              return key.key;
            }
          }
        }
        cResult[13] = tmp10;
        cResult[14] = tmp13;
        cResult[15] = selectedSkuId;
        cResult[16] = contentContainerStyle;
        cResult[17] = jsx(selectedSkuId(renderRow[10]).BottomSheetFlashList, { data: tmp10, renderItem: tmp13, getItemType: O, keyExtractor: B, extraData: selectedSkuId, contentContainerStyle, onLayout: first, keyboardShouldPersistTaps: "always" });
        const tmp18 = jsx(selectedSkuId(renderRow[10]).BottomSheetFlashList, { data: tmp10, renderItem: tmp13, getItemType: O, keyExtractor: B, extraData: selectedSkuId, contentContainerStyle, onLayout: first, keyboardShouldPersistTaps: "always" });
      }
    }
  }
  const fn2 = function z(item) {
    let tmp4;
    item = item.item;
    if ("header" === item.type) {
      tmp4 = <closure_8 header={item.header} />;
    } else {
      const obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  };
  cResult[4] = num;
  cResult[5] = renderRow;
  cResult[6] = selectedSkuId;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : ((sections) => {
  let _undefined;
  let c4;
  let tmp17;
  let tmp3;
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
  renderRow(flag.useState(0), 2);
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
        let obj = { type: "header", key: "header-" + header.section, header: header.header };
        items.push(obj);
        const obj2 = items(closure_1_1[9]);
        const chunkResult = obj2.chunk(header.items, items(closure_1_1[5]).ROW_SIZE);
        const item = chunkResult.forEach((items, index) => {
          const obj = { type: "row", key: "row-" + header.section + "-" + index, items };
          items.push(obj);
        });
      });
      return items;
    }
  }, items);
  const callback1 = obj.useCallback((item) => {
    let tmp4;
    item = item.item;
    if ("header" === item.type) {
      tmp4 = <closure_8 header={item.header} />;
    } else {
      const obj = { items: item.items, size: num, selectedSkuId };
      tmp4 = renderRow(obj);
    }
    return tmp4;
  }, items1);
  const callback2 = obj.useCallback((type) => type.type, []);
  let obj2 = { style: null, children: null };
  if (flag) {
    obj2.style = tmp.loadingContainer;
    obj2.children = <c4 animating size="large" />;
    tmp17 = obj2;
  } else {
    obj2.style = tmp.list;
    const BottomSheetFlashList = sections(selectedSkuId[10]).BottomSheetFlashList;
    if (listContent == null) {
      listContent = tmp.listContent;
    }
    obj2.children = <BottomSheetFlashList data={memo} renderItem={callback1} getItemType={callback2} keyExtractor={tmp11} extraData={selectedSkuId} contentContainerStyle={listContent} onLayout={callback} keyboardShouldPersistTaps="always" />;
    tmp17 = obj2;
  }
  return <tmp13 {...tmp17} />;
});
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = tmp4;