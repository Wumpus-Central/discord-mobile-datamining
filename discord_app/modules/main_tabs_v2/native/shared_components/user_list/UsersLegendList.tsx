// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import BottomSheetModal from "../../../../../../_runtime/05230_BottomSheetModal.js";
import FastestListItemTypeDefault from "../../../../fastest_list/FastestListItemType.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function renderBottomSheetScrollComponent(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(BottomSheetModal.BottomSheetScrollView, {});
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4945);
let closure_7 = createStyles.createStyles({ row: { overflow: "hidden" } });
const __initData = {
  code: "function UsersLegendListTsx1(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}",
};
let closure_10 = {
  code: "function UsersLegendListTsx2(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}",
};
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UsersLegendList(renderItem) {
        const cResult = onContentLengthChange(renderItem[7]).c(50);
        ({ insetStart, insetEnd, itemSize, keyExtractor, listHeaderSize, onContentLengthChange } = renderItem);
        ({ onLayout, onScroll } = renderItem);
        renderItem = renderItem.renderItem;
        ({ renderListHeader, renderSectionHeader } = renderItem);
        const sectionHeaderIsSticky = renderItem.sectionHeaderIsSticky;
        ({ sectionHeaderSize, sections, style } = renderItem);
        let num = 0;
        ({ inActionSheet, ref } = renderItem);
        if (undefined !== insetStart) {
          num = insetStart;
        }
        let obj = onContentLengthChange(renderItem[7]);
        const row = sharedValue();
        sectionHeaderIsSticky.useRef(null);
        let obj2 = sectionHeaderIsSticky;
        const tmp5 = sharedValue();
        sharedValue = onContentLengthChange(renderItem[8]).useSharedValue(0);
        if (cResult[0] !== sharedValue) {
          let obj3 = { scrollOffset: sharedValue };
          cResult[0] = sharedValue;
          cResult[1] = obj3;
        }
        let tmpResult = onContentLengthChange(renderItem[8]);
        class J {
          constructor(arg0) {
            result = closure_7.set(renderItem.contentOffset.y);
            if (null != onScroll) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[8]);
              obj1 = { nativeEvent: null };
              obj7 = { contentOffset: null, contentSize: null, layoutMeasurement: null };
              point = { x: null, y: null };
              point.x = renderItem.contentOffset.x;
              point.y = renderItem.contentOffset.y;
              obj7.contentOffset = point;
              size = { width: null, height: null };
              size.width = renderItem.contentSize.width;
              size.height = renderItem.contentSize.height;
              obj7.contentSize = size;
              size1 = { width: null, height: null };
              size1.width = renderItem.layoutMeasurement.width;
              size1.height = renderItem.layoutMeasurement.height;
              obj7.layoutMeasurement = size1;
              obj1.nativeEvent = obj7;
              tmp5 = obj.runOnJS(tmp2)(obj1);
            }
            return;
          }
        }
        const tmpResult2 = onContentLengthChange(renderItem[8]);
        J.__closure = { scrollPosValue: sharedValue, onScroll, runOnJS: onContentLengthChange(renderItem[8]).runOnJS };
        J.__workletHash = 15701235151389;
        J.__initData = __initData;
        tmpResult2.useAnimatedScrollHandler(J);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
          cResult[2] = P;
        } else {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
        }
        const first = renderSectionHeader(obj2.useState(P), 1)[0];
        if (cResult[3] !== listHeaderSize) {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
          cResult[3] = listHeaderSize;
          cResult[4] = tmp13;
        } else {
          class P {
            constructor() {
              obj = onContentLengthChange(renderItem[9]);
              return obj.getWindowDimensions();
            }
          }
          if (cResult[5] === num) {
            class P {
              constructor() {
                obj = onContentLengthChange(renderItem[9]);
                return obj.getWindowDimensions();
              }
            }
          }
          let items = [];
          const items1 = [];
          const items2 = [];
          const items3 = [];
          const _Map = Map;
          const map = new Map();
          let sum = num + tmp12;
          let num7 = 0;
          if (0 < sections.length) {
            class P {
              constructor() {
                obj = onContentLengthChange(renderItem[9]);
                return obj.getWindowDimensions();
              }
            }
            while (true) {
              class P {
                constructor() {
                  obj = onContentLengthChange(renderItem[9]);
                  return obj.getWindowDimensions();
                }
              }
              let tmp22 = num7;
              let tmp23 = sum;
              if (0 !== tmp20) {
                class P {
                  constructor() {
                    obj = onContentLengthChange(renderItem[9]);
                    return obj.getWindowDimensions();
                  }
                }
                let SECTION_HEADER = onScroll(renderItem[10]).SECTION_HEADER;
                let sectionHeaderSizeResult = sectionHeaderSize(num7);
                let _HermesInternal = HermesInternal;
                let result = map.set("" + num7 + ":" + -1, items.length);
                let obj5 = { type: SECTION_HEADER, section: num7, item: -1, key: null };
                let combined;
                if (keyExtractor != null) {
                  class P {
                    constructor() {
                      obj = onContentLengthChange(renderItem[9]);
                      return obj.getWindowDimensions();
                    }
                  }
                }
                if (combined == null) {
                  class P {
                    constructor() {
                      obj = onContentLengthChange(renderItem[9]);
                      return obj.getWindowDimensions();
                    }
                  }
                  let str3 = "";
                  let str4 = ":";
                  let str5 = ":";
                  combined = "" + SECTION_HEADER + ":" + tmp22 + ":" + -1;
                }
                obj5.key = combined;
                let arr = items.push(obj5);
                let arr2 = items1.push(sum);
                let arr3 = items2.push(sectionHeaderSizeResult);
                let sum1 = sum + sectionHeaderSizeResult;
                let num9 = 0;
                tmp23 = sum1;
                if (0 < tmp20) {
                  class P {
                    constructor() {
                      obj = onContentLengthChange(renderItem[9]);
                      return obj.getWindowDimensions();
                    }
                  }
                  while (true) {
                    class P {
                      constructor() {
                        obj = onContentLengthChange(renderItem[9]);
                        return obj.getWindowDimensions();
                      }
                    }
                    let ITEM = onScroll(renderItem[10]).ITEM;
                    let tmp37 = num9;
                    if (typeof itemSize !== "number") {
                      class P {
                        constructor() {
                          obj = onContentLengthChange(renderItem[9]);
                          return obj.getWindowDimensions();
                        }
                      }
                    }
                    let _HermesInternal2 = HermesInternal;
                    let result1 = map.set("" + num7 + ":" + num9, items.length);
                    let obj6 = { type: ITEM, section: num7, item: num9, key: null };
                    let combined1;
                    if (keyExtractor != null) {
                      class P {
                        constructor() {
                          obj = onContentLengthChange(renderItem[9]);
                          return obj.getWindowDimensions();
                        }
                      }
                    }
                    if (combined1 == null) {
                      class P {
                        constructor() {
                          obj = onContentLengthChange(renderItem[9]);
                          return obj.getWindowDimensions();
                        }
                      }
                      let str6 = "";
                      let str7 = ":";
                      let str8 = ":";
                      combined1 = "" + ITEM + ":" + tmp22 + ":" + tmp37;
                    }
                    obj6.key = combined1;
                    let arr4 = items.push(obj6);
                    let arr10 = items1.push(sum1);
                    let arr11 = items2.push(itemSize);
                    sum1 = sum1 + itemSize;
                    num9 = num9 + 1;
                    tmp23 = sum1;
                    if (num9 >= tmp20) {
                      class P {
                        constructor() {
                          obj = onContentLengthChange(renderItem[9]);
                          return obj.getWindowDimensions();
                        }
                      }
                    } else {
                      class P {
                        constructor() {
                          obj = onContentLengthChange(renderItem[9]);
                          return obj.getWindowDimensions();
                        }
                      }
                    }
                  }
                }
              }
              num7 = num7 + 1;
              sum = tmp23;
              if (num7 >= sections.length) {
                class P {
                  constructor() {
                    obj = onContentLengthChange(renderItem[9]);
                    return obj.getWindowDimensions();
                  }
                }
              } else {
                class P {
                  constructor() {
                    obj = onContentLengthChange(renderItem[9]);
                    return obj.getWindowDimensions();
                  }
                }
              }
            }
          }
          const obj7 = {
            listData: items,
            offsets: items1,
            sizes: items2,
            stickyHeaderIndices: items3,
            indexByLocation: map,
          };
          cResult[5] = num;
          cResult[6] = itemSize;
          cResult[7] = keyExtractor;
          cResult[8] = tmp12;
          cResult[9] = sectionHeaderIsSticky;
          cResult[10] = sectionHeaderSize;
          cResult[11] = sections;
          cResult[12] = obj7;
        }
        let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: onContentLengthChange(renderItem[8]).runOnJS };
      }
    : function UsersLegendList(insetStart) {
        let num = insetStart.insetStart;
        if (num === undefined) {
          num = 0;
        }
        let num2 = insetStart.insetEnd;
        if (num2 === undefined) {
          num2 = 0;
        }
        const itemSize = insetStart.itemSize;
        const keyExtractor = insetStart.keyExtractor;
        ({ listHeaderSize, onContentLengthChange } = insetStart);
        const onScroll = insetStart.onScroll;
        const renderItem = insetStart.renderItem;
        const renderListHeader = insetStart.renderListHeader;
        const renderSectionHeader = insetStart.renderSectionHeader;
        const sectionHeaderIsSticky = insetStart.sectionHeaderIsSticky;
        const sectionHeaderSize = insetStart.sectionHeaderSize;
        const sections = insetStart.sections;
        let num3;
        let memo1;
        ({ onLayout, style, ref } = insetStart);
        let tmp = renderListHeader();
        const row = tmp;
        const ref1 = onContentLengthChange.useRef(null);
        const sharedValue = num(itemSize[8]).useSharedValue(0);
        let items = [sharedValue];
        const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
        let obj2 = num(itemSize[8]);
        let tmp3 = num;
        let tmp4 = itemSize;
        class E {
          constructor(arg0) {
            result = closure_14.set(insetStart.contentOffset.y);
            if (null != onScroll) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[8]);
              obj1 = { nativeEvent: null };
              obj7 = { contentOffset: null, contentSize: null, layoutMeasurement: null };
              point = { x: null, y: null };
              point.x = insetStart.contentOffset.x;
              point.y = insetStart.contentOffset.y;
              obj7.contentOffset = point;
              size = { width: null, height: null };
              size.width = insetStart.contentSize.width;
              size.height = insetStart.contentSize.height;
              obj7.contentSize = size;
              size1 = { width: null, height: null };
              size1.width = insetStart.layoutMeasurement.width;
              size1.height = insetStart.layoutMeasurement.height;
              obj7.layoutMeasurement = size1;
              obj1.nativeEvent = obj7;
              tmp5 = obj.runOnJS(tmp2)(obj1);
            }
            return;
          }
        }
        let obj3 = num(itemSize[8]);
        E.__closure = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[8]).runOnJS };
        E.__workletHash = 5898393771710;
        E.__initData = sectionHeaderSize;
        let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[8]).runOnJS };
        if (typeof listHeaderSize === "function") {
          num3 = listHeaderSize();
        } else {
          num3 = listHeaderSize;
          if (listHeaderSize == null) {
            num3 = 0;
          }
        }
        const items1 = [num, itemSize, keyExtractor, num3, sectionHeaderIsSticky, sectionHeaderSize, sections];
        memo1 = obj.useMemo(() => {
          const listData = [];
          const offsets = [];
          const sizes = [];
          const stickyHeaderIndices = [];
          const indexByLocation = new Map();
          let sum = num + num3;
          num = 0;
          if (0 < sections.length) {
            do {
              let tmp3 = sections[num];
              let tmp5 = num;
              let tmp6 = sum;
              if (0 !== tmp3) {
                if (sectionHeaderIsSticky) {
                  let arr = stickyHeaderIndices.push(listData.length);
                }
                let SECTION_HEADER = FastestListItemTypeDefault.SECTION_HEADER;
                let tmp11 = sectionHeaderSize(num);
                let _HermesInternal = HermesInternal;
                let result = indexByLocation.set("" + num + ":" + -1, listData.length);
                let obj = { type: SECTION_HEADER, section: num, item: -1, key: null };
                let combined;
                if (keyExtractor != null) {
                  combined = keyExtractor(SECTION_HEADER, num, -1);
                }
                if (combined == null) {
                  let _HermesInternal2 = HermesInternal;
                  let str = "";
                  let str2 = ":";
                  let str3 = ":";
                  combined = "" + SECTION_HEADER + ":" + tmp5 + ":" + -1;
                }
                obj.key = combined;
                let arr2 = listData.push(obj);
                let arr3 = offsets.push(sum);
                let arr4 = sizes.push(tmp11);
                let sum1 = sum + tmp11;
                num3 = 0;
                tmp6 = sum1;
                if (0 < tmp3) {
                  do {
                    let ITEM = FastestListItemTypeDefault.ITEM;
                    let tmp24 = itemSize;
                    let tmp23 = num3;
                    if (typeof itemSize !== "number") {
                      tmp24 = itemSize(num, num3);
                    }
                    let _HermesInternal3 = HermesInternal;
                    let result1 = indexByLocation.set("" + num + ":" + num3, listData.length);
                    let obj2 = { type: ITEM, section: num, item: num3, key: null };
                    let combined1;
                    if (keyExtractor != null) {
                      combined1 = keyExtractor(ITEM, num, num3);
                    }
                    if (combined1 == null) {
                      let _HermesInternal4 = HermesInternal;
                      let str4 = "";
                      let str5 = ":";
                      let str6 = ":";
                      combined1 = "" + ITEM + ":" + tmp5 + ":" + tmp23;
                    }
                    obj2.key = combined1;
                    let arr11 = listData.push(obj2);
                    let arr12 = offsets.push(sum1);
                    let arr13 = sizes.push(tmp24);
                    sum1 = sum1 + tmp24;
                    num3 = num3 + 1;
                    tmp6 = sum1;
                  } while (num3 < tmp3);
                }
              }
              num = num + 1;
              sum = tmp6;
            } while (num < sections.length);
          }
          return { listData, offsets, sizes, stickyHeaderIndices, indexByLocation };
        }, items1);
        const items2 = [memo1, sectionHeaderIsSticky];
        const imperativeHandle = obj.useImperativeHandle(
          ref,
          () => ({
            scrollToTop() {
              let flag = arg0;
              if (arg0 === undefined) {
                flag = true;
              }
              const current = ref.current;
              if (current != null) {
                const obj = { offset: 0, animated: flag };
                current.scrollToOffset(obj);
              }
            },
            scrollToLocation(paddingStart) {
              ({ section, animated } = paddingStart);
              if (animated === undefined) {
                animated = false;
              }
              num = paddingStart.paddingStart;
              if (num === undefined) {
                num = 0;
              }
              indexByLocation = indexByLocation.indexByLocation;
              ({ offsets, sizes } = indexByLocation);
              value = indexByLocation.get("" + section + ":" + paddingStart.item);
              if (null != value) {
                const _HermesInternal = HermesInternal;
                value2 = indexByLocation.get("" + section + ":" + -1);
                num2 = 0;
                if (sectionHeaderIsSticky) {
                  num2 = 0;
                  if (null != value2) {
                    num2 = sizes[value2];
                  }
                }
                const current = ref.current;
                if (current != null) {
                  const obj = { offset: null, animated: null };
                  const _Math = Math;
                  obj.offset = Math.max(0, offsets[value] - num2 - num);
                  obj.animated = animated;
                  current.scrollToOffset(obj);
                }
              }
            },
          }),
          items2,
        );
        const items3 = [memo1, renderItem, renderSectionHeader, sharedValue, tmp.row];
        const callback = obj.useCallback((arg0) => {
          ({ item, index } = arg0);
          if (item.type === FastestListItemTypeDefault.SECTION_HEADER) {
            const obj2 = { style: null, children: null };
            const obj3 = { height: memo1.sizes[index] };
            obj2.style = obj3;
            obj2.children = renderSectionHeader(item.section, undefined, sharedValue, memo1.offsets[index]);
            let tmp6 = <View style={null}>{null}</View>;
          } else {
            const obj = { style: null, children: null };
            const items = [row.row];
            const obj4 = { height: memo1.sizes[index] };
            items[1] = obj4;
            obj.style = items;
            obj.children = renderItem(item.section, item.item);
            tmp6 = <View style={null}>{null}</View>;
          }
          return tmp6;
        }, items3);
        const callback1 = obj.useCallback((type) => String(type.type), []);
        const items4 = [memo1];
        const callback2 = obj.useCallback((key) => key.key, []);
        const items5 = [renderListHeader];
        const callback3 = obj.useCallback((arg0, arg1) => memo1.sizes[arg1], items4);
        const items6 = [num, num2];
        const memo2 = obj.useMemo(() => {
          let tmp;
          if (renderListHeader != null) {
            tmp = renderListHeader();
          }
          if (tmp == null) {
            tmp = null;
          }
          return tmp;
        }, items5);
        const items7 = [onContentLengthChange];
        const memo3 = obj.useMemo(() => ({ paddingTop: num, paddingBottom: num2 }), items6);
        const callback4 = obj.useCallback((arg0, arg1) => {
          let tmpResult;
          if (onContentLengthChange != null) {
            tmpResult = tmp(arg1);
          }
          return tmpResult;
        }, items7);
        const obj5 = {
          ref: ref1,
          accessibilityRole: "list",
          contentContainerStyle: memo3,
          data: memo1.listData,
          estimatedHeaderSize: num3,
          extraData: callback,
          estimatedListSize: keyExtractor(
            onContentLengthChange.useState(() => num(itemSize[9]).getWindowDimensions()),
            1,
          )[0],
          getFixedItemSize: callback3,
          getItemType: callback1,
          keyboardDismissMode: "on-drag",
          keyboardShouldPersistTaps: "always",
          keyExtractor: callback2,
          ListHeaderComponent: memo2,
          onContentSizeChange: null,
          onLayout: null,
          onScroll: null,
          renderItem: null,
          renderScrollComponent: null,
          sharedValues: null,
          stickyHeaderIndices: null,
          style: null,
        };
        let tmp18;
        if (null != onContentLengthChange) {
          tmp18 = callback4;
        }
        obj5.onContentSizeChange = tmp18;
        obj5.onLayout = onLayout;
        obj5.onScroll = obj3.useAnimatedScrollHandler(E);
        obj5.renderItem = callback;
        let tmp19;
        if (true === insetStart.inActionSheet) {
          tmp19 = renderSectionHeader;
        }
        obj5.renderScrollComponent = tmp19;
        obj5.sharedValues = memo;
        obj5.stickyHeaderIndices = memo1.stickyHeaderIndices;
        obj5.style = style;
        return renderItem(tmp3(tmp4[11]).AnimatedLegendList, obj5);
      },
);
