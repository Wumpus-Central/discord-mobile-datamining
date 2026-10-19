// === Module 14296: EditCollectiblesPickerList ===

// Module 14296 (EditCollectiblesPickerList)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5195 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4945);
let obj = { list: { flex: 1 }, listContent: { paddingBottom: 88 }, loadingContainer: { paddingVertical: 80, alignItems: "center" }, header: { paddingHorizontal: fn(14291).GUTTER_SIZE, paddingBottom: 5 } };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultHeader(header) {
  const cResult = c.c(5);
  header = header.header;
  const tmp4 = closure_7();
  if (cResult[0] !== header) {
    const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header };
    const tmp7 = jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header });
    cResult[0] = header;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.header) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = <hasOwnProperty style={tmp4.header}>{tmp5}</hasOwnProperty>;
  cResult[2] = tmp4.header;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj3 = { style: tmp4.header, children: tmp5 };
}) : (function DefaultHeader(children) {
  return <hasOwnProperty style={closure_7().header}>{jsx(Text_Text.Heading, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: children.header })}</hasOwnProperty>;
}));
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: fn(14291).GUTTER_SIZE, paddingBottom: 5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = ReactCompilerGating.isReactCompilerEnabled() ? (function EditCollectiblesPickerList(renderRow) {
  const cResult = selectedSkuId(renderRow[7]).c(21);
  ({ sections, selectedSkuId } = renderRow);
  renderRow = renderRow.renderRow;
  const isFetching = renderRow.isFetching;
  let loadingContainer = closure_7();
  let obj = selectedSkuId(renderRow[7]);
  [tmp6, _slicedToArray] = noop.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(nativeEvent) {
      _slicedToArray(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let num = 0;
  if (tmp6 > 0) {
    const diff = tmp6 - 4 * selectedSkuId(tmp2[5]).GUTTER_SIZE;
    num = diff / selectedSkuId(tmp2[5]).ROW_SIZE;
  }
  if (undefined !== isFetching && isFetching) {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[1] = items;
    }
  } else {
    if (cResult[2] !== sections) {
      const items1 = [];
      noop = items1;
      class Z {
        constructor(arg0) {
          item = renderRow.item;
          if ("header" === item.type) {
            tmp5 = jsx;
            tmp6 = closure_8;
            obj1 = { header: null };
            obj1.header = item.header;
            tmp4 = jsx(closure_8, obj1);
          } else {
            tmp = renderRow;
            obj = { items: null, size: null, selectedSkuId: null };
            obj.items = item.items;
            tmp2 = closure_4;
            obj.size = closure_4;
            tmp3 = selectedSkuId;
            obj.selectedSkuId = selectedSkuId;
            tmp4 = renderRow(obj);
          }
          return tmp4;
        }
      }
      cResult[2] = sections;
      cResult[3] = items1;
    } else {
      noop = cResult[3];
    }
    if (cResult[4] === num) {
      if (cResult[5] === renderRow) {
        if (cResult[6] === selectedSkuId) {
          let tmp12 = cResult[7];
        }
        const _Symbol2 = Symbol;
        class Z {
          constructor(arg0) {
            item = renderRow.item;
            if ("header" === item.type) {
              tmp5 = jsx;
              tmp6 = closure_8;
              obj1 = { header: null };
              obj1.header = item.header;
              tmp4 = jsx(closure_8, obj1);
            } else {
              tmp = renderRow;
              obj = { items: null, size: null, selectedSkuId: null };
              obj.items = item.items;
              tmp2 = closure_4;
              obj.size = closure_4;
              tmp3 = selectedSkuId;
              obj.selectedSkuId = selectedSkuId;
              tmp4 = renderRow(obj);
            }
            return tmp4;
          }
        }
        if (tmp13 === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function z(type) {
            return type.type;
          };
          class Z {
            constructor(arg0) {
              item = renderRow.item;
              if ("header" === item.type) {
                tmp5 = jsx;
                tmp6 = closure_8;
                obj1 = { header: null };
                obj1.header = item.header;
                tmp4 = jsx(closure_8, obj1);
              } else {
                tmp = renderRow;
                obj = { items: null, size: null, selectedSkuId: null };
                obj.items = item.items;
                tmp2 = closure_4;
                obj.size = closure_4;
                tmp3 = selectedSkuId;
                obj.selectedSkuId = selectedSkuId;
                tmp4 = renderRow(obj);
              }
              return tmp4;
            }
          }
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              return renderRow.key;
            }
          }
          class Z {
            constructor(arg0) {
              item = renderRow.item;
              if ("header" === item.type) {
                tmp5 = jsx;
                tmp6 = closure_8;
                obj1 = { header: null };
                obj1.header = item.header;
                tmp4 = jsx(closure_8, obj1);
              } else {
                tmp = renderRow;
                obj = { items: null, size: null, selectedSkuId: null };
                obj.items = item.items;
                tmp2 = closure_4;
                obj.size = closure_4;
                tmp3 = selectedSkuId;
                obj.selectedSkuId = selectedSkuId;
                tmp4 = renderRow(obj);
              }
              return tmp4;
            }
          }
        } else {
          class H {
            constructor(arg0) {
              return renderRow.key;
            }
          }
        }
        if (tmp4) {
          class H {
            constructor(arg0) {
              return renderRow.key;
            }
          }
          class Z {
            constructor(arg0) {
              item = renderRow.item;
              if ("header" === item.type) {
                tmp5 = jsx;
                tmp6 = closure_8;
                obj1 = { header: null };
                obj1.header = item.header;
                tmp4 = jsx(closure_8, obj1);
              } else {
                tmp = renderRow;
                obj = { items: null, size: null, selectedSkuId: null };
                obj.items = item.items;
                tmp2 = closure_4;
                obj.size = closure_4;
                tmp3 = selectedSkuId;
                obj.selectedSkuId = selectedSkuId;
                tmp4 = renderRow(obj);
              }
              return tmp4;
            }
          }
          if (cResult[11] !== loadingContainer.loadingContainer) {
            class H {
              constructor(arg0) {
                return renderRow.key;
              }
            }
            class Z {
              constructor(arg0) {
                item = renderRow.item;
                if ("header" === item.type) {
                  tmp5 = jsx;
                  tmp6 = closure_8;
                  obj1 = { header: null };
                  obj1.header = item.header;
                  tmp4 = jsx(closure_8, obj1);
                } else {
                  tmp = renderRow;
                  obj = { items: null, size: null, selectedSkuId: null };
                  obj.items = item.items;
                  tmp2 = closure_4;
                  obj.size = closure_4;
                  tmp3 = selectedSkuId;
                  obj.selectedSkuId = selectedSkuId;
                  tmp4 = renderRow(obj);
                }
                return tmp4;
              }
            }
            tmp24[0] = loadingContainer.loadingContainer;
            tmp24[1] = tmp21;
            const tmp25 = <closure_5 {...tmp24} />;
            loadingContainer = loadingContainer.loadingContainer;
            cResult[11] = loadingContainer;
            cResult[12] = tmp25;
          } else {
            class H {
              constructor(arg0) {
                return renderRow.key;
              }
            }
          }
        } else {
          class H {
            constructor(arg0) {
              return renderRow.key;
            }
          }
          class Z {
            constructor(arg0) {
              item = renderRow.item;
              if ("header" === item.type) {
                tmp5 = jsx;
                tmp6 = closure_8;
                obj1 = { header: null };
                obj1.header = item.header;
                tmp4 = jsx(closure_8, obj1);
              } else {
                tmp = renderRow;
                obj = { items: null, size: null, selectedSkuId: null };
                obj.items = item.items;
                tmp2 = closure_4;
                obj.size = closure_4;
                tmp3 = selectedSkuId;
                obj.selectedSkuId = selectedSkuId;
                tmp4 = renderRow(obj);
              }
              return tmp4;
            }
          }
          tmp18[0] = tmp9;
          tmp18[1] = tmp12;
          tmp18[2] = tmp14;
          tmp18[3] = H;
          tmp18[4] = selectedSkuId;
          tmp18[5] = loadingContainer.listContent;
          tmp18[6] = first;
          const tmp19 = jsx(selectedSkuId(tmp2[10]).BottomSheetFlashList, tmp18);
          cResult[13] = tmp9;
          cResult[14] = tmp12;
          cResult[15] = selectedSkuId;
          cResult[16] = loadingContainer.listContent;
          cResult[17] = tmp19;
        }
      }
    }
    class Z {
      constructor(arg0) {
        item = renderRow.item;
        if ("header" === item.type) {
          tmp5 = jsx;
          tmp6 = closure_8;
          obj1 = { header: null };
          obj1.header = item.header;
          tmp4 = jsx(closure_8, obj1);
        } else {
          tmp = renderRow;
          obj = { items: null, size: null, selectedSkuId: null };
          obj.items = item.items;
          tmp2 = closure_4;
          obj.size = closure_4;
          tmp3 = selectedSkuId;
          obj.selectedSkuId = selectedSkuId;
          tmp4 = renderRow(obj);
        }
        return tmp4;
      }
    }
    cResult[4] = num;
    cResult[5] = renderRow;
    cResult[6] = selectedSkuId;
    cResult[7] = Z;
    tmp12 = Z;
  }
  const tmp5 = _slicedToArray(noop.useState(0), 2);
}) : (function EditCollectiblesPickerList(sections) {
  sections = sections.sections;
  const selectedSkuId = sections.selectedSkuId;
  const renderRow = sections.renderRow;
  let flag = sections.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  c4 = undefined;
  const tmp = closure_7();
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
        const item = items(12).chunk(header.items, items(14291).ROW_SIZE).forEach((items, index) => {
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
      let tmp4 = <closure_8 header={item.header} />;
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
    let tmp16 = obj2;
  } else {
    obj2.style = tmp.list;
    const obj3 = { data: memo, renderItem: callback1, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: tmp.listContent, onLayout: callback, keyboardShouldPersistTaps: "always" };
    obj2.children = jsx(sections(selectedSkuId[10]).BottomSheetFlashList, { data: memo, renderItem: callback1, getItemType: callback2, keyExtractor: tmp11, extraData: selectedSkuId, contentContainerStyle: tmp.listContent, onLayout: callback, keyboardShouldPersistTaps: "always" });
    tmp16 = obj2;
  }
  return <num {...tmp16} />;
});