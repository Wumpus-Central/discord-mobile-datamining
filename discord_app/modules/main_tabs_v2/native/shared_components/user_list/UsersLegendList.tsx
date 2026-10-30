// === Module 14368: UsersLegendList ===

// Module 14368 (UsersLegendList)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import BottomSheetModal from "BottomSheetModal" /* 5270 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7226 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({ row: { overflow: "hidden" } });
let closure_9 = { code: "function UsersLegendListTsx1(event){const{scrollPosValue,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){runOnJS(onScroll)({nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default noop.memo(function UsersLegendList(insetStart) {
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
  const sharedValue = num(itemSize[6]).useSharedValue(0);
  let items = [sharedValue];
  const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
  let obj2 = num(itemSize[6]);
  let tmp3 = num;
  let tmp4 = itemSize;
  const fn = function b(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    if (null != onScroll) {
      const obj2 = { nativeEvent: null };
      const obj3 = { contentOffset: null, contentSize: null, layoutMeasurement: null };
      const point = { x: contentOffset.contentOffset.x, y: contentOffset.contentOffset.y };
      obj3.contentOffset = point;
      const size = { width: contentOffset.contentSize.width, height: contentOffset.contentSize.height };
      obj3.contentSize = size;
      const size1 = { width: contentOffset.layoutMeasurement.width, height: contentOffset.layoutMeasurement.height };
      obj3.layoutMeasurement = size1;
      obj2.nativeEvent = obj3;
      ReanimatedRexport.runOnJS(tmp2)(obj2);
    }
  };
  let obj3 = num(itemSize[6]);
  fn.__closure = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[6]).runOnJS };
  fn.__workletHash = 15701235151389;
  fn.__initData = sectionHeaderIsSticky;
  let obj4 = { scrollPosValue: sharedValue, onScroll, runOnJS: num(itemSize[6]).runOnJS };
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
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
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
    }
  }), items2);
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
      const items = [row.row, ];
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
  const obj5 = { ref: ref1, accessibilityRole: "list", contentContainerStyle: memo3, data: memo1.listData, estimatedHeaderSize: num3, extraData: callback, estimatedListSize: keyExtractor(onContentLengthChange.useState(() => num(itemSize[7]).getWindowDimensions()), 1)[0], getFixedItemSize: callback3, getItemType: callback1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", keyExtractor: callback2, ListHeaderComponent: memo2, onContentSizeChange: null, onLayout: null, onScroll: null, renderItem: null, renderScrollComponent: null, sharedValues: null, stickyHeaderIndices: null, style: null };
  let tmp18;
  if (null != onContentLengthChange) {
    tmp18 = callback4;
  }
  obj5.onContentSizeChange = tmp18;
  obj5.onLayout = onLayout;
  obj5.onScroll = obj3.useAnimatedScrollHandler(fn);
  obj5.renderItem = callback;
  let tmp19;
  if (true === insetStart.inActionSheet) {
    tmp19 = renderSectionHeader;
  }
  obj5.renderScrollComponent = tmp19;
  obj5.sharedValues = memo;
  obj5.stickyHeaderIndices = memo1.stickyHeaderIndices;
  obj5.style = style;
  return renderItem(tmp3(tmp4[9]).AnimatedLegendList, obj5);
});