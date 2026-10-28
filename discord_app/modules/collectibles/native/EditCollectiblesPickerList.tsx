// discord_app/modules/collectibles/native/EditCollectiblesPickerList.tsx
import c from "../../../../_runtime/00576_c.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5004);
let obj = {
  list: { flex: 1 },
  listContent: { paddingBottom: 88 },
  loadingContainer: { paddingVertical: 80, alignItems: "center" },
  header: { paddingHorizontal: fn(14754).GUTTER_SIZE, paddingBottom: 5 },
};
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DefaultHeader(header) {
        const cResult = c.c(5);
        header = header.header;
        const tmp4 = closure_9();
        if (cResult[0] !== header) {
          const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: header };
          const tmp7 = timestampProducer(Text_Text.Heading, obj2);
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
        const tmp9 = timestampProducer(hasOwnProperty, { style: tmp4.header, children: tmp5 });
        cResult[2] = tmp4.header;
        cResult[3] = tmp5;
        cResult[4] = tmp9;
        tmp8 = tmp9;
        const obj3 = { style: tmp4.header, children: tmp5 };
      }
    : function DefaultHeader(children) {
        return timestampProducer(hasOwnProperty, {
          style: closure_9().header,
          children: timestampProducer(Text_Text.Heading, {
            variant: "heading-sm/medium",
            color: "mobile-text-heading-primary",
            children: children.header,
          }),
        });
      },
);
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: fn(14754).GUTTER_SIZE, paddingBottom: 5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/EditCollectiblesPickerList.tsx");

export const EditCollectiblesPickerList = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditCollectiblesPickerList(renderRow) {
      const cResult = selectedSkuId(renderRow[7]).c(25);
      ({ sections, selectedSkuId } = renderRow);
      renderRow = renderRow.renderRow;
      ({ isFetching, ListHeaderComponent } = renderRow);
      const tmp5 = closure_9();
      let obj = selectedSkuId(renderRow[7]);
      [tmp7, _slicedToArray] = noop.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(nativeEvent) {
          _slicedToArray(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      let num = 0;
      if (tmp7 > 0) {
        const diff = tmp7 - 4 * selectedSkuId(tmp2[5]).GUTTER_SIZE;
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
          let item = sections.forEach((header) => {
            closure_3.push({ type: "header", key: "header-" + header.section, header: header.header });
            const obj = { type: "header", key: "header-" + header.section, header: header.header };
            const obj2 = selectedSkuId(renderRow[9]);
            const item = selectedSkuId(renderRow[9])
              .chunk(header.items, selectedSkuId(renderRow[5]).ROW_SIZE)
              .forEach((items, index) => {
                closure_3.push({ type: "row", key: "row-" + header.section + "-" + index, items });
              });
          });
          cResult[2] = sections;
          cResult[3] = items1;
        } else {
          noop = cResult[3];
        }
        if (cResult[4] === num) {
          if (cResult[5] === renderRow) {
            if (cResult[6] === selectedSkuId) {
              let tmp14 = cResult[7];
            }
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0) {
                  return renderRow.type;
                }
              }
              cResult[8] = O;
            } else {
              class O {
                constructor(arg0) {
                  return renderRow.type;
                }
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              class D {
                constructor(arg0) {
                  return renderRow.key;
                }
              }
              cResult[9] = D;
            } else {
              class D {
                constructor(arg0) {
                  return renderRow.key;
                }
              }
            }
            if (tmp4) {
              class D {
                constructor(arg0) {
                  return renderRow.key;
                }
              }
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor(arg0) {
                    return renderRow.key;
                  }
                }
                const tmp22 = closure_6(num, { animating: true, size: "large" });
                cResult[10] = tmp22;
                const tmp20 = tmp22;
              } else {
                class D {
                  constructor(arg0) {
                    return renderRow.key;
                  }
                }
              }
              if (cResult[11] !== tmp5.loadingContainer) {
                class D {
                  constructor(arg0) {
                    return renderRow.key;
                  }
                }
                let obj2 = { style: tmp5.loadingContainer, children: tmp20 };
                const tmp25 = closure_6(closure_5, obj2);
                cResult[11] = tmp5.loadingContainer;
                cResult[12] = tmp25;
              } else {
                class D {
                  constructor(arg0) {
                    return renderRow.key;
                  }
                }
              }
              if (cResult[13] === ListHeaderComponent) {
                class D {
                  constructor(arg0) {
                    return renderRow.key;
                  }
                }
              }
              const obj3 = { children: null };
              const items2 = [ListHeaderComponent, tmp23];
              obj3.children = items2;
              const tmp29 = closure_8(closure_7, obj3);
              cResult[13] = ListHeaderComponent;
              cResult[14] = tmp23;
              cResult[15] = tmp29;
            } else {
              class D {
                constructor(arg0) {
                  return renderRow.key;
                }
              }
              const obj4 = {
                data: tmp10,
                renderItem: tmp14,
                ListHeaderComponent,
                getItemType: O,
                keyExtractor: D,
                extraData: selectedSkuId,
                contentContainerStyle: tmp5.listContent,
                onLayout: first,
                keyboardShouldPersistTaps: "always",
              };
              const tmp19 = closure_6(selectedSkuId(tmp2[10]).BottomSheetFlashList, obj4);
              cResult[16] = ListHeaderComponent;
              cResult[17] = tmp10;
              cResult[18] = tmp14;
              cResult[19] = selectedSkuId;
              cResult[20] = tmp5.listContent;
              cResult[21] = tmp19;
            }
          }
        }
        const fn2 = function $(item) {
          item = item.item;
          if ("header" === item.type) {
            const obj2 = { header: item.header };
            let tmp4 = timestampProducer(closure_10, obj2);
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
        tmp14 = fn2;
      }
      const tmp6 = _slicedToArray(noop.useState(0), 2);
    }
  : function EditCollectiblesPickerList(sections) {
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
            const item = items(12)
              .chunk(header.items, items(14754).ROW_SIZE)
              .forEach((items, index) => {
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
        const items2 = [ListHeaderComponent];
        const obj3 = { style: tmp.loadingContainer, children: closure_6(c4, { animating: true, size: "large" }) };
        items2[1] = closure_6(num, obj3);
        obj2.children = items2;
        let tmp16 = closure_8(closure_7, obj2);
      } else {
        const obj4 = { style: tmp.list, children: null };
        const obj5 = {
          data: memo,
          renderItem: callback1,
          ListHeaderComponent,
          getItemType: callback2,
          keyExtractor: tmp11,
          extraData: selectedSkuId,
          contentContainerStyle: tmp.listContent,
          onLayout: callback,
          keyboardShouldPersistTaps: "always",
        };
        obj4.children = closure_6(sections(selectedSkuId[10]).BottomSheetFlashList, obj5);
        tmp16 = closure_6(num, obj4);
      }
      return tmp16;
    };
